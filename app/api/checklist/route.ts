// app/api/checklist/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { generateChecklist } from '@/lib/checklist';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { events } from '@/lib/events';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      eventName,
      isCamping,
      isDayTrip,
      isFirstTimer,
      isBudget,
      recaptchaToken,
    } = body;

    console.log('Request body:', body); // Log incoming data

    // Verify required fields
    if (!eventName || recaptchaToken === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get event URL from events configuration
    const eventConfig = Object.values(events).find(event => event.EVENT_NAME === eventName);
    const siteUrl = eventConfig?.SITE_URL;

    // Verify reCAPTCHA token
    console.log('Verifying reCAPTCHA...');
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      console.log('reCAPTCHA verification failed');
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA verification' },
        { status: 400 }
      );
    }

    // Check payment settings
    console.log('Checking payment settings...');
    const paymentSetting = await prisma.paymentSetting.findFirst();
    const requirePayment = paymentSetting?.isEnabled ?? (process.env.ENABLE_PAYMENTS === 'true');
    console.log('Payment required:', requirePayment);

    if (requirePayment) {
      console.log('Creating Stripe session...');
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Festival Packing Checklist - ${eventName}`,
                description: 'Personalized festival packing checklist',
              },
              unit_amount: 299, // $2.99
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.get('origin')}/checklist/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get('origin')}/checklist/cancel`,
        metadata: {
          eventName,
          isCamping: String(isCamping),
          isDayTrip: String(isDayTrip),
          isFirstTimer: String(isFirstTimer),
          isBudget: String(isBudget),
        },
      });

      console.log('Stripe session created:', session.url);
      return NextResponse.json({ url: session.url });
    } else {
      console.log('Generating free checklist...');
      const checklist = await generateChecklist({
        eventName,
        isCamping,
        isDayTrip,
        isFirstTimer,
        isBudget,
        siteUrl,
      });

      console.log('Checklist generated:', checklist);

      // Store the download in database
      await prisma.checklistDownload.create({
        data: {
          eventName,
          downloadUrl: checklist.downloadUrl,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
          isCamping,
          isDayTrip,
          isFirstTimer,
          isBudget,
        },
      });

      console.log('Checklist stored in DB');
      return NextResponse.json(checklist);
    }
  } catch (error) {
    console.error('Detailed error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
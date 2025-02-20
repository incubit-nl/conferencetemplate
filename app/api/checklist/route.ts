import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { generateChecklist } from '@/lib/checklist';
import { verifyRecaptcha } from '@/lib/recaptcha';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const {
      eventName,
      isCamping,
      isDayTrip,
      isFirstTimer,
      isBudget,
      recaptchaToken,
    } = await req.json();

    // Verify reCAPTCHA token
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA verification' },
        { status: 400 }
      );
    }

    // Check if payment is required
    const paymentSetting = await prisma.paymentSetting.findFirst();
    const requirePayment = paymentSetting?.isEnabled ?? (process.env.ENABLE_PAYMENTS === 'true');

    if (requirePayment) {
      // Create Stripe checkout session
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

      return NextResponse.json({ url: session.url });
    } else {
      // Generate checklist without payment
      const checklist = await generateChecklist({
        eventName,
        isCamping,
        isDayTrip,
        isFirstTimer,
        isBudget,
      });

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

      return NextResponse.json(checklist);
    }
  } catch (error) {
    console.error('Error processing checklist request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
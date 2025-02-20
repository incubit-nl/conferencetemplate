import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { generateChecklist } from '@/lib/checklist';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { eventName, isCamping, isDayTrip, isFirstTimer, isBudget } = session.metadata!;

    try {
      const checklist = await generateChecklist({
        eventName,
        isCamping: isCamping === 'true',
        isDayTrip: isDayTrip === 'true',
        isFirstTimer: isFirstTimer === 'true',
        isBudget: isBudget === 'true',
      });

      await prisma.checklistDownload.create({
        data: {
          eventName,
          downloadUrl: checklist.downloadUrl,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
          isCamping: isCamping === 'true',
          isDayTrip: isDayTrip === 'true',
          isFirstTimer: isFirstTimer === 'true',
          isBudget: isBudget === 'true',
          stripeSessionId: session.id,
        },
      });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json(
        { error: 'Failed to process webhook' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
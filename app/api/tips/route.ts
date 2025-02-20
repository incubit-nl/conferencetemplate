import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyRecaptcha } from '@/lib/recaptcha';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { eventName, tip, authorHandle, recaptchaToken } = await req.json();

    // Basic validation
    if (!eventName || !tip) {
      return NextResponse.json(
        { error: 'Event name and tip are required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA verification' },
        { status: 400 }
      );
    }

    // Validate tip length
    if (tip.length > 280) {
      return NextResponse.json(
        { error: 'Tip must be 280 characters or less' },
        { status: 400 }
      );
    }

    const newTip = await prisma.packingTip.create({
      data: {
        eventName,
        tip,
        authorHandle,
        approved: false, // Tips need approval before being shown
      },
    });

    return NextResponse.json(newTip);
  } catch (error) {
    console.error('Error creating tip:', error);
    return NextResponse.json(
      { error: 'Failed to create tip' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const eventName = searchParams.get('eventName');

    const tips = await prisma.packingTip.findMany({
      where: {
        eventName: eventName || undefined,
        approved: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(tips);
  } catch (error) {
    console.error('Error fetching tips:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tips' },
      { status: 500 }
    );
  }
}
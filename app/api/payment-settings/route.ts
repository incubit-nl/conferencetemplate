import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // First try to get from database
    let paymentSetting = await prisma.paymentSetting.findFirst();

    // If no setting exists in database, create one based on env variable
    if (!paymentSetting) {
      paymentSetting = await prisma.paymentSetting.create({
        data: {
          isEnabled: process.env.ENABLE_PAYMENTS === 'true',
        },
      });
    }

    return NextResponse.json({ isEnabled: paymentSetting.isEnabled });
  } catch (error) {
    console.error('Error fetching payment settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment settings' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { isEnabled } = await req.json();

    // Update or create payment setting
    const paymentSetting = await prisma.paymentSetting.upsert({
      where: {
        id: 'default', // Assuming we only have one setting
      },
      update: {
        isEnabled,
      },
      create: {
        id: 'default',
        isEnabled,
      },
    });

    return NextResponse.json(paymentSetting);
  } catch (error) {
    console.error('Error updating payment settings:', error);
    return NextResponse.json(
      { error: 'Failed to update payment settings' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const event = searchParams.get('event');
    const query = searchParams.get('q');

    if (!event || !query) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Get relevant tips based on query
    const tips = await prisma.packingTip.findMany({
      where: {
        eventName: event,
        approved: true,
        OR: [
          { tip: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
      },
      orderBy: {
        relevance_score: 'desc',
      },
      take: 5,
    });

    // Get AI insights
    const insights = await prisma.festivalInsight.findMany({
      where: {
        eventName: event,
        OR: [
          { insight: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
        confidence: { gte: 0.7 }, // Only high-confidence insights
      },
      orderBy: {
        confidence: 'desc',
      },
      take: 3,
    });

    // Extract query context for better responses
    const query_context = insights.map((insight: { insight: any; }) => insight.insight);

    return NextResponse.json({
      tips,
      query_context,
      insights,
    });
  } catch (error) {
    console.error('Error in festival AI:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
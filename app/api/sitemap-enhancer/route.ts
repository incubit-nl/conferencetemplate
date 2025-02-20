import { NextResponse } from 'next/server';
import { events } from '@/lib/events';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const enhancedSitemaps = [];

    for (const [domain, config] of Object.entries(events)) {
      // Get popular queries and insights
      const insights = await prisma.festivalInsight.findMany({
        where: { eventName: config.EVENT_NAME },
        orderBy: { confidence: 'desc' },
        take: 20,
      });

      // Generate dynamic URLs based on insights
      const dynamicUrls = insights.map((insight: { category: string; }) => ({
        url: `https://${domain}/guide/${insight.category.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.9,
      }));

      // Add AI guide pages
      const aiPages = [
        'packing-tips',
        'survival-guide',
        'first-timer',
        'pro-tips',
        'local-info',
      ].map(page => ({
        url: `https://${domain}/ai-guide/${page}`,
        lastmod: new Date().toISOString(),
        changefreq: 'hourly',
        priority: 0.95,
      }));

      enhancedSitemaps.push(...dynamicUrls, ...aiPages);
    }

    return NextResponse.json(enhancedSitemaps);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate enhanced sitemaps' }, { status: 500 });
  }
}
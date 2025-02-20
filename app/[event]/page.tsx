// app/[event]/page.tsx
import { Metadata } from 'next';
import { events } from '@/lib/events';
import { notFound } from 'next/navigation';
import HomePage from '../page';

interface EventPageParams {
  event: string;
}

export async function generateStaticParams() {
  return Object.keys(events).map((domain) => ({
    event: domain.replace(/\./g, '-'),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<EventPageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const eventDomain = resolvedParams.event.replace(/-/g, '.');
  const eventConfig = events[eventDomain];

  if (!eventConfig) {
    return {};
  }

  const eventDate = new Date(eventConfig.EVENT_DATE);
  const year = eventDate.getFullYear();
  const baseTitle = eventConfig.EVENT_NAME.replace(/\s*\d{4}$/, '');
  const title = `${baseTitle} ${year} - Official Festival Guide & Packing List`;

  return {
    title,
    description: `Complete guide for ${eventConfig.EVENT_NAME}. Get your personalized packing list, insider tips, and everything you need to know about ${baseTitle} ${year}. Expert advice from festival veterans!`,
    keywords: [
      baseTitle,
      `${baseTitle} ${year}`,
      // ... rest of keywords
    ].join(', '),
    alternates: {
      canonical: `https://${eventDomain}`,
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<EventPageParams>;
}) {
  const resolvedParams = await params;
  const eventDomain = resolvedParams.event.replace(/-/g, '.');

  if (!events[eventDomain]) {
    notFound();
  }

  // Pass only serializable data to HomePage
  const eventData = {
    name: events[eventDomain].EVENT_NAME,
    date: events[eventDomain].EVENT_DATE,
    location: events[eventDomain].EVENT_LOCATION,
  };

}
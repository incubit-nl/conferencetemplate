import { Metadata } from 'next';
import { events } from '@/lib/events';
import { notFound } from 'next/navigation';
import HomePage from '../page';

// Generate static params for all events
export async function generateStaticParams() {
  return Object.keys(events).map((domain) => ({
    event: domain.replace(/\./g, '-'),
  }));
}

// Dynamic metadata for each event
export async function generateMetadata({ params }: { params: { event: string } }): Promise<Metadata> {
  const eventDomain = params.event.replace(/-/g, '.');
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
      `${baseTitle} festival`,
      `${baseTitle} tickets`,
      `${baseTitle} lineup`,
      `${baseTitle} dates`,
      `${baseTitle} location`,
      `${baseTitle} packing list`,
      `${baseTitle} guide`,
      `${baseTitle} tips`,
      'festival checklist',
      'festival packing',
      'festival guide',
      'festival tips',
      eventConfig.EVENT_LOCATION.split(',')[0],
      year.toString(),
    ].join(', '),
    alternates: {
      canonical: `https://${eventDomain}`,
    },
  };
}

// Event page component
export default function EventPage({ params }: { params: { event: string } }) {
  const eventDomain = params.event.replace(/-/g, '.');
  
  // Validate event exists
  if (!events[eventDomain]) {
    notFound();
  }

  // Reuse the main homepage component
  return <HomePage />;
}
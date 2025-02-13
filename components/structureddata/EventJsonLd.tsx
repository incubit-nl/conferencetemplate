import { Event } from 'schema-dts';
import { ParsedEnvVars } from '@/lib/env';

interface EventJsonLdProps extends ParsedEnvVars {}

export function EventJsonLd(props: EventJsonLdProps) {
  const jsonLd: Event = {
    '@type': 'Event',
    name: props.EVENT_NAME,
    description: props.EVENT_DESCRIPTION,
    startDate: `${props.EVENT_DATE}T${props.EVENT_START_TIME}`,
    endDate: `${props.EVENT_DATE}T${props.EVENT_END_TIME}`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: props.EVENT_LOCATION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: props.EVENT_LOCATION.split(',')[0],
        addressCountry: 'NL'
      }
    },
    image: [
      {
        '@type': 'ImageObject',
        url: props.EVENT_IMAGE_URL,
        width: '1200',
        height: '630'
      }
    ],
    organizer: {
      '@type': 'Organization',
      name: props.EVENT_ORGANIZER,
      url: props.EVENT_ORGANIZER_URL
    },
    offers: {
      '@type': 'Offer',
      price: props.EVENT_PRICE_FROM,
      priceCurrency: props.EVENT_CURRENCY,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      url: props.EVENT_TICKETS_URL
    },
    performer: props.EVENT_SPEAKERS.map(speaker => ({
      '@type': 'Person',
      name: speaker.name,
      jobTitle: speaker.title,
      worksFor: {
        '@type': 'Organization',
        name: speaker.company
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key="event-jsonld"
    />
  );
}
import { Event, WithContext } from 'schema-dts';
import { ParsedEnvVars } from '@/lib/env';

interface EventSchemaProps extends ParsedEnvVars {}

export function EventSchema(props: EventSchemaProps) {
  const schema: WithContext<Event> = {
    '@context': 'https://schema.org',
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
        addressLocality: 'Amsterdam',
        addressCountry: 'NL'
      }
    },
    image: [props.EVENT_IMAGE_URL],
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
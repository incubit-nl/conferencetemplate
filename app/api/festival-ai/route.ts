// Update the metadata generation in layout.tsx
import { getEnvVars } from '@/lib/env';
import { Metadata, Viewport } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const env = await getEnvVars();
  const baseTitle = env.EVENT_NAME.replace(/\s*\d{4}$/, '');
  const year = new Date(env.EVENT_DATE).getFullYear();
  const title = `${baseTitle} ${year}`;
  const shortTitle = baseTitle;
  
  // Format date for metadata
  const eventDate = new Date(env.EVENT_DATE);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What should I pack for ${baseTitle}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Get your personalized packing list for ${baseTitle} using our checklist generator. Essential items include festival tickets, ID, comfortable shoes, water bottle, and weather-appropriate clothing.`
        }
      },
      {
        '@type': 'Question',
        name: `When is ${baseTitle} ${year}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${baseTitle} ${year} takes place on ${formattedDate} at ${env.EVENT_LOCATION}.`
        }
      },
      {
        '@type': 'Question',
        name: `How much are ${baseTitle} tickets?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${baseTitle} tickets start from ${env.EVENT_CURRENCY} ${env.EVENT_PRICE_FROM}. Visit the official ticket page for more information.`
        }
      }
    ]
  };

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: baseTitle,
        item: env.SITE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Festival Guide',
        item: `${env.SITE_URL}/guide`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Packing Checklist',
        item: `${env.SITE_URL}/checklist`
      }
    ]
  };

  return {
    metadataBase: new URL(env.SITE_URL),
    title: {
      default: `${title} - Complete Festival Guide & Packing List`,
      template: `%s | ${shortTitle} ${year}`,
    },
    description: `Everything you need to know about ${title}. Get your personalized festival packing checklist, insider tips, and complete guide. ${formattedDate} at ${env.EVENT_LOCATION}. Official lineup, schedule, and more!`,
    keywords: [
      ...env.EVENT_KEYWORDS.split(',').map(k => k.trim()),
      title,
      baseTitle,
      'festival guide',
      'packing list',
      'checklist',
      'tips',
      'lineup',
      year.toString(),
      env.EVENT_LOCATION.split(',')[0],
      'tickets',
      'schedule',
      'camping',
      'accommodation',
      'transport',
      'parking',
      'food',
      'drinks',
      'facilities',
      'security',
      'rules'
    ],
    authors: [
      { name: env.EVENT_ORGANIZER, url: env.EVENT_ORGANIZER_URL },
      { name: 'Incubit.io', url: 'https://incubit.io' }
    ],
    creator: env.EVENT_ORGANIZER,
    publisher: env.EVENT_ORGANIZER,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: env.SITE_URL,
    },
    openGraph: {
      title: `${title} - Complete Festival Guide`,
      description: `Everything you need for ${title}! Get your personalized packing checklist, insider tips, and complete festival guide. ${formattedDate} at ${env.EVENT_LOCATION}`,
      url: env.SITE_URL,
      siteName: title,
      images: [
        {
          url: env.EVENT_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: env.EVENT_LANGUAGE.toLowerCase(),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Festival Guide & Checklist`,
      description: env.EVENT_SHORT_DESCRIPTION,
      site: env.EVENT_TWITTER_HANDLE,
      creator: '@incubitnl',
      images: [env.EVENT_IMAGE_URL],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: env.GA_MEASUREMENT_ID,
    },
    category: 'event',
    applicationName: shortTitle,
    referrer: 'origin-when-cross-origin',
    other: {
      'og:price:amount': env.EVENT_PRICE_FROM,
      'og:price:currency': env.EVENT_CURRENCY,
      'music:creator': env.EVENT_SPEAKERS.map(s => s.name).join(', '),
      'event:start_time': `${env.EVENT_DATE}T${env.EVENT_START_TIME}`,
      'event:end_time': `${env.EVENT_DATE}T${env.EVENT_END_TIME}`,
      'event:location': env.EVENT_LOCATION,
      'event:organizer': env.EVENT_ORGANIZER,
      'event:organizer_url': env.EVENT_ORGANIZER_URL,
      'event:ticket_url': env.EVENT_TICKETS_URL,
      'event:price': `${env.EVENT_PRICE_FROM} ${env.EVENT_CURRENCY}`,
      'event:currency': env.EVENT_CURRENCY,
      'event:availability': 'InStock',
      'event:status': 'EventScheduled',
      'event:attendance_mode': 'OfflineEventAttendanceMode',
      'event:language': env.EVENT_LANGUAGE,
      'event:category': 'MusicEvent',
      'event:performer': env.EVENT_SPEAKERS.map(s => s.name).join(', '),
      'event:performer_title': env.EVENT_SPEAKERS.map(s => s.title).join(', '),
      'event:performer_company': env.EVENT_SPEAKERS.map(s => s.company).join(', '),
      'event:image': env.EVENT_IMAGE_URL,
      'event:keywords': env.EVENT_KEYWORDS,
      'event:short_description': env.EVENT_SHORT_DESCRIPTION,
      'event:long_description': env.EVENT_DESCRIPTION,
      'event:location_country': 'NL',
    },
  };
}
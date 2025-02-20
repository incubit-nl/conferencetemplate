import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { getEnvVars } from '@/lib/env';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

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

  // Generate schema.org event markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description: env.EVENT_DESCRIPTION,
    startDate: `${env.EVENT_DATE}T${env.EVENT_START_TIME}`,
    endDate: `${env.EVENT_DATE}T${env.EVENT_END_TIME}`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: env.EVENT_LOCATION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: env.EVENT_LOCATION.split(',')[0],
        addressCountry: 'NL'
      }
    },
    image: [
      {
        '@type': 'ImageObject',
        url: env.EVENT_IMAGE_URL,
        width: '1200',
        height: '630'
      }
    ],
    offers: {
      '@type': 'Offer',
      price: env.EVENT_PRICE_FROM,
      priceCurrency: env.EVENT_CURRENCY,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      url: env.EVENT_TICKETS_URL
    },
    organizer: {
      '@type': 'Organization',
      name: env.EVENT_ORGANIZER,
      url: env.EVENT_ORGANIZER_URL
    },
    performer: env.EVENT_SPEAKERS.map(speaker => ({
      '@type': 'Person',
      name: speaker.name,
      jobTitle: speaker.title,
      worksFor: {
        '@type': 'Organization',
        name: speaker.company
      }
    }))
  };
  
  return {
    metadataBase: new URL(env.SITE_URL),
    title: {
      default: title,
      template: `%s | ${shortTitle}`,
    },
    description: `${title} - ${formattedDate} - ${env.EVENT_DESCRIPTION}`,
    keywords: [
      ...env.EVENT_KEYWORDS.split(',').map(k => k.trim()),
      title,
      baseTitle,
      'festival',
      'event',
      'music',
      year.toString(),
      env.EVENT_LOCATION.split(',')[0],
      'tickets',
      'lineup'
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
      title,
      description: env.EVENT_DESCRIPTION,
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
      title,
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = await getEnvVars();
  
  return (
    <html 
      lang={env.EVENT_LANGUAGE.toLowerCase()} 
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1971264696648136"
        crossOrigin="anonymous"></script>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        {env.GA_MEASUREMENT_ID && (
          <>
            <script 
              async 
              src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${env.GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <div className="brutal-border bg-white dark:bg-black p-4 text-center text-sm mt-16">
          <strong>Disclaimer:</strong> This is an unofficial event website created by{' '}
          <a 
            href="https://incubit.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-primary"
          >
            Incubit.io
          </a>
          . We are not affiliated with the event organizers.
        </div>

        <main id="main-content">
          {children}
        </main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
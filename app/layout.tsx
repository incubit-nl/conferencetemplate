import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { getEnvVars } from '@/lib/env';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const env = await getEnvVars();
  
  // Create a clean title without the year
  const baseTitle = env.EVENT_NAME.replace(/\s*\d{4}$/, '');
  const year = new Date(env.EVENT_DATE).getFullYear();
  
  // Construct SEO-friendly title variations
  const title = `${baseTitle} ${year}`;
  const shortTitle = baseTitle;
  
  return {
    metadataBase: new URL(env.SITE_URL),
    title: {
      default: title,
      template: `%s | ${shortTitle}`,
    },
    description: env.EVENT_DESCRIPTION,
    keywords: env.EVENT_KEYWORDS.split(',').map(k => k.trim()),
    authors: [
      { name: env.EVENT_ORGANIZER, url: env.EVENT_ORGANIZER_URL },
      { name: 'Incubit.nl', url: 'https://incubit.nl' }
    ],
    creator: env.EVENT_ORGANIZER,
    publisher: env.EVENT_ORGANIZER,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: title,
      description: env.EVENT_DESCRIPTION,
      images: [
        {
          url: env.EVENT_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url: env.SITE_URL,
      siteName: title,
      locale: env.EVENT_LANGUAGE.toLowerCase(),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: env.EVENT_SHORT_DESCRIPTION,
      site: env.EVENT_TWITTER_HANDLE,
      creator: '@incubitnl',
      images: [env.EVENT_IMAGE_URL],
    },
    alternates: {
      canonical: env.SITE_URL,
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
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const env = await getEnvVars();
  
  return (
    <html lang={env.EVENT_LANGUAGE.toLowerCase()} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {env.GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${env.GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <div className="brutal-border bg-white dark:bg-black p-4 text-center text-sm">
          <strong>Disclaimer:</strong> This is an unofficial event website created by{' '}
          <a href="https://incubit.nl" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Incubit.nl
          </a>
          . We are not affiliated with the event organizers.
        </div>
        {children}
        <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-sm border-t py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm mb-1">
              Website crafted by{' '}
              <a
                href="https://incubit.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                Incubit.nl
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              Leading Dutch Digital Agency | Custom Web Development & Design
            </p>
          </div>
        </footer>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
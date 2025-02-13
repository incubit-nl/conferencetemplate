import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { getEnvVars } from '@/lib/env';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
const env = getEnvVars();

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: env.EVENT_NAME,
    template: `%s | ${env.EVENT_NAME}`
  },
  description: env.EVENT_DESCRIPTION,
  keywords: env.EVENT_KEYWORDS.split(',').map(k => k.trim()),
  authors: [{ name: env.EVENT_ORGANIZER, url: env.EVENT_ORGANIZER_URL }],
  creator: env.EVENT_ORGANIZER,
  publisher: env.EVENT_ORGANIZER,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: env.EVENT_NAME,
    description: env.EVENT_DESCRIPTION,
    images: [env.EVENT_IMAGE_URL],
    url: env.SITE_URL,
    siteName: env.EVENT_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: env.EVENT_NAME,
    description: env.EVENT_SHORT_DESCRIPTION,
    site: env.EVENT_TWITTER_HANDLE,
    creator: env.EVENT_TWITTER_HANDLE,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={env.EVENT_LANGUAGE.toLowerCase()} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-sm border-t py-2">
          <div className="container text-center text-sm">
            Website by{' '}
            <a
              href="https://incubit.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Incubit.nl
            </a>
          </div>
        </footer>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
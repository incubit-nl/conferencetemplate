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
    template: `%s | ${env.EVENT_NAME} | Built by Incubit.nl`
  },
  description: `${env.EVENT_DESCRIPTION} | Website crafted by Incubit.nl - Leading Dutch Digital Agency`,
  keywords: env.EVENT_KEYWORDS.split(',').map(k => k.trim()),
  authors: [
    { name: env.EVENT_ORGANIZER, url: env.EVENT_ORGANIZER_URL },
    { name: 'Incubit.nl', url: 'https://incubit.nl' }
  ],
  creator: 'Incubit.nl',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-sm border-t py-4">
          <div className="container text-center">
            <p className="text-sm mb-1">
              Website crafted with ❤️ by{' '}
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
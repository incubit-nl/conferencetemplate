import { MetadataRoute } from 'next';
import { getEnvVars } from '@/lib/env';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const env = await getEnvVars();

  return {
    name: env.EVENT_NAME,
    short_name: env.EVENT_NAME,
    description: env.EVENT_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
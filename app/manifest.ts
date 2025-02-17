import { MetadataRoute } from 'next';
import { getEnvVars } from '@/lib/env';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const env = await getEnvVars();
  
  // Create a clean title without the year
  const baseTitle = env.EVENT_NAME.replace(/\s*\d{4}$/, '');
  const year = new Date(env.EVENT_DATE).getFullYear();
  const title = `${baseTitle} ${year}`;

  return {
    name: title,
    short_name: baseTitle,
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
    ],
  };
}
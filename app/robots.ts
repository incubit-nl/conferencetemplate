import { MetadataRoute } from 'next';
import { getEnvVars } from '@/lib/env';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const env = await getEnvVars();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/private/',
          '*.json',
          '*.xml'
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: ['/private/', '/api/'],
      }
    ],
    sitemap: `${env.SITE_URL}/sitemap.xml`,
    host: env.SITE_URL,
  };
}
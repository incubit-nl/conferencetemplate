import { MetadataRoute } from 'next';
import { getEnvVars } from '@/lib/env';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const env = await getEnvVars();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: `${env.SITE_URL}/sitemap.xml`,
  };
}
import { MetadataRoute } from 'next';
import { events } from '@/lib/events';

export default async function robots(): Promise<MetadataRoute.Robots> {
  // Get all event domains
  const eventDomains = Object.keys(events);
  const sitemaps: string[] = [];

  // Generate sitemap URLs for each domain
  eventDomains.forEach(domain => {
    sitemaps.push(`https://${domain}/sitemap.xml`);
  });

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/checklist',
          '/tips',
          '/contact',
          '/speakers/*',
          '/schedule/*',
          '/lineup',
          '/tickets',
          '/venue',
          '/about',
          '/faq',
        ],
        disallow: [
          '/api/*',
          '/_next/*',
          '/static/*',
          '/private/*',
          '*.json',
          '*.xml',
          '/admin/*',
          '/dashboard/*',
          '/preview/*',
          '/draft/*',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: ['/private/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: sitemaps,
    host: eventDomains[0], // Set primary domain as host
  };
}
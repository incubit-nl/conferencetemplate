import { MetadataRoute } from 'next';
import { getEnvVars } from '@/lib/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const env = await getEnvVars();
  const baseUrl = env.SITE_URL;
  const lastModified = new Date();

  // Generate dynamic routes based on event data
  const speakerSlugs = env.EVENT_SPEAKERS.map(speaker => 
    speaker.name.toLowerCase().replace(/\s+/g, '-')
  );

  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sponsors`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  ];

  // Add speaker pages to sitemap
  speakerSlugs.forEach(slug => {
    routes.push({
      url: `${baseUrl}/speakers/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  return routes;
}
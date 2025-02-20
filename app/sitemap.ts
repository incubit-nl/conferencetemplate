import { MetadataRoute } from 'next';
import { events } from '@/lib/events';
import { getEnvVars } from '@/lib/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all event configurations
  const eventConfigs = Object.entries(events);
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  // Generate sitemap entries for each event domain
  for (const [domain, config] of eventConfigs) {
    const baseUrl = `https://${domain}`;
    
    // Main pages with dynamic priorities
    const mainPages = [
      { path: '', priority: 1.0 }, // Homepage
      { path: 'checklist', priority: 0.9 },
      { path: 'tips', priority: 0.8 },
      { path: 'contact', priority: 0.7 },
      { path: 'privacy', priority: 0.5 },
    ];

    // Add main pages
    mainPages.forEach(({ path, priority }) => {
      sitemapEntries.push({
        url: `${baseUrl}${path ? `/${path}` : ''}`,
        lastModified,
        changeFrequency: priority > 0.8 ? 'daily' : priority > 0.6 ? 'weekly' : 'monthly',
        priority,
      });
    });

    // Parse event data
    const speakers = typeof config.EVENT_SPEAKERS === 'string' 
      ? JSON.parse(config.EVENT_SPEAKERS)
      : config.EVENT_SPEAKERS;

    const schedule = typeof config.EVENT_SCHEDULE === 'string'
      ? JSON.parse(config.EVENT_SCHEDULE)
      : config.EVENT_SCHEDULE;

    // Add speaker pages
    speakers.forEach((speaker: { name: string; }) => {
      const speakerSlug = speaker.name.toLowerCase().replace(/\s+/g, '-');
      sitemapEntries.push({
        url: `${baseUrl}/speakers/${speakerSlug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    // Add schedule pages
    schedule.forEach((item: any) => {
      const scheduleSlug = item.title.toLowerCase().replace(/\s+/g, '-');
      sitemapEntries.push({
        url: `${baseUrl}/schedule/${scheduleSlug}`,
        lastModified,
        changeFrequency: 'daily',
        priority: 0.8,
      });
    });

    // Add category pages
    ['lineup', 'tickets', 'venue', 'faq', 'about'].forEach(category => {
      sitemapEntries.push({
        url: `${baseUrl}/${category}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  }

  return sitemapEntries;
}
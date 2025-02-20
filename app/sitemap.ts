import { MetadataRoute } from 'next';
import { events } from '@/lib/events';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const eventConfigs = Object.entries(events);
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  // Helper function to create priority based on date proximity
  const calculatePriority = (eventDate: string): number => {
    const now = new Date();
    const event = new Date(eventDate);
    const daysDiff = Math.abs((event.getTime() - now.getTime()) / (1000 * 3600 * 24));
    
    // Higher priority for events happening soon (within 90 days)
    if (daysDiff <= 90) return 1.0;
    // Medium priority for events within 6 months
    if (daysDiff <= 180) return 0.8;
    // Lower priority for events further away
    return 0.6;
  };

  for (const [domain, config] of eventConfigs) {
    const baseUrl = `https://${domain}`;
    const priority = calculatePriority(config.EVENT_DATE);
    
    // Main pages with dynamic priorities
    const mainPages = [
      { path: '', priority: priority }, // Homepage
      { path: 'checklist', priority: Math.min(priority + 0.1, 1.0) }, // Checklist gets slightly higher priority
      { path: 'tips', priority: Math.min(priority + 0.05, 1.0) },
      { path: 'contact', priority: 0.7 },
      { path: 'privacy', priority: 0.5 },
    ];

    // Add main pages
    mainPages.forEach(({ path, priority }) => {
      sitemapEntries.push({
        url: `${baseUrl}${path ? `/${path}` : ''}`,
        lastModified: lastModified.toISOString(),
        changeFrequency: priority > 0.8 ? 'daily' : priority > 0.6 ? 'weekly' : 'monthly',
        priority,
      });
    });

    // Add dynamic content pages
    const speakers = typeof config.EVENT_SPEAKERS === 'string' 
      ? JSON.parse(config.EVENT_SPEAKERS)
      : config.EVENT_SPEAKERS;

    const schedule = typeof config.EVENT_SCHEDULE === 'string'
      ? JSON.parse(config.EVENT_SCHEDULE)
      : config.EVENT_SCHEDULE;

    // Add speaker pages
    speakers.forEach((speaker: { name: string }) => {
      const speakerSlug = speaker.name.toLowerCase().replace(/\s+/g, '-');
      sitemapEntries.push({
        url: `${baseUrl}/speakers/${speakerSlug}`,
        lastModified: lastModified.toISOString(),
        changeFrequency: 'weekly',
        priority: Math.min(priority + 0.05, 1.0),
      });
    });

    // Add schedule pages
    schedule.forEach((item: any) => {
      const scheduleSlug = item.title.toLowerCase().replace(/\s+/g, '-');
      sitemapEntries.push({
        url: `${baseUrl}/schedule/${scheduleSlug}`,
        lastModified: lastModified.toISOString(),
        changeFrequency: 'daily',
        priority: Math.min(priority + 0.05, 1.0),
      });
    });

    // Add category pages
    ['lineup', 'tickets', 'venue', 'faq', 'about'].forEach(category => {
      sitemapEntries.push({
        url: `${baseUrl}/${category}`,
        lastModified: lastModified.toISOString(),
        changeFrequency: 'weekly',
        priority: Math.min(priority - 0.1, 0.9),
      });
    });
  }

  return sitemapEntries;
}
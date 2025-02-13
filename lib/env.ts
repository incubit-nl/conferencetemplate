import { headers } from 'next/headers';
import { events, defaultEvent, EventConfig } from './events';

const requiredEnvVars = [
  'EVENT_NAME',
  'EVENT_DATE',
  'EVENT_LOCATION',
  'EVENT_DESCRIPTION',
  'EVENT_SHORT_DESCRIPTION',
  'EVENT_TICKETS_URL',
  'EVENT_IMAGE_URL',
  'EVENT_TWITTER_HANDLE',
  'EVENT_KEYWORDS',
  'EVENT_ORGANIZER',
  'EVENT_ORGANIZER_URL',
  'SITE_URL',
  'GA_MEASUREMENT_ID',
  'EVENT_START_TIME',
  'EVENT_END_TIME',
  'EVENT_TIMEZONE',
  'EVENT_CAPACITY',
  'EVENT_PRICE_FROM',
  'EVENT_CURRENCY',
  'EVENT_LANGUAGE',
  'EVENT_EMAIL',
  'EVENT_PHONE',
  'EVENT_LINKEDIN_URL',
  'EVENT_TWITTER_URL',
  'EVENT_FACEBOOK_URL',
  'EVENT_SPEAKERS',
  'EVENT_SCHEDULE',
  'EVENT_SPONSORS'
] as const;

export interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  location: string;
}

export interface Sponsor {
  name: string;
  tier: 'platinum' | 'gold' | 'silver';
  logo: string;
}

export interface ParsedEnvVars extends Omit<EventConfig, 'EVENT_SPEAKERS' | 'EVENT_SCHEDULE' | 'EVENT_SPONSORS'> {
  EVENT_SPEAKERS: Speaker[];
  EVENT_SCHEDULE: ScheduleItem[];
  EVENT_SPONSORS: Sponsor[];
}

export async function getEnvVars(): Promise<ParsedEnvVars> {
  // Get the host from the request headers
  const headersList = headers();
  const host = (await headersList).get('host') || '';
  const domain = host.replace(/^www\./, '');

  // Get the configuration for the current domain
  const config = events[domain] || defaultEvent;

  return {
    ...config,
    EVENT_SPEAKERS: JSON.parse(config.EVENT_SPEAKERS),
    EVENT_SCHEDULE: JSON.parse(config.EVENT_SCHEDULE),
    EVENT_SPONSORS: JSON.parse(config.EVENT_SPONSORS),
  };
}
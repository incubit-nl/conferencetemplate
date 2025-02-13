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

type EnvVars = Record<(typeof requiredEnvVars)[number], string>;

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  location: string;
}

interface Sponsor {
  name: string;
  tier: 'platinum' | 'gold' | 'silver';
  logo: string;
}

export interface ParsedEnvVars extends Omit<EnvVars, 'EVENT_SPEAKERS' | 'EVENT_SCHEDULE' | 'EVENT_SPONSORS'> {
  EVENT_SPEAKERS: Speaker[];
  EVENT_SCHEDULE: ScheduleItem[];
  EVENT_SPONSORS: Sponsor[];
}

export function getEnvVars(): ParsedEnvVars {
  const missingVars = requiredEnvVars.filter((key) => !process.env[key]);
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  const rawEnvVars = requiredEnvVars.reduce(
    (acc, key) => ({
      ...acc,
      [key]: process.env[key]!,
    }),
    {} as EnvVars
  );

  return {
    ...rawEnvVars,
    EVENT_SPEAKERS: JSON.parse(rawEnvVars.EVENT_SPEAKERS),
    EVENT_SCHEDULE: JSON.parse(rawEnvVars.EVENT_SCHEDULE),
    EVENT_SPONSORS: JSON.parse(rawEnvVars.EVENT_SPONSORS),
  };
}
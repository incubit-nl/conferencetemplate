import { events, defaultEvent, EventConfig } from './events';

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
  // For static exports, we'll use the default event
  // In a real-world scenario, you would determine the event based on the build-time environment
  const config = defaultEvent;

  return {
    ...config,
    EVENT_SPEAKERS: JSON.parse(config.EVENT_SPEAKERS),
    EVENT_SCHEDULE: JSON.parse(config.EVENT_SCHEDULE),
    EVENT_SPONSORS: JSON.parse(config.EVENT_SPONSORS),
  };
}
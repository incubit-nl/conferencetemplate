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
  // Get the current hostname
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  
  // For development environment, handle localhost
  const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // Get the configuration based on hostname or use default
  let config: EventConfig;
  
  if (isDevelopment) {
    // For development, try to determine the event from the port or path
    // You might want to customize this based on your development setup
    config = defaultEvent;
  } else {
    // For production, use the hostname to determine the event
    config = events[hostname] || defaultEvent;
  }

  return {
    ...config,
    EVENT_SPEAKERS: JSON.parse(config.EVENT_SPEAKERS),
    EVENT_SCHEDULE: JSON.parse(config.EVENT_SCHEDULE),
    EVENT_SPONSORS: JSON.parse(config.EVENT_SPONSORS),
  };
}
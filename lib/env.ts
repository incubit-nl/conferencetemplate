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
    // For development, use default event
    config = defaultEvent;
  } else {
    // For production, try to match the hostname with events
    // Remove 'www.' from hostname if present for matching
    const cleanHostname = hostname.replace(/^www\./, '');
    config = events[cleanHostname] || defaultEvent;
    
    // Log for debugging
    console.log('Current hostname:', hostname);
    console.log('Clean hostname:', cleanHostname);
    console.log('Available events:', Object.keys(events));
    console.log('Selected config:', config.EVENT_NAME);
  }

  // Parse JSON strings into objects
  return {
    ...config,
    EVENT_SPEAKERS: typeof config.EVENT_SPEAKERS === 'string' 
      ? JSON.parse(config.EVENT_SPEAKERS)
      : config.EVENT_SPEAKERS,
    EVENT_SCHEDULE: typeof config.EVENT_SCHEDULE === 'string'
      ? JSON.parse(config.EVENT_SCHEDULE)
      : config.EVENT_SCHEDULE,
    EVENT_SPONSORS: typeof config.EVENT_SPONSORS === 'string'
      ? JSON.parse(config.EVENT_SPONSORS)
      : config.EVENT_SPONSORS,
  };
}
import { events, defaultEvent, EventConfig } from './events';
import { logger } from './logger';

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
  let hostname = '';
  let protocol = '';
  
  if (typeof window !== 'undefined') {
    try {
      // Get the current domain without 'www.' prefix if present
      hostname = window.location.hostname.replace('www.', '');
      protocol = window.location.protocol;
      
      logger.info('URL Information:', {
        fullUrl: window.location.href,
        protocol,
        hostname,
        rawHostname: window.location.hostname
      });
    } catch (error) {
      logger.error('Error getting hostname:', error);
    }
  }

  // For development environment, handle localhost
  const isDevelopment = hostname === 'localhost' || 
                       hostname === '127.0.0.1' || 
                       hostname === '';

  // Get the configuration based on hostname or use default
  let config: EventConfig;
  
  if (isDevelopment) {
    logger.info('Development environment detected, using default configuration');
    config = defaultEvent;
  } else {
    logger.info('Domain Information:', {
      hostname,
      availableDomains: Object.keys(events),
      hasConfiguration: events.hasOwnProperty(hostname)
    });

    // Try to find matching configuration
    config = events[hostname];
    
    if (!config) {
      logger.warn(`No configuration found for ${hostname}, using default configuration`);
      config = defaultEvent;
    } else {
      logger.info(`Found configuration for ${hostname}:`, {
        eventName: config.EVENT_NAME,
        url: `${protocol}//${hostname}`
      });
    }
  }

  // Parse JSON strings into objects
  const parsedConfig = {
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

  logger.info('Final configuration:', {
    eventName: parsedConfig.EVENT_NAME,
    hostname,
    isDevelopment
  });

  return parsedConfig;
}
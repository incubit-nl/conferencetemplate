import { z } from 'zod';

// Schema for event data validation
const eventSchema = z.object({
  EVENT_NAME: z.string(),
  EVENT_DATE: z.string(),
  EVENT_LOCATION: z.string(),
  EVENT_DESCRIPTION: z.string(),
  EVENT_SHORT_DESCRIPTION: z.string(),
  EVENT_TICKETS_URL: z.string(),
  EVENT_IMAGE_URL: z.string(),
  EVENT_TWITTER_HANDLE: z.string(),
  EVENT_KEYWORDS: z.string(),
  EVENT_ORGANIZER: z.string(),
  EVENT_ORGANIZER_URL: z.string(),
  SITE_URL: z.string(),
  GA_MEASUREMENT_ID: z.string(),
  EVENT_START_TIME: z.string(),
  EVENT_END_TIME: z.string(),
  EVENT_TIMEZONE: z.string(),
  EVENT_CAPACITY: z.string(),
  EVENT_PRICE_FROM: z.string(),
  EVENT_CURRENCY: z.string(),
  EVENT_LANGUAGE: z.string(),
  EVENT_EMAIL: z.string(),
  EVENT_PHONE: z.string(),
  EVENT_LINKEDIN_URL: z.string(),
  EVENT_TWITTER_URL: z.string(),
  EVENT_FACEBOOK_URL: z.string(),
  EVENT_SPEAKERS: z.string(),
  EVENT_SCHEDULE: z.string(),
  EVENT_SPONSORS: z.string(),
});

export type EventConfig = z.infer<typeof eventSchema>;

const commonConfig = {
  GA_MEASUREMENT_ID: "G-KEN81FKB6R", // Same GA code for all sites
  EVENT_TIMEZONE: "Europe/Amsterdam",
  EVENT_CURRENCY: "EUR",
  EVENT_LANGUAGE: "English",
};

// Define all events configuration
export const events: Record<string, EventConfig> = {
  'ade2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Amsterdam Dance Event 2025",
    EVENT_DATE: "2025-10-15",
    EVENT_LOCATION: "Various Locations, Amsterdam",
    EVENT_DESCRIPTION: "The world's leading electronic music conference and festival, featuring over 2500 artists and 600 speakers in 200 locations.",
    EVENT_SHORT_DESCRIPTION: "World's biggest electronic music conference & festival",
    EVENT_TICKETS_URL: "https://tickets.ade2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    EVENT_TWITTER_HANDLE: "@ADE_NL",
    EVENT_KEYWORDS: "amsterdam dance event, electronic music, conference, festival, ADE, dance music, netherlands",
    EVENT_ORGANIZER: "Amsterdam Dance Event Foundation",
    EVENT_ORGANIZER_URL: "https://ade2025.nl",
    SITE_URL: "https://ade2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "23:59",
    EVENT_CAPACITY: "400000",
    EVENT_PRICE_FROM: "45",
    EVENT_EMAIL: "info@ade.nl",
    EVENT_PHONE: "+31 20 555 0101",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/amsterdam-dance-event",
    EVENT_TWITTER_URL: "https://twitter.com/ADE_NL",
    EVENT_FACEBOOK_URL: "https://facebook.com/amsterdamdanceevent",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Martin Garrix",
        title: "Headlining Artist",
        company: "STMPD RCRDS",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Nina Kraviz",
        title: "Techno Pioneer",
        company: "трип",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Conference Opening",
        location: "DeLaMar Theater"
      },
      {
        time: "22:00",
        title: "Night Program Starts",
        location: "Various Venues"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "Pioneer DJ",
        tier: "gold",
        logo: "https://example.com/pioneer-logo.png"
      }
    ])
  },
  'awakenings2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Awakenings Festival 2025",
    EVENT_DATE: "2025-06-28",
    EVENT_LOCATION: "Spaarnwoude Resort, Amsterdam",
    EVENT_DESCRIPTION: "The world's largest techno festival returns to Amsterdam for another groundbreaking edition featuring the best techno DJs and producers.",
    EVENT_SHORT_DESCRIPTION: "World's premier techno festival",
    EVENT_TICKETS_URL: "https://tickets.awakenings2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@awakenings",
    EVENT_KEYWORDS: "techno, festival, electronic music, amsterdam, dance, awakenings, underground music",
    EVENT_ORGANIZER: "Awakenings Events",
    EVENT_ORGANIZER_URL: "https://awakenings.nl",
    SITE_URL: "https://awakenings2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "35000",
    EVENT_PRICE_FROM: "89",
    EVENT_EMAIL: "info@awakenings.nl",
    EVENT_PHONE: "+31 20 555 0124",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/awakenings",
    EVENT_TWITTER_URL: "https://twitter.com/awakenings",
    EVENT_FACEBOOK_URL: "https://facebook.com/awakenings",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Adam Beyer",
        title: "Headlining Artist",
        company: "Drumcode",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Charlotte de Witte",
        title: "Headlining Artist",
        company: "KNTXT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Gates Open",
        location: "Main Entrance"
      },
      {
        time: "14:00",
        title: "First Acts Begin",
        location: "All Stages"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Pioneer DJ",
        tier: "platinum",
        logo: "https://example.com/pioneer-logo.png"
      },
      {
        name: "Heineken",
        tier: "gold",
        logo: "https://example.com/heineken-logo.png"
      }
    ])
  },
  'bevrijdingsdag2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Bevrijdingsdag Festival 2025",
    EVENT_DATE: "2025-05-05",
    EVENT_LOCATION: "Multiple Cities, Netherlands",
    EVENT_DESCRIPTION: "Celebrate Dutch liberation with nationwide festivals, music, and cultural events commemorating freedom and democracy.",
    EVENT_SHORT_DESCRIPTION: "Netherlands' freedom celebration festivals",
    EVENT_TICKETS_URL: "https://tickets.bevrijdingsdag2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    EVENT_TWITTER_HANDLE: "@bevrijdingsdag",
    EVENT_KEYWORDS: "bevrijdingsdag, liberation day, netherlands, festival, freedom, celebration, dutch culture",
    EVENT_ORGANIZER: "Nationaal Comité 4 en 5 mei",
    EVENT_ORGANIZER_URL: "https://www.4en5mei.nl",
    SITE_URL: "https://bevrijdingsdag2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "1000000",
    EVENT_PRICE_FROM: "0",
    EVENT_EMAIL: "info@4en5mei.nl",
    EVENT_PHONE: "+31 20 555 0105",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/4en5mei",
    EVENT_TWITTER_URL: "https://twitter.com/4en5mei",
    EVENT_FACEBOOK_URL: "https://facebook.com/4en5mei",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Prime Minister",
        title: "Opening Speaker",
        company: "Dutch Government",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Opening Ceremony",
        location: "Dam Square, Amsterdam"
      },
      {
        time: "13:00",
        title: "Freedom Festivals Begin",
        location: "Multiple Cities"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "vfonds",
        tier: "platinum",
        logo: "https://example.com/vfonds-logo.png"
      }
    ])
  },
  // Continue with more events...
};

// Default event configuration (fallback)
export const defaultEvent = events['ade2025.nl'];

export { defaultEvent }
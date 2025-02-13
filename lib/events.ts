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
  GA_MEASUREMENT_ID: "G-KEN81FKB6R",
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
    EVENT_DESCRIPTION: "The world's leading electronic music conference and festival, featuring over 2500 artists and 600 speakers across 200 locations. Experience cutting-edge music, technology, and industry insights in the heart of Amsterdam.",
    EVENT_SHORT_DESCRIPTION: "World's biggest electronic music conference & festival",
    EVENT_TICKETS_URL: "https://tickets.ade2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    EVENT_TWITTER_HANDLE: "@ADE_NL",
    EVENT_KEYWORDS: "amsterdam dance event, electronic music, conference, festival, ADE, dance music, netherlands, techno, house music, music industry",
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
        title: "Headlining Artist & Label Owner",
        company: "STMPD RCRDS",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Nina Kraviz",
        title: "Techno Pioneer & Label Owner",
        company: "трип",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "David Guetta",
        title: "Grammy Award-Winning Producer",
        company: "What A Music",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
      },
      {
        name: "Charlotte de Witte",
        title: "Techno Artist & Label Owner",
        company: "KNTXT",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Conference Opening Keynote",
        speaker: "Martin Garrix",
        location: "DeLaMar Theater"
      },
      {
        time: "11:30",
        title: "Future of Electronic Music Panel",
        speaker: "Industry Leaders Panel",
        location: "RAI Amsterdam"
      },
      {
        time: "14:00",
        title: "Music Production Masterclass",
        speaker: "David Guetta",
        location: "Studio 80"
      },
      {
        time: "16:00",
        title: "Label Management Workshop",
        speaker: "Charlotte de Witte",
        location: "Felix Meritis"
      },
      {
        time: "20:00",
        title: "ADE Opening Party",
        speaker: "Multiple Artists",
        location: "Ziggo Dome"
      },
      {
        time: "22:00",
        title: "Night Program Begins",
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
        tier: "platinum",
        logo: "https://example.com/pioneer-logo.png"
      },
      {
        name: "Native Instruments",
        tier: "gold",
        logo: "https://example.com/ni-logo.png"
      },
      {
        name: "Ableton",
        tier: "gold",
        logo: "https://example.com/ableton-logo.png"
      },
      {
        name: "Red Bull",
        tier: "silver",
        logo: "https://example.com/redbull-logo.png"
      }
    ])
  },
  'awakenings2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Awakenings Festival 2025",
    EVENT_DATE: "2025-06-28",
    EVENT_LOCATION: "Spaarnwoude Resort, Amsterdam",
    EVENT_DESCRIPTION: "Experience the world's largest outdoor techno festival with 8 stages, featuring over 100 artists across two days. Immerse yourself in cutting-edge sound systems, spectacular production, and the best techno music on the planet.",
    EVENT_SHORT_DESCRIPTION: "World's premier techno festival",
    EVENT_TICKETS_URL: "https://tickets.awakenings2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@awakenings",
    EVENT_KEYWORDS: "techno, festival, electronic music, amsterdam, dance, awakenings, underground music, techno festival, netherlands festival",
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
        title: "Headlining Artist & Drumcode Founder",
        company: "Drumcode",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Charlotte de Witte",
        title: "Headlining Artist & KNTXT Founder",
        company: "KNTXT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Amelie Lens",
        title: "Headlining Artist & Label Owner",
        company: "Exhale",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      },
      {
        name: "Joseph Capriati",
        title: "Headlining Artist",
        company: "Redimension",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Festival Gates Open",
        location: "Main Entrance"
      },
      {
        time: "13:00",
        title: "Opening Ceremony",
        speaker: "Resident DJs",
        location: "Main Stage"
      },
      {
        time: "15:00",
        title: "Joseph Capriati",
        location: "Area V"
      },
      {
        time: "17:00",
        title: "Amelie Lens",
        location: "Area X"
      },
      {
        time: "19:00",
        title: "Charlotte de Witte",
        location: "Main Stage"
      },
      {
        time: "21:00",
        title: "Adam Beyer Closing Set",
        location: "Main Stage"
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
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "d&b audiotechnik",
        tier: "gold",
        logo: "https://example.com/db-logo.png"
      },
      {
        name: "Red Bull",
        tier: "gold",
        logo: "https://example.com/redbull-logo.png"
      }
    ])
  },
  'bevrijdingsdag2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Bevrijdingsdag Festival 2025",
    EVENT_DATE: "2025-05-05",
    EVENT_LOCATION: "Multiple Cities, Netherlands",
    EVENT_DESCRIPTION: "Join the Netherlands' largest freedom celebration with 14 major festivals across the country. Experience live music, cultural performances, and meaningful discussions about freedom, democracy, and peace. A day of reflection, celebration, and unity.",
    EVENT_SHORT_DESCRIPTION: "Netherlands' freedom celebration festivals",
    EVENT_TICKETS_URL: "https://tickets.bevrijdingsdag2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    EVENT_TWITTER_HANDLE: "@bevrijdingsdag",
    EVENT_KEYWORDS: "bevrijdingsdag, liberation day, netherlands, festival, freedom, celebration, dutch culture, peace festival, may 5th",
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
        name: "Mark Rutte",
        title: "Prime Minister",
        company: "Government of the Netherlands",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Ambassadors of Freedom",
        title: "Musical Ambassadors",
        company: "Dutch Music Industry",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Veterans Association",
        title: "Honorary Guests",
        company: "Dutch Veterans Platform",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
      },
      {
        name: "Freedom Lecture Speaker",
        title: "Distinguished Scholar",
        company: "International Peace Institute",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "09:00",
        title: "National Commemoration",
        speaker: "Prime Minister",
        location: "Dam Square, Amsterdam"
      },
      {
        time: "12:00",
        title: "Opening Ceremonies",
        location: "14 Festival Cities"
      },
      {
        time: "13:00",
        title: "Freedom Lectures",
        speaker: "Various Speakers",
        location: "Multiple Venues"
      },
      {
        time: "15:00",
        title: "Ambassadors of Freedom Performances",
        location: "Main Stages"
      },
      {
        time: "17:00",
        title: "Veterans' Stories",
        speaker: "Veterans Association",
        location: "Discussion Tents"
      },
      {
        time: "20:00",
        title: "Evening Concerts",
        location: "All Festival Locations"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "vfonds",
        tier: "platinum",
        logo: "https://example.com/vfonds-logo.png"
      },
      {
        name: "Dutch Government",
        tier: "platinum",
        logo: "https://example.com/govt-logo.png"
      },
      {
        name: "European Union",
        tier: "gold",
        logo: "https://example.com/eu-logo.png"
      },
      {
        name: "Netherlands Ministry of Defense",
        tier: "gold",
        logo: "https://example.com/defense-logo.png"
      },
      {
        name: "Dutch National Railway",
        tier: "silver",
        logo: "https://example.com/ns-logo.png"
      }
    ])
  }
};

// Default event configuration (fallback)
export const defaultEvent = events['ade2025.nl'];
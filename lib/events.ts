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
  },

  'cannabiscup2025.nl': {
    ...commonConfig,
    EVENT_NAME: "High Times Cannabis Cup 2025",
    EVENT_DATE: "2025-11-20",
    EVENT_LOCATION: "RAI Amsterdam",
    EVENT_DESCRIPTION: "The world's leading cannabis industry event returns to Amsterdam for its 38th edition. Experience the latest innovations in cannabis culture, industry insights, and the prestigious cannabis competition that sets global standards.",
    EVENT_SHORT_DESCRIPTION: "World's premier cannabis industry event",
    EVENT_TICKETS_URL: "https://tickets.cannabiscup2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1536819114556-1c5110de2c1d",
    EVENT_TWITTER_HANDLE: "@HighTimesCup",
    EVENT_KEYWORDS: "cannabis cup, marijuana, amsterdam, cannabis industry, high times, netherlands, coffee shops, cannabis culture",
    EVENT_ORGANIZER: "High Times Magazine",
    EVENT_ORGANIZER_URL: "https://hightimes.com",
    SITE_URL: "https://cannabiscup2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "22:00",
    EVENT_CAPACITY: "15000",
    EVENT_PRICE_FROM: "75",
    EVENT_EMAIL: "info@cannabiscup.nl",
    EVENT_PHONE: "+31 20 555 0420",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/high-times",
    EVENT_TWITTER_URL: "https://twitter.com/HIGH_TIMES_Mag",
    EVENT_FACEBOOK_URL: "https://facebook.com/HighTimesMag",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Steve DeAngelo",
        title: "Cannabis Industry Pioneer",
        company: "Harborside Health",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Arjan Roskam",
        title: "Founder",
        company: "Green House Seed Company",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Franco Loja",
        title: "Master Breeder",
        company: "Strain Hunters",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Opening Ceremony",
        location: "Main Hall"
      },
      {
        time: "11:00",
        title: "Industry Keynote",
        speaker: "Steve DeAngelo",
        location: "Conference Room A"
      },
      {
        time: "14:00",
        title: "Cultivation Masterclass",
        speaker: "Arjan Roskam",
        location: "Workshop Area"
      },
      {
        time: "16:00",
        title: "Judging Ceremony",
        location: "Main Stage"
      },
      {
        time: "20:00",
        title: "Awards Presentation",
        location: "Grand Hall"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Greenhouse Seeds",
        tier: "platinum",
        logo: "https://example.com/greenhouse-logo.png"
      },
      {
        name: "Sensi Seeds",
        tier: "platinum",
        logo: "https://example.com/sensi-logo.png"
      },
      {
        name: "Royal Queen Seeds",
        tier: "gold",
        logo: "https://example.com/rqs-logo.png"
      }
    ])
  },

  'damtotdamloop2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Dam tot Damloop 2025",
    EVENT_DATE: "2025-09-21",
    EVENT_LOCATION: "Amsterdam to Zaandam",
    EVENT_DESCRIPTION: "The Netherlands' most iconic running event, covering 10 English miles (16.1 km) from Amsterdam's Dam Square to Zaandam. Join 50,000 runners in this unique city-to-city race through the IJ Tunnel.",
    EVENT_SHORT_DESCRIPTION: "Iconic Amsterdam to Zaandam running event",
    EVENT_TICKETS_URL: "https://tickets.damtotdamloop2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    EVENT_TWITTER_HANDLE: "@damtotdamloop",
    EVENT_KEYWORDS: "running, dam tot dam, amsterdam, zaandam, marathon, sports, netherlands, athletics",
    EVENT_ORGANIZER: "Le Champion",
    EVENT_ORGANIZER_URL: "https://www.lechampion.nl",
    SITE_URL: "https://damtotdamloop2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "17:00",
    EVENT_CAPACITY: "50000",
    EVENT_PRICE_FROM: "25",
    EVENT_EMAIL: "info@damtotdamloop.nl",
    EVENT_PHONE: "+31 20 555 0303",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/le-champion",
    EVENT_TWITTER_URL: "https://twitter.com/damtotdamloop",
    EVENT_FACEBOOK_URL: "https://facebook.com/damtotdamloop",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Eliud Kipchoge",
        title: "Marathon World Record Holder",
        company: "NN Running Team",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Sifan Hassan",
        title: "Olympic Champion",
        company: "Nike Running",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "08:00",
        title: "Race Village Opens",
        location: "Dam Square"
      },
      {
        time: "10:00",
        title: "Elite Women Start",
        location: "Dam Square"
      },
      {
        time: "10:15",
        title: "Elite Men Start",
        location: "Dam Square"
      },
      {
        time: "10:30",
        title: "Mass Start Waves Begin",
        location: "Dam Square"
      },
      {
        time: "12:00",
        title: "First Finishers Expected",
        location: "Zaandam"
      },
      {
        time: "16:00",
        title: "Award Ceremony",
        location: "Zaandam City Center"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "TCS",
        tier: "platinum",
        logo: "https://example.com/tcs-logo.png"
      },
      {
        name: "Nike",
        tier: "platinum",
        logo: "https://example.com/nike-logo.png"
      },
      {
        name: "Gemeente Amsterdam",
        tier: "gold",
        logo: "https://example.com/amsterdam-logo.png"
      },
      {
        name: "Gemeente Zaanstad",
        tier: "gold",
        logo: "https://example.com/zaanstad-logo.png"
      }
    ])
  },

  'dutchdesignweek2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Dutch Design Week 2025",
    EVENT_DATE: "2025-10-18",
    EVENT_LOCATION: "Eindhoven",
    EVENT_DESCRIPTION: "Northern Europe's largest design event presents work and concepts from more than 2,600 designers to more than 350,000 visitors from home and abroad. Experience nine days of design innovation, experiments, and ideas for the future.",
    EVENT_SHORT_DESCRIPTION: "The Netherlands' premier design festival",
    EVENT_TICKETS_URL: "https://tickets.ddw.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5",
    EVENT_TWITTER_HANDLE: "@DDW",
    EVENT_KEYWORDS: "dutch design, design week, eindhoven, innovation, art, technology, creativity, netherlands",
    EVENT_ORGANIZER: "Dutch Design Foundation",
    EVENT_ORGANIZER_URL: "https://www.dutchdesignfoundation.com",
    SITE_URL: "https://dutchdesignweek2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "18:00",
    EVENT_CAPACITY: "350000",
    EVENT_PRICE_FROM: "22",
    EVENT_EMAIL: "info@ddw.nl",
    EVENT_PHONE: "+31 40 296 1150",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/dutch-design-week",
    EVENT_TWITTER_URL: "https://twitter.com/DDW",
    EVENT_FACEBOOK_URL: "https://facebook.com/dutchdesignweek",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Marcel Wanders",
        title: "Designer & Art Director",
        company: "Marcel Wanders Studio",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Iris van Herpen",
        title: "Fashion Designer",
        company: "Iris van Herpen",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Daan Roosegaarde",
        title: "Artist & Innovator",
        company: "Studio Roosegaarde",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Opening Ceremony",
        location: "Klokgebouw"
      },
      {
        time: "11:00",
        title: "Future Design Talk",
        speaker: "Marcel Wanders",
        location: "Design Academy Eindhoven"
      },
      {
        time: "14:00",
        title: "Sustainable Design Workshop",
        speaker: "Daan Roosegaarde",
        location: "Strijp-S"
      },
      {
        time: "16:00",
        title: "Fashion Innovation Presentation",
        speaker: "Iris van Herpen",
        location: "Evoluon"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Philips",
        tier: "platinum",
        logo: "https://example.com/philips-logo.png"
      },
      {
        name: "ING",
        tier: "platinum",
        logo: "https://example.com/ing-logo.png"
      },
      {
        name: "Gemeente Eindhoven",
        tier: "gold",
        logo: "https://example.com/eindhoven-logo.png"
      }
    ])
  },

  'ethdam2025.nl': {
    ...commonConfig,
    EVENT_NAME: "ETHDam 2025",
    EVENT_DATE: "2025-05-15",
    EVENT_LOCATION: "Beurs van Berlage, Amsterdam",
    EVENT_DESCRIPTION: "Amsterdam's premier Ethereum and Web3 conference, bringing together developers, entrepreneurs, and enthusiasts for three days of blockchain innovation, workshops, and networking. Featuring leading voices in decentralized technology.",
    EVENT_SHORT_DESCRIPTION: "Amsterdam's leading Ethereum conference",
    EVENT_TICKETS_URL: "https://tickets.ethdam2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    EVENT_TWITTER_HANDLE: "@ETHDam",
    EVENT_KEYWORDS: "ethereum, blockchain, web3, cryptocurrency, technology, amsterdam, defi, nft",
    EVENT_ORGANIZER: "ETHGlobal",
    EVENT_ORGANIZER_URL: "https://ethglobal.com",
    SITE_URL: "https://ethdam2025.nl",
    EVENT_START_TIME: "09:00",
    EVENT_END_TIME: "18:00",
    EVENT_CAPACITY: "2500",
    EVENT_PRICE_FROM: "299",
    EVENT_EMAIL: "info@ethdam.nl",
    EVENT_PHONE: "+31 20 555 0303",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/ethdam",
    EVENT_TWITTER_URL: "https://twitter.com/ETHDam",
    EVENT_FACEBOOK_URL: "https://facebook.com/ETHDam",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Vitalik Buterin",
        title: "Co-founder",
        company: "Ethereum",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Gavin Wood",
        title: "Founder",
        company: "Polkadot",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Joseph Lubin",
        title: "Founder",
        company: "ConsenSys",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "09:00",
        title: "Registration Opens",
        location: "Main Hall"
      },
      {
        time: "10:00",
        title: "Opening Keynote",
        speaker: "Vitalik Buterin",
        location: "Great Hall"
      },
      {
        time: "11:30",
        title: "DeFi Panel Discussion",
        speaker: "Industry Leaders",
        location: "Track 1"
      },
      {
        time: "14:00",
        title: "Web3 Development Workshop",
        speaker: "Joseph Lubin",
        location: "Workshop Room"
      },
      {
        time: "16:00",
        title: "Future of Blockchain",
        speaker: "Gavin Wood",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Ethereum Foundation",
        tier: "platinum",
        logo: "https://example.com/ethereum-logo.png"
      },
      {
        name: "ConsenSys",
        tier: "platinum",
        logo: "https://example.com/consensys-logo.png"
      },
      {
        name: "Polygon",
        tier: "gold",
        logo: "https://example.com/polygon-logo.png"
      }
    ])
  },

  'grachtenfestival2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Grachtenfestival 2025",
    EVENT_DATE: "2025-08-15",
    EVENT_LOCATION: "Amsterdam Canals",
    EVENT_DESCRIPTION: "A unique classical music festival set along Amsterdam's historic canals, featuring over 250 concerts at iconic locations. Experience world-class performances on boats, in historic buildings, and in hidden gardens throughout the city.",
    EVENT_SHORT_DESCRIPTION: "Amsterdam's classical music festival on the canals",
    EVENT_TICKETS_URL: "https://tickets.grachtenfestival2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1534277621182-d6c604a7c8b6",
    EVENT_TWITTER_HANDLE: "@grachtenfest",
    EVENT_KEYWORDS: "classical music, amsterdam canals, music festival, culture, netherlands, concerts, chamber music",
    EVENT_ORGANIZER: "Grachtenfestival Foundation",
    EVENT_ORGANIZER_URL: "https://www.grachtenfestival.nl",
    SITE_URL: "https://grachtenfestival2025.nl",
    EVENT_START_TIME: "11:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "55000",
    EVENT_PRICE_FROM: "15",
    EVENT_EMAIL: "info@grachtenfestival.nl",
    EVENT_PHONE: "+31 20 421 4542",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/grachtenfestival",
    EVENT_TWITTER_URL: "https://twitter.com/grachtenfest",
    EVENT_FACEBOOK_URL: "https://facebook.com/grachtenfestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Janine Jansen",
        title: "Violinist",
        company: "Royal Concertgebouw Orchestra",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Lucas Jussen",
        title: "Pianist",
        company: "Solo Artist",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "Arthur Jussen",
        title: "Pianist",
        company: "Solo Artist",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "11:00",
        title: "Opening Concert",
        speaker: "Janine Jansen",
        location: "Muziekgebouw aan 't IJ"
      },
      {
        time: "14:00",
        title: "Canal Concert",
        speaker: "Various Artists",
        location: "Prinsengracht"
      },
      {
        time: "16:00",
        title: "Chamber Music",
        speaker: "Jussen Brothers",
        location: "Felix Meritis"
      },
      {
        time: "20:00",
        title: "Evening Concert",
        speaker: "International Ensemble",
        location: "Royal Palace"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "ING Bank",
        tier: "platinum",
        logo: "https://example.com/ing-logo.png"
      },
      {
        name: "Amsterdam Fonds voor de Kunst",
        tier: "platinum",
        logo: "https://example.com/afk-logo.png"
      },
      {
        name: "Gemeente Amsterdam",
        tier: "gold",
        logo: "https://example.com/amsterdam-logo.png"
      }
    ])
  },

  'grandprix2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Dutch Grand Prix 2025",
    EVENT_DATE: "2025-08-24",
    EVENT_LOCATION: "Circuit Zandvoort",
    EVENT_DESCRIPTION: "Experience the thrill of Formula 1 racing at the historic Circuit Zandvoort. Witness the world's best drivers navigate the challenging coastal track, featuring the iconic banked corners and passionate Dutch fans.",
    EVENT_SHORT_DESCRIPTION: "Formula 1 Dutch Grand Prix at Zandvoort",
    EVENT_TICKETS_URL: "https://tickets.grandprix2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
    EVENT_TWITTER_HANDLE: "@DutchGP",
    EVENT_KEYWORDS: "formula 1, f1, dutch grand prix, zandvoort, racing, motorsport, max verstappen, netherlands",
    EVENT_ORGANIZER: "Dutch Grand Prix BV",
    EVENT_ORGANIZER_URL: "https://www.dutchgp.com",
    SITE_URL: "https://grandprix2025.nl",
    EVENT_START_TIME: "08:00",
    EVENT_END_TIME: "18:00",
    EVENT_CAPACITY: "105000",
    EVENT_PRICE_FROM: "185",
    EVENT_EMAIL: "info@dutchgp.com",
    EVENT_PHONE: "+31 23 571 4574",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/dutch-grand-prix",
    EVENT_TWITTER_URL: "https://twitter.com/DutchGP",
    EVENT_FACEBOOK_URL: "https://facebook.com/DutchGP",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Max Verstappen",
        title: "F1 Driver",
        company: "Red Bull Racing",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Jan Lammers",
        title: "Sporting Director",
        company: "Dutch Grand Prix",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "08:00",
        title: "Gates Open",
        location: "Circuit Zandvoort"
      },
      {
        time: "10:00",
        title: "Support Races",
        location: "Main Track"
      },
      {
        time: "13:00",
        title: "Driver's Parade",
        location: "Circuit"
      },
      {
        time: "15:00",
        title: "Dutch Grand Prix Race",
        location: "Circuit Zandvoort"
      },
      {
        time: "17:00",
        title: "Podium Ceremony",
        location: "Main Straight"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "Jumbo",
        tier: "platinum",
        logo: "https://example.com/jumbo-logo.png"
      },
      {
        name: "CM.com",
        tier: "gold",
        logo: "https://example.com/cm-logo.png"
      }
    ])
  },

  'idfa2025.nl': {
    ...commonConfig,
    EVENT_NAME: "International Documentary Film Festival Amsterdam 2025",
    EVENT_DATE: "2025-11-13",
    EVENT_LOCATION: "Various Locations, Amsterdam",
    EVENT_DESCRIPTION: "The world's largest documentary film festival showcasing over 300 creative documentaries and interactive projects. Experience groundbreaking storytelling, meet filmmakers, and explore the power of non-fiction cinema.",
    EVENT_SHORT_DESCRIPTION: "World's leading documentary film festival",
    EVENT_TICKETS_URL: "https://tickets.idfa2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    EVENT_TWITTER_HANDLE: "@IDFA",
    EVENT_KEYWORDS: "documentary, film festival, cinema, amsterdam, international film, non-fiction, storytelling",
    EVENT_ORGANIZER: "IDFA Foundation",
    EVENT_ORGANIZER_URL: "https://www.idfa.nl",
    SITE_URL: "https://idfa2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "295000",
    EVENT_PRICE_FROM: "12",
    EVENT_EMAIL: "info@idfa.nl",
    EVENT_PHONE: "+31 20 627 3329",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/idfa",
    EVENT_TWITTER_URL: "https://twitter.com/IDFA",
    EVENT_FACEBOOK_URL: "https://facebook.com/IDFApage",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Werner Herzog",
        title: "Documentary Filmmaker",
        company: "Werner Herzog Film",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Orwa Nyrabia",
        title: "Artistic Director",
        company: "IDFA",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Opening Film",
        location: "Royal Theater Tuschinski"
      },
      {
        time: "13:00",
        title: "Masterclass",
        speaker: "Werner Herzog",
        location: "De Balie"
      },
      {
        time: "15:00",
        title: "Competition Screenings",
        location: "Various Venues"
      },
      {
        time: "19:00",
        title: "DocLab Interactive Exhibition",
        location: "Eye Filmmuseum"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Gemeente Amsterdam",
        tier: "platinum",
        logo: "https://example.com/amsterdam-logo.png"
      },
      {
        name: "BankGiro Loterij",
        tier: "platinum",
        logo: "https://example.com/bankgiro-logo.png"
      },
      {
        name: "VPRO",
        tier: "gold",
        logo: "https://example.com/vpro-logo.png"
      }
    ])
  },

  'lowlands2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Lowlands 2025",
    EVENT_DATE: "2025-08-15",
    EVENT_LOCATION: "Walibi Holland, Biddinghuizen",
    EVENT_DESCRIPTION: "A Campingflight to Lowlands Paradise - three days of music, arts, comedy, film, theatre, and science. Experience over 250 acts across 12 stages, camping under the stars with 60,000 fellow festival-goers.",
    EVENT_SHORT_DESCRIPTION: "Netherlands' legendary music & arts festival",
    EVENT_TICKETS_URL: "https://tickets.lowlands2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    EVENT_TWITTER_HANDLE: "@Lowlands",
    EVENT_KEYWORDS: "lowlands, music festival, camping, arts, culture, netherlands, live music, summer festival",
    EVENT_ORGANIZER: "Mojo Concerts",
    EVENT_ORGANIZER_URL: "https://www.mojo.nl",
    SITE_URL: "https://lowlands2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:59",
    EVENT_CAPACITY: "60000",
    EVENT_PRICE_FROM: "245",
    EVENT_EMAIL: "info@lowlands.nl",
    EVENT_PHONE: "+31 35 621 8000",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/lowlands-festival",
    EVENT_TWITTER_URL: "https://twitter.com/Lowlands",
    EVENT_FACEBOOK_URL: "https://facebook.com/LowlandsFestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Arctic Monkeys",
        title: "Headlining Band",
        company: "Domino Records",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Stromae",
        title: "Headlining Artist",
        company: "Mosaert",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      {
        name: "The Chemical Brothers",
        title: "Electronic Music Duo",
        company: "Virgin Records",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
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
      },
      {
        time: "19:00",
        title: "Stromae",
        location: "Alpha Stage"
      },
      {
        time: "21:30",
        title: "Arctic Monkeys",
        location: "Alpha Stage"
      },
      {
        time: "23:00",
        title: "The Chemical Brothers",
        location: "Bravo Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "ING",
        tier: "platinum",
        logo: "https://example.com/ing-logo.png"
      },
      {
        name: "Red Bull",
        tier: "gold",
        logo: "https://example.com/redbull-logo.png"
      }
    ])
  },

  'milkshakefestival2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Milkshake Festival 2025",
    EVENT_DATE: "2025-07-26",
    EVENT_LOCATION: "Westerpark, Amsterdam",
    EVENT_DESCRIPTION: "A celebration of diversity and inclusivity through music, art, and performance. Experience nine unique stages, spectacular shows, and a vibrant atmosphere where everyone is welcome to be themselves.",
    EVENT_SHORT_DESCRIPTION: "Amsterdam's most inclusive music festival",
    EVENT_TICKETS_URL: "https://tickets.milkshakefestival2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    EVENT_TWITTER_HANDLE: "@MilkshakeFest",
    EVENT_KEYWORDS: "milkshake festival, lgbtq+, music, dance, amsterdam, diversity, inclusion, performance art",
    EVENT_ORGANIZER: "AIR Events",
    EVENT_ORGANIZER_URL: "https://www.air.nl",
    SITE_URL: "https://milkshakefestival2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "15000",
    EVENT_PRICE_FROM: "49",
    EVENT_EMAIL: "info@milkshakefestival.nl",
    EVENT_PHONE: "+31 20 555 0303",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/milkshake-festival",
    EVENT_TWITTER_URL: "https://twitter.com/MilkshakeFest",
    EVENT_FACEBOOK_URL: "https://facebook.com/MilkshakeFestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "RuPaul",
        title: "Special Guest Performer",
        company: "World of Wonder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Honey Dijon",
        title: "DJ & Producer",
        company: "Classic Music Company",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Festival Opens",
        location: "Westerpark"
      },
      {
        time: "14:00",
        title: "Drag Extravaganza",
        location: "Main Stage"
      },
      {
        time: "16:00",
        title: "Honey Dijon Set",
        location: "Dance Temple"
      },
      {
        time: "20:00",
        title: "RuPaul Performance",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Absolut",
        tier: "platinum",
        logo: "https://example.com/absolut-logo.png"
      },
      {
        name: "MAC Cosmetics",
        tier: "platinum",
        logo: "https://example.com/mac-logo.png"
      },
      {
        name: "NYX Professional Makeup",
        tier: "gold",
        logo: "https://example.com/nyx-logo.png"
      }
    ])
  },

  'northseajazz2025.nl': {
    ...commonConfig,
    EVENT_NAME: "North Sea Jazz Festival 2025",
    EVENT_DATE: "2025-07-12",
    EVENT_LOCATION: "Rotterdam Ahoy",
    EVENT_DESCRIPTION: "The world's largest indoor jazz festival, featuring over 1,000 artists across 15 stages. Experience the best in jazz, blues, funk, soul, and world music in a three-day celebration of musical excellence.",
    EVENT_SHORT_DESCRIPTION: "World's premier jazz festival",
    EVENT_TICKETS_URL: "https://tickets.northseajazz2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
    EVENT_TWITTER_HANDLE: "@NorthSeaJazz",
    EVENT_KEYWORDS: "jazz, music festival, rotterdam, blues, soul, funk, world music, concerts",
    EVENT_ORGANIZER: "Mojo Concerts",
    EVENT_ORGANIZER_URL: "https://www.northseajazz.com",
    SITE_URL: "https://northseajazz2025.nl",
    EVENT_START_TIME: "16:30",
    EVENT_END_TIME: "01:30",
    EVENT_CAPACITY: "70000",
    EVENT_PRICE_FROM: "89",
    EVENT_EMAIL: "info@northseajazz.nl",
    EVENT_PHONE: "+31 10 293 3300",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/north-sea-jazz-festival",
    EVENT_TWITTER_URL: "https://twitter.com/NorthSeaJazz",
    EVENT_FACEBOOK_URL: "https://facebook.com/northseajazz",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Herbie Hancock",
        title: "Jazz Legend",
        company: "Solo Artist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Gregory Porter",
        title: "Jazz Vocalist",
        company: "Blue Note Records",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "16:30",
        title: "Festival Opens",
        location: "Rotterdam Ahoy"
      },
      {
        time: "18:00",
        title: "Gregory Porter",
        location: "Maas Stage"
      },
      {
        time: "20:30",
        title: "Herbie Hancock",
        location: "Hudson Stage"
      },
      {
        time: "23:00",
        title: "Late Night Jazz Session",
        location: "Congo Square"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "NN Group",
        tier: "platinum",
        logo: "https://example.com/nn-logo.png"
      },
      {
        name: "Port of Rotterdam",
        tier: "platinum",
        logo: "https://example.com/por-logo.png"
      },
      {
        name: "Gemeente Rotterdam",
        tier: "gold",
        logo: "https://example.com/rotterdam-logo.png"
      }
    ])
  },

  'pinkpop2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Pinkpop 2025",
    EVENT_DATE: "2025-06-07",
    EVENT_LOCATION: "Megaland, Landgraaf",
    EVENT_DESCRIPTION: "The Netherlands' oldest and most famous pop festival, celebrating its 56th edition. Three days of world-class rock and pop music across multiple stages, featuring the biggest names in music.",
    EVENT_SHORT_DESCRIPTION: "Netherlands' legendary rock & pop festival",
    EVENT_TICKETS_URL: "https://tickets.pinkpop2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    EVENT_TWITTER_HANDLE: "@pinkpopfest",
    EVENT_KEYWORDS: "pinkpop, music festival, rock, pop, landgraaf, netherlands, live music, summer festival",
    EVENT_ORGANIZER: "Buro Pinkpop",
    EVENT_ORGANIZER_URL: "https://www.pinkpop.nl",
    SITE_URL: "https://pinkpop2025.nl",
    EVENT_START_TIME: "11:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "70000",
    EVENT_PRICE_FROM: "115",
    EVENT_EMAIL: "info@pinkpop.nl",
    EVENT_PHONE: "+31 45 571 1400",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/pinkpop-festival",
    EVENT_TWITTER_URL: "https://twitter.com/pinkpopfest",
    EVENT_FACEBOOK_URL: "https://facebook.com/pinkpop",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Foo Fighters",
        title: "Headlining Band",
        company: "RCA Records",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Pearl Jam",
        title: "Headlining Band",
        company: "Republic Records",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "11:00",
        title: "Gates Open",
        location: "Megaland"
      },
      {
        time: "13:00",
        title: "First Acts Begin",
        location: "Main Stage"
      },
      {
        time: "18:00",
        title: "Pearl Jam",
        location: "Main Stage"
      },
      {
        time: "21:00",
        title: "Foo Fighters",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "3FM",
        tier: "platinum",
        logo: "https://example.com/3fm-logo.png"
      },
      {
        name: "Gemeente Landgraaf",
        tier: "gold",
        logo: "https://example.com/landgraaf-logo.png"
      }
    ])
  },

  'pride2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Amsterdam Pride 2025",
    EVENT_DATE: "2025-08-02",
    EVENT_LOCATION: "Amsterdam City Center",
    EVENT_DESCRIPTION: "One of the world's largest Pride celebrations, featuring the iconic Canal Parade, street parties, cultural events, and demonstrations. A week-long celebration of love, diversity, and inclusion in the heart of Amsterdam.",
    EVENT_SHORT_DESCRIPTION: "Amsterdam's celebration of LGBTQ+ pride",
    EVENT_TICKETS_URL: "https://tickets.pride2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1541421940766-104c9efc2478",
    EVENT_TWITTER_HANDLE: "@amsterdampride",
    EVENT_KEYWORDS: "pride, amsterdam, lgbtq+, canal parade, diversity, inclusion, celebration, netherlands",
    EVENT_ORGANIZER: "Amsterdam Pride Foundation",
    EVENT_ORGANIZER_URL: "https://pride.amsterdam",
    SITE_URL: "https://pride2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "500000",
    EVENT_PRICE_FROM: "0",
    EVENT_EMAIL: "info@pride.amsterdam",
    EVENT_PHONE: "+31 20 750 8388",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/amsterdam-pride",
    EVENT_TWITTER_URL: "https://twitter.com/amsterdampride",
    EVENT_FACEBOOK_URL: "https://facebook.com/amsterdampride",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Pride Ambassador",
        title: "Official Ambassador",
        company: "Amsterdam Pride",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Mayor of Amsterdam",
        title: "City Representative",
        company: "City of Amsterdam",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Pride Walk",
        location: "Dam Square"
      },
      {
        time: "14:00",
        title: "Canal Parade",
        location: "Amsterdam Canals"
      },
      {
        time: "16:00",
        title: "Street Parties",
        location: "Various Locations"
      },
      {
        time: "20:00",
        title: "Closing Party",
        location: "Dam Square"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "ING Bank",
        tier: "platinum",
        logo: "https://example.com/ing-logo.png"
      },
      {
        name: "KLM",
        tier: "platinum",
        logo: "https://example.com/klm-logo.png"
      },
      {
        name: "Gemeente Amsterdam",
        tier: "gold",
        logo: "https://example.com/amsterdam-logo.png"
      }
    ])
  },

  'soenda2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Soenda Festival 2025",
    EVENT_DATE: "2025-05-17",
    EVENT_LOCATION: "Ruigenhoek, Utrecht",
    EVENT_DESCRIPTION: "A leading electronic music festival known for its underground atmosphere and quality techno programming. Experience multiple stages of cutting-edge electronic music in a unique outdoor setting.",
    EVENT_SHORT_DESCRIPTION: "Utrecht's premier techno festival",
    EVENT_TICKETS_URL: "https://tickets.soenda2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@soendafestival",
    EVENT_KEYWORDS: "techno, electronic music, festival, utrecht, underground music, dance, netherlands",
    EVENT_ORGANIZER: "Soenda Events",
    EVENT_ORGANIZER_URL: "https://www.soenda.net",
    SITE_URL: "https://soenda2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "20000",
    EVENT_PRICE_FROM: "45",
    EVENT_EMAIL: "info@soenda.net",
    EVENT_PHONE: "+31 30 555 0303",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/soenda-festival",
    EVENT_TWITTER_URL: "https://twitter.com/soendafestival",
    EVENT_FACEBOOK_URL: "https://facebook.com/soendafestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Jeff Mills",
        title: "Techno Pioneer",
        company: "Axis Records",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      {
        name: "Ben Klock",
        title: "Berghain Resident",
        company: "Ostgut Ton",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Gates Open",
        location: "Festival Grounds"
      },
      {
        time: "14:00",
        title: "Opening Sets",
        location: "All Stages"
      },
      {
        time: "18:00",
        title: "Ben Klock",
        location: "Main Stage"
      },
      {
        time: "21:00",
        title: "Jeff Mills",
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
        name: "Gemeente Utrecht",
        tier: "gold",
        logo: "https://example.com/utrecht-logo.png"
      }
    ])
  },
    'zuidasrun2025.nl': {
      GA_MEASUREMENT_ID: "G-KEN81FKB6R",
      EVENT_TIMEZONE: "Europe/Amsterdam",
      EVENT_CURRENCY: "EUR",
      EVENT_LANGUAGE: "English",
      EVENT_NAME: "Zuidas Run 2025",
      EVENT_DATE: "2025-09-07",
      EVENT_LOCATION: "Zuidas, Amsterdam",
      EVENT_DESCRIPTION: "A unique urban running event through Amsterdam's business district. Choose between 4, 10, or 16 kilometer routes past iconic office buildings and modern architecture. Experience the energy of Amsterdam's financial heart while challenging yourself in this corporate running event.",
      EVENT_SHORT_DESCRIPTION: "Amsterdam's business district running event",
      EVENT_TICKETS_URL: "https://tickets.zuidasrun2025.nl",
      EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      EVENT_TWITTER_HANDLE: "@zuidasrun",
      EVENT_KEYWORDS: "running, marathon, amsterdam, zuidas, business district, fitness, health, netherlands, corporate run",
      EVENT_ORGANIZER: "Le Champion",
      EVENT_ORGANIZER_URL: "https://www.lechampion.nl",
      SITE_URL: "https://zuidasrun2025.nl",
      EVENT_START_TIME: "09:00",
      EVENT_END_TIME: "14:00",
      EVENT_CAPACITY: "10000",
      EVENT_PRICE_FROM: "25",
      EVENT_EMAIL: "info@zuidasrun.nl",
      EVENT_PHONE: "+31 20 555 0303",
      EVENT_LINKEDIN_URL: "https://linkedin.com/company/zuidas-run",
      EVENT_TWITTER_URL: "https://twitter.com/zuidasrun",
      EVENT_FACEBOOK_URL: "https://facebook.com/zuidasrun",
      EVENT_SPEAKERS: JSON.stringify([
        {
          name: "Olympic Athlete",
          title: "Event Ambassador",
          company: "Dutch Athletics Federation",
          image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
        }
      ]),
      EVENT_SCHEDULE: JSON.stringify([
        {
          time: "08:00",
          title: "Registration Opens",
          location: "WTC Amsterdam"
        },
        {
          time: "09:00",
          title: "16K Run Start",
          location: "Gustav Mahlerlaan"
        },
        {
          time: "09:30",
          title: "10K Run Start",
          location: "Gustav Mahlerlaan"
        },
        {
          time: "10:00",
          title: "4K Fun Run Start",
          location: "Gustav Mahlerlaan"
        }
      ]),
      EVENT_SPONSORS: JSON.stringify([
        {
          name: "ABN AMRO",
          tier: "platinum",
          logo: "https://example.com/abnamro-logo.png"
        },
        {
          name: "Zuidas Amsterdam",
          tier: "platinum",
          logo: "https://example.com/zuidas-logo.png"
        }
      ])
    },
  
    'lichtenfestivalamsterdam.nl': {
      GA_MEASUREMENT_ID: "G-KEN81FKB6R",
      EVENT_TIMEZONE: "Europe/Amsterdam",
      EVENT_CURRENCY: "EUR",
      EVENT_LANGUAGE: "English",
      EVENT_NAME: "Amsterdam Light Festival 2025",
      EVENT_DATE: "2025-12-01",
      EVENT_LOCATION: "Amsterdam City Center",
      EVENT_DESCRIPTION: "Experience Amsterdam's winter nights transformed by spectacular light art installations. The 14th edition features works by international artists illuminating the city's canals and historic center, creating a magical outdoor exhibition that can be enjoyed by boat or on foot.",
      EVENT_SHORT_DESCRIPTION: "Amsterdam's winter light art festival",
      EVENT_TICKETS_URL: "https://tickets.lichtenfestivalamsterdam.nl",
      EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      EVENT_TWITTER_HANDLE: "@amsterdamlight",
      EVENT_KEYWORDS: "light festival, amsterdam, art, winter, canal tour, light art, exhibition, netherlands",
      EVENT_ORGANIZER: "Amsterdam Light Festival Foundation",
      EVENT_ORGANIZER_URL: "https://amsterdamlightfestival.com",
      SITE_URL: "https://lichtenfestivalamsterdam.nl",
      EVENT_START_TIME: "17:00",
      EVENT_END_TIME: "23:00",
      EVENT_CAPACITY: "900000",
      EVENT_PRICE_FROM: "22.50",
      EVENT_EMAIL: "info@amsterdamlightfestival.com",
      EVENT_PHONE: "+31 20 555 0123",
      EVENT_LINKEDIN_URL: "https://linkedin.com/company/amsterdam-light-festival",
      EVENT_TWITTER_URL: "https://twitter.com/amsterdamlight",
      EVENT_FACEBOOK_URL: "https://facebook.com/amsterdamlightfestival",
      EVENT_SPEAKERS: JSON.stringify([
        {
          name: "International Light Artists",
          title: "Featured Artists",
          company: "Various Studios",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
        }
      ]),
      EVENT_SCHEDULE: JSON.stringify([
        {
          time: "17:00",
          title: "Festival Opens",
          location: "Various Locations"
        },
        {
          time: "17:30",
          title: "Guided Boat Tours Start",
          location: "Canal Ring"
        },
        {
          time: "19:00",
          title: "Walking Tours Start",
          location: "City Center"
        }
      ]),
      EVENT_SPONSORS: JSON.stringify([
        {
          name: "Gemeente Amsterdam",
          tier: "platinum",
          logo: "https://example.com/amsterdam-logo.png"
        },
        {
          name: "Canal Company",
          tier: "gold",
          logo: "https://example.com/canal-logo.png"
        }
      ])
    },
  
    'blockchainweekamsterdam.nl': {
      GA_MEASUREMENT_ID: "G-KEN81FKB6R",
      EVENT_TIMEZONE: "Europe/Amsterdam",
      EVENT_CURRENCY: "EUR",
      EVENT_LANGUAGE: "English",
      EVENT_NAME: "Amsterdam Blockchain Week 2025",
      EVENT_DATE: "2025-06-20",
      EVENT_LOCATION: "Various Venues, Amsterdam",
      EVENT_DESCRIPTION: "A week-long exploration of blockchain technology and its applications, featuring conferences, workshops, hackathons, and networking events. Join industry leaders, developers, and entrepreneurs in shaping the future of Web3.",
      EVENT_SHORT_DESCRIPTION: "Amsterdam's premier blockchain event",
      EVENT_TICKETS_URL: "https://tickets.blockchainweekamsterdam.nl",
      EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
      EVENT_TWITTER_HANDLE: "@ABW2025",
      EVENT_KEYWORDS: "blockchain, cryptocurrency, web3, technology, amsterdam, fintech, defi, nft",
      EVENT_ORGANIZER: "Amsterdam Blockchain Week Foundation",
      EVENT_ORGANIZER_URL: "https://blockchainweekamsterdam.nl",
      SITE_URL: "https://blockchainweekamsterdam.nl",
      EVENT_START_TIME: "09:00",
      EVENT_END_TIME: "18:00",
      EVENT_CAPACITY: "5000",
      EVENT_PRICE_FROM: "299",
      EVENT_EMAIL: "info@blockchainweekamsterdam.nl",
      EVENT_PHONE: "+31 20 555 0456",
      EVENT_LINKEDIN_URL: "https://linkedin.com/company/amsterdam-blockchain-week",
      EVENT_TWITTER_URL: "https://twitter.com/ABW2025",
      EVENT_FACEBOOK_URL: "https://facebook.com/amsterdamblockchainweek",
      EVENT_SPEAKERS: JSON.stringify([
        {
          name: "Blockchain Leaders",
          title: "Industry Experts",
          company: "Various Organizations",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
        }
      ]),
      EVENT_SCHEDULE: JSON.stringify([
        {
          time: "09:00",
          title: "Conference Day 1",
          location: "Beurs van Berlage"
        },
        {
          time: "14:00",
          title: "Hackathon Kickoff",
          location: "TQ Amsterdam"
        },
        {
          time: "16:00",
          title: "Networking Event",
          location: "Various Venues"
        }
      ]),
      EVENT_SPONSORS: JSON.stringify([
        {
          name: "Ethereum Foundation",
          tier: "platinum",
          logo: "https://example.com/ethereum-logo.png"
        },
        {
          name: "Dutch Blockchain Coalition",
          tier: "gold",
          logo: "https://example.com/dbc-logo.png"
        }
      ])
    },
  
    'amsterdamgrachtenfestival.nl': {
      GA_MEASUREMENT_ID: "G-KEN81FKB6R",
      EVENT_TIMEZONE: "Europe/Amsterdam",
      EVENT_CURRENCY: "EUR",
      EVENT_LANGUAGE: "English",
      EVENT_NAME: "Grachtenfestival 2025",
      EVENT_DATE: "2025-08-15",
      EVENT_LOCATION: "Amsterdam Canals",
      EVENT_DESCRIPTION: "A unique classical music festival set along Amsterdam's historic canals, featuring over 250 concerts at iconic locations. Experience world-class performances on boats, in historic buildings, and in hidden gardens throughout the city.",
      EVENT_SHORT_DESCRIPTION: "Amsterdam's classical music festival on the canals",
      EVENT_TICKETS_URL: "https://tickets.amsterdamgrachtenfestival.nl",
      EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1534277621182-d6c604a7c8b6",
      EVENT_TWITTER_HANDLE: "@grachtenfest",
      EVENT_KEYWORDS: "classical music, amsterdam canals, music festival, culture, netherlands, concerts, chamber music",
      EVENT_ORGANIZER: "Grachtenfestival Foundation",
      EVENT_ORGANIZER_URL: "https://www.grachtenfestival.nl",
      SITE_URL: "https://amsterdamgrachtenfestival.nl",
      EVENT_START_TIME: "11:00",
      EVENT_END_TIME: "23:00",
      EVENT_CAPACITY: "55000",
      EVENT_PRICE_FROM: "15",
      EVENT_EMAIL: "info@grachtenfestival.nl",
      EVENT_PHONE: "+31 20 421 4542",
      EVENT_LINKEDIN_URL: "https://linkedin.com/company/grachtenfestival",
      EVENT_TWITTER_URL: "https://twitter.com/grachtenfest",
      EVENT_FACEBOOK_URL: "https://facebook.com/grachtenfestival",
      EVENT_SPEAKERS: JSON.stringify([
        {
          name: "Classical Musicians",
          title: "International Artists",
          company: "Various Orchestras",
          image: "https://images.unsplash.com/photo-1534277621182-d6c604a7c8b6"
        }
      ]),
      EVENT_SCHEDULE: JSON.stringify([
        {
          time: "11:00",
          title: "Opening Concert",
          location: "Muziekgebouw aan 't IJ"
        },
        {
          time: "14:00",
          title: "Canal Concerts",
          location: "Various Canals"
        },
        {
          time: "20:00",
          title: "Evening Performance",
          location: "Royal Palace"
        }
      ]),
      EVENT_SPONSORS: JSON.stringify([
        {
          name: "Gemeente Amsterdam",
          tier: "platinum",
          logo: "https://example.com/amsterdam-logo.png"
        },
        {
          name: "Dutch Culture Fund",
          tier: "gold",
          logo: "https://example.com/dcf-logo.png"
        }
      ])
    },
  
    'https://amsterdamartweek.nl': {
      GA_MEASUREMENT_ID: "G-KEN81FKB6R",
      EVENT_TIMEZONE: "Europe/Amsterdam",
      EVENT_CURRENCY: "EUR",
      EVENT_LANGUAGE: "English",
      EVENT_NAME: "Amsterdam Art Week 2025",
      EVENT_DATE: "2025-05-12",
      EVENT_LOCATION: "Various Locations, Amsterdam",
      EVENT_DESCRIPTION: "Amsterdam's contemporary art scene comes alive with exhibitions, performances, and events across galleries, museums, and artist studios. Discover emerging artists, attend exclusive openings, and explore the city's vibrant art community.",
      EVENT_SHORT_DESCRIPTION: "Amsterdam's contemporary art celebration",
      EVENT_TICKETS_URL: "https://tickets.amsterdamartweek.nl",
      EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1594388384960-de72b561d632",
      EVENT_TWITTER_HANDLE: "@ArtWeekAMS",
      EVENT_KEYWORDS: "art, contemporary art, amsterdam, galleries, exhibitions, culture, museums, netherlands",
      EVENT_ORGANIZER: "Amsterdam Art Foundation",
      EVENT_ORGANIZER_URL: "https://amsterdamart.com",
      SITE_URL: "https://amsterdamartweek.nl",
      EVENT_START_TIME: "10:00",
      EVENT_END_TIME: "22:00",
      EVENT_CAPACITY: "75000",
      EVENT_PRICE_FROM: "20",
      EVENT_EMAIL: "info@amsterdamartweek.nl",
      EVENT_PHONE: "+31 20 555 0789",
      EVENT_LINKEDIN_URL: "https://linkedin.com/company/amsterdam-art-week",
      EVENT_TWITTER_URL: "https://twitter.com/ArtWeekAMS",
      EVENT_FACEBOOK_URL: "https://facebook.com/amsterdamartweek",
      EVENT_SPEAKERS: JSON.stringify([
        {
          name: "Contemporary Artists",
          title: "Featured Artists",
          company: "Various Galleries",
          image: "https://images.unsplash.com/photo-1594388384960-de72b561d632"
        }
      ]),
      EVENT_SCHEDULE: JSON.stringify([
        {
          time: "10:00",
          title: "Gallery Openings",
          location: "Various Galleries"
        },
        {
          time: "14:00",
          title: "Artist Talks",
          location: "Stedelijk Museum"
        },
        {
          time: "19:00",
          title: "Evening Exhibitions",
          location: "Multiple Venues"
        }
      ]),
      EVENT_SPONSORS: JSON.stringify([
        {
          name: "Mondriaan Fund",
          tier: "platinum",
          logo: "https://example.com/mondriaan-logo.png"
        },
        {
          name: "Amsterdam Fund for the Arts",
          tier: "gold",
          logo: "https://example.com/afa-logo.png"
        }
      ])
    }
  };

// Default event configuration (fallback)
export const defaultEvent = events['ade2025.nl'];
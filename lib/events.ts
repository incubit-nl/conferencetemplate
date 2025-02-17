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
    'https://blockchainweekamsterdam.nl': {
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
    'https://blockchainweek.nl': {
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
    'https://amsterdamgrachtenfestival.nl': {
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
    },
  'exitfestival2025.nl': {
    ...commonConfig,
    GA_MEASUREMENT_ID: "G-KEN81FKB6R",
    EVENT_NAME: "Exit Festival 2025",
    EVENT_DATE: "2025-07-10",
    EVENT_LOCATION: "Petrovaradin Fortress, Novi Sad, Serbia",
    EVENT_DESCRIPTION: "Experience one of Europe's leading summer music festivals in the stunning 18th-century Petrovaradin Fortress. Exit Festival 2025 brings together the best in electronic, rock, metal, hip-hop, and reggae music across multiple stages in this UNESCO World Heritage site.",
    EVENT_SHORT_DESCRIPTION: "Award-winning festival in a historic fortress",
    EVENT_TICKETS_URL: "https://tickets.exitfestival2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    EVENT_TWITTER_HANDLE: "@ExitFestival",
    EVENT_KEYWORDS: "exit festival, music festival, serbia, electronic music, rock music, fortress festival, summer festival",
    EVENT_ORGANIZER: "Exit Foundation",
    EVENT_ORGANIZER_URL: "https://exitfestival2025.nl",
    SITE_URL: "https://exitfestival2025.nl",
    EVENT_START_TIME: "14:00",
    EVENT_END_TIME: "06:00",
    EVENT_CAPACITY: "200000",
    EVENT_PRICE_FROM: "129",
    EVENT_EMAIL: "info@exitfestival.nl",
    EVENT_PHONE: "+31 20 555 0102",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/exit-festival",
    EVENT_TWITTER_URL: "https://twitter.com/ExitFestival",
    EVENT_FACEBOOK_URL: "https://facebook.com/exit.festival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Carl Cox",
        title: "Techno Legend",
        company: "Intec Digital",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e"
      },
      {
        name: "The Prodigy",
        title: "Electronic Music Pioneers",
        company: "Take Me To The Hospital",
        image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "14:00",
        title: "Gates Open",
        location: "Main Entrance"
      },
      {
        time: "20:00",
        title: "Main Stage Opening",
        speaker: "Local Heroes",
        location: "Main Stage"
      },
      {
        time: "22:00",
        title: "The Prodigy Live",
        speaker: "The Prodigy",
        location: "Main Stage"
      },
      {
        time: "00:00",
        title: "Carl Cox Techno Set",
        speaker: "Carl Cox",
        location: "Dance Arena"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "Red Bull",
        tier: "platinum",
        logo: "https://example.com/redbull-logo.png"
      }
    ])
  },

  'rockamring2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Rock am Ring 2025",
    EVENT_DATE: "2025-06-06",
    EVENT_LOCATION: "Nürburgring, Nürburg, Germany",
    EVENT_DESCRIPTION: "One of Europe's largest rock music festivals, Rock am Ring 2025 returns to the legendary Nürburgring racing track. Experience three days of the best rock, metal, alternative, and electronic music across multiple stages in this unique setting.",
    EVENT_SHORT_DESCRIPTION: "Legendary rock festival at Nürburgring",
    EVENT_TICKETS_URL: "https://tickets.rockamring2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
    EVENT_TWITTER_HANDLE: "@rockamring",
    EVENT_KEYWORDS: "rock am ring, rock music, metal, alternative, music festival, nurburgring, germany",
    EVENT_ORGANIZER: "Marek Lieberberg Konzertagentur",
    EVENT_ORGANIZER_URL: "https://rockamring2025.nl",
    SITE_URL: "https://rockamring2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "150000",
    EVENT_PRICE_FROM: "199",
    EVENT_EMAIL: "info@rockamring.nl",
    EVENT_PHONE: "+31 20 555 0103",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/rock-am-ring",
    EVENT_TWITTER_URL: "https://twitter.com/rockamring",
    EVENT_FACEBOOK_URL: "https://facebook.com/rockamring",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Foo Fighters",
        title: "Headlining Band",
        company: "Roswell Records",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
      },
      {
        name: "Rammstein",
        title: "Industrial Metal Icons",
        company: "Universal Music",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Festival Opens",
        location: "Main Entrance"
      },
      {
        time: "16:00",
        title: "Rising Stars Showcase",
        location: "Alternate Stage"
      },
      {
        time: "20:00",
        title: "Rammstein",
        speaker: "Rammstein",
        location: "Main Stage"
      },
      {
        time: "22:00",
        title: "Foo Fighters",
        speaker: "Foo Fighters",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Monster Energy",
        tier: "platinum",
        logo: "https://example.com/monster-logo.png"
      },
      {
        name: "Harley-Davidson",
        tier: "gold",
        logo: "https://example.com/harley-logo.png"
      }
    ])
  },

  'coachella2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Coachella Valley Music and Arts Festival 2025",
    EVENT_DATE: "2025-04-11",
    EVENT_LOCATION: "Empire Polo Club, Indio, California",
    EVENT_DESCRIPTION: "The world-renowned Coachella Festival returns in 2025, bringing together the biggest names in music, groundbreaking art installations, and an unforgettable desert experience. Two weekends of diverse musical performances across multiple stages, featuring genres from indie rock to electronic, hip-hop, and beyond.",
    EVENT_SHORT_DESCRIPTION: "Iconic music & arts festival in the California desert",
    EVENT_TICKETS_URL: "https://tickets.coachella2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1537044333255-6fa3b5363e11",
    EVENT_TWITTER_HANDLE: "@coachella",
    EVENT_KEYWORDS: "coachella, music festival, arts festival, california, indie music, hip-hop, electronic music, desert festival",
    EVENT_ORGANIZER: "Goldenvoice",
    EVENT_ORGANIZER_URL: "https://coachella2025.nl",
    SITE_URL: "https://coachella2025.nl",
    EVENT_START_TIME: "11:00",
    EVENT_END_TIME: "01:00",
    EVENT_CAPACITY: "250000",
    EVENT_PRICE_FROM: "449",
    EVENT_EMAIL: "info@coachella.nl",
    EVENT_PHONE: "+31 20 555 0104",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/coachella",
    EVENT_TWITTER_URL: "https://twitter.com/coachella",
    EVENT_FACEBOOK_URL: "https://facebook.com/coachella",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Dua Lipa",
        title: "Pop Superstar",
        company: "Warner Records",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
      },
      {
        name: "Kendrick Lamar",
        title: "Hip-Hop Artist",
        company: "TDE",
        image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "11:00",
        title: "Gates Open",
        location: "Main Entrance"
      },
      {
        time: "14:00",
        title: "Art Installation Tours",
        location: "Festival Grounds"
      },
      {
        time: "20:00",
        title: "Dua Lipa Performance",
        speaker: "Dua Lipa",
        location: "Coachella Stage"
      },
      {
        time: "22:30",
        title: "Kendrick Lamar Headline Set",
        speaker: "Kendrick Lamar",
        location: "Coachella Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "American Express",
        tier: "presenting",
        logo: "https://example.com/amex-logo.png"
      },
      {
        name: "BMW",
        tier: "platinum",
        logo: "https://example.com/bmw-logo.png"
      }
    ])
  },

  'zwartecross2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Zwarte Cross 2025",
    EVENT_DATE: "2025-07-18",
    EVENT_LOCATION: "Lichtenvoorde, Netherlands",
    EVENT_DESCRIPTION: "The largest motorcycle and music festival in the world, Zwarte Cross combines motocross racing, music, theater, and comedy for a unique Dutch festival experience. Featuring multiple stages of rock, pop, and electronic music alongside spectacular motorsports events.",
    EVENT_SHORT_DESCRIPTION: "Ultimate combination of motorcross and music",
    EVENT_TICKETS_URL: "https://tickets.zwartecross2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3",
    EVENT_TWITTER_HANDLE: "@zwartecross",
    EVENT_KEYWORDS: "zwarte cross, motorcross, music festival, dutch festival, rock music, motorsports, theater",
    EVENT_ORGANIZER: "Feestfabriek Alles Komt Goed BV",
    EVENT_ORGANIZER_URL: "https://zwartecross2025.nl",
    SITE_URL: "https://zwartecross2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "01:00",
    EVENT_CAPACITY: "220000",
    EVENT_PRICE_FROM: "89",
    EVENT_EMAIL: "info@zwartecross.nl",
    EVENT_PHONE: "+31 20 555 0105",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/zwarte-cross",
    EVENT_TWITTER_URL: "https://twitter.com/zwartecross",
    EVENT_FACEBOOK_URL: "https://facebook.com/zwartecross",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Di-rect",
        title: "Dutch Rock Band",
        company: "Universal Music",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
      },
      {
        name: "Jeffrey Herlings",
        title: "MXGP World Champion",
        company: "Red Bull KTM Factory Racing",
        image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Festival Opens",
        location: "Main Gate"
      },
      {
        time: "12:00",
        title: "Motorcross Qualifications",
        location: "Racing Track"
      },
      {
        time: "15:00",
        title: "Stunt Show",
        location: "Stunt Arena"
      },
      {
        time: "21:00",
        title: "Di-rect Headline Show",
        speaker: "Di-rect",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Grolsch",
        tier: "presenting",
        logo: "https://example.com/grolsch-logo.png"
      },
      {
        name: "KTM",
        tier: "platinum",
        logo: "https://example.com/ktm-logo.png"
      }
    ])
  },

  'burningman2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Burning Man 2025",
    EVENT_DATE: "2025-08-24",
    EVENT_LOCATION: "Black Rock Desert, Nevada",
    EVENT_DESCRIPTION: "Experience the transformative power of Burning Man in the Black Rock Desert. This unique gathering combines art, self-expression, and community in a temporary city. Featuring massive art installations, theme camps, and performances in a radical environment of creativity and innovation.",
    EVENT_SHORT_DESCRIPTION: "Temporary city of art and radical self-expression",
    EVENT_TICKETS_URL: "https://tickets.burningman2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1532098850201-89d86eeb345a",
    EVENT_TWITTER_HANDLE: "@burningman",
    EVENT_KEYWORDS: "burning man, art festival, black rock city, desert festival, installation art, community, radical self-expression",
    EVENT_ORGANIZER: "Burning Man Project",
    EVENT_ORGANIZER_URL: "https://burningman2025.nl",
    SITE_URL: "https://burningman2025.nl",
    EVENT_START_TIME: "00:00",
    EVENT_END_TIME: "23:59",
    EVENT_CAPACITY: "80000",
    EVENT_PRICE_FROM: "575",
    EVENT_EMAIL: "info@burningman.nl",
    EVENT_PHONE: "+31 20 555 0106",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/burning-man-project",
    EVENT_TWITTER_URL: "https://twitter.com/burningman",
    EVENT_FACEBOOK_URL: "https://facebook.com/burningman",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Larry Harvey",
        title: "Burning Man Founder",
        company: "Burning Man Project",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919"
      },
      {
        name: "Marian Goodell",
        title: "CEO",
        company: "Burning Man Project",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "00:00",
        title: "Gates Open",
        location: "Black Rock City"
      },
      {
        time: "Sunset",
        title: "Art Tour",
        location: "Deep Playa"
      },
      {
        time: "20:00",
        title: "Temple Ceremony",
        location: "The Temple"
      },
      {
        time: "21:00",
        title: "Man Burn",
        location: "The Man"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Independent",
        tier: "community",
        logo: "https://example.com/bm-logo.png"
      }
    ])
  },

  'vierdaagsefeesten2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Vierdaagsefeesten 2025",
    EVENT_DATE: "2025-07-15",
    EVENT_LOCATION: "Nijmegen, Netherlands",
    EVENT_DESCRIPTION: "The largest free music and cultural festival in the Netherlands, coinciding with the International Four Days Marches. Experience seven days of music, culture, and entertainment across multiple stages throughout the historic city of Nijmegen.",
    EVENT_SHORT_DESCRIPTION: "Largest free festival in the Netherlands",
    EVENT_TICKETS_URL: "https://tickets.vierdaagsefeesten2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1533137098665-47ca60257cec",
    EVENT_TWITTER_HANDLE: "@vierdaagsefeest",
    EVENT_KEYWORDS: "vierdaagsefeesten, nijmegen, music festival, cultural festival, four days marches, dutch festival",
    EVENT_ORGANIZER: "Stichting Vierdaagsefeesten",
    EVENT_ORGANIZER_URL: "https://vierdaagsefeesten2025.nl",
    SITE_URL: "https://vierdaagsefeesten2025.nl",
    EVENT_START_TIME: "13:00",
    EVENT_END_TIME: "02:00",
    EVENT_CAPACITY: "1000000",
    EVENT_PRICE_FROM: "0",
    EVENT_EMAIL: "info@vierdaagsefeesten.nl",
    EVENT_PHONE: "+31 20 555 0107",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/vierdaagsefeesten",
    EVENT_TWITTER_URL: "https://twitter.com/vierdaagsefeest",
    EVENT_FACEBOOK_URL: "https://facebook.com/vierdaagsefeesten",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Guus Meeuwis",
        title: "Dutch Singer",
        company: "Universal Music",
        image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f"
      },
      {
        name: "Chef'Special",
        title: "Dutch Band",
        company: "TopNotch",
        image: "https://images.unsplash.com/photo-1570499911518-f6c5c4e8bca9"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "13:00",
        title: "Festival Opens",
        location: "Grote Markt"
      },
      {
        time: "16:00",
        title: "Cultural Performances",
        location: "Various Locations"
      },
      {
        time: "20:00",
        title: "Guus Meeuwis Concert",
        speaker: "Guus Meeuwis",
        location: "Main Stage"
      },
      {
        time: "22:00",
        title: "Chef'Special Performance",
        speaker: "Chef'Special",
        location: "Waalkade"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "platinum",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "Rabobank",
        tier: "gold",
        logo: "https://example.com/rabobank-logo.png"
      }
    ])
  },

  'sziget2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Sziget Festival 2025",
    EVENT_DATE: "2025-08-06",
    EVENT_LOCATION: "Óbudai-sziget, Budapest, Hungary",
    EVENT_DESCRIPTION: "One of Europe's largest music and cultural festivals, Sziget transforms Budapest's Óbuda Island into a week-long celebration of music, art, and culture. Experience diverse musical performances, theater, circus, and art installations in this unique festival city.",
    EVENT_SHORT_DESCRIPTION: "Week-long island festival of freedom",
    EVENT_TICKETS_URL: "https://tickets.sziget2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    EVENT_TWITTER_HANDLE: "@szigetofficial",
    EVENT_KEYWORDS: "sziget festival, budapest, music festival, cultural festival, island festival, arts, theater",
    EVENT_ORGANIZER: "Sziget Cultural Management Ltd",
    EVENT_ORGANIZER_URL: "https://sziget2025.nl",
    SITE_URL: "https://sziget2025.nl",
    EVENT_START_TIME: "06:00",
    EVENT_END_TIME: "04:00",
    EVENT_CAPACITY: "450000",
    EVENT_PRICE_FROM: "199",
    EVENT_EMAIL: "info@sziget.nl",
    EVENT_PHONE: "+31 20 555 0108",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/sziget-festival",
    EVENT_TWITTER_URL: "https://twitter.com/szigetofficial",
    EVENT_FACEBOOK_URL: "https://facebook.com/szigetfestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Arctic Monkeys",
        title: "Headlining Band",
        company: "Domino Records",
        image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3"
      },
      {
        name: "Billie Eilish",
        title: "Pop Artist",
        company: "Interscope Records",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "06:00",
        title: "Yoga Session",
        location: "Beach Stage"
      },
      {
        time: "14:00",
        title: "Circus Shows",
        location: "Circus Tent"
      },
      {
        time: "20:00",
        title: "Arctic Monkeys",
        speaker: "Arctic Monkeys",
        location: "Main Stage"
      },
      {
        time: "22:30",
        title: "Billie Eilish",
        speaker: "Billie Eilish",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Vodafone",
        tier: "presenting",
        logo: "https://example.com/vodafone-logo.png"
      },
      {
        name: "Mastercard",
        tier: "platinum",
        logo: "https://example.com/mastercard-logo.png"
      }
    ])
  },

  'intothewoods2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Into The Woods 2025",
    EVENT_DATE: "2025-09-12",
    EVENT_LOCATION: "Amersfoort, Netherlands",
    EVENT_DESCRIPTION: "A magical electronic music festival set in the heart of the Dutch forest. Into The Woods combines cutting-edge electronic music with stunning natural surroundings, creating an immersive experience where nature meets technology.",
    EVENT_SHORT_DESCRIPTION: "Electronic music festival in nature",
    EVENT_TICKETS_URL: "https://tickets.intothewoods2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    EVENT_TWITTER_HANDLE: "@intothewoodsnl",
    EVENT_KEYWORDS: "into the woods, electronic music, forest festival, nature, techno, house music, netherlands",
    EVENT_ORGANIZER: "Into The Woods Foundation",
    EVENT_ORGANIZER_URL: "https://intothewoods2025.nl",
    SITE_URL: "https://intothewoods2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "15000",
    EVENT_PRICE_FROM: "65",
    EVENT_EMAIL: "info@intothewoods.nl",
    EVENT_PHONE: "+31 20 555 0109",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/into-the-woods",
    EVENT_TWITTER_URL: "https://twitter.com/intothewoodsnl",
    EVENT_FACEBOOK_URL: "https://facebook.com/intothewoodsfestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Amelie Lens",
        title: "Techno DJ",
        company: "Lenske",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
      },
      {
        name: "Ben Klock",
        title: "Techno Producer",
        company: "Ostgut Ton",
        image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Gates Open",
        location: "Forest Entrance"
      },
      {
        time: "14:00",
        title: "Opening Ceremony",
        location: "Main Stage"
      },
      {
        time: "18:00",
        title: "Ben Klock Set",
        speaker: "Ben Klock",
        location: "Forest Stage"
      },
      {
        time: "21:00",
        title: "Amelie Lens Closing",
        speaker: "Amelie Lens",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Desperados",
        tier: "platinum",
        logo: "https://example.com/desperados-logo.png"
      },
      {
        name: "Pioneer DJ",
        tier: "gold",
        logo: "https://example.com/pioneer-logo.png"
      }
    ])
  },
  'mysteryland2025.nl': {
    ...commonConfig,
    GA_MEASUREMENT_ID: "G-KEN81FKB6R",
    EVENT_NAME: "Mysteryland 2025",
    EVENT_DATE: "2025-08-23",
    EVENT_LOCATION: "Haarlemmermeer, Netherlands",
    EVENT_DESCRIPTION: "The world's longest-running electronic music festival returns for its 2025 edition. Mysteryland combines spectacular production, art installations, and world-class electronic music across multiple stages in a magical festival setting.",
    EVENT_SHORT_DESCRIPTION: "Legendary electronic music festival",
    EVENT_TICKETS_URL: "https://tickets.mysteryland2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@mysteryland",
    EVENT_KEYWORDS: "mysteryland, electronic music, dance music, festival, netherlands, edm, techno",
    EVENT_ORGANIZER: "ID&T",
    EVENT_ORGANIZER_URL: "https://mysteryland2025.nl",
    SITE_URL: "https://mysteryland2025.nl",
    EVENT_START_TIME: "11:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "100000",
    EVENT_PRICE_FROM: "89",
    EVENT_EMAIL: "info@mysteryland.nl",
    EVENT_PHONE: "+31 20 555 0110",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/mysteryland",
    EVENT_TWITTER_URL: "https://twitter.com/mysteryland",
    EVENT_FACEBOOK_URL: "https://facebook.com/mysteryland",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Armin van Buuren",
        title: "Trance DJ",
        company: "Armada Music",
        image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444"
      },
      {
        name: "Hardwell",
        title: "EDM Producer",
        company: "Revealed Recordings",
        image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "11:00",
        title: "Festival Opens",
        location: "Main Entrance"
      },
      {
        time: "15:00",
        title: "Art Tour",
        location: "Festival Grounds"
      },
      {
        time: "19:00",
        title: "Hardwell Set",
        speaker: "Hardwell",
        location: "Main Stage"
      },
      {
        time: "21:00",
        title: "Armin van Buuren Closing",
        speaker: "Armin van Buuren",
        }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Q-Dance",
        tier: "presenting",
        logo: "https://example.com/qdance-logo.png"
      },
      {
        name: "JBL",
        tier: "platinum",
        logo: "https://example.com/jbl-logo.png"
      }
    ])
  },
  'tomorrowland2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Tomorrowland 2025",
    EVENT_DATE: "2025-07-18",
    EVENT_LOCATION: "Boom, Belgium",
    EVENT_DESCRIPTION: "The world's most magical electronic dance music festival returns for three weekends of unparalleled production, stunning stage designs, and the biggest names in electronic music. Experience the fantasy world of Tomorrowland in this celebration of unity and music.",
    EVENT_SHORT_DESCRIPTION: "World's premier electronic music festival",
    EVENT_TICKETS_URL: "https://tickets.tomorrowland2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    EVENT_TWITTER_HANDLE: "@tomorrowland",
    EVENT_KEYWORDS: "tomorrowland, electronic music, edm festival, belgium, dance music, stage production",
    EVENT_ORGANIZER: "We Are One World",
    EVENT_ORGANIZER_URL: "https://tomorrowland2025.nl",
    SITE_URL: "https://tomorrowland2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "01:00",
    EVENT_CAPACITY: "600000",
    EVENT_PRICE_FROM: "299",
    EVENT_EMAIL: "info@tomorrowland.nl",
    EVENT_PHONE: "+31 20 555 0111",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/tomorrowland",
    EVENT_TWITTER_URL: "https://twitter.com/tomorrowland",
    EVENT_FACEBOOK_URL: "https://facebook.com/tomorrowland",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Swedish House Mafia",
        title: "EDM Supergroup",
        company: "Universal Music",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
      },
      {
        name: "Tiësto",
        title: "DJ Legend",
        company: "Musical Freedom",
        image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "DreamVille Opens",
        location: "Festival Grounds"
      },
      {
        time: "16:00",
        title: "Opening Ceremony",
        location: "Main Stage"
      },
      {
        time: "21:00",
        title: "Swedish House Mafia",
        speaker: "Swedish House Mafia",
        location: "Main Stage"
      },
      {
        time: "23:00",
        title: "Tiësto Closing Set",
        speaker: "Tiësto",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Budweiser",
        tier: "presenting",
        logo: "https://example.com/budweiser-logo.png"
      },
      {
        name: "Intel",
        tier: "platinum",
        logo: "https://example.com/intel-logo.png"
      }
    ])
  },

  'concertatsea2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Concert at SEA 2025",
    EVENT_DATE: "2025-06-27",
    EVENT_LOCATION: "Brouwersdam, Zeeland",
    EVENT_DESCRIPTION: "The Netherlands' largest beach festival returns to the Brouwersdam for three days of music, sun, and sea. Experience the best Dutch and international artists performing against the stunning backdrop of the North Sea.",
    EVENT_SHORT_DESCRIPTION: "Largest Dutch beach festival",
    EVENT_TICKETS_URL: "https://tickets.concertatsea2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    EVENT_TWITTER_HANDLE: "@concertatsea",
    EVENT_KEYWORDS: "concert at sea, beach festival, dutch music, zeeland, live music, seaside festival",
    EVENT_ORGANIZER: "BLØF",
    EVENT_ORGANIZER_URL: "https://concertatsea2025.nl",
    SITE_URL: "https://concertatsea2025.nl",
    EVENT_START_TIME: "13:00",
    EVENT_END_TIME: "00:00",
    EVENT_CAPACITY: "40000",
    EVENT_PRICE_FROM: "79",
    EVENT_EMAIL: "info@concertatsea.nl",
    EVENT_PHONE: "+31 20 555 0112",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/concert-at-sea",
    EVENT_TWITTER_URL: "https://twitter.com/concertatsea",
    EVENT_FACEBOOK_URL: "https://facebook.com/concertatsea",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "BLØF",
        title: "Dutch Rock Band",
        company: "Universal Music",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
      },
      {
        name: "Kensington",
        title: "Dutch Rock Band",
        company: "Universal Music",
        image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "13:00",
        title: "Gates Open",
        location: "Main Entrance"
      },
      {
        time: "16:00",
        title: "Beach Activities",
        location: "Beach Area"
      },
      {
        time: "20:00",
        title: "Kensington Performance",
        speaker: "Kensington",
        location: "Main Stage"
      },
      {
        time: "22:00",
        title: "BLØF Headline Show",
        speaker: "BLØF",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Heineken",
        tier: "presenting",
        logo: "https://example.com/heineken-logo.png"
      },
      {
        name: "Delta",
        tier: "gold",
        logo: "https://example.com/delta-logo.png"
      }
    ])
  },

  'oerol2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Oerol Festival 2025",
    EVENT_DATE: "2025-06-13",
    EVENT_LOCATION: "Terschelling, Netherlands",
    EVENT_DESCRIPTION: "Experience the unique combination of nature, theater, and arts on the island of Terschelling. Oerol transforms the entire island into a stage for innovative theater, music, dance, and visual arts, creating unforgettable performances in natural settings.",
    EVENT_SHORT_DESCRIPTION: "Theater and arts festival on Terschelling island",
    EVENT_TICKETS_URL: "https://tickets.oerol2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    EVENT_TWITTER_HANDLE: "@oerol_nl",
    EVENT_KEYWORDS: "oerol, theater festival, arts festival, terschelling, cultural events, site-specific theater, netherlands",
    EVENT_ORGANIZER: "Stichting Oerol",
    EVENT_ORGANIZER_URL: "https://oerol2025.nl",
    SITE_URL: "https://oerol2025.nl",
    EVENT_START_TIME: "10:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "50000",
    EVENT_PRICE_FROM: "45",
    EVENT_EMAIL: "info@oerol.nl",
    EVENT_PHONE: "+31 20 555 0113",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/oerol-festival",
    EVENT_TWITTER_URL: "https://twitter.com/oerol_nl",
    EVENT_FACEBOOK_URL: "https://facebook.com/oerolfestival",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Theater Rotterdam",
        title: "Theater Company",
        company: "Theater Rotterdam",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf"
      },
      {
        name: "Noord Nederlands Toneel",
        title: "Theater Company",
        company: "NNT",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "10:00",
        title: "Festival Opens",
        location: "Various Locations"
      },
      {
        time: "14:00",
        title: "Beach Performance",
        location: "North Beach"
      },
      {
        time: "17:00",
        title: "Forest Theater",
        location: "Formerum Forest"
      },
      {
        time: "21:00",
        title: "Evening Spectacle",
        location: "Harbour"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "BankGiro Loterij",
        tier: "presenting",
        logo: "https://example.com/bankgiro-logo.png"
      },
      {
        name: "Prins Bernhard Cultuurfonds",
        tier: "gold",
        logo: "https://example.com/cultuurfonds-logo.png"
      }
    ])
  },

  'verknipt2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Verknipt Festival 2025",
    EVENT_DATE: "2025-07-05",
    EVENT_LOCATION: "Utrecht, Netherlands",
    EVENT_DESCRIPTION: "Utrecht's premier techno festival returns with a cutting-edge lineup of international DJs and producers. Experience raw, underground electronic music across multiple stages in an industrial setting with state-of-the-art sound systems.",
    EVENT_SHORT_DESCRIPTION: "Raw underground techno festival",
    EVENT_TICKETS_URL: "https://tickets.verknipt2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@verknipt",
    EVENT_KEYWORDS: "verknipt, techno festival, electronic music, utrecht, underground music, warehouse party",
    EVENT_ORGANIZER: "Verknipt Events",
    EVENT_ORGANIZER_URL: "https://verknipt2025.nl",
    SITE_URL: "https://verknipt2025.nl",
    EVENT_START_TIME: "12:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "12000",
    EVENT_PRICE_FROM: "45",
    EVENT_EMAIL: "info@verknipt.nl",
    EVENT_PHONE: "+31 20 555 0114",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/verknipt",
    EVENT_TWITTER_URL: "https://twitter.com/verknipt",
    EVENT_FACEBOOK_URL: "https://facebook.com/verknipt",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Paula Temple",
        title: "Techno Producer",
        company: "Noise Manifesto",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
      },
      {
        name: "Dax J",
        title: "Techno DJ",
        company: "Monnom Black",
        image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "12:00",
        title: "Doors Open",
        location: "Main Area"
      },
      {
        time: "14:00",
        title: "Opening Sets",
        location: "All Stages"
      },
      {
        time: "18:00",
        title: "Paula Temple",
        speaker: "Paula Temple",
        location: "Main Stage"
      },
      {
        time: "21:00",
        title: "Dax J Closing",
        speaker: "Dax J",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Absolut",
        tier: "presenting",
        logo: "https://example.com/absolut-logo.png"
      },
      {
        name: "Pioneer DJ",
        tier: "gold",
        logo: "https://example.com/pioneer-logo.png"
      }
    ])
  },

  'thunderdome2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Thunderdome 2025",
    EVENT_DATE: "2025-10-25",
    EVENT_LOCATION: "Jaarbeurs, Utrecht",
    EVENT_DESCRIPTION: "The legendary hardcore event returns for its 2025 edition. Experience the raw power of hardcore, gabber, and industrial music in this intense celebration of the harder styles, featuring spectacular production and the scene's biggest names.",
    EVENT_SHORT_DESCRIPTION: "Legendary hardcore music festival",
    EVENT_TICKETS_URL: "https://tickets.thunderdome2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@thunderdome",
    EVENT_KEYWORDS: "thunderdome, hardcore, gabber, industrial music, electronic music, utrecht, harder styles",
    EVENT_ORGANIZER: "ID&T",
    EVENT_ORGANIZER_URL: "https://thunderdome2025.nl",
    SITE_URL: "https://thunderdome2025.nl",
    EVENT_START_TIME: "22:00",
    EVENT_END_TIME: "07:00",
    EVENT_CAPACITY: "25000",
    EVENT_PRICE_FROM: "65",
    EVENT_EMAIL: "info@thunderdome.nl",
    EVENT_PHONE: "+31 20 555 0115",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/thunderdome",
    EVENT_TWITTER_URL: "https://twitter.com/thunderdome",
    EVENT_FACEBOOK_URL: "https://facebook.com/thunderdome",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Angerfist",
        title: "Hardcore DJ",
        company: "Masters of Hardcore",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
      },
      {
        name: "Paul Elstak",
        title: "Gabber Legend",
        company: "Rotterdam Records",
        image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "22:00",
        title: "Doors Open",
        location: "Main Hall"
      },
      {
        time: "00:00",
        title: "Opening Show",
        location: "Main Stage"
      },
      {
        time: "02:00",
        title: "Paul Elstak",
        speaker: "Paul Elstak",
        location: "Main Stage"
      },
      {
        time: "04:00",
        title: "Angerfist",
        speaker: "Angerfist",
        location: "Main Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Monster Energy",
        tier: "presenting",
        logo: "https://example.com/monster-logo.png"
      },
      {
        name: "Q-Dance",
        tier: "platinum",
        logo: "https://example.com/qdance-logo.png"
      }
    ])
  },

  'defqon2025.nl': {
    ...commonConfig,
    EVENT_NAME: "Defqon.1 2025",
    EVENT_DATE: "2025-06-27",
    EVENT_LOCATION: "Biddinghuizen, Netherlands",
    EVENT_DESCRIPTION: "The world's largest harder styles music festival returns to Biddinghuizen. Experience four days of hardstyle, hardcore, and raw style music across multiple stages, featuring spectacular shows, fireworks, and the legendary endshow.",
    EVENT_SHORT_DESCRIPTION: "Ultimate harder styles music festival",
    EVENT_TICKETS_URL: "https://tickets.defqon2025.nl",
    EVENT_IMAGE_URL: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    EVENT_TWITTER_HANDLE: "@defqon",
    EVENT_KEYWORDS: "defqon.1, hardstyle, hardcore, raw style, music festival, q-dance, harder styles",
    EVENT_ORGANIZER: "Q-Dance",
    EVENT_ORGANIZER_URL: "https://defqon2025.nl",
    SITE_URL: "https://defqon2025.nl",
    EVENT_START_TIME: "11:00",
    EVENT_END_TIME: "23:00",
    EVENT_CAPACITY: "150000",
    EVENT_PRICE_FROM: "199",
    EVENT_EMAIL: "info@defqon.nl",
    EVENT_PHONE: "+31 20 555 0116",
    EVENT_LINKEDIN_URL: "https://linkedin.com/company/q-dance",
    EVENT_TWITTER_URL: "https://twitter.com/defqon",
    EVENT_FACEBOOK_URL: "https://facebook.com/defqon1",
    EVENT_SPEAKERS: JSON.stringify([
      {
        name: "Headhunterz",
        title: "Hardstyle Legend",
        company: "Art of Creation",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
      },
      {
        name: "Brennan Heart",
        title: "Hardstyle Producer",
        company: "I AM HARDSTYLE",
        image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d"
      }
    ]),
    EVENT_SCHEDULE: JSON.stringify([
      {
        time: "11:00",
        title: "Festival Opens",
        location: "Festival Grounds"
      },
      {
        time: "14:00",
        title: "Power Hour",
        location: "RED Stage"
      },
      {
        time: "19:00",
        title: "Headhunterz",
        speaker: "Headhunterz",
        location: "RED Stage"
      },
      {
        time: "22:30",
        title: "The Endshow",
        location: "RED Stage"
      }
    ]),
    EVENT_SPONSORS: JSON.stringify([
      {
        name: "Q-Dance",
        tier: "presenting",
        logo: "https://example.com/qdance-logo.png"
      },
      {
        name: "Monster Energy",
        tier: "platinum",
        logo: "https://example.com/monster-logo.png"
      }
    ])
  }
};

// Default event configuration (fallback)
export const defaultEvent = events['ade2025.nl'];
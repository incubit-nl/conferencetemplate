import { PrismaClient } from '@prisma/client';
import { events } from '../lib/events';

const prisma = new PrismaClient();

async function main() {
  // Delete all existing tips first
  await prisma.packingTip.deleteMany();

  // Get all event names from the events object
  const eventNames = Object.values(events).map(event => event.EVENT_NAME);

  // Common tips that can be used across all events with slight variations
  const commonTips = [
    {
      tip: "Pack a portable charger with at least 20,000mAh capacity - your phone will thank you later!",
      authorHandle: "FestivalPro",
    },
    {
      tip: "Bring a reusable water bottle with measurement marks - staying hydrated is key!",
      authorHandle: "HydroHomie",
    },
    {
      tip: "Get a small fanny pack for essentials - keeps your hands free for dancing!",
      authorHandle: "RaveReady",
    },
    {
        tip: "Pack a portable charger with at least 20,000 capacity - your phone will thank you later!",
        authorHandle: "FestivalPro",
        },
        {
        tip: "Bring a reusable water bottle with measurement marks - staying hydrated is key!",
        authorHandle: "HydroHomie",
        },
        {
        tip: "Get a small fanny pack for essentials - keeps your hands free for dancing!",
        authorHandle: "RaveReady",
    }
  ];

  // Event-specific tips
  const eventSpecificTips = {
    'Amsterdam Dance Event 2025': [
      {
        tip: "Book your accommodation near the city center - most ADE venues are within walking distance!",
        authorHandle: "ADEinsider",
      },
      {
        tip: "Get the ADE Pro Pass early if you're interested in the conference part - they sell out quick!",
        authorHandle: "MusicBiz",
      },
      {
        tip: "Download the official ADE app to plan your schedule - there are hundreds of events!",
        authorHandle: "TechnoTips",
      }
    ],
    'Tomorrowland 2025': [
      {
        tip: "Bring comfortable shoes - you'll walk an average of 15km per day at Tomorrowland!",
        authorHandle: "TMLVeteran",
      },
      {
        tip: "Get a locker at Dreamville if you're camping - it's worth the investment!",
        authorHandle: "CampLife",
      },
      {
        tip: "Bring a flag or unique totem - it helps your group find each other!",
        authorHandle: "FestivalFam",
      }
    ],
    'Ultra Music Festival 2025': [
      {
        tip: "Bring a light rain poncho - Miami weather can be unpredictable!",
        authorHandle: "UltraVet",
      },
      {
        tip: "Take the shuttle service - parking near Bayfront Park is a nightmare!",
        authorHandle: "MiamiLocal",
      },
      {
        tip: "Get to the main stage early for headliners - it gets packed fast!",
        authorHandle: "MainStageLife",
      }
    ],
    'EDC Las Vegas 2025': [
      {
        tip: "Bring dust masks - the desert wind can kick up a lot of particles!",
        authorHandle: "PLURwarrior",
      },
      {
        tip: "Start your day with electrolytes - Vegas heat is no joke!",
        authorHandle: "RaveMedic",
      },
      {
        tip: "Get a shuttle pass - driving to the speedway is not worth the hassle!",
        authorHandle: "EDCpro",
      }
    ],
    'Defqon.1 2025': [
      {
        tip: "Bring earplugs rated for high BPM - hardstyle events are louder than most festivals!",
        authorHandle: "BassProtector",
      },
      {
        tip: "Join the morning workout sessions - great way to start the day with fellow warriors!",
        authorHandle: "DefqonWarrior",
      },
      {
        tip: "Get your camping supplies from local Dutch stores - cheaper than festival shops!",
        authorHandle: "CampingPro",
      }
    ]
  };

  // Create tips for each event
  for (const eventName of eventNames) {
    // Add common tips with approved status
    for (const tip of commonTips) {
      await prisma.packingTip.create({
        data: {
          eventName,
          tip: tip.tip,
          authorHandle: tip.authorHandle,
          approved: true,
        },
      });
    }

    // Add event-specific tips if they exist
    const specificTips = eventSpecificTips[eventName as keyof typeof eventSpecificTips] || [];
    for (const tip of specificTips) {
      await prisma.packingTip.create({
        data: {
          eventName,
          tip: tip.tip,
          authorHandle: tip.authorHandle,
          approved: true,
        },
      });
    }
  }

  console.log('Database has been seeded with tips for all events! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
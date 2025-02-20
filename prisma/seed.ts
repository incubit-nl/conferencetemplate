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
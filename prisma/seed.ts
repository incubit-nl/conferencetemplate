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
      tip: "Shove a chunky battery pack in your bag—my phone died last time and I was lost as hell!",
      authorHandle: "Mikeeeeee",
    },
    {
      tip: "I bring a water bottle with lines—keeps me from turning into a sweaty mess!",
      authorHandle: "sarah_",
    },
    {
      tip: "Fanny pack’s my jam—hands free so I can throw ‘em up when the beat drops!",
      authorHandle: "jj",
    },
    {
      tip: "Grab a beat-up cap—sun fried my forehead once, never again!",
      authorHandle: "lisaykit",
    },
    {
      tip: "Sneak some granola bars in—waiting for food sucks when you’re starving!",
      authorHandle: "tommietom",
    },
    {
      tip: "Tiny fan’s a lifesaver—last fest I was melting ‘til I whipped it out!",
      authorHandle: "bigemma",
    },
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
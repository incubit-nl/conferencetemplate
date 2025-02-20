'use client';

import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib';
import { PrismaClient } from '@prisma/client';
import { getEnvVars } from '@/lib/env';
import { useState } from 'react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';


const prisma = new PrismaClient();

interface ChecklistOptions {
  eventName: string;
  isCamping: boolean;
  isDayTrip: boolean;
  isFirstTimer: boolean;
  isBudget: boolean;
}

interface ChecklistSection {
  title: string;
  items: string[];
}

export async function generateChecklist(options: ChecklistOptions) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([800, 1100]); // Larger page size
  const { width, height } = page.getSize();
  const [currentEvent, setCurrentEvent] = useState<any>(null);
  const { toast } = useToast();
  
  // Embed fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  
  // Get community tips
  const tips = await prisma.packingTip.findMany({
    where: {
      eventName: options.eventName,
      approved: true,
    },
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  });

    useEffect(() => {
        const loadEventData = async () => {
            try {
                const env = await getEnvVars();
                setCurrentEvent(env);
            } catch (error) {
                console.error('Error loading event data:', error);
                toast({
                    title: 'Error',
                    description: 'Failed to load event data. Please try again.',
                    variant: 'destructive',
                });
            }
        };
        loadEventData();
    }, [toast]);

// Define sections with items
const sections: ChecklistSection[] = [
    {
        title: 'Essential Items',
        items: [
            'Tickets and ID',
            'Credit/Debit Cards & Cash',
            'Phone and Charger',
            'Portable Battery Pack',
            'Reusable Water Bottle',
            'Sunscreen (SPF 30+)',
            'Sunglasses',
            'Hat or Cap',
            'Hand Sanitizer',
        ]
    },
    {
        title: options.isCamping ? 'Camping Essentials' : 'Comfort Items',
        items: options.isCamping ? [
            'Tent & Stakes',
            'Sleeping Bag & Pillow',
            'Camping Chair',
            'Flashlight/Headlamp',
            'Extra Batteries',
            'Basic Tool Kit',
            'Bug Spray',
            'Cooler',
            'Toilet Paper'
        ] : [
            'Comfortable Backpack',
            'Light Jacket/Sweater',
            'Compact Umbrella',
            'Extra Layer of Clothing',
            'Travel-size Toiletries'
        ]
    },
    {
        title: options.isDayTrip ? 'Day Trip Essentials' : 'Multi-Day Necessities',
        items: options.isDayTrip ? [
            'Day Pack',
            'Snacks',
            'Travel-size Sunscreen',
            'Basic First Aid',
            'Portable Charger'
        ] : [
            'Multiple Changes of Clothes',
            'Full Toiletries Kit',
            'Laundry Bag',
            'First Aid Kit',
            'Any Required Medications',
            'Locker Lock',
            'Extra Socks & Underwear'
        ]
    }
];

if (options.isFirstTimer) {
    sections.push({
        title: 'First Timer Tips',
        items: [
            'Download Festival Map',
            'Install Festival App',
            'Write Down Emergency Contacts',
            'Save Meeting Points',
            'Check Set Times',
            'Read Festival Rules'
        ]
    });
}

if (!options.isBudget) {
    sections.push({
        title: 'Comfort Upgrades',
        items: [
            'Portable Fan',
            'Premium Rain Gear',
            'Inflatable Lounger',
            'Cooling Towel',
            'High-Capacity Power Bank'
        ]
    });
}

  // Draw header
  page.drawText(options.eventName, {
    x: 50,
    y: height - 50,
    size: 28,
    font: timesRomanBold,
    color: rgb(0, 0, 0)
  });

  page.drawText('FESTIVAL PACKING CHECKLIST', {
    x: 50,
    y: height - 80,
    size: 14,
    font: helveticaBold,
    color: rgb(0.4, 0.4, 0.4)
  });

  // Draw sections
  let currentY = height - 130;
  const startX = 50;
  const checkboxSize = 12;
  const textStartX = startX + checkboxSize + 10;

  sections.forEach((section) => {
    // Draw section title
    page.drawText(section.title, {
      x: startX,
      y: currentY,
      size: 16,
      font: helveticaBold,
      color: rgb(0, 0, 0)
    });
    currentY -= 30;

    // Draw items with checkboxes
    section.items.forEach((item) => {
      // Draw checkbox
      page.drawRectangle({
        x: startX,
        y: currentY - 2,
        width: checkboxSize,
        height: checkboxSize,
        borderWidth: 1,
        borderColor: rgb(0.7, 0.7, 0.7),
        color: rgb(1, 1, 1)
      });

      // Draw item text
      page.drawText(item, {
        x: textStartX,
        y: currentY,
        size: 12,
        font: helvetica,
        color: rgb(0, 0, 0)
      });

      currentY -= 25;
    });

    currentY -= 20; // Space between sections
  });

  // Draw community tips section if available
  if (tips.length > 0) {
    currentY -= 20;
    page.drawText('Community Pro Tips', {
      x: startX,
      y: currentY,
      size: 16,
      font: helveticaBold,
      color: rgb(0, 0, 0)
    });
    currentY -= 30;

    tips.forEach((tip) => {
      const tipText = tip.authorHandle 
        ? `${tip.tip} - @${tip.authorHandle}`
        : `${tip.tip}`;
      
      page.drawText(tipText, {
        x: startX,
        y: currentY,
        size: 10,
        font: helvetica,
        color: rgb(0.3, 0.3, 0.3),
        maxWidth: width - 100,
      });
      currentY -= 20;
    });
  }

  // Add footer
const footerText = `Generated by ${currentEvent.SITE_URL} • Save & Share Your List!`;
  const footerWidth = helvetica.widthOfTextAtSize(footerText, 10);
  
  page.drawText(footerText, {
    x: (width - footerWidth) / 2,
    y: 30,
    size: 10,
    font: helvetica,
    color: rgb(0.5, 0.5, 0.5)
  });

  // Generate PDF bytes
  const pdfBytes = await pdfDoc.save();
  const base64 = Buffer.from(pdfBytes).toString('base64');
  const downloadUrl = `data:application/pdf;base64,${base64}`;

  return {
    downloadUrl,
    fileName: `${options.eventName.toLowerCase().replace(/\s+/g, '-')}-checklist.pdf`
  };
}
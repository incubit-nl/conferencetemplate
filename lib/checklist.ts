// lib/checklist.ts
import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ChecklistOptions {
  eventName: string;
  isCamping: boolean;
  isDayTrip: boolean;
  isFirstTimer: boolean;
  isBudget: boolean;
  siteUrl?: string;
}

interface ChecklistSection {
  title: string;
  items: string[];
}

export async function generateChecklist(options: ChecklistOptions) {
  const pdfDoc = await PDFDocument.create();
  const pageWidth = 612; // Standard US Letter width (8.5in * 72dpi)
  const pageHeight = 792; // Standard US Letter height (11in * 72dpi)

  // Embed fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  // Colors
  const primaryColor = rgb(1, 0.84, 0); // Festival yellow (#FFD600)
  const accentColor = rgb(0.1, 0.1, 0.1); // Dark gray
  const textColor = rgb(0, 0, 0); // Black
  const subtleColor = rgb(0.6, 0.6, 0.6); // Light gray

  // Get community tips
  const tips = await prisma.packingTip.findMany({
    where: { eventName: options.eventName, approved: true },
    take: 6, // More tips for multi-page
    orderBy: { createdAt: 'desc' },
  });

  // Define sections
  const sections: ChecklistSection[] = [
    {
      title: 'Must-Haves for Everyone',
      items: [
        'Festival Tickets & ID',
        'Cash + Cards',
        'Phone & Charger Cable',
        'Big-Ass Battery Pack',
        'Reusable Water Bottle',
        'Sunscreen (SPF 50)',
        'Sunglasses That Won’t Break',
        'Trucker Hat or Cap',
        'Hand Sanitizer Wipes',
      ],
    },
    {
      title: options.isCamping ? 'Campsite Survival Kit' : 'Daytime Comfort Zone',
      items: options.isCamping
        ? [
            'Tent (Check the Stakes!)',
            'Sleeping Bag + Tiny Pillow',
            'Foldable Camping Chair',
            'Headlamp (Hands-Free FTW)',
            'Spare Batteries',
            'Pocket Knife or Multi-Tool',
            'Bug Spray That Works',
            'Cooler for Snacks',
            'TP Rolls (Trust Me)',
          ]
        : [
            'Lightweight Backpack',
            'Hoodie for Chilly Nights',
            'Tiny Umbrella or Poncho',
            'Extra T-Shirt',
            'Travel Toothbrush + Paste',
          ],
    },
    {
      title: options.isDayTrip ? 'Day-Tripper’s Quick Pack' : 'Multi-Day Lifeline',
      items: options.isDayTrip
        ? [
            'Small Day Bag',
            'Protein Bars or Nuts',
            'Sunscreen Stick',
            'Band-Aids & Painkillers',
            'Mini Charger',
          ]
        : [
            'Outfits for Every Day',
            'Full-On Toiletries',
            'Trash Bag for Dirty Stuff',
            'First Aid Basics',
            'Meds You Need',
            'Combo Lock for Lockers',
            'Extra Socks (Bliss!)',
          ],
    },
  ];

  if (options.isFirstTimer) {
    sections.push({
      title: 'Newbie Survival Tips',
      items: [
        'Screenshot the Map',
        'Get the Fest App',
        'Text Yourself Emergency #s',
        'Pick a Meet-Up Spot',
        'Scope Set Times Early',
        'Know the Rules (No Surprises!)',
      ],
    });
  }

  if (!options.isBudget) {
    sections.push({
      title: 'Bougie Fest Upgrades',
      items: [
        'Battery-Powered Fan',
        'Fancy Waterproof Poncho',
        'Inflatable Couch Thing',
        'Cooling Neck Wrap',
        'Mega Power Bank (30K mAh)',
      ],
    });
  }

  // --- Page 1: Cover Page ---
  const coverPage = pdfDoc.addPage([pageWidth, pageHeight]);
  coverPage.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: primaryColor,
  });

  // Cover title with a fun twist
  coverPage.drawText(`${options.eventName}`, {
    x: 50,
    y: pageHeight - 150,
    size: 48,
    font: timesRomanBold,
    color: textColor,
    rotate: degrees(-5), // Slight tilt for flair
  });

  coverPage.drawText('Your Ultimate Festival Checklist', {
    x: 60,
    y: pageHeight - 220,
    size: 28,
    font: helveticaBold,
    color: accentColor,
  });

  coverPage.drawText('Made Just for You • Get Ready to Rage!', {
    x: 60,
    y: pageHeight - 260,
    size: 16,
    font: helvetica,
    color: subtleColor,
  });

  if (options.siteUrl) {
    coverPage.drawText(`More Info: ${options.siteUrl}`, {
      x: 60,
      y: 50,
      size: 12,
      font: helvetica,
      color: accentColor,
    });
  }

  // --- Page 2: Checklist ---
  const checklistPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let currentY = pageHeight - 70;
  const col1X = 50; // Left column
  const col2X = pageWidth / 2 + 20; // Right column
  const checkboxSize = 10;
  const textStartOffset = checkboxSize + 10;

  // Header
  checklistPage.drawText('Your Packing List', {
    x: col1X,
    y: pageHeight - 50,
    size: 24,
    font: helveticaBold,
    color: primaryColor,
  });

  // Split sections into two columns
  const midIndex = Math.ceil(sections.length / 2);
  const leftSections = sections.slice(0, midIndex);
  const rightSections = sections.slice(midIndex);

  // Left Column
  leftSections.forEach((section) => {
    checklistPage.drawText(section.title, {
      x: col1X,
      y: currentY,
      size: 18,
      font: helveticaBold,
      color: textColor,
    });
    currentY -= 30;

    section.items.forEach((item) => {
      checklistPage.drawRectangle({
        x: col1X,
        y: currentY - 2,
        width: checkboxSize,
        height: checkboxSize,
        borderWidth: 2,
        borderColor: primaryColor,
        color: rgb(1, 1, 1),
      });

      checklistPage.drawText(item, {
        x: col1X + textStartOffset,
        y: currentY,
        size: 12,
        font: helvetica,
        color: textColor,
        maxWidth: pageWidth / 2 - 60,
      });

      currentY -= 20;
    });
    currentY -= 15;
  });

  // Reset Y for right column
  currentY = pageHeight - 70;

  // Right Column
  rightSections.forEach((section) => {
    checklistPage.drawText(section.title, {
      x: col2X,
      y: currentY,
      size: 18,
      font: helveticaBold,
      color: textColor,
    });
    currentY -= 30;

    section.items.forEach((item) => {
      checklistPage.drawRectangle({
        x: col2X,
        y: currentY - 2,
        width: checkboxSize,
        height: checkboxSize,
        borderWidth: 2,
        borderColor: primaryColor,
        color: rgb(1, 1, 1),
      });

      checklistPage.drawText(item, {
        x: col2X + textStartOffset,
        y: currentY,
        size: 12,
        font: helvetica,
        color: textColor,
        maxWidth: pageWidth / 2 - 60,
      });

      currentY -= 20;
    });
    currentY -= 15;
  });

  // --- Page 3: Community Tips ---
  if (tips.length > 0) {
    const tipsPage = pdfDoc.addPage([pageWidth, pageHeight]);
    currentY = pageHeight - 70;

    tipsPage.drawText('Pro Tips from the Fest Fam', {
      x: col1X,
      y: pageHeight - 50,
      size: 24,
      font: helveticaBold,
      color: primaryColor,
    });

    tips.forEach((tip, index) => {
      const tipText = tip.authorHandle ? `${tip.tip} - @${tip.authorHandle}` : tip.tip;
      tipsPage.drawRectangle({
        x: col1X,
        y: currentY - 10,
        width: 30,
        height: 30,
        color: primaryColor,
      });
      tipsPage.drawText(`${index + 1}`, {
        x: col1X + 10,
        y: currentY - 5,
        size: 14,
        font: helveticaBold,
        color: textColor,
      });

      tipsPage.drawText(tipText, {
        x: col1X + 50,
        y: currentY,
        size: 12,
        font: helvetica,
        color: textColor,
        maxWidth: pageWidth - 100,
      });
      currentY -= 40;
    });

    // Footer
    tipsPage.drawText('Got a killer tip? Share it with us!', {
      x: col1X,
      y: 50,
      size: 12,
      font: helvetica,
      color: subtleColor,
    });
  }

  // Global Footer on all pages
  const footerText = `Generated for ${options.siteUrl} • Worth Every Penny • Enjoy the Fest!`;
  [coverPage, checklistPage, ...(tips.length > 0 ? [pdfDoc.getPage(2)] : [])].forEach((page) => {
    const footerWidth = helvetica.widthOfTextAtSize(footerText, 10);
    page.drawText(footerText, {
      x: (pageWidth - footerWidth) / 2,
      y: 20,
      size: 10,
      font: helvetica,
      color: subtleColor,
    });
  });

  // Save and encode
  const pdfBytes = await pdfDoc.save();
  const base64 = Buffer.from(pdfBytes).toString('base64');
  const downloadUrl = `data:application/pdf;base64,${base64}`;

  return {
    downloadUrl,
    fileName: `${options.eventName.toLowerCase().replace(/\s+/g, '-')}-checklist.pdf`,
  };
}
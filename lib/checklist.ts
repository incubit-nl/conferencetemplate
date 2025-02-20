import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ChecklistOptions {
  eventName: string;
  isCamping: boolean;
  isDayTrip: boolean;
  isFirstTimer: boolean;
  isBudget: boolean;
}

export async function generateChecklist(options: ChecklistOptions) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Get community tips
  const tips = await prisma.packingTip.findMany({
    where: {
      eventName: options.eventName,
      approved: true,
    },
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Basic essentials
  const essentials = [
    'Tickets and ID',
    'Water bottle',
    'Sunscreen',
    'Phone and charger',
    'Cash/cards',
    'Hand sanitizer',
  ];

  // Conditional items based on user choices
  const conditionalItems = [];
  
  if (options.isCamping) {
    conditionalItems.push(
      'Tent',
      'Sleeping bag',
      'Camping chair',
      'Flashlight/headlamp',
      'Portable charger'
    );
  }

  if (!options.isDayTrip) {
    conditionalItems.push(
      'Extra clothes',
      'Toiletries',
      'Earplugs',
      'Sleep mask'
    );
  }

  if (options.isFirstTimer) {
    conditionalItems.push(
      'Festival map',
      'Schedule printout',
      'Meeting point markers'
    );
  }

  if (!options.isBudget) {
    conditionalItems.push(
      'Portable fan',
      'Rain poncho',
      'Comfort items'
    );
  }

  // Draw title
  page.drawText(`Packing Checklist for ${options.eventName}`, {
    x: 50,
    y: height - 50,
    font: boldFont,
    size: 20,
  });

  // Draw essentials
  let currentY = height - 100;
  page.drawText('Essential Items:', {
    x: 50,
    y: currentY,
    font: boldFont,
    size: 14,
  });

  currentY -= 25;
  essentials.forEach(item => {
    page.drawText(`${item}`, {
      x: 50,
      y: currentY,
      font: font,
      size: 12,
    });
    currentY -= 20;
  });

  // Draw conditional items
  currentY -= 20;
  page.drawText('Recommended Items:', {
    x: 50,
    y: currentY,
    font: boldFont,
    size: 14,
  });

  currentY -= 25;
  conditionalItems.forEach(item => {
    page.drawText(`${item}`, {
      x: 50,
      y: currentY,
      font: font,
      size: 12,
    });
    currentY -= 20;
  });

  // Draw community tips
  if (tips.length > 0) {
    currentY -= 20;
    page.drawText('Community Tips:', {
      x: 50,
      y: currentY,
      font: boldFont,
      size: 14,
    });

    currentY -= 25;
    tips.forEach(tip => {
      const tipText = tip.authorHandle 
        ? `${tip.tip} - @${tip.authorHandle}`
        : tip.tip;
      
      page.drawText(`• ${tipText}`, {
        x: 50,
        y: currentY,
        font: font,
        size: 12,
        maxWidth: width - 100,
      });
      currentY -= 30;
    });
  }

  // Add footer
  page.drawText('Generated at festivalchecklist.com', {
    x: width - 200,
    y: 30,
    font: font,
    size: 10,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Generate PDF bytes
  const pdfBytes = await pdfDoc.save();

  // In a real application, you would upload this to a storage service
  // For this example, we'll create a data URL
  const base64 = Buffer.from(pdfBytes).toString('base64');
  const downloadUrl = `data:application/pdf;base64,${base64}`;

  return {
    downloadUrl,
    fileName: `${options.eventName.toLowerCase().replace(/\s+/g, '-')}-checklist.pdf`,
  };
}
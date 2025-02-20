'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';
import { useEffect, useState } from 'react';

const funnyMessages = [
  "Looks like this party's been shut down by the noise police! 🚓",
  "The DJ must've played the wrong track - this page is missing! 🎧",
  "Even our best stage divers couldn't find this page! 🤘",
  "This set's been cancelled, but the festival goes on! 🎪",
  "The crowd surfed away with this page! 🌊",
  "Our sound check failed - this page is just static! 📻",
  "The mosh pit was too intense - this page got lost! 🕺",
  "Security's looking for this page too! 🔍",
];

export default function NotFound() {
  const [message, setMessage] = useState(funnyMessages[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Change message every 3 seconds
    const interval = setInterval(() => {
      setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Header */}
        <div className="relative">
          <h1 
            className={`text-[150px] md:text-[200px] font-black brutal-text
              ${isGlitching ? 'glitch-effect' : ''}`}
            style={{ color: '#FFD600' }}
            data-text="404"
          >
            404
          </h1>
        </div>

        {/* Funny Message */}
        <div className="brutal-border p-6 bg-white dark:bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FFD600]" />
          <p className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Frown className="h-6 w-6" style={{ color: '#FFD600' }} />
            Page Not Found
          </p>
          <p className="text-lg md:text-xl">{message}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg"
            className="brutal-button w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
            style={{ backgroundColor: '#FFD600', color: '#000' }}
          >
            <Link href="/">
              Back to Main Stage
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="brutal-button w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
          >
            <Link href="/checklist">
              Get Your Checklist
            </Link>
          </Button>
        </div>

        {/* Fun Footer */}
        <p className="text-sm text-muted-foreground">
          Don&apos;t worry, the party&apos;s still going strong! 🎉
        </p>
      </div>
    </div>
  );
}
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {Crown, Gift, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const partyEmojis = ['🎉', '🎸', '🎊', '✨', '💃', '🕺', '🌟', '🎵'];

export default function BoobPage() {
  const [bounceCount, setBounceCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [emoji, setEmoji] = useState(partyEmojis[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(partyEmojis[Math.floor(Math.random() * partyEmojis.length)]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleBounce = () => {
    setBounceCount(prev => prev + 1);
    if (bounceCount >= 5) {
      setShowSecret(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Easter Egg Header */}
        <div 
          className="relative cursor-pointer transform transition-transform hover:scale-105"
          onClick={handleBounce}
        >
          <h1 
            className="text-[100px] md:text-[150px] font-black brutal-text tracking-widest"
            style={{ color: '#FFD600' }}
          >
            8008
          </h1>
        </div>

        {/* Congratulations Message */}
        <div className="brutal-border p-6 bg-white dark:bg-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#FFD600]" />
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="h-6 w-6 text-[#FFD600]" />
            <h2 className="text-2xl md:text-3xl font-bold brutal-text">
              CONGRATULATIONS LEGEND!
            </h2>
            <Crown className="h-6 w-6 text-[#FFD600]" />
          </div>
          <p className="text-lg md:text-xl mb-4">
            You&apos;ve discovered our secret page! {emoji}
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            What were you expecting? This is a family-friendly festival! 😅
          </p>
        </div>

        {showSecret && (
          <div className="brutal-border p-6 bg-[#FFD600] text-black animate-in fade-in-0 duration-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="h-6 w-6" />
              <h3 className="text-xl font-bold">Secret Unlocked!</h3>
              <Gift className="h-6 w-6" />
            </div>
            <p>You&apos;ve unlocked the secret dance move: The Calculator!</p>
            <div className="text-4xl mt-2 animate-bounce">
              🕺 8008 💃
            </div>
          </div>
        )}

        {!showSecret && (
          <div className="text-muted-foreground text-sm">
            <Sparkles className="inline-block h-4 w-4 mr-2" />
            Psst... try clicking the numbers above!
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-center">
          <Button 
            asChild
            size="lg"
            className="brutal-button text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
            style={{ backgroundColor: '#FFD600', color: '#000' }}
          >
            <Link href="/">
              Back to Reality
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          You&apos;re one of the few who&apos;ve found this page. Nice! 🎯
        </p>
      </div>
    </div>
  );
}
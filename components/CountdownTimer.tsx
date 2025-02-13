"use client";

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="brutal-border p-4 text-center" style={{ backgroundColor: '#FFD600' }}>
          <div className="brutal-text text-2xl sm:text-4xl font-black">{value}</div>
          <div className="brutal-text text-xs sm:text-sm">{unit}</div>
        </div>
      ))}
    </div>
  );
}
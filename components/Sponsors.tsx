'use client';

import { Sponsor } from '@/lib/env';

interface SponsorsProps {
  sponsors: Sponsor[];
}

export function Sponsors({ sponsors }: SponsorsProps) {
  return (
    <section className="brutal-border p-4 md:p-8 bg-white dark:bg-black">
      <h2 className="brutal-text text-2xl md:text-3xl font-black mb-4 md:mb-8 text-center" style={{ color: '#FFD600' }}>Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="brutal-border p-3 md:p-4 bg-secondary flex items-center justify-center">
            <div className="text-center">
              <h3 className="brutal-text text-base md:text-lg font-bold">{sponsor.name}</h3>
              <p className="text-sm text-muted-foreground capitalize">{sponsor.tier} Sponsor</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
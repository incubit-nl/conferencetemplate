'use client';

import { Speaker } from '@/lib/env';

interface SpeakersProps {
  speakers: Speaker[];
}

export function Speakers({ speakers }: SpeakersProps) {
  return (
    <section className="brutal-border p-4 md:p-8 bg-white dark:bg-black mb-8 md:mb-16">
      <h2 className="brutal-text text-2xl md:text-3xl font-black mb-4 md:mb-8 text-center" style={{ color: '#FFD600' }}>Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {speakers.map((speaker) => (
          <div key={speaker.name} className="brutal-border p-3 md:p-4 bg-secondary">
            <h3 className="brutal-text text-lg md:text-xl font-bold">{speaker.name}</h3>
            <p className="text-sm mb-1">{speaker.title}</p>
            <p className="text-sm text-muted-foreground">{speaker.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
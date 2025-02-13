"use client";

import { Speaker } from '@/lib/env';

interface SpeakersProps {
  speakers: Speaker[];
}

export function Speakers({ speakers }: SpeakersProps) {
  return (
    <section className="brutal-border p-8 bg-white dark:bg-black mb-16">
      <h2 className="brutal-text text-3xl font-black mb-8 text-center">Speakers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <div key={speaker.name} className="brutal-border p-4 bg-secondary">
            <h3 className="brutal-text text-xl font-bold">{speaker.name}</h3>
            <p className="text-sm mb-1">{speaker.title}</p>
            <p className="text-sm text-muted-foreground">{speaker.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
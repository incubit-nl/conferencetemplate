"use client";

import Image from 'next/image';
import { Sponsor } from '@/lib/env';

interface SponsorsProps {
  sponsors: Sponsor[];
}

export function Sponsors({ sponsors }: SponsorsProps) {
  return (
    <section className="brutal-border p-8 bg-white dark:bg-black">
      <h2 className="brutal-text text-3xl font-black mb-8 text-center">Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="brutal-border p-4 bg-secondary flex items-center justify-center">
            <div className="relative w-full aspect-[3/2]">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
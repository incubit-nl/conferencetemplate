'use client';

import { Clock, MapPin } from 'lucide-react';
import { ScheduleItem } from '@/lib/env';

interface ScheduleProps {
  schedule: ScheduleItem[];
}

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <section className="brutal-border p-4 md:p-8 bg-white dark:bg-black mb-8 md:mb-16">
      <h2 className="brutal-text text-2xl md:text-3xl font-black mb-4 md:mb-8 text-center" style={{ color: '#FFD600' }}>Schedule</h2>
      <div className="space-y-4 md:space-y-6">
        {schedule.map((item, index) => (
          <div key={index} className="brutal-border p-3 md:p-4 bg-secondary">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
              <div>
                <h3 className="brutal-text text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                {item.speaker && (
                  <p className="text-sm text-muted-foreground mb-2">Speaker: {item.speaker}</p>
                )}
                <div className="flex items-center gap-2 text-sm mb-1">
                  <Clock className="h-4 w-4" style={{ color: '#FFD600' }} />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" style={{ color: '#FFD600' }} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getEnvVars } from '@/lib/env';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EventSchema } from '@/components/EventSchema';
import { Calendar, MapPin, Ticket, Users, Clock, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { SocialLinks } from '@/components/SocialLinks';
import { Speakers } from '@/components/Speakers';
import { Schedule } from '@/components/Schedule';
import { Sponsors } from '@/components/Sponsors';
import { CookieBanner } from '@/components/CookieBanner';
import { IncubitPromo } from '@/components/IncubitPromo';
import { logger } from '@/lib/logger';

export default function Home() {
  const [config, setConfig] = useState<Awaited<ReturnType<typeof getEnvVars>> | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const envVars = await getEnvVars();
        setConfig(envVars);
        logger.info('Configuration loaded successfully');
      } catch (error) {
        logger.error('Error loading configuration:', error);
      }
    };

    loadConfig();
  }, []);

  if (!config) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <EventSchema {...config} />

      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={config.EVENT_IMAGE_URL}
              alt={config.EVENT_NAME}
              fill
              className="object-cover brightness-50"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 
              className="brutal-text text-6xl md:text-8xl font-black mb-6 text-white glitch-effect"
              data-text={config.EVENT_NAME}
            >
              {config.EVENT_NAME}
            </h1>
            <p className="brutal-text text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              {config.EVENT_DESCRIPTION}
            </p>
            <Button 
              size="lg"
              asChild
              className="brutal-button text-lg px-8 py-6"
              style={{ backgroundColor: '#FFD600', color: '#000' }}
            >
              <a href={config.EVENT_TICKETS_URL} target="_blank" rel="noopener noreferrer">
              <Ticket className="mr-2 h-6 w-6" />
              Get Your Tickets
              </a>
            </Button>
          </div>
        </div>

        {/* Event Details */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="brutal-border p-6 bg-white dark:bg-black">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8" style={{ color: '#FFD600' }} />
                <div>
                  <h3 className="brutal-text font-bold">Date & Time</h3>
                  <p>{new Date(config.EVENT_DATE).toLocaleDateString('en-NL', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                  <p>{config.EVENT_START_TIME} - {config.EVENT_END_TIME}</p>
                </div>
              </div>
            </div>
            
            <div className="brutal-border p-6 bg-white dark:bg-black">
                <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8" style={{ color: '#FFD600' }} />
                <div>
                  <h3 className="brutal-text font-bold">Location</h3>
                  <p>{config.EVENT_LOCATION}</p>
                </div>
                </div>
            </div>

            <div className="brutal-border p-6 bg-white dark:bg-black">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8" style={{ color: '#FFD600' }} />
                <div>
                  <h3 className="brutal-text font-bold">Capacity</h3>
                  <p>{parseInt(config.EVENT_CAPACITY).toLocaleString()} Attendees</p>
                  <p className="text-sm">
                    {config.EVENT_PRICE_FROM === "0" 
                      ? "Free Entry"
                      : `Starting from ${config.EVENT_CURRENCY} ${config.EVENT_PRICE_FROM}`
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="brutal-border p-8 bg-white dark:bg-black mb-16">
            <h2 className="brutal-text text-3xl font-black mb-6 text-center">Time Until Event</h2>
            <CountdownTimer targetDate={config.EVENT_DATE} />
          </div>

          <Speakers speakers={config.EVENT_SPEAKERS} />
          <Schedule schedule={config.EVENT_SCHEDULE} />
          <Sponsors sponsors={config.EVENT_SPONSORS} />

          <div className="brutal-border p-8 bg-white dark:bg-black mt-16">
            <h2 className="brutal-text text-3xl font-black mb-6 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a href={`mailto:${config.EVENT_EMAIL}`} className="brutal-button p-4 flex items-center justify-center gap-2">
                <Mail className="h-6 w-6" />
                {config.EVENT_EMAIL}
              </a>
              <a href={`tel:${config.EVENT_PHONE}`} className="brutal-button p-4 flex items-center justify-center gap-2">
                <Phone className="h-6 w-6" />
                {config.EVENT_PHONE}
              </a>
            </div>
            <SocialLinks env={config} className="mt-8" />
          </div>
        </div>
        {/* IncubitPromo */}
        <IncubitPromo />

        {/* CookieBanner */}
        <CookieBanner />
      </main>
    </>
  );
}
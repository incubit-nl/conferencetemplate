'use client';

import Link from 'next/link';
import { getEnvVars } from '@/lib/env';
import { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
  const [config, setConfig] = useState<Awaited<ReturnType<typeof getEnvVars>> | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      const envVars = await getEnvVars();
      setConfig(envVars);
    };

    loadConfig();
  }, []);

  if (!config) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="brutal-border p-6 md:p-8 bg-white dark:bg-black mb-8">
          <h1 className="brutal-text text-3xl md:text-4xl font-black mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-sm md:text-base">
            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">Important Disclaimer</h2>
              <div className="brutal-border p-4 bg-secondary mb-6">
                <p className="mb-2"><strong>Please Note:</strong> This website is created and maintained by Incubit.nl, a digital agency.</p>
                <p className="mb-2">We are <strong>not</strong> the official organizers of {config.EVENT_NAME}. This website serves as an informational platform only.</p>
                <p>Incubit.nl is not affiliated with, endorsed by, or connected to the event organizers in any way. For official information, please visit the event&apos;s official website or contact the organizers directly.</p>
              </div>
            </section>

            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">1. Information We Collect</h2>
              <p className="mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage Data (through cookies and analytics)</li>
                <li>Device information</li>
                <li>IP addresses</li>
                <li>Browser type and version</li>
              </ul>
            </section>

            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analyze website traffic and usage patterns</li>
                <li>Remember your preferences</li>
                <li>Improve your browsing experience</li>
              </ul>
            </section>

            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">3. Data Usage</h2>
              <p>We use the collected data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve our website functionality</li>
                <li>Analyze user behavior and preferences</li>
                <li>Enhance user experience</li>
                <li>Fix technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">4. Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Vercel for website hosting</li>
              </ul>
            </section>

            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of cookies</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="brutal-text text-xl font-bold mb-3">6. Contact Information</h2>
              <p>For any privacy-related questions or concerns, please contact us at:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:privacy@incubit.nl" className="text-primary hover:underline">privacy@incubit.nl</a>
              </p>
            </section>

            <div className="mt-8 pt-6 border-t">
              <Link href="/" className="brutal-button inline-block px-6 py-3 text-sm">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
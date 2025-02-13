"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    Cookies.set('cookie-consent', 'false', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-[4.5rem] left-0 right-0 mx-auto p-4 md:bottom-4 z-50">
      <Card className="brutal-border mx-auto max-w-2xl p-4 bg-white dark:bg-black">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h3 className="brutal-text text-lg font-bold">🍪 Cookie Preferences</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience and analyze our website traffic. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies. Learn more about how we use cookies in our{' '}
              <Link href="/privacy" className="underline hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button 
              variant="outline" 
              onClick={declineCookies}
              className="brutal-button w-full sm:w-auto"
            >
              Decline
            </Button>
            <Button 
              onClick={acceptCookies}
              className="brutal-button w-full sm:w-auto"
            >
              Accept Cookies
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
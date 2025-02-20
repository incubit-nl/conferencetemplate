// components/Footer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log('Pathname changed to:', pathname);
    // Reset visibility to true on pathname change
    setIsVisible(true);

    // Start the fade-out timer
    const timer = setTimeout(() => {
      console.log('Timer triggered, hiding footer');
      setIsVisible(false);
    }, 5000);

    // Cleanup the timer
    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <footer
      className="fixed bottom-0 w-full bg-background/80 backdrop-blur-sm border-t py-4 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm mb-1">
          Website crafted by{' '}
          <a
            href="https://incubit.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
          >
            Incubit.io
          </a>
        </p>
        <p className="text-xs text-muted-foreground">
          Leading Dutch Digital Agency | Custom Web Development & Design
        </p>
      </div>
    </footer>
  );
};

export default Footer;
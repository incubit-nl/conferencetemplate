'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getEnvVars } from '@/lib/env';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<any>(null);
  const { toast } = useToast();


    useEffect(() => {
      const loadEventData = async () => {
        try {
          const env = await getEnvVars();
          setCurrentEvent(env);
        } catch (error) {
          console.error('Error loading event data:', error);
          toast({
            title: 'Error',
            description: 'Failed to load event data. Please try again.',
            variant: 'destructive',
          });
        }
      };
  
      loadEventData();
    }, [toast]);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="brutal-text font-bold text-lg">
            {currentEvent?.EVENT_NAME}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/checklist" 
              className="brutal-text text-sm hover:text-primary transition-colors"
            >
              Checklist
            </Link>
            <Link 
              href="/tips" 
              className="brutal-text text-sm hover:text-primary transition-colors"
            >
              Tips
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/checklist"
                onClick={() => setIsOpen(false)}
                className="brutal-button p-2 text-center"
              >
                Checklist
              </Link>
              <Link 
                href="/tips"
                onClick={() => setIsOpen(false)}
                className="brutal-button p-2 text-center"
              >
                Tips
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
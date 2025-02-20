import Link from 'next/link';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckSquare, MessageSquare } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="brutal-border p-6 bg-white dark:bg-black hover:transform hover:-translate-y-1 transition-transform">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckSquare className="h-12 w-12" style={{ color: '#FFD600' }} />
            <h3 className="brutal-text text-xl font-bold">Need a Packing List?</h3>
            <p className="text-muted-foreground">
              Get your personalized festival packing checklist based on your needs
            </p>
            <Button asChild className="brutal-button w-full" style={{ backgroundColor: '#FFD600', color: '#000' }}>
              <Link href="/checklist">
                Create Your Checklist
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="brutal-border p-6 bg-white dark:bg-black hover:transform hover:-translate-y-1 transition-transform">
          <div className="flex flex-col items-center text-center space-y-4">
            <MessageSquare className="h-12 w-12" style={{ color: '#FFD600' }} />
            <h3 className="brutal-text text-xl font-bold">Share Your Tips</h3>
            <p className="text-muted-foreground">
              Help others by sharing your festival experience and packing tips
            </p>
            <Button asChild className="brutal-button w-full" style={{ backgroundColor: '#FFD600', color: '#000' }}>
              <Link href="/tips">
                Share Tips
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
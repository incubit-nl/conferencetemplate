'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function CancelPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-lg mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Cancelled</h1>
        <p className="mb-4">
          Your payment was cancelled. No worries! You can try again whenever you&apos;re ready.
        </p>
        <Button onClick={() => router.push('/checklist')}>
          Back to Checklist Generator
        </Button>
      </Card>
    </div>
  );
}
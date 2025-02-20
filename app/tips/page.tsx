'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getEnvVars } from '@/lib/env';

interface TipFormData {
  eventName: string;
  tip: string;
  authorHandle: string;
}

export default function TipsPage() {
  const [loading, setLoading] = useState(false);
  const [tips, setTips] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<TipFormData>();

  useEffect(() => {
    const loadEvents = async () => {
      const env = await getEnvVars();
      // Extract events from env
      // This would depend on your events structure
    };
    loadEvents();
  }, []);

  useEffect(() => {
    const loadTips = async () => {
      if (!selectedEvent) return;
      
      try {
        const response = await fetch(`/api/tips?eventName=${selectedEvent}`);
        const data = await response.json();
        setTips(data);
      } catch (error) {
        console.error('Error loading tips:', error);
      }
    };
    loadTips();
  }, [selectedEvent]);

  const onSubmit = async (data: TipFormData) => {
    if (!executeRecaptcha) {
      toast({
        title: 'Error',
        description: 'ReCAPTCHA not loaded. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      const recaptchaToken = await executeRecaptcha('submit_tip');
      
      const response = await fetch('/api/tips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your tip has been submitted for review.',
        });
        reset();
      } else {
        throw new Error('Failed to submit tip');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit tip. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Festival Packing Tips</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Submit a Tip</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Select onValueChange={(value) => register('eventName').onChange({ target: { value } })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an event" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.name} value={event.name}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea
                {...register('tip')}
                placeholder="Share your packing tip (max 280 characters)"
                maxLength={280}
              />
            </div>

            <div>
              <Input
                {...register('authorHandle')}
                placeholder="Your handle (optional, e.g. @FestivalPro)"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Tip'}
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Browse Tips</h2>
          <div className="mb-4">
            <Select onValueChange={setSelectedEvent}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by event" />
              </SelectTrigger>
              <SelectContent>
                {events.map((event) => (
                  <SelectItem key={event.name} value={event.name}>
                    {event.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {tips.map((tip) => (
              <Card key={tip.id} className="p-4">
                <p className="text-sm">{tip.tip}</p>
                {tip.authorHandle && (
                  <p className="text-sm text-muted-foreground mt-2">
                    - {tip.authorHandle}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getEnvVars } from '@/lib/env';

interface FormData {
  eventName: string;
  isCamping: string;
  isDayTrip: string;
  isFirstTimer: string;
  isBudget: string;
}

export default function ChecklistPage() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [paymentsEnabled, setPaymentsEnabled] = useState(true);
  const { toast } = useToast();
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<FormData>();

  useEffect(() => {
    const loadEvents = async () => {
      const env = await getEnvVars();
      // Extract events from env
      // This would depend on your events structure
    };
    loadEvents();

    // Check payment settings
    const checkPaymentSettings = async () => {
      try {
        const response = await fetch('/api/payment-settings');
        const data = await response.json();
        setPaymentsEnabled(data.isEnabled);
      } catch (error) {
        console.error('Error checking payment settings:', error);
      }
    };
    checkPaymentSettings();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await fetch('/api/checklist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          isCamping: data.isCamping === 'true',
          isDayTrip: data.isDayTrip === 'true',
          isFirstTimer: data.isFirstTimer === 'true',
          isBudget: data.isBudget === 'true',
        }),
      });

      const result = await response.json();

      if (result.url) {
        // Redirect to Stripe Checkout
        window.location.href = result.url;
      } else if (result.downloadUrl) {
        // Direct download (free mode)
        const link = document.createElement('a');
        link.href = result.downloadUrl;
        link.download = result.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast({
          title: 'Success!',
          description: 'Your checklist has been generated.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate checklist. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Festival Packing Checklist</h1>
      
      <div className="text-center mb-8">
        <p className="text-lg">
          {paymentsEnabled
            ? 'Get your custom packing checklist for just $2.99—built with tips from festival pros like you!'
            : 'Get your free custom packing checklist—built with tips from festival pros like you!'}
        </p>
      </div>
      
      <Card className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <Label>Select Event</Label>
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

          <div className="space-y-4">
            <Label>Are you camping?</Label>
            <RadioGroup defaultValue="false" onValueChange={(value) => register('isCamping').onChange({ target: { value } })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="camping-yes" />
                <Label htmlFor="camping-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="camping-no" />
                <Label htmlFor="camping-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Day trip or multi-day?</Label>
            <RadioGroup defaultValue="day" onValueChange={(value) => register('isDayTrip').onChange({ target: { value } })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="day-trip" />
                <Label htmlFor="day-trip">Day Trip</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="multi-day" />
                <Label htmlFor="multi-day">Multi-day</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>First timer?</Label>
            <RadioGroup defaultValue="false" onValueChange={(value) => register('isFirstTimer').onChange({ target: { value } })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="first-yes" />
                <Label htmlFor="first-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="first-no" />
                <Label htmlFor="first-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Budget or bougie?</Label>
            <RadioGroup defaultValue="true" onValueChange={(value) => register('isBudget').onChange({ target: { value } })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="budget" />
                <Label htmlFor="budget">Budget</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="bougie" />
                <Label htmlFor="bougie">Bougie</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Generating...' : paymentsEnabled ? 'Generate Checklist ($2.99)' : 'Generate Free Checklist'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
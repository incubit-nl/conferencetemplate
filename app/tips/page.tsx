'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getEnvVars } from '@/lib/env';
import { Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface TipFormData {
    eventName: string;
    tip: string;
    authorHandle: string;
}

function TipsForm() {
    const [loading, setLoading] = useState(false);
    const [tips, setTips] = useState<any[]>([]);
    const [currentEvent, setCurrentEvent] = useState<any>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { toast } = useToast();
    const { register, handleSubmit, reset } = useForm<TipFormData>();
    const router = useRouter();

    useEffect(() => {
        const loadEventData = async () => {
            try {
                const env = await getEnvVars();
                setCurrentEvent(env);
                loadTips(env.EVENT_NAME);
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

    const loadTips = async (eventName: string) => {
        try {
            const response = await fetch(`/api/tips?eventName=${encodeURIComponent(eventName)}`);
            const data = await response.json();
            setTips(data);
        } catch (error) {
            console.error('Error loading tips:', error);
            toast({
                title: 'Error',
                description: 'Failed to load tips. Please try again.',
                variant: 'destructive',
            });
        }
    };

    const onSubmit = async (data: TipFormData) => {
        if (!currentEvent?.EVENT_NAME) {
            toast({
                title: 'Error',
                description: 'Please wait for event data to load.',
                variant: 'destructive',
            });
            return;
        }

        if (!executeRecaptcha) {
            toast({
                title: 'Error',
                description: 'reCAPTCHA not initialized. Please refresh the page.',
                variant: 'destructive',
            });
            return;
        }

        try {
            setLoading(true);
            
            // Execute reCAPTCHA
            const recaptchaToken = await executeRecaptcha('tip_submit');
            
            const response = await fetch('/api/tips', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    eventName: currentEvent.EVENT_NAME,
                    recaptchaToken,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit tip');
            }

            toast({
                title: 'Success!',
                description: 'Your tip has been submitted for review.',
            });
            
            reset();
            loadTips(currentEvent.EVENT_NAME);
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
            <h1 className="text-4xl font-bold text-center mb-4">Festival Packing Tips</h1>
            <p className="text-center text-lg mb-8 text-muted-foreground">Share your festival wisdom with fellow attendees</p>

            <div className="grid gap-8 md:grid-cols-2">
                <Card className="p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
                    <h2 className="text-2xl font-bold mb-4 text-[#FFD600] flex items-center gap-2">
                        <Lightbulb className="h-6 w-6" />
                        Submit a Tip
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Input
                                {...register('eventName')}
                                value={currentEvent?.EVENT_NAME || ''}
                                readOnly
                                hidden
                            />
                            <h2 className="text-xl font-bold mb-2 text-[#FFD600]">{currentEvent?.EVENT_NAME}</h2>
                        </div>

                        <div>
                            <Textarea
                                {...register('tip')}
                                placeholder="Share your packing tip (max 280 characters)"
                                maxLength={280}
                                required
                                className="border-[#FFD600] focus-visible:ring-[#FFD600]"
                            />
                        </div>

                        <div>
                            <Input
                                {...register('authorHandle')}
                                placeholder="Your handle (optional, e.g. @FestivalPro)"
                                className="border-[#FFD600] focus-visible:ring-[#FFD600]"
                            />
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full bg-[#FFD600] hover:bg-[#FFD600]/90 text-black brutal-border border-[#FFD600]" 
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Tip'}
                        </Button>
                    </form>
                </Card>

                <Card className="p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
                    <h2 className="text-2xl font-bold mb-4 text-[#FFD600] flex items-center gap-2">
                        <Lightbulb className="h-6 w-6" />
                        Browse Tips
                    </h2>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2 text-[#FFD600]">{currentEvent?.EVENT_NAME}</h2>
                    </div>

                    <div className="space-y-4">
                        {tips.length === 0 ? (
                            <p className="text-center text-muted-foreground p-4 brutal-border border-[#FFD600]">
                                No approved tips yet. Be the first to share!
                            </p>
                        ) : (
                            tips.map((tip) => (
                                <Card key={tip.id} className="p-4 brutal-border border-[#FFD600]">
                                    <p className="text-sm">{tip.tip}</p>
                                    {tip.authorHandle && (
                                        <p className="text-sm mt-2">
                                            - {tip.authorHandle}
                                        </p>
                                    )}
                                </Card>
                            ))
                        )}
                    </div>
                </Card>
            </div>

            <div className="mt-8 text-center">
                <Button 
                    onClick={() => router.push('/')} 
                    className="bg-[#FFD600] hover:bg-[#FFD600]/90 text-black brutal-border border-[#FFD600]"
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
}

export default function TipsPage() {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    
    if (!siteKey) {
        console.error('Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable');
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto p-6 text-center">
                    <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
                    <p>reCAPTCHA site key is not configured. Please check your environment variables.</p>
                    <p className="text-sm text-muted-foreground mt-2">Required: NEXT_PUBLIC_RECAPTCHA_SITE_KEY</p>
                </Card>
            </div>
        );
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <TipsForm />
        </GoogleReCaptchaProvider>
    );
}
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getEnvVars } from '@/lib/env';
import { Lightbulb, Star, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { AdSlot } from '@/components/AdSlot';
import Script from 'next/script';

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
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1971264696648136"
                crossOrigin="anonymous"
                strategy="lazyOnload"
            />

            <h1 className="text-4xl font-bold text-center mb-4 text-[#FFD600]">Festival Packing Tips</h1>
            
            {/* Enhanced Introduction */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4">Share Your Festival Wisdom</h2>
                <p className="text-lg mb-4">Help fellow festival-goers have the best experience possible!</p>
                <div className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
                    <p>✓ Share your hard-learned lessons and clever hacks</p>
                    <p>✓ Help first-timers avoid common mistakes</p>
                    <p>✓ Build a community of knowledgeable festival-goers</p>
                    <p>✓ Get your tips featured in our packing checklists</p>
                </div>
            </div>

            {/* First Ad Slot */}
            <AdSlot 
                adSlot="1234567890"
                className="brutal-border p-4 bg-white dark:bg-black mb-8"
            />

            {/* Why Share Tips Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Star className="h-6 w-6 text-[#FFD600]" />
                        Why Share Your Tips?
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-[#FFD600] mt-1" />
                            <div>
                                <h4 className="font-semibold">Help Others</h4>
                                <p className="text-muted-foreground">Your experience can make someone else&apos;s festival journey smoother.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <TrendingUp className="h-5 w-5 text-[#FFD600] mt-1" />
                            <div>
                                <h4 className="font-semibold">Build Community</h4>
                                <p className="text-muted-foreground">Join a network of experienced festival-goers sharing knowledge.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MessageSquare className="h-5 w-5 text-[#FFD600] mt-1" />
                            <div>
                                <h4 className="font-semibold">Get Featured</h4>
                                <p className="text-muted-foreground">Your best tips might be featured in our official checklists!</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-[#FFD600]" />
                        Submit Your Tip
                    </h3>
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
                                placeholder="Share your festival packing tip (max 280 characters)"
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
            </div>

            {/* Second Ad Slot */}
            <AdSlot 
                adSlot="0987654321"
                className="brutal-border p-4 bg-white dark:bg-black mb-8"
            />

            {/* Community Tips Section */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Community Tips & Tricks</h3>
                <div className="grid gap-6">
                    {tips.length === 0 ? (
                        <Card className="p-6 text-center brutal-border border-[#FFD600]">
                            <p className="text-lg mb-2">Be the First to Share!</p>
                            <p className="text-muted-foreground">
                                No tips yet for this event. Share your knowledge and help build our festival community!
                            </p>
                        </Card>
                    ) : (
                        tips.map((tip) => (
                            <Card key={tip.id} className="p-6 brutal-border border-[#FFD600] bg-[#FFD600]/5">
                                <div className="flex items-start gap-4">
                                    <Lightbulb className="h-6 w-6 text-[#FFD600] mt-1" />
                                    <div>
                                        <p className="text-lg mb-2">{tip.tip}</p>
                                        {tip.authorHandle && (
                                            <p className="text-sm text-muted-foreground">
                                                Shared by {tip.authorHandle}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>

            {/* Third Ad Slot */}
            <AdSlot 
                adSlot="5432109876"
                className="brutal-border p-4 bg-white dark:bg-black mb-8"
            />

            {/* Guidelines Section */}
            <Card className="p-6 brutal-border border-[#FFD600] mb-8">
                <h3 className="text-xl font-bold mb-4">Tip Sharing Guidelines</h3>
                <div className="space-y-3">
                    <p>✓ Keep tips clear, concise, and helpful</p>
                    <p>✓ Focus on practical, actionable advice</p>
                    <p>✓ Share unique insights from your experience</p>
                    <p>✓ Be respectful and supportive of all festival-goers</p>
                    <p>✓ Tips are reviewed before being published</p>
                </div>
            </Card>

            <div className="text-center mb-14">
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
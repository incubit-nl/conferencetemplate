'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { getEnvVars } from '@/lib/env';
import { Tent, Sun, Calendar, CreditCard, HelpCircle, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { AdSlot } from '@/components/AdSlot';
import Script from 'next/script';

interface FormData {
    eventName: string;
    isCamping: string;
    isDayTrip: string;
    isFirstTimer: string;
    isBudget: string;
}

function ChecklistForm() {
    const [loading, setLoading] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<any>(null);
    const [paymentsEnabled, setPaymentsEnabled] = useState(true);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { toast } = useToast();
    const router = useRouter();
    const { register, handleSubmit } = useForm<FormData>();

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

        const checkPaymentSettings = async () => {
            try {
                const response = await fetch('/api/payment-settings');
                const data = await response.json();
                setPaymentsEnabled(data.isEnabled);
            } catch (error) {
                console.error('Error checking payment settings:', error);
            }
        };

        loadEventData();
        checkPaymentSettings();
    }, [toast]);

    const onSubmit = async (data: FormData) => {
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
            const recaptchaToken = await executeRecaptcha('checklist_submit');
            
            const response = await fetch('/api/checklist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    eventName: currentEvent.EVENT_NAME,
                    isCamping: data.isCamping === 'true',
                    isDayTrip: data.isDayTrip === 'true',
                    isFirstTimer: data.isFirstTimer === 'true',
                    isBudget: data.isBudget === 'true',
                    recaptchaToken,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to generate checklist');
            }

            if (result.url) {
                window.location.href = result.url;
            } else if (result.downloadUrl) {
                const link = document.createElement('a');
                link.href = result.downloadUrl;
                link.download = result.fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                toast({
                    title: 'Success!',
                    description: 'Your personalized checklist is ready. Check your downloads!',
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
        <TooltipProvider>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1971264696648136"
                crossOrigin="anonymous"
                strategy="lazyOnload"
            />
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-4 text-[#FFD600]">Festival Packing Checklist</h1>
                
                {/* Enhanced Value Proposition */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Never Forget Essential Festival Gear Again!</h2>
                    <p className="text-lg mb-4">
                        {paymentsEnabled
                            ? 'Get your custom packing checklist for just $2.99'
                            : 'Get your free custom packing checklist'}
                    </p>
                    <div className="space-y-2 text-muted-foreground max-w-2xl mx-auto">
                        <p>✓ Personalized for your specific festival experience</p>
                        <p>✓ Expert tips from seasoned festival-goers</p>
                        <p>✓ Optimized for your camping and comfort preferences</p>
                        <p>✓ Printable PDF format for easy use</p>
                    </div>
                </div>

                {/* First Ad Slot */}
                <AdSlot 
                    adSlot="1234567890"
                    className="brutal-border p-4 bg-white dark:bg-black mb-8"
                />
                
                <Card className="max-w-2xl mx-auto p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
                    <div className="mb-6 brutal-border p-4">
                        <h2 className="text-xl font-bold mb-2 text-[#FFD600]">{currentEvent?.EVENT_NAME}</h2>
                        <p className="text-sm text-muted-foreground">{currentEvent?.EVENT_DESCRIPTION}</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        {/* Existing form fields */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Tent className="h-5 w-5 text-[#FFD600]" />
                                <Label>Are you camping?</Label>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <HelpCircle className="h-4 w-4 text-[#FFD600]" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Choose camping for tent-specific packing items</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <RadioGroup defaultValue="false" onValueChange={(value) => register('isCamping').onChange({ target: { value } })} className="grid grid-cols-2 gap-4">
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="true" id="camping-yes" className="sr-only" />
                                    <Label htmlFor="camping-yes" className="block text-center cursor-pointer">Yes, I&apos;m camping</Label>
                                </div>
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="false" id="camping-no" className="sr-only" />
                                    <Label htmlFor="camping-no" className="block text-center cursor-pointer">No camping</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Second Ad Slot */}
                        <AdSlot 
                            adSlot="0987654321"
                            className="brutal-border p-4 bg-white dark:bg-black my-8"
                        />

                        {/* Remaining form fields */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-[#FFD600]" />
                                <Label>Trip Duration</Label>
                            </div>
                            <RadioGroup defaultValue="true" onValueChange={(value) => register('isDayTrip').onChange({ target: { value } })} className="grid grid-cols-2 gap-4">
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="true" id="day-trip" className="sr-only" />
                                    <Label htmlFor="day-trip" className="block text-center cursor-pointer">Day Trip</Label>
                                </div>
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="false" id="multi-day" className="sr-only" />
                                    <Label htmlFor="multi-day" className="block text-center cursor-pointer">Multiple Days</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <HelpCircle className="h-5 w-5 text-[#FFD600]" />
                                <Label>First Festival?</Label>
                            </div>
                            <RadioGroup defaultValue="false" onValueChange={(value) => register('isFirstTimer').onChange({ target: { value } })} className="grid grid-cols-2 gap-4">
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="true" id="first-yes" className="sr-only" />
                                    <Label htmlFor="first-yes" className="block text-center cursor-pointer">Yes, first time!</Label>
                                </div>
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="false" id="first-no" className="sr-only" />
                                    <Label htmlFor="first-no" className="block text-center cursor-pointer">Experienced</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-[#FFD600]" />
                                <Label>Packing Style</Label>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <HelpCircle className="h-4 w-4 text-[#FFD600]" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Choose budget for essential items or bougie for premium comfort items</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <RadioGroup defaultValue="true" onValueChange={(value) => register('isBudget').onChange({ target: { value } })} className="grid grid-cols-2 gap-4">
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="true" id="budget" className="sr-only" />
                                    <Label htmlFor="budget" className="block text-center cursor-pointer">Budget-Friendly</Label>
                                </div>
                                <div className="brutal-border p-4 [&:has([data-state=checked])]:bg-[#FFD600] [&:has([data-state=checked])]:text-black">
                                    <RadioGroupItem value="false" id="bougie" className="sr-only" />
                                    <Label htmlFor="bougie" className="block text-center cursor-pointer">Premium Comfort</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full h-12 text-lg bg-[#FFD600] hover:bg-[#FFD600]/90 text-black brutal-border border-[#FFD600]" 
                            disabled={loading}
                        >
                            {loading ? 'Creating Your Checklist...' : paymentsEnabled ? 'Generate Checklist ($2.99)' : 'Generate Free Checklist'}
                        </Button>

                        {paymentsEnabled && (
                            <p className="text-center text-sm text-muted-foreground">
                                Secure payment powered by Stripe
                            </p>
                        )}
                    </form>
                </Card>

                {/* Third Ad Slot */}
                <AdSlot 
                    adSlot="5432109876"
                    className="brutal-border p-4 bg-white dark:bg-black my-8"
                />
                
                {/* Additional Value Content */}
                <div className="max-w-2xl mx-auto mt-12">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Why Use Our Festival Checklist?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4 brutal-border">
                            <h4 className="font-bold mb-2">Expert-Curated Lists</h4>
                            <p>Our checklists are crafted by festival veterans who know exactly what you need for the best experience.</p>
                        </Card>
                        <Card className="p-4 brutal-border">
                            <h4 className="font-bold mb-2">Personalized for You</h4>
                            <p>Get a customized list based on your specific needs, whether you&apos;re camping or doing a day trip.</p>
                        </Card>
                        <Card className="p-4 brutal-border">
                            <h4 className="font-bold mb-2">Never Forget Essentials</h4>
                            <p>From obvious must-haves to easily forgotten items, we&apos;ve got you covered with a comprehensive list.</p>
                        </Card>
                        <Card className="p-4 brutal-border">
                            <h4 className="font-bold mb-2">Budget-Conscious Options</h4>
                            <p>Choose between budget-friendly essentials or premium comfort items based on your preferences.</p>
                        </Card>
                    </div>
                </div>
                
                <div className="text-center mt-8 mb-14">
                    <Button 
                        onClick={() => router.push('/')} 
                        className="bg-[#FFD600] hover:bg-[#FFD600]/90 text-black brutal-border border-[#FFD600]"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </TooltipProvider>
    );
}

export default function ChecklistPage() {
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
            <ChecklistForm />
        </GoogleReCaptchaProvider>
    );
}
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
import { Tent, Sun, Calendar, CreditCard, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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
                description: 'reCAPTCHA not initialized',
                variant: 'destructive',
            });
            return;
        }

        try {
            setLoading(true);
            
            // Execute reCAPTCHA
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

    if (!currentEvent) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto p-6 text-center">
                    <div className="animate-pulse">
                        <div className="h-8 bg-[#FFD600]/20 rounded w-3/4 mx-auto mb-4"></div>
                        <div className="h-4 bg-[#FFD600]/20 rounded w-1/2 mx-auto"></div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <TooltipProvider>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-4 text-[#FFD600]">Festival Packing Checklist</h1>
                
                <div className="text-center mb-8">
                    <p className="text-lg mb-2">
                        {paymentsEnabled
                            ? 'Get your custom packing checklist for just $2.99'
                            : 'Get your free custom packing checklist'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Personalized for your festival experience with pro tips from experienced attendees
                    </p>
                </div>
                
                <Card className="max-w-2xl mx-auto p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
                    <div className="mb-6 brutal-border p-4">
                        <h2 className="text-xl font-bold mb-2 text-[#FFD600]">{currentEvent.EVENT_NAME}</h2>
                        <p className="text-sm text-muted-foreground">{currentEvent.EVENT_DESCRIPTION}</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                
                <div className="text-center mt-8">
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
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
            <ChecklistForm />
        </GoogleReCaptchaProvider>
    );
}
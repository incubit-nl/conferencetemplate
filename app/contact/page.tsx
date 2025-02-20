'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
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
      const recaptchaToken = await executeRecaptcha('contact_submit');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: 'Success!',
        description: 'Your message has been sent. We\'ll get back to you soon.',
      });
      
      reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#FFD600]">Contact Us</h1>
      <p className="text-center text-lg mb-8 text-muted-foreground">
        Have a question or need assistance? We&apos;re here to help!
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register('name', { required: true })}
                placeholder="Your Name"
                className="border-[#FFD600] focus-visible:ring-[#FFD600]"
              />
              {errors.name && (
                <span className="text-sm text-red-500">Name is required</span>
              )}
            </div>

            <div>
              <Input
                {...register('email', { 
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                })}
                type="email"
                placeholder="Your Email"
                className="border-[#FFD600] focus-visible:ring-[#FFD600]"
              />
              {errors.email && (
                <span className="text-sm text-red-500">Valid email is required</span>
              )}
            </div>

            <div>
              <Input
                {...register('subject', { required: true })}
                placeholder="Subject"
                className="border-[#FFD600] focus-visible:ring-[#FFD600]"
              />
              {errors.subject && (
                <span className="text-sm text-red-500">Subject is required</span>
              )}
            </div>

            <div>
              <Textarea
                {...register('message', { required: true })}
                placeholder="Your Message"
                className="min-h-[150px] border-[#FFD600] focus-visible:ring-[#FFD600]"
              />
              {errors.message && (
                <span className="text-sm text-red-500">Message is required</span>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#FFD600] hover:bg-[#FFD600]/90 text-black brutal-border border-[#FFD600]" 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>

        <Card className="p-6 bg-[#FFD600]/5 brutal-border border-[#FFD600]">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-[#FFD600]">Get in Touch</h2>
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#FFD600]" />
              <a href="mailto:info@incubit.nl" className="hover:text-[#FFD600] transition-colors">
                info@incubit.nl
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#FFD600]" />
              <address className="not-italic">
                Utrecht, The Netherlands
              </address>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2 text-[#FFD600]">Office Hours</h3>
              <p className="text-muted-foreground">
                Always open!
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 text-center mb-14">
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

export default function ContactPage() {
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
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
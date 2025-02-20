'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) return;

    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/checklist/status?session_id=${sessionId}`);
        const data = await response.json();

        if (data.downloadUrl) {
          setDownloadUrl(data.downloadUrl);
          setLoading(false);
        } else {
          // Retry after 2 seconds
          setTimeout(checkStatus, 2000);
        }
      } catch (error) {
        console.error('Error checking status:', error);
        toast({
          title: 'Error',
          description: 'Failed to retrieve your checklist. Please contact support.',
          variant: 'destructive',
        });
        setLoading(false);
      }
    };

    checkStatus();
  }, [searchParams, toast]);

  const handleDownload = () => {
    if (!downloadUrl) return;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'festival-checklist.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-lg mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        
        {loading ? (
          <p>Generating your checklist...</p>
        ) : downloadUrl ? (
          <>
            <p className="mb-4">Your checklist is ready!</p>
            <Button onClick={handleDownload}>
              Download Checklist
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Note: This download link will expire in 24 hours.
            </p>
          </>
        ) : (
          <p>Something went wrong. Please contact support.</p>
        )}
      </Card>
    </div>
  );
}
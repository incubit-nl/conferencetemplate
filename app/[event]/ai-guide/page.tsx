'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageSquare, TrendingUp } from 'lucide-react';

export default function AIGuidePage() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const event = searchParams.get('event');

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/festival-ai?event=${event}&q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        <Sparkles className="inline-block mr-2 text-[#FFD600]" />
        Festival AI Guide
      </h1>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about the festival..."
            className="flex-1"
          />
          <Button 
            onClick={handleSearch}
            disabled={loading}
            className="bg-[#FFD600] text-black hover:bg-[#FFD600]/90"
          >
            Ask AI
          </Button>
        </div>

        {response && (
          <div className="space-y-4">
            {response.tips.length > 0 && (
              <Card className="p-4">
                <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <MessageSquare className="text-[#FFD600]" />
                  Community Tips
                </h2>
                <ul className="space-y-2">
                  {response.tips.map((tip: any) => (
                    <li key={tip.id} className="flex items-start gap-2">
                      <span className="text-[#FFD600]">•</span>
                      {tip.tip}
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {response.insights && (
              <Card className="p-4">
                <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="text-[#FFD600]" />
                  Festival Insights
                </h2>
                <ul className="space-y-2">
                  {response.query_context.map((context: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FFD600]">•</span>
                      {context}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
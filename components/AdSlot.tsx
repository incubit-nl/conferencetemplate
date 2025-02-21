import Script from 'next/script';
import { useEffect, useRef } from 'react';

interface AdSlotProps {
  adSlot: string;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSlot({ adSlot, style, className }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      const pushAd = () => {
        const adsbygoogle = (window as any).adsbygoogle;
        if (adsbygoogle) {
          adsbygoogle.push({});
        }
      };

      if (adRef.current && adRef.current.innerHTML === '') {
        pushAd();
      }
    } catch (err) {
      console.error('Error loading ad:', err);
    }
  }, []);

  return (
    <>
      <div className={className} style={style}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            ...style,
          }}
          data-ad-client="ca-pub-1971264696648136"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
}
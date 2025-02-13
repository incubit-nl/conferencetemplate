"use client";

import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { ParsedEnvVars } from '@/lib/env';

interface SocialLinksProps {
  env: ParsedEnvVars;
  className?: string;
}

export function SocialLinks({ env, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <a
        href={env.EVENT_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-button p-3"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href={env.EVENT_TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-button p-3"
      >
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href={env.EVENT_FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-button p-3"
      >
        <Facebook className="h-6 w-6" />
      </a>
    </div>
  );
}
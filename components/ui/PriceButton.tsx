'use client';

import { ExternalLink } from 'lucide-react';

interface PriceButtonProps {
  affiliateUrl: string;
  price: string;
  boardName: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PriceButton({
  affiliateUrl,
  price,
  boardName,
  size = 'md',
}: PriceButtonProps) {
  const sizeClasses = {
    sm: 'py-2.5 px-5 text-sm',
    md: 'py-3.5 px-7 text-sm',
    lg: 'py-4 px-8 text-base',
  };

  return (
    <a
      href={affiliateUrl}
      id={`cta-${boardName.toLowerCase().replace(/\s+/g, '-')}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`btn-teal w-full justify-center ${sizeClasses[size]}`}
      aria-label={`Check latest price for ${boardName}`}
    >
      <span>Check Latest Price</span>
      <span className="opacity-70 font-medium">{price}</span>
      <ExternalLink className="w-3.5 h-3.5 ml-1" />
    </a>
  );
}

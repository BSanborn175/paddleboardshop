'use client';

import { useEffect, useRef, useState } from 'react';

interface ScoreBadgeProps {
  label: string;
  score: number;
  maxScore?: number;
  color?: 'teal' | 'sky' | 'amber';
}

const colorMap = {
  teal: 'from-teal to-sky-glow',
  sky: 'from-sky-glow to-teal',
  amber: 'from-amber-glow to-teal',
};

export default function ScoreBadge({
  label,
  score,
  maxScore = 10,
  color = 'teal',
}: ScoreBadgeProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const pct = (score / maxScore) * 100;

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
          {label}
        </span>
        <span
          className={`text-sm font-bold ${
            color === 'teal'
              ? 'text-teal'
              : color === 'sky'
              ? 'text-sky-glow'
              : 'text-amber-glow'
          }`}
        >
          {score.toFixed(1)}
        </span>
      </div>
      <div className="score-track">
        <div
          className={`score-fill bg-gradient-to-r ${colorMap[color]}`}
          style={{
            width: animated ? `${pct}%` : '0%',
            transition: animated
              ? 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'none',
          }}
        />
      </div>
    </div>
  );
}

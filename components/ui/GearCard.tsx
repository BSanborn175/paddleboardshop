'use client';

import { CheckCircle, Zap, Droplets, Wind, Package, ExternalLink } from 'lucide-react';
import type { GearItem } from '@/lib/gear';

/* ── Category config ──────────────────────────────────────────── */
const categoryIcon: Record<GearItem['category'], React.ElementType> = {
  paddle: Zap,
  'dry-bag': Droplets,
  pump: Wind,
  accessory: Package,
};

const categoryGlow: Record<GearItem['category'], string> = {
  paddle: 'rgba(0,201,177,0.18)',
  'dry-bag': 'rgba(56,189,248,0.18)',
  pump: 'rgba(251,191,36,0.18)',
  accessory: 'rgba(0,201,177,0.12)',
};

const badgeClass: Record<GearItem['badgeColor'], string> = {
  teal: 'badge-teal',
  sky: 'badge-sky',
  amber: 'badge-amber',
};

interface GearCardProps {
  item: GearItem;
}

export default function GearCard({ item }: GearCardProps) {
  const Icon = categoryIcon[item.category];

  return (
    <article
      id={`gear-${item.id}`}
      className="glass-card flex flex-col overflow-hidden group"
    >
      {/* Visual header — gradient + icon */}
      <div
        className="relative h-44 flex flex-col items-center justify-center"
        style={{
          background: `radial-gradient(ellipse at 50% 120%, ${categoryGlow[item.category]}, transparent 70%), var(--gradient-card)`,
        }}
      >
        {/* Badge */}
        <span
          className={`${badgeClass[item.badgeColor]} absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full`}
        >
          {item.badge}
        </span>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-teal flex items-center justify-center shadow-teal-strong mb-3">
          <Icon className="w-8 h-8 text-void" strokeWidth={2} />
        </div>

        {/* Headline callout */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <p className="text-center text-xs font-semibold text-text-primary bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            ⚡ {item.headline}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-5">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">
            {item.brand} · {item.categoryLabel}
          </p>
          <h3 className="text-xl font-bold text-text-primary">{item.name}</h3>
          <p className="text-2xl font-extrabold mt-2" style={{ color: 'var(--color-glacier-teal)' }}>
            {item.price}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>

        {/* Key Features */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
            Key Features
          </p>
          <ul className="space-y-2">
            {item.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <CheckCircle
                  className="w-3.5 h-3.5 shrink-0 mt-0.5"
                  style={{ color: 'var(--color-glacier-teal)' }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2">
          {item.specs.map((spec) => (
            <div
              key={spec.label}
              className="text-center rounded-xl py-2.5 px-2 border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1">
                {spec.label}
              </p>
              <p className="text-sm font-bold text-text-primary">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <a
            href={item.affiliateUrl}
            id={`gear-cta-${item.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-teal w-full justify-center py-3.5 px-7 text-sm"
            aria-label={`Check latest price for ${item.brand} ${item.name}`}
            data-product={`${item.brand} ${item.name}`}
            data-ga-location="gear_section"
          >
            <span>Check Latest Price</span>
            <span style={{ opacity: 0.7 }} className="font-medium">
              {item.price}
            </span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </article>
  );
}

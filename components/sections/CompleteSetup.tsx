import { Zap, Droplets, Wind, ArrowRight } from 'lucide-react';
import { paddleItems, gearItems, type GearItem } from '@/lib/gear';
import SectionLayout from '@/components/ui/SectionLayout';

/* ── Category config ──────────────────────────────────────────── */
const categoryIcon: Record<GearItem['category'], React.ElementType> = {
  paddle: Zap,
  'dry-bag': Droplets,
  pump: Wind,
  accessory: Zap,
};

const categoryGlow: Record<GearItem['category'], string> = {
  paddle: 'rgba(0,201,177,0.20)',
  'dry-bag': 'rgba(56,189,248,0.20)',
  pump: 'rgba(251,191,36,0.20)',
  accessory: 'rgba(0,201,177,0.14)',
};

const badgeClass: Record<GearItem['badgeColor'], string> = {
  teal: 'badge-teal',
  sky: 'badge-sky',
  amber: 'badge-amber',
};

/* ── Gear Pick Card — fully clickable, same pick-card CSS ─────── */
function GearPickCard({ item }: { item: GearItem }) {
  const Icon = categoryIcon[item.category];

  return (
    /*
     * Entire card is the affiliate link.
     * CTA inside is a <div> (not a nested <a>) for accessibility.
     */
    <a
      href={item.affiliateUrl}
      id={`gear-card-${item.id}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="pick-card"
      aria-label={`${item.brand} ${item.name} — ${item.headline} — ${item.price} — opens affiliate retailer`}
    >
      {/* ── 1. Visual image header ───────────────────────────── */}
      <div
        className="relative h-48 flex flex-col items-center justify-center"
        style={{
          background: `radial-gradient(ellipse at 50% 110%, ${categoryGlow[item.category]}, transparent 65%), var(--gradient-card)`,
        }}
      >
        {/* Category badge */}
        <span
          className={`${badgeClass[item.badgeColor]} absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full`}
        >
          {item.badge}
        </span>

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #00c9b1, #38bdf8)',
            boxShadow: '0 8px 30px rgba(0,201,177,0.4)',
          }}
        >
          <Icon className="w-8 h-8 text-void" strokeWidth={2} />
        </div>

        {/* Price — centered at bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
          <p
            className="text-3xl font-extrabold text-white"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          >
            {item.price}
          </p>
        </div>
      </div>

      {/* ── 2-5. Content ──────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-6 gap-4 text-center items-center">

        {/* 2. Product name */}
        <div>
          <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">
            {item.brand} · {item.categoryLabel}
          </p>
          <h3 className="text-[1.2rem] font-extrabold text-text-primary leading-tight tracking-tight">
            {item.name}
          </h3>

          {/* 3. One-line benefit statement */}
          <p
            className="text-sm font-semibold mt-2 leading-snug"
            style={{ color: 'var(--color-glacier-teal)' }}
          >
            ⚡ {item.headline}
          </p>
        </div>

        {/* 4/5. CTA — dominant, scales on hover via .pick-card:hover .pick-cta */}
        <div className="pick-cta">
          <span>View Deal</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </div>

        {/* Trust signals */}
        <div
          className="flex items-center justify-center gap-3"
          aria-label="Review credentials"
        >
          <span className="text-[10px] font-medium text-text-muted">
            🔄 Updated Apr 2026
          </span>
          <span className="text-text-muted opacity-30" aria-hidden="true">·</span>
          <span className="text-[10px] font-medium text-text-muted">
            ✓ Independent Review
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
const allGear = [...paddleItems, ...gearItems];

export default function CompleteSetup() {
  return (
    <SectionLayout
      id="gear-bag"
      eyebrow="Accessories & Paddles"
      accentColor="var(--color-sky-glow)"
      heading={<>Complete Your <span className="gradient-text">Setup</span></>}
      subtitle="The pump, paddle, and dry bag that elevate any of our three recommended boards from good to exceptional."
      divider
      ambient={
        <div
          className="orb w-[500px] h-[400px] bottom-0 left-1/4"
          style={{ background: 'rgba(56, 189, 248, 0.05)' }}
          aria-hidden="true"
        />
      }
    >
      {/* Gear cards — same pick-card style as TopPicks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {allGear.map((item) => (
          <GearPickCard key={item.id} item={item} />
        ))}
      </div>

      <p className="mt-16 text-center text-xs text-text-muted">
        ★ Independent recommendations · Affiliate links support our work · Prices subject to change
      </p>
    </SectionLayout>
  );
}

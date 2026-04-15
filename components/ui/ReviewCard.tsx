'use client';

import Image from 'next/image';
import { CheckCircle, XCircle, Zap, ArrowRight } from 'lucide-react';
import type { Board } from '@/lib/boards';
import ScoreBadge from './ScoreBadge';

interface ReviewCardProps {
  board: Board;
  featured?: boolean;
}

/* ── Sub-components ───────────────────────────────────────────── */

/** Thin full-bleed horizontal rule between sections */
function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 1,
        background: 'rgba(255,255,255,0.07)',
        margin: '0 -2rem', // bleed to card padding edges
      }}
    />
  );
}

/** Consistent section label (uppercase, muted, tight tracking) */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-widest text-text-muted"
    >
      {children}
    </p>
  );
}

/* ── Badge map ───────────────────────────────────────────────── */
const badgeClass: Record<string, string> = {
  teal: 'badge-teal',
  sky: 'badge-sky',
  amber: 'badge-amber',
};

/* ── Component ───────────────────────────────────────────────── */
export default function ReviewCard({ board, featured = false }: ReviewCardProps) {
  return (
    <article
      id={`review-${board.id}`}
      className="glass-card flex flex-col overflow-hidden"
      style={
        featured
          ? { boxShadow: '0 0 0 1px rgba(0,201,177,0.4), 0 0 40px rgba(0,201,177,0.12)' }
          : {}
      }
    >
      {/* ══════════════════════════════════════════════════
          1. HERO IMAGE
      ══════════════════════════════════════════════════ */}
      <div
        className="relative h-56 overflow-hidden"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-surface), var(--color-deep-ocean))',
        }}
      >
        <Image
          src={board.image}
          alt={`${board.name} ${board.length} inflatable paddle board — full review photo`}
          fill
          className="object-cover transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(5,13,26,0.80) 0%, transparent 55%)',
          }}
        />

        {/* Badge chip */}
        <div className="absolute top-4 left-4">
          <span
            className={`${badgeClass[board.badgeColor]} text-xs font-bold px-3 py-1.5 rounded-full`}
          >
            {board.badge}
          </span>
        </div>

        {/* Category chip */}
        <div className="absolute bottom-4 left-4">
          <span
            className="text-xs font-medium text-text-muted px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(5,13,26,0.68)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {board.category}
          </span>
        </div>

        {/* Price overlaid bottom-right for quick scan */}
        <div className="absolute bottom-4 right-4">
          <span
            className="text-xl font-extrabold text-white"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            {board.price}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          CONTENT BODY
      ══════════════════════════════════════════════════ */}
      <div className="flex flex-col flex-1 p-8 gap-7">

        {/* ── 2. HEADER ─────────────────────────────────── */}
        <div>
          <h3 className="text-xl font-extrabold text-text-primary leading-tight tracking-tight">
            {board.name}{' '}
            <span className="text-text-muted font-medium text-sm">
              {board.length}
            </span>
          </h3>
          <p
            className="text-sm font-bold mt-2"
            style={{ color: 'var(--color-glacier-teal)' }}
          >
            {board.tagline}
          </p>
        </div>

        {/* ── 3. BEST FOR tag ───────────────────────────── */}
        <div className="flex items-center gap-3 flex-wrap">
          <Label>Best For</Label>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: 'rgba(0,201,177,0.1)',
              border: '1px solid rgba(0,201,177,0.25)',
              color: 'var(--color-glacier-teal)',
            }}
          >
            {board.bestFor}
          </span>
        </div>

        <Divider />

        {/* ── 4. REVIEW SUMMARY + INLINE CTA ───────────── */}
        <div>
          <Label>Review Summary</Label>

          {/* Short 2-sentence description with bold key phrases */}
          <p
            className="text-sm text-text-secondary leading-relaxed mt-3"
            dangerouslySetInnerHTML={{ __html: board.shortDescription }}
          />

          {/* Inline CTA — right after the summary, low friction */}
          <a
            href={board.affiliateUrl}
            id={`review-inline-cta-${board.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 text-xs font-bold mt-4 transition-opacity duration-150 hover:opacity-80"
            style={{ color: 'var(--color-glacier-teal)' }}
            aria-label={`Check latest price for ${board.name} — ${board.price}`}
          >
            Check Latest Price {board.price}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <Divider />

        {/* ── 5. PERFORMANCE SCORES ─────────────────────── */}
        <div>
          <Label>Performance Scores</Label>
          <div className="space-y-3 mt-4">
            <ScoreBadge
              label="Rigidity"
              score={board.rigidityScore}
              color={board.badgeColor}
            />
            <ScoreBadge
              label="Portability"
              score={board.portabilityScore}
              color={board.badgeColor}
            />
            <ScoreBadge
              label="Weight Capacity"
              score={board.weightCapacityScore}
              color={board.badgeColor}
            />
          </div>
        </div>

        {/* ── 6. SPEC TILES ─────────────────────────────── */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Capacity',  value: board.weightCapacity },
            { label: 'Thickness', value: board.thickness },
            { label: 'Weight',    value: board.weight },
          ].map((spec) => (
            <div
              key={spec.label}
              className="text-center rounded-xl py-3 px-2"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1.5">
                {spec.label}
              </p>
              <p className="text-sm font-bold text-text-primary">{spec.value}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── 7. KEY FEATURES ───────────────────────────── */}
        <div>
          <Label>Key Features</Label>
          <ul className="space-y-3 mt-4" role="list">
            {board.keyTech.map((tech, i) => {
              /* Split "Name — description" — bold the name part */
              const [name, ...rest] = tech.split('—');
              return (
                <li key={i} className="flex items-start gap-3">
                  <Zap
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-glacier-teal)' }}
                    strokeWidth={2}
                  />
                  <span className="text-sm text-text-secondary leading-snug">
                    <strong className="text-text-primary font-semibold">
                      {name.trim()}
                    </strong>
                    {rest.length > 0 && (
                      <> — {rest.join('—').trim()}</>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <Divider />

        {/* ── 8. PROS / CONS ────────────────────────────── */}
        <div className="grid grid-cols-2 gap-5">
          {/* Pros */}
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-glacier-teal)' }}
            >
              Pros
            </p>
            <ul className="space-y-2.5" role="list">
              {board.pros.map((pro, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-glacier-teal)' }}
                  />
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-3">
              Cons
            </p>
            <ul className="space-y-2.5" role="list">
              {board.cons.map((con, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <XCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 9. MAIN CTA ───────────────────────────────── */}
        <div className="mt-auto pt-2">
          <a
            href={board.affiliateUrl}
            id={`review-cta-${board.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-teal w-full justify-center py-4 text-sm font-bold"
            aria-label={`Check latest price for ${board.name} — ${board.price}`}
            data-product={board.name}
            data-ga-location="review_section"
          >
            <span>Check Latest Price</span>
            <span className="opacity-70 font-medium">{board.price}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </article>
  );
}

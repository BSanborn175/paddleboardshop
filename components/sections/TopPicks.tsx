'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { boards } from '@/lib/boards';
import SectionLayout from '@/components/ui/SectionLayout';

const rankLabel = ['#1 Pick', '#2 Pick', '#3 Pick'];

const badgeClass: Record<string, string> = {
  teal: 'badge-teal',
  sky: 'badge-sky',
  amber: 'badge-amber',
};

export default function TopPicks() {
  return (
    <SectionLayout
      id="top-picks"
      eyebrow="Expert Picks 2026"
      heading={<>Our Top <span className="gradient-text">3 Boards</span></>}
      subtitle="Three premium iSUPs covering every paddling style and budget. One click to current pricing."
      ambient={
        <div
          className="orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2"
          style={{ background: 'rgba(0, 201, 177, 0.05)' }}
          aria-hidden="true"
        />
      }
    >
      {/* ── Conversion card grid ─────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {boards.map((board, i) => (
          /*
           * ENTIRE CARD IS THE AFFILIATE LINK.
           * The inner pick-cta is a <div>, not a nested <a>,
           * because nesting interactive elements breaks accessibility.
           */
          <a
            key={board.id}
            href={board.affiliateUrl}
            id={`pick-card-${board.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="pick-card"
            aria-label={`${board.name} — ${board.tagline} — ${board.price} — opens affiliate retailer`}
            data-product={board.name}
            data-ga-location="top_picks"
          >
            {/* ── 1. Image ─────────────────────────────────── */}
            <div
              className="relative h-56 overflow-hidden"
              style={{
                background:
                  'linear-gradient(to bottom, var(--color-surface), var(--color-deep-ocean))',
              }}
            >
              <Image
                src={board.image}
                alt={`${board.name} ${board.length} inflatable paddle board`}
                fill
                className="object-cover pick-image"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Dark gradient for overlaid text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(5,13,26,0.65) 0%, transparent 55%)',
                }}
              />

              {/* Rank chip — top left */}
              <span
                className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(5,13,26,0.72)',
                  color: 'var(--color-text-muted)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {rankLabel[i]}
              </span>

              {/* Category badge — top right */}
              <span
                className={`${badgeClass[board.badgeColor]} absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full`}
              >
                {board.badge}
              </span>

              {/* Price — bottom-left, high contrast */}
              <div className="absolute bottom-4 left-5">
                <p
                  className="text-3xl font-extrabold text-white"
                  style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                >
                  {board.price}
                </p>
              </div>
            </div>

            {/* ── 2-5. Content ──────────────────────────────── */}
            <div className="flex flex-col flex-1 px-5 pt-5 pb-6 gap-4">

              {/* 2. Product name */}
              <div>
                <h3 className="text-[1.3rem] font-extrabold text-text-primary leading-tight tracking-tight">
                  {board.name}{' '}
                  <span className="text-text-muted font-medium text-sm">
                    {board.length}
                  </span>
                </h3>

                {/* 3. One-line benefit statement */}
                <p
                  className="text-sm font-semibold mt-2 leading-snug"
                  style={{ color: 'var(--color-glacier-teal)' }}
                >
                  {board.tagline}
                </p>
              </div>

              {/* 4/5. CTA div — dominant, gradient, scales on hover via CSS */}
              <div className="pick-cta">
                <span>Check Latest Price</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>

              {/* Trust signals */}
              <div
                className="flex items-center justify-center gap-3"
                aria-label="Review credentials"
              >
                <span className="text-[10px] font-medium text-text-muted">
                  ✓ Updated Apr 2026
                </span>
                <span className="text-text-muted opacity-30" aria-hidden="true">·</span>
                <span className="text-[10px] font-medium text-text-muted">
                  ✓ Independent Review
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ── Read review links — outside the affiliate <a> cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
        {boards.map((board) => (
          <div key={`review-link-${board.id}`} className="text-center">
            <Link
              href={`/reviews/${board.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-glacier-teal transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-glacier-teal)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              Read full review
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

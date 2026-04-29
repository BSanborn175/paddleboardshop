'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { boards } from '@/lib/boards';

const featured = boards[2];
const secondary = [boards[0], boards[1]];

const BULLETS = [
  'Highest weight capacity in class — 335 lbs',
  'ISLE-LINK rail system: unlimited accessory configs',
  'Near-hardboard rigidity at standard 15 PSI',
];

export default function TopPicks() {
  return (
    <section id="top-picks" aria-labelledby="top-picks-heading" className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(0,201,177,0.08)', border: '1px solid rgba(0,201,177,0.2)', color: 'var(--color-glacier-teal)' }}>
            Expert Picks &middot; 2026
          </span>
          <h2 id="top-picks-heading" className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
            Top Paddle Boards <span className="gradient-text">for 2026</span>
          </h2>
          <p className="text-sm text-text-secondary mt-2 max-w-lg">
            One dominant pick. Two strong alternatives. Every board independently tested.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {/* FEATURED */}
          <a href={featured.affiliateUrl} id="pick-card-featured" target="_blank" rel="noopener noreferrer nofollow"
            aria-label={`${featured.name} — Editor's Choice — ${featured.price}`}
            data-product={featured.name} data-ga-location="top_picks_featured"
            className="md:col-span-2 flex flex-col overflow-hidden"
            style={{ borderRadius: '24px', background: 'linear-gradient(145deg,rgba(13,32,64,0.75),rgba(5,13,26,0.90))', border: '1px solid rgba(0,201,177,0.22)', backdropFilter: 'blur(20px) saturate(140%)', boxShadow: '0 12px 48px rgba(0,0,0,0.5)', transition: 'border-color 0.25s,box-shadow 0.25s', textDecoration: 'none', color: 'inherit' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(0,201,177,0.50)'; el.style.boxShadow='0 20px 64px rgba(0,0,0,0.6),0 0 40px rgba(0,201,177,0.15)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(0,201,177,0.22)'; el.style.boxShadow='0 12px 48px rgba(0,0,0,0.5)'; }}
          >
            <div className="relative overflow-hidden" style={{ height: '320px', background: 'linear-gradient(to bottom,#0d2040,#050d1a)' }}>
              <Image src={featured.image} alt={`${featured.name} ${featured.length}`} fill className="object-cover" sizes="(max-width:768px) 100vw,66vw" priority />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(5,13,26,0.75) 0%,transparent 55%)' }} />
              <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: 'rgba(5,13,26,0.75)', color: 'var(--color-text-muted)', backdropFilter: 'blur(8px)' }}>#1 Pick</span>
              <span className="badge-amber absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full">&#9733; Editor&apos;s Choice</span>
              <p className="absolute bottom-5 left-6 text-4xl font-extrabold text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>{featured.price}</p>
            </div>
            <div className="flex flex-col gap-5 px-7 pt-6 pb-7">
              <div>
                <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">{featured.name} <span className="text-text-muted font-medium text-base">{featured.length}</span></h3>
                <p className="text-sm font-semibold mt-1.5" style={{ color: 'var(--color-glacier-teal)' }}>{featured.tagline}</p>
              </div>
              <ul className="space-y-2.5">
                {BULLETS.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />{b}
                  </li>
                ))}
              </ul>
              <div className="pick-cta" style={{ fontSize: '0.95rem', padding: '16px 24px' }}>
                <span>Check Latest Price</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium text-text-muted">&#x2713; Updated Apr 2026</span>
                  <span className="text-text-muted opacity-30">&middot;</span>
                  <span className="text-[10px] font-medium text-text-muted">&#x2713; Independent Review</span>
                </div>
                <Link href="/blog/isle-pioneer-pro-review-2026" onClick={e => e.stopPropagation()} className="text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--color-glacier-teal)', textDecoration: 'none' }}>
                  Full review <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </a>

          {/* SECONDARY */}
          <div className="flex flex-col gap-5">
            {secondary.map((board, i) => (
              <a key={board.id} href={board.affiliateUrl} id={`pick-card-${board.id}`} target="_blank" rel="noopener noreferrer nofollow"
                aria-label={`${board.name} — ${board.price}`}
                data-product={board.name} data-ga-location="top_picks_secondary"
                className="flex flex-col overflow-hidden"
                style={{ borderRadius: '18px', background: 'linear-gradient(145deg,rgba(13,32,64,0.6),rgba(5,13,26,0.85))', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', transition: 'border-color 0.25s,box-shadow 0.25s', textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(0,201,177,0.30)'; el.style.boxShadow='0 12px 40px rgba(0,0,0,0.5),0 0 24px rgba(0,201,177,0.10)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.08)'; el.style.boxShadow='0 8px 32px rgba(0,0,0,0.4)'; }}
              >
                <div className="relative overflow-hidden" style={{ height: '160px', background: 'linear-gradient(to bottom,#0d2040,#050d1a)' }}>
                  <Image src={board.image} alt={`${board.name} ${board.length}`} fill className="object-cover" sizes="(max-width:768px) 100vw,33vw" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(5,13,26,0.70) 0%,transparent 60%)' }} />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: 'rgba(5,13,26,0.75)', color: 'var(--color-text-muted)', backdropFilter: 'blur(8px)' }}>#{i + 2} Pick</span>
                  <span className={`badge-${board.badgeColor} absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full`} style={{ opacity: 0.85 }}>{board.badge}</span>
                  <p className="absolute bottom-3 left-4 text-xl font-extrabold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{board.price}</p>
                </div>
                <div className="flex flex-col gap-3 px-5 pt-4 pb-5">
                  <div>
                    <h3 className="text-base font-extrabold text-text-primary tracking-tight">{board.name} <span className="text-text-muted font-normal text-xs">{board.length}</span></h3>
                    <p className="text-xs font-semibold mt-1" style={{ color: 'var(--color-glacier-teal)' }}>{board.tagline}</p>
                  </div>
                  <div className="pick-cta" style={{ fontSize: '0.8rem', padding: '11px 16px' }}>
                    <span>Check Latest Price</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </div>
                  <div className="text-center">
                    <Link href={`/blog/${board.id}-review-2026`} onClick={e => e.stopPropagation()} className="text-[10px] font-semibold" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-glacier-teal)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                      Read full review &rarr;
                    </Link>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

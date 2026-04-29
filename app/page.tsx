import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TopPicks from '@/components/sections/TopPicks';
import ComparisonTable from '@/components/sections/ComparisonTable';

export const metadata: Metadata = {
  title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop Expert Reviews',
  description: 'Expert reviews of the best inflatable paddle boards for 2026. Compare the Isle Pioneer Pro, BOTE Breeze Aero, and Red Paddle Co Sport with rigidity scores, weight capacity, and current pricing.',
  keywords: ['best inflatable paddle boards 2026','high performance iSUP reviews','inflatable SUP comparison','Isle Pioneer Pro review','BOTE Breeze Aero review','Red Paddle Co Sport review'],
  openGraph: {
    title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop',
    description: 'The definitive 2026 guide to high-performance inflatable paddle boards.',
    type: 'website',
    siteName: 'PaddleBoardShop',
  },
};

const divider = { borderTop: '1px solid rgba(255,255,255,0.05)' };

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Top Picks (featured + secondary hierarchy) */}
        <TopPicks />

        {/* 3 — Shop by Use Case */}
        <section id="use-cases" aria-labelledby="use-cases-heading" className="py-20 px-6" style={divider}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', color: 'var(--color-sky-glow)' }}>
                Shop by Use Case
              </span>
              <h2 id="use-cases-heading" className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
                What Kind of Paddler Are You?
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-lg">
                Guides built around how you actually use the water — not just specs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  href: '/best-paddle-boards-for-beginners',
                  id: 'use-case-beginner',
                  emoji: '🏄',
                  title: 'New to Paddleboarding',
                  desc: 'The three most forgiving boards for first-time buyers — with stability ratings and common mistakes to avoid.',
                  cta: 'Best Beginner Boards',
                  accent: 'var(--color-amber-glow)',
                  badgeClass: 'badge-amber',
                },
                {
                  href: '/best-paddle-boards-for-fishing',
                  id: 'use-case-fishing',
                  emoji: '🎣',
                  title: 'SUP Fishing',
                  desc: 'Purpose-built platforms ranked by stability, gear mounting options, and weight capacity for a full fishing load.',
                  cta: 'Best Fishing Boards',
                  accent: 'var(--color-glacier-teal)',
                  badgeClass: 'badge-teal',
                },
                {
                  href: '/best-inflatable-paddle-boards-under-1000',
                  id: 'use-case-budget',
                  emoji: '💰',
                  title: 'Best Under $1,000',
                  desc: 'Premium-quality iSUPs under $1,000 — ranked by performance-per-dollar and durability over multiple seasons.',
                  cta: 'Best Value Boards',
                  accent: 'var(--color-sky-glow)',
                  badgeClass: 'badge-sky',
                },
              ].map(({ href, id, emoji, title, desc, cta, accent, badgeClass }) => (
                <Link key={href} href={href} id={id} className="glass-card flex flex-col p-6 group" style={{ textDecoration: 'none' }}>
                  <span className="text-3xl mb-4">{emoji}</span>
                  <h3 className="text-base font-extrabold text-text-primary leading-snug mb-2">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">{desc}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: accent }}>
                    <span>{cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — Comparison Table */}
        <ComparisonTable />

        {/* 5 — How to Choose */}
        <section id="how-to-choose" aria-labelledby="how-to-choose-heading" className="py-20 px-6" style={divider}>
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(0,201,177,0.08)', border: '1px solid rgba(0,201,177,0.2)', color: 'var(--color-glacier-teal)' }}>
                Buying Guide
              </span>
              <h2 id="how-to-choose-heading" className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
                How to Choose a Paddle Board
              </h2>
              <p className="text-sm text-text-secondary mt-2">
                Four specs that separate the right board from the wrong one — in order of priority.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Width — 32 inches or more', body: 'Width is the single most important stability factor. Boards under 31 inches are built for performance paddlers. If stability matters to you, this is the first number to check.' },
                { title: 'Thickness — 6 inches', body: 'A 6-inch board holds inflation pressure better, displaces more water, and stays rigid under load. Boards under 5 inches soften underfoot over time, which makes balancing harder.' },
                { title: 'Weight capacity — stay well under the limit', body: 'Never buy a board rated exactly at your body weight. Aim for 50–100 lbs of headroom above your weight plus any gear. A board at its limit sits lower and tips more readily.' },
                { title: 'Construction — drop-stitch + multi-layer PVC', body: 'High-density drop-stitch cores with multi-layer PVC hold rigidity through a full season. Single-layer boards soften within months of regular use.' },
              ].map(({ title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-extrabold text-text-primary mb-1">{title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — Expert Guides */}
        <section id="guides" aria-labelledby="guides-heading" className="py-20 px-6" style={divider}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(0,201,177,0.08)', border: '1px solid rgba(0,201,177,0.2)', color: 'var(--color-glacier-teal)' }}>
                  Expert Guides
                </span>
                <h2 id="guides-heading" className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
                  More Buying Guides
                </h2>
              </div>
              <Link href="/guides" id="home-link-all-guides" className="text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--color-glacier-teal)', textDecoration: 'none' }}>
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { href: '/best-paddle-boards-for-beginners',       id: 'guide-beginners',    title: 'Best Boards for Beginners',           desc: 'Stability-first picks with buying criteria and common mistakes.', badge: 'badge-amber' },
                { href: '/isle-vs-bote-vs-red-paddle',             id: 'guide-brand',        title: 'Isle vs BOTE vs Red Paddle Co',       desc: 'Head-to-head brand comparison with rigidity scores and value.', badge: 'badge-teal' },
                { href: '/best-inflatable-paddle-boards-under-1000',id: 'guide-under1000',   title: 'Best Boards Under $1,000',            desc: 'BOTE, Isle, and ROC — top picks at every price point.', badge: 'badge-sky' },
                { href: '/best-electric-pump-for-paddle-boards',   id: 'guide-pump',         title: 'Best Electric Pump for Paddle Boards', desc: 'Five pumps ranked by auto-shutoff reliability and speed.', badge: 'badge-sky' },
                { href: '/best-paddle-board-paddles',              id: 'guide-paddles',      title: 'Best SUP Paddles (2026)',             desc: 'Carbon vs fiberglass. Five paddles from $99 to $280.', badge: 'badge-teal' },
                { href: '/paddleboarding-with-your-dog',           id: 'guide-dog',          title: 'Paddleboarding With Your Dog',        desc: 'Gear, training steps, safety, and the best spots to go.', badge: 'badge-amber' },
              ].map(({ href, id, title, desc, badge }) => (
                <Link key={href} href={href} id={id} className="glass-card flex flex-col p-6 group" style={{ textDecoration: 'none' }}>
                  <h3 className="text-sm font-extrabold text-text-primary leading-snug mb-2">{title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">{desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--color-glacier-teal)' }}>
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sections — high-conversion affiliate layout (V2)
import Hero from '@/components/sections/Hero';
import TopPicks from '@/components/sections/TopPicks';
import WhyThese3 from '@/components/sections/WhyThese3';
import PersonaMatch from '@/components/sections/PersonaMatch';
import ReviewCards from '@/components/sections/ReviewCards';
import ComparisonTable from '@/components/sections/ComparisonTable';
import CompleteSetup from '@/components/sections/CompleteSetup';
import Locations from '@/components/sections/Locations';
import FinalCTA from '@/components/sections/FinalCTA';
import ConversionElements from '@/components/ui/ConversionElements';

export const metadata: Metadata = {
  title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop Expert Reviews',
  description:
    'Expert reviews of the best inflatable paddle boards for 2026. Compare the Red Paddle Co Sport, BOTE Breeze Aero, and Isle Pioneer Pro with rigidity scores, weight capacity, and current pricing.',
  keywords: [
    'best inflatable paddle boards 2026',
    'high performance iSUP reviews',
    'inflatable SUP comparison',
    'Red Paddle Co Sport review',
    'BOTE Breeze Aero review',
    'Isle Pioneer Pro review',
  ],
  openGraph: {
    title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop',
    description:
      'The definitive 2026 guide to high-performance inflatable paddle boards. Rigidity scores, capacity ratings, and expert analysis.',
    type: 'website',
    siteName: 'PaddleBoardShop',
  },
};

/*
 * HIGH-CONVERSION AFFILIATE LAYOUT
 * ─────────────────────────────────
 * 1. Hero              — single CTA "See Top 3 Boards →"
 * 2. TopPicks          — 3 minimal conversion cards (image, name, price, CTA)
 * 3. WhyThese3         — credibility / methodology bullets
 * 4. ReviewCards       — full reviews (shorter copy, bold key phrases)
 * 5. ComparisonTable   — Board · Rigidity · Capacity · Weight · Best For
 * 6. CompleteSetup     — "Complete Your Setup" gear section (same card style)
 * 7. Locations         — Florida/Carolinas directory placeholder
 * 8. FinalCTA          — final push / recap CTA
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 ── Hero */}
        <Hero />

        {/* 2 ── Top 3 Boards (minimal conversion cards) */}
        <TopPicks />

        {/* 3 ── Which Board Is Right For You? (persona self-selection) */}
        <PersonaMatch />

        {/* 4 ── Why These 3? (credibility / methodology) */}
        <WhyThese3 />

        {/* 4 ── Full in-depth reviews */}
        <ReviewCards />

        {/* 5 ── Head-to-head comparison table */}
        <ComparisonTable />

        {/* 6 ── Complete Your Setup (paddles + accessories) */}
        <CompleteSetup />

        {/* 7 ── Locations directory (placeholder, tab-nav target) */}
        <Locations />

        {/* 8 ── Expert Guides — internal linking strip */}
        <section
          id="expert-guides"
          aria-labelledby="expert-guides-heading"
          className="py-16 px-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(0,201,177,0.08)',
                  border: '1px solid rgba(0,201,177,0.2)',
                  color: 'var(--color-glacier-teal)',
                }}
              >
                Expert Guides
              </span>
              <h2
                id="expert-guides-heading"
                className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight"
              >
                More Buying Guides
              </h2>
              <p className="text-sm text-text-secondary mt-2">
                In-depth guides for every paddler type and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  href: '/best-paddle-boards-for-beginners',
                  id: 'home-link-beginners',
                  title: 'Best Boards for Beginners',
                  desc: 'Stability-first picks with buying criteria and common mistakes to avoid.',
                  badge: '2026 Guide',
                  accentColor: 'var(--color-amber-glow)',
                  badgeClass: 'badge-amber',
                },
                {
                  href: '/isle-vs-bote-vs-red-paddle',
                  id: 'home-link-brand-compare',
                  title: 'Isle vs BOTE vs Red Paddle Co',
                  desc: 'Brand-level comparison with rigidity scores, portability, and value ranked head-to-head.',
                  badge: '2026 Guide',
                  accentColor: 'var(--color-glacier-teal)',
                  badgeClass: 'badge-teal',
                },
                {
                  href: '/best-inflatable-paddle-boards-under-1000',
                  id: 'home-link-under1000',
                  title: 'Best Boards Under $1,000',
                  desc: 'BOTE, Isle, and ROC — top three picks at every price point under $1,000.',
                  badge: '2026 Guide',
                  accentColor: 'var(--color-sky-glow)',
                  badgeClass: 'badge-sky',
                },
              ].map(({ href, id, title, desc, badge, accentColor, badgeClass }) => (
                <Link
                  key={href}
                  href={href}
                  id={id}
                  className="glass-card flex flex-col p-6 group"
                  style={{ textDecoration: 'none' }}
                >
                  <span className={`${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-full w-fit mb-3`}>
                    {badge}
                  </span>
                  <h3 className="text-sm font-extrabold text-text-primary leading-snug mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">
                    {desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: accentColor }}
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>

            {/* View all guides link */}
            <div className="text-center mt-8">
              <Link
                href="/guides"
                id="home-link-all-guides"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--color-glacier-teal)', textDecoration: 'none' }}
              >
                View all guides
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9 ── Final CTA */}
        <FinalCTA />

        {/* ── Persistent conversion elements (floating + banner) */}
        <ConversionElements />
      </main>
      <Footer />
    </>
  );
}

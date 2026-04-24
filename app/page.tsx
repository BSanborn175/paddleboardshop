import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import TopPicks from '@/components/sections/TopPicks';
import ComparisonTable from '@/components/sections/ComparisonTable';

/* ── Guide cards ──────────────────────────────────────────────── */
const GUIDES = [
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
    desc: 'BOTE, Isle, and ROC — top picks at every price point under $1,000.',
    badge: '2026 Guide',
    accentColor: 'var(--color-sky-glow)',
    badgeClass: 'badge-sky',
  },
  {
    href: '/best-electric-pump-for-paddle-boards',
    id: 'home-link-pump',
    title: 'Best Electric Pump for Paddle Boards',
    desc: 'Five electric pumps ranked by auto-shutoff reliability, inflation speed, and motor durability.',
    badge: '2026 Guide',
    accentColor: 'var(--color-sky-glow)',
    badgeClass: 'badge-sky',
  },
  {
    href: '/best-paddle-board-paddles',
    id: 'home-link-paddles',
    title: 'Best SUP Paddles (2026)',
    desc: 'Carbon vs fiberglass. Five paddles across every price tier from $99 to $280.',
    badge: '2026 Guide',
    accentColor: 'var(--color-glacier-teal)',
    badgeClass: 'badge-teal',
  },
  {
    href: '/best-paddle-board-accessories',
    id: 'home-link-accessories',
    title: 'Best Paddle Board Accessories',
    desc: 'The 12 most impactful SUP accessories — with a budget kit recommendation for every tier.',
    badge: '2026 Guide',
    accentColor: 'var(--color-amber-glow)',
    badgeClass: 'badge-amber',
  },
] as const;

/* ── Section divider style ────────────────────────────────────── */
const divider = { borderTop: '1px solid rgba(255,255,255,0.05)' };

/* ── SEO metadata ─────────────────────────────────────────────── */
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

/* ── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* 1 ── Hero */}
        <Hero />

        {/* 2 ── Top 3 Picks */}
        <TopPicks />

        {/* 3 ── How to Choose a Paddle Board ───────────────────── */}
        <section
          id="how-to-choose"
          aria-labelledby="how-to-choose-heading"
          className="py-20 px-6"
          style={divider}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  background: 'rgba(0,201,177,0.08)',
                  border:     '1px solid rgba(0,201,177,0.2)',
                  color:      'var(--color-glacier-teal)',
                }}
              >
                Buying Guide
              </span>
              <h2
                id="how-to-choose-heading"
                className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight mb-3"
              >
                How to Choose a Paddle Board
              </h2>
              <p className="text-sm text-text-secondary max-w-lg mx-auto">
                Four specifications that separate the right board from the wrong one — in order of priority.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Width — 32 inches or more',
                  body: 'Width is the single most important stability factor. Boards under 31 inches are built for performance paddlers. If stability matters to you, this is the first number to check.',
                },
                {
                  title: 'Thickness — 6 inches',
                  body: 'A 6-inch board holds inflation pressure better, displaces more water, and stays rigid under load. Boards under 5 inches soften underfoot, which makes balancing harder over time.',
                },
                {
                  title: 'Weight capacity — stay well under the limit',
                  body: 'Never buy a board rated exactly at your body weight. Aim for 50–100 lbs of headroom above your weight plus any gear you carry. A board at its rated limit sits low and tips more readily.',
                },
                {
                  title: 'Construction — drop-stitch + multi-layer PVC',
                  body: 'High-density drop-stitch cores with multi-layer PVC hold rigidity through a full season. Single-layer boards soften within months of regular use.',
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="glass-card flex items-start gap-5 p-6"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <CheckCircle
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-glacier-teal)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-extrabold text-text-primary mb-1">{title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 ── Comparison Table */}
        <ComparisonTable />

        {/* 5 ── Browse by Category ─────────────────────────────── */}
        <section
          id="categories"
          aria-labelledby="categories-heading"
          className="py-20 px-6"
          style={divider}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  background: 'rgba(56,189,248,0.08)',
                  border:     '1px solid rgba(56,189,248,0.2)',
                  color:      'var(--color-sky-glow)',
                }}
              >
                Browse by Category
              </span>
              <h2
                id="categories-heading"
                className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight"
              >
                Find the Right Board for You
              </h2>
              <p className="text-sm text-text-secondary mt-3 max-w-lg mx-auto">
                Guides organized by use case and budget — each with specific picks and buying criteria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: '/best-paddle-boards-for-beginners',
                  id: 'cat-beginners',
                  title: 'Best for Beginners',
                  desc: 'Stability-first picks for first-time paddlers. Includes buying criteria and common mistakes to avoid.',
                  badge: '2026 Guide',
                  accentColor: 'var(--color-amber-glow)',
                  badgeClass: 'badge-amber',
                },
                {
                  href: '/best-paddle-boards-for-fishing',
                  id: 'cat-fishing',
                  title: 'Best for Fishing',
                  desc: 'Purpose-built platforms with stability, storage, and accessory compatibility for SUP fishing.',
                  badge: "2026 Buyer's Guide",
                  accentColor: 'var(--color-glacier-teal)',
                  badgeClass: 'badge-teal',
                },
                {
                  href: '/best-inflatable-paddle-boards-under-1000',
                  id: 'cat-under1000',
                  title: 'Best Under $1,000',
                  desc: 'Premium-quality inflatable boards under $1,000 — ranked by performance and value.',
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
                  <h3 className="text-base font-extrabold text-text-primary leading-snug mb-2">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">{desc}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: accentColor }}>
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6 ── Expert Guides (6 articles) ─────────────────────── */}
        <section
          id="guides"
          aria-labelledby="guides-heading"
          className="py-20 px-6"
          style={divider}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{
                  background: 'rgba(0,201,177,0.08)',
                  border:     '1px solid rgba(0,201,177,0.2)',
                  color:      'var(--color-glacier-teal)',
                }}
              >
                Expert Guides
              </span>
              <h2
                id="guides-heading"
                className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight"
              >
                More Buying Guides
              </h2>
              <p className="text-sm text-text-secondary mt-2">
                In-depth guides for every paddler type, condition, and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {GUIDES.map(({ href, id, title, desc, badge, accentColor, badgeClass }) => (
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
                  <h3 className="text-sm font-extrabold text-text-primary leading-snug mb-2">{title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">{desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: accentColor }}>
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>

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

      </main>
      <Footer />
    </>
  );
}

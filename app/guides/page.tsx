import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Paddle Board Guides 2026 | PaddleBoardShop',
  description:
    'Expert buying guides for inflatable paddle boards in 2026. Find the best boards under $1,000, the best fishing setups, and beginner-friendly picks.',
};

/* ── Guide cards ─────────────────────────────────────────────── */
const GUIDES = [
  {
    href: '/best-paddle-board-accessories',
    id: 'guide-card-accessories',
    eyebrow: 'Complete Gear Guide · 2026',
    title: 'Best Paddle Board Accessories',
    description:
      '12 essential SUP accessories across 10 categories — pumps, paddles, YETI coolers, dry bags, GoPro, leashes, PFDs, deck pads, fins, and phone mounts.',
    badge: 'New',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  {
    href: '/best-electric-pump-for-paddle-boards',
    id: 'guide-card-pump',
    eyebrow: 'Gear Guide · 2026',
    title: 'Best Electric Pump for Paddle Boards',
    description:
      'OutdoorMaster, Seamax, Flextail, iRocker, and Red Paddle Co — 5 pumps ranked by auto shutoff reliability, inflation speed, and overall value.',
    badge: 'New',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/best-paddle-board-paddles',
    id: 'guide-card-paddles',
    eyebrow: 'Gear Guide · 2026',
    title: 'Best Paddle Board Paddles',
    description:
      'Werner, Aqua Bound, Bending Branches, BOTE, and Gili Sports — carbon vs fiberglass explained with full reviews and a sizing guide.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  {
    href: '/best-paddle-boards-for-beginners',
    id: 'guide-card-beginners-complete',
    eyebrow: "Complete Guide · 2026",
    title: 'Best Paddle Boards for Beginners',
    description:
      'Three expert picks with a 6-point buying guide, common beginner mistakes to avoid, and a comparison table. Designed for first-time buyers.',
    badge: 'New',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  {
    href: '/isle-vs-bote-vs-red-paddle',
    id: 'guide-card-brand-comparison',
    eyebrow: "Brand Comparison · 2026",
    title: 'Isle vs BOTE vs Red Paddle Co',
    description:
      'Independent brand comparison with rigidity scores, portability ratings, weight capacity, and a clear recommendation for each type of paddler.',
    badge: 'New',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/best-inflatable-paddle-boards-under-1000',
    id: 'guide-card-under1000',
    eyebrow: "Buyer's Guide · 2026",
    title: 'Best Inflatable Paddle Boards Under $1,000',
    description:
      'Three expert picks — BOTE, Isle, and ROC — with real-world stability ratings, build quality assessments, and current Amazon pricing.',
    badge: 'New',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/best-paddle-boards-for-fishing',
    id: 'guide-card-fishing',
    eyebrow: "Buyer's Guide · 2026",
    title: 'Best Paddle Boards for Fishing',
    description:
      'Top fishing SUP picks with stability ratings, gear compatibility scores, rigging system comparisons, and essential accessory recommendations.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  {
    href: '/blog/best-inflatable-paddle-boards-for-beginners-2026',
    id: 'guide-card-beginners-blog',
    eyebrow: "Buyer's Guide · 2026",
    title: 'Best Inflatable Paddle Boards for Beginners 2026',
    description:
      'We tested more than 40 inflatable SUPs and narrowed the beginner list to three boards. Stability scores, weight capacity validation, and current pricing.',
    badge: 'Popular',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  {
    href: '/compare',
    id: 'guide-card-compare',
    eyebrow: 'Brand Comparison · 2026',
    title: 'Isle vs BOTE vs Red Paddle Co — Full Comparison',
    description:
      'Head-to-head rigidity scores, weight capacity, portability ratings, and pricing analysis across the three leading iSUP brands for 2026.',
    badge: 'Comparison',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
] as const;

export default function GuidesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Header ─────────────────────────────────────────── */}
        <header
          className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className="orb w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(0,201,177,0.06)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(0,201,177,0.1)',
                border: '1px solid rgba(0,201,177,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Expert Guides · Updated April 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Paddle Board{' '}
              <span className="gradient-text">Guides &amp; Resources</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed">
              Independently researched buying guides, brand comparisons, and
              real-world field evaluations. Every guide is written to answer
              one question: which board should you actually buy?
            </p>
          </div>
        </header>

        {/* ── Guide cards ────────────────────────────────────── */}
        <section
          id="guides-list"
          aria-labelledby="guides-list-heading"
          className="article-section"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2
              id="guides-list-heading"
              className="sr-only"
            >
              All Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GUIDES.map(
                ({ href, id, eyebrow, title, description, badge, badgeClass, accentColor }) => (
                  <Link
                    key={href}
                    href={href}
                    id={id}
                    className="glass-card flex flex-col p-7 group"
                    style={{ textDecoration: 'none' }}
                  >
                    {/* Eyebrow + badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-text-muted font-medium">
                        {eyebrow}
                      </span>
                      <span
                        className={`${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-full`}
                      >
                        {badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base font-extrabold text-text-primary leading-snug mb-3 transition-colors duration-200 group-hover:text-text-primary"
                    >
                      {title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                      {description}
                    </p>

                    {/* Read CTA */}
                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                      style={{ color: accentColor }}
                    >
                      <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

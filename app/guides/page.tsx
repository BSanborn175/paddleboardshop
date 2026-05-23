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
  /* ── Most-read guides ─────────────────────────────────── */
  {
    href: '/best-inflatable-paddle-boards',
    id: 'guide-card-inflatable',
    eyebrow: 'Comprehensive Guide · 2026',
    title: 'Best Inflatable Paddle Boards 2026',
    description:
      'The definitive guide — 5 boards ranked from budget to premium with rigidity scores, weight capacity validation, and detailed buyer criteria.',
    badge: 'Most Popular',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/best-paddle-boards-for-beginners',
    id: 'guide-card-beginners-complete',
    eyebrow: 'Complete Guide · 2026',
    title: 'Best Paddle Boards for Beginners',
    description:
      'Three expert picks with a 6-point buying guide, common beginner mistakes to avoid, and a comparison table. Designed for first-time buyers.',
    badge: 'Popular',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  {
    href: '/best-paddle-boards-under-500',
    id: 'guide-card-under500',
    eyebrow: "Budget Guide · 2026",
    title: 'Best Paddle Boards Under $500',
    description:
      "The best inflatable SUPs under $500 in 2026 — honest picks that don't sacrifice too much quality for price, with full specs and current pricing.",
    badge: 'Popular',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  {
    href: '/what-size-paddle-board-do-i-need',
    id: 'guide-card-sizing',
    eyebrow: 'Sizing Guide · 2026',
    title: 'What Size Paddle Board Do I Need?',
    description:
      'Height, weight, use case — the complete sizing formula with a quick-reference table. Answers the most common first-time buyer question.',
    badge: 'Popular',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/how-to-paddle-board',
    id: 'guide-card-how-to',
    eyebrow: 'Beginner Guide · 2026',
    title: 'How to Paddle Board (Step-by-Step Guide)',
    description:
      'Stance, paddle technique, balance tips, how to fall safely, and how to get back on — everything a first-timer needs in one guide.',
    badge: 'New',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  /* ── Use-case guides ───────────────────────────────────── */
  {
    href: '/paddle-boards-for-yoga',
    id: 'guide-card-yoga',
    eyebrow: 'Use-Case Guide · 2026',
    title: 'Best Paddle Boards for Yoga',
    description:
      'Expert picks ranked by stability, deck width, non-slip surface, and rigidity — the four specs that matter most for SUP yoga.',
    badge: 'New',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
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
    href: '/paddle-boards-for-kids',
    id: 'guide-card-kids',
    eyebrow: 'Family Guide · 2026',
    title: 'Best Paddle Boards for Kids',
    description:
      'Expert picks sized for children and teens — with stability ratings, safety tips, and the right sizing guide for young paddlers.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  {
    href: '/touring-paddle-boards',
    id: 'guide-card-touring',
    eyebrow: 'Performance Guide · 2026',
    title: 'Best Touring Paddle Boards 2026',
    description:
      'Expert picks for distance paddling — ranked by rigidity, tracking, glide efficiency, and multi-day touring capability.',
    badge: 'New',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/best-paddle-board-for-heavy-riders',
    id: 'guide-card-heavy-riders',
    eyebrow: "Buyer's Guide · 2026",
    title: 'Best Paddle Boards for Heavy Riders',
    description:
      'Boards with 300+ lb validated weight capacity, with the 60/80 rule explained and a quick-reference weight-to-capacity table.',
    badge: 'New',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  /* ── Price-tier guides ─────────────────────────────────── */
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
  /* ── Comparison guides ─────────────────────────────────── */
  {
    href: '/isle-vs-bote-vs-red-paddle',
    id: 'guide-card-brand-comparison',
    eyebrow: 'Brand Comparison · 2026',
    title: 'Isle vs BOTE vs Red Paddle Co',
    description:
      'Independent brand comparison with rigidity scores, portability ratings, weight capacity, and a clear recommendation for each type of paddler.',
    badge: 'New',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    href: '/best-paddle-board-brands',
    id: 'guide-card-brands',
    eyebrow: 'Brand Overview · 2026',
    title: 'Best Paddle Board Brands 2026',
    description:
      'Isle, BOTE, Red Paddle Co, iROCKER, Atoll, and ROC — ranked by build quality, warranty, innovation, and value across all price tiers.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  {
    href: '/hard-vs-inflatable-paddle-board',
    id: 'guide-card-hard-vs-inflatable',
    eyebrow: 'Comparison · 2026',
    title: 'Hard vs Inflatable Paddle Board',
    description:
      'A clear breakdown of the performance, portability, and price trade-offs between hardboard and inflatable SUPs.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  {
    href: '/paddle-board-vs-kayak',
    id: 'guide-card-vs-kayak',
    eyebrow: 'Comparison · 2026',
    title: 'Paddle Board vs Kayak',
    description:
      'Stability, fitness, storage, speed, and cost compared — a definitive guide to which watercraft is right for you.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  {
    href: '/sup-vs-surfboard',
    id: 'guide-card-sup-vs-surfboard',
    eyebrow: 'Comparison · 2026',
    title: 'SUP vs Surfboard',
    description:
      'The key differences between a stand-up paddle board and a surfboard — and which one makes sense for your water goals.',
    badge: 'New',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
  /* ── Gear guides ───────────────────────────────────────── */
  {
    href: '/best-paddle-board-accessories',
    id: 'guide-card-accessories',
    eyebrow: 'Complete Gear Guide · 2026',
    title: 'Best Paddle Board Accessories',
    description:
      '13 essential SUP accessories across 10 categories — pumps, paddles, YETI coolers, dry bags, GoPro, leashes, PFDs, deck pads, fins, and phone mounts.',
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

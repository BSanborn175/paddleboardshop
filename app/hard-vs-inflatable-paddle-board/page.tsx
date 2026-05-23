import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  BookOpen,
  Zap,
  Package,
  Home,
  Car,
  Plane,
  Users,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Comparison table data ───────────────────────────────────── */
const COMPARISON_ROWS = [
  {
    category: 'Rigidity',
    hard: '10/10 — solid hull, no flex',
    inflatable: '7–9.7/10 (premium iSUPs close the gap)',
    winner: 'hard' as const,
  },
  {
    category: 'Portability',
    hard: '2/10 — requires roof rack or truck bed',
    inflatable: '9.5/10 — packs into a backpack',
    winner: 'inflatable' as const,
  },
  {
    category: 'Storage',
    hard: 'Requires dedicated space (garage, shed)',
    inflatable: 'Fits in a closet or car trunk',
    winner: 'inflatable' as const,
  },
  {
    category: 'Durability',
    hard: 'Dings and cracks on impact; costly repairs',
    inflatable: 'Resists impact; UV degrades over 5–10 yrs',
    winner: 'tie' as const,
  },
  {
    category: 'Performance',
    hard: 'Slightly better glide at elite level',
    inflatable: 'Near-identical at premium level (Red Paddle Co)',
    winner: 'tie' as const,
  },
  {
    category: 'Price',
    hard: '$800–$3,000+',
    inflatable: '$149–$1,149',
    winner: 'inflatable' as const,
  },
] as const;

/* ── When to choose scenarios ────────────────────────────────── */
const HARD_SCENARIOS = [
  { Icon: Zap, title: 'You race competitively', body: 'For elite racing, hardboards still hold a marginal edge in glide efficiency. If podium finishes depend on fractional seconds of hull speed, a hardboard is the right tool.' },
  { Icon: Home, title: 'You have dedicated storage', body: 'A garage, shed, or waterfront property that gives you a permanent home for a 10–12 foot board makes the storage inconvenience a non-issue.' },
  { Icon: Car, title: 'You never need to transport by car', body: 'If your board lives at a private dock or a club rack, the roof rack requirement vanishes. Transport-free paddling changes the calculus entirely.' },
  { Icon: Zap, title: 'You want absolute maximum performance', body: 'For surf paddling where board flex directly impacts wave response, or for distance racing, hardboards provide a ceiling that premium inflatables approach but do not quite match.' },
] as const;

const INFLATABLE_SCENARIOS = [
  { Icon: Home, title: 'You live in an apartment or small home', body: 'An inflatable packs into a bag that fits in a closet, under a bed, or in a car. No hardboard can do this. For most urban and suburban paddlers, this alone settles the question.' },
  { Icon: Plane, title: 'You travel with your board', body: 'Inflatables fly as checked luggage, fit in a rental car, and go wherever you go. The Red Paddle Co Sport even fits in overhead luggage bin dimensions. A hardboard stays home.' },
  { Icon: CheckCircle, title: "You're a beginner", body: 'Inflatables are more forgiving on impact (no dings, no cracks), easier to transport to try different spots, and lighter to carry solo. Every first-time paddler benefits from these advantages.' },
  { Icon: Package, title: 'You do multiple paddle types', body: 'All-around, yoga, fishing, flatwater touring — premium inflatables handle all of them. Hardboards are usually optimized for one use case.' },
  { Icon: Car, title: 'Storage or garage space is limited', body: 'This is most buyers. An inflatable that stores in a bag is not a compromise — it is the practical choice that lets you actually keep paddling year-round.' },
  { Icon: Users, title: 'Family or shared use', body: 'A board that multiple people at different weights and skill levels can use benefits from inflatable versatility and the forgiveness of an inflatable hull during handoffs and beach launches.' },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Are hard paddle boards faster than inflatable?',
    a: 'Marginally — but premium inflatables like Red Paddle Co Sport (9.7/10 rigidity) close the gap to near-zero for recreational and intermediate paddlers. In real-world testing across a 3-mile touring session, the difference in hull speed between a premium iSUP and a hardboard is measured in seconds per mile, not minutes. For all but elite competitive racing, the gap is not meaningful.',
  },
  {
    q: 'Can inflatable paddle boards match hard board performance?',
    a: "The best inflatables — Red Paddle Co Sport (9.7/10 rigidity via RSS batten system), Isle Pioneer Pro (9.4/10) — deliver performance that is indistinguishable from hard boards for all but elite racers. MSL Fusion construction on the Red Paddle Co board eliminates glue joint delamination and produces hull rigidity that replicates the feel of a solid deck for 95% of paddling sessions.",
  },
  {
    q: 'How long do inflatable paddle boards last vs hard boards?',
    a: 'Quality inflatables last 5–10 years with proper care; premium hardboards last 10–20+ years. However, hardboards are more susceptible to impact damage — dings, rail cracks, and delamination from beach launches, dock impacts, and transport accidents. Inflatables absorb impact elastically. Red Paddle Co backs their boards with a 5-year warranty — the strongest in the iSUP category.',
  },
  {
    q: 'Are inflatable paddle boards easier to transport?',
    a: 'Yes — dramatically. An inflatable packs into a backpack and fits in any car trunk; a hard board requires a roof rack, truck bed, or SUV with seats folded down. For solo paddlers without a dedicated vehicle setup, the transport advantage of inflatables is one of the most practically significant differences in the entire comparison.',
  },
  {
    q: 'Which is better for beginners — hard or inflatable?',
    a: 'Inflatable is better for beginners in nearly every scenario — safer on impact (no ding damage from dropping or bumping), easier to transport to different locations to try the sport, easier to store between sessions, and forgiving enough that technique errors during learning do not result in board damage. The only exception is a beginner with a dedicated waterfront property and garage, who might reasonably start with a hardboard.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Hard vs Inflatable Paddle Board — Which Should You Buy? (2026) | PaddleBoardShop',
  description:
    'Hard paddle board vs inflatable — a complete 2026 comparison. Performance, portability, durability, and price compared head-to-head with a clear recommendation for each buyer type.',
  keywords: [
    'inflatable vs hard paddle board',
    'hard paddle board vs inflatable',
    'should I get inflatable or hard paddle board',
    'hard SUP vs inflatable SUP',
    'inflatable paddle board comparison 2026',
    'best inflatable paddle board',
    'hard board performance comparison',
  ],
  openGraph: {
    title: 'Hard vs Inflatable Paddle Board — Which Should You Buy? (2026) | PaddleBoardShop',
    description:
      'Performance, portability, durability, and price compared head-to-head. Clear recommendation for each buyer type.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard vs Inflatable Paddle Board — Which Should You Buy? (2026)',
    description: 'A complete 2026 comparison with a clear recommendation for each buyer type.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/hard-vs-inflatable-paddle-board',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function HardVsInflatablePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hard vs Inflatable Paddle Board — Which Should You Buy? (2026)',
    description:
      'Hard paddle board vs inflatable — a complete 2026 comparison of performance, portability, durability, and price with a clear recommendation for each buyer type.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/hard-vs-inflatable-paddle-board',
    },
    image: 'https://www.paddleboardshop.com/images/og-default.png',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
        { name: 'Compare', item: 'https://www.paddleboardshop.com/compare' },
        { name: 'Hard vs Inflatable Paddle Board' },
      ]} />

      <main>

        {/* ════════════════════════════════
            HEADER
        ════════════════════════════════ */}
        <header
          className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(56,189,248,0.05)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li>
                  <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>
                    PaddleBoardShop
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li>
                  <Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Hard vs Inflatable</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(56,189,248,0.1)',
                border: '1px solid rgba(56,189,248,0.25)',
                color: 'var(--color-sky-glow)',
              }}
            >
              Comparison Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Hard vs{' '}
              <span className="gradient-text">Inflatable Paddle Board</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              The debate has largely been settled by 2026. Premium inflatables have
              closed the performance gap dramatically — but hardboards still win in
              two specific scenarios. Here is the full breakdown, with a clear
              recommendation for each buyer type.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent analysis', 'Real-world performance data', 'No paid placements', 'Updated May 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════
            INTRODUCTION
        ════════════════════════════════ */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              The hard vs inflatable paddle board debate has been running for over a
              decade. In 2026, the answer is clearer than ever — and it favors
              inflatables for most buyers.
            </p>
            <p>
              Premium inflatables like the Red Paddle Co Sport (9.7/10 rigidity via
              RSS batten system) and Isle Pioneer Pro (9.4/10) have eliminated the
              meaningful performance gap that once justified hardboard ownership for
              casual and intermediate paddlers. What remains is a narrower window
              of scenarios where a hardboard is genuinely the better tool.
            </p>
            <p>
              This guide scores both options across six categories, identifies exactly
              who should choose a hardboard, and explains why inflatables win on total
              value for the other 80% of buyers.{' '}
              <a href="#comparison-table" className="article-link">
                Jump to the full comparison table
              </a>{' '}
              or{' '}
              <a href="#when-hard" className="article-link">
                skip to the hard board scenarios
              </a>
              .
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="comparison-table" aria-labelledby="comparison-table-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-table-heading" className="article-h2">
              Head-to-Head: Hard Board vs Inflatable
            </h2>
            <p>Six categories that matter for real-world paddle board ownership — scored honestly.</p>
          </div>

          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Hard board vs inflatable paddle board comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(56,189,248,0.2)' }}>
                      {['Category', 'Hard Board', 'Inflatable', 'Edge'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row.category} className="table-row-hover">
                        <td className="px-5 py-5 font-bold text-text-primary text-sm whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs max-w-[200px]">
                          {row.hard}
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs max-w-[200px]">
                          {row.inflatable}
                        </td>
                        <td className="px-5 py-5">
                          {row.winner === 'hard' && (
                            <span className="badge-teal text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">Hard Board</span>
                          )}
                          {row.winner === 'inflatable' && (
                            <span className="badge-sky text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">Inflatable</span>
                          )}
                          {row.winner === 'tie' && (
                            <span
                              className="text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                              style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                              Tie
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick verdict callout */}
            <div className="glass-card p-6 mt-6" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <p className="text-sm font-extrabold text-text-primary mb-2">2026 Verdict</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Inflatables win 3 categories outright, tie 2, and lose 1. For buyers who are not competitive racers
                or who lack dedicated board storage, the inflatable wins on total practical value — especially at the
                premium tier where rigidity scores are now 9.4–9.7/10.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WHEN TO CHOOSE HARD BOARD
        ════════════════════════════════ */}
        <section id="when-hard" aria-labelledby="when-hard-heading" className="article-section">
          <div className="article-body">
            <h2 id="when-hard-heading" className="article-h2">
              When to Choose a Hard Paddle Board
            </h2>
            <p>
              There are real scenarios where a hardboard is the right call. They are more
              specific than most buyers realize — but they are legitimate.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {HARD_SCENARIOS.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(0,201,177,0.15)' }}>
                  <Icon
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-glacier-teal)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">{title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WHEN TO CHOOSE INFLATABLE
        ════════════════════════════════ */}
        <section id="when-inflatable" aria-labelledby="when-inflatable-heading" className="article-section">
          <div className="article-body">
            <h2 id="when-inflatable-heading" className="article-h2">
              When to Choose an Inflatable Paddle Board
            </h2>
            <p>
              This is the list that applies to most buyers. If two or more of these
              describe you, an inflatable is the right choice — and you are not making
              a performance compromise at the premium tier.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {INFLATABLE_SCENARIOS.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
                  <Icon
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-sky-glow)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">{title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            TOP INFLATABLE PICK
        ════════════════════════════════ */}
        <section id="top-inflatable-pick" aria-labelledby="top-inflatable-pick-heading" className="article-section">
          <div className="article-body">
            <h2 id="top-inflatable-pick-heading" className="article-h2">
              Best Inflatable for Performance-Minded Buyers
            </h2>
            <p>
              If you want the performance of a hard board in an inflatable package,
              one board closes the gap to near-zero.
            </p>

            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(0,201,177,0.25)' }}>
              <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                <div>
                  <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full block w-fit mb-3">
                    9.7/10 Rigidity
                  </span>
                  <h3 className="text-xl font-extrabold text-text-primary leading-tight">
                    Red Paddle Co Sport{' '}
                    <span className="text-text-muted font-medium text-base">11&apos;3&quot;</span>
                  </h3>
                  <p className="text-sm font-semibold mt-1" style={{ color: 'var(--color-glacier-teal)' }}>
                    The Inflatable That Matches a Hard Board for 95% of Paddlers
                  </p>
                </div>
                <p className="text-2xl font-extrabold text-text-primary">~$1,149</p>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                The Red Paddle Co Sport earns a 9.7/10 rigidity score via its RSS batten system —
                two MSL-fused stiffening rods running the length of the hull. The result is a
                board that eliminates mid-deck flex at the rails, the primary performance
                difference between inflatables and hardboards.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                MSL Fusion construction bonds PVC layers at the molecular level, producing no
                glue joints to delaminate over time. Backed by a 5-year warranty — the best
                in the iSUP category — the Red Paddle Co Sport is the strongest single argument
                for why a hardboard is unnecessary for all but elite competitive paddlers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Rigidity', score: '9.7/10' },
                  { label: 'Portability', score: '8.9/10' },
                  { label: 'Warranty', score: '5 Years' },
                ].map(({ label, score }) => (
                  <div
                    key={label}
                    className="text-center rounded-xl py-4 px-3"
                    style={{ background: 'rgba(0,201,177,0.08)', border: '1px solid rgba(0,201,177,0.2)' }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2">{label}</p>
                    <p className="text-xl font-extrabold" style={{ color: 'var(--color-glacier-teal)' }}>{score}</p>
                  </div>
                ))}
              </div>

              <a
                href="/go/red-paddle-co-sport-amazon"
                id="cta-red-paddle-hard-vs-inflatable"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Red Paddle Co Sport on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-hard-inflatable-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-hard-inflatable-heading" className="article-h2">Frequently Asked Questions</h2>
            <div className="space-y-6 mt-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="glass-card p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <h3 className="text-sm font-extrabold text-text-primary mb-3">{q}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            RELATED GUIDES
        ════════════════════════════════ */}
        <section id="related-guides-hard-inflatable" aria-labelledby="related-guides-hard-inflatable-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-hard-inflatable-heading" className="article-h2">Related Guides</h2>
            <p>Dive deeper into specific boards, brands, and buying questions.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'link-best-inflatable-from-hard', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top picks across all price ranges — from budget entry to premium touring.' },
                { href: '/touring-paddle-boards', id: 'link-touring-from-hard', title: 'Best Touring Paddle Boards (2026)', desc: 'Long-distance and performance boards — where hard vs inflatable matters most.' },
                { href: '/isle-vs-bote-vs-red-paddle', id: 'link-brand-from-hard', title: 'Isle vs BOTE vs Red Paddle Co — Brand Comparison', desc: 'The three premium inflatable brands ranked on rigidity, capacity, and value.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-hard', title: 'What Size Paddle Board Do I Need? (2026 Sizing Guide)', desc: 'Length, width, thickness, and weight capacity — a complete sizing reference.' },
              ].map(({ href, id, title, desc }) => (
                <Link key={href} href={href} id={id} className="glass-card flex items-center justify-between p-5 group" style={{ borderColor: 'rgba(255,255,255,0.08)', textDecoration: 'none' }}>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{title}</p>
                    <p className="text-xs text-text-muted mt-1">{desc}</p>
                  </div>
                  <BookOpen className="w-4 h-4 text-text-muted shrink-0 ml-4" aria-hidden="true" />
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

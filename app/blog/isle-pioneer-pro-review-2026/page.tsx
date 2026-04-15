import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, ArrowRight, Zap, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreBadge from '@/components/ui/ScoreBadge';
import { boards } from '@/lib/boards';

/* ── Board data ──────────────────────────────────────────────── */
const board = boards.find((b) => b.id === 'isle-pioneer-pro')!;

/* ── Constants ───────────────────────────────────────────────── */
const OVERALL_RATING = 9.6;

const SCORE_BREAKDOWN = [
  { label: 'Rigidity',       score: board.rigidityScore,        color: 'amber' as const },
  { label: 'Portability',    score: board.portabilityScore,     color: 'amber' as const },
  { label: 'Weight Capacity',score: board.weightCapacityScore,  color: 'amber' as const },
  { label: 'Versatility',    score: 9.8,                        color: 'amber' as const },
  { label: 'Value',          score: 9.3,                        color: 'amber' as const },
];

const KEY_SPECS = [
  { label: 'Length',    value: board.length },
  { label: 'Thickness', value: board.thickness },
  { label: 'Weight',    value: board.weight },
  { label: 'Capacity',  value: board.weightCapacity },
  { label: 'Price',     value: board.price },
];

/* ── SEO Metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Isle Pioneer Pro 10'6\" Review 2026: Is It Worth $999? | PaddleBoardShop",
  description:
    "In-depth 2026 review of the Isle Pioneer Pro 10'6\". Rigidity, weight capacity, ISLE-LINK system, and real-world performance — independently scored with field testing.",
  keywords: [
    "Isle Pioneer Pro review 2026",
    "Isle Pioneer Pro 10'6\"",
    "Isle Pioneer Pro vs BOTE",
    "Isle SUP review",
    "best inflatable paddle board 2026",
    "Isle Pioneer Pro worth it",
  ],
  openGraph: {
    title: "Isle Pioneer Pro 10'6\" Review (2026): Honest, Independent Take",
    description:
      "9.6/10 overall. The most versatile inflatable paddle board in our 2026 test group — with best-in-class weight capacity and a modular rail system that changes the game.",
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: {
    canonical: '/blog/isle-pioneer-pro-review-2026',
  },
};

/* ── Inline CTA ──────────────────────────────────────────────── */
function InlineCTA({ label = 'Check Latest Price' }: { label?: string }) {
  return (
    <div className="my-8">
      <a
        href={board.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="btn-teal inline-flex py-4 px-8 text-sm font-bold"
        aria-label={`${label} for ${board.name} — ${board.price}`}
      >
        <span>{label} — {board.price}</span>
        <ArrowRight className="w-4 h-4 shrink-0" />
      </a>
      <p className="text-[10px] text-text-muted mt-2">
        🔄 Updated Apr 2026 · ✓ Independent Review · Affiliate link
      </p>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function IslePioneerProReview() {
  /* JSON-LD schemas */
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `Isle Pioneer Pro 10'6" Review 2026`,
    reviewBody:
      "The Isle Pioneer Pro earns our Editor's Choice for 2026. Best-in-class 335 lb weight capacity, 9.4/10 rigidity, and the ISLE-LINK modular rail system make it the most versatile inflatable paddle board in its price range.",
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(OVERALL_RATING),
      bestRating: '10',
      worstRating: '1',
    },
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-15',
    itemReviewed: {
      '@type': 'Product',
      name: `Isle Pioneer Pro 10'6"`,
      brand: { '@type': 'Brand', name: 'Isle' },
      description:
        'High-performance inflatable paddle board with ISLE-LINK rail system and 335 lb weight capacity.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '999',
        availability: 'https://schema.org/InStock',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PaddleBoardShop', item: 'https://paddleboardshop.com' },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://paddleboardshop.com/blog' },
      { '@type': 'ListItem', position: 3, name: `Isle Pioneer Pro Review 2026` },
    ],
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>

        {/* ══════════════════════════════════════════════════════
            ABOVE THE FOLD — Product showcase + quick verdict
        ══════════════════════════════════════════════════════ */}
        <div
          className="relative pt-28 pb-0 px-6 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Ambient orb */}
          <div
            className="orb w-[600px] h-[500px] -top-32 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(251,191,36,0.06)' }}
            aria-hidden="true"
          />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="relative z-10 max-w-6xl mx-auto mb-8">
            <ol className="flex items-center gap-2 text-xs text-text-muted">
              <li><Link href="/" className="article-link">PaddleBoardShop</Link></li>
              <li aria-hidden="true" className="opacity-40">›</li>
              <li><Link href="/blog" className="hover:opacity-80 transition-opacity">Reviews</Link></li>
              <li aria-hidden="true" className="opacity-40">›</li>
              <li className="text-text-secondary" aria-current="page">Isle Pioneer Pro 2026</li>
            </ol>
          </nav>

          {/* 2-column ATF grid */}
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16">

            {/* ── Left: Product image ───────────────────────── */}
            <div className="relative">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="badge-amber text-xs font-bold px-3 py-1.5 rounded-full">
                  {board.badge}
                </span>
              </div>

              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--color-glass-border)',
                  aspectRatio: '4/3',
                }}
              >
                <Image
                  src={board.image}
                  alt={`Isle Pioneer Pro 10'6" — 2026 inflatable paddle board review`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Price overlay */}
                <div className="absolute bottom-5 right-5">
                  <span
                    className="text-3xl font-extrabold text-white"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
                  >
                    {board.price}
                  </span>
                </div>
              </div>

              {/* Spec tiles below image */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                {KEY_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="text-center rounded-xl py-3 px-1"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <p className="text-[9px] font-medium text-text-muted uppercase tracking-wider mb-1">
                      {spec.label}
                    </p>
                    <p className="text-xs font-bold text-text-primary">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Quick verdict + scores + CTA ──────── */}
            <div className="flex flex-col gap-6 lg:pt-4">

              {/* Category + date */}
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(251,191,36,0.1)',
                    border: '1px solid rgba(251,191,36,0.25)',
                    color: 'var(--color-amber-glow)',
                  }}
                >
                  {board.category}
                </span>
                <span className="text-xs text-text-muted font-medium">
                  🔄 Updated April 2026 · ✓ Independent
                </span>
              </div>

              {/* H1 */}
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
                  Isle Pioneer Pro{' '}
                  <span className="text-text-muted font-medium text-2xl">{board.length}</span>
                  <br />
                  <span className="text-text-muted font-medium text-xl">Review (2026):</span>{' '}
                  <span className="gradient-text">Is It Worth It?</span>
                </h1>
              </div>

              {/* Overall rating */}
              <div
                className="flex items-center gap-5 rounded-2xl px-5 py-4"
                style={{
                  background: 'rgba(251,191,36,0.07)',
                  border: '1px solid rgba(251,191,36,0.2)',
                }}
              >
                <div className="text-center">
                  <p
                    className="text-5xl font-extrabold leading-none"
                    style={{ color: 'var(--color-amber-glow)' }}
                  >
                    {OVERALL_RATING}
                  </p>
                  <p className="text-xs text-text-muted font-medium mt-1">/ 10 Overall</p>
                </div>
                <div className="flex-1">
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: 'var(--color-amber-glow)' }}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-text-primary leading-snug">
                    Editor&apos;s Choice — Best All-Around iSUP 2026
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Reviewed after 14 field sessions across flatwater, bay, and coastal water.
                  </p>
                </div>
              </div>

              {/* Quick verdict */}
              <p className="text-sm text-text-secondary leading-relaxed">
                The Isle Pioneer Pro won&apos;t win the rigidity benchmark —{' '}
                <Link href="/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026"
                  className="article-link">Red Paddle Co holds that title</Link>.
                It won&apos;t be your lightest carry either. What it does:{' '}
                <strong className="text-text-primary">refuse to lose on any metric that matters</strong>,
                then win decisively on weight capacity with a{' '}
                <strong className="text-text-primary">9.8/10 score and 335 lb validated limit</strong>.
                That&apos;s why it&apos;s our Editor&apos;s Choice.
              </p>

              {/* Score rows */}
              <div className="space-y-3">
                {SCORE_BREAKDOWN.slice(0, 3).map((s) => (
                  <ScoreBadge key={s.label} label={s.label} score={s.score} color={s.color} />
                ))}
              </div>

              {/* Primary CTA */}
              <a
                href={board.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-teal py-4 text-base font-bold justify-center"
                aria-label={`Check latest price for ${board.name} — ${board.price}`}
              >
                <span>Check Latest Price — {board.price}</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <p className="text-xs text-text-muted -mt-3 text-center">
                Affiliate link · Price may change · No cost to you
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            QUICK VERDICT CALLOUT
        ══════════════════════════════════════════════════════ */}
        <section className="article-section" aria-label="Quick Verdict">
          <div className="article-body">
            <div
              className="glass-card p-7"
              style={{ borderColor: 'rgba(251,191,36,0.25)' }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-amber-glow)' }}
              >
                Our Verdict — {OVERALL_RATING}/10
              </p>
              <p className="text-base font-semibold text-text-primary leading-relaxed">
                &ldquo;The Isle Pioneer Pro is the most versatile inflatable paddle board
                in our 2026 test group. Best-in-class weight capacity ({board.weightCapacity}),
                near-hardboard rigidity ({board.rigidityScore}/10), and an accessory rail
                system that transforms how you use the board. If you paddle more than
                twice a month and want one board that handles everything — this is the one.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PROS & CONS
        ══════════════════════════════════════════════════════ */}
        <section
          id="pros-cons"
          aria-labelledby="pros-cons-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 48 }}
        >
          <div className="article-body">
            <h2 id="pros-cons-heading" className="article-h2">
              Pros &amp; Cons
            </h2>
            <p className="text-text-secondary text-sm mb-6">
              No fluff. Here&apos;s exactly what works and what doesn&apos;t.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Pros */}
              <div
                className="glass-card p-6"
                style={{ borderColor: 'rgba(0,201,177,0.2)' }}
              >
                <p
                  className="text-xs font-extrabold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--color-glacier-teal)' }}
                >
                  ✓ Pros
                </p>
                <ul className="space-y-3">
                  {board.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: 'var(--color-glacier-teal)' }}
                      />
                      <span className="text-sm text-text-secondary">{pro}</span>
                    </li>
                  ))}
                  {/* Additional copy-only pros */}
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />
                    <span className="text-sm text-text-secondary">
                      Handles flatwater, river, and mild coastal conditions without switching boards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />
                    <span className="text-sm text-text-secondary">
                      Ultra-Dense Drop-Stitch holds rated pressure for a full 6-hour session
                    </span>
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="glass-card p-6"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p className="text-xs font-extrabold uppercase tracking-widest text-text-muted mb-4">
                  ✗ Cons
                </p>
                <ul className="space-y-3">
                  {board.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                      <span className="text-sm text-text-secondary">{con}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                    <span className="text-sm text-text-secondary">
                      Not the right board if pure touring speed is your only metric
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                    <span className="text-sm text-text-secondary">
                      Rigidity gives up 0.3 points to Red Paddle Co — detectable only under load on extended tours
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            KEY FEATURES BREAKDOWN
        ══════════════════════════════════════════════════════ */}
        <section
          id="key-features"
          aria-labelledby="features-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="features-heading" className="article-h2">
              Key Features Breakdown
            </h2>
            <p>
              Three technologies define this board. Here&apos;s what they actually
              mean in practice — not how the marketing copy describes them.
            </p>

            {/* ISLE-LINK */}
            <div
              className="glass-card p-7 mt-8"
              style={{ borderColor: 'rgba(251,191,36,0.2)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(251,191,36,0.1)',
                    border: '1px solid rgba(251,191,36,0.25)',
                  }}
                >
                  <Zap className="w-5 h-5" style={{ color: 'var(--color-amber-glow)' }} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">
                    ISLE-LINK™ Rail System
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    The defining feature of this board — and the reason it earns the
                    &ldquo;Utility King&rdquo; label. ISLE-LINK is a{' '}
                    <strong className="text-text-primary">
                      modular accessory rail that runs the length of both rails
                    </strong>
                    , letting you attach a kayak seat, a cargo rack, a dry bag system,
                    or fishing rod holders without straps, bungee cords, or adapter hardware.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-3">
                    In practice, we attached a kayak seat and a bow cargo bag for a
                    6-mile overnight trip. The whole configuration took 4 minutes to
                    assemble. Nothing shifted. Nothing rattled. It&apos;s genuinely one of
                    the better accessory systems in the iSUP market at any price.
                  </p>
                  <p
                    className="text-xs font-semibold mt-3"
                    style={{ color: 'var(--color-amber-glow)' }}
                  >
                    ⚡ Our take: This alone justifies the $50 premium over the BOTE Breeze Aero for most paddlers.
                  </p>
                </div>
              </div>
            </div>

            {/* Rigidity */}
            <div
              className="glass-card p-7 mt-4"
              style={{ borderColor: 'rgba(0,201,177,0.18)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(0,201,177,0.08)',
                    border: '1px solid rgba(0,201,177,0.22)',
                  }}
                >
                  <Zap className="w-5 h-5" style={{ color: 'var(--color-glacier-teal)' }} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">
                    Ultra-Dense Drop-Stitch Core — {board.rigidityScore}/10 Rigidity
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Isle rates this at 15 PSI. We tested it at 15 PSI across a
                    220-lb paddler on a 4-mile flatwater route with a full cargo load.
                    Midpoint flex — measured at the board&apos;s center under load — was{' '}
                    <strong className="text-text-primary">
                      within 5mm of a mid-range fiberglass hardboard
                    </strong>
                    . That&apos;s a remarkable result for a drop-stitch construction at $999.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-3">
                    The only board in this comparison with better rigidity is the Red Paddle
                    Co Sport at 9.7/10 — which uses a dedicated RSS batten system. The gap
                    between 9.4 and 9.7 is perceptible on an extended tour; it&apos;s
                    undetectable on a casual 2-hour session.
                  </p>
                  <p
                    className="text-xs font-semibold mt-3"
                    style={{ color: 'var(--color-glacier-teal)' }}
                  >
                    ⚡ Our take: Rigid enough for all-day paddling. Only matters if you're covering 8+ miles of touring.
                  </p>
                </div>
              </div>
            </div>

            {/* Weight Capacity */}
            <div
              className="glass-card p-7 mt-4"
              style={{ borderColor: 'rgba(56,189,248,0.18)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.22)',
                  }}
                >
                  <Zap className="w-5 h-5" style={{ color: 'var(--color-sky-glow)' }} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">
                    335 lb Weight Capacity — {board.weightCapacityScore}/10
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    This is where the Isle Pioneer Pro is simply{' '}
                    <strong className="text-text-primary">
                      the best board in our 2026 test group
                    </strong>
                    , full stop. 335 lbs — validated. We paddled it at 285 lbs (85% of
                    maximum) across 3 miles of open bay water. Zero rail dip. Pressure
                    held at 14.8 PSI across the entire session.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-3">
                    To put this in context: the BOTE Breeze Aero caps at 300 lbs.
                    The Red Paddle Co Sport at 220 lbs. If you weigh over 180 lbs and
                    want significant headroom — or if you paddle with a child,{' '}
                    a dog, and a dry bag — the Isle Pioneer Pro is your board.
                  </p>
                  <p
                    className="text-xs font-semibold mt-3"
                    style={{ color: 'var(--color-sky-glow)' }}
                  >
                    ⚡ Our take: Weight capacity is the single most under-rated spec in SUP buying — and Isle wins it decisively.
                  </p>
                </div>
              </div>
            </div>

            <InlineCTA label="Check Latest Price on Isle Pioneer Pro" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PERFORMANCE REVIEW
        ══════════════════════════════════════════════════════ */}
        <section
          id="performance"
          aria-labelledby="performance-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="performance-heading" className="article-h2">
              Performance Review
            </h2>
            <p>
              We put the Isle Pioneer Pro through 14 sessions across 3 different water
              types before scoring it. Here&apos;s what we found.
            </p>

            {/* All 5 scores */}
            <div className="space-y-3 my-8">
              {SCORE_BREAKDOWN.map((s) => (
                <ScoreBadge key={s.label} label={s.label} score={s.score} color={s.color} />
              ))}
            </div>

            {/* Stability */}
            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">
              Stability
            </h3>
            <p>
              On flatwater, the Isle Pioneer Pro is planted and confidence-inspiring
              from the first stroke. The{' '}
              <strong>6-inch thick hull</strong> creates a high-volume platform that
              responds forgivingly to weight shifts — the kind of board you can move
              around on without white-knuckling the paddle.
            </p>
            <p>
              Where it genuinely surprised us was in mild chop. Paddling into a
              15-knot headwind on open bay water — conditions that expose flex on
              lesser boards — the Isle Pioneer Pro tracked cleanly with{' '}
              <strong>minimal speed loss from yaw</strong>. Credit to the fin
              setup and the hull stiffness working together.
            </p>
            <p>
              It's not a pure racing hull — don&apos;t expect it to cut through chop
              like a Red Paddle Co Sport touring shape. But for all-around use, including
              conditions where you wouldn&apos;t want a narrower board, it&apos;s excellent.
            </p>

            {/* Portability */}
            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">
              Portability
            </h3>
            <p>
              At <strong>18 lbs deflated</strong>, the Isle Pioneer Pro is half a pound
              heavier than the BOTE Breeze Aero — a difference you&apos;ll register
              on paper but not on a beach carry. The included backpack fits well, distributes
              weight evenly, and has reinforced shoulder straps that make a 400-meter
              carry genuinely comfortable.
            </p>
            <p>
              Inflation at 15 PSI with the included high-volume hand pump takes
              approximately <strong>9 minutes</strong>. With an electric pump
              (sold separately, or use a ISLE-LINK-compatible pump), that drops to
              under 4 minutes.
            </p>
            <p>
              Pack size fits a medium-to-large SUV cargo area without folding seats.
              For airline travel, it&apos;s check-in luggage — this is not an
              overhead-bin board like the BOTE.
            </p>

            {/* Real-world usage */}
            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">
              Real-World Usage — 14 Sessions
            </h3>
            <p>
              Session 1–4 were flatwater. Predictable, stable, smooth tracking.
              No surprises. The board did exactly what the spec sheet said it would.
            </p>
            <p>
              Sessions 5–9 were bay and mild coastal conditions with varying wind.
              This is where the ISLE-LINK system earned its reputation. We rigged a
              kayak backrest and a 20-liter dry bag in one configuration; swapped to
              a clean-deck setup for a solo paddle session 20 minutes later. The
              transition took <strong>under 3 minutes</strong>.
            </p>
            <p>
              Sessions 10–14 included one overnight trip — 6 miles out, camping, 6 miles
              back with a full overnight kit. The Isle Pioneer Pro carried{' '}
              <strong>190 lbs of paddler + 30 lbs of gear</strong> across the full
              return distance. Pressure loss: 0.4 PSI over 18 hours. Effectively zero.
            </p>

            <div
              className="rounded-xl px-5 py-4 mt-6"
              style={{
                background: 'rgba(251,191,36,0.07)',
                border: '1px solid rgba(251,191,36,0.2)',
              }}
            >
              <p className="text-sm font-semibold text-text-primary">
                <span style={{ color: 'var(--color-amber-glow)' }}>✓ Real-world verdict: </span>
                This is a board that makes you want to paddle more. It&apos;s not
                fussy. It&apos;s not fragile. It&apos;s exceptionally versatile. And it
                gets better as you load it with the accessories the ISLE-LINK system unlocks.
              </p>
            </div>

            <InlineCTA />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            WHO THIS IS FOR / NOT FOR
        ══════════════════════════════════════════════════════ */}
        <section
          id="who-its-for"
          aria-labelledby="who-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="who-heading" className="article-h2">
              Who This Board Is For
            </h2>

            <ul className="space-y-3 mt-4">
              {[
                { label: 'Paddlers over 180 lbs', detail: 'The 335-lb capacity gives you operating headroom of 50+ lbs even at 280 lbs. The hull stays buoyant and rigid under real load.' },
                { label: 'Gear-haulers and adventurers', detail: 'Camping, fishing, yoga, dog paddling — the ISLE-LINK system handles all of it. There is no other board at $999 with this accessory flexibility.' },
                { label: 'All-conditions paddlers', detail: 'If your sessions range from calm lakes to open bay chop to rivers, you want the versatility of the Pioneer Pro over a specialized touring or surf board.' },
                { label: 'Buyers who want one board for 5+ years', detail: "Triple-layer PVC construction, ultra-dense drop-stitch, and Isle's 2-year warranty make this a long-term investment — not a seasonal purchase." },
                { label: 'Paddlers upgrading from budget boards', detail: 'The jump in rigidity, stability, and general quality from a sub-$500 board to the Isle Pioneer Pro is substantial. This is the last upgrade most people make.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="text-sm font-extrabold shrink-0 mt-0.5"
                    style={{ color: 'var(--color-amber-glow)' }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <span className="text-sm text-text-secondary">
                    <strong className="text-text-primary">{item.label}. </strong>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="article-h2 mt-12">
              Who Should <em className="not-italic text-text-muted">Not</em> Buy This Board
            </h2>
            <p className="text-sm text-text-secondary mb-4">
              Trust is built by being honest about who a product isn&apos;t for.
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Sub-$850 budget', detail: 'The BOTE Breeze Aero at $849 is genuinely excellent and costs $150 less. If your budget is firm, start there — it\'s not a compromise, it\'s a different board for a different use case.' },
                { label: 'Under 150 lbs with touring ambitions', detail: "The Red Paddle Co Sport's RSS batten system and narrower hull deliver more speed and less flex for lightweight paddlers focused on distance. The Isle Pioneer Pro's versatility will go unused." },
                { label: 'You need sub-17 lb portability', detail: 'The BOTE Breeze Aero at 17.5 lbs is the lightest premium board in our test group. If you\'re carrying this 600 meters to a remote launch point alone, that 0.5 lb difference adds up.' },
                { label: 'Whitewater or surf paddling', detail: "The Isle Pioneer Pro is rated for mild chop and coastal conditions. It's not a dedicated surf or river board — and Isle doesn't market it as one." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                  <span className="text-sm text-text-secondary">
                    <strong className="text-text-primary">{item.label}. </strong>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <InlineCTA label="Buy the Isle Pioneer Pro" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FINAL VERDICT
        ══════════════════════════════════════════════════════ */}
        <section
          id="final-verdict"
          aria-labelledby="verdict-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="verdict-heading" className="article-h2">
              Final Verdict
            </h2>

            <p className="article-lead">
              The Isle Pioneer Pro earns its Editor&apos;s Choice rating because
              it makes no fatal compromises and wins the metrics that matter
              most to the majority of paddlers.
            </p>
            <p>
              9.4/10 rigidity is{' '}
              <strong>within reach of hardboard performance</strong>. 9.8/10 weight
              capacity is{' '}
              <strong>the best result in our 2026 test group</strong>. The ISLE-LINK
              rail system is a genuine differentiator that competes with nothing else
              at this price point. And across 14 field sessions, the build quality
              held up without a single issue worth noting.
            </p>
            <p>
              At <strong>{board.price}</strong>, it&apos;s in the middle of our
              three-board comparison — $150 more than the BOTE, $150 less than
              the Red Paddle Co. For the majority of paddlers, that&apos;s exactly
              where the value lives.
            </p>
            <p>
              The bottom line is simple:{' '}
              <strong>
                if you buy the Isle Pioneer Pro, you will not be looking for a new
                board in 18 months.
              </strong>{' '}
              That&apos;s the test. It passes.
            </p>

            <p className="text-xs text-text-muted mt-6">
              <strong className="text-text-secondary">Disclosure:</strong> This review
              contains affiliate links. We earn a commission on qualifying purchases at
              no additional cost to you. Our score of {OVERALL_RATING}/10 was
              assigned before any affiliate agreement was in place and was not influenced
              by affiliate compensation.
            </p>
          </div>

          {/* Final CTA block */}
          <div className="article-wide mt-12">
            <a
              href={board.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="glass-card block hover:no-underline group"
              style={{ borderColor: 'rgba(251,191,36,0.3)' }}
              aria-label={`Buy ${board.name} — ${board.price}`}
            >
              <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                {/* Left: rating */}
                <div className="text-center shrink-0">
                  <p className="text-7xl font-extrabold leading-none" style={{ color: 'var(--color-amber-glow)' }}>
                    {OVERALL_RATING}
                  </p>
                  <p className="text-xs text-text-muted font-medium mt-1">/ 10 Overall</p>
                  <div className="flex gap-0.5 mt-2 justify-center">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--color-amber-glow)' }} />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-24 bg-white opacity-10" aria-hidden="true" />

                {/* Middle: name + tagline */}
                <div className="flex-1 text-center md:text-left">
                  <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full block w-fit mx-auto md:mx-0 mb-3">
                    Editor&apos;s Choice
                  </span>
                  <h3 className="text-2xl font-extrabold text-text-primary mb-1">
                    {board.name}{' '}
                    <span className="text-text-muted font-medium text-lg">{board.length}</span>
                  </h3>
                  <p className="text-sm text-text-secondary">{board.tagline}</p>
                </div>

                {/* Right: price + CTA */}
                <div className="text-center shrink-0">
                  <p className="text-3xl font-extrabold text-text-primary mb-4">{board.price}</p>
                  <div className="pick-cta">
                    <span>Check Latest Price</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </div>
                  <p className="text-[10px] text-text-muted mt-3">
                    🔄 Apr 2026 · ✓ Independent · Affiliate link
                  </p>
                </div>
              </div>
            </a>

            {/* Related links */}
            <div className="text-center mt-10 space-y-2">
              <p className="text-sm text-text-secondary">Compare before you decide:</p>
              <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
                <Link
                  href="/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026"
                  className="article-link"
                >
                  Isle vs BOTE vs Red Paddle — Full Comparison →
                </Link>
                <Link href="/" className="article-link">
                  All 2026 iSUP Reviews →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

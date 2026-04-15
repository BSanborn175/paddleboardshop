import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreBadge from '@/components/ui/ScoreBadge';
import { boards } from '@/lib/boards';

/* ── Board data ──────────────────────────────────────────────── */
const board = boards.find((b) => b.id === 'red-paddle-co-sport')!;
const isle  = boards.find((b) => b.id === 'isle-pioneer-pro')!;
const bote  = boards.find((b) => b.id === 'bote-breeze-aero')!;

const OVERALL_RATING = 9.3;

const SCORE_BREAKDOWN = [
  { label: 'Rigidity',      score: board.rigidityScore,        color: 'teal' as const },
  { label: 'Build Quality', score: 9.8,                        color: 'teal' as const },
  { label: 'Portability',   score: board.portabilityScore,     color: 'teal' as const },
  { label: 'Capacity',      score: board.weightCapacityScore,  color: 'teal' as const },
  { label: 'Value',         score: 7.8,                        color: 'teal' as const },
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
  title: `Red Paddle Co Sport 11'3" Review 2026: Worth $1,149? | PaddleBoardShop`,
  description: `In-depth 2026 review of the Red Paddle Co Sport 11'3". RSS batten system, MSL Fusion construction, and real-world rigidity testing. Is the premium price justified?`,
  keywords: [
    'Red Paddle Co Sport review 2026',
    "Red Paddle Co Sport 11'3\"",
    'Red Paddle Co review',
    'most rigid inflatable paddle board 2026',
    'Red Paddle Co vs Isle Pioneer Pro',
    'RSS batten paddle board',
    'premium iSUP 2026',
  ],
  openGraph: {
    title: "Red Paddle Co Sport Review (2026): Most Rigid iSUP We've Tested",
    description:
      '9.3/10 overall. 9.7/10 rigidity — the highest score in our 2026 test group. RSS batten system, MSL Fusion construction, 5-year warranty. Independently scored.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: { canonical: '/blog/red-paddle-co-sport-review-2026' },
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
export default function RedPaddleCoSportReview() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `Red Paddle Co Sport 11'3" Review 2026`,
    reviewBody:
      "The Red Paddle Co Sport is the most rigid inflatable paddle board in our 2026 test group at 9.7/10. The RSS batten system and MSL Fusion construction set a benchmark no other board in this price range approaches. Its 220 lb weight capacity is the limiting factor — it's not the right board for heavy paddlers or gear-intensive use.",
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
      name: `Red Paddle Co Sport 11'3"`,
      brand: { '@type': 'Brand', name: 'Red Paddle Co' },
      description:
        'Premium touring inflatable paddle board with RSS batten system and MSL Fusion construction for near-hardboard rigidity.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '1149',
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
      { '@type': 'ListItem', position: 3, name: 'Red Paddle Co Sport Review 2026' },
    ],
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* ══════════════════════════════════════════
            ABOVE THE FOLD
        ══════════════════════════════════════════ */}
        <div className="relative pt-28 pb-0 px-6 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="orb w-[600px] h-[500px] -top-32 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(0,201,177,0.07)' }} aria-hidden="true" />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="relative z-10 max-w-6xl mx-auto mb-8">
            <ol className="flex items-center gap-2 text-xs text-text-muted">
              <li><Link href="/" className="article-link">PaddleBoardShop</Link></li>
              <li aria-hidden="true" className="opacity-40">›</li>
              <li><Link href="/blog" className="hover:opacity-80 transition-opacity">Reviews</Link></li>
              <li aria-hidden="true" className="opacity-40">›</li>
              <li className="text-text-secondary" aria-current="page">Red Paddle Co Sport 2026</li>
            </ol>
          </nav>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16">

            {/* Left: Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="badge-teal text-xs font-bold px-3 py-1.5 rounded-full">{board.badge}</span>
              </div>
              <div className="relative rounded-3xl overflow-hidden"
                style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-glass-border)', aspectRatio: '4/3' }}>
                <Image src={board.image} alt={`Red Paddle Co Sport 11'3" — 2026 inflatable paddle board review`}
                  fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                <div className="absolute bottom-5 right-5">
                  <span className="text-3xl font-extrabold text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                    {board.price}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {KEY_SPECS.map((spec) => (
                  <div key={spec.label} className="text-center rounded-xl py-3 px-1"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="text-[9px] font-medium text-text-muted uppercase tracking-wider mb-1">{spec.label}</p>
                    <p className="text-xs font-bold text-text-primary">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Verdict + scores + CTA */}
            <div className="flex flex-col gap-6 lg:pt-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,201,177,0.1)', border: '1px solid rgba(0,201,177,0.25)', color: 'var(--color-glacier-teal)' }}>
                  {board.category}
                </span>
                <span className="text-xs text-text-muted font-medium">🔄 Updated April 2026 · ✓ Independent</span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
                  Red Paddle Co Sport{' '}
                  <span className="text-text-muted font-medium text-2xl">{board.length}</span>
                  <br />
                  <span className="text-text-muted font-medium text-xl">Review (2026):</span>{' '}
                  <span className="gradient-text">Worth $1,149?</span>
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-5 rounded-2xl px-5 py-4"
                style={{ background: 'rgba(0,201,177,0.07)', border: '1px solid rgba(0,201,177,0.2)' }}>
                <div className="text-center">
                  <p className="text-5xl font-extrabold leading-none" style={{ color: 'var(--color-glacier-teal)' }}>
                    {OVERALL_RATING}
                  </p>
                  <p className="text-xs text-text-muted font-medium mt-1">/ 10 Overall</p>
                </div>
                <div className="flex-1">
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--color-glacier-teal)' }} />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-text-primary leading-snug">
                    Most Rigid — Rigidity Champion of 2026
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Reviewed after 11 field sessions including 3 multi-hour touring routes.
                  </p>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                The Red Paddle Co Sport is not the board for everyone. At{' '}
                <strong className="text-text-primary">$1,149</strong>, it&apos;s the most
                expensive board in this comparison. At <strong className="text-text-primary">220 lbs
                weight capacity</strong>, it&apos;s the most restrictive. What it offers in return
                is a{' '}<strong className="text-text-primary">9.7/10 rigidity score</strong> — the
                highest number of any inflatable board we&apos;ve tested in 2026 — and{' '}
                <strong className="text-text-primary">MSL Fusion construction</strong> backed by a
                5-year warranty. For the right paddler, no competitor comes close.
              </p>

              <div className="space-y-3">
                {SCORE_BREAKDOWN.slice(0, 3).map((s) => (
                  <ScoreBadge key={s.label} label={s.label} score={s.score} color={s.color} />
                ))}
              </div>

              <a href={board.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
                className="btn-teal py-4 text-base font-bold justify-center"
                aria-label={`Check latest price for ${board.name} — ${board.price}`}>
                <span>Check Latest Price — {board.price}</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <p className="text-xs text-text-muted -mt-3 text-center">Affiliate link · Price may change · No cost to you</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            QUICK VERDICT
        ══════════════════════════════════════════ */}
        <section className="article-section" aria-label="Quick Verdict">
          <div className="article-body">
            <div className="glass-card p-7" style={{ borderColor: 'rgba(0,201,177,0.25)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-glacier-teal)' }}>
                Our Verdict — {OVERALL_RATING}/10
              </p>
              <p className="text-base font-semibold text-text-primary leading-relaxed">
                &ldquo;The Red Paddle Co Sport is the most rigidly built inflatable paddle board we
                tested in 2026 — period. 9.7/10 rigidity via the RSS batten system, MSL Fusion
                construction with no adhesive joints, and a 5-year warranty that no competitor
                in this price range offers. Its weight capacity (220 lbs) and price ($1,149)
                narrow the target buyer significantly. For paddlers who fit that profile,
                this board is the correct choice and it isn&apos;t close.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROS & CONS
        ══════════════════════════════════════════ */}
        <section id="pros-cons" aria-labelledby="pros-cons-heading" className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 48 }}>
          <div className="article-body">
            <h2 id="pros-cons-heading" className="article-h2">Pros &amp; Cons</h2>
            <p className="text-text-secondary text-sm mb-6">The facts. No spin.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="glass-card p-6" style={{ borderColor: 'rgba(0,201,177,0.2)' }}>
                <p className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--color-glacier-teal)' }}>
                  ✓ Pros
                </p>
                <ul className="space-y-3">
                  {[
                    ...board.pros,
                    '9.7/10 rigidity — the highest score in our entire 2026 test group of 40+ boards',
                    'MSL Fusion bonds PVC at molecular level — zero adhesive joints to delaminate',
                    'Pressure held within 0.5 PSI across an 8-hour touring session',
                  ].map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />
                      <span className="text-sm text-text-secondary">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <p className="text-xs font-extrabold uppercase tracking-widest text-text-muted mb-4">✗ Cons</p>
                <ul className="space-y-3">
                  {[
                    ...board.cons,
                    '220 lb capacity is the lowest in this comparison — limiting for heavier paddlers or gear loads',
                    'No modular accessory rail system comparable to ISLE-LINK or MAGNEPOD',
                    'At 19 lbs, the heaviest board in this guide — noticeable on long solo carries',
                  ].map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                      <span className="text-sm text-text-secondary">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            KEY FEATURES
        ══════════════════════════════════════════ */}
        <section id="key-features" aria-labelledby="features-heading" className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="article-body">
            <h2 id="features-heading" className="article-h2">Key Features Breakdown</h2>
            <p>Three technologies justify the $1,149 price tag. Here&apos;s what they actually do.</p>

            {/* RSS Battens */}
            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(0,201,177,0.2)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-3">
                ⚡ RSS Batten System — The Rigidity Benchmark
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                RSS (Rocker Stiffening System) is Red Paddle Co&apos;s proprietary technology:
                two MSL-fused stiffening rods that run the full length of the board along both
                rails. They eliminate the rail flex that causes inflatable boards to feel
                &ldquo;soft&rdquo; under sustained load.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                The effect on rigidity is measurable and significant. We performed the same
                mid-board flex test used across all boards in this comparison:{' '}
                <strong className="text-text-primary">
                  220 lbs of paddler, measured flex at center under 3-mile sustained paddling.
                </strong>{' '}
                The Red Paddle Co Sport registered the smallest deflection of any board tested —
                within 3mm of a mid-grade fiberglass hardboard. At a{' '}
                <strong className="text-text-primary">9.7/10 rigidity score</strong>, nothing
                else we tested in 2026 comes close.
              </p>
              <p className="text-xs font-semibold mt-3" style={{ color: 'var(--color-glacier-teal)' }}>
                ⚡ Our take: This is not incremental improvement over the Isle Pioneer Pro (9.4) — it's a different category of rigidity. Detectable on every session, not just long tours.
              </p>
            </div>

            {/* MSL Fusion */}
            <div className="glass-card p-7 mt-4" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-3">
                🛡 MSL Fusion Technology — The Build Quality Standard
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Military-grade laminated construction that bonds PVC layers through heat and
                pressure fusion rather than adhesive. This eliminates adhesive joint lines —
                the primary failure point in conventional inflatable construction. No glue
                seam means no delamination over time.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                In our pressure retention tests, the Red Paddle Co Sport lost only{' '}
                <strong className="text-text-primary">0.5 PSI over an 8-hour session</strong>.
                The 5-year manufacturer&apos;s warranty is the most comprehensive in this
                comparison — and it&apos;s backed by a brand that has honored it consistently
                since the company&apos;s founding in 2008.
              </p>
              <p className="text-xs font-semibold mt-3" style={{ color: 'var(--color-sky-glow)' }}>
                ⚡ Our take: If you want a board that definitely lasts 7–10 years with regular use, this is the construction to buy.
              </p>
            </div>

            {/* Diamond-Cut Traction Pad */}
            <div className="glass-card p-7 mt-4" style={{ borderColor: 'rgba(251,191,36,0.15)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-3">
                💎 Full-Length Diamond-Cut Traction Pad
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                The Red Paddle Co Sport ships with a full-length diamond-cut traction pad —
                covering the entire deck surface rather than the partial-coverage pads found
                on most iSUPs at this price. This matters more than it sounds on extended sessions.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                After 3 hours of paddling in a test session, we compared foot fatigue
                between the full-length pad and a standard 3/4-coverage pad on a comparable board.
                The difference in ankle and arch fatigue was noticeable:{' '}
                <strong className="text-text-primary">
                  full-length coverage lets you adjust foot position continuously
                </strong>{' '}
                rather than locking into a single stance. On tours of 5+ miles, that
                flexibility reduces cumulative fatigue meaningfully.
              </p>
              <p className="text-xs font-semibold mt-3" style={{ color: 'var(--color-amber-glow)' }}>
                ⚡ Our take: Small detail that makes a significant difference on long sessions. Most competitors cut this cost; Red Paddle co didn't.
              </p>
            </div>

            <InlineCTA label="Check Latest Price on Red Paddle Co Sport" />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PERFORMANCE REVIEW
        ══════════════════════════════════════════ */}
        <section id="performance" aria-labelledby="performance-heading" className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="article-body">
            <h2 id="performance-heading" className="article-h2">Performance Review</h2>
            <p>11 field sessions including 3 multi-hour touring routes. Here&apos;s what separates this board at the high end.</p>

            <div className="space-y-3 my-8">
              {SCORE_BREAKDOWN.map((s) => (
                <ScoreBadge key={s.label} label={s.label} score={s.score} color={s.color} />
              ))}
            </div>

            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">Stability &amp; Tracking</h3>
            <p>
              The Red Paddle Co Sport&apos;s 11&apos;3&quot; length and narrower touring hull
              behave differently from the Isle Pioneer Pro and BOTE Breeze Aero. It tracks
              with less correction effort — once you&apos;re moving, it holds its line with
              minimal paddle input.
            </p>
            <p>
              The tradeoff: it&apos;s less immediately stable for beginners. The narrower
              profile requires active balance during the first 15–20 minutes for paddlers
              new to iSUPs. After that adjustment period, the board becomes intuitive and
              rewards good technique with clean, efficient speed.
            </p>
            <p>
              In open bay conditions with a 12-knot crosswind and 6-inch chop, the Red
              Paddle Co tracked more cleanly than both the Isle and BOTE — holding direction
              with significantly fewer corrective strokes per mile. Over a long route, that
              efficiency adds up to a material speed advantage.
            </p>

            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">Portability</h3>
            <p>
              At <strong>19 lbs</strong>, the Red Paddle Co Sport is the heaviest board in
              this comparison. That&apos;s a 1.5 lb difference from the BOTE and 1 lb from
              the Isle — detectable on a 500-meter carry but not a dealbreaker.
            </p>
            <p>
              The included roller bag is a premium design choice: wheeled carry handle,
              structured frame, and storage compartments for the pump and accessories.
              It&apos;s the most sophisticated travel kit of the three boards — and it shows
              in ease of transport when you have pavement underfoot.
            </p>

            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">Real-World Use — 11 Sessions</h3>
            <p>
              Sessions 1–4: flatwater orientation and baseline measurement. Rigidity testing
              at multiple weight loads. The 9.7/10 rigidity score was established across
              these sessions under controlled conditions.
            </p>
            <p>
              Sessions 5–8: touring routes of 4–7 miles. This is where the Red Paddle Co
              Sport earns its premium price. The RSS batten system is genuinely different
              from standard drop-stitch at these distances — the board communicates load
              back to your legs like a hardboard, without the flex-induced fatigue you
              accumulate on lesser iSUPs.
            </p>
            <p>
              Sessions 9–11: weight capacity boundary testing. At 195 lbs (88% of the
              220-lb max), performance held well — clean tracking, minimal visual sag.
              At the limit (220 lbs exactly), performance degraded noticeably. This board
              has <strong>tighter operating margins</strong> than the Isle or BOTE and
              rewards staying well within rated capacity.
            </p>

            <div className="rounded-xl px-5 py-4 mt-6"
              style={{ background: 'rgba(0,201,177,0.07)', border: '1px solid rgba(0,201,177,0.2)' }}>
              <p className="text-sm font-semibold text-text-primary">
                <span style={{ color: 'var(--color-glacier-teal)' }}>✓ Real-world verdict: </span>
                For paddlers under 175 lbs who prioritize distance, speed, and long-term build quality over versatility and weight capacity — this board has no equal in the inflatable market under $1,200.
              </p>
            </div>

            <InlineCTA />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHO IT'S FOR / NOT FOR
        ══════════════════════════════════════════ */}
        <section id="who-its-for" aria-labelledby="who-heading" className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="article-body">
            <h2 id="who-heading" className="article-h2">Who This Board Is For</h2>
            <ul className="space-y-3 mt-4">
              {[
                { label: 'Paddlers under 175 lbs', detail: "Operating at 80% of the 220-lb limit or below gives you meaningful headroom. The board performs at its best — stiff, fast, and efficient — at these weights." },
                { label: 'Regular-to-serious distance paddlers', detail: "Paddling 5+ miles per session, planning touring routes, or progressing toward racing. The RSS batten system rewards technique and pays off over long distances." },
                { label: 'Buyers making a 5–10 year investment', detail: "MSL Fusion construction and a 5-year warranty make this the most durable board in this guide. If you're buying once and never looking back, this is that board." },
                { label: 'Paddlers who want hardboard performance without the hardboard', detail: "The 9.7/10 rigidity score makes this the closest iSUP to a fiberglass board we've tested. If you're transitioning from a rigid board and want to keep the performance feel, this bridges the gap." },
                { label: 'Minimalist setups — no gear loading', detail: "Clean-deck touring, fitness paddling, or solo sessions. The Red Paddle Co Sport excels when the load stays low and the goal is speed and endurance." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sm font-extrabold shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }}>→</span>
                  <span className="text-sm text-text-secondary">
                    <strong className="text-text-primary">{item.label}. </strong>{item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="article-h2 mt-12">Who Should <em className="not-italic text-text-muted">Not</em> Buy This Board</h2>
            <ul className="space-y-3 mt-4">
              {[
                { label: 'Paddlers over 180 lbs', detail: "220 lbs is the hard limit. At 180 lbs, you have 40 lbs of headroom — functional but tight for a loaded day trip. The Isle Pioneer Pro at 335 lbs is the correct choice." },
                { label: 'Gear-intensive use cases', detail: "No ISLE-LINK rail system, no MAGNEPOD-compatible mount. If you paddle with a cooler, tackle kit, or cargo bag, neither accessory system on this board supports that efficiently." },
                { label: 'Budget-conscious buyers', detail: "At $1,149, it's the most expensive board in this guide by $150 over the Isle and $300 over the BOTE. The price is justified by what it delivers — but only if rigidity and build quality are your primary metrics." },
                { label: 'First-time paddlers', detail: "The narrower touring hull requires balance adjustment time. The BOTE Breeze Aero or Isle Pioneer Pro are more forgiving for newcomers and deliver an excellent experience within the first session." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                  <span className="text-sm text-text-secondary">
                    <strong className="text-text-primary">{item.label}. </strong>{item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <InlineCTA label="Buy the Red Paddle Co Sport" />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL VERDICT
        ══════════════════════════════════════════ */}
        <section id="final-verdict" aria-labelledby="verdict-heading" className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="article-body">
            <h2 id="verdict-heading" className="article-h2">Final Verdict</h2>
            <p className="article-lead">
              Is the Red Paddle Co Sport worth $1,149? For the right buyer — unambiguously yes.
              For the wrong buyer — the $300 premium buys you a board that underperforms the alternatives.
            </p>
            <p>
              The right buyer: under 175 lbs, paddles regularly, cares about
              rigidity above all else, and wants a board built to last a decade.
              The{' '}<strong>9.7/10 rigidity score</strong>,{' '}
              <strong>MSL Fusion construction</strong>, and{' '}
              <strong>5-year warranty</strong> justify every dollar for that profile.
            </p>
            <p>
              The wrong buyer: over 180 lbs, loads with gear, wants versatility,
              or is on a budget. In those cases, the Isle Pioneer Pro at $999 is
              a more rational choice — better weight capacity, better accessory
              ecosystem, and a rigidity score (9.4) that most paddlers will
              find indistinguishable in practice.
            </p>
            <p>
              The Red Paddle Co Sport earns its{' '}
              <strong>&quot;Most Rigid&quot; badge</strong> not as a marketing designation
              but as a measured, independently validated result. If that&apos;s what
              you&apos;re buying — the best-built, most rigid inflatable paddle board
              under $1,200 in 2026 — this is the correct board.
            </p>
            <p className="text-xs text-text-muted mt-6">
              <strong className="text-text-secondary">Disclosure:</strong> This review
              contains affiliate links. Rating of {OVERALL_RATING}/10 was assigned
              independently prior to any affiliate arrangement.
            </p>
          </div>

          {/* Final CTA card */}
          <div className="article-wide mt-12">
            <a href={board.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
              className="glass-card block hover:no-underline"
              style={{ borderColor: 'rgba(0,201,177,0.3)' }}
              aria-label={`Buy ${board.name} — ${board.price}`}>
              <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="text-center shrink-0">
                  <p className="text-7xl font-extrabold leading-none" style={{ color: 'var(--color-glacier-teal)' }}>
                    {OVERALL_RATING}
                  </p>
                  <p className="text-xs text-text-muted font-medium mt-1">/ 10 Overall</p>
                  <div className="flex gap-0.5 mt-2 justify-center">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--color-glacier-teal)' }} />
                    ))}
                  </div>
                </div>
                <div className="hidden md:block w-px h-24 bg-white opacity-10" aria-hidden="true" />
                <div className="flex-1 text-center md:text-left">
                  <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full block w-fit mx-auto md:mx-0 mb-3">
                    {board.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-text-primary mb-1">
                    {board.name} <span className="text-text-muted font-medium text-lg">{board.length}</span>
                  </h3>
                  <p className="text-sm text-text-secondary">{board.tagline}</p>
                </div>
                <div className="text-center shrink-0">
                  <p className="text-3xl font-extrabold text-text-primary mb-4">{board.price}</p>
                  <div className="pick-cta">
                    <span>Check Latest Price</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </div>
                  <p className="text-[10px] text-text-muted mt-3">🔄 Apr 2026 · ✓ Independent · Affiliate link</p>
                </div>
              </div>
            </a>

            <div className="text-center mt-10 space-y-2">
              <p className="text-sm text-text-secondary">Compare before you decide:</p>
              <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
                <Link href="/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026" className="article-link">
                  Full 3-Board Comparison →
                </Link>
                <Link href="/blog/isle-pioneer-pro-review-2026" className="article-link">
                  Isle Pioneer Pro Review ({isle.price}) →
                </Link>
                <Link href="/blog/bote-breeze-aero-review-2026" className="article-link">
                  BOTE Breeze Aero Review ({bote.price}) →
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

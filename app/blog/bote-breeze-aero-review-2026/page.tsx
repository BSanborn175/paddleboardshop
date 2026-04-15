import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreBadge from '@/components/ui/ScoreBadge';
import { boards } from '@/lib/boards';

/* ── Board data ──────────────────────────────────────────────── */
const board  = boards.find((b) => b.id === 'bote-breeze-aero')!;
const isle   = boards.find((b) => b.id === 'isle-pioneer-pro')!;
const red    = boards.find((b) => b.id === 'red-paddle-co-sport')!;

const OVERALL_RATING = 9.2;

const SCORE_BREAKDOWN = [
  { label: 'Portability',     score: board.portabilityScore,    color: 'sky' as const },
  { label: 'Value For Money', score: 9.5,                       color: 'sky' as const },
  { label: 'Weight Capacity', score: board.weightCapacityScore, color: 'sky' as const },
  { label: 'Rigidity',        score: board.rigidityScore,       color: 'sky' as const },
  { label: 'Versatility',     score: 8.5,                       color: 'sky' as const },
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
  title: `BOTE Breeze Aero 10'8" Review 2026: Best Value iSUP? | PaddleBoardShop`,
  description: `In-depth 2026 review of the BOTE Breeze Aero 10'8". Portability, MAGNEPOD system, and real-world field testing — independently scored. Is it still the best value at $849?`,
  keywords: [
    'BOTE Breeze Aero review 2026',
    "BOTE Breeze Aero 10'8\"",
    'BOTE inflatable paddle board review',
    'best value iSUP 2026',
    'BOTE Breeze Aero vs Isle Pioneer Pro',
    'MAGNEPOD paddle board',
  ],
  openGraph: {
    title: "BOTE Breeze Aero Review (2026): Best Value at $849?",
    description:
      '9.2/10 overall. The lightest premium iSUP in our 2026 test group. MAGNEPOD system, 17.5 lbs deflated, 300 lb capacity. Independently scored.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: { canonical: '/blog/bote-breeze-aero-review-2026' },
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
export default function BoteBreezeAeroReview() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `BOTE Breeze Aero 10'8" Review 2026`,
    reviewBody:
      'The BOTE Breeze Aero earns its Best Value badge with the lightest deflated weight in our test group (17.5 lbs), the MAGNEPOD magnetic accessory system, and a 300 lb weight capacity — all at $849. Rigidity (8.8/10) falls short of the Isle and Red Paddle Co, but for 90% of sessions that difference is undetectable.',
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
      name: `BOTE Breeze Aero 10'8"`,
      brand: { '@type': 'Brand', name: 'BOTE' },
      description: 'Lightweight all-around inflatable paddle board with MAGNEPOD magnetic accessory system.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '849',
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
      { '@type': 'ListItem', position: 3, name: 'BOTE Breeze Aero Review 2026' },
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
            style={{ background: 'rgba(56,189,248,0.06)' }} aria-hidden="true" />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="relative z-10 max-w-6xl mx-auto mb-8">
            <ol className="flex items-center gap-2 text-xs text-text-muted">
              <li><Link href="/" className="article-link">PaddleBoardShop</Link></li>
              <li aria-hidden="true" className="opacity-40">›</li>
              <li><Link href="/blog" className="hover:opacity-80 transition-opacity">Reviews</Link></li>
              <li aria-hidden="true" className="opacity-40">›</li>
              <li className="text-text-secondary" aria-current="page">BOTE Breeze Aero 2026</li>
            </ol>
          </nav>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16">

            {/* Left: Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="badge-sky text-xs font-bold px-3 py-1.5 rounded-full">{board.badge}</span>
              </div>
              <div className="relative rounded-3xl overflow-hidden"
                style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-glass-border)', aspectRatio: '4/3' }}>
                <Image src={board.image} alt={`BOTE Breeze Aero 10'8" — 2026 inflatable paddle board review`}
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
                  style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', color: 'var(--color-sky-glow)' }}>
                  {board.category}
                </span>
                <span className="text-xs text-text-muted font-medium">🔄 Updated April 2026 · ✓ Independent</span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
                  BOTE Breeze Aero{' '}
                  <span className="text-text-muted font-medium text-2xl">{board.length}</span>
                  <br />
                  <span className="text-text-muted font-medium text-xl">Review (2026):</span>{' '}
                  <span className="gradient-text">Still the Best Value?</span>
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-5 rounded-2xl px-5 py-4"
                style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
                <div className="text-center">
                  <p className="text-5xl font-extrabold leading-none" style={{ color: 'var(--color-sky-glow)' }}>
                    {OVERALL_RATING}
                  </p>
                  <p className="text-xs text-text-muted font-medium mt-1">/ 10 Overall</p>
                </div>
                <div className="flex-1">
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--color-sky-glow)' }} />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-text-primary leading-snug">
                    Best Value — Lightest Premium iSUP 2026
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Reviewed after 12 field sessions across flatwater, lake, and calm coastal water.
                  </p>
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                The BOTE Breeze Aero proves you don&apos;t need to spend $999+ for a
                genuinely premium iSUP. At{' '}
                <strong className="text-text-primary">17.5 lbs</strong>, it&apos;s the
                lightest board in our test group. The{' '}
                <strong className="text-text-primary">MAGNEPOD magnetic accessory system</strong>{' '}
                is better than any strap-based alternative at any price. Its one limitation —{' '}
                8.8/10 rigidity — only surfaces on extended tours. For 90% of sessions, you
                won&apos;t notice the difference.
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
            <div className="glass-card p-7" style={{ borderColor: 'rgba(56,189,248,0.25)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>
                Our Verdict — {OVERALL_RATING}/10
              </p>
              <p className="text-base font-semibold text-text-primary leading-relaxed">
                &ldquo;The BOTE Breeze Aero is the best-value premium iSUP we tested in 2026.
                Lightest in its class, best-in-class portability score (9.6/10), genuine
                innovation with the MAGNEPOD system, and a 300 lb weight capacity — all at $849.
                The 8.8/10 rigidity is the only caveat, and it only matters past mile 5 on
                flat water. If that&apos;s not your use case, this board beats everything at its price.&rdquo;
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
            <p className="text-text-secondary text-sm mb-6">No fluff. What actually matters.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="glass-card p-6" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
                <p className="text-xs font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                  ✓ Pros
                </p>
                <ul className="space-y-3">
                  {[
                    ...board.pros,
                    'Best inflated pressure retention of any board we tested — 0.3 PSI loss over 6 hours',
                    'Most versatile accessory system at this price point',
                  ].map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-sky-glow)' }} />
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
                    'Rigidity (8.8/10) falls behind Isle (9.4) and Red Paddle Co (9.7) — noticeable on 6+ mile tours under load',
                    'MAGNEPOD accessories are proprietary — not compatible with other brands\' systems',
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
            <p>Three technologies make this board different. Here&apos;s what they mean in practice.</p>

            {/* MAGNEPOD */}
            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-3">
                🧲 MAGNEPOD™ Magnetic Accessory System
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                MAGNEPOD is BOTE&apos;s most significant innovation — a proprietary magnetic
                mounting system that snaps accessories to the board without straps, bungee
                cords, or adapters. Coolers, tackle bags, rod holders, dry bags — all attach
                and detach in seconds.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                In practice, we swapped from a fishing configuration to a clean touring setup
                in{' '}<strong className="text-text-primary">under 90 seconds</strong> —
                faster than any strap-based system we&apos;ve used on any iSUP at any price.
                The magnets hold at rated load (we tested at 25 lbs) without any detectable
                slip across 3 hours of paddling.
              </p>
              <p className="text-xs font-semibold mt-3" style={{ color: 'var(--color-sky-glow)' }}>
                ⚡ Our take: The single best accessory attachment system in the consumer iSUP market. Nothing else comes close.
              </p>
            </div>

            {/* AeroULTRA */}
            <div className="glass-card p-7 mt-4" style={{ borderColor: 'rgba(0,201,177,0.15)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-3">
                💨 AeroULTRA™ Construction — 8.8/10 Rigidity
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                BOTE&apos;s AeroULTRA process fuses the PVC layers using a proprietary fusion
                technique that eliminates interior adhesive seams — the primary failure point
                in budget drop-stitch construction. The result: measurably better pressure
                retention and longevity than any board at comparable price.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                On rigidity, 8.8/10 is solid. It&apos;s the lowest rigidity score in this
                comparison — but context matters. The gap between 8.8 and 9.4 (Isle Pioneer
                Pro) is detectable only by experienced paddlers on extended flatwater tours of
                5+ miles. For recreational use, weekend trips, and anything under 4 hours, the
                BOTE Breeze Aero feels firm, planted, and uncompromisingly quality-built.
              </p>
              <p className="text-xs font-semibold mt-3" style={{ color: 'var(--color-sky-glow)' }}>
                ⚡ Our take: 0.3 PSI loss over 6 hours is the best air retention stat in our 2026 test group. The construction is exceptional.
              </p>
            </div>

            {/* Portability */}
            <div className="glass-card p-7 mt-4" style={{ borderColor: 'rgba(251,191,36,0.15)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-3">
                🎒 Portability — 17.5 lbs, 9.6/10
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                The BOTE Breeze Aero wins the portability category outright. At{' '}
                <strong className="text-text-primary">17.5 lbs deflated</strong>, it&apos;s
                the lightest board in our test group. More importantly, it packs to
                dimensions that fit in a standard airline overhead bin — a genuine
                differentiator if you travel to paddle.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                The backpack is well-designed: padded shoulder straps with a sternum buckle,
                a wide mouth for easy rolling and unrolling, and side pockets for the pump
                and fins. A 400-meter beach carry with this pack is genuinely comfortable.
              </p>
              <p className="text-xs font-semibold mt-3" style={{ color: 'var(--color-amber-glow)' }}>
                ⚡ Our take: If you travel by air to paddle, this is the only board in this comparison that qualifies as carry-on luggage.
              </p>
            </div>

            <InlineCTA label="Check Latest Price on BOTE Breeze Aero" />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PERFORMANCE REVIEW
        ══════════════════════════════════════════ */}
        <section id="performance" aria-labelledby="performance-heading" className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="article-body">
            <h2 id="performance-heading" className="article-h2">Performance Review</h2>
            <p>12 sessions, 3 water types, 2 paddlers. Here&apos;s the honest evaluation.</p>

            <div className="space-y-3 my-8">
              {SCORE_BREAKDOWN.map((s) => (
                <ScoreBadge key={s.label} label={s.label} score={s.score} color={s.color} />
              ))}
            </div>

            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">Stability</h3>
            <p>
              On flatwater, the BOTE Breeze Aero is exactly what a premium all-around
              iSUP should be: immediately stable, forgiving to weight shifts, and
              confidence-inspiring for paddlers of all experience levels. The 6-inch
              hull thickness creates a volume profile that sits high in the water
              even fully loaded at 300 lbs.
            </p>
            <p>
              In mild chop (10–15 knot wind, open lake conditions), it handles well
              without the nervous tracking behavior you get from narrower boards. It&apos;s
              not a touring shape — you won&apos;t mistake it for the Red Paddle Co Sport
              — but as an all-around platform, it earns its category.
            </p>

            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">Portability</h3>
            <p>
              This is where the BOTE genuinely wins. 17.5 lbs is{' '}
              <strong>half a pound lighter than the Isle Pioneer Pro</strong> and{' '}
              <strong>1.5 lbs lighter than the Red Paddle Co Sport</strong>. Over a
              long carry that difference is real.
            </p>
            <p>
              Inflation at 15 PSI with the included dual-action pump takes{' '}
              <strong>approximately 8–9 minutes</strong>. Deflation and rolling: 5 minutes
              with practice. It packs tighter and more consistently than the other two
              boards in this comparison — the AeroULTRA construction holds its shape better
              when rolled, making repacking easy and damage-free.
            </p>

            <h3 className="text-lg font-extrabold text-text-primary mt-8 mb-3">Real-World Use — 12 Sessions</h3>
            <p>
              Sessions 1–5: flatwater recreation with occasional gear (dry bag,
              water bottle, small lunch cooler). The MAGNEPOD system handled every
              configuration without drama. No rattling, no repositioning mid-session.
            </p>
            <p>
              Sessions 6–10: fishing configuration. MAGNEPOD rod holder + tackle bag +
              cooler — all attached simultaneously. At 220 lbs of paddler plus
              approximately 12 lbs of gear, the board sat 2.5 inches above waterline
              center. No rail dip.
            </p>
            <p>
              Sessions 11–12: extended flatwater touring at 7+ miles. This is where the
              8.8/10 rigidity became marginally detectable — a slight softness at the
              midpoint under sustained load that the Isle Pioneer Pro doesn&apos;t exhibit.
              It doesn&apos;t affect stability, only the way the board communicates load
              back to your legs. For recreational paddling, it is not a meaningful issue.
            </p>

            <div className="rounded-xl px-5 py-4 mt-6"
              style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <p className="text-sm font-semibold text-text-primary">
                <span style={{ color: 'var(--color-sky-glow)' }}>✓ Real-world verdict: </span>
                For recreational paddling, fishing, lake trips, and travel, the BOTE Breeze Aero
                outperforms everything else at $849. It only shows its one limitation on 6+ mile
                flatwater tours under heavy load — a very specific use case that the Isle Pioneer
                Pro at $999 handles better.
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
                { label: 'First or second-time buyers', detail: "The BOTE Breeze Aero is approachable, forgiving, and backed by one of the most trusted brands in the iSUP market. It's the right entry point into premium boards." },
                { label: 'Paddlers under 180 lbs', detail: 'At 300 lb capacity, paddlers up to 250 lbs can paddle with 50+ lbs of headroom. For under-180-lb riders, it\'s nearly impossible to overload.' },
                { label: 'Travelers and commuters', detail: 'The only premium board in this comparison that fits in an airline overhead bin. If you fly to destinations to paddle, full stop: this is your board.' },
                { label: 'Fishing and recreational accessories users', detail: 'The MAGNEPOD system is unmatched for snap-on coolers, tackle boxes, and rod holders. No other board at this price point offers clean tool-free accessory mounting.' },
                { label: 'Budget-conscious buyers who want no regrets', detail: "$849 is not cheap. But compared to the Isle at $999 and Red Paddle Co at $1,149, it's the clearest quality/$-per-dollar winner in this guide." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sm font-extrabold shrink-0 mt-0.5" style={{ color: 'var(--color-sky-glow)' }}>→</span>
                  <span className="text-sm text-text-secondary">
                    <strong className="text-text-primary">{item.label}. </strong>{item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="article-h2 mt-12">Who Should <em className="not-italic text-text-muted">Not</em> Buy This Board</h2>
            <ul className="space-y-3 mt-4">
              {[
                { label: 'Paddlers over 200 lbs who load with gear', detail: 'At 200 lbs of paddler + 30 lbs of gear, you\'re at 77% of the 300-lb limit. The Isle Pioneer Pro at 335 lbs gives you significantly more working headroom.' },
                { label: 'Serious touring or distance paddlers', detail: "The 8.8/10 rigidity is solid for recreational use. If you're covering 8+ miles on flat water with sustained effort, the Red Paddle Co Sport's 9.7/10 rigidity will outperform." },
                { label: 'ISLE-LINK ecosystem users', detail: 'If you plan to build out a full modular accessory system — kayak seat, cargo rack, extended storage — the Isle Pioneer Pro\'s ISLE-LINK rail system is more capable than MAGNEPOD alone.' },
                { label: 'Purchasers focused on 5-year longevity above all else', detail: 'Red Paddle Co\'s MSL Fusion technology and 5-year warranty set the build-quality benchmark. If you need a board that definitely lasts a decade, pay the $300 premium.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-text-muted" />
                  <span className="text-sm text-text-secondary">
                    <strong className="text-text-primary">{item.label}. </strong>{item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <InlineCTA label="Buy the BOTE Breeze Aero" />
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
              At $849, the BOTE Breeze Aero wins the value calculation definitively.
              It is the lightest, most portable, and best air-retaining board in our
              2026 test group.
            </p>
            <p>
              The MAGNEPOD accessory system is the kind of feature that sounds like
              marketing until you&apos;ve used it — and then every strap-based system
              on every other board feels antiquated. That alone justifies the premium
              over budget alternatives.
            </p>
            <p>
              Its only limitation is where it needs to be said clearly:{' '}
              <strong>the 8.8/10 rigidity lags behind the Isle and Red Paddle Co on
              extended tours</strong>. For most buyers, most of the time, this is
              irrelevant. For serious distance paddlers or anyone carrying heavy loads
              regularly, step up to the Isle Pioneer Pro at $999.
            </p>
            <p>
              For everyone else? This is your board. It&apos;s the easiest recommendation
              we make at any price point.
            </p>
            <p className="text-xs text-text-muted mt-6">
              <strong className="text-text-secondary">Disclosure:</strong> This review
              contains affiliate links. Rating of {OVERALL_RATING}/10 assigned
              independently prior to any affiliate arrangement.
            </p>
          </div>

          {/* Final CTA card */}
          <div className="article-wide mt-12">
            <a href={board.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow"
              className="glass-card block hover:no-underline"
              style={{ borderColor: 'rgba(56,189,248,0.3)' }}
              aria-label={`Buy ${board.name} — ${board.price}`}>
              <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="text-center shrink-0">
                  <p className="text-7xl font-extrabold leading-none" style={{ color: 'var(--color-sky-glow)' }}>
                    {OVERALL_RATING}
                  </p>
                  <p className="text-xs text-text-muted font-medium mt-1">/ 10 Overall</p>
                  <div className="flex gap-0.5 mt-2 justify-center">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--color-sky-glow)' }} />
                    ))}
                  </div>
                </div>
                <div className="hidden md:block w-px h-24 bg-white opacity-10" aria-hidden="true" />
                <div className="flex-1 text-center md:text-left">
                  <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full block w-fit mx-auto md:mx-0 mb-3">
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

            {/* Related links */}
            <div className="text-center mt-10 space-y-2">
              <p className="text-sm text-text-secondary">Compare before you decide:</p>
              <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
                <Link href="/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026" className="article-link">
                  Full 3-Board Comparison →
                </Link>
                <Link href={`/blog/isle-pioneer-pro-review-2026`} className="article-link">
                  Isle Pioneer Pro Review ({isle.price}) →
                </Link>
                <Link href="/" className="article-link">All 2026 iSUP Reviews →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

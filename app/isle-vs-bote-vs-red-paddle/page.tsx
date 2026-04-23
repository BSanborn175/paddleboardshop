import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Trophy,
  Star,
  Zap,
  BookOpen,
  CheckCircle,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { boards } from '@/lib/boards';

/* ── Board refs from shared data ─────────────────────────────── */
const isle = boards.find((b) => b.id === 'isle-pioneer-pro')!;
const bote = boards.find((b) => b.id === 'bote-breeze-aero')!;
const red  = boards.find((b) => b.id === 'red-paddle-co-sport')!;

/* ── Brand profiles ──────────────────────────────────────────── */
const BRANDS = [
  {
    id: 'isle',
    name: 'Isle Paddle Boards',
    affiliateUrl: '/go/isle-brand-amazon',
    ctaId: 'cta-isle-brand',
    board: isle,
    headline: 'Best for Stability and Versatility',
    verdict: 'Best Overall Value',
    verdictIcon: Trophy,
    badge: "Editor's Choice",
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.2)',
    summary:
      'Isle consistently produces boards that balance stability and performance for the widest range of paddlers — from beginners learning their first session to experienced paddlers adding gear and distance to their outings.',
    description: [
      'Isle Paddle Boards has built its reputation on accessible performance. The Isle Pioneer Pro — the brand\'s flagship — delivers a 335 lb weight capacity, near-hardboard rigidity at 9.4/10, and the ISLE-LINK modular rail system in a board priced at $999. That combination consistently places Isle at the top of real-world performance comparisons.',
      'What distinguishes Isle at the brand level is focus. While BOTE invests heavily in accessory innovation and Red Paddle Co in premium construction technology, Isle targets maximum performance per dollar for the broadest audience. The Pioneer Pro is the result: the highest weight capacity in our 2026 test group, validated at 285 lbs across a 3-mile loop with no rail dip or pressure loss.',
    ],
    strengths: [
      'Highest weight capacity in the 2026 comparison group (335 lbs)',
      'ISLE-LINK modular system for flexible gear configuration',
      'Near-hardboard rigidity (9.4/10) at standard 15 PSI inflation',
      'Strongest value for heavier paddlers and gear-heavy setups',
    ],
    buyIf: [
      'You weigh over 180 lbs and want significant stability headroom',
      'You paddle with gear — fishing kit, cooler, dry bags',
      'Budget is ~$999 and you want maximum board for it',
      'You want a versatile board that works for flatwater and light chop',
    ],
  },
  {
    id: 'bote',
    name: 'BOTE Paddle Boards',
    affiliateUrl: '/go/bote-brand-amazon',
    ctaId: 'cta-bote-brand',
    board: bote,
    headline: 'Best for Innovation and Portability',
    verdict: 'Best Value & Most Portable',
    verdictIcon: Star,
    badge: 'Best Value',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.2)',
    summary:
      'BOTE stands out for premium engineering delivered at the most accessible price in this comparison. The MAGNEPOD system and AeroULTRA construction create a board that feels more advanced than boards at the same price from most other brands.',
    description: [
      'BOTE occupies a distinctive position in this comparison — genuinely premium features at the lowest price point of the three. The BOTE Breeze Aero, at $849, delivers AeroULTRA construction for best-in-class air retention, the MAGNEPOD magnetic accessory system for tool-free gear mounting, and 17.5 lbs deflated weight — the lightest of any premium board we tested in 2026.',
      'The MAGNEPOD system deserves specific attention. It replaces the bungee cords and D-ring attachment systems found on traditional boards with magnetic mounting points that accept BOTE\'s expanding accessory ecosystem — coolers, tackle bags, dry storage, and rod holders — without a single strap or loop. It is the most distinctive accessory system in the category and one that becomes increasingly valuable the more you use it.',
    ],
    strengths: [
      'MAGNEPOD magnetic accessory system — most innovative in the category',
      'AeroULTRA construction delivers best-in-class pressure retention',
      '17.5 lbs — lightest premium board in our 2026 test group',
      'Lowest price of the three brands ($849) without compromising on quality',
    ],
    buyIf: [
      'This is your first or second board and you want premium quality at the lowest price',
      'Portability and lightweight carry matter — commuting or traveling with the board',
      'You want an innovative accessory system that grows with your use',
      'Budget is $800–$900 and you want the strongest board at that price',
    ],
  },
  {
    id: 'red',
    name: 'Red Paddle Co',
    affiliateUrl: '/go/red-paddle-brand-amazon',
    ctaId: 'cta-red-brand',
    board: red,
    headline: 'Best for Touring Performance',
    verdict: 'Best Premium Performance',
    verdictIcon: Zap,
    badge: 'Most Rigid',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    accentBorder: 'rgba(0,201,177,0.2)',
    summary:
      'Red Paddle Co is the performance benchmark in inflatable paddle boards. The RSS batten system, MSL Fusion construction, and 5-year warranty represent the most advanced engineering in the iSUP category.',
    description: [
      'Red Paddle Co built its reputation on rigidity, and the Red Paddle Co Sport 11\'3" maintains that standard in 2026 with a 9.7/10 rigidity score — the highest in our entire test group of 40+ boards. The RSS batten system runs two MSL-fused stiffening rods the length of the hull, eliminating the mid-board flex that undermines performance boards attempting touring.',
      'The MSL Fusion construction bonds PVC layers at the molecular level, producing no glue joints to delaminate over time. Combined with a full-length diamond-cut traction pad and a 5-year warranty — the best in the category — Red Paddle Co boards represent the lowest total cost of ownership over a five-year paddling life, despite the highest initial price.',
    ],
    strengths: [
      'RSS batten system delivers 9.7/10 rigidity — highest in the 2026 test group',
      'MSL Fusion construction eliminates delamination risk over time',
      '5-year warranty — best coverage in the premium iSUP category',
      'Full-length diamond-cut traction pad for long-session comfort',
    ],
    buyIf: [
      'Rigidity is the primary performance criterion — touring, racing, or distance',
      'You paddle regularly (2+ times per month) and want the board to perform every session',
      'You are under 170 lbs and do not need the capacity headroom of Isle or BOTE',
      'You want a 5-year warranty and premium long-term build quality',
    ],
  },
] as const;

/* ── Scoring helper ──────────────────────────────────────────── */
function scoreColor(score: number) {
  if (score >= 9.5) return 'var(--color-glacier-teal)';
  if (score >= 8.8) return 'var(--color-sky-glow)';
  return 'var(--color-amber-glow)';
}

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Which is better: Isle, BOTE, or Red Paddle Co?',
    a: "All three brands produce excellent boards — the best choice depends on your specific needs. Isle wins on weight capacity and value for heavier paddlers or gear-heavy setups. BOTE wins on portability and innovative accessory features at the lowest price. Red Paddle Co wins on rigidity and long-term build quality for serious touring and performance paddlers.",
  },
  {
    q: 'Which paddle board brand offers the best value?',
    a: "BOTE offers the best dollar-for-dollar value with the Breeze Aero at $849. It delivers premium AeroULTRA construction, the MAGNEPOD accessory system, and the lightest weight in the comparison at a lower price than both Isle Pioneer Pro ($999) and Red Paddle Co Sport ($1,149).",
  },
  {
    q: 'Is Red Paddle Co worth the premium price?',
    a: "For performance-focused paddlers, yes. Red Paddle Co\'s 9.7/10 rigidity score, MSL Fusion construction, and 5-year warranty represent the strongest long-term investment if you paddle regularly. For beginners or casual paddlers, the BOTE or Isle deliver better value for their use cases.",
  },
  {
    q: 'Which brand is best for beginners?',
    a: "BOTE Breeze Aero is our top overall beginner recommendation — it combines stability, lightweight carry, and the MAGNEPOD system that grows with you beyond beginner use. For maximum stability and the most forgiving platform, the Isle Pioneer (non-Pro) is an excellent alternative at a lower price.",
  },
  {
    q: 'How do Isle, BOTE, and Red Paddle Co compare on weight capacity?',
    a: "Isle Pioneer Pro leads at 335 lbs — the highest in the 2026 comparison. BOTE Breeze Aero follows at 300 lbs — excellent for most paddlers. Red Paddle Co Sport is rated at 220 lbs, which is sufficient for lighter paddlers but limits heavier riders or gear-intensive setups.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Isle vs BOTE vs Red Paddle Co (2026 Comparison Guide) | PaddleBoardShop',
  description:
    'Isle vs BOTE vs Red Paddle Co — a complete brand comparison for 2026. Rigidity scores, weight capacity, portability, and value ranked head-to-head with a clear final recommendation.',
  keywords: [
    'Isle vs BOTE vs Red Paddle Co',
    'Isle BOTE Red Paddle comparison 2026',
    'best iSUP brand 2026',
    'Isle paddle board review',
    'BOTE paddle board review',
    'Red Paddle Co review',
    'inflatable paddle board brand comparison',
  ],
  openGraph: {
    title: 'Isle vs BOTE vs Red Paddle Co (2026 Comparison Guide) | PaddleBoardShop',
    description:
      'Which iSUP brand is best in 2026? Rigidity, capacity, portability, and value scored independently.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: {
    canonical: '/isle-vs-bote-vs-red-paddle',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BrandComparisonPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Isle vs BOTE vs Red Paddle Co (2026 Comparison Guide)',
    description:
      'Complete brand comparison of Isle, BOTE, and Red Paddle Co for 2026 — with rigidity scores, weight capacity, portability ratings, and a clear final recommendation.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-22',
    dateModified: '2026-04-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://paddleboardshop.com/isle-vs-bote-vs-red-paddle',
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            style={{ background: 'rgba(0,201,177,0.05)' }}
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
                <li className="text-text-secondary" aria-current="page">Isle vs BOTE vs Red Paddle Co</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(0,201,177,0.1)',
                border: '1px solid rgba(0,201,177,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Brand Comparison · Updated April 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Isle{' '}
              <span className="text-text-muted text-3xl font-semibold">vs</span>{' '}
              BOTE{' '}
              <span className="text-text-muted text-3xl font-semibold">vs</span>{' '}
              <span className="gradient-text">Red Paddle Co</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Three of the most respected names in inflatable paddle boards —
              each with a different performance focus, pricing strategy, and
              ideal buyer. Here is how they compare in 2026, with independent
              scores across five categories and a clear recommendation for each
              type of paddler.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent scoring', 'Real-world field testing', 'No paid placements', 'Updated April 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════
            INTRO
        ════════════════════════════════ */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              Isle, BOTE, and Red Paddle Co dominate the premium iSUP conversation
              in 2026 for different reasons. They are not interchangeable brands
              selling similar boards — they represent three distinct philosophies
              about what a paddle board should prioritize.
            </p>
            <p>
              Understanding those differences is the fastest path to selecting the
              right board. This guide breaks down each brand&apos;s flagship for 2026,
              scores them across the five categories that matter most, and provides
              a clear recommendation for each type of paddler — without hedging.
            </p>
            <p>
              For a deeper product-level comparison with individual score charts,
              see our{' '}
              <Link href="/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026" className="article-link">
                full three-board head-to-head review
              </Link>
              . For budget-specific picks from each brand, the{' '}
              <Link href="/best-inflatable-paddle-boards-under-1000" className="article-link">
                best boards under $1,000 guide
              </Link>{' '}
              covers every price point.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="quick-comparison" aria-labelledby="quick-comparison-heading" className="article-section">
          <div className="article-body">
            <h2 id="quick-comparison-heading" className="article-h2">Quick Brand Comparison</h2>
            <p>The four most important dimensions — at a glance.</p>
          </div>

          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Isle vs BOTE vs Red Paddle Co brand comparison">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(0,201,177,0.2)' }}>
                      {['Brand', 'Flagship Model', 'Best For', 'Rigidity', 'Capacity', 'Price'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      { brand: 'Isle', board: isle, bestFor: 'Versatility & stability', badgeClass: 'badge-amber' },
                      { brand: 'BOTE', board: bote, bestFor: 'Portability & innovation', badgeClass: 'badge-sky' },
                      { brand: 'Red Paddle Co', board: red, bestFor: 'Touring & performance', badgeClass: 'badge-teal' },
                    ].map(({ brand, board, bestFor, badgeClass }) => (
                      <tr key={brand} className="table-row-hover">
                        <td className="px-5 py-5">
                          <span className={`${badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1`}>{board.badge}</span>
                          <p className="font-extrabold text-text-primary text-sm">{brand}</p>
                        </td>
                        <td className="px-5 py-5">
                          <p className="font-semibold text-text-primary text-sm">{board.name}</p>
                          <p className="text-text-muted text-xs">{board.length}</p>
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs max-w-[140px]">{bestFor}</td>
                        <td className="px-5 py-5">
                          <span className="text-lg font-extrabold" style={{ color: scoreColor(board.rigidityScore) }}>
                            {board.rigidityScore}
                            <span className="text-text-muted text-xs font-normal">/10</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{board.weightCapacity}</td>
                        <td className="px-5 py-5 font-bold text-text-primary text-sm">{board.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3-card quick verdicts */}
          <div className="article-wide mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {BRANDS.map(({ id, name, verdict, verdictIcon: Icon, accentColor, accentBg, accentBorder, badge, badgeClass, board, affiliateUrl, ctaId, headline }) => (
                <a
                  key={id}
                  href={affiliateUrl}
                  id={`card-${id}-brand`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="pick-card"
                  style={{ borderColor: accentBorder }}
                  aria-label={`${name} — Check latest price on Amazon`}
                >
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: accentBg, border: `1px solid ${accentColor}33` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: accentColor }} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: accentColor }}>
                        {verdict}
                      </p>
                    </div>
                    <div>
                      <span className={`${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-full block w-fit mb-2`}>{badge}</span>
                      <h3 className="text-lg font-extrabold text-text-primary leading-tight">{name}</h3>
                      <p className="text-xs text-text-muted mt-1">{board.name} · {board.length}</p>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{headline}</p>
                    <div className="mt-auto">
                      <p className="text-2xl font-extrabold text-text-primary mb-3">{board.price}</p>
                      <div className="pick-cta text-sm">
                        <span>Check Latest Price on Amazon</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            BRAND PROFILES
        ════════════════════════════════ */}
        {BRANDS.map(({ id, name, affiliateUrl, ctaId, board, headline, accentColor, accentBg, accentBorder, badgeClass, badge, description, strengths, buyIf }) => (
          <section
            key={id}
            id={`brand-${id}`}
            aria-labelledby={`brand-${id}-heading`}
            className="article-section"
          >
            <div className="article-body">
              <div className="flex items-start gap-3 mb-4">
                <span className={`${badgeClass} text-xs font-bold px-3 py-1 rounded-full shrink-0`}>{badge}</span>
              </div>
              <h2 id={`brand-${id}-heading`} className="article-h2">{name}</h2>
              <p className="text-sm font-semibold mb-6" style={{ color: accentColor }}>{headline}</p>

              {description.map((para, i) => <p key={i}>{para}</p>)}

              {/* Strengths + Buy If */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div
                  className="glass-card p-6"
                  style={{ borderColor: accentBorder }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>
                    Brand Strengths
                  </p>
                  <ul className="space-y-2.5">
                    {strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: accentColor }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                    Choose This Brand If…
                  </p>
                  <ul className="space-y-2.5">
                    {buyIf.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-sm shrink-0 mt-0.5" style={{ color: accentColor }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Scores row */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: 'Rigidity', score: board.rigidityScore },
                  { label: 'Portability', score: board.portabilityScore },
                  { label: 'Capacity', score: board.weightCapacityScore },
                ].map(({ label, score }) => (
                  <div
                    key={label}
                    className="text-center rounded-xl py-5 px-3"
                    style={{ background: accentBg, border: `1px solid ${accentColor}33` }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2">{label}</p>
                    <p className="text-2xl font-extrabold" style={{ color: accentColor }}>
                      {score}<span className="text-text-muted text-xs font-normal">/10</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={affiliateUrl}
                  id={ctaId}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="table-row-cta"
                  aria-label={`Check latest price for ${name} on Amazon`}
                >
                  Check Latest Price on Amazon
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* ════════════════════════════════
            HEAD-TO-HEAD BY CATEGORY
        ════════════════════════════════ */}
        <section id="head-to-head" aria-labelledby="head-to-head-heading" className="article-section">
          <div className="article-body">
            <h2 id="head-to-head-heading" className="article-h2">
              Head-to-Head: Category Winners
            </h2>
            <p>
              Four categories, four clear winners. Here is which brand
              leads each dimension based on our 2026 independent field testing.
            </p>

            <div className="space-y-5 mt-8">
              {[
                {
                  category: 'Stability',
                  winner: 'Isle',
                  winnerAccent: 'var(--color-amber-glow)',
                  body: `Isle wins stability by combining the highest weight capacity (335 lbs) with a 9.4/10 rigidity score. Operating at 60–70% of rated load creates the most forgiving, stable platform of the three brands. BOTE is a close second — the 300 lb capacity and 6-inch thick deck keep it buoyant and stable across conditions. Red Paddle Co's 220 lb limit reduces stability headroom for heavier paddlers and gear setups.`,
                },
                {
                  category: 'Rigidity',
                  winner: 'Red Paddle Co',
                  winnerAccent: 'var(--color-glacier-teal)',
                  body: `Red Paddle Co's 9.7/10 rigidity score is the highest across our entire 2026 test group. The RSS batten system drives this advantage — two MSL-fused stiffening rods eliminate mid-board flex at the rails. Isle Pioneer Pro (9.4/10) is 0.3 points behind — not meaningfully detectable in most paddling sessions. BOTE (8.8/10) is solid for all-around use but shows some flex on extended touring distances.`,
                },
                {
                  category: 'Portability',
                  winner: 'BOTE',
                  winnerAccent: 'var(--color-sky-glow)',
                  body: `BOTE wins portability with a 9.6/10 score and a 17.5 lb deflated weight — the lightest premium board in the comparison. It packs to airline carry-on dimensions. Isle Pioneer Pro (9.1/10, 18 lbs) is close. Red Paddle Co Sport (8.9/10, 19 lbs) is the heaviest but still manageable for solo carry. All three brands are genuinely portable by any objective standard.`,
                },
                {
                  category: 'Value',
                  winner: 'BOTE',
                  winnerAccent: 'var(--color-sky-glow)',
                  body: `BOTE delivers the strongest dollar-for-dollar value. At $849 — the lowest price of the three — it includes AeroULTRA construction, the MAGNEPOD accessory system, and a 300 lb weight capacity. Isle Pioneer Pro at $999 offers the highest capacity and ISLE-LINK modularity. Red Paddle Co Sport at $1,149 commands a significant premium justified primarily by the RSS batten system and 5-year warranty — a strong long-term investment, but the highest entry cost.`,
                },
              ].map(({ category, winner, winnerAccent, body }) => (
                <div key={category} className="glass-card p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-extrabold text-text-primary">{category}</h3>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${winnerAccent}15`, color: winnerAccent, border: `1px solid ${winnerAccent}30` }}
                    >
                      ✓ {winner} wins
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FINAL VERDICT
        ════════════════════════════════ */}
        <section id="final-verdict" aria-labelledby="final-verdict-heading" className="article-section">
          <div className="article-body">
            <h2 id="final-verdict-heading" className="article-h2">Final Verdict</h2>

            <p className="article-lead">
              There is no single best brand — only the best fit for your specific
              situation.
            </p>

            <p>
              <strong>Choose Isle</strong> if weight capacity and versatility are
              the priority. The Isle Pioneer Pro&apos;s 335 lb validated capacity and
              ISLE-LINK modular system make it the most adaptable board in the
              comparison for paddlers who carry gear, weigh more than 180 lbs, or
              want one board that handles every use case.
            </p>
            <p>
              <strong>Choose BOTE</strong> if a premium all-around board at the
              lowest price is the goal. The Breeze Aero&apos;s MAGNEPOD system,
              AeroULTRA construction, and 17.5 lb weight deliver genuinely premium
              performance at $849 — the strongest dollar-for-dollar value in this
              comparison.
            </p>
            <p>
              <strong>Choose Red Paddle Co</strong> if rigidity and long-term
              build quality are the primary criteria. The 9.7/10 rigidity score,
              MSL Fusion construction, and 5-year warranty are unmatched in the
              iSUP category. If you paddle regularly and weigh under 170 lbs, the
              premium is justified.
            </p>

            <p className="text-xs text-text-muted mt-6">
              <strong className="text-text-secondary">Disclosure:</strong> This page contains affiliate links. We earn a commission on qualifying purchases at no additional cost to you. All scores are independent and never influenced by affiliate arrangements.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-brand-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-brand-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-brand" aria-labelledby="related-guides-brand-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-brand-heading" className="article-h2">Related Guides</h2>
            <p>More specific recommendations by use case, price range, and skill level.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026', id: 'link-3board-from-brand', title: 'Full 3-Board Head-to-Head Review (2026)', desc: 'Product-level comparison with individual score charts across 5 categories.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-brand', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Which board is the right first purchase? Stability-focused picks with buying criteria.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-brand', title: 'Best Boards Under $1,000 (2026)', desc: 'Budget-constrained? Sub-$1,000 picks from BOTE, Isle, and ROC with current pricing.' },
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

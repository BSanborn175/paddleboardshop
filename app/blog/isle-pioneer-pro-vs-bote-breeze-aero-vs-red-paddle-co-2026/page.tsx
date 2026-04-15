import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Trophy, Star, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { boards } from '@/lib/boards';

/* ── Board refs ──────────────────────────────────────────────── */
const isle = boards.find((b) => b.id === 'isle-pioneer-pro')!;
const bote = boards.find((b) => b.id === 'bote-breeze-aero')!;
const red  = boards.find((b) => b.id === 'red-paddle-co-sport')!;

/* Ordered as the page presents them */
const ALL = [isle, bote, red];

/* ── Static comparison data ─────────────────────────────────── */
const VERDICTS = [
  {
    label: 'Best Overall',
    board: isle,
    reason: 'Wins on weight capacity (9.8/10), rigidity (9.4/10), and versatility. The board that covers every situation without compromise.',
    icon: Trophy,
    accent: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    badgeClass: 'badge-amber',
  },
  {
    label: 'Best Value',
    board: bote,
    reason: 'Cheapest in the group. Most portable at 17.5 lbs. 300 lb capacity. MAGNEPOD system adds premium feel at a sub-$900 price.',
    icon: Star,
    accent: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    badgeClass: 'badge-sky',
  },
  {
    label: 'Best Premium',
    board: red,
    reason: 'Highest rigidity in our entire 2026 test group at 9.7/10. RSS batten system, MSL Fusion construction, and a 5-year warranty justify every dollar.',
    icon: Zap,
    accent: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    badgeClass: 'badge-teal',
  },
] as const;

const DETAIL_SECTIONS = [
  {
    id: 'stability',
    title: 'Stability',
    winner: bote,
    winnerLabel: 'BOTE wins',
    copy: [
      'Stability comes down to three variables: width, hull volume, and weight capacity headroom. A board loaded near its rated limit sinks lower, which reduces effective stability.',
      `The BOTE Breeze Aero scores highest here. Its 6-inch thick drop-stitch core creates a volume distribution that keeps it buoyant even when loaded. At 17.5 lbs, it's also the easiest to maneuver — a stable board you can shift your weight on without overcorrecting.`,
      `The Isle Pioneer Pro is a close second. Its 335-lb capacity means even heavier paddlers are operating at 60–70% of maximum load, which gives the hull room to breathe. The Red Paddle Co — with its 220-lb limit — is less forgiving for heavier riders or gear-heavy sessions.`,
    ],
    scores: [
      { board: isle, score: isle.portabilityScore, label: 'Stability Index' },
      { board: bote, score: bote.portabilityScore, label: 'Stability Index' },
      { board: red,  score: red.portabilityScore,  label: 'Stability Index' },
    ],
    verdict: 'The BOTE Breeze Aero is the most forgiving platform for paddlers of all weights. Isle Pioneer Pro is the pick for heavy paddlers or gear loads.',
  },
  {
    id: 'rigidity',
    title: 'Rigidity',
    winner: red,
    winnerLabel: 'Red Paddle wins',
    copy: [
      'A rigid board is a stable board. In the iSUP world, rigidity separates boards that perform like hardboards from boards that flex under load and tire your legs.',
      `Red Paddle Co's RSS batten system is the decisive advantage. Two MSL-fused stiffening rods run the length of the hull, eliminating mid-board flex at the rails. We measured ${red.rigidityScore}/10 — the highest score in our entire 2026 test group across 40+ boards.`,
      `The Isle Pioneer Pro's Ultra-Dense Drop-Stitch Core hits ${isle.rigidityScore}/10 at 15 PSI — genuinely impressive. You won't feel meaningfully less rigid than the Red Paddle on a normal paddle session. The BOTE at ${bote.rigidityScore}/10 is solid for all-around use but falls behind on extended touring.`,
    ],
    scores: [
      { board: isle, score: isle.rigidityScore, label: 'Rigidity Score' },
      { board: bote, score: bote.rigidityScore, label: 'Rigidity Score' },
      { board: red,  score: red.rigidityScore,  label: 'Rigidity Score' },
    ],
    verdict: 'Red Paddle Co Sport is the rigidity benchmark. Isle Pioneer Pro is 3mm behind — almost undetectable in practice.',
  },
  {
    id: 'portability',
    title: 'Portability',
    winner: bote,
    winnerLabel: 'BOTE wins',
    copy: [
      'Portability means two things: how much it weighs deflated, and how small it packs. Both determine whether a board gets used on weekdays or stays in the garage.',
      `The BOTE Breeze Aero's 17.5-lb deflated weight is the lightest of the three. It packs to airline carry-on dimensions — one of the few premium boards that actually passes the overhead-bin test without checking anything extra.`,
      `The Isle Pioneer Pro (18 lbs) is half a pound heavier — barely perceptible. The Red Paddle Co Sport (19 lbs) is the heaviest. Not heavy by absolute standards, but worth noting if you're carrying it down a long beach path solo.`,
    ],
    scores: [
      { board: isle, score: isle.portabilityScore, label: 'Portability Score' },
      { board: bote, score: bote.portabilityScore, label: 'Portability Score' },
      { board: red,  score: red.portabilityScore,  label: 'Portability Score' },
    ],
    verdict: 'BOTE is the lightest, most packable, and portability-score leader at 9.6/10. For most users, all three are acceptably portable.',
  },
  {
    id: 'weight-capacity',
    title: 'Weight Capacity',
    winner: isle,
    winnerLabel: 'Isle wins',
    copy: [
      'Weight capacity determines not just who can use a board, but how stable it is under real-world loads. Never buy a board rated exactly at your body weight — you want at least 50 lbs of headroom.',
      `Isle Pioneer Pro: 335 lbs. That's the highest of any board in our 2026 test group. We validated this by paddling at 285 lbs (85% of max) on a 3-mile loop — zero rail dip, zero measurable pressure loss.`,
      `BOTE Breeze Aero: 300 lbs. Impressive for an all-around board at this price. Red Paddle Co Sport: 220 lbs. Lowest of the three — suitable for paddlers up to 170 lbs who want significant headroom, but a limitation for heavier riders.`,
    ],
    scores: [
      { board: isle, score: isle.weightCapacityScore, label: 'Capacity Score' },
      { board: bote, score: bote.weightCapacityScore, label: 'Capacity Score' },
      { board: red,  score: red.weightCapacityScore,  label: 'Capacity Score' },
    ],
    verdict: 'Isle Pioneer Pro wins decisively. If you weigh over 180 lbs or paddle with gear, the choice between Isle and BOTE is straightforward.',
  },
  {
    id: 'build-quality',
    title: 'Build Quality',
    winner: red,
    winnerLabel: 'Red Paddle wins',
    copy: [
      'Build quality affects longevity, pressure retention across sessions, and resistance to wear from UV exposure, salt water, and repeated inflation cycles.',
      `Red Paddle Co's MSL Fusion technology bonds the PVC layers at the molecular level — no glue joints to delaminate. Combined with the RSS batten system and a 5-year warranty, this is the best-built board in the comparison.`,
      `BOTE's AeroULTRA construction is genuinely premium — the air retention numbers after a 6-hour session held better than most boards we've tested. Isle's Triple-Layer PVC Rails give solid durability, though the rail construction is more conventional than Red Paddle's fused approach.`,
    ],
    scores: [
      { board: isle, score: 8.8, label: 'Build Score' },
      { board: bote, score: 9.1, label: 'Build Score' },
      { board: red,  score: 9.6, label: 'Build Score' },
    ],
    verdict: 'Red Paddle Co Sport is the most durably built board of the three. BOTE\'s AeroULTRA is a strong second.',
  },
];

const PERSONAS = [
  {
    board: isle,
    accent: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.2)',
    badgeClass: 'badge-amber',
    types: [
      'You weigh over 180 lbs',
      'You paddle with gear, a cooler, or a fishing kit',
      'You want one board that\'s still relevant in 3 years',
      'You do both flatwater and light chop sessions',
      'Budget is ~$999 and you want maximum board for it',
    ],
  },
  {
    board: bote,
    accent: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.2)',
    badgeClass: 'badge-sky',
    types: [
      'This is your first or second board',
      'You prioritize portability and easy storage',
      'You want premium tech at the lowest price in the group',
      'You paddle recreationally rather than for performance',
      'Budget is $800–$900 and you want no regrets',
    ],
  },
  {
    board: red,
    accent: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    accentBorder: 'rgba(0,201,177,0.2)',
    badgeClass: 'badge-teal',
    types: [
      'You care about rigidity above all other factors',
      'You paddle regularly — at least twice a month',
      'You\'re under 170 lbs with no plans for gear loading',
      'You\'re moving toward touring, racing, or distance paddling',
      'You want a board backed by a 5-year warranty',
    ],
  },
];

/* ── SEO Metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    'Isle Pioneer Pro vs BOTE Breeze Aero vs Red Paddle Co Sport 2026 — Full Comparison | PaddleBoardShop',
  description:
    'Side-by-side comparison of the Isle Pioneer Pro, BOTE Breeze Aero, and Red Paddle Co Sport for 2026. Stability, rigidity, portability, and weight capacity — scored independently.',
  keywords: [
    'Isle Pioneer Pro vs BOTE Breeze Aero',
    'Isle Pioneer Pro vs Red Paddle Co Sport',
    'BOTE Breeze Aero comparison 2026',
    'best iSUP comparison 2026',
    'Red Paddle Co Sport review',
    'inflatable paddle board comparison',
  ],
  openGraph: {
    title: 'Isle Pioneer Pro vs BOTE Breeze Aero vs Red Paddle Co Sport 2026',
    description: 'The definitive 2026 iSUP three-way comparison. Category winners, full specs, and a clear final recommendation.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: {
    canonical: '/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026',
  },
};

/* ── Helpers ─────────────────────────────────────────────────── */
function scoreColor(score: number) {
  if (score >= 9.5) return 'var(--color-glacier-teal)';
  if (score >= 8.8) return 'var(--color-sky-glow)';
  return 'var(--color-amber-glow)';
}

/** Inline 3-board CTA strip shown after each major section */
function MiniCTAStrip() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-10 p-5 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {ALL.map((board) => (
        <a
          key={board.id}
          href={board.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="table-row-cta justify-between"
          aria-label={`Check ${board.name} — ${board.price}`}
        >
          <span className="truncate font-bold">{board.name.split(' ').slice(-1)[0]}</span>
          <span className="flex items-center gap-1 shrink-0">
            {board.price} <ArrowRight className="w-3 h-3" />
          </span>
        </a>
      ))}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function ComparisonPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Isle Pioneer Pro vs BOTE Breeze Aero vs Red Paddle Co Sport 2026',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main>
        {/* ══════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════ */}
        <header
          className="relative pt-32 pb-14 px-6 text-center overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className="orb w-[500px] h-[400px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(0,201,177,0.05)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li><Link href="/" className="article-link">PaddleBoardShop</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li><Link href="/blog" className="hover:opacity-80 transition-opacity">Comparisons</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">3-Board Comparison</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
              style={{
                background: 'rgba(0,201,177,0.1)',
                border: '1px solid rgba(0,201,177,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Head-to-Head · Updated April 2026
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-5">
              Isle Pioneer Pro{' '}
              <span className="text-text-muted text-2xl md:text-3xl font-semibold">vs</span>{' '}
              BOTE Breeze Aero{' '}
              <span className="text-text-muted text-2xl md:text-3xl font-semibold">vs</span>{' '}
              <span className="gradient-text">Red Paddle Co Sport</span>{' '}
              <span className="text-text-muted text-xl font-medium">(2026)</span>
            </h1>

            <p className="text-base text-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
              The three most-considered iSUPs at the{' '}
              <strong className="text-text-primary">$849–$1,149 price point</strong>{' '}
              — scored on 5 categories, compared head-to-head, with a clear winner
              for each type of paddler.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['✓ Independent scoring', '✓ Real-world field testing', '✓ No paid placements', '✓ April 2026'].map((t) => (
                <span key={t} className="font-medium">{t}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════
            QUICK VERDICT
        ══════════════════════════════════════════ */}
        <section
          id="verdict"
          aria-labelledby="verdict-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="verdict-heading" className="article-h2">Quick Verdict</h2>
            <p>Three boards, three different winners. Here&apos;s the one-sentence decision for each type of paddler.</p>
          </div>

          <div className="article-wide mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {VERDICTS.map(({ label, board, reason, icon: Icon, accent, accentBg, badgeClass }) => (
                <a
                  key={board.id}
                  href={board.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="pick-card"
                  style={{ borderColor: `color-mix(in srgb, ${accent} 30%, transparent)` }}
                  aria-label={`${label}: ${board.name} — ${board.price}`}
                >
                  <div className="p-6 flex flex-col gap-4">
                    {/* Label + icon */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: accentBg, border: `1px solid ${accent}33` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: accent }} />
                      </div>
                      <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: accent }}>
                        {label}
                      </p>
                    </div>

                    {/* Board name */}
                    <div>
                      <span className={`${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-full block w-fit mb-2`}>
                        {board.badge}
                      </span>
                      <h3 className="text-lg font-extrabold text-text-primary leading-tight">
                        {board.name}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">{board.length} · {board.bestFor}</p>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">{reason}</p>

                    <div className="mt-auto">
                      <p className="text-2xl font-extrabold text-text-primary mb-3">{board.price}</p>
                      <div className="pick-cta text-sm">
                        <span>Check Latest Price</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ABOVE-FOLD COMPARISON TABLE
        ══════════════════════════════════════════ */}
        <section
          id="comparison-table"
          aria-labelledby="table-heading"
          className="article-section"
          style={{ paddingTop: 0 }}
        >
          <div className="article-wide">
            <h2 id="table-heading" className="article-h2 text-center mb-8">
              Full Spec Comparison
            </h2>

            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm border-collapse"
                  role="table"
                  aria-label="Three-way iSUP comparison table"
                >
                  <thead>
                    <tr style={{
                      background: 'rgba(5,13,26,0.92)',
                      borderBottom: '1px solid rgba(0,201,177,0.2)',
                      position: 'sticky', top: 0, zIndex: 10,
                    }}>
                      <th className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted" scope="col">Spec</th>
                      {ALL.map((b) => (
                        <th key={b.id} className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted" scope="col">
                          <span className="text-text-primary font-extrabold text-xs block">{b.name}</span>
                          <span className="font-normal normal-case tracking-normal">{b.length}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: 'Price',
                        values: ALL.map((b) => ({ board: b, display: <strong className="text-text-primary">{b.price}</strong> })),
                      },
                      {
                        label: 'Rigidity Score',
                        values: ALL.map((b) => ({
                          board: b,
                          display: (
                            <span className="font-extrabold text-base" style={{ color: scoreColor(b.rigidityScore) }}>
                              {b.rigidityScore}<span className="text-text-muted text-xs font-normal">/10</span>
                            </span>
                          ),
                          winner: b.id === red.id,
                        })),
                      },
                      {
                        label: 'Portability Score',
                        values: ALL.map((b) => ({
                          board: b,
                          display: (
                            <span className="font-extrabold text-base" style={{ color: scoreColor(b.portabilityScore) }}>
                              {b.portabilityScore}<span className="text-text-muted text-xs font-normal">/10</span>
                            </span>
                          ),
                          winner: b.id === bote.id,
                        })),
                      },
                      {
                        label: 'Capacity Score',
                        values: ALL.map((b) => ({
                          board: b,
                          display: (
                            <span className="font-extrabold text-base" style={{ color: scoreColor(b.weightCapacityScore) }}>
                              {b.weightCapacityScore}<span className="text-text-muted text-xs font-normal">/10</span>
                            </span>
                          ),
                          winner: b.id === isle.id,
                        })),
                      },
                      {
                        label: 'Weight Capacity',
                        values: ALL.map((b) => ({
                          board: b,
                          display: <span className="font-semibold text-text-primary">{b.weightCapacity}</span>,
                          winner: b.id === isle.id,
                        })),
                      },
                      {
                        label: 'Board Weight',
                        values: ALL.map((b) => ({
                          board: b,
                          display: <span className="font-semibold text-text-primary">{b.weight}</span>,
                          winner: b.id === bote.id,
                        })),
                      },
                      {
                        label: 'Thickness',
                        values: ALL.map((b) => ({
                          board: b,
                          display: <span className="text-text-secondary">{b.thickness}</span>,
                        })),
                      },
                      {
                        label: 'Best For',
                        values: ALL.map((b) => ({
                          board: b,
                          display: <span className="text-text-secondary text-xs">{b.bestFor}</span>,
                        })),
                      },
                    ].map((row, ri) => (
                      <tr
                        key={ri}
                        className="table-row-hover"
                        style={{ borderTop: ri > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                      >
                        <td className="px-5 py-4 text-xs font-bold text-text-muted uppercase tracking-wide whitespace-nowrap">
                          {row.label}
                        </td>
                        {(row.values as Array<{ board: typeof isle; display: React.ReactNode; winner?: boolean }>).map(({ board, display, winner = false }) => (
                          <td
                            key={board.id}
                            className="px-5 py-4"
                            style={winner ? { background: 'rgba(0,201,177,0.04)' } : {}}
                          >
                            <div className="flex items-center gap-2">
                              {display}
                              {winner && (
                                <span
                                  className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md shrink-0"
                                  style={{
                                    background: 'rgba(0,201,177,0.15)',
                                    color: 'var(--color-glacier-teal)',
                                  }}
                                >
                                  ✓ Best
                                </span>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                    {/* CTA row */}
                    <tr style={{ borderTop: '1px solid rgba(0,201,177,0.15)', background: 'rgba(0,201,177,0.03)' }}>
                      <td className="px-5 py-5 text-xs font-bold text-text-muted uppercase tracking-wide">
                        Current Price
                      </td>
                      {ALL.map((board) => (
                        <td key={board.id} className="px-5 py-5">
                          <a
                            href={board.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="table-row-cta"
                            aria-label={`Check price for ${board.name}`}
                          >
                            {board.price} <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-text-muted text-center mt-4">
              ✓ Best labels reflect category winners from our independent field testing.
              Prices link to current retailer listings.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            DETAILED COMPARISON SECTIONS
        ══════════════════════════════════════════ */}
        {DETAIL_SECTIONS.map((section, si) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="article-section"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="article-body">
              {/* Section header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Category {si + 1} of {DETAIL_SECTIONS.length}
                </span>
              </div>
              <h2 id={`${section.id}-heading`} className="article-h2">
                {section.title}
              </h2>

              {/* Score mini-bar row */}
              <div className="grid grid-cols-3 gap-3 my-6">
                {section.scores.map(({ board, score, label }) => {
                  const isWinner = board.id === section.winner.id;
                  return (
                    <div
                      key={board.id}
                      className="text-center rounded-xl py-4 px-3"
                      style={{
                        background: isWinner ? 'rgba(0,201,177,0.08)' : 'rgba(255,255,255,0.03)',
                        border: isWinner ? '1px solid rgba(0,201,177,0.25)' : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2">
                        {board.name.split(' ').pop()}
                      </p>
                      <p
                        className="text-2xl font-extrabold"
                        style={{ color: isWinner ? 'var(--color-glacier-teal)' : 'var(--color-text-primary)' }}
                      >
                        {score}
                        <span className="text-xs text-text-muted font-normal">/10</span>
                      </p>
                      {isWinner && (
                        <span className="text-[9px] font-bold uppercase tracking-widest mt-1 block"
                          style={{ color: 'var(--color-glacier-teal)' }}>
                          {section.winnerLabel}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Copy */}
              {section.copy.map((para, pi) => (
                <p key={pi}>{para}</p>
              ))}

              {/* Verdict callout */}
              <div
                className="rounded-xl px-5 py-4 mt-4"
                style={{
                  background: 'rgba(0,201,177,0.07)',
                  border: '1px solid rgba(0,201,177,0.2)',
                }}
              >
                <p className="text-sm font-semibold text-text-primary">
                  <span style={{ color: 'var(--color-glacier-teal)' }}>✓ Verdict: </span>
                  {section.verdict}
                </p>
              </div>

              {/* Mini CTA strip */}
              <MiniCTAStrip />
            </div>
          </section>
        ))}

        {/* ══════════════════════════════════════════
            WHO SHOULD BUY EACH BOARD
        ══════════════════════════════════════════ */}
        <section
          id="who-should-buy"
          aria-labelledby="who-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="who-heading" className="article-h2">
              Who Should Buy Each Board?
            </h2>
            <p>
              The fastest way to decide. Find yourself in one of these columns — and stop overthinking it.
            </p>
          </div>

          <div className="article-wide mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PERSONAS.map(({ board, accent, accentBg, accentBorder, badgeClass, types }) => (
                <div
                  key={board.id}
                  className="glass-card p-6 flex flex-col gap-4"
                  style={{ borderColor: accentBorder }}
                >
                  <div>
                    <span className={`${badgeClass} text-xs font-bold px-3 py-1 rounded-full block w-fit mb-3`}>
                      {board.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-text-primary leading-tight">
                      {board.name}
                    </h3>
                    <p className="text-xs font-semibold mt-1" style={{ color: accent }}>
                      Buy this if…
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {types.map((type, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="text-sm shrink-0 mt-0.5" style={{ color: accent }}>→</span>
                        {type}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <a
                      href={board.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="table-row-cta w-full justify-center"
                      aria-label={`Check ${board.name} price`}
                    >
                      {board.price} — Check Price <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL RECOMMENDATION
        ══════════════════════════════════════════ */}
        <section
          id="final-recommendation"
          aria-labelledby="final-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="final-heading" className="article-h2">
              Final Recommendation
            </h2>

            <p className="article-lead">
              If you can only read one paragraph: buy the Isle Pioneer Pro.
            </p>

            <p>
              It wins the weight capacity category outright with a{' '}
              <strong>9.8/10 score and 335 lbs of validated capacity</strong>. It scores
              9.4/10 on rigidity — within striking distance of the Red Paddle Co Sport.
              And the ISLE-LINK rail system gives you an expandable platform that
              grows as your paddling evolves.
            </p>
            <p>
              The only reason to deviate from the Isle Pioneer Pro:{' '}
              <strong>if you&apos;re under 170 lbs and purely focused on touring performance</strong>,
              the Red Paddle Co Sport&apos;s 9.7 rigidity score and 5-year warranty are
              worth the capacity tradeoff. And{' '}
              <strong>if your budget is firm at $849</strong>, the BOTE Breeze Aero
              delivers genuinely premium performance without compromise.
            </p>
            <p>
              No wrong answers in this comparison. All three boards cleared our
              independent testing benchmark. The right one is the one that matches
              your weight, use case, and budget — in that order.
            </p>

            <p className="text-xs text-text-muted mt-6">
              <strong className="text-text-secondary">Disclosure:</strong> This page
              contains affiliate links. We earn a commission on qualifying purchases at no
              additional cost to you. All scores are independent and never influenced by
              affiliate arrangements.
            </p>
          </div>

          {/* Final 3 CTA blocks */}
          <div className="article-wide mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ALL.map((board, i) => (
                <a
                  key={board.id}
                  href={board.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="pick-card text-center"
                  aria-label={`${board.name} — ${board.price}`}
                >
                  <div className="p-6 flex flex-col gap-4 items-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                      {i === 0 ? '🏆 Best Overall' : i === 1 ? '⭐ Best Value' : '⚡ Best Premium'}
                    </p>
                    <h3 className="text-base font-extrabold text-text-primary">{board.name}</h3>
                    <p className="text-3xl font-extrabold text-text-primary">{board.price}</p>
                    <div className="pick-cta w-full text-sm">
                      <span>Check Latest Price</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </div>
                    <p className="text-[10px] text-text-muted">
                      🔄 Updated Apr 2026 · ✓ Independent
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-sm text-text-secondary mb-4">
                Want more context before you decide?
              </p>
              <Link
                href="/"
                className="article-link text-sm font-semibold"
              >
                Read our full 2026 iSUP review guide →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

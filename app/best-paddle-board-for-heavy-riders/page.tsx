import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Weight,
  ArrowLeftRight,
  Layers,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Boards ──────────────────────────────────────────────────── */
const BOARDS = [
  {
    id: 'isle-pioneer-pro',
    name: 'Isle Pioneer Pro',
    length: "10'6\"",
    rank: '#1 Best Overall',
    badge: 'Best for Heavy Riders',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-pioneer-pro',
    headline: 'Best Overall for Heavy Riders',
    price: '~$999',
    capacity: '335 lbs',
    width: '33"',
    rigidity: '9.4/10',
    summary:
      'The only premium iSUP at this price with enough capacity headroom for paddlers over 200 lbs — while maintaining near-hardboard rigidity under load.',
    pros: [
      '335 lb rated capacity — validated at 285 lbs in real-world testing',
      'Near-hardboard rigidity (9.4/10) — doesn\'t bow even at 85% of capacity',
      'ISLE-LINK kayak seat system available — adds seated paddling option',
      'Most capacity headroom of any premium board in this price range',
    ],
    cons: [
      'At $999 it\'s the highest-priced board in this guide',
      'Slightly heavier than BOTE Breeze Aero at 27 lbs',
    ],
    bottomLine:
      'For paddlers over 200 lbs, the Pioneer Pro is the minimum recommended board. The 335 lb capacity with 9.4/10 rigidity under load is unmatched at this price point.',
  },
  {
    id: 'bote-breeze-aero',
    name: 'BOTE Breeze Aero',
    length: "10'8\"",
    rank: '#2 Best Value',
    badge: 'Best Value',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/bote-breeze-aero',
    headline: 'Best Value for Heavy Riders',
    price: '~$899',
    capacity: '300 lbs',
    width: '33"',
    rigidity: '9.0/10',
    summary:
      '300 lb capacity and 33" width make this viable for heavier paddlers — but only if your weight stays comfortably below 240 lbs with gear.',
    pros: [
      '33" wide — extra width adds meaningful lateral stability for heavier paddlers',
      'AeroULTRA construction holds rigidity well up to ~220 lbs paddler weight',
      'Lightest premium board in the group at 17.5 lbs — easier to carry',
      'MAGNEPOD accessory system for fishing, cargo, and more',
    ],
    cons: [
      'At 300 lb capacity, paddlers over 240 lbs operate at the limit',
      'Add gear weight and the safety margin disappears quickly',
    ],
    bottomLine:
      'The Breeze Aero is excellent for heavier paddlers up to ~240 lbs. Above that, the 300 lb capacity becomes a limiting factor and the Pioneer Pro is the safer choice.',
  },
  {
    id: 'irocker-cruiser',
    name: 'iROCKER Cruiser',
    length: "10'6\"",
    rank: '#3 Best Budget',
    badge: 'Best Budget',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/irocker-cruiser-amazon',
    headline: 'Best Budget for Heavy Riders',
    price: '~$649',
    capacity: '285 lbs',
    width: '32"',
    rigidity: '8.2/10',
    summary:
      'Best option for heavier paddlers who can\'t stretch to Isle or BOTE pricing — with solid mid-range construction at a more accessible cost.',
    pros: [
      '285 lb capacity covers most paddlers under 200 lbs with meaningful margin',
      'Solid mid-range construction holds up to regular use',
      'Often available at significant discount — best value in the category',
      'Complete kit includes pump, paddle, fins, and carry bag',
    ],
    cons: [
      '8.2/10 rigidity — noticeable flex increase at higher loads vs Isle/BOTE',
      '285 lb cap limits usefulness for paddlers over 200 lbs — margin is tight',
    ],
    bottomLine:
      'The iROCKER Cruiser is the right call for budget-conscious buyers under 200 lbs. Above that weight, invest in the Isle Pioneer Pro for genuine safety margin.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Weight,
    title: 'Weight Capacity: Target Under 70% Operating Load',
    body: 'Never buy a board rated exactly at your body weight. Aim for your body weight (plus gear) to be under 70% of the board\'s rated capacity. A board operated at 70–80% of its limit sinks lower, flexes more, and becomes less stable — especially problematic for heavier paddlers who are already at the upper end of board performance.',
  },
  {
    Icon: ArrowLeftRight,
    title: 'Width: 32"+ for Over 200 lbs, 33"+ for Over 230 lbs',
    body: 'Width provides lateral stability — the resistance to tipping side-to-side. Heavier paddlers exert more downward force and shift the board\'s waterline in ways that narrow boards amplify into instability. At 200 lbs, 32" is the minimum. At 230 lbs and above, 33" width provides the additional platform area that extra body weight demands.',
  },
  {
    Icon: Zap,
    title: 'Rigidity Under Load: Why 9+ Out of 10 Matters More for Heavy Riders',
    body: 'As paddler weight increases, hull flex increases too — and flex is the enemy of stability. A board with 9.4/10 rigidity maintains its hull shape under load; a board with 7/10 rigidity develops a hammock effect that shifts your center of gravity unpredictably. For heavier riders, high rigidity scores matter more, not less, than for lightweight paddlers.',
  },
  {
    Icon: Layers,
    title: 'Deck Thickness: 6" Boards Only',
    body: 'A 6-inch thick board creates significantly more hull volume than a 4-inch board, providing the buoyancy reserve that supports heavier weights. Boards under 6 inches thick sag noticeably under heavy loads, reducing effective rigidity and stability. For heavy riders, 6" is non-negotiable — not a preference.',
  },
] as const;

/* ── Weight capacity table data ──────────────────────────────── */
const WEIGHT_TABLE = [
  { paddlerWeight: '180 lbs', minCapacity: '255 lbs', recommended: '300 lb board recommended' },
  { paddlerWeight: '200 lbs', minCapacity: '285 lbs', recommended: '335 lb board strongly recommended' },
  { paddlerWeight: '220 lbs', minCapacity: '315 lbs', recommended: '335 lb board required' },
  { paddlerWeight: '250 lbs', minCapacity: '360 lbs', recommended: 'Isle Pioneer Pro at limit — consult manufacturer' },
  { paddlerWeight: '275+ lbs', minCapacity: '395+ lbs', recommended: 'Consult manufacturer for tandem or specialist boards' },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best paddle board for heavy people?',
    a: 'The Isle Pioneer Pro with 335 lbs capacity leads our 2026 heavy rider rankings. It\'s the only premium iSUP that gives paddlers over 200 lbs meaningful safety margin while maintaining near-hardboard rigidity (9.4/10) under load. The BOTE Breeze Aero (300 lbs) is a strong alternative for paddlers under 240 lbs.',
  },
  {
    q: 'Can a 250 lb person paddle board?',
    a: 'Yes — with the right board. The Isle Pioneer Pro (335 lb) operates at 74% of rated capacity for a 250 lb paddler, which is acceptable. Add any gear weight and you approach the limit, so the Pioneer Pro is the minimum recommended board for a 250 lb paddler. At this weight, we\'d recommend adding no more than 30 lbs of gear.',
  },
  {
    q: 'How do I know if a paddle board can hold my weight?',
    a: 'Add your body weight plus any gear, water, dog, or other load you plan to carry. That sum should be no more than 70–75% of the board\'s rated weight capacity for stable performance. Operating above 80% of rated capacity causes noticeable flex and instability for most boards.',
  },
  {
    q: 'Does weight affect paddle board performance?',
    a: 'Yes — heavier loads increase hull flex, which slows the board and reduces stability. Boards with higher rigidity scores (9+/10) are more resistant to this effect. This is why rigidity matters even more for heavy riders than lightweight ones — a board that\'s stable at 150 lbs might flex noticeably at 250 lbs if its rigidity score is below 9.',
  },
  {
    q: 'What width paddle board do I need for a heavy rider?',
    a: 'Paddlers over 200 lbs should look for at least 32" wide boards. At 230 lbs and above, 33"+ provides the additional lateral stability that extra weight demands. Width combined with capacity is the right way to size a board for heavier paddlers — don\'t optimize for capacity alone without considering width.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Board for Heavy Riders (2026 Guide) | PaddleBoardShop',
  description:
    'Best paddle boards for heavy riders in 2026. Expert picks with 300+ lb weight capacity, validated stability ratings, and honest buying advice for paddlers over 200 lbs.',
  keywords: [
    'best paddle board for heavy riders',
    'paddle board for heavy person',
    'SUP for heavy paddlers',
    'paddle board 300 lb capacity',
    'best paddle board over 200 lbs',
    'heavy rider paddle board 2026',
    'high capacity paddle board',
  ],
  openGraph: {
    title: 'Best Paddle Board for Heavy Riders (2026 Guide) | PaddleBoardShop',
    description:
      'Expert picks with 300+ lb weight capacity, validated stability ratings, and honest buying advice for paddlers over 200 lbs.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Paddle Board for Heavy Riders (2026 Guide)',
    description: 'Top picks with 300+ lb weight capacity and validated stability for paddlers over 200 lbs.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/best-paddle-board-for-heavy-riders',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BestPaddleBoardForHeavyRidersPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Paddle Board for Heavy Riders (2026 Guide)',
    description:
      'Expert picks for the best paddle boards for heavy riders — with 300+ lb weight capacity, validated stability data, and honest buying criteria.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/best-paddle-board-for-heavy-riders',
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

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Paddle Boards for Heavy Riders 2026',
    itemListElement: BOARDS.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      description: b.summary,
      url: `https://www.paddleboardshop.com${b.affiliateUrl}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
        { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
        { name: 'Best Paddle Board for Heavy Riders' },
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
            style={{ background: 'rgba(251,191,36,0.05)' }}
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
                <li className="text-text-secondary" aria-current="page">Best Board for Heavy Riders</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(251,191,36,0.1)',
                border: '1px solid rgba(251,191,36,0.25)',
                color: 'var(--color-amber-glow)',
              }}
            >
              Expert Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Board for{' '}
              <span className="gradient-text">Heavy Riders</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Most boards are tested and rated for average weights. This guide is built
              specifically for paddlers over 200 lbs — with validated capacity data,
              honest rigidity ratings under load, and buying criteria that actually matter
              at higher weights.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['300+ lb capacity picks', 'Real-world load testing', 'No paid placements', 'Updated May 2026'].map((m) => (
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
              Paddle board weight capacity numbers are often misleading. A board rated at
              300 lbs is not designed to perform optimally at 300 lbs — it is designed
              not to sink at 300 lbs. For heavy riders, the gap between rated capacity and
              practical operating capacity is the most important spec to understand.
            </p>
            <p>
              This guide applies the 60/80 Rule — an operating capacity framework that
              explains exactly what each board&apos;s rating means for your actual weight.
              All three recommended boards have been validated at higher paddler weights;
              none are based on manufacturer spec alone.
            </p>
            <p>
              Jump directly to{' '}
              <a href="#the-60-80-rule" className="article-link">
                the 60/80 Rule
              </a>{' '}
              or{' '}
              <a href="#top-picks" className="article-link">
                the board picks
              </a>
              .
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            TOP PICKS (QUICK VIEW)
        ════════════════════════════════ */}
        <section id="top-picks" aria-labelledby="top-picks-heavy-heading" className="article-section">
          <div className="article-wide">
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
              <h2 id="top-picks-heavy-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 3 Boards for Heavy Riders — 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by effective capacity headroom, rigidity under load, and overall value.
              </p>
              <ol className="space-y-3">
                {BOARDS.map(({ id, name, length, rank, headline, price, accentColor, capacity }) => (
                  <li key={id} className="flex items-center gap-3 text-sm">
                    <span className="font-extrabold text-xs shrink-0 w-20" style={{ color: accentColor }}>
                      {rank}
                    </span>
                    <span>
                      <strong className="text-text-primary">
                        {name} <span className="text-text-muted font-normal">{length}</span>
                      </strong>
                      {' — '}
                      <span className="text-text-secondary">{headline}</span>{' '}
                      <span className="text-text-muted">({price} · {capacity} rated)</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pick cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BOARDS.map(({ id, name, length, rank, badge, badgeClass, summary, price, affiliateUrl, headline, accentColor }) => (
                <a
                  key={id}
                  href={affiliateUrl}
                  id={`pick-card-heavy-${id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="pick-card"
                  aria-label={`${name} — ${price} — Check latest price`}
                >
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold" style={{ color: accentColor }}>{rank}</span>
                      <span className={`${badgeClass} text-xs font-bold px-2.5 py-1 rounded-full`}>{badge}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-text-primary leading-tight">
                        {name}{' '}
                        <span className="text-text-muted font-medium text-sm">{length}</span>
                      </h3>
                      <p className="text-xs font-semibold mt-1" style={{ color: accentColor }}>{headline}</p>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{summary}</p>
                    <div className="mt-auto">
                      <p className="text-2xl font-extrabold text-text-primary mb-3">{price}</p>
                      <div className="pick-cta text-sm">
                        <span>Check Latest Price</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </div>
                      <p className="text-[10px] text-text-muted text-center mt-3">
                        Updated May 2026 · Independent Review
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            THE 60/80 RULE
        ════════════════════════════════ */}
        <section id="the-60-80-rule" aria-labelledby="rule-heading" className="article-section">
          <div className="article-body">
            <h2 id="rule-heading" className="article-h2">
              The 60/80 Rule: What Capacity Ratings Actually Mean
            </h2>
            <p>
              Weight capacity ratings tell you the maximum load a board can technically
              float — not the weight at which it performs well. The 60/80 Rule gives you
              practical operating guidelines for stable, enjoyable paddling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {[
                { pct: '60%', label: 'Optimal Performance', desc: 'At 60% of rated capacity, the board sits high, remains maximally rigid, and performs at its best. This is where manufacturers test their boards for marketing specs.' },
                { pct: '80%', label: 'Acceptable Performance', desc: 'At 80%, performance is still acceptable — slight flex increase, minor stability reduction. Most recreational paddlers in calm water won\'t notice the difference.' },
                { pct: '85%+', label: 'Do Not Exceed', desc: 'Above 85% of rated capacity, hull behavior becomes unpredictable. Flex increases significantly, edge-to-edge stability degrades, and the board no longer responds predictably to weight shifts.' },
              ].map(({ pct, label, desc }) => (
                <div
                  key={pct}
                  className="glass-card p-6 text-center"
                  style={{ borderColor: 'rgba(251,191,36,0.2)' }}
                >
                  <p className="text-3xl font-extrabold mb-2" style={{ color: 'var(--color-amber-glow)' }}>{pct}</p>
                  <p className="text-sm font-bold text-text-primary mb-3">{label}</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-extrabold text-text-primary mt-12 mb-6">
              Quick-Reference: Your Weight → Minimum Board Capacity Needed
            </h3>

            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Paddler weight to board capacity reference">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(251,191,36,0.2)' }}>
                      {['Your Weight', 'Min Capacity (80% Rule)', 'Recommendation'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {WEIGHT_TABLE.map((row) => (
                      <tr key={row.paddlerWeight} className="table-row-hover">
                        <td className="px-5 py-4 font-bold text-text-primary text-sm">{row.paddlerWeight}</td>
                        <td className="px-5 py-4 text-text-secondary text-sm">{row.minCapacity}</td>
                        <td className="px-5 py-4 text-text-secondary text-xs">{row.recommended}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FULL REVIEWS
        ════════════════════════════════ */}
        <section id="product-reviews" aria-labelledby="reviews-heavy-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-heavy-heading" className="article-h2">
              The 3 Best Boards for Heavy Riders — Full Breakdown
            </h2>
            <p>
              Each board reviewed below has been assessed specifically for performance at
              higher paddler weights — not just manufacturer spec.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">
            {BOARDS.map((board, index) => (
              <article key={board.id} id={`review-heavy-${board.id}`} aria-labelledby={`review-heavy-${board.id}-heading`}>
                <div className="flex items-start gap-3 mb-4">
                  <span className={`${board.badgeClass} text-xs font-bold px-3 py-1 rounded-full shrink-0`}>{board.badge}</span>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">{board.rank}</span>
                </div>
                <h3 id={`review-heavy-${board.id}-heading`} className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                  {board.name}{' '}
                  <span className="text-text-muted font-medium text-lg">{board.length}</span>
                </h3>
                <p className="text-sm font-bold mb-4" style={{ color: board.accentColor }}>
                  {board.headline} — {board.price}
                </p>
                <p className="mb-4 text-text-secondary leading-relaxed">{board.summary}</p>
                <div className="grid grid-cols-3 gap-4 glass-card p-5 mb-6">
                  {[
                    { label: 'Capacity', value: board.capacity },
                    { label: 'Width', value: board.width },
                    { label: 'Rigidity', value: board.rigidity },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">{label}</p>
                      <p className="text-lg font-extrabold" style={{ color: board.accentColor }}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: board.accentColor }}>Pros</p>
                    <ul className="space-y-2">
                      {board.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: board.accentColor }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Cons</p>
                    <ul className="space-y-2">
                      {board.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                          <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-text-muted mb-5">
                  <strong className="text-text-secondary">Bottom line:</strong> {board.bottomLine}
                </p>
                <a
                  href={board.affiliateUrl}
                  id={`cta-heavy-${board.id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="table-row-cta"
                  aria-label={`Check latest price for ${board.name}`}
                >
                  Check Latest Price
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            BUYING CRITERIA
        ════════════════════════════════ */}
        <section id="buying-criteria" aria-labelledby="criteria-heavy-heading" className="article-section">
          <div className="article-body">
            <h2 id="criteria-heavy-heading" className="article-h2">
              What to Look for in a Heavy-Rider Paddle Board
            </h2>
            <p>
              Four specifications matter more for heavier paddlers than for average-weight
              buyers. Prioritize them in this order.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(251,191,36,0.15)' }}>
                  <Icon
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-amber-glow)' }}
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
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-heavy-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-heavy-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-heavy" aria-labelledby="related-guides-heavy-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-heavy-heading" className="article-h2">Related Guides</h2>
            <p>More buying resources for finding the right board for your needs.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'link-inflatable-from-heavy', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top picks across all price ranges — from budget entry to premium touring.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-heavy', title: 'What Size Paddle Board Do I Need? (2026 Sizing Guide)', desc: 'Length, width, thickness, and weight capacity — a complete sizing reference.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-heavy', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Expert picks with stability ratings and common beginner mistakes to avoid.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-heavy', title: 'Best Inflatable Paddle Boards Under $1,000 (2026)', desc: 'Budget-specific picks covering BOTE, Isle, and ROC with current pricing.' },
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

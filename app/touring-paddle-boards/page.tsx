import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Ruler,
  Layers,
  Navigation,
  Backpack,
  Wind,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Board data ──────────────────────────────────────────────── */
const BOARDS = [
  {
    id: 'red-paddle-sport',
    name: 'Red Paddle Co Sport 11\'3"',
    length: "11'3\"",
    rank: '#1 Pick',
    badge: 'Best Overall',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/red-paddle-co-sport',
    headline: 'Best Overall Touring SUP',
    price: '~$1,149',
    summary:
      'The benchmark touring inflatable — purpose-built with RSS batten stiffening, an efficient touring hull, and MSL Fusion construction. If you are serious about long-distance paddling, this is the board.',
    description: [
      'The Red Paddle Co Sport 11\'3" is not just the best touring inflatable in this guide — it is the board purpose-built for exactly this use case. Red Paddle Co designed the Sport specifically around the demands of sustained paddling: the hull profile, the rigidity system, and the deck layout all reflect decisions made for a paddler covering distance, not just recreational flat-water use.',
      'The RSS (Rocker Stiffening System) batten kit is what separates this board from the competition at a technical level. Rigid battens slot into the rail of the board at inflation, dramatically reducing the longitudinal flex that steals energy from every stroke on a standard inflatable. Red Paddle Co rates the Sport at 9.7 out of 10 for rigidity — and that rating is reflected in how it behaves on water. There is no perceptible flex underfoot. The energy you put into each paddle stroke converts to forward motion instead of being absorbed by a soft hull.',
      'The MSL Fusion construction bonds the PVC directly to the drop-stitch core rather than laminating it, creating a bond that maintains structural integrity over seasons of regular use. The 5-year warranty is the longest in its category and reflects genuine confidence in the build. For a paddler who wants one board that performs at a high level for years — not just one season — the Sport 11\'3" is the standard.',
    ],
    pros: [
      'RSS batten system delivers 9.7/10 rigidity — the benchmark for touring inflatables',
      'Purpose-designed touring hull profile maximizes glide efficiency per stroke',
      'Full-length traction pad keeps feet secure through long sessions and choppy conditions',
      'MSL Fusion construction and 5-year warranty — the longest guarantee in the category',
    ],
    cons: [
      'At $1,149, it is the premium price in this guide — a meaningful investment',
      'RSS batten installation adds 3-5 minutes to setup versus standard inflatables',
    ],
    bottomLine:
      'The Red Paddle Co Sport 11\'3" is the touring inflatable that all others are measured against. If you are serious about distance performance, this is the right board — no caveats.',
  },
  {
    id: 'irocker-nautical',
    name: 'iROCKER Nautical 12\'6"',
    length: "12'6\"",
    rank: '#2 Pick',
    badge: 'Best Distance',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/irocker-nautical-amazon',
    headline: 'Best Distance Touring Value',
    price: '~$749',
    summary:
      'A purpose-built 12\'6" touring shape with a narrow nose for glide efficiency and excellent straight-line tracking. Outstanding value versus the Red Paddle Co at nearly $400 less.',
    description: [
      'The iROCKER Nautical 12\'6" earns its place as the distance touring pick for paddlers who want serious performance without the Red Paddle Co price tag. At 12\'6", it is the longest board in this guide — and length translates directly to glide efficiency. More hull in the water means more momentum carried between strokes, which matters across 10+ mile sessions.',
      'The narrow nose is the key touring design feature here. Blunt noses on all-around boards push water to the sides — that displacement costs speed and efficiency. The Nautical\'s pointed touring hull parts the water more cleanly, and the narrow overall width (30 inches) means less drag at cruising speed. The trade-off is less initial stability than a wider recreational board — but paddlers specifically seeking a touring board are typically ready for that.',
      'Tracking is where the Nautical consistently performs well in user feedback. The fin configuration keeps it locked on a bearing without constant correction, which reduces stroke frequency devoted to steering versus propulsion. For longer distances, that efficiency adds up significantly. At $749, it undercuts the Red Paddle Co Sport by nearly $400 while delivering genuinely touring-specific performance.',
    ],
    pros: [
      '12\'6" length maximizes glide efficiency for long-distance sessions',
      'Narrow nose and 30" width reduce drag versus wider all-around boards',
      'Excellent straight-line tracking reduces corrective strokes on distance paddles',
      'Meaningful $400 price advantage over the Red Paddle Co Sport',
    ],
    cons: [
      '30" width is less forgiving — requires more established balance than wider boards',
      'Lacks the RSS stiffening system of Red Paddle Co — slightly less rigid under load',
    ],
    bottomLine:
      'The iROCKER Nautical 12\'6" is the best value touring board for distance paddlers who want a purpose-built hull without the premium Red Paddle Co pricing.',
  },
  {
    id: 'isle-pioneer-pro',
    name: 'Isle Pioneer Pro',
    length: "10'6\"",
    rank: '#3 Pick',
    badge: 'Most Versatile',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-pioneer-pro',
    headline: 'Most Versatile Tourer',
    price: '~$999',
    summary:
      'The 10\'6" length is more maneuverable than longer touring shapes while still tracking well — and ISLE-LINK accessory integration makes it uniquely capable for loaded multi-day touring with camping gear.',
    description: [
      'The Isle Pioneer Pro occupies a distinct category in this guide: the touring board for paddlers who want multi-day capability without sacrificing maneuverability. At 10\'6", it is shorter than the dedicated distance boards above — and that shorter length pays dividends in channels, inlets, and any touring environment that requires navigation rather than pure straight-line speed.',
      'The ISLE-LINK system is what sets the Pioneer Pro apart for loaded touring specifically. D-ring anchor points throughout the deck accept ISLE-LINK compatible dry bags, gear pods, and coolers. A paddler planning a multi-day camping trip can load the Pioneer Pro with tent, sleeping kit, and food in a way that no dedicated racing shape accommodates practically. The higher weight capacity supports that gear without stability compromise.',
      'Build quality is genuinely premium. The Pioneer Pro uses high-density dual-layer PVC construction that maintains rigidity across the load spectrum — an important factor when the board is loaded with camping gear. Isle backs it with a comprehensive warranty and a brand reputation built specifically on premium inflatable construction. For paddlers who want one board that tours efficiently and handles loaded multi-day trips, the Pioneer Pro is the answer.',
    ],
    pros: [
      'ISLE-LINK accessories enable practical loaded multi-day touring — unique in this category',
      'Higher weight capacity supports fully loaded camping gear without stability compromise',
      '10\'6" length is more maneuverable than longer shapes in channels and tight passages',
      'Dual-layer PVC premium construction rated for heavy use over multiple seasons',
    ],
    cons: [
      'At $999, priced above the iROCKER Nautical while being shorter and slower over distance',
      'Not optimized for pure distance speed — the Nautical covers ground more efficiently',
    ],
    bottomLine:
      'The Isle Pioneer Pro is the right touring board for paddlers who care as much about loaded versatility as they do about speed. The ISLE-LINK system makes it uniquely capable for multi-day touring.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Ruler,
    title: 'Length and Hull Shape',
    body: (
      <>
        Longer boards glide more efficiently. For dedicated touring,{' '}
        <strong>11&apos; to 12&apos;6&quot;</strong> is the performance range. Each
        additional foot of hull length means more momentum carried between
        strokes — which compounds significantly over 8-15 mile sessions. A
        pointed touring nose also reduces water displacement versus blunt
        all-around shapes, adding measurable glide efficiency.
      </>
    ),
  },
  {
    Icon: Layers,
    title: 'Rigidity — Why 9+ Out of 10 Matters',
    body: (
      <>
        A board that flexes underfoot loses energy with every stroke. That flex
        absorbs power that should convert to forward motion. Look for boards
        rated <strong>9.0 rigidity or above</strong> for serious touring —
        systems like Red Paddle Co&apos;s RSS battens deliver this mechanically,
        not just through marketing claims. Flex is the enemy of efficiency on
        distance paddles.
      </>
    ),
  },
  {
    Icon: Navigation,
    title: 'Tracking Fins',
    body: (
      <>
        Fin configuration determines how much of your paddle energy goes toward
        forward propulsion versus course correction. A touring board with poor
        tracking forces constant corrective strokes — burning energy and
        fatiguing the arms. Look for{' '}
        <strong>dedicated touring fin setups</strong> with a larger center fin
        designed for straight-line performance rather than all-around tri-fin
        configurations.
      </>
    ),
  },
  {
    Icon: Backpack,
    title: 'Gear Capacity and D-Rings',
    body: (
      <>
        Multi-day touring requires a board that can carry gear practically.
        Minimum six D-rings for bungee cargo areas, front and rear; purpose-built
        boards add <strong>accessory mounting points</strong> for dry bags,
        gear pods, and hydration systems. Check the weight capacity against
        your body weight plus gear — a loaded touring board needs meaningful
        capacity headroom to maintain stability.
      </>
    ),
  },
  {
    Icon: Wind,
    title: 'Paddle Quality',
    body: (
      <>
        Touring requires a proper carbon fiber or high-grade fiberglass paddle
        — not the aluminum paddle included with entry-level kits. Heavier
        aluminum paddles fatigue arms significantly over multi-mile sessions.{' '}
        <strong>Carbon fiber paddles</strong> reduce swing weight and stroke
        fatigue enough to meaningfully extend the distance you can paddle
        comfortably. Budget for a quality paddle as part of the total touring
        investment.
      </>
    ),
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best touring paddle board?',
    a: "The Red Paddle Co Sport 11'3\" leads our 2026 touring rankings. Its RSS batten stiffening system delivers 9.7/10 rigidity — the highest in the category — and the purpose-built touring hull maximizes glide efficiency. For paddlers prioritizing value, the iROCKER Nautical 12'6\" delivers genuine touring performance at nearly $400 less. For loaded multi-day touring, the Isle Pioneer Pro with ISLE-LINK accessories is uniquely capable.",
  },
  {
    q: 'What length is best for a touring paddle board?',
    a: "11' to 12'6\" is the optimal touring range for most experienced paddlers. Longer boards carry more momentum between strokes and cover ground more efficiently — which matters significantly over 8-15 mile sessions. Shorter boards in the 10'6\" range sacrifice some speed for maneuverability in tighter passages and are better suited to touring environments that require navigation alongside distance.",
  },
  {
    q: 'How far can you paddle on a touring SUP in a day?',
    a: "An experienced paddler on a rigid touring board in calm conditions can cover 8-15 miles in a full day's paddle. Variables include paddler fitness, wind conditions, current, and the efficiency of the board itself. A highly rigid board like the Red Paddle Co Sport with an efficient carbon fiber paddle meaningfully extends the range achievable before fatigue. Budget 10 miles as a realistic target for a capable intermediate paddler on a dedicated touring shape.",
  },
  {
    q: 'Is rigidity important for touring?',
    a: "Critical — this is the most important performance factor for touring inflatables. A board that flexes underfoot loses energy with every stroke, because the flex absorbs power that should convert to forward motion. Systems like Red Paddle Co's RSS battens mechanically reduce this flex to near-hardboard levels. A soft board requires more strokes to cover the same distance — which means more fatigue over a long session. Never compromise on rigidity for a touring board.",
  },
  {
    q: 'Can you camp on a touring paddle board?',
    a: "Yes — boards like the Isle Pioneer Pro with ISLE-LINK accessories make multi-day camping practical. The key requirements are D-ring anchor points for dry bags and gear, sufficient weight capacity to carry body weight plus camping gear (tent, sleeping kit, food), and a stable enough deck to manage loading and unloading at camp. Not all touring boards are designed for this — purpose-built D-ring layouts and high weight capacities are the features to verify before planning a loaded overnight trip.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Touring Paddle Boards 2026 — Expert Ranked | PaddleBoardShop',
  description:
    'Expert picks for the best touring paddle boards in 2026. Ranked by rigidity, tracking, glide efficiency, and distance performance — with full reviews of Red Paddle Co, Isle, and iROCKER.',
  keywords: [
    'best touring paddle board',
    'touring SUP 2026',
    'long distance paddle board',
    'SUP touring board',
    'Red Paddle Co Sport review',
    'iROCKER Nautical review',
    'touring inflatable SUP',
    'best distance paddle board 2026',
  ],
  openGraph: {
    title: 'Best Touring Paddle Boards 2026 — Expert Ranked | PaddleBoardShop',
    description:
      'Ranked by rigidity, tracking, glide efficiency, and distance performance — with full reviews of Red Paddle Co, Isle, and iROCKER.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Touring Paddle Boards 2026 — Expert Ranked | PaddleBoardShop',
    description:
      'Ranked by rigidity, tracking, glide efficiency, and distance performance — with full reviews of Red Paddle Co, Isle, and iROCKER.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/touring-paddle-boards',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function TouringPaddleBoards() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Touring Paddle Boards 2026 — Expert Ranked',
    description:
      'Expert picks for the best touring paddle boards in 2026. Ranked by rigidity, tracking, glide efficiency, and distance performance.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/touring-paddle-boards',
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
        { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
        { name: 'Best Touring Paddle Boards' },
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
            style={{ background: 'rgba(20,184,166,0.05)' }}
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
                <li className="text-text-secondary" aria-current="page">Best Touring Boards</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Expert Ranked · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Touring{' '}
              <span className="gradient-text">Paddle Boards</span>{' '}
              2026
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Touring paddle boards are a specialized category where most guides
              get it wrong — recommending all-around boards with touring labels
              attached. This guide identifies the three boards actually built for
              distance, ranked by the metrics that matter: rigidity, hull efficiency,
              tracking, and real-world long-distance performance.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Rigidity-tested picks', 'Distance performance ranked', 'No paid placements', 'Updated May 2026'].map((m) => (
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
              Touring paddle boards are built around one core principle: efficiency
              over distance. Every specification decision — hull length, nose shape,
              rigidity, fin configuration — exists to reduce the energy cost of
              covering miles. A board that loses energy to flex, that wanders off
              course between corrective strokes, or that pushes water sideways
              rather than parting it cleanly is not a touring board regardless of
              what the marketing says.
            </p>
            <p>
              The three boards in this guide are all genuinely built for distance
              performance. The Red Paddle Co Sport 11&apos;3&quot; is the benchmark.
              The iROCKER Nautical 12&apos;6&quot; is the best value for pure
              distance. The Isle Pioneer Pro is the right choice when multi-day
              loaded touring is the use case.
            </p>
            <p>
              If you want the recommendations immediately,{' '}
              <a href="#quick-answer" className="article-link">
                jump to the top three picks
              </a>
              . If you are evaluating what separates a genuine touring board from
              an all-around board marketed as touring, the{' '}
              <a href="#buying-guide" className="article-link">
                buying guide below
              </a>{' '}
              covers the five criteria that define touring performance.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK PICKS
        ════════════════════════════════ */}
        <section id="quick-answer" aria-labelledby="quick-answer-heading" className="article-section">
          <div className="article-wide">
            {/* Snippet callout */}
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(20,184,166,0.2)' }}>
              <h2 id="quick-answer-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 3 Touring Paddle Boards for 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by rigidity, glide efficiency, tracking, and distance performance.
              </p>
              <ol className="space-y-3">
                {BOARDS.map(({ id, name, length, rank, headline, price, accentColor }) => (
                  <li key={id} className="flex items-center gap-3 text-sm">
                    <span className="font-extrabold text-xs shrink-0 w-14" style={{ color: accentColor }}>
                      {rank}
                    </span>
                    <span>
                      <strong className="text-text-primary">
                        {name} <span className="text-text-muted font-normal">{length}</span>
                      </strong>
                      {' — '}
                      <span className="text-text-secondary">{headline}</span>{' '}
                      <span className="text-text-muted">({price})</span>
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
                  id={`pick-card-touring-${id}`}
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
            BUYING GUIDE
        ════════════════════════════════ */}
        <section id="buying-guide" aria-labelledby="buying-guide-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-guide-heading" className="article-h2">
              What Makes a Genuine Touring Paddle Board
            </h2>
            <p>
              Most boards labeled &quot;touring&quot; are all-around boards with a
              longer length. These five criteria separate genuine touring
              performance from marketing language — in order of importance.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
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
            FULL REVIEWS
        ════════════════════════════════ */}
        <section id="product-reviews" aria-labelledby="reviews-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-heading" className="article-h2">
              The 3 Best Touring Paddle Boards for 2026
            </h2>
            <p>
              Full breakdowns of each board — what makes it a genuine touring
              performer, where it excels, and who it is best matched to.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* Review 1: Red Paddle Co Sport */}
            <article id="review-red-paddle-touring" aria-labelledby="review-red-paddle-touring-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full shrink-0">Best Overall</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#1 Pick</span>
              </div>
              <h3 id="review-red-paddle-touring-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Red Paddle Co Sport{' '}
                <span className="text-text-muted font-medium text-lg">11&apos;3&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-glacier-teal)' }}>
                Best Overall Touring SUP — ~$1,149
              </p>
              {BOARDS[0].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-glacier-teal)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[0].pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Cons</p>
                  <ul className="space-y-2">
                    {BOARDS[0].cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong> {BOARDS[0].bottomLine}
              </p>
              <a
                href={BOARDS[0].affiliateUrl}
                id="cta-red-paddle-touring"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Red Paddle Co Sport 11&apos;3&quot;"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 2: iROCKER Nautical */}
            <article id="review-irocker-nautical-touring" aria-labelledby="review-irocker-nautical-touring-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Best Distance</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#2 Pick</span>
              </div>
              <h3 id="review-irocker-nautical-touring-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                iROCKER Nautical{' '}
                <span className="text-text-muted font-medium text-lg">12&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Distance Touring Value — ~$749
              </p>
              {BOARDS[1].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[1].pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--color-sky-glow)' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Cons</p>
                  <ul className="space-y-2">
                    {BOARDS[1].cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong> {BOARDS[1].bottomLine}
              </p>
              <a
                href={BOARDS[1].affiliateUrl}
                id="cta-irocker-nautical-touring"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for iROCKER Nautical 12&apos;6&quot; on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 3: Isle Pioneer Pro */}
            <article id="review-isle-pioneer-pro-touring" aria-labelledby="review-isle-pioneer-pro-touring-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">Most Versatile</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#3 Pick</span>
              </div>
              <h3 id="review-isle-pioneer-pro-touring-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Isle Pioneer Pro{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Most Versatile Tourer — ~$999
              </p>
              {BOARDS[2].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-amber-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[2].pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--color-amber-glow)' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Cons</p>
                  <ul className="space-y-2">
                    {BOARDS[2].cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong> {BOARDS[2].bottomLine}
              </p>
              <a
                href={BOARDS[2].affiliateUrl}
                id="cta-isle-pioneer-pro-touring"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Isle Pioneer Pro"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

          </div>
        </section>

        {/* ════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="comparison" aria-labelledby="comparison-touring-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-touring-heading" className="article-h2">Side-by-Side Comparison</h2>
            <p>Key specs for all three touring boards at a glance. Click any &quot;Check Price&quot; link for current pricing.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Touring paddle board comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.90)', borderBottom: '1px solid rgba(20,184,166,0.2)' }}>
                      {['Board', 'Best For', 'Length', 'Rigidity', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      { name: "Red Paddle Co Sport", badge: 'Best Overall', badgeClass: 'badge-teal', length: "11'3\"", bestFor: 'Max performance', rigidity: '9.7/10', price: '~$1,149', affiliateUrl: '/go/red-paddle-co-sport', ctaId: 'table-red-paddle-touring' },
                      { name: 'iROCKER Nautical', badge: 'Best Distance', badgeClass: 'badge-sky', length: "12'6\"", bestFor: 'Distance value', rigidity: '8.8/10', price: '~$749', affiliateUrl: '/go/irocker-nautical-amazon', ctaId: 'table-irocker-nautical-touring' },
                      { name: 'Isle Pioneer Pro', badge: 'Most Versatile', badgeClass: 'badge-amber', length: "10'6\"", bestFor: 'Loaded touring', rigidity: '8.5/10', price: '~$999', affiliateUrl: '/go/isle-pioneer-pro', ctaId: 'table-isle-pioneer-pro-touring' },
                    ].map((row) => (
                      <tr key={row.name} className="table-row-hover">
                        <td className="px-5 py-5 min-w-[200px]">
                          <span className={`${row.badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1.5`}>{row.badge}</span>
                          <p className="font-bold text-text-primary text-sm leading-tight">{row.name}</p>
                          <p className="text-text-muted text-xs">{row.length}</p>
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs">{row.bestFor}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.length}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.rigidity}</td>
                        <td className="px-5 py-5 font-bold text-text-primary text-sm">{row.price}</td>
                        <td className="px-5 py-5">
                          <a href={row.affiliateUrl} id={row.ctaId} target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label={`Check latest price for ${row.name}`}>
                            Check Price <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            COMMON MISTAKES
        ════════════════════════════════ */}
        <section id="common-mistakes" aria-labelledby="mistakes-touring-heading" className="article-section">
          <div className="article-body">
            <h2 id="mistakes-touring-heading" className="article-h2">Common Touring Board Mistakes to Avoid</h2>
            <p>
              Touring is a specialized use case where the wrong board choice becomes
              obvious immediately. These are the most common errors buyers make.
            </p>
            <div className="space-y-5 mt-8">
              {[
                {
                  title: 'Buying an All-Around Board Labeled as Touring',
                  body: "If a board is 32 inches wide, has a rounded nose, and a tri-fin setup identical to its all-around sibling, it is an all-around board regardless of the name on the deck pad. Genuine touring boards have narrower widths (28-31\"), pointed noses, and fin configurations optimized for tracking over maneuverability.",
                },
                {
                  title: 'Ignoring Rigidity Ratings',
                  body: 'Rigidity is the most important touring metric that most buyers never check. A board rated 7/10 on rigidity loses measurable energy to flex with every stroke — that cost compounds over 10 miles. Ask for or research rigidity ratings before purchasing any inflatable touring board.',
                },
                {
                  title: 'Using an All-Around Aluminum Paddle on a Touring Board',
                  body: "A carbon fiber touring board paired with a heavy aluminum paddle is like putting cheap tires on a sports car. The paddle is half the system. Carbon fiber paddles weigh 40-60% less than aluminum, reduce swing weight fatigue significantly, and make a meaningful difference over multi-mile sessions. Budget for a quality paddle alongside the board.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} aria-hidden="true" />
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
        <section id="faq" aria-labelledby="faq-touring-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-touring-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-touring" aria-labelledby="related-guides-touring-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-touring-heading" className="article-h2">Related Guides</h2>
            <p>Dig deeper into the decisions that matter most for serious paddlers.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/hard-vs-inflatable-paddle-board', id: 'link-hard-vs-inflatable-from-touring', title: 'Hard vs Inflatable Paddle Board — Full Comparison 2026', desc: 'When does a rigid hardboard outperform the best inflatable? Distance and performance compared.' },
                { href: '/isle-vs-bote-vs-red-paddle', id: 'link-brand-compare-from-touring', title: 'Isle vs BOTE vs Red Paddle Co — Brand Comparison 2026', desc: 'Which brand wins on construction quality, rigidity, and long-term durability?' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-touring', title: 'What Size Paddle Board Do I Need?', desc: 'Full sizing guide — how length, width, and volume interact for different paddler types and use cases.' },
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

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Package,
  Scale,
  Star,
  Wrench,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Board data ──────────────────────────────────────────────── */
const BOARDS = [
  {
    id: 'irocker-cruiser',
    name: 'iROCKER Cruiser',
    length: "10'6\"",
    rank: '#1 Pick',
    badge: 'Best Overall Under $500',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/irocker-cruiser-amazon',
    headline: 'Best Overall Under $500',
    price: '~$399',
    summary:
      'The strongest all-around board under $500. iROCKER builds mid-range boards with genuinely premium-adjacent construction — the Cruiser is the best example of what you can get in this price tier.',
    description: [
      'iROCKER is a legitimate mid-range brand — not a budget label rebadging factory boards. The Cruiser 10\'6" is their entry point into premium territory, and it shows in the construction quality. The board uses military-grade PVC and a high-density drop-stitch core that holds pressure better than most boards in this price range.',
      'At 33 inches wide and 6 inches thick, the Cruiser provides genuine stability for recreational paddling. The complete kit includes a high-volume pump, adjustable carbon fiber-blend paddle, coil leash, waterproof phone case, and carry backpack — a better kit than most boards at this price include separately.',
      'The honest caveat: iROCKER sits below BOTE and Isle Pioneer in build quality. Expect 3–5 years of regular use rather than 7–10. The pressure retention is solid but not at the level of AeroULTRA or MSL Fusion construction. For paddlers who will use the sport a season or two before deciding whether to invest in a premium board, the Cruiser is the right buy.',
    ],
    pros: [
      'Genuine mid-range build quality — not a rebadged budget board',
      'Complete kit included — pump, paddle, bag, leash, phone case',
      '33" wide platform is legitimately stable for recreation',
      '300 lb weight capacity provides adequate headroom for most paddlers',
    ],
    cons: [
      'Build quality below BOTE and Isle at the premium tier',
      'Pressure retention and rigidity below 6/10 vs 8–9/10 at premium level',
    ],
    bottomLine:
      'The iROCKER Cruiser is the best answer when the budget is firm at ~$400. Solid construction, complete kit, and legitimate brand support — the strongest value at this price.',
  },
  {
    id: 'roc-sup',
    name: 'ROC Inflatable SUP',
    length: "10'6\"",
    rank: '#2 Pick',
    badge: 'Best Value',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/roc-sup-amazon',
    headline: 'Best Value — Most Reviews',
    price: '~$299',
    summary:
      'The most reviewed paddle board on Amazon. ROC SUPs consistently earn strong ratings across a massive review base — which means real field data on durability and calm-water performance.',
    description: [
      'The ROC Inflatable SUP earns its position based on one metric above all others: review volume. With tens of thousands of verified reviews, it has more real-world durability and performance data behind it than boards from brands ten times its price. That review signal is meaningful — it means the board performs adequately for the majority of casual, calm-water paddlers who buy it.',
      'At ~$299, the ROC includes a complete kit: pump, paddle, fins, leash, and carry bag. The board is 10\'6" long and 32" wide — adequate dimensions for flatwater stability. Construction quality is single-layer PVC, which limits pressure retention and rigidity compared to premium boards. Set expectations accordingly.',
      'The ROC is not a board for choppy water, wind, or regular all-season use. It is a calm-water, occasional-use board with broad market validation. For buyers who want minimal financial commitment with the comfort of knowing others have tried it successfully, it is the right pick.',
    ],
    pros: [
      'Widest review base in the budget category — most real-world data available',
      'Complete kit included at a competitive price point',
      'Adequate dimensions for calm flatwater paddling',
      'Strong brand support relative to its price tier',
    ],
    cons: [
      'Single-layer PVC limits pressure retention and rigidity',
      'Not suitable for open water, wind, or rough conditions',
    ],
    bottomLine:
      'The ROC is the right choice if real-world validation from thousands of paddlers matters to your purchase decision. Calm-water capable with the market data to back it up.',
  },
  {
    id: 'serenelife-freeflow',
    name: 'SereneLife Free Flow',
    length: "10'0\"",
    rank: '#3 Pick',
    badge: 'Best Kit Under $300',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/serenelife-freeflow-amazon',
    headline: 'Best Complete Kit Under $300',
    price: '~$269',
    summary:
      'The best all-in-one kit under $300. SereneLife includes everything you need to get on the water immediately — and the kit quality punches above its price.',
    description: [
      'The SereneLife Free Flow is optimized for one thing: getting everything you need in a single box for the lowest total outlay. At ~$269, it includes a paddle, pump, fins, ankle leash, and carry backpack — and unlike some competitors at this price, the included accessories are functional rather than decorative.',
      'The paddle is aluminum-alloy rather than fiberglass or carbon — heavier and less efficient, but adequate for beginner use. The pump inflates the board fully in about 10–15 minutes with moderate effort. At 10\'0" long and 30" wide, the board is slightly shorter and narrower than the ROC — which affects initial stability but makes it marginally more maneuverable.',
      'Build quality is entry-level. Single-layer PVC with adequate seam bonding for calm-water use. This is a one-to-two season board for recreational use only. It earns its place in this guide because the complete kit represents genuinely good value per dollar for first-time buyers who want to minimize total outlay.',
    ],
    pros: [
      'Best complete kit value under $300 — everything included and functional',
      'Pump inflates fully in ~10–15 minutes — fast setup',
      'Lightweight and easy for solo carry and transport',
      'Good for still water paddling as a trial board',
    ],
    cons: [
      'Narrower at 30" — less stable than wider boards for beginners',
      'Single-layer PVC build limits lifespan under regular use',
    ],
    bottomLine:
      'The SereneLife Free Flow is the best choice when you want to minimize total spend and need everything included. For calm, protected water with clear trial-period intent.',
  },
  {
    id: 'funwater-sup',
    name: 'FunWater Inflatable SUP',
    length: "10'8\"",
    rank: '#4 Pick',
    badge: 'Budget Entry',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/funwater-sup-amazon',
    headline: 'Lowest Entry Point',
    price: '~$149',
    summary:
      'The lowest-cost board in this guide. Adequate for calm-water trial use — designed for paddlers who want the absolute minimum financial commitment before deciding on the sport.',
    description: [
      'The FunWater is the right recommendation for one buyer type: someone who genuinely does not know if they will continue paddle boarding and wants to test the sport with the absolute minimum financial risk. At ~$149, the FunWater removes the cost barrier entirely.',
      'On calm, protected water — a still lake, a slow river, a sheltered cove — it provides enough stability and buoyancy to stand, balance, and develop the very basics of paddle technique. It inflates, packs down, and carries adequately for occasional light use.',
      'Be direct about expectations: this is not a board to keep paddling through a full season of regular use. Pressure retention drops noticeably over time, the platform softens under load, and the build quality shows wear faster than boards at 2x the price. Use it to decide if you love the sport. If you do, upgrade to the iROCKER Cruiser or a premium board within a season.',
    ],
    pros: [
      'Lowest entry cost — removes all financial barrier to trying the sport',
      'Adequate for calm-water introductory sessions',
      'Lightweight and easy to pack, carry, and store',
    ],
    cons: [
      'Not suitable for open water, wind, or rough conditions',
      'Pressure retention drops faster than mid-range or premium boards',
      'Softer platform makes technique development harder over time',
      'Expected lifespan under regular use: 1–2 seasons',
    ],
    bottomLine:
      'The FunWater is a trial purchase. If you know you will continue paddle boarding, start with the iROCKER Cruiser — the FunWater will cost more in the long run if you replace it after a season.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Wrench,
    title: 'Construction Quality',
    body: 'Even at budget prices, look for military-grade PVC and high-density drop-stitch core. Single-layer boards lose pressure retention faster and feel softer underfoot within months of regular use. The iROCKER Cruiser is the only board in this guide with genuinely mid-range construction quality.',
  },
  {
    Icon: Package,
    title: 'Complete Kit Value',
    body: 'A pump, paddle, carry bag, and leash should be included. On budget boards, kit quality varies significantly — check that the included paddle is aluminum-alloy or better, and that the pump inflates to the board\'s recommended PSI (typically 12–15 PSI). Factor the total cost if kit items must be purchased separately.',
  },
  {
    Icon: Scale,
    title: 'Weight Capacity',
    body: 'Even budget boards should offer 250+ lbs of rated capacity. Operating at 60–70% of rated capacity creates the most stable platform — so if you weigh 200 lbs, look for at least a 280–300 lb rated board. The iROCKER Cruiser (300 lbs) leads this category in the budget tier.',
  },
  {
    Icon: Star,
    title: 'Customer Review Volume',
    body: 'More reviews mean more field data on durability, leaks, and real-world performance. The ROC SUP has tens of thousands of reviews — more real-world validation than most boards at any price. This matters on budget boards where quality control varies more by production run.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best budget paddle board?',
    a: "iROCKER Cruiser is the top pick under $500 in 2026. It combines mid-range build quality — military-grade PVC, high-density drop-stitch core — with a complete kit and genuine brand support. For buyers with a firm budget under $300, the ROC SUP offers the most real-world validation with tens of thousands of reviews.",
  },
  {
    q: 'Can you get a good paddle board for under $500?',
    a: "Yes — but with realistic expectations. Under $500, you get adequate boards for calm, protected water paddling. What you give up versus a premium board ($800–$1,150): rigidity (6–7/10 vs 9–9.7/10), pressure retention over time, and expected lifespan (2–5 years vs 7–10+). The iROCKER Cruiser at ~$399 is the exception — it approaches mid-range quality at a budget price.",
  },
  {
    q: 'Is iROCKER a good paddle board brand?',
    a: "Yes — iROCKER produces some of the best mid-range inflatables in the market. They are not a budget brand; they are positioned between premium boards (BOTE, Isle, Red Paddle Co) and generic budget options. iROCKER uses military-grade PVC construction, offers genuine customer support, and backs boards with multi-year warranties. The Cruiser is their most accessible model.",
  },
  {
    q: 'What is the most popular paddle board on Amazon?',
    a: "ROC Inflatable SUP consistently ranks as one of the most reviewed paddle boards on Amazon, with tens of thousands of verified reviews across its product line. That review volume is meaningful — it represents more real-world field data than virtually any other board at its price point.",
  },
  {
    q: 'When should I upgrade from a budget board?',
    a: "If you paddle more than once a week through a full season, upgrade. Budget boards (under $300) are designed for occasional calm-water use — pressure retention drops noticeably with regular use, and the platform softness becomes harder to balance on over time. After one season of regular paddling, the iROCKER Cruiser or a premium board like the BOTE Breeze Aero becomes the right investment.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Boards Under $500 (2026 Guide) | PaddleBoardShop',
  description:
    'The best paddle boards under $500 in 2026. Expert picks from iROCKER, ROC, SereneLife, and FunWater — with real stability ratings and honest reviews of what budget buys you.',
  keywords: [
    'best paddle board under 500',
    'budget paddle board 2026',
    'cheap paddle board',
    'best paddle board under $500',
    'iROCKER Cruiser review',
    'ROC paddle board review',
    'affordable inflatable SUP 2026',
  ],
  openGraph: {
    title: 'Best Paddle Boards Under $500 (2026 Guide) | PaddleBoardShop',
    description:
      'Expert picks from iROCKER, ROC, SereneLife, and FunWater — with real stability ratings and honest reviews of what budget buys you.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Paddle Boards Under $500 (2026 Guide)',
    description: 'The best budget paddle boards in 2026 with honest reviews of what under $500 actually buys you.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/best-paddle-boards-under-500',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BestPaddleBoardsUnder500Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Paddle Boards Under $500 (2026 Guide)',
    description:
      'Expert picks for the best budget paddle boards under $500 in 2026, with honest reviews of iROCKER, ROC, SereneLife, and FunWater.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/best-paddle-boards-under-500',
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
        { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
        { name: 'Best Paddle Boards Under $500' },
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
                <li className="text-text-secondary" aria-current="page">Best Under $500</li>
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
              Budget Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Boards{' '}
              <span className="gradient-text">Under $500</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Under $500 buys you a real paddle board — with real compromises. This
              guide picks the four best options in the budget tier and is honest about
              what you give up versus a premium board, so you can make the right call
              for your situation.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Honest tradeoff analysis', 'Real stability ratings', 'No paid placements', 'Updated May 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════
            HONEST FRAMING
        ════════════════════════════════ */}
        <section className="article-section" aria-label="Honest framing">
          <div className="article-body">
            <p className="article-lead">
              Budget paddle boards are real. They paddle, they float, and they serve
              their purpose on calm water. What they are not is premium.
            </p>
            <p>
              Under $500 means single-layer PVC on most boards, lower pressure
              retention over time, softer platforms under load, and shorter expected
              lifespans. The iROCKER Cruiser (~$399) is the exception — it approaches
              mid-range quality at a budget price and is the only board in this tier we
              recommend for paddlers who plan to continue the sport long-term.
            </p>
            <p>
              If you already know you love paddle boarding, or if you plan to use the
              board more than once a week through a full season,{' '}
              <Link href="/best-inflatable-paddle-boards-under-1000" className="article-link">
                budget an additional $300–$600 for a premium board
              </Link>{' '}
              — BOTE Breeze Aero (~$849), Isle Pioneer (~$749), or iROCKER at their
              higher tier. The total cost difference is smaller than replacing a budget
              board after one season.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK PICKS
        ════════════════════════════════ */}
        <section id="quick-picks" aria-labelledby="quick-picks-budget-heading" className="article-section">
          <div className="article-wide">
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <h2 id="quick-picks-budget-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 4 Budget Paddle Boards for 2026 (Under $500)
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by real-world value — construction, kit completeness, and capacity.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BOARDS.map(({ id, name, length, rank, badge, badgeClass, summary, price, affiliateUrl, headline, accentColor }) => (
                <a
                  key={id}
                  href={affiliateUrl}
                  id={`pick-card-budget-${id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="pick-card"
                  aria-label={`${name} — ${price} — Check latest price on Amazon`}
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
                        <span>Check Latest Price on Amazon</span>
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
            BUYING CRITERIA
        ════════════════════════════════ */}
        <section id="buying-criteria" aria-labelledby="buying-criteria-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-criteria-heading" className="article-h2">
              What to Look For in a Budget Paddle Board
            </h2>
            <p>
              Four criteria separate the better budget boards from the ones that
              disappoint within a season. Check all four before buying.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
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
            FULL REVIEWS
        ════════════════════════════════ */}
        <section id="full-reviews" aria-labelledby="reviews-budget-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-budget-heading" className="article-h2">
              Full Reviews: Best Paddle Boards Under $500
            </h2>
            <p>
              Detailed breakdown of each board — honest about strengths, limitations,
              and the right buyer for each.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {BOARDS.map((board, index) => (
              <article key={board.id} id={`review-budget-${board.id}`} aria-labelledby={`review-budget-${board.id}-heading`}>
                <div className="flex items-start gap-3 mb-4">
                  <span className={`${board.badgeClass} text-xs font-bold px-3 py-1 rounded-full shrink-0`}>{board.badge}</span>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">{board.rank}</span>
                </div>
                <h3 id={`review-budget-${board.id}-heading`} className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                  {board.name}{' '}
                  <span className="text-text-muted font-medium text-lg">{board.length}</span>
                </h3>
                <p className="text-sm font-bold mb-4" style={{ color: board.accentColor }}>
                  {board.headline} — {board.price}
                </p>
                {board.description.map((para, i) => <p key={i}>{para}</p>)}
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
                  id={`cta-budget-${board.id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="table-row-cta"
                  aria-label={`Check latest price for ${board.name} on Amazon`}
                >
                  Check Latest Price on Amazon
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}

          </div>
        </section>

        {/* ════════════════════════════════
            UPGRADE RECOMMENDATION
        ════════════════════════════════ */}
        <section id="upgrade-note" aria-labelledby="upgrade-note-heading" className="article-section">
          <div className="article-body">
            <div className="glass-card p-7" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <h2 id="upgrade-note-heading" className="text-base font-extrabold text-text-primary mb-3">
                When to Upgrade Beyond $500
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                If you paddle once a week or more through a full season, the iROCKER Cruiser (~$399)
                is the only budget board in this guide that will hold up. Budget boards under $300
                are one-to-two season boards for occasional calm-water use.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                Paddlers who commit to the sport consistently see better long-term value from a
                premium board. The BOTE Breeze Aero (~$849) lasts 7–10 years with better pressure
                retention, a more rigid platform, and an accessory system that grows with you.
                The total cost per season over five years is lower than replacing a budget board twice.
              </p>
              <Link
                href="/best-inflatable-paddle-boards-under-1000"
                id="link-upgrade-from-budget"
                className="table-row-cta"
                style={{ textDecoration: 'none' }}
              >
                View Best Boards Under $1,000 →
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-budget-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-budget-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-budget" aria-labelledby="related-guides-budget-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-budget-heading" className="article-h2">Related Guides</h2>
            <p>Ready to go further? These guides cover premium boards, beginner picks, and everything in between.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'link-best-inflatable-from-budget', title: 'Best Inflatable Paddle Boards (2026)', desc: 'The complete guide to all price ranges — from budget entry to premium touring boards.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-budget', title: 'Best Boards Under $1,000 (2026)', desc: 'Step up your budget? BOTE, Isle, and ROC premium picks under $1,000.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-budget', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Stability-focused picks with buying criteria for first-time paddlers.' },
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

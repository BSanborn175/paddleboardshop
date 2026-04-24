import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  ArrowLeftRight,
  Scale,
  Anchor,
  Shield,
  BookOpen,
  ExternalLink,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/* ── Board data ──────────────────────────────────────────────── */
const BOARDS = [
  {
    id: 'bote',
    name: 'BOTE Breeze Aero',
    length: "10'8\"",
    rank: '#1 Pick',
    badge: 'Best Overall',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/bote-breeze-aero-amazon',
    headline: 'Best Overall Fishing Paddle Board',
    price: '~$899',
    summary:
      'The most balanced fishing SUP in this guide. Stable enough for casting, durable across varied conditions, and MAGNEPOD-compatible for clean gear attachment without deck clutter.',
    description: [
      'The BOTE Breeze Aero earns the top fishing pick for the same reason it earns the top all-around pick — it does more things well than anything else at this price. The 33-inch wide platform is stable enough for standing casts and controlled reeling, even when the board is loaded with a tackle bag, cooler, and a fish finder mount.',
      'The MAGNEPOD magnetic accessory system is a meaningful advantage for fishing setups. It allows you to mount gear cleanly to the deck without looping bungee cords around accessories that shift under casting movement. Attach a cooler, a dry bag, or a rod holder and it stays put.',
      'Durable AeroULTRA construction handles repeated contact with gear, paddles, and surfaces without the surface damage that lower-cost boards show quickly. For a board used hard on the water, that durability matters over a full season.',
    ],
    pros: [
      'MAGNEPOD system provides clean, secure mounting for fishing gear',
      '33-inch wide platform stays stable under casting and reeling movements',
      'AeroULTRA construction handles repeated hard use without surface damage',
      'All-around shape performs on lakes, rivers, and calm coastal water',
    ],
    cons: [
      '300 lb weight capacity is lower than some dedicated fishing boards',
      'MAGNEPOD fishing accessories are sold separately',
    ],
    bottomLine:
      'The BOTE Breeze Aero is the most balanced fishing paddle board available at this price. Its MAGNEPOD system, strength, and stability make it the benchmark in the category.',
  },
  {
    id: 'isle',
    name: 'Isle Pioneer Pro',
    length: "10'6\"",
    rank: '#2 Pick',
    badge: 'Best for Gear',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-pioneer-pro-amazon',
    headline: 'Best for Gear-Heavy Setups',
    price: '~$999',
    summary:
      'The Isle Pioneer Pro handles more gear than any other board in this guide. The 335 lb weight capacity, ISLE-LINK modular system, and near-hardboard rigidity make it the best choice for anglers who bring everything.',
    description: [
      'The Isle Pioneer Pro is designed for paddlers who want the board to keep up with their gear load, not the other way around. The 335 lb weight capacity — the highest of any board in this guide — accommodates a full fishing setup: kayak seat, tackle storage, dry bags, and a fish finder mount without the deck sinking into the water.',
      'The ISLE-LINK rail system enables flexible gear configuration without permanent modifications. Attach a kayak seat for long sessions, rod holders for hands-free positioning, or a cooler mount for extended trips — and reconfigure in minutes when you want to paddle without gear.',
      'Rigidity at 9.4 out of 10 on our field scale means this board behaves closer to a hardboard than most inflatables. A rigid platform reduces the micro-flex that makes casting from a SUP unstable, which is a practical advantage during a full fishing session.',
    ],
    pros: [
      '335 lb weight capacity handles full fishing gear loads without deck sinking',
      'ISLE-LINK system allows flexible, removable gear configuration',
      '9.4/10 rigidity score delivers hardboard-like stability',
      'D-rings and bungee storage included for immediate rigging',
    ],
    cons: [
      'At 18 lbs, slightly heavier than the BOTE Breeze Aero',
      'At the upper edge of the sub-$1,000 price range',
    ],
    bottomLine:
      'Choose the Isle Pioneer Pro if your fishing setups are gear-heavy. The weight capacity, ISLE-LINK system, and rigidity make it the most capable fully-rigged fishing SUP in this guide.',
  },
  {
    id: 'funwater',
    name: 'FunWater Inflatable SUP',
    length: "10'8\"",
    rank: '#3 Pick',
    badge: 'Best Budget',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/funwater-sup-amazon',
    headline: 'Best Budget Entry for Fishing',
    price: '~$149',
    summary:
      'The lowest cost entry point in this guide. Adequate stability for calm-water fishing, easy to transport, and practical for occasional use — but without the premium features of BOTE or Isle.',
    description: [
      'The FunWater inflatable SUP is the right answer for one specific buyer: someone who wants to try paddle board fishing before committing to a premium setup. At its price point, it removes the financial risk of a sport you may or may not continue.',
      'On calm, protected water — a lake, a slow river, a sheltered bay — the FunWater provides adequate stability for standing casts. It is lightweight, packs down into a manageable carry bag, and inflates quickly. Those fundamentals are what matter for occasional fishing use.',
      'It is not a board for open water, gear-heavy setups, or regular hard use. Build quality is below BOTE and Isle in materials and finish. As an introductory option for calm-water fishing, it serves its narrowly defined purpose.',
    ],
    pros: [
      'Lowest entry price in the fishing category by a significant margin',
      'Lightweight and straightforward to transport and store',
      'Adequate stability for calm-water, light-gear fishing',
    ],
    cons: [
      'Not suitable for open water, rough conditions, or heavy gear',
      'Limited accessory mounting options compared to BOTE and Isle',
      'Build quality and material finish below premium options',
      'Not recommended for regular hard use or multi-season longevity',
    ],
    bottomLine:
      'The FunWater is a sensible first step for testing the sport before investing in a premium board. Keep conditions calm and gear light.',
  },
] as const;

/* ── Accessories ─────────────────────────────────────────────── */
const ACCESSORIES = [
  {
    name: 'YETI Sidekick Dry 6L',
    affiliateUrl: '/go/yeti-sidekick-amazon',
    ctaId: 'cta-yeti-fishing',
    description:
      'A reliable dry storage solution for protecting electronics, tackle, and valuables. Fully waterproof, stays secure on deck, and the 6-liter capacity handles a full day of essentials without adding bulk.',
  },
  {
    name: 'OutdoorMaster Vortex Pro Electric Pump',
    affiliateUrl: '/go/outdoormaster-vortex-amazon',
    ctaId: 'cta-pump-fishing',
    description:
      'An electric pump removes the effort of manual inflation before a fishing session. The Vortex Pro reaches target PSI automatically and shuts off — faster startup, no wasted energy before you even reach the water.',
  },
  {
    name: 'Carbon Fiber SUP Paddle',
    affiliateUrl: '/go/carbon-fiber-sup-paddle',
    ctaId: 'cta-paddle-fishing',
    description:
      'A lighter carbon fiber paddle reduces arm fatigue on longer sessions and improves stroke efficiency. The weight difference between an aluminum and carbon paddle becomes noticeable within the first mile — worth the upgrade for regular fishing use.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: ArrowLeftRight,
    title: 'Stability: Width and Deck Shape',
    body: (
      <>
        A fishing SUP should prioritize stability above all other
        characteristics. Look for a board at least{' '}
        <strong>33 inches wide</strong> with a flat, wide deck. Width provides
        initial stability when standing to cast; a flat deck ensures even
        weight distribution under a loaded gear setup.
      </>
    ),
  },
  {
    Icon: Scale,
    title: 'Weight Capacity',
    body: (
      <>
        Fishing gear adds weight faster than most paddlers expect. Tackle bags,
        coolers, dry storage, and a rod holder can add 30–60 lbs before you
        board. Aim for a capacity of{' '}
        <strong>300 lbs or higher</strong> — more if you plan multi-item setups
        or tend to fish with a partner rotating on the board.
      </>
    ),
  },
  {
    Icon: Anchor,
    title: 'Rigging and Mounting Options',
    body: (
      <>
        A bare deck limits your fishing setup significantly. Look for boards
        with <strong>D-rings</strong> for kayak seat or gear attachment,{' '}
        <strong>bungee storage</strong> for tackle and dry bags, and ideally an{' '}
        <strong>accessory mounting system</strong> like MAGNEPOD or ISLE-LINK
        for clean, configurable setups.
      </>
    ),
  },
  {
    Icon: Shield,
    title: 'Deck Padding and Durability',
    body: (
      <>
        Fishing sessions involve more deck contact than typical paddling — gear
        slides, tackle drops, and repeated crouching. Look for{' '}
        <strong>full or extended EVA foam deck padding</strong> for grip and
        comfort, and construction materials that resist surface scuffing and
        pressure damage over repeated heavy use.
      </>
    ),
  },
] as const;

/* ── FAQs ────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best paddle board for fishing?',
    a: 'The BOTE Breeze Aero is the best overall fishing paddle board in 2026, combining a stable 33-inch platform, MAGNEPOD accessory compatibility, and durable AeroULTRA construction. For gear-heavy setups requiring maximum capacity and modular rigging, the Isle Pioneer Pro is the stronger choice.',
  },
  {
    q: 'What width paddle board do I need for fishing?',
    a: 'For fishing, look for a paddle board at least 33 inches wide. Width is the primary driver of primary stability — the initial resistance to tipping when you shift weight during a cast or reel. A 32-inch board can work for light fishing in calm conditions, but 33 inches or wider provides meaningful extra confidence.',
  },
  {
    q: 'Can you fish from an inflatable paddle board?',
    a: 'Yes — inflatable paddle boards are well-suited for fishing in calm to moderate conditions. Premium inflatables like the BOTE Breeze Aero and Isle Pioneer Pro, inflated to 12–15 PSI, deliver rigidity close to hardboards and are stable enough for standing casts. Their portability also makes it easier to access spots inaccessible to kayaks and boats.',
  },
  {
    q: 'What accessories do I need for paddle board fishing?',
    a: 'Start with a dry storage bag for electronics and valuables (the YETI Sidekick Dry 6L is our top pick), an electric pump for quick inflation, and a carbon fiber paddle to reduce fatigue on longer sessions. From there, rod holders, a kayak seat for long waits, and a leash for safety are the most useful additions.',
  },
  {
    q: 'How do you stay stable on a paddle board while fishing?',
    a: "Stability on a fishing SUP comes from board selection, inflation pressure, and stance. Choose a board at least 33 inches wide, inflate to the manufacturer's maximum recommended PSI, and keep your feet shoulder-width apart on the center of the board. Crouch or kneel if conditions get choppy — there is no penalty for adjusting stance when it keeps you on the board.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Best Paddle Boards for Fishing (2026 Buyer's Guide) | PaddleBoardShop",
  description:
    "Find the best paddle boards for fishing in 2026. Expert picks from BOTE, Isle, and FunWater — with stability ratings, gear compatibility, and accessory recommendations.",
  keywords: [
    'best paddle boards for fishing',
    'fishing paddle board 2026',
    'SUP fishing board',
    'inflatable fishing paddle board',
    'BOTE Breeze Aero fishing',
    'Isle Pioneer Pro fishing review',
    'best SUP for fishing',
    'fishing stand up paddle board',
  ],
  openGraph: {
    title:
      "Best Paddle Boards for Fishing (2026 Buyer's Guide) | PaddleBoardShop",
    description:
      "Top fishing SUP picks with stability ratings, gear compatibility, and accessory recommendations for 2026.",
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: {
    canonical: '/best-paddle-boards-for-fishing',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function FishingGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best Paddle Boards for Fishing (2026 Buyer's Guide)",
    description:
      "Expert-tested fishing paddle board picks for 2026, with stability ratings, rigging comparisons, gear compatibility, and essential accessory recommendations.",
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-22',
    dateModified: '2026-04-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://paddleboardshop.com/best-paddle-boards-for-fishing',
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

      {/* ── JSON-LD structured data ───────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>

        {/* ════════════════════════════════════════════════════
            ARTICLE HEADER
        ════════════════════════════════════════════════════ */}
        <header
          className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Ambient orb */}
          <div
            className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(56,189,248,0.06)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li>
                  <Link
                    href="/"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-glacier-teal)' }}
                  >
                    PaddleBoardShop
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li>
                  <Link
                    href="/guides"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-glacier-teal)' }}
                  >
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">
                  Best Boards for Fishing
                </li>
              </ol>
            </nav>

            {/* Category pill */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(56,189,248,0.1)',
                border: '1px solid rgba(56,189,248,0.25)',
                color: 'var(--color-sky-glow)',
              }}
            >
              Buyer&apos;s Guide · Updated April 2026
            </span>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Boards{' '}
              <span className="gradient-text">for Fishing</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Paddle board fishing delivers access to water that kayaks and
              boats cannot reach, with a quiet approach that does not disturb
              the fish. The right board makes the difference between a stable,
              productive session and a frustrating one. Here are the top picks
              for 2026.
            </p>

            {/* Article meta */}
            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {[
                'Independent reviews',
                'Real-world stability testing',
                'No paid placements',
                'Updated April 2026',
              ].map((m) => (
                <span key={m} className="font-medium">
                  &#x2713; {m}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════════════════
            INTRODUCTION
        ════════════════════════════════════════════════════ */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              Paddle board fishing continues to grow because it offers something
              traditional fishing boats cannot: access to shallow flats, quiet
              casting positions, and the flexibility to move without disturbing
              the water around you.
            </p>
            <p>
              Not all paddle boards are suitable for fishing, however.
              Stability, weight capacity, and the ability to carry and mount
              gear are critical factors that most all-around reviews ignore. A
              board that works well for yoga or recreational paddling can be an
              unstable, undersized platform the moment you add a tackle bag,
              sit in a kayak seat, and cast into a crosswind.
            </p>
            <p>
              This guide focuses on the boards that genuinely work for fishing —
              tested for stability under gear load, evaluated for rigging and
              mounting options, and selected for durability across real
              on-water use. For budget-conscious buyers, see our{' '}
              <Link
                href="/best-inflatable-paddle-boards-under-1000"
                className="article-link"
              >
                best inflatable paddle boards under $1,000
              </Link>{' '}
              guide, which covers several of the same boards at every price
              point.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            QUICK ANSWER — featured-snippet optimized
        ════════════════════════════════════════════════════ */}
        <section
          id="quick-answer"
          aria-labelledby="quick-answer-heading"
          className="article-section"
        >
          <div className="article-wide">
            {/* Snippet-optimized callout */}
            <div
              className="glass-card p-7 mb-12"
              style={{ borderColor: 'rgba(56,189,248,0.2)' }}
            >
              <h2
                id="quick-answer-heading"
                className="text-xl font-extrabold text-text-primary mb-2"
              >
                Top 3 Paddle Boards for Fishing in 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by fishing suitability — stability, gear capacity, and
                rigging options.
              </p>
              <ol className="space-y-3">
                {BOARDS.map(({ id, name, length, rank, headline, price, accentColor }) => (
                  <li key={id} className="flex items-center gap-3 text-sm">
                    <span
                      className="font-extrabold text-xs shrink-0 w-14"
                      style={{ color: accentColor }}
                    >
                      {rank}
                    </span>
                    <span>
                      <strong className="text-text-primary">
                        {name}{' '}
                        <span className="text-text-muted font-normal">
                          {length}
                        </span>
                      </strong>
                      {' — '}
                      <span className="text-text-secondary">{headline}</span>
                      {' '}
                      <span className="text-text-muted">({price})</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick-pick cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BOARDS.map(
                ({ id, name, length, rank, badge, badgeClass, summary, price, affiliateUrl, headline, accentColor }) => (
                  <a
                    key={id}
                    href={affiliateUrl}
                    id={`pick-card-fishing-${id}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="pick-card"
                    aria-label={`${name} — ${price} — Check latest price on Amazon`}
                  >
                    <div className="p-6 flex flex-col gap-4">
                      {/* Rank + badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs font-bold"
                          style={{ color: accentColor }}
                        >
                          {rank}
                        </span>
                        <span
                          className={`${badgeClass} text-xs font-bold px-2.5 py-1 rounded-full`}
                        >
                          {badge}
                        </span>
                      </div>

                      {/* Name + headline */}
                      <div>
                        <h3 className="text-base font-extrabold text-text-primary leading-tight">
                          {name}{' '}
                          <span className="text-text-muted font-medium text-sm">
                            {length}
                          </span>
                        </h3>
                        <p
                          className="text-xs font-semibold mt-1"
                          style={{ color: accentColor }}
                        >
                          {headline}
                        </p>
                      </div>

                      <p className="text-xs text-text-secondary leading-relaxed">
                        {summary}
                      </p>

                      {/* Price + CTA */}
                      <div className="mt-auto">
                        <p className="text-2xl font-extrabold text-text-primary mb-3">
                          {price}
                        </p>
                        <div className="pick-cta text-sm">
                          <span>Check Latest Price on Amazon</span>
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <p className="text-[10px] text-text-muted text-center mt-3">
                          Updated Apr 2026 · Independent Review
                        </p>
                      </div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            WHAT MAKES A GOOD FISHING PADDLE BOARD
        ════════════════════════════════════════════════════ */}
        <section
          id="buying-guide"
          aria-labelledby="buying-guide-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="buying-guide-heading" className="article-h2">
              What Makes a Good Fishing Paddle Board
            </h2>
            <p>
              Fishing from a paddle board places different demands on a board
              than casual paddling. Here are the four specifications that
              separate a functional fishing SUP from one that will frustrate you
              on the water.
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
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PRODUCT REVIEWS
        ════════════════════════════════════════════════════ */}
        <section
          id="product-reviews"
          aria-labelledby="reviews-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="reviews-heading" className="article-h2">
              The 3 Best Paddle Boards for Fishing in 2026
            </h2>
            <p>
              Full breakdowns of each board — what makes it work for fishing,
              where it excels, and who it is best suited for.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* ─── Review 1: BOTE Breeze Aero ──────────────────── */}
            <article id="review-bote-fishing" aria-labelledby="review-bote-fishing-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  Best Overall
                </span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                  #1 Overall Fishing Pick
                </span>
              </div>

              <h3
                id="review-bote-fishing-heading"
                className="text-2xl font-extrabold text-text-primary tracking-tight mb-1"
              >
                BOTE Breeze Aero{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p
                className="text-sm font-bold mb-4"
                style={{ color: 'var(--color-glacier-teal)' }}
              >
                Best Overall Fishing Paddle Board — ~$899
              </p>

              <Image
                src="/images/bote-breeze-aero-106.png"
                alt="BOTE Breeze Aero 10'6 inflatable paddle board with paddle and carry bag"
                width={900}
                height={500}
                className="w-full rounded-2xl object-contain mb-6"
                style={{ maxHeight: '400px', background: 'rgba(5,13,26,0.6)', padding: '16px', borderRadius: '16px' }}
              />

              {BOARDS[0].description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Pros / Cons */}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-glacier-teal)' }}
                  >
                    Pros
                  </p>
                  <ul className="space-y-2">
                    {BOARDS[0].pros.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-glacier-teal)' }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                    Cons
                  </p>
                  <ul className="space-y-2">
                    {BOARDS[0].cons.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong>{' '}
                {BOARDS[0].bottomLine}
              </p>

              <a
                href={BOARDS[0].affiliateUrl}
                id="cta-bote-fishing"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for BOTE Breeze Aero on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* ─── Review 2: Isle Pioneer Pro ───────────────────── */}
            <article id="review-isle-fishing" aria-labelledby="review-isle-fishing-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  Best for Gear
                </span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                  #2 Pick — Gear-Heavy Setups
                </span>
              </div>

              <h3
                id="review-isle-fishing-heading"
                className="text-2xl font-extrabold text-text-primary tracking-tight mb-1"
              >
                Isle Pioneer Pro{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;6&quot;</span>
              </h3>
              <p
                className="text-sm font-bold mb-4"
                style={{ color: 'var(--color-amber-glow)' }}
              >
                Best for Gear-Heavy Fishing Setups — ~$999
              </p>

              <Image
                src="/images/isle-pioneer-pro-106.jpg"
                alt="Isle Pioneer Pro 10'6 inflatable paddle board complete package with paddle pump fins and carry bag"
                width={900}
                height={500}
                className="w-full rounded-2xl object-cover mb-3"
                style={{ maxHeight: '400px' }}
              />
              <p className="text-sm text-center mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Includes paddle, pump, fins, carry bag, and optional kayak seat.
              </p>

              {BOARDS[1].description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Pros / Cons */}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-amber-glow)' }}
                  >
                    Pros
                  </p>
                  <ul className="space-y-2">
                    {BOARDS[1].pros.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-amber-glow)' }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                    Cons
                  </p>
                  <ul className="space-y-2">
                    {BOARDS[1].cons.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong>{' '}
                {BOARDS[1].bottomLine}
              </p>

              <a
                href={BOARDS[1].affiliateUrl}
                id="cta-isle-fishing"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Isle Pioneer Pro on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* ─── Review 3: FunWater ─────────────────────────── */}
            <article id="review-funwater-fishing" aria-labelledby="review-funwater-fishing-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  Best Budget
                </span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                  #3 Pick — Budget Entry
                </span>
              </div>

              <h3
                id="review-funwater-fishing-heading"
                className="text-2xl font-extrabold text-text-primary tracking-tight mb-1"
              >
                FunWater Inflatable SUP{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p
                className="text-sm font-bold mb-4"
                style={{ color: 'var(--color-sky-glow)' }}
              >
                Best Budget Entry for Fishing — ~$149
              </p>

              <Image
                src="/images/funwater-sup-108.jpg"
                alt="FunWater inflatable paddle board package with paddle pump and accessories"
                width={900}
                height={500}
                className="w-full rounded-2xl object-cover mb-6"
                style={{ maxHeight: '400px' }}
              />

              {BOARDS[2].description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Pros / Cons */}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-sky-glow)' }}
                  >
                    Pros
                  </p>
                  <ul className="space-y-2">
                    {BOARDS[2].pros.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-sky-glow)' }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                    Cons
                  </p>
                  <ul className="space-y-2">
                    {BOARDS[2].cons.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong>{' '}
                {BOARDS[2].bottomLine}
              </p>

              <a
                href={BOARDS[2].affiliateUrl}
                id="cta-funwater-fishing"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for FunWater Inflatable SUP on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            ACCESSORIES
        ════════════════════════════════════════════════════ */}
        <section
          id="accessories"
          aria-labelledby="accessories-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="accessories-heading" className="article-h2">
              Essential Paddle Board Fishing Accessories
            </h2>
            <p>
              The right accessories extend your time on the water, protect your
              gear, and reduce the physical effort of longer sessions. These
              three are the highest-impact additions to any fishing SUP setup.
            </p>

            <div className="space-y-5 mt-8">
              {ACCESSORIES.map(({ name, affiliateUrl, ctaId, description }) => (
                <div
                  key={name}
                  className="glass-card p-6"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <h3 className="text-base font-extrabold text-text-primary mb-2">
                    {name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {description}
                  </p>
                  <a
                    href={affiliateUrl}
                    id={ctaId}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="table-row-cta"
                    aria-label={`Check latest price for ${name} on Amazon`}
                  >
                    Check Latest Price on Amazon
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════════════════════════ */}
        <section
          id="comparison"
          aria-labelledby="comparison-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="comparison-heading" className="article-h2">
              Side-by-Side Comparison
            </h2>
            <p>
              Key specs for each board in one place. Click any &quot;Check
              Price&quot; link to view current Amazon pricing.
            </p>
          </div>

          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm border-collapse"
                  role="table"
                  aria-label="Fishing paddle board comparison 2026"
                >
                  <thead>
                    <tr
                      style={{
                        background: 'rgba(5,13,26,0.90)',
                        borderBottom: '1px solid rgba(56,189,248,0.2)',
                      }}
                    >
                      {[
                        'Board',
                        'Best For',
                        'Width',
                        'Capacity',
                        'Price',
                        '',
                      ].map((h, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                  >
                    {[
                      {
                        name: 'BOTE Breeze Aero',
                        badge: 'Best Overall',
                        badgeClass: 'badge-teal',
                        length: "10'8\"",
                        bestFor: 'Overall Balance',
                        width: '33"',
                        capacity: '300 lbs',
                        price: '~$899',
                        affiliateUrl: '/go/bote-breeze-aero-amazon',
                        ctaId: 'table-bote-fishing',
                      },
                      {
                        name: 'Isle Pioneer Pro',
                        badge: 'Best for Gear',
                        badgeClass: 'badge-amber',
                        length: "10'6\"",
                        bestFor: 'Gear-Heavy Setups',
                        width: '33"',
                        capacity: '335 lbs',
                        price: '~$999',
                        affiliateUrl: '/go/isle-pioneer-pro-amazon',
                        ctaId: 'table-isle-fishing',
                      },
                      {
                        name: 'FunWater Inflatable SUP',
                        badge: 'Best Budget',
                        badgeClass: 'badge-sky',
                        length: "10'8\"",
                        bestFor: 'Calm-Water Entry',
                        width: '32"',
                        capacity: '265 lbs',
                        price: '~$149',
                        affiliateUrl: '/go/funwater-sup-amazon',
                        ctaId: 'table-funwater-fishing',
                      },
                    ].map((row) => (
                      <tr key={row.name} className="table-row-hover">
                        <td className="px-5 py-5 min-w-[200px]">
                          <span
                            className={`${row.badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1.5`}
                          >
                            {row.badge}
                          </span>
                          <p className="font-bold text-text-primary text-sm leading-tight">
                            {row.name}
                          </p>
                          <p className="text-text-muted text-xs">{row.length}</p>
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs">
                          {row.bestFor}
                        </td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">
                          {row.width}
                        </td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">
                          {row.capacity}
                        </td>
                        <td className="px-5 py-5 font-bold text-text-primary text-sm">
                          {row.price}
                        </td>
                        <td className="px-5 py-5">
                          <a
                            href={row.affiliateUrl}
                            id={row.ctaId}
                            target="_blank"
                            rel="noopener noreferrer nofollow sponsored"
                            className="table-row-cta"
                            aria-label={`Check latest price for ${row.name} on Amazon`}
                          >
                            Check Price
                            <ArrowRight className="w-3 h-3" />
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

        {/* ════════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════════ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="faq-heading" className="article-h2">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  className="glass-card p-6"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <h3 className="text-sm font-extrabold text-text-primary mb-3">
                    {q}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            INTERNAL LINKS — RELATED GUIDES
        ════════════════════════════════════════════════════ */}
        <section
          id="related-guides-fishing"
          aria-labelledby="related-guides-fishing-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="related-guides-fishing-heading" className="article-h2">
              Related Guides
            </h2>
            <p>
              Looking for budget options, detailed brand comparisons, or
              beginner-specific advice? These guides address the next most
              common questions.
            </p>

            <div className="space-y-4 mt-6">
              {[
                {
                  href: '/best-inflatable-paddle-boards-under-1000',
                  id: 'link-under1000-from-fishing',
                  title: 'Best Inflatable Paddle Boards Under $1,000 (2026)',
                  desc:
                    'Covers BOTE, Isle, and ROC — best overall value picks at every price point under $1,000.',
                },
                {
                  href: '/compare',
                  id: 'link-compare-from-fishing',
                  title: 'Isle vs BOTE vs Red Paddle Co — Full Brand Comparison',
                  desc:
                    'Side-by-side rigidity scores, weight capacity, and pricing across the top three iSUP brands.',
                },
                {
                  href: '/#reviews',
                  id: 'link-reviews-from-fishing',
                  title: 'In-Depth Board Reviews — 2026 Edition',
                  desc:
                    'Full field-test reviews of the Red Paddle Co Sport, BOTE Breeze Aero, and Isle Pioneer Pro.',
                },
              ].map(({ href, id, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  id={id}
                  className="glass-card flex items-center justify-between p-5 group"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', textDecoration: 'none' }}
                >
                  <div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-glacier-teal transition-colors">
                      {title}
                    </p>
                    <p className="text-xs text-text-muted mt-1">{desc}</p>
                  </div>
                  <BookOpen
                    className="w-4 h-4 text-text-muted shrink-0 ml-4 group-hover:text-glacier-teal transition-colors"
                    aria-hidden="true"
                  />
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

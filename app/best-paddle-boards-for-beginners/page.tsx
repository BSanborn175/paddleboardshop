import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  ArrowLeftRight,
  Layers,
  Scale,
  Package,
  BookOpen,
  AlertTriangle,
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
    headline: 'Best Overall for Beginners',
    price: '~$899',
    summary:
      'The most beginner-friendly premium board in this guide. Stable, lightweight, and designed to grow with you far beyond your first season on the water.',
    description: [
      'The BOTE Breeze Aero is the board we recommend to most first-time buyers who ask "what board should I actually get?" It balances the stability beginners need with the construction quality and feature set that makes it worth keeping for years.',
      'At 33 inches wide and 6 inches thick, the Breeze Aero provides the platform stability that new paddlers depend on during those first few sessions. The AeroULTRA construction keeps the hull rigid under pressure — which means the board behaves consistently whether you are paddling slowly or picking up pace. Boards that flex underfoot are harder to balance on; this one does not.',
      'What makes it exceptional for beginners specifically is that it does not become obsolete as you improve. The MAGNEPOD accessory system lets you add gear as your use cases expand — fishing kit, yoga mat, water storage — without needing a new board. Most beginner boards get sold within two years when paddlers outgrow them. The Breeze Aero gives you a reason to keep it.',
    ],
    pros: [
      'AeroULTRA construction maintains rigid platform beginners can balance on confidently',
      'MAGNEPOD system means the board grows alongside your paddling skills',
      '17.5 lbs — the lightest board in this guide, easy to carry solo to the water',
      'All-around hull works on flatwater, rivers, and calm coastal paddling',
    ],
    cons: [
      '300 lb weight capacity is lower than the Isle Pioneer',
      'MAGNEPOD accessories purchased separately add to the total cost',
    ],
    bottomLine:
      'The Breeze Aero is the beginner board that earns its keep long after the learning phase ends. Highest overall value for first-time buyers who want one board that lasts.',
  },
  {
    id: 'isle',
    name: 'Isle Pioneer',
    length: "10'6\"",
    rank: '#2 Pick',
    badge: 'Most Forgiving',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-pioneer-amazon',
    headline: 'Most Forgiving Beginner Board',
    price: '~$749',
    summary:
      'The most beginner-forgiving board in this guide. An extra-wide, stable platform with high weight capacity — ideal for paddlers who want the easiest possible introduction to the sport.',
    description: [
      'The Isle Pioneer earns its reputation as one of the most popular beginner boards for one clear reason: it is genuinely forgiving. The wide, flat platform makes it harder to fall off, easier to stand up on, and more confidence-building than narrower designs.',
      'Its high weight capacity means most paddlers are operating well below maximum load. A board paddled at 60–70% of its weight rating sits higher in the water, resists tipping more readily, and stays more responsive under shifting body weight. That extra margin of stability is exactly what beginners benefit from during the learning curve.',
      'The construction is straightforward without unnecessary complexity. That simplicity is a real advantage here — fewer components to learn, fewer things to set up incorrectly, and a more durable everyday board that tolerates the minor abuse beginners inevitably deliver during the learning process.',
    ],
    pros: [
      'Wider platform provides more initial stability than most boards at this price',
      'High weight capacity keeps most paddlers well under the stability-compromising load limit',
      'Simple, reliable construction with minimal setup complexity',
      'Very competitive price point for the stability and quality on offer',
    ],
    cons: [
      'Wider shape is less agile — progressive paddlers will feel the limitation sooner',
      'Deck finish quality is a step below the BOTE Breeze Aero',
    ],
    bottomLine:
      'The Isle Pioneer is the right answer if your primary concern is the most forgiving, confidence-building first experience possible. The widest, most stable board in this guide.',
  },
  {
    id: 'funwater',
    name: 'FunWater Inflatable SUP',
    length: "10'8\"",
    rank: '#3 Pick',
    badge: 'Budget Entry',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/funwater-sup-amazon',
    headline: 'Best Budget Entry for Beginners',
    price: '~$149',
    summary:
      'The lowest-cost entry point in this guide. Adequate stability for calm-water beginners — designed for testing the sport before committing to a premium board.',
    description: [
      'The FunWater is the right recommendation for one type of buyer: someone who wants to try paddle boarding before deciding whether they enjoy it enough to invest in a premium board. At this price, the FunWater removes the financial risk entirely.',
      'On calm, protected water — a still lake, a slow river, a sheltered cove — it provides enough stability for a first-time paddler to stand, balance, and develop the basic technique. It inflates quickly, packs down small, and weighs little. Those basics are what matter if you are testing the sport with no commitment.',
      'It is important to be honest about the limitations: build quality is below the BOTE and Isle by a significant margin. Expect lower pressure retention over time, a softer platform under load, and a board that will show wear faster than premium alternatives. If you paddle it twice a week through a full summer and want another season out of it, it may disappoint. For occasional calm-water use while you decide if paddling is for you, it is perfectly adequate.',
    ],
    pros: [
      'Lowest entry cost in the beginner board category',
      'Adequate for calm-water introductory use',
      'Lightweight and straightforward to pack, carry, and store',
      'Zero financial commitment to a sport you may not continue',
    ],
    cons: [
      'Build quality and pressure retention below premium boards',
      'Not suitable for open water, wind, or rough conditions',
      'Softer platform makes technique development harder',
      'Not a long-term board — expect to upgrade within a season of regular use',
    ],
    bottomLine:
      'The FunWater makes sense as a trial purchase only. If you already know you will commit to the sport, the extra investment in BOTE or Isle pays for itself within one season.',
  },
] as const;

/* ── Beginner criteria ───────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: ArrowLeftRight,
    title: 'Width: 32 Inches or More',
    body: (
      <>
        Width is the single most important stability factor for beginners. Look
        for a board at least <strong>32 inches wide</strong> — ideally 33
        inches. A wider board resists tipping when you shift your weight, and
        makes standing up the first time significantly easier. Narrow boards
        (30 inches or less) are designed for performance, not learning.
      </>
    ),
  },
  {
    Icon: Layers,
    title: 'Thickness: 6 Inches',
    body: (
      <>
        A <strong>6-inch thick board</strong> creates more hull volume than a
        4-inch board, which means better buoyancy and a higher, more stable
        platform. It also holds inflation pressure more consistently over a full
        session. Boards under 5 inches thick feel softer underfoot — which
        makes balancing more difficult, not easier.
      </>
    ),
  },
  {
    Icon: Scale,
    title: 'Length: 10\'6" to 11\'6"',
    body: (
      <>
        For most beginners,{' '}
        <strong>10&apos;6&quot; to 11&apos;6&quot;</strong> is the ideal range.
        Shorter boards are more maneuverable and easier to transport. Longer
        boards track straighter and glide more efficiently but require more
        technique to turn. Start in the middle of this range and adjust as your
        skills develop.
      </>
    ),
  },
  {
    Icon: Scale,
    title: 'Weight Capacity',
    body: (
      <>
        Never buy a board rated exactly at your body weight. Aim for at least{' '}
        <strong>50–100 lbs of capacity above your actual weight</strong>. A
        board operated at its limit sinks lower into the water and becomes
        noticeably less stable. Extra capacity headroom is extra stability —
        especially while you are still developing your balance and technique.
      </>
    ),
  },
  {
    Icon: Package,
    title: 'Construction Quality',
    body: (
      <>
        Even for beginners, construction matters. Look for{' '}
        <strong>high-density drop-stitch cores</strong> and{' '}
        <strong>multi-layer PVC</strong>. Single-layer budget boards develop
        softness within months of regular use, which makes them harder to
        balance on over time. Premium boards stay rigid for multiple seasons.
      </>
    ),
  },
  {
    Icon: Package,
    title: "What's Included",
    body: (
      <>
        A complete beginner kit should include a{' '}
        <strong>high-volume pump</strong>, a{' '}
        <strong>padded carry bag</strong>, and a{' '}
        <strong>fin set</strong>. Boards that require you to buy these
        separately cost significantly more once you add the total. Factor in
        the complete cost before comparing prices across boards.
      </>
    ),
  },
] as const;

/* ── Common mistakes ─────────────────────────────────────────── */
const MISTAKES = [
  {
    title: 'Choosing a Board That Is Too Narrow',
    body:
      'Boards under 31 inches wide look sleek but are designed for technique and performance, not beginners. The instability discourages new paddlers before they develop any confidence. Always prioritize width over length or shape for a first board.',
  },
  {
    title: 'Ignoring Weight Capacity',
    body:
      'A board paddled at maximum capacity sits lower in the water and tips much more easily. New paddlers frequently underestimate how much capacity headroom affects real-world stability. Check your weight, add any gear you plan to carry, and leave at least 60–80 lbs of margin.',
  },
  {
    title: 'Prioritizing Speed Over Stability',
    body:
      'Racing-oriented and touring boards look impressive but have narrower, more performance-tuned hulls. They require established balance and technique to use effectively. Every hour spent fighting instability on the wrong board is an hour not spent actually learning to paddle.',
  },
  {
    title: 'Buying an Unknown Brand for the Lowest Price',
    body:
      'Boards from unvetted brands at very low price points frequently have poorly bonded seams, inadequate pump quality, and drop-stitch cores that lose pressure within months. A board that deflates or develops rail softness mid-session will end your session early and discourage you from continuing. The FunWater is the lowest-cost board we recommend — below that price range, quality becomes unreliable.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best paddle board for beginners in 2026?',
    a: "The BOTE Breeze Aero is the best overall beginner paddle board in 2026. It provides the stability beginners need with the construction quality and accessory compatibility (MAGNEPOD) that prevents it from becoming obsolete as your skills develop. For the most forgiving, budget-conscious entry, the Isle Pioneer is the strongest alternative.",
  },
  {
    q: 'What size paddle board is best for beginners?',
    a: "For most beginners, a board 10'6\" to 11' long, at least 32 inches wide, and 6 inches thick provides the best combination of stability, maneuverability, and buoyancy. Width matters more than length for initial stability — never sacrifice width for a sleeker profile as a first-time buyer.",
  },
  {
    q: 'How much should a beginner spend on a paddle board?',
    a: "Beginners who are committed to the sport should budget $700–$900 for a board like the BOTE Breeze Aero or Isle Pioneer. These boards last multiple seasons and grow with your skill level. Spending less on a budget board under $300 can make the learning process harder, as softer platforms are more difficult to balance on. If you are genuinely unsure whether you will continue, the FunWater at ~$149 removes the financial risk.",
  },
  {
    q: 'Are inflatable paddle boards good for beginners?',
    a: "Yes — inflatable paddle boards are ideal for beginners. They are easier to transport, store, and protect against damage than hardboards. Premium inflatables from BOTE and Isle are rigid enough at full inflation that new paddlers receive no meaningful performance disadvantage compared to hardboards, while gaining significantly easier portability and storage.",
  },
  {
    q: 'What is the most important thing to look for in a beginner paddle board?',
    a: "Width. A board at least 32 inches wide is the single most important specification for beginner stability. All other factors — length, construction, accessories — matter, but no amount of build quality compensates for a platform that is too narrow for a new paddler to balance on comfortably.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Boards for Beginners (2026 Complete Guide) | PaddleBoardShop',
  description:
    'Find the best paddle boards for beginners in 2026. Expert picks from BOTE, Isle, and FunWater — with stability tips, buying criteria, and common beginner mistakes to avoid.',
  keywords: [
    'best paddle boards for beginners',
    'beginner paddle board 2026',
    'best beginner SUP',
    'inflatable paddle board for beginners',
    'BOTE Breeze Aero beginner',
    'Isle Pioneer beginner paddle board',
    'beginner stand up paddle board',
    'beginner iSUP 2026',
  ],
  openGraph: {
    title: 'Best Paddle Boards for Beginners (2026 Complete Guide) | PaddleBoardShop',
    description:
      'Three expert picks for 2026 with stability ratings, buying criteria, and common beginner mistakes to avoid.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: {
    canonical: '/best-paddle-boards-for-beginners',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BeginnerGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Paddle Boards for Beginners (2026 Complete Guide)',
    description:
      'Expert picks for the best beginner paddle boards in 2026 — with stability ratings, buying criteria, and common mistakes to avoid.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-22',
    dateModified: '2026-04-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://paddleboardshop.com/best-paddle-boards-for-beginners',
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
                <li className="text-text-secondary" aria-current="page">Best Boards for Beginners</li>
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
              Complete Guide · Updated April 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Boards{' '}
              <span className="gradient-text">for Beginners</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Choosing your first paddle board is harder than it should be. Most
              guides recommend the wrong specs for beginners, or pick boards that
              you will outgrow in a season. This guide identifies the three boards
              that actually build confidence — and explains the four criteria that
              make all the difference.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent reviews', 'Real-world stability testing', 'No paid placements', 'Updated April 2026'].map((m) => (
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
              In 2026, beginner-friendly inflatable paddle boards have never been
              better engineered. The challenge is not quality — it is sorting the
              boards designed for actual beginners from the ones that look
              appealing but are too narrow, too performance-oriented, or too
              cheaply built to support early learning effectively.
            </p>
            <p>
              Most first-time buyers overestimate how much they care about speed
              and underestimate how much they care about not falling in. This
              guide is built around that reality: stability first, everything else
              second.
            </p>
            <p>
              If you want the recommendation immediately,{' '}
              <a href="#quick-answer" className="article-link">
                jump to the top three picks
              </a>
              . If you are still evaluating what to look for, the{' '}
              <a href="#buying-guide" className="article-link">
                buying guide below
              </a>{' '}
              covers the six criteria that actually determine whether a beginner
              board works.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK PICKS
        ════════════════════════════════ */}
        <section id="quick-answer" aria-labelledby="quick-answer-heading" className="article-section">
          <div className="article-wide">
            {/* Snippet callout */}
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
              <h2 id="quick-answer-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 3 Beginner Paddle Boards for 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by stability, beginner-friendliness, and long-term value.
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
                  id={`pick-card-beginner-${id}`}
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
                        Updated Apr 2026 · Independent Review
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
              What Makes a Paddle Board Beginner-Friendly
            </h2>
            <p>
              Most buying guides bury the most important criteria under lengthy
              brand histories and marketing language. Here are the six
              specifications that actually determine whether a beginner board
              works for you — in order of priority.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
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
            FULL REVIEWS
        ════════════════════════════════ */}
        <section id="product-reviews" aria-labelledby="reviews-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-heading" className="article-h2">
              The 3 Best Beginner Paddle Boards for 2026
            </h2>
            <p>
              Full breakdowns of each board — what makes it suitable for
              beginners, where it excels, and who it is best matched to.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* Review 1: BOTE */}
            <article id="review-bote-beginner" aria-labelledby="review-bote-beginner-heading">
              <Image
                src="/images/bote-breeze-aero.jpg"
                alt="BOTE Breeze Aero inflatable paddle board on calm water at golden hour"
                width={900}
                height={500}
                className="w-full rounded-2xl object-cover mb-6"
                style={{ maxHeight: '400px' }}
              />
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full shrink-0">Best Overall</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#1 Pick</span>
              </div>
              <h3 id="review-bote-beginner-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                BOTE Breeze Aero{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-glacier-teal)' }}>
                Best Overall for Beginners — ~$899
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
                id="cta-bote-beginner"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for BOTE Breeze Aero on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 2: Isle Pioneer */}
            <article id="review-isle-beginner" aria-labelledby="review-isle-beginner-heading">
              <Image
                src="/images/isle-pioneer.jpg"
                alt="Isle Pioneer inflatable paddle board on a calm lake"
                width={900}
                height={500}
                className="w-full rounded-2xl object-cover mb-6"
                style={{ maxHeight: '400px' }}
              />
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">Most Forgiving</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#2 Pick</span>
              </div>
              <h3 id="review-isle-beginner-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Isle Pioneer{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Most Forgiving Beginner Board — ~$749
              </p>
              {BOARDS[1].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-amber-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[1].pros.map((p) => (
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
                id="cta-isle-beginner"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Isle Pioneer on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 3: FunWater */}
            <article id="review-funwater-beginner" aria-labelledby="review-funwater-beginner-heading">
              <Image
                src="/images/funwater-sup.jpg"
                alt="FunWater inflatable paddle board on a sandy river bank"
                width={900}
                height={500}
                className="w-full rounded-2xl object-cover mb-6"
                style={{ maxHeight: '400px' }}
              />
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Budget Entry</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#3 Pick</span>
              </div>
              <h3 id="review-funwater-beginner-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                FunWater Inflatable SUP{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Budget Entry — ~$149
              </p>
              {BOARDS[2].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[2].pros.map((p) => (
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
                id="cta-funwater-beginner"
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

        {/* ════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="comparison" aria-labelledby="comparison-beginner-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-beginner-heading" className="article-h2">Side-by-Side Comparison</h2>
            <p>Key specs for all three boards at a glance. Click any &quot;Check Price&quot; link for current Amazon pricing.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Beginner paddle board comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.90)', borderBottom: '1px solid rgba(251,191,36,0.2)' }}>
                      {['Board', 'Best For', 'Width', 'Capacity', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      { name: 'BOTE Breeze Aero', badge: 'Best Overall', badgeClass: 'badge-teal', length: "10'8\"", bestFor: 'Long-term growth', width: '33"', capacity: '300 lbs', price: '~$899', affiliateUrl: '/go/bote-breeze-aero-amazon', ctaId: 'table-bote-beginner' },
                      { name: 'Isle Pioneer', badge: 'Most Forgiving', badgeClass: 'badge-amber', length: "10'6\"", bestFor: 'Maximum stability', width: '32"', capacity: '275 lbs', price: '~$749', affiliateUrl: '/go/isle-pioneer-amazon', ctaId: 'table-isle-beginner' },
                      { name: 'FunWater SUP', badge: 'Budget Entry', badgeClass: 'badge-sky', length: "10'8\"", bestFor: 'Trying the sport', width: '32"', capacity: '265 lbs', price: '~$149', affiliateUrl: '/go/funwater-sup-amazon', ctaId: 'table-funwater-beginner' },
                    ].map((row) => (
                      <tr key={row.name} className="table-row-hover">
                        <td className="px-5 py-5 min-w-[200px]">
                          <span className={`${row.badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1.5`}>{row.badge}</span>
                          <p className="font-bold text-text-primary text-sm leading-tight">{row.name}</p>
                          <p className="text-text-muted text-xs">{row.length}</p>
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs">{row.bestFor}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.width}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.capacity}</td>
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
        <section id="common-mistakes" aria-labelledby="mistakes-heading" className="article-section">
          <div className="article-body">
            <h2 id="mistakes-heading" className="article-h2">Common Beginner Mistakes to Avoid</h2>
            <p>
              Most first-time buyers make the same four mistakes. Each one makes
              the learning process harder than it needs to be.
            </p>
            <div className="space-y-5 mt-8">
              {MISTAKES.map(({ title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-amber-glow)' }} aria-hidden="true" />
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
        <section id="faq" aria-labelledby="faq-beginner-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-beginner-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-beginner" aria-labelledby="related-guides-beginner-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-beginner-heading" className="article-h2">Related Guides</h2>
            <p>Ready to go deeper? These guides cover the next most common questions once you have settled on a first board.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-beginner', title: 'Best Inflatable Paddle Boards Under $1,000 (2026)', desc: 'Budget-specific picks covering BOTE, Isle, and ROC with current Amazon pricing.' },
                { href: '/isle-vs-bote-vs-red-paddle', id: 'link-brand-compare-from-beginner', title: 'Isle vs BOTE vs Red Paddle Co — Brand Comparison 2026', desc: 'Which brand is actually best? Stability, build quality, and value compared head-to-head.' },
                { href: '/best-paddle-boards-for-fishing', id: 'link-fishing-from-beginner', title: 'Best Paddle Boards for Fishing (2026)', desc: 'Moving beyond recreation? Fishing-specific stability, rigging, and accessory guide.' },
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

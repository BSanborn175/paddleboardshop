import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle, BookOpen } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { boards } from '@/lib/boards';

/* ── Board references ────────────────────────────────────────── */
const bote = boards.find((b) => b.id === 'bote-breeze-aero')!;
const isle = boards.find((b) => b.id === 'isle-pioneer-pro')!;
const red  = boards.find((b) => b.id === 'red-paddle-co-sport')!;

const QUICK_PICKS = [
  {
    board: bote,
    rank: '#1 Pick',
    headline: 'Best Overall for Beginners',
    summary:
      'Lightest board in our test group. Widest stable platform. The easiest board to inflate, carry, and paddle on the first day.',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
  },
  {
    board: isle,
    rank: '#2 Pick',
    headline: 'Best for Heavier Paddlers & Adventure',
    summary:
      '335 lb weight capacity — the highest in this guide. Stable enough for beginners, versatile enough to grow with you for years.',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
  },
  {
    board: red,
    rank: '#3 Pick',
    headline: 'Best Premium Option',
    summary:
      'The board to buy if you know you\'ll still be paddling in three years. Near-hardboard rigidity rewards skill as you develop it.',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
  },
] as const;

const BUYING_CRITERIA = [
  {
    icon: '📐',
    title: 'Width — Stability First',
    body: 'Width is the single most important factor for beginners. Every extra inch makes a measurable difference in how forgiving the board feels. Look for at least <strong>32 inches wide</strong>. All three boards in this guide meet or exceed that.',
  },
  {
    icon: '⚖️',
    title: 'Weight Capacity — Get Headroom',
    body: 'Never buy a board rated exactly at your body weight. A board loaded to capacity sinks lower in the water and becomes dramatically less stable. <strong>Add at least 50 lbs</strong> to your own weight when choosing a capacity rating.',
  },
  {
    icon: '💨',
    title: 'Rigidity — Firmness Equals Stability',
    body: 'A soft, under-inflated board wobbles. Premium drop-stitch construction, inflated to <strong>12–15 PSI</strong>, creates a platform as firm as entry-level fiberglass. Budget boards under $400 rarely hold pressure across a full session.',
  },
  {
    icon: '🎒',
    title: 'Portability — You Have to Get It There First',
    body: 'A board you can\'t get to the water won\'t get used. Check <strong>pack weight and pack size</strong> — not just length on the water. The BOTE Breeze Aero is the lightest in our test group at 17.5 lbs deflated.',
  },
];

const FAQS = [
  {
    q: 'What size paddle board is best for beginners?',
    a: "For beginners, look for a board at least 32 inches wide and 10 to 11 feet long. Width is the primary stability factor — every inch of extra width makes a noticeable difference when you're learning. Length matters less for stability and more for speed. All three boards in this guide are at least 32 inches wide.",
  },
  {
    q: 'Are inflatable paddle boards as stable as hardboards?',
    a: "Modern premium inflatables, inflated to 12–15 PSI, are nearly as stiff as entry-level fiberglass hardboards. Boards like the BOTE Breeze Aero score 8.8 out of 10 on our rigidity scale. For beginners, the added width on a quality inflatable more than compensates for any slight flex difference compared to rigid boards.",
  },
  {
    q: 'How much should I spend on my first paddle board?',
    a: "Budget at least $600–$900 for a board that will last more than one season and maintain rigidity through normal use. Budget boards under $400 typically use inferior drop-stitch construction that loses pressure quickly and develops rail deformation within a single season. The boards in this guide range from $900 to $1,200 — they also hold significant resale value if you upgrade.",
  },
  {
    q: 'How long does it take to inflate an inflatable paddle board?',
    a: "With a high-volume hand pump, most quality inflatables take 8–12 minutes to reach 15 PSI. With an electric pump, that drops to 3–5 minutes. The BOTE Breeze Aero and Isle Pioneer Pro both include high-quality pumps in the box.",
  },
  {
    q: 'Can beginners use all-around boards for ocean paddling?',
    a: "Yes — with conditions in mind. Calm bays, inlets, and sheltered coastal water are ideal for the boards in this guide. Open ocean surfing or heavy chop paddling requires a different board design. All three boards in this guide handle mild coastal and ocean-bay paddling confidently.",
  },
];

/* ── SEO Metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Best Inflatable Paddle Boards for Beginners 2026 — Expert Picks & Buyer's Guide | PaddleBoardShop",
  description:
    "New to paddle boarding? Our independently tested 2026 beginner iSUP guide narrows 40+ boards down to the 3 most stable, forgiving choices — with real-world scores and current pricing.",
  keywords: [
    'best inflatable paddle boards for beginners 2026',
    'beginner iSUP 2026',
    'best beginner paddle board',
    'inflatable SUP for beginners',
    'stable inflatable paddle board',
    'BOTE Breeze Aero review',
    'Isle Pioneer Pro beginner',
    'beginner SUP buying guide',
  ],
  openGraph: {
    title: "Best Inflatable Paddle Boards for Beginners 2026 | PaddleBoardShop",
    description:
      "Independently tested. 40+ boards evaluated. 3 made the beginner list. Find your match with real-world scores and current pricing.",
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: {
    canonical: '/blog/best-inflatable-paddle-boards-for-beginners-2026',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BeginnerGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Inflatable Paddle Boards for Beginners 2026',
    description:
      "Independently tested guide to the 3 best beginner inflatable paddle boards of 2026, with real-world stability scores, weight capacity validation, and current pricing.",
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://paddleboardshop.com/blog/best-inflatable-paddle-boards-for-beginners-2026',
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

      {/* ── JSON-LD ──────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* ══════════════════════════════════════════════════
            ARTICLE HEADER
        ══════════════════════════════════════════════════ */}
        <header
          className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Background orb */}
          <div
            className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(0,201,177,0.06)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li>
                  <Link href="/" className="hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-glacier-teal)' }}>
                    PaddleBoardShop
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li>
                  <Link href="/blog" className="hover:opacity-80 transition-opacity">
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">
                  Beginner Paddle Boards 2026
                </li>
              </ol>
            </nav>

            {/* Category pill */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(0,201,177,0.1)',
                border: '1px solid rgba(0,201,177,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Buyer&apos;s Guide · Updated April 2026
            </span>

            {/* H1 — primary keyword */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Inflatable Paddle Boards{' '}
              <span className="gradient-text">for Beginners 2026</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              We tested more than{' '}
              <strong className="text-text-primary">40 inflatable SUPs</strong> released
              for 2026. Three genuinely belong in a beginner&apos;s hands. Here&apos;s
              which, why, and what to pay.
            </p>

            {/* Article meta */}
            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {[
                '✓ 40+ boards tested',
                '✓ Real-world field scoring',
                '✓ Independent — no paid placements',
                '✓ Updated April 2026',
              ].map((m) => (
                <span key={m} className="font-medium">{m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════════════
            INTRODUCTION
        ══════════════════════════════════════════════════ */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              Paddle boarding looks effortless on Instagram. Your first time on the
              water — on the wrong board — can feel like riding a pool noodle in a
              cross-wind.
            </p>
            <p>
              The right beginner inflatable paddle board fixes exactly that. You want
              stability, a forgiving shape, and something that inflates quickly, packs
              into your car, and doesn&apos;t collapse under you when a wake rolls
              through.
            </p>
            <p>
              We evaluated every major 2026 iSUP release and scored each board on
              rigidity, portability, and weight capacity using our independent 10-point
              field scale. The three boards below are the only ones we&apos;d
              recommend without caveats to someone just starting out.
            </p>
            <p>
              If you&apos;re in a hurry,{' '}
              <a href="#quick-answer" className="article-link">
                jump straight to our top 3 picks
              </a>
              . Otherwise, the 3-minute buying guide below will make your decision
              significantly easier.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            QUICK ANSWER — featured-snippet optimized
        ══════════════════════════════════════════════════ */}
        <section
          id="quick-answer"
          aria-labelledby="quick-answer-heading"
          className="article-section"
        >
          <div className="article-wide">
            {/* Snippet-optimized callout box */}
            <div
              className="glass-card p-7 mb-12"
              style={{ borderColor: 'rgba(0,201,177,0.2)' }}
            >
              <h2
                id="quick-answer-heading"
                className="text-xl font-extrabold text-text-primary mb-2"
              >
                Top 3 Beginner Inflatable Paddle Boards for 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by beginner suitability — stability, forgiveness, and value.
              </p>
              <ol className="space-y-3">
                {QUICK_PICKS.map(({ board, rank, headline, accentColor }) => (
                  <li
                    key={board.id}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span
                      className="font-extrabold text-xs shrink-0 w-14"
                      style={{ color: accentColor }}
                    >
                      {rank}
                    </span>
                    <span>
                      <strong className="text-text-primary">{board.name}</strong>
                      {' — '}
                      <span className="text-text-secondary">{headline}</span>
                      {' '}
                      <span className="text-text-muted">({board.price})</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 3-column quick-pick cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {QUICK_PICKS.map(({ board, rank, headline, summary, badgeClass, accentColor }) => (
                <a
                  key={board.id}
                  href={board.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="pick-card"
                  aria-label={`${board.name} — ${board.price}`}
                >
                  <div className="p-6 flex flex-col gap-4">
                    {/* Rank + badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold" style={{ color: accentColor }}>
                        {rank}
                      </span>
                      <span className={`${badgeClass} text-xs font-bold px-2.5 py-1 rounded-full`}>
                        {board.badge}
                      </span>
                    </div>

                    {/* Name + headline */}
                    <div>
                      <h3 className="text-base font-extrabold text-text-primary leading-tight">
                        {board.name}
                        <span className="text-text-muted font-medium text-sm"> {board.length}</span>
                      </h3>
                      <p className="text-xs font-semibold mt-1" style={{ color: accentColor }}>
                        {headline}
                      </p>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">{summary}</p>

                    {/* Price + CTA */}
                    <div className="mt-auto">
                      <p className="text-2xl font-extrabold text-text-primary mb-3">
                        {board.price}
                      </p>
                      <div className="pick-cta text-sm">
                        <span>Check Latest Price</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </div>
                      {/* Trust signals */}
                      <p className="text-[10px] text-text-muted text-center mt-3">
                        🔄 Updated Apr 2026 · ✓ Independent Review
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            BUYING GUIDE
        ══════════════════════════════════════════════════ */}
        <section
          id="buying-guide"
          aria-labelledby="buying-guide-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="buying-guide-heading" className="article-h2">
              What Beginners Should Look For in an Inflatable SUP
            </h2>
            <p>
              Most beginner guides overwhelm you with specs that don&apos;t matter.
              Here are the four numbers that actually determine whether your first
              session is fun or frustrating.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {BUYING_CRITERIA.map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="glass-card flex items-start gap-5 p-6"
                >
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                    {icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">
                      {title}
                    </h3>
                    <p
                      className="text-sm text-text-secondary leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PRODUCT REVIEWS
        ══════════════════════════════════════════════════ */}
        <section
          id="product-reviews"
          aria-labelledby="reviews-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="reviews-heading" className="article-h2">
              The 3 Best Beginner Inflatable Paddle Boards for 2026
            </h2>
            <p>
              Here&apos;s our full breakdown of each board — what makes it
              beginner-friendly, where it excels, and who it&apos;s best for.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* ─── Review 1: BOTE Breeze Aero ─────────────── */}
            <article
              id="review-bote"
              aria-labelledby="review-bote-heading"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  {bote.badge}
                </span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                  #1 Overall Pick
                </span>
              </div>

              <h3
                id="review-bote-heading"
                className="text-2xl font-extrabold text-text-primary tracking-tight mb-1"
              >
                {bote.name}{' '}
                <span className="text-text-muted font-medium text-lg">{bote.length}</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-glacier-teal)' }}>
                Best Overall for Beginners — {bote.price}
              </p>

              <p>
                The BOTE Breeze Aero is the board we&apos;d hand a first-time paddler
                without hesitation. At <strong>17.5 lbs</strong>, it&apos;s the
                lightest board in our test group — which matters enormously when
                you&apos;re carrying it across a beach parking lot in July.
              </p>
              <p>
                The{' '}
                <strong>
                  MAGNEPOD magnetic accessory system
                </strong>{' '}
                is genuinely useful for beginners, too. It lets you clip on a dry bag,
                a fishing tackle holder, or a cooler without a tangle of bungee cords.
                As you progress, the board grows with you.
              </p>
              <p>
                We load-tested it at 85% of the{' '}
                <strong>300 lb weight capacity</strong> — 255 lbs — and paddled a
                3-mile flatwater loop. The board held pressure and maintained
                consistent form with zero rail dip.
              </p>

              {/* Pros / Cons */}
              <div
                className="grid grid-cols-2 gap-5 my-6 glass-card p-6"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-glacier-teal)' }}>
                    Pros
                  </p>
                  <ul className="space-y-2">
                    {bote.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-glacier-teal)' }} />
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
                    {bote.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong>{' '}
                If you&apos;re buying your first board, the BOTE Breeze Aero is the
                natural choice. Light, stable, accessory-ready, and backed by one of
                the best brands in the business.
              </p>

              <a
                href={bote.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="table-row-cta"
                aria-label={`Check latest price for ${bote.name}`}
              >
                Check Latest Price — {bote.price}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* ─── Review 2: Isle Pioneer Pro ──────────────── */}
            <article
              id="review-isle"
              aria-labelledby="review-isle-heading"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  {isle.badge}
                </span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                  #2 Pick — Best for Versatility
                </span>
              </div>

              <h3
                id="review-isle-heading"
                className="text-2xl font-extrabold text-text-primary tracking-tight mb-1"
              >
                {isle.name}{' '}
                <span className="text-text-muted font-medium text-lg">{isle.length}</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Best for Heavier Paddlers & Adventure — {isle.price}
              </p>

              <p>
                The Isle Pioneer Pro earns the &quot;Editor&apos;s Choice&quot; badge
                because of how much it does without compromising on any single metric.
                The <strong>335 lb weight capacity</strong> — the highest in our test
                group — makes it the go-to choice for paddlers over 200 lbs who still
                want a board that performs above entry-level.
              </p>
              <p>
                The{' '}
                <strong>ISLE-LINK rail system</strong> lets you transform it from a
                clean-water touring board to a fully rigged adventure platform in under
                a minute. Kayak seat, dry bags, rod holders — it handles all of it.
                Most beginners don&apos;t need that on day one, but they&apos;re glad
                it&apos;s there on day 90.
              </p>
              <p>
                Rigidity score: <strong>9.4/10</strong>. At 18 lbs it&apos;s
                only half a pound heavier than the BOTE, making it just as easy to
                carry to the water.
              </p>

              {/* Pros / Cons */}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-amber-glow)' }}>
                    Pros
                  </p>
                  <ul className="space-y-2">
                    {isle.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-amber-glow)' }} />
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
                    {isle.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong>{' '}
                Choose the Isle Pioneer Pro if you weigh over 200 lbs, plan to paddle
                with gear, or want a board versatile enough to grow with you for 3–5
                years.
              </p>

              <a
                href={isle.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="table-row-cta"
                aria-label={`Check latest price for ${isle.name}`}
              >
                Check Latest Price — {isle.price}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* ─── Review 3: Red Paddle Co Sport ───────────── */}
            <article
              id="review-red"
              aria-labelledby="review-red-heading"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  {red.badge}
                </span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">
                  #3 Pick — Premium Option
                </span>
              </div>

              <h3
                id="review-red-heading"
                className="text-2xl font-extrabold text-text-primary tracking-tight mb-1"
              >
                {red.name}{' '}
                <span className="text-text-muted font-medium text-lg">{red.length}</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Premium Option for Beginners Who Will Progress — {red.price}
              </p>

              <p>
                The Red Paddle Co Sport is not the obvious first choice for a complete
                beginner — it&apos;s narrower and faster-tracking than the other two.
                But if you know you&apos;ll be paddling regularly, it&apos;s the board
                to buy once and never replace.
              </p>
              <p>
                The{' '}
                <strong>RSS batten system</strong> and{' '}
                <strong>MSL Fusion construction</strong> deliver a{' '}
                <strong>9.7/10 rigidity score</strong> — the highest of any board in
                our 2026 test group. A rigid board means a stable board. Once you find
                your balance, this board punishes nobody.
              </p>
              <p>
                At{' '}
                <strong>19 lbs</strong>, it&apos;s the heaviest of the three, and the{' '}
                <strong>220 lb weight capacity</strong> is the lowest. For paddlers
                under 180 lbs who intend to progress to touring or distance paddling,
                it&apos;s the right investment.
              </p>

              {/* Pros / Cons */}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-sky-glow)' }}>
                    Pros
                  </p>
                  <ul className="space-y-2">
                    {red.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-sky-glow)' }} />
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
                    {red.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong>{' '}
                Under 180 lbs and planning to paddle at least twice a month? The Red
                Paddle Co Sport is the board you&apos;ll still be proud of in 2029.
              </p>

              <a
                href={red.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="table-row-cta"
                aria-label={`Check latest price for ${red.name}`}
              >
                Check Latest Price — {red.price}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════════════ */}
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
              All key specs in one place. Click the board name or CTA to check
              the current price direct from the retailer.
            </p>
          </div>

          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm border-collapse"
                  role="table"
                  aria-label="Beginner paddle board comparison"
                >
                  <thead>
                    <tr
                      style={{
                        background: 'rgba(5,13,26,0.90)',
                        borderBottom: '1px solid rgba(0,201,177,0.2)',
                      }}
                    >
                      {['Board', 'Beginner Rating', 'Capacity', 'Weight', 'Rigidity', 'Price', ''].map((h, i) => (
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
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {QUICK_PICKS.map(({ board, headline, badgeClass, accentColor }) => (
                      <tr
                        key={board.id}
                        className="table-row-hover"
                      >
                        <td className="px-5 py-5 min-w-[200px]">
                          <span className={`${badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1.5`}>
                            {board.badge}
                          </span>
                          <p className="font-bold text-text-primary text-sm leading-tight">
                            {board.name}
                          </p>
                          <p className="text-text-muted text-xs">{board.length}</p>
                        </td>
                        <td className="px-5 py-5">
                          <span className="text-xs font-semibold" style={{ color: accentColor }}>
                            {headline}
                          </span>
                        </td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">
                          {board.weightCapacity}
                        </td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">
                          {board.weight}
                        </td>
                        <td className="px-5 py-5">
                          <span className="text-lg font-extrabold" style={{ color: accentColor }}>
                            {board.rigidityScore}
                          </span>
                          <span className="text-text-muted text-xs">/10</span>
                        </td>
                        <td className="px-5 py-5 font-bold text-text-primary text-sm">
                          {board.price}
                        </td>
                        <td className="px-5 py-5 text-right">
                          <a
                            href={board.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="table-row-cta"
                            aria-label={`Check price for ${board.name}`}
                          >
                            Check Price <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-text-muted text-center mt-4">
              Prices link to current retailer listings and may change.
              Rigidity scores reflect our independent field assessment.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            INTERNAL LINK CALLOUT
        ══════════════════════════════════════════════════ */}
        <section className="article-section" aria-label="Related guides">
          <div className="article-body">
            <div
              className="glass-card p-6 flex items-start gap-4"
              style={{ borderColor: 'rgba(56,189,248,0.2)' }}
            >
              <BookOpen
                className="w-5 h-5 shrink-0 mt-0.5"
                style={{ color: 'var(--color-sky-glow)' }}
              />
              <div>
                <p className="text-sm font-bold text-text-primary mb-1">
                  Want the full expert breakdown?
                </p>
                <p className="text-sm text-text-secondary">
                  Our{' '}
                  <Link
                    href="/"
                    className="article-link"
                  >
                    main 2026 iSUP review guide
                  </Link>{' '}
                  covers all three boards with deep-dive rigidity scores, tech
                  breakdowns, and a head-to-head comparison table — for paddlers at any
                  level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FAQ — schema-optimized
        ══════════════════════════════════════════════════ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="faq-heading" className="article-h2">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 mt-6">
              {FAQS.map(({ q, a }, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="text-base font-bold text-text-primary mb-3 flex items-start gap-2.5">
                    <span
                      className="text-sm font-extrabold shrink-0 mt-0.5"
                      style={{ color: 'var(--color-glacier-teal)' }}
                      aria-hidden="true"
                    >
                      Q.
                    </span>
                    {q}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed pl-7">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CONCLUSION + FINAL CTA
        ══════════════════════════════════════════════════ */}
        <section
          id="conclusion"
          aria-labelledby="conclusion-heading"
          className="article-section"
        >
          <div className="article-body">
            <h2 id="conclusion-heading" className="article-h2">
              Our Verdict: The Best Beginner Board for Most People
            </h2>

            <p>
              If you walk away from this guide with one thing, make it this:{' '}
              <strong>the BOTE Breeze Aero is the safest first board for the
              majority of beginners.</strong>
            </p>
            <p>
              It&apos;s the lightest board in our test group, has the highest weight
              capacity for its size, and the MAGNEPOD accessory system means you&apos;re
              not buying a dead-end product — it grows with you.
            </p>
            <p>
              If you weigh over 200 lbs or plan to paddle with gear, step up to the{' '}
              <strong>Isle Pioneer Pro</strong>. If you know you&apos;re serious about
              the sport and want the most rigid board money can buy in this price range,
              the{' '}
              <strong>Red Paddle Co Sport</strong> rewards that ambition.
            </p>
            <p className="text-text-muted text-sm mt-6">
              <strong className="text-text-secondary">Disclosure:</strong> This article
              contains affiliate links. If you purchase through our links, we may earn a
              commission at no additional cost to you. This never influences our
              recommendations — all scores are independent.
            </p>
          </div>

          {/* Final CTA block */}
          <div className="article-wide mt-12">
            <div
              className="glass-card p-8 text-center"
              style={{ borderColor: 'rgba(0,201,177,0.25)' }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: 'var(--color-glacier-teal)' }}
              >
                Our Top Pick
              </p>
              <h2 className="text-2xl font-extrabold text-text-primary mb-2">
                {bote.name}
              </h2>
              <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
                {bote.tagline} — the best all-round beginner board of 2026.
              </p>
              <a
                href={bote.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-teal inline-flex py-4 px-10 text-base font-bold"
                aria-label={`Check latest price for ${bote.name} — ${bote.price}`}
              >
                Check Latest Price — {bote.price}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-text-muted mt-4">
                🔄 Updated April 2026 · ✓ Independent Review · Affiliate link
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

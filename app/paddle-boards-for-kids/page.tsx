import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Ruler,
  Weight,
  ShieldCheck,
  Package,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Board data ──────────────────────────────────────────────── */
const BOARDS = [
  {
    id: 'roc',
    name: 'ROC Inflatable Stand-Up Paddle Board',
    length: "10'",
    rank: '#1 Pick',
    badge: 'Best Overall',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/roc-sup-amazon',
    headline: 'Best Overall for Kids',
    price: '~$299',
    summary:
      'The top family and kids paddle board on Amazon for good reason — lightweight, wide, and a complete kit straight out of the box. Forgiving stability and 275 lb capacity mean it safely supports any child size.',
    description: [
      'The ROC Inflatable SUP is the board we point most parents to when they ask what to actually buy for their kids. At roughly 10 feet long and 32 inches wide, it sits in the sweet spot for youth paddlers aged 8 through 16 — wide enough to be genuinely forgiving, short enough that kids can maneuver it without fighting the board.',
      'What separates the ROC from cheaper alternatives is the complete kit. Every purchase includes an adjustable paddle, manual pump, safety leash, removable fins, and a carry backpack. For a family just getting into paddle boarding, this means zero additional purchases before your first session. The paddle adjusts from youth to adult length, so it genuinely fits the paddler using it.',
      'The 275 lb weight capacity means even the largest child or smaller adult is operating well below the stability-compromising threshold. A board paddled at 60–70% of its rated capacity sits noticeably higher in the water and resists tipping more readily — and at typical youth weights, the ROC is always operating in that comfortable stability window.',
    ],
    pros: [
      'Complete kit included — paddle, pump, leash, fins, and carry bag ready on day one',
      '32-inch width provides a genuinely stable platform for developing young paddlers',
      '275 lb capacity means kids of any size paddle with a large stability margin',
      'Adjustable paddle grows with youth paddlers from age 8 through teen years',
    ],
    cons: [
      'Not a dedicated kids size — slightly long for children under age 8',
      'Manual pump requires adult assistance for younger children to fully inflate',
    ],
    bottomLine:
      'The ROC is the clear best choice for families buying one board that works for kids aged 8-16. Complete kit, honest stability, and a price point that removes the financial risk of a new sport.',
  },
  {
    id: 'isle-versa',
    name: 'Isle Versa',
    length: "10'",
    rank: '#2 Pick',
    badge: 'Most Versatile',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-versa-amazon',
    headline: 'Most Versatile Kids & Family Board',
    price: '~$649',
    summary:
      'The board that grows with your child — 10-foot length fits teens and smaller adults, ISLE-LINK accessory compatibility means it evolves with the paddler long past the learning phase.',
    description: [
      'The Isle Versa earns its place in this guide because it solves the most common kids paddle board problem: outgrowing the board. The 10-foot platform is ideal for teens and tweens who are approaching adult size, and the Isle-LINK accessory system means you can add gear, fishing setups, or yoga mounts as interests evolve.',
      'Build quality is a significant step above entry-level family boards. The multi-layer PVC construction maintains pressure consistently across long sessions, which matters when kids are actively jumping back on after falls. A board that loses pressure midday becomes harder to balance on — the Isle Versa does not have that problem.',
      'For families who want one board that carries a teen paddler today and an adult paddler tomorrow, the Versa makes that transition seamlessly. It is narrower than a dedicated kids board but well within the stability range that makes recreational paddling enjoyable for developing paddlers.',
    ],
    pros: [
      'ISLE-LINK system allows accessories to be added as skills and use cases grow',
      'Built to last into adult use — this board does not get outgrown after one season',
      'Multi-layer PVC construction maintains inflation consistency through full sessions',
      'Excellent choice for teens and tweens in the 100–180 lb range',
    ],
    cons: [
      'At $649, premium priced versus the ROC entry pick',
      'Less beginner-forgiving than the wider ROC for younger or smaller children',
    ],
    bottomLine:
      'The Isle Versa is the board to buy if you want something that genuinely outlasts the kids phase and transitions to adult use. Built better and priced to last.',
  },
  {
    id: 'funwater-youth',
    name: 'FunWater 8\'6" Youth Board',
    length: "8'6\"",
    rank: '#3 Pick',
    badge: 'Budget Entry',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/funwater-youth-amazon',
    headline: 'Best Budget Entry for Younger Kids',
    price: '~$99',
    summary:
      'The only dedicated kids-size board in this guide. At 8\'6" and under 15 lbs, it is the right proportion for children ages 6-12 on calm water — and the lowest-risk way to introduce younger kids to the sport.',
    description: [
      'The FunWater Youth Board is for one specific buyer: the parent of a child aged 6-12 who wants to try paddle boarding on calm water without committing to full adult board pricing. At this size and price, the barrier to entry is as low as it gets.',
      'The 8\'6" length is genuinely appropriate for younger children in a way that adult boards are not. Shorter boards are easier to control at lower body weights, easier for kids to steer without technique, and — critically — light enough at under 15 lbs that a child can help carry it to the water rather than watching adults do all the work.',
      'Be realistic about the constraints: this board is designed for calm, protected water — a flat lake or slow river on a still day. It is not suitable for open water, wind, or rough conditions. Build quality is below the ROC and Isle by a meaningful margin. If your child paddles twice a week through the summer and catches the bug, they will outgrow this board in quality terms before they outgrow it in size. For introducing the sport to young children with zero financial risk, it is the right call.',
    ],
    pros: [
      'Dedicated kids size — 8\'6" is properly proportioned for children ages 6-12',
      'Under 15 lbs — light enough for children to help carry to the water',
      'Lowest cost entry point for families testing the sport with young kids',
      'Appropriate stability for calm, protected water introduction',
    ],
    cons: [
      'Build quality below the ROC and Isle — not a long-term board',
      'Calm water only — not suitable for wind, open water, or rough conditions',
      'Expected to be outgrown in quality terms within one season of regular use',
      'Not suitable for teens or adult-weight riders',
    ],
    bottomLine:
      'The FunWater Youth Board makes sense as a trial board for younger children on calm water. If your child loves it, the upgrade to ROC or Isle is an easy next step.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Ruler,
    title: 'Size for Age and Weight',
    body: (
      <>
        Ages 6-12 generally do best on boards{' '}
        <strong>8&apos;6&quot; to 9&apos;</strong> long. Teens fit boards in
        the <strong>9&apos;6&quot; to 10&apos;6&quot;</strong> range. A board
        that is too long for a child is harder to maneuver, harder to carry,
        and will actively work against confidence-building. Match the board
        length to the paddler, not the adult doing the buying.
      </>
    ),
  },
  {
    Icon: Weight,
    title: 'Weight and Carryability',
    body: (
      <>
        If a child cannot carry the board to the water, paddle boarding becomes
        an adult production. Look for boards under{' '}
        <strong>15 lbs for children ages 6-12</strong> and under 20 lbs for
        teens. A board kids can manage themselves builds independence and makes
        every session easier for the whole family.
      </>
    ),
  },
  {
    Icon: Ruler,
    title: 'Stability — Width Matters Most',
    body: (
      <>
        Children are still developing balance and core strength. Look for boards
        at least <strong>30-32 inches wide</strong> regardless of length. A
        wider board resists tipping as young paddlers shift weight, makes
        standing up the first time dramatically easier, and builds confidence
        rather than frustration during the learning phase.
      </>
    ),
  },
  {
    Icon: ShieldCheck,
    title: 'Safety — What\'s Included',
    body: (
      <>
        At minimum, a kids board should include a{' '}
        <strong>safety leash</strong> (essential even in shallow water) and be
        compatible with a properly-fitted{' '}
        <strong>Coast Guard-approved PFD</strong>. Complete kits with a pump,
        fins, and bag eliminate the need for separate purchases before your
        first day on the water.
      </>
    ),
  },
] as const;

/* ── Common mistakes ─────────────────────────────────────────── */
const MISTAKES = [
  {
    title: 'Buying an Adult-Sized Board for a Young Child',
    body: "A standard 10'6\" adult board weighs 18-22 lbs and is simply too large for children under age 10 to manage comfortably. Heavy boards discourage kids from participating in carrying and setup, and a board that is proportionally too long is harder for lighter riders to control. Always match board size to the child.",
  },
  {
    title: 'Skipping the Leash',
    body: 'A leash is non-negotiable for children. If a child falls off in open water, an unleashed board can drift away faster than a young swimmer can retrieve it. Always attach the leash before every session, even on calm, shallow water.',
  },
  {
    title: 'Underestimating How Fast Kids Develop',
    body: "Children improve faster than adults. A board that perfectly fits a 7-year-old today may feel too short within one season as skills and confidence grow. Buying one size up from immediately needed — for example, a 9' for a child who currently fits an 8'6\" — extends the useful life of the board significantly.",
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What size paddle board is best for kids?',
    a: "Ages 6-10 do best on 8'6\"-9' boards. These proportions are genuinely manageable for smaller riders at lower body weights — easier to carry, turn, and control. Teens in the 12-17 range typically fit 10' to 10'6\" boards, which also work well for smaller adults. Matching the board to the paddler's size builds confidence faster than forcing a young child onto full adult equipment.",
  },
  {
    q: 'At what age can kids start paddle boarding?',
    a: "Children as young as 5-6 can start on calm, protected water with proper supervision and a properly-fitted PFD. At young ages, many kids start by sitting or kneeling on the board rather than standing — which is completely normal and builds familiarity with balance before attempting to stand. Most children are confidently standing and paddling by age 8-9 with regular exposure.",
  },
  {
    q: 'Are inflatable paddle boards safe for kids?',
    a: "Yes — inflatables are actually safer than hardboards for children. When a child falls (and they will), a properly inflated board has some give on impact versus a rigid fiberglass or carbon shell. Inflatables are also lighter and easier for kids to carry, making sessions less of a production. Premium inflatables like the ROC are rigid enough at proper inflation to provide excellent stability without the impact risk of hard boards.",
  },
  {
    q: 'Do kids need a life jacket when paddle boarding?',
    a: "Yes — always. In the US, the Coast Guard requires approved PFDs for children under 13 on navigable waters, and best practice is to require a PFD regardless of age in open water. Choose a properly-fitted PFD rated for the child's weight, not a generic adult vest. A PFD that does not fit correctly provides significantly reduced protection.",
  },
  {
    q: 'What is the best budget kids paddle board?',
    a: "The ROC Inflatable SUP at ~$299 is the top pick for families looking for quality at a mid-range price. It includes a complete kit, has legitimate stability for youth paddlers aged 8-16, and is backed by strong Amazon reviews. For children ages 6-12 on a tighter budget, the FunWater 8'6\" at ~$99 is the lowest-risk introduction — appropriate for calm water use while you confirm the sport is a good fit.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Boards for Kids (2026 Buyer\'s Guide) | PaddleBoardShop',
  description:
    'Find the best paddle boards for kids in 2026. Expert picks sized for children and teens — with stability ratings, safety tips, and the right sizing guide for young paddlers.',
  keywords: [
    'best paddle board for kids',
    'kids paddle board',
    'paddle board for children 2026',
    'youth SUP board',
    'kids inflatable paddle board',
    'best SUP for kids',
    'paddle board age 8',
    'youth stand up paddle board',
  ],
  openGraph: {
    title: 'Best Paddle Boards for Kids (2026 Buyer\'s Guide) | PaddleBoardShop',
    description:
      'Expert picks sized for children and teens — stability ratings, safety tips, and the right sizing guide for young paddlers.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Paddle Boards for Kids (2026 Buyer\'s Guide) | PaddleBoardShop',
    description:
      'Expert picks sized for children and teens — stability ratings, safety tips, and the right sizing guide for young paddlers.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/paddle-boards-for-kids',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function KidsPaddleBoards() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Best Paddle Boards for Kids (2026 Buyer's Guide)",
    description:
      'Expert picks for the best kids paddle boards in 2026 — with stability ratings, safety tips, and a sizing guide for young paddlers.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/paddle-boards-for-kids',
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
        { name: 'Best Paddle Boards for Kids' },
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
                  <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-sky-glow)' }}>
                    PaddleBoardShop
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li>
                  <Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-sky-glow)' }}>
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Best Boards for Kids</li>
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
              Complete Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Boards{' '}
              <span className="gradient-text">for Kids</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Most kids paddle board guides recommend adult-sized boards that are
              too heavy, too long, and too difficult for young paddlers. This guide
              identifies the three boards actually sized and designed for children —
              and the four criteria that make all the difference for youth paddlers.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent reviews', 'Youth-specific sizing', 'Safety-first picks', 'Updated May 2026'].map((m) => (
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
              Finding the right paddle board for a child is not the same as finding
              a beginner board for an adult. Kids need boards that match their
              weight, arm reach, and developing balance — not a scaled-down version
              of adult equipment that is still too heavy for a 9-year-old to carry.
            </p>
            <p>
              The most common mistake is buying a standard adult board and assuming
              the child will grow into it. A 22 lb board is a significant portion
              of a young child&apos;s body weight, and a board that a kid cannot carry
              to the water becomes a board the kid does not feel ownership over. The
              right sizing makes the entire experience more positive.
            </p>
            <p>
              If you want the recommendation immediately,{' '}
              <a href="#quick-answer" className="article-link">
                jump to the top three picks
              </a>
              . If you are evaluating what to look for in a youth board, the{' '}
              <a href="#buying-guide" className="article-link">
                buying guide below
              </a>{' '}
              covers the four criteria that determine whether a kids board works.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK PICKS
        ════════════════════════════════ */}
        <section id="quick-answer" aria-labelledby="quick-answer-heading" className="article-section">
          <div className="article-wide">
            {/* Snippet callout */}
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <h2 id="quick-answer-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 3 Kids Paddle Boards for 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by youth-appropriate sizing, stability, and complete kit value.
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
                  id={`pick-card-kids-${id}`}
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
            BUYING GUIDE
        ════════════════════════════════ */}
        <section id="buying-guide" aria-labelledby="buying-guide-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-guide-heading" className="article-h2">
              What Makes a Paddle Board Right for Kids
            </h2>
            <p>
              Buying for a child is different from buying for an adult beginner.
              These four criteria are the ones that actually determine whether a
              young paddler has a positive first experience — in order of priority.
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
        <section id="product-reviews" aria-labelledby="reviews-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-heading" className="article-h2">
              The 3 Best Kids Paddle Boards for 2026
            </h2>
            <p>
              Full breakdowns of each board — what makes it suitable for young
              paddlers, where it excels, and which age range it fits best.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* Review 1: ROC */}
            <article id="review-roc-kids" aria-labelledby="review-roc-kids-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full shrink-0">Best Overall</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#1 Pick</span>
              </div>
              <h3 id="review-roc-kids-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                ROC Inflatable Stand-Up Paddle Board{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-glacier-teal)' }}>
                Best Overall for Kids — ~$299
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
                id="cta-roc-kids"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for ROC Inflatable SUP on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 2: Isle Versa */}
            <article id="review-isle-versa-kids" aria-labelledby="review-isle-versa-kids-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">Most Versatile</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#2 Pick</span>
              </div>
              <h3 id="review-isle-versa-kids-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Isle Versa{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Most Versatile Kids &amp; Family Board — ~$649
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
                id="cta-isle-versa-kids"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Isle Versa on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 3: FunWater Youth */}
            <article id="review-funwater-youth-kids" aria-labelledby="review-funwater-youth-kids-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Budget Entry</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#3 Pick</span>
              </div>
              <h3 id="review-funwater-youth-kids-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                FunWater Youth Board{' '}
                <span className="text-text-muted font-medium text-lg">8&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Budget Entry for Younger Kids — ~$99
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
                id="cta-funwater-youth-kids"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for FunWater Youth Board on Amazon"
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
        <section id="comparison" aria-labelledby="comparison-kids-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-kids-heading" className="article-h2">Side-by-Side Comparison</h2>
            <p>Key specs for all three boards at a glance. Click any &quot;Check Price&quot; link for current Amazon pricing.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Kids paddle board comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.90)', borderBottom: '1px solid rgba(56,189,248,0.2)' }}>
                      {['Board', 'Best Age', 'Width', 'Weight', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      { name: 'ROC Inflatable SUP', badge: 'Best Overall', badgeClass: 'badge-teal', length: "10'", bestFor: 'Ages 8–16', width: '32"', weight: '~17 lbs', price: '~$299', affiliateUrl: '/go/roc-sup-amazon', ctaId: 'table-roc-kids' },
                      { name: 'Isle Versa', badge: 'Most Versatile', badgeClass: 'badge-amber', length: "10'", bestFor: 'Teens & families', width: '32"', weight: '~19 lbs', price: '~$649', affiliateUrl: '/go/isle-versa-amazon', ctaId: 'table-isle-versa-kids' },
                      { name: 'FunWater Youth', badge: 'Budget Entry', badgeClass: 'badge-sky', length: "8'6\"", bestFor: 'Ages 6–12', width: '30"', weight: '~13 lbs', price: '~$99', affiliateUrl: '/go/funwater-youth-amazon', ctaId: 'table-funwater-youth-kids' },
                    ].map((row) => (
                      <tr key={row.name} className="table-row-hover">
                        <td className="px-5 py-5 min-w-[200px]">
                          <span className={`${row.badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1.5`}>{row.badge}</span>
                          <p className="font-bold text-text-primary text-sm leading-tight">{row.name}</p>
                          <p className="text-text-muted text-xs">{row.length}</p>
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs">{row.bestFor}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.width}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.weight}</td>
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
        <section id="common-mistakes" aria-labelledby="mistakes-kids-heading" className="article-section">
          <div className="article-body">
            <h2 id="mistakes-kids-heading" className="article-h2">Common Kids Paddle Board Mistakes to Avoid</h2>
            <p>
              Most parents buying their first kids board make the same three
              mistakes. Each one makes the experience harder than it needs to be.
            </p>
            <div className="space-y-5 mt-8">
              {MISTAKES.map(({ title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-sky-glow)' }} aria-hidden="true" />
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
        <section id="faq" aria-labelledby="faq-kids-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-kids-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-kids" aria-labelledby="related-guides-kids-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-kids-heading" className="article-h2">Related Guides</h2>
            <p>Ready to go deeper? These guides cover the questions that naturally come next once you have the right board.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-kids', title: 'Best Paddle Boards for Beginners (2026)', desc: 'When kids are ready to graduate to adult boards — the top three beginner picks with stability ratings.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-kids', title: 'What Size Paddle Board Do I Need?', desc: 'Full sizing guide covering length, width, and thickness for every body type and skill level.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-kids', title: 'Best Inflatable Paddle Boards Under $1,000 (2026)', desc: 'Budget-specific picks for families ready to upgrade from starter boards to premium inflatables.' },
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

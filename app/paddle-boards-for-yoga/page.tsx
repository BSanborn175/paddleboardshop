import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  ArrowLeftRight,
  Layers,
  Gauge,
  Ruler,
  BookOpen,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Board data ──────────────────────────────────────────────── */
const BOARDS = [
  {
    id: 'bote-breeze-aero-yoga',
    name: 'BOTE Breeze Aero',
    length: "10'8\"",
    rank: '#1 Pick',
    badge: 'Best for Yoga',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/bote-breeze-aero',
    headline: 'Best Overall Yoga SUP',
    price: '~$899',
    summary:
      "Wide 33\" deck, AeroULTRA rigidity, and a flat platform that holds poses without flex. The top-ranked yoga paddle board for 2026.",
    description: [
      "The BOTE Breeze Aero earns the top slot in yoga SUP rankings because it solves the two problems that make yoga on water difficult: platform flex and insufficient width. At 33 inches wide with AeroULTRA construction inflated to 15 PSI, the Breeze Aero provides a flat, rigid deck that behaves more like a floating mat than a conventional inflatable board. When you transition from downward dog into warrior pose, the platform does not shift or compress beneath your hands — which is exactly what yoga on water demands.",
      "The deck pad covers the majority of the board's surface area in a diamond-groove EVA pattern that grips bare feet and hands without being abrasive. During flow sequences — moving through multiple poses in rhythm — the surface provides enough friction to prevent slipping while remaining comfortable on knees and wrists during longer holds. The 33-inch width is the minimum we recommend for confident yoga practice; boards below 32 inches require significantly more counterbalancing effort during side-body poses.",
      "At 17.5 lbs, the Breeze Aero is also the lightest premium yoga-suitable board in this guide, which matters when you are carrying the board solo from a car park to a launch point. The MAGNEPOD system is a secondary advantage for yoga practitioners specifically: you can add a waterproof speaker mount, a water bottle holder, or gear attachment points without modifying the deck surface. For paddlers who want one board that works equally well for paddling and yoga practice, the Breeze Aero is the definitive answer.",
    ],
    pros: [
      '33" width provides confident stability during standing and balancing poses',
      'AeroULTRA construction eliminates platform flex during pose transitions',
      'Diamond-groove EVA deck pad grips bare feet and hands throughout flow sequences',
      '17.5 lbs — lightest yoga-capable premium iSUP in this guide',
      'MAGNEPOD system allows adding speakers and gear without deck modification',
    ],
    cons: [
      '300 lb capacity is lower than the Isle Pioneer Pro for heavier paddlers',
      'MAGNEPOD accessories add cost if purchased separately',
    ],
    bottomLine:
      'The BOTE Breeze Aero is the best yoga paddle board for 2026. The 33" width, AeroULTRA rigidity, and full EVA deck pad combine to create a platform that handles yoga sequences with genuine confidence.',
  },
  {
    id: 'isle-pioneer-pro-yoga',
    name: 'Isle Pioneer Pro',
    length: "10'6\"",
    rank: '#2 Pick',
    badge: 'Most Stable',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-pioneer-pro',
    headline: 'Most Stable Platform for Yoga',
    price: '~$999',
    summary:
      '335 lb capacity, near-hardboard rigidity, and a full-length EVA pad. The highest-stability yoga SUP in this guide — ideal for heavier paddlers or those who want maximum confidence during poses.',
    description: [
      "The Isle Pioneer Pro's primary advantage for yoga is its 335 lb weight capacity combined with near-hardboard rigidity from the fusion laminate construction. When a board is operated well below its rated capacity — which the Pioneer Pro enables for most paddlers — it rides higher in the water, remains flatter, and is significantly more resistant to rocking from wind or slight water movement. For yoga practice, that low-weight-to-capacity ratio translates directly into a more stable, confidence-inspiring platform.",
      "The full-length EVA deck pad runs from nose to tail rather than covering only the center section, which is a significant advantage for yoga. Inversion poses, lunges, and transitions that put hands or feet near the tail or nose of the board still benefit from the non-slip surface. The pad texture balances grip with surface comfort — suitable for extended sessions without the abrasion that more aggressive textures can cause on wrists and knees.",
      "At a near-hardboard rigidity score, the Pioneer Pro eliminates the subtle bouncing and platform compression that softer boards create under dynamic weight shifts during yoga sequences. Moving from a low lunge to a standing pose requires pushing through the board rather than into it — and the Pioneer Pro's hull provides exactly that response. For yogis who prioritize the most stable platform available over portability or price, this is the board to consider.",
    ],
    pros: [
      '335 lb capacity keeps platform riding high and stable for most paddlers',
      'Near-hardboard rigidity eliminates platform flex during dynamic pose transitions',
      'Full-length EVA deck pad covers nose to tail for versatile pose positioning',
      'Comprehensive kit includes carbon-hybrid paddle, dual pump, and roller bag',
      'Two-year warranty with strong US-based customer support',
    ],
    cons: [
      'Higher price at ~$999 versus the BOTE Breeze Aero',
      'Slightly heavier than the BOTE Breeze Aero to carry solo to the water',
    ],
    bottomLine:
      'The Isle Pioneer Pro is the most stable yoga paddle board in this guide. The 335 lb capacity and near-hardboard rigidity make it the best choice for heavier paddlers or those who want absolute confidence during advanced pose sequences.',
  },
  {
    id: 'atoll-11-yoga',
    name: 'Atoll 11\'',
    length: "11'",
    rank: '#3 Pick',
    badge: 'Premium Pick',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/atoll-11-amazon',
    headline: 'Best Premium Yoga SUP',
    price: '~$999',
    summary:
      "11' length provides a longer stable platform for extended flows, with a full-length deck pad and premium rigidity that holds positions confidently.",
    description: [
      "The Atoll 11' stands out in the yoga SUP category for one specific reason: length. At 11 feet, it provides a longer stable surface than 10'6\" boards, which matters for yoga practitioners who need more room to extend into poses like warrior III, extended side angle, or splits. The additional 6 inches of usable deck real estate is meaningful during flow sequences that transition through full-body extensions.",
      "The full-length EVA foam deck pad covers the entire board surface in a non-slip texture that works well for both bare feet and hands throughout extended sessions. Atoll's construction uses military-grade PVC with machine-laminated seams and a high-density drop-stitch core that achieves solid rigidity at maximum inflation (15 PSI). The platform holds its shape under shifting body weight during transitions without the bounce or compression that lower-rigidity boards produce during dynamic movement.",
      "Atoll ships the board with a complete kit: a carbon-fiberglass paddle, a high-pressure dual-action pump, a carry backpack, a leash, and three fins. The brand sells primarily through Amazon and maintains strong customer reviews focused on construction quality and customer service responsiveness. For yoga practitioners who want a premium board with extra deck length and a full-surface grip pad, the Atoll 11' is the strongest option in its price class.",
    ],
    pros: [
      "11' length provides more deck room for extended poses and transitions",
      'Full-surface EVA deck pad covers the entire board for unrestricted positioning',
      'Military-grade PVC with machine-laminated seams for multi-season durability',
      'Complete kit included: carbon-fiberglass paddle, dual pump, backpack, fins, leash',
      'Strong Amazon reviews focused on build quality and customer support',
    ],
    cons: [
      "11' length is less maneuverable for paddling versus 10'6\" boards",
      'Heavier than the BOTE Breeze Aero due to construction method',
    ],
    bottomLine:
      "The Atoll 11' is the right yoga SUP for practitioners who prioritize deck length and full-surface grip over portability. The longer platform genuinely benefits extended pose sequences and full-body transitions.",
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: ArrowLeftRight,
    title: "Width: 33\"+ for Yoga — The Minimum for Confident Practice",
    body: (
      <>
        Width is the most critical specification for yoga paddle boards. A board{' '}
        <strong>33 inches or wider</strong> provides the platform width needed to
        hold balancing poses without constant micro-corrections. At 31 inches or
        below, side-body poses and single-leg balances become significantly harder
        to hold, requiring more effort for counterbalancing than the pose itself.
        Do not compromise on width for a yoga-specific board.
      </>
    ),
  },
  {
    Icon: Layers,
    title: 'Deck Texture: EVA Coverage and Grip Pattern',
    body: (
      <>
        The deck pad material and pattern determine both{' '}
        <strong>grip and comfort</strong> during barefoot yoga practice. Look for
        full-length EVA foam coverage — not a small center pad — with a
        diamond-groove or similar texture that grips hands and feet without
        abrading skin during extended sessions. Rough, aggressive textures cause
        wrist and knee discomfort over 30–60 minute yoga sessions on the water.
      </>
    ),
  },
  {
    Icon: Gauge,
    title: 'Rigidity: Why a Rigid Platform Makes Poses Safer',
    body: (
      <>
        A soft board creates a{' '}
        <strong>trampoline effect</strong> — weight placed during a pose compresses
        the platform, then releases, disrupting balance during transitions. Premium
        boards from BOTE, Isle, and Atoll achieve 8.5–9.3/10 rigidity scores at
        15 PSI, eliminating this bounce. Always inflate to maximum rated PSI before
        a yoga session. Under-inflation by even 2–3 PSI creates noticeable flex
        that compromises stability during flow sequences.
      </>
    ),
  },
  {
    Icon: Ruler,
    title: 'Deck Length and Shape: More Room for Full-Body Poses',
    body: (
      <>
        Longer boards — <strong>10&apos;8&quot; to 11&apos;</strong> — provide more
        usable deck space for extended poses, transitions, and sequences that
        move across the board&apos;s length. A flat rocker profile (minimal upward
        curvature from center to nose) keeps the deck level throughout its length,
        which matters when hands or feet are positioned near the nose during
        downward-facing positions. Boards with aggressive rocker profiles create
        a slope that makes certain poses more difficult to hold level.
      </>
    ),
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best paddle board for yoga?',
    a: "The BOTE Breeze Aero is the best paddle board for yoga in 2026. Its 33\" width, AeroULTRA rigidity at 15 PSI, and full-coverage diamond-groove EVA deck pad create the most yoga-optimized platform in its price range. For paddlers who need maximum weight capacity and the highest rigidity score, the Isle Pioneer Pro at 335 lb capacity is the stronger alternative. For those who want more deck length for extended pose sequences, the Atoll 11' provides an extra 6\" of usable platform.",
  },
  {
    q: 'Can you do yoga on an inflatable paddle board?',
    a: "Yes — premium inflatable paddle boards from BOTE, Isle, and Atoll are genuinely suitable for yoga practice. At maximum inflation (15 PSI), these boards achieve rigidity scores above 8.5/10, eliminating the platform flex that makes yoga difficult on budget inflatables. The key is board width (33\" minimum) and rigidity — budget boards under $300 are typically too soft and too narrow to support confident yoga practice on water.",
  },
  {
    q: 'What size paddle board do I need for yoga?',
    a: "For yoga, prioritize width over length: 33 inches minimum, with 10'6\" to 11' of length. Width is the primary stability factor for holding balancing poses — a 33\" board provides significantly more lateral stability than a 31\" board. Length matters secondarily for deck space during extended pose sequences. The BOTE Breeze Aero at 10'8\" x 33\" and the Atoll at 11' are both well-sized for yoga use.",
  },
  {
    q: 'Is a wider paddle board better for yoga?',
    a: "Yes — width is the primary stability factor for SUP yoga. Wider boards (33\"+) provide more lateral stability that allows you to hold poses, especially single-leg balances and side-body poses, without constant microadjustments. Narrower boards (30–31\") require significantly more active counterbalancing during yoga compared to a 33\" platform, which reduces your ability to focus on form and breathing. Never choose a yoga board below 32\" wide.",
  },
  {
    q: 'What PSI should a yoga paddle board be inflated to?',
    a: "Always inflate to the manufacturer's maximum rated PSI — typically 15 PSI for premium yoga-suitable boards from BOTE, Isle, and Atoll. Higher inflation pressure creates a firmer, more rigid platform with less flex underfoot. Under-inflating even by 2–3 PSI creates noticeable board flex during yoga transitions that can cause loss of balance. Use a pump with a built-in pressure gauge and inflate to maximum before every yoga session.",
  },
] as const;

/* ── JSON-LD schemas ─────────────────────────────────────────── */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Paddle Boards for Yoga (2026 Guide)',
  description:
    'Find the best paddle boards for yoga in 2026. Expert picks ranked by stability, deck width, non-slip surface, and weight capacity — the four specs that matter most for SUP yoga.',
  author: { '@type': 'Organization', name: 'PaddleBoardShop' },
  publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
  datePublished: '2026-05-01',
  dateModified: '2026-05-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.paddleboardshop.com/paddle-boards-for-yoga',
  },
  image: 'https://www.paddleboardshop.com/images/og-default.png',
};

const faqSchemaData = FAQS.map(({ q, a }) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: { '@type': 'Answer', text: a },
}));

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSchemaData,
};

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Boards for Yoga (2026 Guide) | PaddleBoardShop',
  description:
    'Find the best paddle boards for yoga in 2026. Expert picks ranked by stability, deck width, non-slip surface, and weight capacity — the four specs that matter most for SUP yoga.',
  keywords: [
    'best paddle board for yoga',
    'yoga SUP board',
    'paddle board yoga 2026',
    'best yoga SUP',
    'SUP yoga board',
    'inflatable paddle board for yoga',
    'BOTE Breeze Aero yoga',
    'Isle Pioneer Pro yoga',
    'Atoll 11 yoga SUP',
    'wide paddle board yoga',
  ],
  openGraph: {
    title: 'Best Paddle Boards for Yoga (2026 Guide) | PaddleBoardShop',
    description:
      'Expert picks ranked by stability, deck width, non-slip surface, and weight capacity — the four specs that matter most for SUP yoga.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Paddle Boards for Yoga (2026 Guide) | PaddleBoardShop',
    description:
      'Expert picks for the best yoga SUP boards in 2026, ranked by stability, deck width, and rigidity.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/paddle-boards-for-yoga',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function PaddleBoardsForYoga() {
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
        { name: 'Best Paddle Boards for Yoga' },
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
            className="orb w-[650px] h-[420px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(251,191,36,0.05)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li>
                  <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-amber-glow)' }}>
                    PaddleBoardShop
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li>
                  <Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-amber-glow)' }}>
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Best Boards for Yoga</li>
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
              Best Paddle Boards{' '}
              <span className="gradient-text">for Yoga</span>{' '}
              2026
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              SUP yoga demands a different board than general paddling. Width,
              rigidity, and deck pad coverage determine whether you can hold
              poses confidently — or spend your session fighting for balance.
              This guide ranks the three best yoga paddle boards for 2026 by
              the four specs that actually matter for on-water yoga practice.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent reviews', 'Yoga-specific criteria', 'No paid placements', 'Updated May 2026'].map((m) => (
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
              Not every paddle board is a yoga board. Most all-around iSUPs are
              designed for paddling performance — narrower, lighter, and shaped for
              tracking efficiency rather than the wide, flat, rigid platform that
              yoga on water requires. Choosing the wrong board turns SUP yoga from
              a flowing practice into a constant balancing act.
            </p>
            <p>
              This guide covers the four criteria that actually determine yoga
              board performance — width, deck texture, rigidity, and deck shape —
              and ranks three boards that meet all of them. Each review focuses
              specifically on how the board handles yoga practice: stability during
              holds, grip during flows, and platform response during transitions.
            </p>
            <p>
              If you want the top pick immediately,{' '}
              <a href="#quick-answer" className="article-link">
                jump to the ranked picks
              </a>
              . For a full breakdown of what makes a board yoga-suitable, the{' '}
              <a href="#buying-guide" className="article-link">
                buying guide below
              </a>{' '}
              covers the four specifications that determine yoga performance.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK PICKS
        ════════════════════════════════ */}
        <section id="quick-answer" aria-labelledby="quick-answer-yoga-heading" className="article-section">
          <div className="article-wide">
            {/* Snippet callout */}
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
              <h2 id="quick-answer-yoga-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 3 Yoga Paddle Boards for 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by width, deck grip, rigidity, and stability during yoga practice.
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
                  id={`pick-card-yoga-${id}`}
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
        <section id="buying-guide" aria-labelledby="buying-guide-yoga-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-guide-yoga-heading" className="article-h2">
              What Makes a Paddle Board Good for Yoga: 4 Key Criteria
            </h2>
            <p>
              Most paddle board reviews evaluate boards for paddling performance.
              Yoga demands a different set of priorities. These four specifications
              determine whether a board actually works for SUP yoga — or just looks
              good in promotional photos.
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
        <section id="product-reviews" aria-labelledby="reviews-yoga-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-yoga-heading" className="article-h2">
              The 3 Best Yoga Paddle Boards for 2026
            </h2>
            <p>
              Full breakdowns of each board — with specific focus on why it works
              for yoga: stability during holds, deck grip through flow sequences,
              and platform response during dynamic transitions.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* Review 1: BOTE Breeze Aero */}
            <article id="review-bote-breeze-aero-yoga" aria-labelledby="review-bote-breeze-aero-yoga-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">Best for Yoga</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#1 Pick</span>
              </div>
              <h3 id="review-bote-breeze-aero-yoga-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                BOTE Breeze Aero{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Best Overall Yoga SUP — ~$899
              </p>
              {BOARDS[0].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-amber-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[0].pros.map((p) => (
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
                id="cta-bote-breeze-aero-yoga"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for BOTE Breeze Aero yoga paddle board"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 2: Isle Pioneer Pro */}
            <article id="review-isle-pioneer-pro-yoga" aria-labelledby="review-isle-pioneer-pro-yoga-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">Most Stable</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#2 Pick</span>
              </div>
              <h3 id="review-isle-pioneer-pro-yoga-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Isle Pioneer Pro{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Most Stable Platform for Yoga — ~$999
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
                id="cta-isle-pioneer-pro-yoga"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Isle Pioneer Pro yoga paddle board"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 3: Atoll 11' */}
            <article id="review-atoll-11-yoga" aria-labelledby="review-atoll-11-yoga-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Premium Pick</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#3 Pick</span>
              </div>
              <h3 id="review-atoll-11-yoga-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Atoll 11&apos;{' '}
                <span className="text-text-muted font-medium text-lg">11&apos;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Premium Yoga SUP — ~$999
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
                id="cta-atoll-11-yoga"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Atoll 11' yoga paddle board on Amazon"
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
        <section id="comparison" aria-labelledby="comparison-yoga-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-yoga-heading" className="article-h2">Side-by-Side Yoga Board Comparison</h2>
            <p>Key yoga-specific specs for all three boards at a glance. Click any &quot;Check Price&quot; link for current pricing.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Yoga paddle board comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.90)', borderBottom: '1px solid rgba(251,191,36,0.2)' }}>
                      {['Board', 'Best For', 'Width', 'Capacity', 'Deck Pad', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      { name: 'BOTE Breeze Aero', badge: 'Best for Yoga', badgeClass: 'badge-amber', length: "10'8\"", bestFor: 'All-around yoga', width: '33"', capacity: '300 lbs', deckPad: 'Full EVA', price: '~$899', affiliateUrl: '/go/bote-breeze-aero', ctaId: 'table-bote-breeze-aero-yoga' },
                      { name: 'Isle Pioneer Pro', badge: 'Most Stable', badgeClass: 'badge-amber', length: "10'6\"", bestFor: 'Max stability', width: '32"', capacity: '335 lbs', deckPad: 'Full EVA', price: '~$999', affiliateUrl: '/go/isle-pioneer-pro', ctaId: 'table-isle-pioneer-pro-yoga' },
                      { name: "Atoll 11'", badge: 'Premium Pick', badgeClass: 'badge-sky', length: "11'", bestFor: 'Extra deck length', width: '32"', capacity: '350 lbs', deckPad: 'Full EVA', price: '~$999', affiliateUrl: '/go/atoll-11-amazon', ctaId: 'table-atoll-11-yoga' },
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
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.deckPad}</td>
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
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-yoga-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-yoga-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-yoga" aria-labelledby="related-guides-yoga-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-yoga-heading" className="article-h2">Related Guides</h2>
            <p>Going deeper into paddle board selection? These guides answer the most common follow-up questions.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'link-isup-from-yoga', title: 'Best Inflatable Paddle Boards 2026 — Expert Ranked', desc: 'The definitive guide to the best iSUPs in 2026 with rigidity scores, capacity data, and full kit breakdowns.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-yoga', title: 'Best Paddle Boards for Beginners (2026)', desc: 'The most beginner-friendly boards ranked by stability, forgiveness, and long-term value.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-yoga', title: 'What Size Paddle Board Do I Need?', desc: 'Length, width, and thickness explained — find the right dimensions for your body weight and intended use.' },
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

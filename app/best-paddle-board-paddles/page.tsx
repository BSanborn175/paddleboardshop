import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle, BookOpen, ArrowLeftRight, Scale, Package, Layers } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/* ── Paddle data ─────────────────────────────────────────────── */
const PADDLES = [
  {
    id: 'werner',
    name: 'Werner Paddles Camano',
    rank: '#1 Pick',
    badge: 'Best Overall',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/werner-camano-paddle',
    headline: 'Best Overall SUP Paddle',
    price: '~$280',
    material: 'Fiberglass Blade / Carbon Shaft',
    weight: '22 oz',
    bladeType: 'Low-Angle',
    pieces: '2-Piece Adjustable',
    summary:
      'Werner makes the most widely used paddle in the sport. The Camano pairs a quality fiberglass blade with a lightweight shaft in the low-angle design that recreational and touring paddlers use for long sessions.',
    description: [
      'Werner Paddles is the name you see most often in the hands of instructors, guides, and experienced paddlers. The Camano is the paddle that earned that reputation. The fiberglass blade construction hits the right balance — lighter than aluminum by a noticeable margin, stiffer than cheaper fiberglass designs, and durable enough for regular multi-hour use without the flex fatigue that lower-grade paddles develop mid-season.',
      'The low-angle blade design is purpose-built for recreational and touring paddlers. It generates smooth, efficient power strokes with significantly less shoulder strain over distance compared to high-angle racing designs. If you plan to paddle for more than an hour at a time, low-angle is almost always the right choice.',
      'At 22 oz, the Camano is light enough that you will notice the difference from your first session. Most paddlers dramatically underestimate how much paddle weight affects endurance — every lift of a heavier paddle multiplies across thousands of strokes. The Werner Camano is the standard against which all other paddles in this guide are measured.',
    ],
    pros: [
      'The most widely used brand among instructors and experienced paddlers',
      'Fiberglass blade delivers excellent stiffness-to-weight ratio',
      'Low-angle design reduces shoulder strain over long sessions',
      '22 oz — noticeably lighter than mid-range fiberglass alternatives',
    ],
    cons: [
      'Higher price than mid-tier carbon paddles from lesser-known brands',
      'Fiberglass (not full carbon) — slightly heavier than carbon-only alternatives like the Aqua Bound',
    ],
    bottomLine: 'The Werner Camano is the right answer for paddlers who want the best all-around paddle without going to full carbon pricing. Excellent long-session comfort and a brand that holds its value.',
    image: '/images/werner-camano-paddle.jpg',
    imageAlt: 'Werner Paddles Camano fiberglass SUP paddle leaning over teal water',
  },
  {
    id: 'aquabound',
    name: 'Aqua Bound Manta Ray Carbon',
    rank: '#2 Pick',
    badge: 'Best Carbon Value',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/aqua-bound-manta-ray',
    headline: 'Best Full Carbon at a Reasonable Price',
    price: '~$230',
    material: 'Full Carbon',
    weight: '20 oz',
    bladeType: 'Low-Angle',
    pieces: '2-Piece Adjustable',
    summary:
      'Full carbon construction at sub-Werner pricing. The lightest paddle in this comparison at 20 oz — the best pick for paddlers making the jump from aluminum or entry-level fiberglass.',
    description: [
      "The Aqua Bound Manta Ray Carbon delivers full carbon construction — blade and shaft — at a price point well below what full-carbon paddles typically command. At 20 oz, it is the lightest paddle in this comparison, and the all-carbon build eliminates the flex that mixed fiberglass/carbon paddles still exhibit under hard strokes.",
      "The low-angle blade shape matches the Werner Camano's recreational touring orientation. Two-piece adjustable design accommodates paddlers of different heights, making it a strong choice for households with multiple paddlers. The carbon shaft maintains its rigidity even in cold water, which causes some competing carbon blends to feel slightly more flexible.",
    ],
    pros: [
      'Full carbon construction — lightest paddle in this comparison at 20 oz',
      'Sub-Werner pricing makes full carbon accessible',
      '2-piece adjustable for households with multiple paddlers',
      'Low-angle blade keeps shoulder strain low over long sessions',
    ],
    cons: [
      'Less brand recognition than Werner among serious paddlers',
      'Carbon requires more careful handling to avoid blade chip at the edges vs fiberglass',
    ],
    bottomLine: 'The Aqua Bound Manta Ray Carbon is the right upgrade path for paddlers coming from aluminum who want the full weight advantage of carbon without the highest price tier.',
    image: '/images/aqua-bound-manta-ray.jpg',
    imageAlt: 'Aqua Bound Manta Ray Carbon full carbon fiber SUP paddle on water',
  },
  {
    id: 'bending',
    name: 'Bending Branches Whiskey Carbon',
    rank: '#3 Pick',
    badge: 'Best for Touring',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/bending-branches-whiskey',
    headline: 'Best for Touring and Distance Paddling',
    price: '~$250',
    material: 'Carbon Fiber',
    weight: '21 oz',
    bladeType: 'Low-Angle',
    pieces: '2-Piece Adjustable',
    image: '/images/bending-branches-whiskey.jpg',
    imageAlt: 'Bending Branches Whiskey Carbon touring SUP paddle on open water',
    summary: 'Carbon touring paddle designed for distance and consistent stroke efficiency over multiple hours. Natural pairing with the Red Paddle Co Sport for serious touring paddlers.',
    description: [
      "Bending Branches is a respected mid-tier paddle brand with a strong focus on touring design. The Whiskey Carbon is built for paddlers who take long-distance sessions seriously — the carbon shaft maintains rigidity over extended repetitive strokes in a way that mixed-material paddles gradually lose.",
      "The blade geometry leans toward touring efficiency: a slightly narrower surface area generates less resistance per stroke while maintaining power, which translates to better pace-per-effort over long distances. This pairs naturally with the Red Paddle Co Sport 11'3\" reviewed on this site, which has the hull profile designed for exactly this kind of extended touring use.",
    ],
    pros: [
      'Touring-optimized blade geometry for better efficiency over distance',
      'Carbon construction at a competitive price',
      'Natural pairing with performance touring boards like Red Paddle Co Sport',
      '21 oz — lighter than most fiberglass alternatives at this price',
    ],
    cons: [
      'Touring blade geometry is less suited to casual flatwater paddling than Werner or Aqua Bound',
      'Bending Branches has less brand recognition than Werner',
    ],
    bottomLine: 'The right paddle for distance and touring paddlers. If your sessions regularly exceed an hour and you prioritize efficiency over casual comfort, the Whiskey Carbon is the pick.',
  },
  {
    id: 'bote',
    name: 'BOTE Rover Aero Carbon',
    rank: '#4 Pick',
    badge: 'Best for BOTE Owners',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/bote-rover-paddle',
    headline: 'Best Brand-Matched Paddle for BOTE Boards',
    price: '~$199',
    material: 'Carbon Fiber',
    weight: '23 oz',
    bladeType: 'All-Around',
    pieces: '3-Piece Adjustable',
    image: '/images/bote-rover-paddle.jpg',
    imageAlt: 'BOTE Rover Aero Carbon 3-piece adjustable SUP paddle disassembled',
    summary: '3-piece adjustable carbon paddle from BOTE — designed to match the BOTE Breeze Aero and the rest of the BOTE lineup. Strong brand integration and the most packable option in this comparison.',
    description: [
      "The BOTE Rover Aero Carbon is the natural pairing for the BOTE Breeze Aero reviewed on this site. It is the paddle BOTE designs and tests alongside their boards, and the ergonomics and blade geometry reflect that matched development process.",
      "The 3-piece construction is the most packable of any paddle in this comparison — it collapses to a size that fits within the BOTE carry bag alongside the board itself, making it the right choice for paddlers who travel with their board or need compact storage. Carbon construction at the $199 price point makes it strong value in the BOTE ecosystem.",
    ],
    pros: [
      'Brand-matched to BOTE boards — ergonomics designed together',
      '3-piece construction packs smallest of any paddle in this guide',
      'Carbon at competitive price within the BOTE product range',
      'Adjustable length accommodates multiple paddler heights',
    ],
    cons: [
      'Heavier than Aqua Bound at 23 oz despite carbon construction',
      '3-piece introduces more flex at the connections vs 2-piece designs',
    ],
    bottomLine: 'The right paddle if you own a BOTE board and want matched gear. The 3-piece packability is a meaningful advantage for travelers.',
  },
  {
    id: 'gili',
    name: 'Gili Sports Carbon Fiber Paddle',
    rank: '#5 Pick',
    badge: 'Best Budget Carbon',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/gili-carbon-paddle',
    headline: 'Best Budget Entry into Carbon',
    price: '~$99',
    material: 'Carbon Fiber',
    weight: '26 oz',
    bladeType: 'All-Around',
    pieces: '3-Piece Adjustable',
    image: '/images/gili-carbon-paddle.jpg',
    imageAlt: 'Gili Sports Carbon Fiber SUP paddle on beach shore with ocean background',
    summary: 'The lowest-cost full carbon paddle in this guide. A meaningful upgrade from aluminum for paddlers not ready to invest in Werner-level pricing.',
    description: [
      "The Gili Sports Carbon Fiber Paddle is the right answer for one type of buyer: someone who knows they want carbon but is not yet ready to commit to the Werner or Aqua Bound price tier. At $99, it is the most accessible entry into carbon construction in this comparison.",
      "The tradeoffs are real: at 26 oz, it is the heaviest paddle in this guide despite its carbon construction — the blade composite is a lower-grade carbon blend that adds weight back. The connection points on the 3-piece design show more flex under hard strokes than the 2-piece designs at higher price tiers. For casual paddlers who want to reduce aluminum weight without the full investment, it works well in that role.",
    ],
    pros: [
      'Lowest price carbon paddle in this comparison at ~$99',
      'Meaningful weight reduction over aluminum entry-level paddles',
      '3-piece design packs compactly for travel',
      'Strong Amazon availability and highly reviewed at the price point',
    ],
    cons: [
      'Heavier than all other paddles in this guide despite carbon label (26 oz)',
      'More flex at connection joints than 2-piece premium alternatives',
    ],
    bottomLine: 'The right first step into carbon for budget-conscious buyers. Once you outgrow it, the Aqua Bound Manta Ray Carbon is the natural upgrade path.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Layers,
    title: 'Material: Carbon vs Fiberglass vs Aluminum',
    body: 'Aluminum paddles (20–30 oz) are the heaviest and cause fatigue fastest. Fiberglass paddles (22–28 oz) cut weight significantly and maintain rigidity better. Carbon paddles (20–24 oz) are the lightest and stiffest — the performance benchmark. Every step up in material is noticeable in the water.',
  },
  {
    Icon: Scale,
    title: 'Paddle Weight',
    body: 'A typical paddler completes 1,200–1,500 strokes per mile. Over a 3-mile session, a 4 oz heavier paddle adds roughly 12 lbs of total cumulative lift. This translates directly to shoulder and arm fatigue. Lighter paddles are not a luxury — they are a performance specification.',
  },
  {
    Icon: ArrowLeftRight,
    title: 'Blade Shape: High-Angle vs Low-Angle',
    body: 'High-angle blades are wider and designed for aggressive, vertical strokes — suited for racing and fitness paddlers. Low-angle blades are narrower, require a more diagonal stroke, and are far more efficient for recreational and touring use. Most paddlers benefit from low-angle. Only buy high-angle if you specifically want the workout.',
  },
  {
    Icon: Package,
    title: 'Adjustability: Fixed vs 2-Piece vs 3-Piece',
    body: 'Fixed paddles offer the best rigidity and no connection-point flex — reserved for performance paddlers with a perfectly fitted length. 2-piece paddles adjust for height with minimal flex penalty — the best balance for most buyers. 3-piece paddles pack smallest for travel but introduce the most flex at joints.',
  },
  {
    Icon: ArrowLeftRight,
    title: 'Sizing: How to Pick the Right Length',
    body: 'A general rule: your paddle should be 8–10 inches taller than you. Surf and yoga SUPers often prefer shorter paddles. Flatwater and touring paddlers often go longer. Most 2-piece and 3-piece paddles adjust across a range, giving you room to experiment before committing to a fixed length.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What size SUP paddle do I need?',
    a: 'A reliable starting point: your height plus 8–10 inches. For a 5\'10" paddler, that suggests a 74–76 inch paddle. Touring and flatwater paddlers typically prefer the longer end; surf and yoga paddlers prefer shorter. Adjustable 2-piece paddles let you experiment across a range before committing to a fixed length.',
  },
  {
    q: 'Is a carbon paddle worth the money?',
    a: 'For most paddlers who go out more than once a month, yes. The weight difference between a carbon paddle and an aluminum entry-level paddle is typically 8–12 oz. Over a 3-mile session that difference accumulates to thousands of lighter lifts. Shoulder and arm fatigue is meaningfully lower, and session times can extend noticeably. The Aqua Bound Manta Ray Carbon at ~$230 is the strongest value entry point.',
  },
  {
    q: "What's the difference between high-angle and low-angle SUP blades?",
    a: 'High-angle blades are wider and designed for a more vertical, powerful stroke — they generate more force per stroke and are favored by fitness and racing paddlers. Low-angle blades are narrower and require a diagonal stroke path, generating less force per stroke but consuming significantly less energy over distance. For recreational and touring users, low-angle is almost always the right choice.',
  },
  {
    q: 'Can I use a one-piece aluminum paddle?',
    a: "Yes — most boards come with an included aluminum paddle, and they work. The limitations become noticeable with use: aluminum paddles are the heaviest option, typically 30–36 oz, and cause arm and shoulder fatigue significantly faster than carbon or fiberglass alternatives. They can't be disassembled for travel. An aluminum paddle is a good starting point; upgrading to carbon or fiberglass is a meaningful improvement.",
  },
  {
    q: 'How do I maintain a SUP paddle?',
    a: 'Rinse with fresh water after salt water use to prevent corrosion at the connection joints. Store disassembled and away from direct sunlight — UV exposure degrades carbon and fiberglass blade finishes over time. Avoid striking rocks or hard surfaces with the blade tip. Dry before storage to prevent mold at the rubber collar connections.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Board Paddles (2026) | PaddleBoardShop',
  description:
    '5 best SUP paddles for 2026 — Werner, Aqua Bound, Bending Branches, BOTE, and Gili. Carbon vs fiberglass explained, with full reviews and a comparison table.',
  keywords: [
    'best paddle board paddle 2026',
    'best SUP paddle',
    'carbon SUP paddle',
    'Werner Camano SUP review',
    'Aqua Bound Manta Ray Carbon',
    'fiberglass vs carbon SUP paddle',
    'inflatable paddle board paddle',
  ],
  openGraph: {
    title: 'Best Paddle Board Paddles (2026) | PaddleBoardShop',
    description: '5 best SUP paddles ranked — carbon vs fiberglass, blade shape, and sizing guide.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: { canonical: '/best-paddle-board-paddles' },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function PaddleGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Paddle Board Paddles (2026)',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-23',
    dateModified: '2026-04-23',
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
        {/* ── HEADER ── */}
        <header className="relative pt-32 pb-16 px-6 text-center overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2" style={{ background: 'rgba(56,189,248,0.05)' }} aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li><Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>PaddleBoardShop</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li><Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>Guides</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Best SUP Paddles</li>
              </ol>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', color: 'var(--color-sky-glow)' }}>
              Gear Guide · Updated April 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Board{' '}
              <span className="gradient-text">Paddles</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              A heavy aluminum paddle causes shoulder fatigue by mile two. Carbon and fiberglass paddles weigh 8–14 oz less — an amount most paddlers notice within the first 20 minutes on the water. Five paddles ranked below by material, weight, and value.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['5 paddles tested', 'Carbon vs fiberglass explained', 'Updated April 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="max-w-5xl mx-auto px-6 pt-2 pb-4">
          <Image
            src="/articles/paddle-hero.png"
            alt="Carbon fiber SUP paddle leaning against a dock railing above teal water"
            width={1200}
            height={630}
            className="w-full rounded-2xl object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
        </div>

        {/* ── INTRO ── */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              Most boards ship with an aluminum paddle in the package. Aluminum works for a session or two, but it is the heaviest option in the category and its weight compounds across thousands of strokes. Arm and shoulder fatigue arrives noticeably earlier than it does with carbon or fiberglass.
            </p>
            <p>
              The weight difference between a quality carbon paddle and a standard aluminum is typically 8–14 oz. That gap feels minor in a shop but becomes obvious after 90 minutes of paddling. Five paddles below cover every price tier from $99 to $280.
            </p>
          </div>
        </section>

        {/* ── QUICK PICKS ── */}
        <section id="top-picks-paddles" aria-labelledby="top-picks-paddles-heading" className="article-section">
          <div className="article-wide">
            <div className="glass-card p-6 mb-10" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <h2 id="top-picks-paddles-heading" className="text-xl font-extrabold text-text-primary mb-4">Top 5 SUP Paddles for 2026</h2>
              <ol className="space-y-2">
                {PADDLES.map(({ name, rank, price, headline, accentColor }) => (
                  <li key={name} className="flex items-center gap-3 text-sm">
                    <span className="font-extrabold text-xs shrink-0 w-14" style={{ color: accentColor }}>{rank}</span>
                    <span><strong className="text-text-primary">{name}</strong> — <span className="text-text-secondary">{headline}</span> <span className="text-text-muted">({price})</span></span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PADDLES.slice(0, 3).map(({ id, name, rank, badge, badgeClass, accentColor, affiliateUrl, headline, price, summary }) => (
                <a key={id} href={affiliateUrl} id={`pick-paddle-${id}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="pick-card" aria-label={`${name} — ${price}`}>
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold" style={{ color: accentColor }}>{rank}</span>
                      <span className={`${badgeClass} text-xs font-bold px-2.5 py-1 rounded-full`}>{badge}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-text-primary leading-tight">{name}</h3>
                      <p className="text-xs font-semibold mt-1" style={{ color: accentColor }}>{headline}</p>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{summary}</p>
                    <div className="mt-auto">
                      <p className="text-2xl font-extrabold text-text-primary mb-3">{price}</p>
                      <div className="pick-cta text-sm"><span>Check Latest Price on Amazon</span><ArrowRight className="w-3.5 h-3.5 shrink-0" /></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUYING GUIDE ── */}
        <section id="buying-guide-paddles" aria-labelledby="buying-guide-paddles-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-guide-paddles-heading" className="article-h2">What to Look for in a SUP Paddle</h2>
            <p>Five specifications that determine whether a paddle reduces fatigue or compounds it.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
                  <Icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-sky-glow)' }} aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">{title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FULL REVIEWS ── */}
        <section id="reviews-paddles" aria-labelledby="reviews-paddles-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-paddles-heading" className="article-h2">Full Reviews: All 5 SUP Paddles</h2>
          </div>
          <div className="article-body space-y-14 mt-6">
            {PADDLES.map(({ id, name, rank, badge, badgeClass, accentColor, affiliateUrl, headline, price, description, pros, cons, bottomLine, material, weight, bladeType, pieces, image, imageAlt }) => (
              <article key={id} id={`review-paddle-${id}`} aria-labelledby={`review-paddle-${id}-heading`}>
                {/* Product image */}
                <Image
                  src={image}
                  alt={imageAlt}
                  width={900}
                  height={500}
                  className="product-image"
                  sizes="(max-width: 768px) 100vw, 680px"
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className={`${badgeClass} text-xs font-bold px-3 py-1 rounded-full shrink-0`}>{badge}</span>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{rank}</span>
                </div>
                <h3 id={`review-paddle-${id}-heading`} className="text-2xl font-extrabold text-text-primary mb-1">{name}</h3>
                <p className="text-sm font-bold mb-2" style={{ color: accentColor }}>{headline} — {price}</p>
                <div className="flex gap-4 text-xs text-text-muted mb-5 flex-wrap">
                  <span>Material: <strong className="text-text-secondary">{material}</strong></span>
                  <span>Weight: <strong className="text-text-secondary">{weight}</strong></span>
                  <span>Blade: <strong className="text-text-secondary">{bladeType}</strong></span>
                  <span>Design: <strong className="text-text-secondary">{pieces}</strong></span>
                </div>
                {description.map((para, i) => <p key={i} className="mb-3">{para}</p>)}
                <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>Pros</p>
                    <ul className="space-y-2">{pros.map((p) => (<li key={p} className="flex items-start gap-2 text-sm text-text-secondary"><CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: accentColor }} />{p}</li>))}</ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Cons</p>
                    <ul className="space-y-2">{cons.map((c) => (<li key={c} className="flex items-start gap-2 text-sm text-text-secondary"><HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />{c}</li>))}</ul>
                  </div>
                </div>
                <p className="text-sm text-text-muted mb-5"><strong className="text-text-secondary">Bottom line:</strong> {bottomLine}</p>
                <a href={affiliateUrl} id={`cta-paddle-${id}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label={`Check latest price for ${name} on Amazon`}>
                  Check Latest Price on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section id="comparison-paddles" aria-labelledby="comparison-paddles-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-paddles-heading" className="article-h2">Side-by-Side Comparison</h2>
          </div>
          <div className="article-wide mt-6">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="SUP paddle comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(56,189,248,0.2)' }}>
                      {['Paddle', 'Material', 'Weight', 'Blade', 'Pieces', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {PADDLES.map(({ id, name, badge, badgeClass, material, weight, bladeType, pieces, price, affiliateUrl }) => (
                      <tr key={id} className="table-row-hover">
                        <td className="px-5 py-4 min-w-[200px]">
                          <span className={`${badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1`}>{badge}</span>
                          <p className="font-bold text-text-primary text-sm">{name}</p>
                        </td>
                        <td className="px-5 py-4 text-text-secondary text-xs">{material}</td>
                        <td className="px-5 py-4 font-semibold text-text-primary text-sm">{weight}</td>
                        <td className="px-5 py-4 text-text-secondary text-xs">{bladeType}</td>
                        <td className="px-5 py-4 text-text-secondary text-xs">{pieces}</td>
                        <td className="px-5 py-4 font-bold text-text-primary text-sm">{price}</td>
                        <td className="px-5 py-4">
                          <a href={affiliateUrl} id={`table-paddle-${id}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label={`Check price for ${name}`}>
                            Price <ArrowRight className="w-3 h-3" />
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

        {/* ── FAQ ── */}
        <section id="faq-paddles" aria-labelledby="faq-paddles-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-paddles-heading" className="article-h2">Frequently Asked Questions</h2>
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

        {/* ── RELATED GUIDES ── */}
        <section id="related-paddles" aria-labelledby="related-paddles-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-paddles-heading" className="article-h2">Related Guides</h2>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-paddle-board-accessories', id: 'link-accessories-from-paddles', title: 'Best Paddle Board Accessories (2026)', desc: 'Complete roundup covering pumps, coolers, dry bags, PFDs, GoPro mounts, and more.' },
                { href: '/best-electric-pump-for-paddle-boards', id: 'link-pump-from-paddles', title: 'Best Electric Pump for Paddle Boards (2026)', desc: 'OutdoorMaster, Seamax, and Flextail compared — auto shutoff, inflation speed, and value.' },
                { href: '/isle-vs-bote-vs-red-paddle', id: 'link-brand-from-paddles', title: 'Isle vs BOTE vs Red Paddle Co (2026)', desc: 'Which brand makes the best board? Rigidity scores, capacity, and value compared head-to-head.' },
              ].map(({ href, id, title, desc }) => (
                <Link key={href} href={href} id={id} className="glass-card flex items-center justify-between p-5 group" style={{ borderColor: 'rgba(255,255,255,0.08)', textDecoration: 'none' }}>
                  <div><p className="text-sm font-bold text-text-primary">{title}</p><p className="text-xs text-text-muted mt-1">{desc}</p></div>
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

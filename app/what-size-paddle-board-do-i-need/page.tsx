import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  BookOpen,
  Ruler,
  Scale,
  Layers,
  ArrowLeftRight,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Length guide data ───────────────────────────────────────── */
const LENGTH_GUIDE = [
  { range: "Under 9'", who: 'Kids and youth paddlers only', detail: 'Proportioned for smaller riders — not suitable for most adults regardless of weight.' },
  { range: "9'–10'", who: 'Smaller riders, surf-style SUP', detail: 'Better maneuverability for surf breaks. More technical to paddle in a straight line.' },
  { range: "10'–11'", who: 'Most adults — all-around sweet spot', detail: 'The ideal range for recreational flatwater, light touring, and beginner to intermediate skill levels. 10\'6" is the single most popular size for good reason.' },
  { range: "11'–12'", who: 'Performance, touring, taller or heavier riders', detail: 'Better glide efficiency for distance paddling. Preferred by riders over 200 lbs who want more hull in the water.' },
  { range: "12'6\"+", who: 'Touring and racing specialists', detail: 'Purpose-built for distance. Requires established technique. Not recommended as a first board.' },
] as const;

/* ── Width guide data ────────────────────────────────────────── */
const WIDTH_GUIDE = [
  { range: 'Under 30"', who: 'Racing / expert performance', detail: 'Requires significant balance and technique. Fastest hull speed, least stable platform.' },
  { range: '30–31"', who: 'Intermediate to advanced paddlers', detail: 'Good glide with manageable stability. Not recommended for beginners.' },
  { range: '32–33"', who: 'Most recreational paddlers — best balance of stability and speed', detail: 'The ideal range for beginners and intermediate paddlers. Stable enough to build confidence, fast enough not to feel sluggish.' },
  { range: '33"+', who: 'Maximum stability — yoga, fishing, beginners, larger riders', detail: 'Prioritizes platform stability over glide speed. Best choice if balance is the primary concern or if carrying significant gear or passengers.' },
] as const;

/* ── Thickness guide ─────────────────────────────────────────── */
const THICKNESS_GUIDE = [
  { range: '4"–5"', label: 'Budget / entry level', detail: 'Adequate for occasional light use. Loses rigidity under load and over time as pressure retention drops. Noticeably softer underfoot than 6-inch boards.' },
  { range: '6"', label: 'Standard for premium boards — the right choice', detail: 'More hull volume means better buoyancy and a higher, more stable platform. Maintains inflation pressure more consistently across a full session. This is what to buy.' },
] as const;

/* ── Board picks by weight ───────────────────────────────────── */
const PICKS_BY_WEIGHT = [
  {
    range: 'Under 150 lbs',
    picks: 'FunWater, ROC, or Isle Pioneer',
    detail: 'Lighter riders have more flexibility — even budget boards provide adequate stability. Prioritize fit and intended use case over raw capacity.',
    badge: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/isle-pioneer-amazon',
    ctaId: 'cta-sizing-under150',
    ctaLabel: 'View Isle Pioneer on Amazon',
  },
  {
    range: '150–200 lbs',
    picks: 'BOTE Breeze Aero (300 lb capacity)',
    detail: 'Operating at 50–67% of rated capacity gives ideal stability. The BOTE Breeze Aero\'s 300 lb capacity keeps riders in this range well within the optimal stability window.',
    badge: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/bote-breeze-aero-amazon',
    ctaId: 'cta-sizing-150-200',
    ctaLabel: 'View BOTE Breeze Aero on Amazon',
  },
  {
    range: '200–250 lbs',
    picks: 'Isle Pioneer Pro (335 lb capacity)',
    detail: 'The Isle Pioneer Pro\'s 335 lb validated capacity is the strongest in the premium iSUP category. Riders in this range should not settle for less than 300 lb capacity boards.',
    badge: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/isle-pioneer-pro-amazon',
    ctaId: 'cta-sizing-200-250',
    ctaLabel: 'View Isle Pioneer Pro on Amazon',
  },
  {
    range: 'Over 250 lbs',
    picks: 'Isle Pioneer Pro — only premium board with sufficient headroom',
    detail: 'At 250+ lbs, a 335 lb capacity board is the minimum recommendation. Operating at 74% of rated capacity at 250 lbs still leaves adequate stability margin. The Isle Pioneer Pro is the only board in the premium category that genuinely serves this weight range.',
    badge: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/isle-pioneer-pro-amazon',
    ctaId: 'cta-sizing-over250',
    ctaLabel: 'View Isle Pioneer Pro on Amazon',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What size paddle board do I need for my weight?',
    a: "A simple rule: your body weight + expected gear weight + 60 lbs of safety margin = minimum weight capacity needed. For board dimensions: under 150 lbs, look at 10'–10'6\" boards at 30–32\" wide. 150–200 lbs: 10'6\"–11', 32–33\" wide. Over 200 lbs: 10'6\"–11'6\", 33\"+ wide with 300+ lb rated capacity.",
  },
  {
    q: 'Is it better to get a longer or shorter paddle board?',
    a: "Longer boards (11'+) glide more efficiently and track better for straight-line paddling. Shorter boards (10' and under) are more maneuverable, easier to turn, and better for surf or tight spaces. For most recreational paddlers, 10'6\" is the ideal compromise — long enough for efficient glide, short enough to maneuver comfortably.",
  },
  {
    q: 'What width paddle board is most stable?',
    a: '33" or wider provides the best stability for recreational paddling, yoga, fishing, and beginners. A 32" board is stable for most intermediate paddlers. Boards under 30" are performance-oriented and require established technique — they are not suitable for beginners or casual recreational use.',
  },
  {
    q: 'How do I know if a paddle board has enough weight capacity?',
    a: 'Add your body weight, any gear you plan to carry, and 60–100 lbs of safety margin. That total is your minimum required capacity. Operating a board at 60–70% of its rated capacity gives you optimal stability — the board sits higher in the water and resists tipping more effectively. Never exceed 80% of stated capacity for recreational paddling.',
  },
  {
    q: 'Does height matter for paddle board size?',
    a: "Height matters less than weight for board sizing. Taller paddlers may prefer longer boards (11'+) for a proportional feel, but weight capacity and width are more important for performance and stability. A 6'4\" paddler who weighs 175 lbs needs more width than a 5'8\" paddler who weighs 200 lbs.",
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'What Size Paddle Board Do I Need? (2026 Complete Sizing Guide) | PaddleBoardShop',
  description:
    'Find the right paddle board size for your height, weight, and skill level. Our 2026 sizing guide covers length, width, thickness, and weight capacity — with a quick-reference chart.',
  keywords: [
    'what size paddle board do I need',
    'paddle board size guide',
    'how to choose paddle board size',
    'paddle board sizing chart',
    'paddle board weight capacity',
    'paddle board width guide',
    'paddle board length guide 2026',
  ],
  openGraph: {
    title: 'What Size Paddle Board Do I Need? (2026 Complete Sizing Guide) | PaddleBoardShop',
    description:
      'Length, width, thickness, and weight capacity explained. Quick-reference chart for every body weight and skill level.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Size Paddle Board Do I Need? (2026 Complete Sizing Guide)',
    description: 'The complete 2026 paddle board sizing guide — length, width, thickness, and weight capacity.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/what-size-paddle-board-do-i-need',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function SizingGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Size Paddle Board Do I Need? (2026 Complete Sizing Guide)',
    description:
      'A complete 2026 paddle board sizing guide covering length, width, thickness, and weight capacity — with a quick-reference chart and board recommendations by body weight.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/what-size-paddle-board-do-i-need',
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

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Choose the Right Paddle Board Size',
    description: 'A step-by-step process for selecting the correct paddle board dimensions based on your weight, skill level, and intended use.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Step 1: Determine your weight',
        text: 'Weigh yourself and note any gear you plan to carry (typical gear: 10–30 lbs).',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 2: Calculate minimum weight capacity',
        text: 'Add body weight + gear weight + 60 lbs safety margin. This is your minimum board capacity.',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 3: Choose board width',
        text: "Beginners and recreational paddlers: 32–33\" wide. Performance paddlers: 30–31\". Yoga/fishing: 33\"+.",
      },
      {
        '@type': 'HowToStep',
        name: 'Step 4: Choose board length',
        text: "Under 150 lbs: 10'–10'6\". 150–200 lbs: 10'6\"–11'. Over 200 lbs: 10'6\"–11'6\".",
      },
      {
        '@type': 'HowToStep',
        name: 'Step 5: Verify the thickness',
        text: 'Choose a 6-inch thick board for premium rigidity and pressure retention.',
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
        { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
        { name: 'What Size Paddle Board Do I Need?' },
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
                <li className="text-text-secondary" aria-current="page">Paddle Board Sizing Guide</li>
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
              Sizing Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              What Size Paddle Board{' '}
              <span className="gradient-text">Do I Need?</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Length, width, thickness, and weight capacity — the four dimensions that
              determine how a board performs for your body and your use case. This
              guide covers all four with a quick-reference chart and recommendations
              by body weight.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Quick-reference chart', 'Weight-based recommendations', 'Featured snippet format', 'Updated May 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════
            QUICK ANSWER (snippet optimized)
        ════════════════════════════════ */}
        <section id="quick-answer" aria-labelledby="quick-answer-sizing-heading" className="article-section">
          <div className="article-wide">
            <div className="glass-card p-7" style={{ borderColor: 'rgba(251,191,36,0.25)' }}>
              <h2 id="quick-answer-sizing-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Quick Answer: Paddle Board Size by Weight
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                Find your weight range below — these are the minimum recommended dimensions for stable, comfortable paddling.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { weight: 'Under 150 lbs', length: "10'0\"–10'6\"", width: '30–32" wide', color: 'var(--color-sky-glow)', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)' },
                  { weight: '150–200 lbs', length: "10'6\"–11'0\"", width: '32–33" wide', color: 'var(--color-amber-glow)', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
                  { weight: '200–250 lbs', length: "10'6\"–11'6\"", width: '33–34" wide', color: 'var(--color-amber-glow)', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
                  { weight: 'Over 250 lbs', length: "11'0\"+ with 300+ lb capacity", width: '34" wide min.', color: 'var(--color-glacier-teal)', bg: 'rgba(0,201,177,0.08)', border: 'rgba(0,201,177,0.2)' },
                ].map(({ weight, length, width, color, bg, border }) => (
                  <div
                    key={weight}
                    className="rounded-xl p-5"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>
                      {weight}
                    </p>
                    <p className="text-base font-extrabold text-text-primary leading-tight">{length}</p>
                    <p className="text-xs text-text-secondary mt-1">{width}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-5">
                <strong className="text-text-secondary">Important:</strong> Add your body weight + gear weight + 60 lbs safety margin to determine minimum weight capacity. Width and capacity matter more than length for stability.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            HOW TO CHOOSE STEPS
        ════════════════════════════════ */}
        <section id="how-to-choose" aria-labelledby="how-to-choose-heading" className="article-section">
          <div className="article-body">
            <h2 id="how-to-choose-heading" className="article-h2">
              How to Choose the Right Paddle Board Size: 5 Steps
            </h2>
            <p>
              Follow these steps in order. Weight capacity should be calculated first —
              it is the most important specification and eliminates many boards from
              consideration before you get to length and width.
            </p>

            <div className="space-y-5 mt-8">
              {[
                { step: '01', Icon: Scale, title: 'Determine your weight and gear load', body: 'Weigh yourself. Add the gear you plan to carry — a paddle, water bottle, dry bag, and leash typically add 10–20 lbs. Note this total.' },
                { step: '02', Icon: Scale, title: 'Calculate your minimum weight capacity', body: 'Your body weight + gear weight + 60 lbs safety margin = minimum board capacity. Example: 185 lbs + 15 lbs gear + 60 lbs = 260 lb minimum. This eliminates any board with less than 260 lb capacity.' },
                { step: '03', Icon: ArrowLeftRight, title: 'Choose board width for your stability needs', body: 'Beginners and recreational paddlers: 32–33" wide. Performance paddlers comfortable with balance: 30–31". Yoga, fishing, or maximum stability: 33"+.' },
                { step: '04', Icon: Ruler, title: 'Choose board length for your use case', body: "Under 150 lbs: 10'–10'6\". 150–200 lbs: 10'6\"–11'. Over 200 lbs: 10'6\"–11'6\". Add 6–12 inches for touring or racing focus." },
                { step: '05', Icon: Layers, title: 'Verify the thickness is 6 inches', body: 'A 6-inch thick board holds pressure more consistently, provides more hull volume, and creates a higher, more stable platform than 4–5 inch boards. This is non-negotiable for a premium board.' },
              ].map(({ step, Icon, title, body }) => (
                <div key={step} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(251,191,36,0.12)' }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm"
                    style={{ background: 'rgba(251,191,36,0.1)', color: 'var(--color-amber-glow)', border: '1px solid rgba(251,191,36,0.25)' }}
                  >
                    {step}
                  </div>
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
            LENGTH GUIDE
        ════════════════════════════════ */}
        <section id="length-guide" aria-labelledby="length-guide-heading" className="article-section">
          <div className="article-body">
            <h2 id="length-guide-heading" className="article-h2">
              Paddle Board Length Guide
            </h2>
            <p>
              Board length primarily determines tracking (how well it goes straight) and
              maneuverability. Longer tracks better; shorter turns easier. For most
              buyers, the 10'–11' range is the right starting point.
            </p>
          </div>

          <div className="article-wide">
            <div className="glass-card overflow-hidden mt-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Paddle board length guide">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(251,191,36,0.2)' }}>
                      {['Length', 'Best For', 'Notes'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {LENGTH_GUIDE.map((row) => (
                      <tr key={row.range} className="table-row-hover">
                        <td className="px-5 py-4 font-bold text-text-primary text-sm whitespace-nowrap">{row.range}</td>
                        <td className="px-5 py-4 text-text-secondary text-sm font-semibold">{row.who}</td>
                        <td className="px-5 py-4 text-text-secondary text-xs max-w-[280px]">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WIDTH GUIDE
        ════════════════════════════════ */}
        <section id="width-guide" aria-labelledby="width-guide-heading" className="article-section">
          <div className="article-body">
            <h2 id="width-guide-heading" className="article-h2">
              Paddle Board Width Guide
            </h2>
            <p>
              Width is the most important stability factor — more than length. A wider
              board resists tipping and makes standing up easier. Do not sacrifice width
              for a sleeker profile until your balance is established.
            </p>
          </div>

          <div className="article-wide">
            <div className="glass-card overflow-hidden mt-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Paddle board width guide">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(251,191,36,0.2)' }}>
                      {['Width', 'Best For', 'Notes'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {WIDTH_GUIDE.map((row) => (
                      <tr key={row.range} className="table-row-hover">
                        <td className="px-5 py-4 font-bold text-text-primary text-sm whitespace-nowrap">{row.range}</td>
                        <td className="px-5 py-4 text-text-secondary text-sm font-semibold">{row.who}</td>
                        <td className="px-5 py-4 text-text-secondary text-xs max-w-[280px]">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WEIGHT CAPACITY
        ════════════════════════════════ */}
        <section id="weight-capacity" aria-labelledby="weight-capacity-heading" className="article-section">
          <div className="article-body">
            <h2 id="weight-capacity-heading" className="article-h2">
              Weight Capacity — The Most Important Spec
            </h2>
            <p>
              Weight capacity is the single most critical specification on any paddle
              board — and the most commonly ignored. Operating a board at or near its
              maximum creates stability problems that no amount of technique can solve.
            </p>

            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-4">
                The Weight Capacity Formula
              </h3>
              <div className="rounded-xl p-5 mb-5" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
                <p className="text-sm font-bold text-text-primary text-center">
                  Your Weight + Gear Weight + 60 lbs Safety Margin = Minimum Required Capacity
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  { label: '60–70% of rated capacity', desc: 'Optimal operating range — board sits at ideal height in water, maximum stability, best performance.' },
                  { label: '70–80% of rated capacity', desc: 'Acceptable for recreational use — slightly reduced stability and responsiveness. Avoid if you are a beginner.' },
                  { label: 'Above 80% of rated capacity', desc: 'Not recommended — board sinks lower in the water, tips more easily, and performs unpredictably.' },
                ].map(({ label, desc }) => (
                  <li key={label} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-amber-glow)' }} aria-hidden="true" />
                    <span>
                      <strong className="text-text-primary">{label}:</strong>{' '}
                      <span className="text-text-secondary">{desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            THICKNESS GUIDE
        ════════════════════════════════ */}
        <section id="thickness-guide" aria-labelledby="thickness-guide-heading" className="article-section">
          <div className="article-body">
            <h2 id="thickness-guide-heading" className="article-h2">
              Paddle Board Thickness Guide
            </h2>
            <p>
              Thickness determines hull volume, buoyancy, and pressure retention. For
              inflatable paddle boards, 6 inches is the standard for premium boards — and
              the right answer for almost every buyer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {THICKNESS_GUIDE.map(({ range, label, detail }) => (
                <div
                  key={range}
                  className="glass-card p-6"
                  style={{ borderColor: range === '6"' ? 'rgba(251,191,36,0.2)' : 'rgba(255,255,255,0.08)' }}
                >
                  <p className="text-2xl font-extrabold mb-1" style={{ color: range === '6"' ? 'var(--color-amber-glow)' : 'var(--color-text-muted)' }}>
                    {range}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">{label}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            BOARDS BY WEIGHT
        ════════════════════════════════ */}
        <section id="boards-by-weight" aria-labelledby="boards-by-weight-heading" className="article-section">
          <div className="article-body">
            <h2 id="boards-by-weight-heading" className="article-h2">
              Which Board Matches Your Size?
            </h2>
            <p>
              Specific board recommendations for each weight range — based on 2026 pricing
              and validated weight capacity data.
            </p>
          </div>

          <div className="article-wide">
            <div className="space-y-5 mt-8">
              {PICKS_BY_WEIGHT.map(({ range, picks, detail, badge, accentColor, affiliateUrl, ctaId, ctaLabel }) => (
                <div key={range} className="glass-card p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <span className={`${badge} text-[10px] font-bold px-2.5 py-1 rounded-full block w-fit mb-2`}>
                        {range}
                      </span>
                      <h3 className="text-base font-extrabold text-text-primary leading-tight">
                        {picks}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{detail}</p>
                  <a
                    href={affiliateUrl}
                    id={ctaId}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="table-row-cta"
                    aria-label={ctaLabel}
                    style={{ color: accentColor }}
                  >
                    {ctaLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-sizing-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-sizing-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-sizing" aria-labelledby="related-guides-sizing-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-sizing-heading" className="article-h2">Related Guides</h2>
            <p>Once you know your size, these guides help you find the right board.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'link-best-inflatable-from-sizing', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top picks across all price ranges — sorted by weight capacity and use case.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-sizing', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Stability-focused picks with buying criteria for first-time paddlers.' },
                { href: '/hard-vs-inflatable-paddle-board', id: 'link-hard-vs-inflatable-from-sizing', title: 'Hard vs Inflatable Paddle Board — 2026 Comparison', desc: 'Which board type is right for your situation? Head-to-head across 6 categories.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-sizing', title: 'Best Boards Under $1,000 (2026)', desc: 'Premium picks within a $1,000 budget — with capacity and sizing data.' },
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

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Waves,
  Zap,
  ArrowLeftRight,
  Package,
  Plane,
  Fish,
  Heart,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Comparison table data ───────────────────────────────────── */
const COMPARISON_ROWS = [
  {
    category: 'Size',
    sup: '10–12\' long, 30–33" wide — a large, stable platform',
    surfboard: '6–9\' long, 18–22" wide — narrow and performance-tuned',
    winner: 'sup' as const,
    winnerLabel: 'SUP (stability)',
  },
  {
    category: 'Stability',
    sup: 'High — wide platform stable for flatwater paddling',
    surfboard: 'Low — narrow, requires active balance on moving water',
    winner: 'sup' as const,
    winnerLabel: 'SUP',
  },
  {
    category: 'Paddling style',
    sup: 'Standing, with a long paddle — full-body engagement',
    surfboard: 'Prone paddling or pop-up — no paddle for flatwater',
    winner: 'sup' as const,
    winnerLabel: 'SUP (flatwater)',
  },
  {
    category: 'Wave riding',
    sup: 'Works for small-medium waves; less maneuverability',
    surfboard: 'Optimized for wave performance — sharper turns, more control',
    winner: 'surfboard' as const,
    winnerLabel: 'Surfboard',
  },
  {
    category: 'Portability',
    sup: 'Inflatable SUPs pack into a bag — excellent portability',
    surfboard: 'Requires roof rack or board bag — moderate portability',
    winner: 'sup' as const,
    winnerLabel: 'SUP (inflatable)',
  },
  {
    category: 'Cost',
    sup: '$149–$1,149 for quality inflatables',
    surfboard: '$400–$2,000+ for quality boards',
    winner: 'sup' as const,
    winnerLabel: 'SUP',
  },
] as const;

/* ── When to choose SUP ──────────────────────────────────────── */
const SUP_SCENARIOS = [
  {
    Icon: Heart,
    title: 'Flatwater paddling and fitness',
    body: 'If your primary goal is paddling on lakes, rivers, bays, and calm coastal water — not wave riding — a SUP is the obvious choice. Surfboards cannot be paddled on flat water in any practical sense.',
  },
  {
    Icon: Zap,
    title: 'Full-body workout',
    body: 'The standing paddle stroke engages your entire core, legs, and upper body simultaneously. SUP is one of the most efficient low-impact full-body workouts available on the water.',
  },
  {
    Icon: Fish,
    title: 'Yoga, fishing, or multi-use',
    body: 'A SUP\'s wide, stable platform accommodates yoga poses, fishing accessories, and a variety of water activities that a narrow surfboard cannot support.',
  },
  {
    Icon: Plane,
    title: 'Traveling and multi-location paddling',
    body: 'Inflatable SUPs fly as checked luggage and set up anywhere. A surfboard requires waves. If you travel to locations without consistent surf, a SUP is infinitely more useful.',
  },
  {
    Icon: ArrowLeftRight,
    title: 'Getting on the water quickly',
    body: 'A wide inflatable SUP is stable enough for most beginners to stand within their first session. Learning to surf takes months. SUP accessibility is dramatically higher for new water sports participants.',
  },
] as const;

/* ── When to choose Surfboard ────────────────────────────────── */
const SURFBOARD_SCENARIOS = [
  {
    Icon: Waves,
    title: 'You specifically want to ride waves',
    body: 'If wave riding is your primary goal — carving turns on the face, executing maneuvers, riding barrels — a surfboard is the right tool. SUPs can surf, but they are not optimized for performance wave riding.',
  },
  {
    Icon: Zap,
    title: 'You have existing surf experience',
    body: 'Surfers who already have board control and ocean wave reading skills will find surfboards more expressive than SUPs. The learning curve trade-off that makes SUP easier for beginners works in reverse for experienced surfers.',
  },
  {
    Icon: Package,
    title: 'You don\'t need flatwater paddling',
    body: 'If you live near consistent surf and exclusively want a wave-riding tool — never needing flatwater paddling — a surfboard is purpose-built for that goal.',
  },
  {
    Icon: Zap,
    title: 'Maximum wave performance is the goal',
    body: 'For small, high-performance waves where board response, maneuverability, and turn sharpness determine the quality of your session, no SUP matches a purpose-built surfboard. The size difference defines the performance ceiling.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Can you surf on a paddle board?',
    a: 'Yes — SUPs can ride waves, and surf-SUP is a legitimate discipline. The wider, longer platform catches waves earlier than a surfboard but has less maneuverability on the face. Small to medium waves (under 4 feet) work best for SUPs. In larger, steeper waves, the SUP\'s size works against it.',
  },
  {
    q: 'Is a SUP harder to surf than a surfboard?',
    a: 'In some ways easier (the size catches waves more easily, you don\'t need to pop up) and in some ways harder (turns require more effort on a longer board, reading the wave with a large board is different). SUP surfing is a distinct skill from traditional surfing — experience in one doesn\'t fully transfer to the other.',
  },
  {
    q: 'Can a surfboard be used as a paddle board?',
    a: 'Technically yes, but practically no for most people. Surfboards are narrow, unstable platforms for paddling flat water. Without a dedicated SUP paddle, they\'re suitable only for experienced surfers who already have strong balance and paddle ability in prone position. For average buyers, a surfboard is not a substitute for a SUP.',
  },
  {
    q: 'What\'s the difference between a surf SUP and a regular SUP?',
    a: 'Surf SUPs are shorter (9\'–10\'), narrower, and have a more pronounced rocker (curved bottom) for wave riding. Regular all-around SUPs are longer (10\'6"–11\') and flatter for flatwater stability. The Isle Pioneer Pro and BOTE Breeze Aero are all-around boards — not surf-optimized. A surf SUP sacrifices flatwater stability for wave performance.',
  },
  {
    q: 'Which is better for beginners — SUP or surfboard?',
    a: 'SUP by a wide margin. A wide inflatable SUP (32"+) is stable enough for most beginners to stand within their first session on flat water. Learning to surf requires months of dedicated practice — pop-ups, wave reading, turtle rolls, timing — before a beginner can ride waves consistently. For getting on the water quickly, SUP is significantly more accessible.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'SUP vs Surfboard — What\'s the Difference? (2026 Guide) | PaddleBoardShop',
  description:
    'SUP vs surfboard compared: size, stability, how they ride waves differently, and which one is right for your water goals. Clear 2026 guide for anyone choosing between them.',
  keywords: [
    'SUP vs surfboard',
    'paddle board vs surfboard',
    'can you surf on a paddle board',
    'SUP surfboard comparison 2026',
    'difference between SUP and surfboard',
    'surf SUP vs surfboard',
  ],
  openGraph: {
    title: 'SUP vs Surfboard — What\'s the Difference? (2026 Guide) | PaddleBoardShop',
    description:
      'Size, stability, wave riding, and which one is right for your water goals — clear 2026 comparison.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUP vs Surfboard — What\'s the Difference? (2026 Guide)',
    description: 'Size, stability, wave riding compared — and which one is right for your goals.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/sup-vs-surfboard',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function SupVsSurfboardPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'SUP vs Surfboard — What\'s the Difference? (2026 Guide)',
    description:
      'SUP vs surfboard compared across size, stability, wave riding, portability, and cost — with a clear recommendation for each buyer type.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/sup-vs-surfboard',
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
        { name: 'Compare', item: 'https://www.paddleboardshop.com/compare' },
        { name: 'SUP vs Surfboard' },
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
                  <Link href="/compare" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>
                    Compare
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">SUP vs Surfboard</li>
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
              Comparison Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              SUP vs{' '}
              <span className="gradient-text">Surfboard</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              A SUP is a platform for all-water paddling. A surfboard is an instrument
              for riding waves. They overlap in surf conditions — but serve fundamentally
              different purposes. Here is the complete 2026 breakdown.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent analysis', 'Clear scenario guidance', 'No paid placements', 'Updated May 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════
            INTRO
        ════════════════════════════════ */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              The core difference between a SUP and a surfboard is purpose, not just
              size. A stand-up paddle board is built to be paddled — on flat water, in
              rivers, in coastal bays, and yes, in waves. A surfboard is built to ride
              waves — full stop.
            </p>
            <p>
              The size difference that separates them — a SUP is 10–12 feet long and
              30–33 inches wide; a surfboard is 6–9 feet long and 18–22 inches wide —
              defines everything about how each performs in its intended environment.
              A wide, long SUP is stable and paddleable on flat water but clumsy in
              steep surf. A narrow surfboard is agile in waves but completely impractical
              for flatwater paddling.
            </p>
            <p>
              <a href="#comparison-table-sup-surf" className="article-link">
                Jump to the full comparison table
              </a>{' '}
              or read on for the full breakdown.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            SIZE SECTION
        ════════════════════════════════ */}
        <section id="size-comparison" aria-labelledby="size-heading" className="article-section">
          <div className="article-body">
            <h2 id="size-heading" className="article-h2">
              Size: The Defining Difference
            </h2>
            <p>
              The size gap between SUPs and surfboards is enormous — and it explains
              almost every practical difference between the two.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-6" style={{ borderColor: 'rgba(0,201,177,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-glacier-teal)' }}>
                  Stand-Up Paddle Board (SUP)
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Length', value: '10\'–12\' (all-around and touring)' },
                    { label: 'Width', value: '30\"–33\"' },
                    { label: 'Thickness', value: '4\"–6\" (inflatable)' },
                    { label: 'Volume', value: 'High — designed for paddler weight support' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-text-muted font-medium">{label}</span>
                      <span className="text-text-primary font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-text-muted mt-4 leading-relaxed">
                  This size provides the platform stability needed for flatwater paddling, yoga,
                  fishing, and casual wave riding — but limits wave-face maneuverability.
                </p>
              </div>

              <div className="glass-card p-6" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>
                  Surfboard
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Length', value: '6\'–9\' (shortboard to longboard)' },
                    { label: 'Width', value: '18\"–22\"' },
                    { label: 'Thickness', value: '2\"–3.5\" (fiberglass/epoxy)' },
                    { label: 'Volume', value: 'Low-Medium — optimized for wave response' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-text-muted font-medium">{label}</span>
                      <span className="text-text-primary font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-text-muted mt-4 leading-relaxed">
                  This narrow, lower-volume shape responds to subtle weight shifts in waves
                  and allows sharp turns — but makes it unstable and impractical on flat water.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="comparison-table-sup-surf" aria-labelledby="comparison-sup-surf-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-sup-surf-heading" className="article-h2">
              Head-to-Head: SUP vs Surfboard
            </h2>
            <p>Six categories compared honestly across both watercraft types.</p>
          </div>

          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="SUP vs surfboard comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(56,189,248,0.2)' }}>
                      {['Category', 'SUP / Paddle Board', 'Surfboard', 'Edge'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row.category} className="table-row-hover">
                        <td className="px-5 py-5 font-bold text-text-primary text-sm whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs max-w-[200px]">
                          {row.sup}
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs max-w-[200px]">
                          {row.surfboard}
                        </td>
                        <td className="px-5 py-5">
                          {row.winner === 'sup' && (
                            <span className="badge-teal text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                              {row.winnerLabel}
                            </span>
                          )}
                          {row.winner === 'surfboard' && (
                            <span className="badge-sky text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                              {row.winnerLabel}
                            </span>
                          )}
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
            WHEN TO CHOOSE SUP
        ════════════════════════════════ */}
        <section id="when-sup" aria-labelledby="when-sup-surf-heading" className="article-section">
          <div className="article-body">
            <h2 id="when-sup-surf-heading" className="article-h2">
              When to Choose a SUP
            </h2>
            <p>
              For most buyers — especially those without dedicated surf experience — a SUP
              is the more versatile, more accessible, and more practical choice.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {SUP_SCENARIOS.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(0,201,177,0.15)' }}>
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
            WHEN TO CHOOSE SURFBOARD
        ════════════════════════════════ */}
        <section id="when-surfboard" aria-labelledby="when-surfboard-heading" className="article-section">
          <div className="article-body">
            <h2 id="when-surfboard-heading" className="article-h2">
              When to Choose a Surfboard
            </h2>
            <p>
              There are clear scenarios where a surfboard is the right tool. They all
              share one common thread: wave riding as the primary goal.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {SURFBOARD_SCENARIOS.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(56,189,248,0.15)' }}>
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
            SUP SURFING SECTION
        ════════════════════════════════ */}
        <section id="sup-surfing" aria-labelledby="sup-surfing-heading" className="article-section">
          <div className="article-body">
            <h2 id="sup-surfing-heading" className="article-h2">
              SUP Surfing: Where They Overlap
            </h2>
            <p>
              Surf-SUP is a real and growing discipline that bridges the two categories.
              Understanding how SUPs behave in waves helps you decide whether the overlap
              is relevant to you.
            </p>

            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <h3 className="text-lg font-extrabold text-text-primary mb-4">
                How SUPs Ride Waves Differently
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Catching waves earlier', body: 'The longer, higher-volume hull catches waves before they break — often before a surfboard would. This makes small, slower-moving waves easier to ride on a SUP.' },
                  { title: 'Longer, wider turns', body: 'Turning a 10\'6" board on a wave face requires more commitment and sweeping strokes than turning a 7\' shortboard. SUP surfing develops a different style of riding — longer arcs, less sharp cutbacks.' },
                  { title: 'Best in small to medium waves', body: 'SUPs work well in waves under 4 feet. In larger, steeper surf, the board\'s size becomes a handling liability. The Isle Pioneer Pro and BOTE Breeze Aero are all-around boards; neither is optimized for surf.' },
                  { title: 'Surf-specific SUPs exist', body: 'Surf SUPs are shorter (9\'–10\'), narrower, and have more rocker than all-around boards. If surf riding is a primary goal (not just occasional), a dedicated surf SUP is meaningfully different from an all-around board. Hardboard SUPs also occupy a niche between all-around inflatables and surfboards for performance-minded wave riders.' },
                ].map(({ title, body }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Waves className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-sky-glow)' }} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-text-primary mb-1">{title}</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-sup-surf-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-sup-surf-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-sup-surf" aria-labelledby="related-guides-sup-surf-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-sup-surf-heading" className="article-h2">Related Guides</h2>
            <p>More comparisons and buying guides to help you find the right board for your goals.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/paddle-board-vs-kayak', id: 'link-pvk-from-sup-surf', title: 'Paddle Board vs Kayak — Which Is Right for You?', desc: 'Full 2026 comparison: workout, stability, storage, cost, and who wins each category.' },
                { href: '/hard-vs-inflatable-paddle-board', id: 'link-hard-from-sup-surf', title: 'Hard vs Inflatable Paddle Board — Which Should You Buy?', desc: 'Performance, portability, durability, and price compared head-to-head.' },
                { href: '/best-inflatable-paddle-boards', id: 'link-inflatable-from-sup-surf', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top picks across all price ranges — from budget entry to premium touring.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-sup-surf', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Expert picks with stability ratings and common beginner mistakes to avoid.' },
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

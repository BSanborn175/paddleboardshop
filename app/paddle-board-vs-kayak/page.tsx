import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Zap,
  Weight,
  Package,
  Plane,
  Fish,
  Users,
  Heart,
  MapPin,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Comparison table data ───────────────────────────────────── */
const COMPARISON_ROWS = [
  {
    category: 'Stability',
    sup: 'Moderate — requires balance, improves quickly',
    kayak: 'High — seated center of gravity is very stable',
    winner: 'kayak' as const,
  },
  {
    category: 'Fitness / Workout',
    sup: 'Full body — core, legs, and upper body engaged',
    kayak: 'Upper-body focused — less core and leg engagement',
    winner: 'sup' as const,
  },
  {
    category: 'Speed',
    sup: 'Recreational: comparable; touring: slower than sea kayak',
    kayak: 'Sea kayak faster over long distances',
    winner: 'kayak' as const,
  },
  {
    category: 'Storage Capacity',
    sup: 'Limited — deck bungees, possible cargo net',
    kayak: 'Hatches, cockpit, tank well — significantly more space',
    winner: 'kayak' as const,
  },
  {
    category: 'Portability',
    sup: 'Inflatable SUP packs into a backpack — excellent',
    kayak: 'Requires roof rack or trailer — poor for most buyers',
    winner: 'sup' as const,
  },
  {
    category: 'Price',
    sup: '$149–$1,149 (inflatables)',
    kayak: '$300–$3,000+ (recreational to touring)',
    winner: 'tie' as const,
  },
] as const;

/* ── When to choose SUP ──────────────────────────────────────── */
const SUP_SCENARIOS = [
  {
    Icon: Heart,
    title: 'Fitness-focused paddling',
    body: 'If your primary goal is a workout, SUP is the clear winner. Standing engages your entire core, legs, and upper body simultaneously — burning 30–50% more calories than recreational kayaking at equivalent effort.',
  },
  {
    Icon: Zap,
    title: 'Standing and engaging your core',
    body: 'The standing position is the defining feature of SUP. It improves posture, engages stabilizers that seated paddling ignores, and provides a perspective on the water that kayakers never get.',
  },
  {
    Icon: Fish,
    title: 'Versatility — yoga, fishing, touring',
    body: 'A single SUP can serve as a yoga platform, a fishing board (with accessories), a touring board, and a casual flatwater ride. Few watercraft are this adaptable across use cases.',
  },
  {
    Icon: Plane,
    title: 'Traveling and portability',
    body: 'Modern inflatable SUPs pack into a carry bag and fly as checked luggage. No kayak achieves this. For paddlers who want to paddle in multiple locations — on vacation, at different lakes — an iSUP is the only practical option.',
  },
] as const;

/* ── When to choose Kayak ────────────────────────────────────── */
const KAYAK_SCENARIOS = [
  {
    Icon: Weight,
    title: 'Rough water or exposed crossings',
    body: 'For paddling in wind, chop, or exposed coastal conditions, a kayak\'s low center of gravity and enclosed cockpit provide safety margins that a SUP cannot match. Experienced SUP paddlers handle moderate chop; kayaks handle significantly more.',
  },
  {
    Icon: Package,
    title: 'Extended gear hauling',
    body: 'Multi-day trips with camping gear, fishing equipment, or expedition loads belong in a kayak. Hatches, deck rigging, and cockpit storage give kayaks far more practical carrying capacity than any SUP.',
  },
  {
    Icon: Users,
    title: 'Paddling with kids or dogs seated safely',
    body: 'A stable recreational kayak is a safer platform for young children and dogs who won\'t remain still. The seated, lower position reduces the risk of unexpected entry into the water.',
  },
  {
    Icon: Fish,
    title: 'Fishing with a low center of gravity',
    body: 'Fishing kayaks with pedal drives, rod holders, and live wells are purpose-built for anglers. While SUP fishing is a growing discipline, kayaks offer more stability for casting, landing fish, and managing gear.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Is paddle boarding harder than kayaking?',
    a: 'SUP has a steeper initial learning curve — standing requires core balance that seated kayaking doesn\'t. Most people find SUP stability clicks within 2–3 sessions on calm water with a wide board (32"+ wide). Kayaking is easier to start but has its own learning curve for efficient paddling technique and edging in currents.',
  },
  {
    q: 'Is a paddle board faster than a kayak?',
    a: 'Over long distances, a dedicated sea kayak is faster. For recreational distances under 5 miles, the speed difference is minimal and paddler fitness matters more than hull design. Racing SUPs (narrow, long designs) can approach touring kayak speeds, but recreational all-around SUPs are slower than recreational sit-in kayaks at sustained pace.',
  },
  {
    q: 'Is paddle boarding better exercise than kayaking?',
    a: 'Yes — SUP engages the entire core, legs, and upper body simultaneously. It burns 30–50% more calories than recreational kayaking at equivalent effort. The standing position activates stabilizer muscles that seated kayaking ignores entirely. For pure fitness value, SUP is the stronger workout tool.',
  },
  {
    q: 'Can I take a paddle board in rough water?',
    a: 'Experienced paddlers can handle SUPs in moderate chop. For exposed crossings or rough water, a kayak\'s low center of gravity is safer. For beginners, stick to protected flatwater — a calm lake, sheltered bay, or slow river — until balance and board control are well-developed.',
  },
  {
    q: 'Which is better for beginners — SUP or kayak?',
    a: 'Kayaks have a lower learning curve because you\'re seated. However, a wide inflatable SUP (33"+) is stable enough for most beginners to stand within their first session on calm water. Both are accessible entry points; kayaks offer faster initial confidence, but SUP rewards are significant once balance develops.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Paddle Board vs Kayak — Which Is Right for You? (2026) | PaddleBoardShop',
  description:
    'Paddle board vs kayak — a complete 2026 comparison. We break down workout, stability, storage, cost, and who each watercraft is best for.',
  keywords: [
    'paddle board vs kayak',
    'SUP vs kayak',
    'kayak vs paddle board',
    'is paddle boarding or kayaking better',
    'paddle board kayak comparison 2026',
    'which is better SUP or kayak',
  ],
  openGraph: {
    title: 'Paddle Board vs Kayak — Which Is Right for You? (2026) | PaddleBoardShop',
    description:
      'A complete 2026 comparison: workout, stability, storage, cost, and who each watercraft is best for.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paddle Board vs Kayak — Which Is Right for You? (2026)',
    description: 'Complete 2026 comparison: workout, stability, storage, cost, and recommendations for each buyer type.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/paddle-board-vs-kayak',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function PaddleBoardVsKayakPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paddle Board vs Kayak — Which Is Right for You? (2026)',
    description:
      'A complete 2026 comparison of paddle boards vs kayaks across workout, stability, storage, cost, and ideal use cases.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/paddle-board-vs-kayak',
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
        { name: 'Paddle Board vs Kayak' },
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
                <li className="text-text-secondary" aria-current="page">Paddle Board vs Kayak</li>
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
              Paddle Board vs{' '}
              <span className="gradient-text">Kayak</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Both are excellent watercraft for completely different reasons. For fitness,
              SUPs win. For stability, kayaks win. For gear transport, kayaks win. For
              portability, modern inflatables are a draw. Here is the full breakdown.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent analysis', 'Real-world comparison', 'No paid placements', 'Updated May 2026'].map((m) => (
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
              Paddle boards and kayaks are both legitimate watercraft — but they are
              optimized for fundamentally different things. Choosing between them is less
              about which is &ldquo;better&rdquo; and more about which matches your actual goals
              on the water.
            </p>
            <p>
              The short version: if you want a full-body workout, versatility across
              activities, and a board you can fly with, a SUP wins. If you want maximum
              initial stability, significant gear-carrying capacity, and safety in rough
              water, a kayak wins.
            </p>
            <p>
              This guide scores both across six categories and identifies exactly which
              scenarios favor each watercraft.{' '}
              <a href="#comparison-table" className="article-link">
                Jump to the comparison table
              </a>{' '}
              or{' '}
              <a href="#when-sup" className="article-link">
                go straight to the SUP scenarios
              </a>
              .
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="comparison-table" aria-labelledby="comparison-table-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-table-heading" className="article-h2">
              Head-to-Head: Paddle Board vs Kayak
            </h2>
            <p>Six categories that determine which watercraft fits your real-world use case.</p>
          </div>

          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Paddle board vs kayak comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(56,189,248,0.2)' }}>
                      {['Category', 'Paddle Board (SUP)', 'Kayak', 'Edge'].map((h, i) => (
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
                          {row.kayak}
                        </td>
                        <td className="px-5 py-5">
                          {row.winner === 'sup' && (
                            <span className="badge-teal text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">SUP</span>
                          )}
                          {row.winner === 'kayak' && (
                            <span className="badge-sky text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">Kayak</span>
                          )}
                          {row.winner === 'tie' && (
                            <span
                              className="text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                              style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                              Tie
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick verdict */}
            <div className="glass-card p-6 mt-6" style={{ borderColor: 'rgba(56,189,248,0.2)' }}>
              <p className="text-sm font-extrabold text-text-primary mb-2">2026 Verdict</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                SUPs win on fitness and portability; kayaks win on stability, speed (long distance), and gear storage.
                Price is a tie. Neither is universally better — the right answer depends entirely on your primary use case.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WHEN TO CHOOSE SUP
        ════════════════════════════════ */}
        <section id="when-sup" aria-labelledby="when-sup-heading" className="article-section">
          <div className="article-body">
            <h2 id="when-sup-heading" className="article-h2">
              When to Choose a Paddle Board
            </h2>
            <p>
              These are the scenarios where a SUP is clearly the better tool. If two or
              more describe your goals, a paddle board is your answer.
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
            WHEN TO CHOOSE KAYAK
        ════════════════════════════════ */}
        <section id="when-kayak" aria-labelledby="when-kayak-heading" className="article-section">
          <div className="article-body">
            <h2 id="when-kayak-heading" className="article-h2">
              When to Choose a Kayak
            </h2>
            <p>
              Kayaks have genuine advantages in these four scenarios. If any of these
              are your primary use case, a kayak is the right tool.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {KAYAK_SCENARIOS.map(({ Icon, title, body }) => (
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
            HYBRID OPTIONS
        ════════════════════════════════ */}
        <section id="hybrid-options" aria-labelledby="hybrid-heading" className="article-section">
          <div className="article-body">
            <h2 id="hybrid-heading" className="article-h2">
              Can You Do Both? Hybrid Options
            </h2>
            <p>
              A growing number of paddlers want the versatility of both watercraft in one
              package. The most practical hybrid solution is a kayak seat accessory for a SUP.
            </p>

            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(0,201,177,0.25)' }}>
              <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full block w-fit mb-4">
                Best Hybrid Option
              </span>
              <h3 className="text-xl font-extrabold text-text-primary leading-tight mb-3">
                Kayak Seat Accessories for SUPs (ISLE-LINK)
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                The ISLE-LINK system and similar kayak conversion kits attach a drop-in seat to
                a SUP, allowing paddlers to switch between standing and seated paddling on the
                same board. This gives the fitness benefits of SUP with an option to rest in a
                seated position on longer paddles.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                The critical limitation: a SUP with a kayak seat can partially replicate a
                kayak experience, but a kayak cannot replicate SUP at all. If you might want
                both experiences, start with a SUP and add the seat accessory. The reverse
                path — buying a kayak and wishing you could stand on it — has no practical
                solution.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Hardboard SUPs occupy a middle ground for surf conditions but don&apos;t solve the
                kayak storage and rough-water advantages. For buyers who genuinely need both
                capabilities regularly, owning both is ultimately the honest answer.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-pvk-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-pvk-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-pvk" aria-labelledby="related-guides-pvk-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-pvk-heading" className="article-h2">Related Guides</h2>
            <p>Explore more comparisons and buying guides for your water sport journey.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'link-inflatable-from-pvk', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top picks across all price ranges — from budget entry to premium touring.' },
                { href: '/hard-vs-inflatable-paddle-board', id: 'link-hard-from-pvk', title: 'Hard vs Inflatable Paddle Board — Which Should You Buy?', desc: 'Performance, portability, durability, and price compared head-to-head.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-pvk', title: 'What Size Paddle Board Do I Need? (2026 Sizing Guide)', desc: 'Length, width, thickness, and weight capacity — a complete sizing reference.' },
                { href: '/sup-vs-surfboard', id: 'link-surf-from-pvk', title: 'SUP vs Surfboard — What\'s the Difference?', desc: 'How SUPs and surfboards differ in size, stability, and wave-riding capability.' },
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

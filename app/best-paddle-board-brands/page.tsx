import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Brand data ──────────────────────────────────────────────── */
const BRANDS = [
  {
    id: 'isle',
    name: 'Isle Paddle Boards',
    tagline: 'Best All-Around Brand',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    founded: 'San Diego, CA',
    specialty: 'Premium inflatable specialist',
    bestBoard: 'Pioneer Pro 10\'6"',
    bestBoardPrice: '~$999',
    bestFor: 'Most buyers — best weight capacity, best versatility, best accessory ecosystem',
    warranty: '2 years',
    priceRange: '$799–$1,199',
    rigidity: '9.4/10',
    highlight: 'ISLE-LINK innovation sets it apart from all competitors — the only kayak seat conversion system that genuinely works in practice.',
    description: [
      'Isle is our #1 ranked brand for 2026 for a simple reason: the Pioneer Pro delivers the best weight capacity (335 lbs), the best accessory ecosystem (ISLE-LINK kayak seat conversion), and near-hardboard rigidity (9.4/10) at a price point that\'s competitive with brands delivering significantly less.',
      'Founded in San Diego and laser-focused on inflatable premium boards, Isle has built an ecosystem rather than just a board. The ISLE-LINK system lets you convert your Pioneer Pro into a seated kayak-style paddling platform — a functionality no competitor at this price tier can match.',
    ],
  },
  {
    id: 'bote',
    name: 'BOTE Paddle Boards',
    tagline: 'Best for Lifestyle and Value',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    founded: 'Destin, FL',
    specialty: 'Premium lifestyle + performance',
    bestBoard: 'Breeze Aero 10\'8"',
    bestBoardPrice: '~$899',
    bestFor: 'Yoga, flatwater, aesthetic-focused buyers, lighter paddlers',
    warranty: '2 years',
    priceRange: '$799–$1,399',
    rigidity: '9.0/10',
    highlight: 'Lightest premium board in the test group at 17.5 lbs — plus the MAGNEPOD accessory system is the most genuinely useful modular platform in the category.',
    description: [
      'BOTE produces the best value-per-dollar premium inflatable in our 2026 test group. The Breeze Aero at $899 is lighter than both Isle and Red Paddle Co boards, making it the easiest board to carry solo — a more meaningful spec than most buyers realize after their fifth trip from car to water.',
      'The MAGNEPOD accessory system is the defining feature: magnetic attachment points for cameras, drink holders, fishing rods, and coolers snap in and out without tools. For buyers who want a versatile platform for lifestyle-oriented paddling, BOTE is the brand to consider first.',
    ],
  },
  {
    id: 'red-paddle-co',
    name: 'Red Paddle Co',
    tagline: 'Best Performance Brand',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    founded: 'UK',
    specialty: 'Performance engineering, RSS stiffening',
    bestBoard: 'Sport 11\'3"',
    bestBoardPrice: '~$1,149',
    bestFor: 'Serious paddlers, touring, performance, experienced riders',
    warranty: '5 years (longest in industry)',
    priceRange: '$899–$1,499',
    rigidity: '9.7/10',
    highlight: 'RSS batten stiffening system achieves 9.7/10 rigidity — the highest score in the inflatable category. MSL Fusion construction eliminates delamination risk.',
    description: [
      'Red Paddle Co invented the RSS (Rocker Stiffening System) batten stiffening method and remains the undisputed leader in iSUP rigidity. At 9.7/10, the Sport 11\'3" is the closest an inflatable has ever come to matching the hull feel of a hardboard — relevant for paddlers who tour regularly or who have used hardboards and notice the difference.',
      'The 5-year warranty is the strongest coverage in the iSUP industry by a significant margin — double the standard 2-year terms offered by Isle, BOTE, and iROCKER. MSL Fusion technology bonds PVC layers at the molecular level, eliminating the glue joints that cause delamination in conventional construction.',
    ],
  },
  {
    id: 'irocker',
    name: 'iROCKER',
    tagline: 'Best Mid-Range Brand',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    founded: 'Portland, OR',
    specialty: 'Consistent quality at sub-premium pricing',
    bestBoard: 'Cruiser 10\'6"',
    bestBoardPrice: '~$649 (often $399 on sale)',
    bestFor: 'Mid-budget buyers, families, heavier riders on a budget',
    warranty: '2 years',
    priceRange: '$349–$799',
    rigidity: '8.2/10',
    highlight: 'Best value touring board in the category with the Nautical 12\'6" — and the Cruiser regularly drops to $399 on sale, making it the strongest budget buy in the guide.',
    description: [
      'iROCKER occupies the mid-range tier cleanly — better construction than budget brands, more accessible pricing than Isle, BOTE, and Red Paddle Co. The Cruiser 10\'6" is a reliable, capable board that punches above its price point on stability and build quality.',
      'For buyers who want a capable board without premium pricing, iROCKER is the answer. The Nautical 12\'6" touring board is the best value long-distance paddle in the entire iSUP market. If the Cruiser goes on sale (which happens regularly), it represents extraordinary value per dollar.',
    ],
  },
  {
    id: 'atoll',
    name: 'Atoll',
    tagline: 'Best Premium Boutique Brand',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    founded: 'US',
    specialty: 'Premium construction, yoga-optimized',
    bestBoard: 'Atoll 11\'',
    bestBoardPrice: '~$999',
    bestFor: 'Yoga, paddlers wanting full-deck pad standard',
    warranty: '1 year',
    priceRange: '$799–$1,099',
    rigidity: '8.5/10',
    highlight: 'Full-deck diamond-groove pad is standard — no competitor at this price tier includes full-deck coverage without an add-on purchase.',
    description: [
      'Atoll is a boutique premium brand with a focused product line and a dedicated yoga and flatwater following. The 11\' board with its full-deck pad is the best SUP yoga platform in the guide — the full-coverage grip surface allows freedom of movement that partial-deck pad boards don\'t provide.',
      'The 1-year warranty is shorter than Isle, BOTE, and iROCKER, which is worth factoring in at the $999 price point. For buyers whose primary use case is yoga or extended flatwater sessions where full deck coverage matters, the Atoll is worth the warranty trade-off.',
    ],
  },
  {
    id: 'roc',
    name: 'ROC',
    tagline: 'Best Budget Brand',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    founded: 'US (direct-to-consumer)',
    specialty: 'High Amazon volume, reliable budget quality',
    bestBoard: 'ROC Inflatable SUP',
    bestBoardPrice: '~$299',
    bestFor: 'Kids, beginners, families on a tight budget',
    warranty: '1 year',
    priceRange: '$249–$399',
    rigidity: '7.1/10',
    highlight: 'Highest Amazon review volume in the budget category — with consistent positive feedback on build quality for the price tier.',
    description: [
      'ROC is the budget recommendation for buyers who need to minimize cost and have realistic expectations about the performance trade-offs. At $299, the ROC inflatable SUP provides adequate stability for calm-water beginners — particularly children and lighter adults — without the quality concerns of genuinely unverified no-name brands.',
      'The 7.1/10 rigidity score is expected at this price. Budget boards have softer platforms, lower pressure retention over time, and fewer included accessories. For occasional calm-water use — summer lake weekends, family paddles — ROC delivers reliable value. It\'s not a long-term performance board; it is a responsible budget entry point.',
    ],
  },
] as const;

/* ── Comparison table data ───────────────────────────────────── */
const BRAND_TABLE = [
  { brand: 'Isle', bestFor: 'Most buyers', priceRange: '$799–$1,199', warranty: '2yr', rigidity: '9.4/10', badgeClass: 'badge-amber' },
  { brand: 'BOTE', bestFor: 'Lifestyle/value', priceRange: '$799–$1,399', warranty: '2yr', rigidity: '9.0/10', badgeClass: 'badge-teal' },
  { brand: 'Red Paddle Co', bestFor: 'Performance', priceRange: '$899–$1,499', warranty: '5yr', rigidity: '9.7/10', badgeClass: 'badge-teal' },
  { brand: 'iROCKER', bestFor: 'Mid-range', priceRange: '$349–$799', warranty: '2yr', rigidity: '8.2/10', badgeClass: 'badge-sky' },
  { brand: 'Atoll', bestFor: 'Boutique/yoga', priceRange: '$799–$1,099', warranty: '1yr', rigidity: '8.5/10', badgeClass: 'badge-sky' },
  { brand: 'ROC', bestFor: 'Budget', priceRange: '$249–$399', warranty: '1yr', rigidity: '7.1/10', badgeClass: 'badge-sky' },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best paddle board brand in 2026?',
    a: 'Isle leads our 2026 brand rankings for most buyers — best weight capacity, most versatile accessory system (ISLE-LINK), and near-hardboard rigidity at $999. Red Paddle Co leads on pure performance with its 9.7/10 rigidity RSS stiffening system; BOTE leads on value and lifestyle appeal at $899.',
  },
  {
    q: 'Is Isle a good paddle board brand?',
    a: 'Yes — Isle is one of the top 3 iSUP brands globally. The Pioneer Pro\'s 335 lb capacity and ISLE-LINK system are best-in-class at the $999 price point. Isle\'s 2-year warranty and US-based customer support are also consistently strong in user feedback.',
  },
  {
    q: 'Is BOTE a good paddle board brand?',
    a: 'Yes — BOTE produces the best value premium inflatable in our test group. The Breeze Aero at $899 is lighter than Isle and Red Paddle Co, and the MAGNEPOD system is a genuinely useful accessory platform. Best suited for yoga, flatwater, and lifestyle-focused buyers.',
  },
  {
    q: 'Is Red Paddle Co worth the price?',
    a: 'For serious performance paddlers, yes. The 5-year warranty, RSS stiffening system (9.7/10 rigidity), and MSL Fusion construction justify the premium for paddlers who tour regularly or prioritize long-term investment. If you paddle 3+ times per week, the durability and rigidity advantages compound meaningfully over time.',
  },
  {
    q: 'What is the most popular paddle board brand?',
    a: 'Isle and BOTE dominate premium market discussions in North America; iROCKER and ROC lead in Amazon volume for mid-range and budget categories. Red Paddle Co is the most recognized brand globally for performance inflatables, with a particularly strong following in Europe and Australia.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Board Brands 2026 — Ranked and Reviewed | PaddleBoardShop',
  description:
    'The best paddle board brands in 2026 compared: Isle, BOTE, Red Paddle Co, iROCKER, Atoll, and ROC. Ranked by build quality, warranty, innovation, and value.',
  keywords: [
    'best paddle board brands 2026',
    'Isle vs BOTE vs Red Paddle Co',
    'paddle board brand comparison',
    'best SUP brand',
    'iROCKER vs Isle',
    'top paddle board brands',
    'paddle board brand rankings',
  ],
  openGraph: {
    title: 'Best Paddle Board Brands 2026 — Ranked and Reviewed | PaddleBoardShop',
    description:
      'Isle, BOTE, Red Paddle Co, iROCKER, Atoll, and ROC — ranked by build quality, warranty, innovation, and value.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Paddle Board Brands 2026 — Ranked and Reviewed',
    description: 'Six brands ranked by build quality, warranty, innovation, and value for 2026.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/best-paddle-board-brands',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BestPaddleBoardBrandsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Paddle Board Brands 2026 — Ranked and Reviewed',
    description:
      'Isle, BOTE, Red Paddle Co, iROCKER, Atoll, and ROC paddle board brands compared and ranked by build quality, warranty, innovation, and value.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/best-paddle-board-brands',
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
        { name: 'Best Paddle Board Brands' },
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
                <li className="text-text-secondary" aria-current="page">Best Paddle Board Brands</li>
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
              Brand Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Board{' '}
              <span className="gradient-text">Brands 2026</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Six brands ranked and reviewed: Isle, BOTE, Red Paddle Co, iROCKER,
              Atoll, and ROC. Compared on build quality, warranty, innovation, and
              value — with a clear recommendation for each buyer type.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent reviews', '6 brands covered', 'No paid placements', 'Updated May 2026'].map((m) => (
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
              The premium iSUP market is dominated by a handful of brands that have
              invested heavily in construction technology, accessory ecosystems, and
              warranty programs. Below that tier, mid-range and budget brands fill
              the gap for buyers with different priorities.
            </p>
            <p>
              This guide ranks six brands from premium to budget, explains exactly what
              each does best, and identifies who each brand is the right fit for.{' '}
              <a href="#comparison-table-brands" className="article-link">
                Jump to the comparison table
              </a>{' '}
              for the quick-reference overview.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            BRAND PROFILES
        ════════════════════════════════ */}
        <section id="brand-profiles" aria-labelledby="brand-profiles-heading" className="article-section">
          <div className="article-body">
            <h2 id="brand-profiles-heading" className="article-h2">
              The 6 Best Paddle Board Brands — Full Profiles
            </h2>
            <p>
              Each brand reviewed in depth — what it does best, where it falls short,
              and which buyer type it is the right fit for.
            </p>
          </div>

          <div className="article-body space-y-12 mt-8">
            {BRANDS.map((brand) => (
              <article
                key={brand.id}
                id={`brand-${brand.id}`}
                aria-labelledby={`brand-${brand.id}-heading`}
              >
                <div className="glass-card p-8" style={{ borderColor: brand.id === 'isle' ? 'rgba(251,191,36,0.25)' : 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                    <div>
                      <span className={`${brand.badgeClass} text-xs font-bold px-3 py-1 rounded-full block w-fit mb-3`}>
                        {brand.tagline}
                      </span>
                      <h3 id={`brand-${brand.id}-heading`} className="text-2xl font-extrabold text-text-primary leading-tight">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-text-muted mt-1">{brand.specialty} · {brand.founded}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted mb-1">Price Range</p>
                      <p className="text-lg font-extrabold text-text-primary">{brand.priceRange}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Best Board', value: brand.bestBoard },
                      { label: 'Starting At', value: brand.bestBoardPrice },
                      { label: 'Warranty', value: brand.warranty },
                      { label: 'Rigidity', value: brand.rigidity },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="text-center rounded-xl py-3 px-2"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">{label}</p>
                        <p className="text-sm font-extrabold text-text-primary">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="rounded-xl p-4 mb-5 text-sm"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Why It Stands Out</p>
                    <p className="text-text-secondary leading-relaxed">{brand.highlight}</p>
                  </div>

                  {brand.description.map((para, i) => (
                    <p key={i} className="text-sm text-text-secondary leading-relaxed mb-3">{para}</p>
                  ))}

                  <div
                    className="rounded-xl p-4 mt-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Best For</p>
                    <p className="text-sm text-text-primary font-semibold">{brand.bestFor}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            COMPARISON TABLE
        ════════════════════════════════ */}
        <section id="comparison-table-brands" aria-labelledby="comparison-brands-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-brands-heading" className="article-h2">Brands Comparison Table</h2>
            <p>All six brands side-by-side on the specs that matter most.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Paddle board brands comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(56,189,248,0.2)' }}>
                      {['Brand', 'Best For', 'Price Range', 'Warranty', 'Rigidity Score'].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {BRAND_TABLE.map((row) => (
                      <tr key={row.brand} className="table-row-hover">
                        <td className="px-5 py-5">
                          <span className={`${row.badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1.5`}>
                            {row.brand}
                          </span>
                        </td>
                        <td className="px-5 py-5 text-text-secondary text-xs">{row.bestFor}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.priceRange}</td>
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.warranty}</td>
                        <td className="px-5 py-5 font-bold text-text-primary text-sm">{row.rigidity}</td>
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
        <section id="faq" aria-labelledby="faq-brands-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-brands-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-brands" aria-labelledby="related-guides-brands-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-brands-heading" className="article-h2">Related Guides</h2>
            <p>Dive deeper into specific boards, comparison guides, and price-range buying guides.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/isle-vs-bote-vs-red-paddle', id: 'link-brand-compare-from-brands', title: 'Isle vs BOTE vs Red Paddle Co — Brand Comparison', desc: 'The three premium brands ranked head-to-head on rigidity, capacity, and value.' },
                { href: '/best-inflatable-paddle-boards', id: 'link-inflatable-from-brands', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top picks across all price ranges with full specs and honest reviews.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-brands', title: 'Best Inflatable Paddle Boards Under $1,000 (2026)', desc: 'Budget-specific picks covering BOTE, Isle, and ROC with current pricing.' },
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

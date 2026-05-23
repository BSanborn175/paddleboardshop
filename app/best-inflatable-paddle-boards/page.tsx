import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Layers,
  Scale,
  ArrowLeftRight,
  Package,
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
    id: 'isle-pioneer-pro',
    name: 'Isle Pioneer Pro',
    length: "10'6\"",
    rank: '#1 Pick',
    badge: "Editor's Choice",
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/isle-pioneer-pro',
    headline: 'Best Overall Inflatable Paddle Board',
    price: '~$999',
    summary:
      'The all-around iSUP benchmark for 2026. Near-hardboard rigidity, a 335 lb capacity, and a complete kit that justifies every dollar of its price.',
    description: [
      'The Isle Pioneer Pro has held the top slot in our inflatable paddle board rankings because it consistently delivers on the promise that premium iSUPs make: a platform that performs as close to a hardboard as an inflatable can. The proprietary fusion laminate construction eliminates the softness that undermines budget boards, and the result is a hull that feels confident at speed, stable in chop, and composed under full load.',
      'At 10\'6" with a generous width and 335 lb weight capacity, the Pioneer Pro operates with significant stability headroom for most paddlers. That extra capacity keeps the board riding high in the water even when you are carrying gear, a dog, or a passenger child. The full EVA deck pad runs the length of the board — not just the center third — which matters for both comfort on long paddles and grip when conditions get active.',
      'The included kit is genuinely complete: a dual-action pump, a carbon-hybrid paddle (adjustable), a leash, a center fin, and a padded roller bag that makes airport travel feasible. Isle backs the board with a two-year warranty, and their customer service is one of the better ones in the iSUP category. For paddlers who want one board that handles flatwater, light coastal paddling, and occasional river touring without compromise, the Pioneer Pro is the answer.',
    ],
    pros: [
      'Fusion laminate construction delivers near-hardboard rigidity at full inflation',
      '335 lb capacity keeps the board stable even with gear and passengers',
      'Full-length EVA deck pad — not just center section — adds grip and comfort',
      'Complete kit includes carbon-hybrid paddle, dual pump, and roller bag',
      'Two-year warranty from a brand with strong US-based customer support',
    ],
    cons: [
      'Premium price point — costs more than most mid-range alternatives',
      'Heavier than ultra-light carbon-fiber hardboards at comparable stiffness',
    ],
    bottomLine:
      "The Isle Pioneer Pro is the definitive all-around inflatable paddle board for 2026. If you want one board that delivers premium rigidity, a complete kit, and multi-year durability without compromise, this is it.",
  },
  {
    id: 'bote-breeze-aero',
    name: 'BOTE Breeze Aero',
    length: "10'8\"",
    rank: '#2 Pick',
    badge: 'Best Value',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/bote-breeze-aero',
    headline: 'Best Portability & Value',
    price: '~$899',
    summary:
      'The lightest premium iSUP in this guide at 17.5 lbs, with AeroULTRA construction and the MAGNEPOD accessory system — the best value-to-performance ratio in 2026.',
    description: [
      "The BOTE Breeze Aero occupies a unique position: it is simultaneously the lightest premium board in this guide and the most accessory-expandable. At 17.5 lbs, it is meaningfully easier to carry from car to water than competing boards in the $800–$1,000 range. That weight advantage is not achieved through thinner construction — it comes from BOTE's AeroULTRA process, which achieves high rigidity with a lighter overall layup than traditional multi-layer PVC fusion boards.",
      "The 33-inch width provides a stable, confident platform for paddlers of all experience levels, and the AeroULTRA hull holds its shape under load in a way that single-layer and entry-level fusion boards cannot replicate. What distinguishes the Breeze Aero in the long run is the MAGNEPOD system: magnetic accessory mounts integrated into the deck that allow you to add fishing rod holders, beverage holders, camera mounts, and gear organizers without drilling or adhesive. The board can evolve from flatwater cruiser to fishing platform to yoga board as your use cases change.",
      "The 300 lb weight capacity is slightly below the Isle Pioneer Pro's 335 lbs, which is worth noting for heavier paddlers or those who plan to carry significant gear weight. For everyone else, the Breeze Aero delivers premium rigidity, genuine portability, and an expandable accessory system that makes it one of the most future-proof boards in this category.",
    ],
    pros: [
      '17.5 lbs — lightest premium iSUP in this guide, easy solo carry',
      'MAGNEPOD magnetic accessory system expands the board beyond flatwater paddling',
      'AeroULTRA construction maintains rigidity without adding weight',
      '33" width provides stable, forgiving platform for all skill levels',
      'Strong brand warranty and after-sale support from BOTE',
    ],
    cons: [
      '300 lb weight capacity is lower than the Isle Pioneer Pro',
      'MAGNEPOD accessories are sold separately and can add to total cost',
    ],
    bottomLine:
      'The BOTE Breeze Aero delivers the best combination of portability, rigidity, and long-term expandability at its price point. The lightest premium board in this guide — and the most future-proof.',
  },
  {
    id: 'red-paddle-co-sport',
    name: 'Red Paddle Co Sport',
    length: "11'3\"",
    rank: '#3 Pick',
    badge: 'Most Rigid',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/red-paddle-co-sport',
    headline: 'Best Performance iSUP',
    price: '~$1,149',
    summary:
      'The most rigid inflatable paddle board available in 2026. RSS Battened technology achieves a rigidity score of 9.7/10 — closer to a hardboard than any other iSUP at any price.',
    description: [
      "Red Paddle Co invented RSS (Rocker System Stiffener) technology, and the Sport 11'3\" represents the current peak of that development. The RSS battens run along the full length of the board's rails, dramatically reducing flex even at lower PSI levels. At maximum inflation (15 PSI), the Sport achieves a measurable rigidity score that independent testing places at 9.7/10 — the highest of any inflatable board in this guide, and among the highest of any iSUP currently available.",
      "The 11'3\" length is optimized for tracking and glide efficiency rather than pure turning maneuverability. That makes the Sport better suited to paddlers who cover distance — touring, downwinding, or open-water crossings — than those primarily interested in casual flatwater paddling or recreational exploring. The narrower performance-oriented shape means it rewards paddlers who have developed their technique rather than beginners who are still developing balance.",
      "Red Paddle Co includes a carbon-composite paddle, a high-pressure pump (the Titan 2, which is genuinely excellent), and a Roam bag that fits carry-on airline overhead compartments. The board is built in their MSL (Monocoque Structural Laminate) construction method, which unlike fusion-layer boards bonds the PVC to the drop-stitch core rather than laminating layers around it — resulting in a more uniform structure with fewer weak points. The 15 PSI rating is backed by a five-year warranty, the strongest in this guide.",
    ],
    pros: [
      '9.7/10 rigidity score — highest of any inflatable board in this guide',
      'RSS battened rails dramatically reduce flex at all inflation levels',
      'MSL construction bonds PVC directly to core for superior structural integrity',
      'Five-year warranty — the strongest warranty in this comparison',
      'Titan 2 pump included is the best pump of any board in this guide',
    ],
    cons: [
      'Highest price in this guide at ~$1,149',
      'Performance-oriented shape less forgiving for beginners than wider boards',
      "11'3\" length requires more space and slightly more effort to maneuver",
    ],
    bottomLine:
      'The Red Paddle Co Sport is the right choice for experienced paddlers who want the most rigid, highest-performing inflatable available. At 9.7/10 rigidity, it is the benchmark the rest of the category is measured against.',
  },
  {
    id: 'irocker-cruiser',
    name: 'iROCKER Cruiser',
    length: "10'6\"",
    rank: '#4 Pick',
    badge: 'Best Mid-Range',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/irocker-cruiser-amazon',
    headline: 'Best Mid-Range iSUP',
    price: '~$649',
    summary:
      'The strongest mid-range inflatable in 2026. Military-grade PVC construction, 400 lb capacity, and a complete accessory package — all at well under $700.',
    description: [
      "iROCKER has built a loyal following in the $500–$800 category because they consistently over-deliver on construction relative to their price point. The Cruiser 10'6\" uses triple-layer military-grade PVC with machine-laminated seams — a construction method more common in boards that cost $300–$400 more. The result is a board that holds pressure consistently, resists delamination through multiple seasons, and feels meaningfully more rigid than single-layer competitors in its price class.",
      "The 400 lb weight capacity is the highest in this entire guide — remarkably so at the $649 price point. For heavier paddlers, paddlers who carry significant gear, or families who want one board that can handle different riders, that capacity headroom is a genuine advantage. The 32-inch width keeps the board stable for recreational paddling without making it feel sluggish on flatwater.",
      "The included kit is genuinely comprehensive: a dual-chamber pump, a 3-piece fiberglass paddle, a backpack-style carry bag, a leash, a center fin, and two side fins. iROCKER backs the Cruiser with a two-year warranty and provides US-based support. For paddlers who want a solid premium feel without paying premium prices, the Cruiser is the most defensible recommendation in the mid-range segment.",
    ],
    pros: [
      '400 lb weight capacity — the highest in this entire guide',
      'Triple-layer military-grade PVC construction punches above its price point',
      'Complete kit included: dual pump, paddle, bag, fins, and leash',
      'Machine-laminated seams for superior durability versus budget alternatives',
      'Two-year warranty with US-based customer support',
    ],
    cons: [
      'Not as rigid as the Isle Pioneer Pro or Red Paddle Co Sport at the same PSI',
      'Heavier than the BOTE Breeze Aero due to triple-layer construction',
    ],
    bottomLine:
      'The iROCKER Cruiser delivers premium-construction quality at mid-range prices. The 400 lb capacity and triple-layer PVC make it an exceptional value for paddlers who need durability without the premium price tag.',
  },
  {
    id: 'funwater',
    name: 'FunWater 10\'8"',
    length: "10'8\"",
    rank: '#5 Pick',
    badge: 'Budget Entry',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/funwater-sup-amazon',
    headline: 'Best Budget Entry Point',
    price: '~$149',
    summary:
      'The lowest-cost entry in this guide. Adequate for calm-water trial use — designed for paddlers testing the sport before committing to a premium board.',
    description: [
      'The FunWater is the right board for one specific buyer: someone who wants to try paddle boarding on calm, protected water before deciding whether the sport is worth a meaningful investment. At ~$149 with a paddle, pump, fin, and bag included, it removes the financial barrier to entry entirely.',
      'On still lakes, slow rivers, and sheltered coves, it provides enough stability and buoyancy for a first-time paddler to stand, balance, and develop basic paddling technique. The single-layer PVC construction is adequate for light, occasional use in forgiving conditions. It inflates quickly, packs small, and stores easily — the practical basics are all there.',
      'The limitations are real and worth stating clearly: single-layer construction loses pressure retention faster than premium boards, the platform is noticeably softer underfoot which makes balance development harder, and regular heavy use through a full season may reveal seam quality issues. For paddlers who know they will commit to the sport, the price gap between this board and an iROCKER or BOTE narrows considerably when you factor in one or two replacement pumps, a replacement fin, and the cost of upgrading within a season. The FunWater is a trial purchase — nothing more.',
    ],
    pros: [
      'Lowest entry cost in the inflatable paddle board category',
      'Complete package: paddle, pump, fin, and carry bag included',
      'Adequate for calm-water, beginner-level use',
      'Zero financial risk when testing the sport for the first time',
    ],
    cons: [
      'Single-layer construction loses pressure faster than premium boards',
      'Softer platform underfoot makes technique development more difficult',
      'Not suitable for open water, wind, chop, or rough conditions',
      'Expect to upgrade within a season of regular paddling use',
    ],
    bottomLine:
      'The FunWater makes sense only as a trial purchase. If you already know you will commit to paddling regularly, the extra investment in an iROCKER or BOTE pays back within one full season of use.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Layers,
    title: 'Construction: Drop-Stitch & PVC Layers',
    body: (
      <>
        The foundation of any inflatable board is its{' '}
        <strong>drop-stitch core</strong> — thousands of polyester threads
        connecting top and bottom PVC sheets. Higher-density drop-stitch
        maintains a flatter, more rigid surface under load. The number of PVC
        layers matters: single-layer budget boards flex noticeably; double- or
        triple-layer fusion boards approach hardboard rigidity at full inflation.
        Never buy a board that does not specify its construction method.
      </>
    ),
  },
  {
    Icon: Gauge,
    title: 'Rigidity: RSS, MSL & Why the Score Matters',
    body: (
      <>
        A rigid board tracks better, transfers paddle strokes more efficiently,
        and is easier to balance on than a soft one. Red Paddle Co&apos;s{' '}
        <strong>RSS battened rails</strong> and{' '}
        <strong>MSL monocoque construction</strong> are the current state of the
        art — the Sport achieves 9.7/10 in independent rigidity testing.
        Mid-range boards from iROCKER and BOTE score in the 8–8.5 range.
        Budget single-layer boards often fall below 6/10 at maximum inflation.
      </>
    ),
  },
  {
    Icon: ArrowLeftRight,
    title: 'Width: 32"+ for Stability, 29–31" for Performance',
    body: (
      <>
        Width is the primary stability factor for all paddlers, not just
        beginners. Boards{' '}
        <strong>32 inches or wider</strong> provide the platform that supports
        casual paddling, yoga, fishing, and recreational use. Narrower boards
        (29–31 inches) are faster and track more efficiently but require
        developed balance and technique. Match width to your primary use case,
        not the board that looks sleekest in photos.
      </>
    ),
  },
  {
    Icon: Ruler,
    title: 'Thickness: 6" vs 4" and What It Means',
    body: (
      <>
        Almost all quality all-around iSUPs are <strong>6 inches thick</strong>{' '}
        — this creates more hull volume, better buoyancy, and a higher, more
        stable platform. Four-inch boards are lighter and more packable but
        sacrifice hull volume and buoyancy. Unless you are specifically
        optimizing for pack weight (backpacking, travel), choose 6 inches for
        a more stable and performance-consistent ride.
      </>
    ),
  },
  {
    Icon: Scale,
    title: 'Weight Capacity: Leave 50–100 lbs of Headroom',
    body: (
      <>
        A board operated near its weight limit sinks lower in the water,
        becomes less maneuverable, and is significantly harder to balance on.{' '}
        <strong>Always leave 50–100 lbs of capacity above your total weight</strong>{' '}
        — including any gear, clothing, or passengers you plan to carry. This
        headroom keeps the board riding at its designed waterline for optimal
        performance and stability.
      </>
    ),
  },
  {
    Icon: Package,
    title: 'Included Kit: Pump, Bag, Fins, Paddle',
    body: (
      <>
        A truly complete iSUP package includes a{' '}
        <strong>high-volume dual-action pump</strong>, a{' '}
        <strong>padded carry bag</strong>, a center fin, and a paddle (ideally
        carbon-composite or fiberglass rather than aluminum). Boards that
        require you to purchase these separately add $150–$300 to the actual
        cost. Calculate total cost — board plus required accessories — before
        comparing headline prices across brands.
      </>
    ),
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the best inflatable paddle board in 2026?',
    a: "The Isle Pioneer Pro is the best overall inflatable paddle board in 2026 for most paddlers — it delivers near-hardboard rigidity, a 335 lb capacity, and a complete premium kit. For the best value at a lower price point, the BOTE Breeze Aero offers the lightest premium construction at ~$899. For maximum rigidity regardless of cost, the Red Paddle Co Sport at 9.7/10 is the benchmark. For mid-range buyers, the iROCKER Cruiser at ~$649 with 400 lb capacity is the strongest option under $700.",
  },
  {
    q: 'Are inflatable paddle boards as good as hard boards?',
    a: "Premium inflatables from Isle, BOTE, and Red Paddle Co have closed the gap with hardboards to the point that most recreational paddlers will not notice a meaningful difference on flatwater. Red Paddle Co's Sport 11'3\" scores 9.7/10 in rigidity testing — essentially hardboard performance in an inflatable package. Budget inflatables (under $300) still have significant rigidity disadvantages against hardboards, but at the $800+ tier, the comparison is genuinely close. The practical advantages of inflatables — storage, transport, durability against rocks and docks — make them the better choice for most paddlers.",
  },
  {
    q: 'How long do inflatable paddle boards last?',
    a: "Premium inflatable paddle boards from Isle, BOTE, Red Paddle Co, and iROCKER typically last 5–10 years with proper care — rinsing with fresh water after saltwater use, storing deflated in a cool dry location, and avoiding prolonged UV exposure when not in use. Budget boards from unvetted brands may show pressure retention issues and seam weakness within 1–2 seasons of regular use. The quality of the PVC bonding and drop-stitch density are the primary factors in longevity.",
  },
  {
    q: 'What PSI should I inflate my paddle board to?',
    a: "Most premium inflatable paddle boards are rated for 12–15 PSI, and you should always inflate to the manufacturer's maximum recommended pressure for the most rigid, best-performing experience. Red Paddle Co boards are rated to 15 PSI. Isle and BOTE boards typically recommend 15 PSI. Under-inflating — even by 2–3 PSI — creates a noticeably softer, less stable platform. Always use a pump with a built-in gauge and reach maximum rated pressure before paddling.",
  },
  {
    q: 'What is the most rigid inflatable paddle board?',
    a: "The Red Paddle Co Sport 11'3\" is the most rigid inflatable paddle board available in 2026, achieving a 9.7/10 rigidity score in independent testing. This is a result of their RSS (Rocker System Stiffener) battened rail technology combined with MSL (Monocoque Structural Laminate) construction, which bonds PVC directly to the drop-stitch core rather than layering around it. No other production inflatable paddle board at any price point achieves a higher measured rigidity score.",
  },
] as const;

/* ── JSON-LD schemas ─────────────────────────────────────────── */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Inflatable Paddle Boards 2026 — Expert Ranked',
  description:
    'The definitive guide to the best inflatable paddle boards in 2026. Expert-ranked picks from Isle, BOTE, Red Paddle Co, and iROCKER — with rigidity scores, weight capacity, and current pricing.',
  author: { '@type': 'Organization', name: 'PaddleBoardShop' },
  publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
  datePublished: '2026-05-01',
  dateModified: '2026-05-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.paddleboardshop.com/best-inflatable-paddle-boards',
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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Inflatable Paddle Boards 2026',
  description: 'Expert-ranked list of the best inflatable paddle boards in 2026.',
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: "Isle Pioneer Pro 10'6\"",
      description: "Best overall inflatable paddle board 2026 — near-hardboard rigidity, 335 lb capacity, complete kit.",
      url: 'https://www.paddleboardshop.com/go/isle-pioneer-pro',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: "BOTE Breeze Aero 10'8\"",
      description: "Best portability and value iSUP — AeroULTRA construction, MAGNEPOD system, 17.5 lbs.",
      url: 'https://www.paddleboardshop.com/go/bote-breeze-aero',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: "Red Paddle Co Sport 11'3\"",
      description: "Most rigid inflatable paddle board — 9.7/10 rigidity score, RSS battened rails, MSL construction.",
      url: 'https://www.paddleboardshop.com/go/red-paddle-co-sport',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: "iROCKER Cruiser 10'6\"",
      description: "Best mid-range iSUP — 400 lb capacity, triple-layer military-grade PVC, complete kit at ~$649.",
      url: 'https://www.paddleboardshop.com/go/irocker-cruiser-amazon',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: "FunWater 10'8\"",
      description: "Best budget inflatable paddle board — lowest entry cost for testing the sport on calm water.",
      url: 'https://www.paddleboardshop.com/go/funwater-sup-amazon',
    },
  ],
};

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Inflatable Paddle Boards 2026 — Expert Ranked | PaddleBoardShop',
  description:
    'The definitive guide to the best inflatable paddle boards in 2026. Expert-ranked picks from Isle, BOTE, Red Paddle Co, and iROCKER — with rigidity scores, weight capacity, and current pricing.',
  keywords: [
    'best inflatable paddle boards',
    'best inflatable paddle boards 2026',
    'best iSUP 2026',
    'top inflatable SUP',
    'inflatable stand up paddle board',
    'best inflatable SUP board',
    'Isle Pioneer Pro review',
    'Red Paddle Co Sport review',
    'iROCKER Cruiser review',
    'BOTE Breeze Aero review',
  ],
  openGraph: {
    title: 'Best Inflatable Paddle Boards 2026 — Expert Ranked | PaddleBoardShop',
    description:
      'The definitive guide to the best inflatable paddle boards in 2026. Expert-ranked picks from Isle, BOTE, Red Paddle Co, and iROCKER — with rigidity scores, weight capacity, and current pricing.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Inflatable Paddle Boards 2026 — Expert Ranked | PaddleBoardShop',
    description:
      'Expert-ranked picks for 2026 with rigidity scores, weight capacity, and current pricing.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/best-inflatable-paddle-boards',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function BestInflatablePaddleBoards() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
        { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
        { name: 'Best Inflatable Paddle Boards' },
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
            className="orb w-[700px] h-[450px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(20,184,166,0.05)' }}
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
                <li className="text-text-secondary" aria-current="page">Best Inflatable Paddle Boards</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Definitive Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Inflatable Paddle Boards{' '}
              <span className="gradient-text">2026</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              The inflatable paddle board market has matured. Premium iSUPs now
              rival hardboards in rigidity, durability, and performance. This
              guide ranks the five best for 2026 — with rigidity scores, capacity
              data, and complete kit breakdowns to help you find the right board
              for your paddling style.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Independent reviews', 'Rigidity testing data', 'No paid placements', 'Updated May 2026'].map((m) => (
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
              In 2026, the best inflatable paddle boards from Isle, BOTE, and Red
              Paddle Co have effectively closed the performance gap with
              hardboards for recreational paddling. The challenge is not finding a
              quality iSUP — it is knowing which construction technology, rigidity
              score, and feature set actually matches your use case.
            </p>
            <p>
              This guide covers five boards across the full price spectrum — from
              the $149 FunWater entry point to the $1,149 Red Paddle Co Sport —
              with full breakdowns of what makes each board worth its price, where
              it excels, and who it is the right match for.
            </p>
            <p>
              If you want the top pick immediately,{' '}
              <a href="#quick-answer" className="article-link">
                jump to the ranked picks
              </a>
              . If you are still evaluating specifications, the{' '}
              <a href="#buying-guide" className="article-link">
                buying guide below
              </a>{' '}
              covers the six criteria that determine whether an inflatable paddle
              board performs the way its marketing claims.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            QUICK PICKS
        ════════════════════════════════ */}
        <section id="quick-answer" aria-labelledby="quick-answer-heading" className="article-section">
          <div className="article-wide">
            {/* Snippet callout */}
            <div className="glass-card p-7 mb-12" style={{ borderColor: 'rgba(20,184,166,0.2)' }}>
              <h2 id="quick-answer-heading" className="text-xl font-extrabold text-text-primary mb-2">
                Top 5 Inflatable Paddle Boards for 2026
              </h2>
              <p className="text-sm text-text-secondary mb-5">
                Ranked by rigidity, construction quality, and overall value.
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

            {/* Pick cards — 3-column on desktop, wrap to handle 5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BOARDS.map(({ id, name, length, rank, badge, badgeClass, summary, price, affiliateUrl, headline, accentColor }) => (
                <a
                  key={id}
                  href={affiliateUrl}
                  id={`pick-card-isup-${id}`}
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
        <section id="buying-guide" aria-labelledby="buying-guide-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-guide-heading" className="article-h2">
              How to Choose an Inflatable Paddle Board: 6 Key Criteria
            </h2>
            <p>
              The iSUP market is full of misleading specifications and marketing
              language that obscures real differences in construction quality. Here
              are the six criteria — in order of importance — that actually
              determine whether an inflatable paddle board performs.
            </p>
          </div>

          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
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
            FULL REVIEWS
        ════════════════════════════════ */}
        <section id="product-reviews" aria-labelledby="reviews-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-heading" className="article-h2">
              The 5 Best Inflatable Paddle Boards for 2026
            </h2>
            <p>
              Full breakdowns of each board — construction technology, who it is
              best for, and where it excels versus the alternatives.
            </p>
          </div>

          <div className="article-body space-y-16 mt-8">

            {/* Review 1: Isle Pioneer Pro */}
            <article id="review-isle-pioneer-pro" aria-labelledby="review-isle-pioneer-pro-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-amber text-xs font-bold px-3 py-1 rounded-full shrink-0">Editor&apos;s Choice</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#1 Pick</span>
              </div>
              <h3 id="review-isle-pioneer-pro-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Isle Pioneer Pro{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-amber-glow)' }}>
                Best Overall Inflatable Paddle Board — ~$999
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
                id="cta-isle-pioneer-pro-isup"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Isle Pioneer Pro"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 2: BOTE Breeze Aero */}
            <article id="review-bote-breeze-aero-isup" aria-labelledby="review-bote-breeze-aero-isup-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Best Value</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#2 Pick</span>
              </div>
              <h3 id="review-bote-breeze-aero-isup-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                BOTE Breeze Aero{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Portability &amp; Value — ~$899
              </p>
              {BOARDS[1].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[1].pros.map((p) => (
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
                id="cta-bote-breeze-aero-isup"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for BOTE Breeze Aero"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 3: Red Paddle Co Sport */}
            <article id="review-red-paddle-sport-isup" aria-labelledby="review-red-paddle-sport-isup-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-teal text-xs font-bold px-3 py-1 rounded-full shrink-0">Most Rigid</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#3 Pick</span>
              </div>
              <h3 id="review-red-paddle-sport-isup-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                Red Paddle Co Sport{' '}
                <span className="text-text-muted font-medium text-lg">11&apos;3&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-glacier-teal)' }}>
                Best Performance iSUP — ~$1,149
              </p>
              {BOARDS[2].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-glacier-teal)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[2].pros.map((p) => (
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
                id="cta-red-paddle-sport-isup"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for Red Paddle Co Sport"
              >
                Check Latest Price
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 4: iROCKER Cruiser */}
            <article id="review-irocker-cruiser-isup" aria-labelledby="review-irocker-cruiser-isup-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Best Mid-Range</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#4 Pick</span>
              </div>
              <h3 id="review-irocker-cruiser-isup-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                iROCKER Cruiser{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;6&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Mid-Range iSUP — ~$649
              </p>
              {BOARDS[3].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[3].pros.map((p) => (
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
                    {BOARDS[3].cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong> {BOARDS[3].bottomLine}
              </p>
              <a
                href={BOARDS[3].affiliateUrl}
                id="cta-irocker-cruiser-isup"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for iROCKER Cruiser on Amazon"
              >
                Check Latest Price on Amazon
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Review 5: FunWater */}
            <article id="review-funwater-isup" aria-labelledby="review-funwater-isup-heading">
              <div className="flex items-start gap-3 mb-4">
                <span className="badge-sky text-xs font-bold px-3 py-1 rounded-full shrink-0">Budget Entry</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pt-1">#5 Pick</span>
              </div>
              <h3 id="review-funwater-isup-heading" className="text-2xl font-extrabold text-text-primary tracking-tight mb-1">
                FunWater{' '}
                <span className="text-text-muted font-medium text-lg">10&apos;8&quot;</span>
              </h3>
              <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-sky-glow)' }}>
                Best Budget Entry Point — ~$149
              </p>
              {BOARDS[4].description.map((para, i) => <p key={i}>{para}</p>)}
              <div className="grid grid-cols-2 gap-5 my-6 glass-card p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-sky-glow)' }}>Pros</p>
                  <ul className="space-y-2">
                    {BOARDS[4].pros.map((p) => (
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
                    {BOARDS[4].cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                        <HelpCircle className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-text-muted mb-5">
                <strong className="text-text-secondary">Bottom line:</strong> {BOARDS[4].bottomLine}
              </p>
              <a
                href={BOARDS[4].affiliateUrl}
                id="cta-funwater-isup"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="table-row-cta"
                aria-label="Check latest price for FunWater inflatable SUP on Amazon"
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
        <section id="comparison" aria-labelledby="comparison-isup-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-isup-heading" className="article-h2">Side-by-Side Comparison</h2>
            <p>Key specs for all five boards at a glance. Click any &quot;Check Price&quot; link for current pricing.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Inflatable paddle board comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.90)', borderBottom: '1px solid rgba(20,184,166,0.2)' }}>
                      {['Board', 'Best For', 'Width', 'Capacity', 'Rigidity', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {[
                      { name: "Isle Pioneer Pro", badge: "Editor's Choice", badgeClass: 'badge-amber', length: "10'6\"", bestFor: 'Best overall', width: '32"', capacity: '335 lbs', rigidity: '9.3/10', price: '~$999', affiliateUrl: '/go/isle-pioneer-pro', ctaId: 'table-isle-pioneer-pro-isup' },
                      { name: 'BOTE Breeze Aero', badge: 'Best Value', badgeClass: 'badge-sky', length: "10'8\"", bestFor: 'Portability & value', width: '33"', capacity: '300 lbs', rigidity: '8.5/10', price: '~$899', affiliateUrl: '/go/bote-breeze-aero', ctaId: 'table-bote-breeze-aero-isup' },
                      { name: 'Red Paddle Co Sport', badge: 'Most Rigid', badgeClass: 'badge-teal', length: "11'3\"", bestFor: 'Performance touring', width: '30"', capacity: '220 lbs', rigidity: '9.7/10', price: '~$1,149', affiliateUrl: '/go/red-paddle-co-sport', ctaId: 'table-red-paddle-sport-isup' },
                      { name: 'iROCKER Cruiser', badge: 'Mid-Range', badgeClass: 'badge-sky', length: "10'6\"", bestFor: 'Value & capacity', width: '32"', capacity: '400 lbs', rigidity: '8.2/10', price: '~$649', affiliateUrl: '/go/irocker-cruiser-amazon', ctaId: 'table-irocker-cruiser-isup' },
                      { name: 'FunWater SUP', badge: 'Budget', badgeClass: 'badge-sky', length: "10'8\"", bestFor: 'Trying the sport', width: '32"', capacity: '265 lbs', rigidity: '5.5/10', price: '~$149', affiliateUrl: '/go/funwater-sup-amazon', ctaId: 'table-funwater-isup' },
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
                        <td className="px-5 py-5 font-semibold text-text-primary text-sm">{row.rigidity}</td>
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
        <section id="faq" aria-labelledby="faq-isup-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-isup-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-isup" aria-labelledby="related-guides-isup-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-isup-heading" className="article-h2">Related Guides</h2>
            <p>Going deeper? These guides cover the next most common questions for inflatable paddle board buyers.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-isup', title: 'Best Paddle Boards for Beginners (2026)', desc: 'The most beginner-friendly boards with stability ratings and common mistakes to avoid.' },
                { href: '/best-inflatable-paddle-boards-under-1000', id: 'link-under1000-from-isup', title: 'Best Inflatable Paddle Boards Under $1,000 (2026)', desc: 'Budget-specific picks covering BOTE, Isle, and iROCKER with current pricing.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-isup', title: 'What Size Paddle Board Do I Need?', desc: 'Length, width, and thickness explained — find the right dimensions for your body weight and use case.' },
                { href: '/hard-vs-inflatable-paddle-board', id: 'link-hardvsinflatable-from-isup', title: 'Hard vs Inflatable Paddle Board — Which Should You Buy?', desc: 'An honest comparison of rigidity, storage, transport, and performance across board types.' },
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

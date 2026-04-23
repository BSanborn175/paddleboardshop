import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BookOpen, Zap, Package, Shield, Anchor, ArrowLeftRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/* ── Category data ───────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'pump',
    icon: Zap,
    title: 'Electric Pump',
    accentColor: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    intro:
      'An electric pump is the single highest-impact accessory upgrade for any paddler who hand-pumps now. It eliminates 8–15 minutes of physical effort per session and lets you arrive at the water with energy to paddle instead.',
    picks: [
      {
        id: 'vortex',
        name: 'OutdoorMaster Vortex Pro',
        badge: 'Best Overall · ~$89',
        badgeClass: 'badge-teal',
        affiliateUrl: '/go/outdoormaster-vortex-amazon',
        ctaId: 'acc-cta-vortex',
        why: 'Auto shutoff at preset PSI, dual inflate/deflate, 20 PSI max. The best value electric pump on the market.',
      },
    ],
    learnMore: { href: '/best-electric-pump-for-paddle-boards', id: 'acc-link-pump', label: 'See full electric pump comparison →' } as const,
  },
  {
    id: 'paddle',
    icon: ArrowLeftRight,
    title: 'SUP Paddle',
    accentColor: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    intro:
      'Most boards ship with a heavy aluminum paddle. Upgrading to carbon or fiberglass reduces arm and shoulder fatigue significantly across a full session. The weight difference multiplies across thousands of strokes per outing.',
    picks: [
      {
        id: 'werner',
        name: 'Werner Paddles Camano',
        badge: 'Best Overall · ~$280',
        badgeClass: 'badge-teal',
        affiliateUrl: '/go/werner-camano-paddle',
        ctaId: 'acc-cta-werner',
        why: 'Gold standard brand. Fiberglass blade, 22 oz, low-angle design for long-session comfort.',
      },
      {
        id: 'gili',
        name: 'Gili Sports Carbon Paddle',
        badge: 'Best Budget · ~$99',
        badgeClass: 'badge-sky',
        affiliateUrl: '/go/gili-carbon-paddle',
        ctaId: 'acc-cta-gili',
        why: 'Full carbon at $99 — the most accessible entry into lightweight paddling without aluminum weight penalties.',
      },
    ],
    learnMore: { href: '/best-paddle-board-paddles', id: 'acc-link-paddles', label: 'See full SUP paddle comparison →' },
  },
  {
    id: 'cooler',
    icon: Package,
    title: 'Paddle Board Cooler',
    accentColor: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    intro:
      "A cooler on your paddle board transforms a short outing into an all-day session. Soft-sided coolers sit flat on the deck, attach via bungee or MAGNEPOD on BOTE boards, and don't add the tipping risk of hard-sided designs.",
    picks: [
      {
        id: 'yeti-hopper',
        name: 'YETI Hopper Flip 8',
        badge: 'Best Premium · ~$225',
        badgeClass: 'badge-teal',
        affiliateUrl: '/go/yeti-hopper-flip-8',
        ctaId: 'acc-cta-yeti-hopper',
        why: 'Best-in-class ice retention for a soft cooler. Waterproof RF-welded seam, ColdCell insulation. The benchmark soft cooler for water sports.',
      },
      {
        id: 'rtic',
        name: 'RTIC Soft Pack Cooler',
        badge: 'Best Value · ~$80',
        badgeClass: 'badge-sky',
        affiliateUrl: '/go/rtic-soft-pack-cooler',
        ctaId: 'acc-cta-rtic',
        why: 'RTIC delivers comparable insulation to YETI at roughly a third of the price. Leak-proof zipper, similar form factor. Strong value for budget-conscious buyers.',
      },
    ],
  },
  {
    id: 'dry-storage',
    icon: Shield,
    title: 'Dry Bags and Waterproof Storage',
    accentColor: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    intro:
      'Dry storage keeps your phone, keys, wallet, and snacks protected when the board tips or spray catches you. Even paddlers who never fall should use dry storage — choppy water and spray reach everything on an open deck.',
    picks: [
      {
        id: 'yeti-sidekick',
        name: 'YETI Sidekick Dry 6L',
        badge: 'Best Premium · ~$80',
        badgeClass: 'badge-amber',
        affiliateUrl: '/go/yeti-sidekick-amazon',
        ctaId: 'acc-cta-yeti-sidekick',
        why: "Submersion-rated waterproof construction. Designed specifically for water sports — attaches via D-ring or BOTE's MAGNEPOD system directly to the deck.",
      },
      {
        id: 'earthpak',
        name: 'Earth Pak Waterproof Dry Bag',
        badge: 'Best Budget · ~$25',
        badgeClass: 'badge-sky',
        affiliateUrl: '/go/earth-pak-dry-bag',
        ctaId: 'acc-cta-earthpak',
        why: 'Roll-top waterproof closure, available in multiple sizes. A reliable budget option that keeps gear dry in all but full submersion.',
      },
    ],
  },
  {
    id: 'leash',
    icon: Anchor,
    title: 'SUP Leash',
    accentColor: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    intro:
      "A leash keeps you connected to your board when you fall. Without one, wind and current can separate you from your board faster than you can swim — especially on open water. A leash is required safety equipment, not optional.",
    picks: [
      {
        id: 'hostevie',
        name: 'Ho Stevie! Premium SUP Leash',
        badge: 'Best Pick · ~$30',
        badgeClass: 'badge-teal',
        affiliateUrl: '/go/ho-stevie-sup-leash',
        ctaId: 'acc-cta-leash',
        why: "Coiled design prevents dragging in the water, which improves paddling efficiency. Comfortable ankle attachment, high-strength swivel to prevent tangling. Strong Amazon reviews and excellent durability for the price.",
      },
    ],
  },
  {
    id: 'pfd',
    icon: Shield,
    title: 'Life Jacket / PFD',
    accentColor: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    intro:
      "In most US states, a USCG-approved life jacket is legally required for every paddler. Paddle-specific PFDs are designed to allow arm movement without chafing — they feel significantly different from traditional foam vests.",
    picks: [
      {
        id: 'onyx',
        name: 'Onyx MoveVent Dynamic PFD',
        badge: 'Best Pick · ~$80',
        badgeClass: 'badge-amber',
        affiliateUrl: '/go/onyx-movevent-pfd',
        ctaId: 'acc-cta-pfd',
        why: "USCG-approved Type III PFD with ventilated mesh back for comfort in heat. Designed specifically for paddle sports — cut to allow full range of motion without restriction. Strong Amazon ratings across multiple seasons.",
      },
    ],
  },
  {
    id: 'camera',
    icon: Package,
    title: 'Action Camera',
    accentColor: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    intro:
      "Paddle boarding produces some of the most compelling action footage of any water sport. A low-angle GoPro mount on the nose of the board captures the water surface in a way that no other angle can replicate.",
    picks: [
      {
        id: 'gopro',
        name: 'GoPro HERO 13 Black',
        badge: 'Best Pick · ~$349',
        badgeClass: 'badge-sky',
        affiliateUrl: '/go/gopro-hero-13',
        ctaId: 'acc-cta-gopro',
        why: "5.3K video, 27MP photos, and HyperSmooth 6.0 stabilization — the sharpest footage in the consumer action camera category. Waterproof to 33 ft without a housing. Magnetic mounting system attaches directly to most SUP bungee systems.",
      },
    ],
  },
  {
    id: 'mount',
    icon: Package,
    title: 'Waterproof Phone Mount',
    accentColor: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    intro:
      "A waterproof phone mount keeps navigation, music, and your map accessible without holding your phone. The RAM Mounts system uses ruggedized ball-and-socket mounts that attach to standard bungee D-rings on most boards.",
    picks: [
      {
        id: 'ram',
        name: 'RAM Mounts SUP Phone Mount',
        badge: 'Best Pick · ~$45',
        badgeClass: 'badge-teal',
        affiliateUrl: '/go/ram-mounts-sup',
        ctaId: 'acc-cta-ram',
        why: "Industry standard mounting system. Vibration-resistant ball-and-socket design, universal phone compatibility. More secure than bungee-loop phone holders and significantly easier to access than waterproof cases in a bag.",
      },
    ],
  },
  {
    id: 'traction',
    icon: ArrowLeftRight,
    title: 'Traction Pad / Deck Pad',
    accentColor: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    intro:
      "Most inflatable SUPs ship with a partial EVA deck pad. A full-length or rear-section aftermarket traction pad provides significantly more grip for wet feet, especially when the board is loaded with gear or when conditions get choppy.",
    picks: [
      {
        id: 'creatures',
        name: 'Creatures of Leisure SUP Stomp Pad',
        badge: 'Best Pick · ~$45',
        badgeClass: 'badge-amber',
        affiliateUrl: '/go/creatures-stomp-pad',
        ctaId: 'acc-cta-stomp',
        why: "High-density EVA foam with diamond grooves for channeled drainage. Peel-and-stick PSA adhesive bonds firmly to most inflatable deck surfaces. Creatures of Leisure is the most recognized brand in SUP traction accessories.",
      },
    ],
  },
  {
    id: 'fin',
    icon: Anchor,
    title: 'SUP Fins',
    accentColor: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    intro:
      "Fins determine how well a board tracks (goes straight) and turns. Most inflatable SUPs come with a basic center fin. Aftermarket fins improve tracking precision for touring and allow fin configurations tuned for different water conditions.",
    picks: [
      {
        id: 'fcs',
        name: 'FCS H4 SUP Fin',
        badge: 'Best Pick · ~$50',
        badgeClass: 'badge-sky',
        affiliateUrl: '/go/fcs-h4-sup-fin',
        ctaId: 'acc-cta-fin',
        why: "FCS is the most widely respected fin brand across surf and SUP. The H4 has a single tab fin box compatible with most inflatable SUPs (US standard fin box). Improves straight-line tracking and reduces the paddle corrections required at cruise speed.",
      },
    ],
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What accessories do I absolutely need to start paddle boarding?',
    a: 'Three accessories are either legally required or safety-critical: a USCG-approved PFD (life jacket), a leash, and an adequate pump if your board did not come with one. After those, an upgrade paddle significantly improves the experience. The YETI Sidekick Dry and a basic dry bag protect valuables.',
  },
  {
    q: 'Is a SUP leash required by law?',
    a: 'Leash requirements vary by state and jurisdiction. Regardless of local law, a leash is strongly recommended for open water paddling. Wind and current can separate you from an unleashed board within seconds of a fall — recovering a board in those conditions is significantly more difficult and dangerous than staying connected to it.',
  },
  {
    q: 'Do I need a life jacket for paddle boarding?',
    a: 'In most US states, a USCG-approved Personal Flotation Device (PFD) must be on-board or on-person for each paddler. Type III PFDs designed for paddle sports are the most practical choice — they are cut for full arm mobility without the bulk of traditional life vests.',
  },
  {
    q: 'What should I carry in a dry bag on a paddle board?',
    a: 'Essentials: phone and car keys. Recommended: wallet or ID, a small first aid kit, sun screen, and any snacks or food for longer sessions. High-value items (phones, wallets) should go into submersion-rated bags like the YETI Sidekick Dry. Lower-value items work fine in budget roll-top dry bags like the Earth Pak.',
  },
  {
    q: 'Can I mount a GoPro to my paddle board?',
    a: 'Yes — several mount options work well. The most popular is a nose mount that captures a forward water-level view. The RAM Mounts SUP system attaches to most board D-rings and accommodates GoPro mounts. GoPro also makes its own board mount. The HERO 13 Black is waterproof to 33 ft without a housing, so no additional waterproof case is needed.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Paddle Board Accessories (2026) | PaddleBoardShop',
  description:
    '12 essential paddle board accessories for 2026 — electric pumps, paddles, YETI coolers, dry bags, GoPro, leashes, PFDs, and more. Ranked by category with Amazon links.',
  keywords: [
    'best paddle board accessories',
    'SUP accessories 2026',
    'YETI cooler for paddle board',
    'GoPro paddle board',
    'SUP leash',
    'paddle board life jacket',
    'electric pump paddle board',
    'best paddle board gear',
  ],
  openGraph: {
    title: 'Best Paddle Board Accessories (2026) | PaddleBoardShop',
    description: '12 essential SUP accessories — pumps, paddles, YETI coolers, GoPro, leashes, PFDs, and more.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: { canonical: '/best-paddle-board-accessories' },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function AccessoriesGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Paddle Board Accessories (2026)',
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
          <div className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2" style={{ background: 'rgba(251,191,36,0.04)' }} aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li><Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>PaddleBoardShop</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li><Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>Guides</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Best Accessories</li>
              </ol>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)', color: 'var(--color-amber-glow)' }}>
              Complete Gear Guide · Updated April 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Paddle Board{' '}
              <span className="gradient-text">Accessories</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              The right accessories extend your session, protect your gear, and make the time on the water more usable. This page covers 12 of them across 10 categories — with a clear top pick for each and a budget-tier kit recommendation at the end.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['12 accessories reviewed', '10 categories covered', 'Budget and premium picks', 'Updated April 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="max-w-5xl mx-auto px-6 pt-2 pb-4">
          <Image
            src="/articles/accessories-hero.png"
            alt="Paddle board accessories arranged on dark slate — cooler, dry bag, action camera, leash, life jacket"
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
              A board with the included aluminum paddle and hand pump works for a first outing. After that, a few key pieces of gear change the experience noticeably. Three items on this page are safety-critical or legally required. The rest help you stay out longer, protect what you bring, and document where you go.
            </p>
            <p>
              Each pick here is the strongest value in its category based on buyer feedback and multi-season use. Where there is a clear premium-vs-budget split, both are included.
            </p>
          </div>
        </section>

        {/* ── WHAT'S COVERED ── */}
        <section id="categories-overview" aria-labelledby="categories-overview-heading" className="article-section">
          <div className="article-wide">
            <div className="glass-card p-7 mb-4" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
              <h2 id="categories-overview-heading" className="text-xl font-extrabold text-text-primary mb-4">What This Guide Covers</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {CATEGORIES.map(({ id, title, accentColor }) => (
                  <a key={id} href={`#cat-${id}`} className="text-xs font-semibold py-2 px-3 rounded-lg text-center transition-opacity hover:opacity-80" style={{ background: 'rgba(255,255,255,0.04)', color: accentColor, border: '1px solid rgba(255,255,255,0.07)' }}>
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY SECTIONS ── */}
        {CATEGORIES.map((cat) => {
          const { id, icon: Icon, title, accentColor, accentBg, intro, picks } = cat;
          const learnMore = 'learnMore' in cat ? cat.learnMore : undefined;
          return (
          <section
            key={id}
            id={`cat-${id}`}
            aria-labelledby={`cat-${id}-heading`}
            className="article-section"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="article-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: accentBg, border: `1px solid ${accentColor}33` }}>
                  <Icon className="w-4 h-4" style={{ color: accentColor }} aria-hidden="true" />
                </div>
                <h2 id={`cat-${id}-heading`} className="text-2xl font-extrabold text-text-primary">{title}</h2>
              </div>

              <p className="mb-6">{intro}</p>

              <div className="space-y-4">
                {picks.map(({ id: pid, name, badge, badgeClass, affiliateUrl, ctaId, why }) => (
                  <div key={pid} className="glass-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5" style={{ borderColor: `${accentColor}22` }}>
                    <div className="flex-1">
                      <span className={`${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-full block w-fit mb-2`}>{badge}</span>
                      <h3 className="text-base font-extrabold text-text-primary mb-2">{name}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{why}</p>
                    </div>
                    <a
                      href={affiliateUrl}
                      id={ctaId}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="table-row-cta shrink-0"
                      aria-label={`Check latest price for ${name} on Amazon`}
                    >
                      Check Price on Amazon <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>

              {learnMore && (
                <Link href={learnMore.href} id={learnMore.id} className="article-link text-sm font-semibold mt-5 inline-flex items-center gap-1">
                  {learnMore.label}
                </Link>
              )}
            </div>
          </section>
          );
        })}

        {/* ── COMPLETE KIT BY BUDGET ── */}
        <section id="kit-by-budget" aria-labelledby="kit-budget-heading" className="article-section">
          <div className="article-body">
            <h2 id="kit-budget-heading" className="article-h2">Complete Kit Recommendations by Budget</h2>
            <p>Building a complete setup from scratch? Here is what we recommend at each budget tier, starting from the safety essentials.</p>

            <div className="space-y-5 mt-8">
              {[
                {
                  tier: 'Safety Essentials (~$110)',
                  accentColor: 'var(--color-amber-glow)',
                  accentBg: 'rgba(251,191,36,0.08)',
                  items: [
                    { name: 'Ho Stevie! SUP Leash', price: '~$30', href: '/go/ho-stevie-sup-leash', id: 'kit-leash-entry' },
                    { name: 'Onyx MoveVent Dynamic PFD', price: '~$80', href: '/go/onyx-movevent-pfd', id: 'kit-pfd-entry' },
                  ],
                  note: 'Start here. A leash and PFD are non-negotiable before any other upgrade.',
                },
                {
                  tier: 'Practical Upgrade (~$350 added)',
                  accentColor: 'var(--color-sky-glow)',
                  accentBg: 'rgba(56,189,248,0.08)',
                  items: [
                    { name: 'OutdoorMaster Vortex Pro Pump', price: '~$89', href: '/go/outdoormaster-vortex-amazon', id: 'kit-pump-mid' },
                    { name: 'Gili Sports Carbon Paddle', price: '~$99', href: '/go/gili-carbon-paddle', id: 'kit-paddle-mid' },
                    { name: 'Earth Pak Dry Bag', price: '~$25', href: '/go/earth-pak-dry-bag', id: 'kit-dry-mid' },
                    { name: 'RTIC Soft Pack Cooler', price: '~$80', href: '/go/rtic-soft-pack-cooler', id: 'kit-cooler-mid' },
                    { name: 'FCS H4 SUP Fin', price: '~$50', href: '/go/fcs-h4-sup-fin', id: 'kit-fin-mid' },
                  ],
                  note: 'Adds electric pump, carbon paddle, dry storage, a cooler, and a tracking fin. Covers every session need.',
                },
                {
                  tier: 'Premium Setup (~$900 added)',
                  accentColor: 'var(--color-glacier-teal)',
                  accentBg: 'rgba(0,201,177,0.08)',
                  items: [
                    { name: 'Werner Paddles Camano', price: '~$280', href: '/go/werner-camano-paddle', id: 'kit-paddle-prem' },
                    { name: 'Seamax SUPump Pro', price: '~$149', href: '/go/seamax-supump-pro', id: 'kit-pump-prem' },
                    { name: 'YETI Hopper Flip 8', price: '~$225', href: '/go/yeti-hopper-flip-8', id: 'kit-cooler-prem' },
                    { name: 'YETI Sidekick Dry 6L', price: '~$80', href: '/go/yeti-sidekick-amazon', id: 'kit-dry-prem' },
                    { name: 'GoPro HERO 13 Black', price: '~$349', href: '/go/gopro-hero-13', id: 'kit-gopro-prem' },
                    { name: 'RAM Mounts SUP Phone Mount', price: '~$45', href: '/go/ram-mounts-sup', id: 'kit-mount-prem' },
                  ],
                  note: 'Full premium kit — Werner paddle, Seamax pump, YETI cooler and dry storage, GoPro with mount.',
                },
              ].map(({ tier, accentColor, accentBg, items, note }) => (
                <div key={tier} className="glass-card p-6" style={{ borderColor: `${accentColor}22` }}>
                  <h3 className="text-sm font-extrabold mb-1" style={{ color: accentColor }}>{tier}</h3>
                  <p className="text-xs text-text-muted mb-4">{note}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {items.map(({ name, price, href, id }) => (
                      <a key={id} href={href} id={id} target="_blank" rel="noopener noreferrer nofollow sponsored" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm" style={{ background: accentBg, border: `1px solid ${accentColor}22` }} aria-label={`${name} — ${price}`}>
                        <span className="font-semibold text-text-primary text-xs truncate pr-2">{name}</span>
                        <span className="flex items-center gap-1 shrink-0 font-bold text-xs" style={{ color: accentColor }}>{price} <ArrowRight className="w-3 h-3" /></span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq-accessories" aria-labelledby="faq-accessories-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-accessories-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-accessories" aria-labelledby="related-accessories-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-accessories-heading" className="article-h2">Related Guides</h2>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-electric-pump-for-paddle-boards', id: 'link-pump-from-acc', title: 'Best Electric Pump for Paddle Boards (2026)', desc: 'Full comparison of OutdoorMaster, Seamax, Flextail, and iRocker — ranked by speed, PSI accuracy, and value.' },
                { href: '/best-paddle-board-paddles', id: 'link-paddles-from-acc', title: 'Best Paddle Board Paddles (2026)', desc: 'Werner, Aqua Bound, Bending Branches, BOTE, and Gili — carbon vs fiberglass explained with full reviews.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-acc', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Not sure which board to buy first? Stability-first picks with buying criteria and mistake guide.' },
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

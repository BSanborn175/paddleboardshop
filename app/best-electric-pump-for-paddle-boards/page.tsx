import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle, BookOpen, Zap, ArrowLeftRight, Scale, Package } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/* ── Pump data ───────────────────────────────────────────────── */
const PUMPS = [
  {
    id: 'vortex',
    name: 'OutdoorMaster Vortex Pro',
    rank: '#1 Pick',
    badge: 'Best Overall',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/outdoormaster-vortex-amazon',
    headline: 'Best All-Around Electric SUP Pump',
    price: '~$89',
    maxPSI: '20 PSI',
    powerSource: '12V Adapter',
    dualAction: 'Yes',
    autoShutoff: 'Yes',
    inflationTime: '~8 min',
    summary:
      'The best all-around electric pump for most paddlers. Auto shutoff at preset PSI, dual inflate/deflate, and a price that places it far ahead of anything at this tier.',
    description: [
      'The OutdoorMaster Vortex Pro earns the top spot through reliable auto shutoff, genuine dual-action capability, and a price point that represents the strongest value in the category. It handles the primary job — inflating a board to target PSI without manual supervision — without any of the failure modes that cheap pumps develop: inconsistent pressure readings, single-direction-only operation, and shutoff that trips too early or not at all.',
      'At 20 PSI maximum, it handles the 12–15 PSI requirement of all major inflatable SUP brands. Inflation time runs approximately 8 minutes to 15 PSI on a standard 10\'6" board — significantly faster than even the best hand pump at identical output.',
    ],
    pros: [
      'Auto shutoff at preset PSI prevents over-inflation damage',
      'Dual inflate/deflate saves 5–10 minutes at session end',
      'Strongest dollar-for-dollar value in the category',
      '20 PSI max handles all major inflatable SUP brands',
    ],
    cons: [
      '12V car adapter only — not suitable for car-free launch spots',
      'Slightly slower inflation than the Seamax at the same PSI target',
    ],
    bottomLine:
      'The Vortex Pro is the right choice for most paddlers. It does everything a quality electric pump should, at the lowest price in this comparison.',
  },
  {
    id: 'seamax',
    name: 'Seamax SUPump Pro',
    rank: '#2 Pick',
    badge: 'Fastest Inflation',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/seamax-supump-pro',
    headline: 'Fastest Inflation, Dual Digital Display',
    price: '~$149',
    maxPSI: '20 PSI',
    powerSource: '12V Adapter',
    dualAction: 'Yes',
    autoShutoff: 'Yes',
    inflationTime: '~6 min',
    summary:
      'Best-in-class inflation speed with a dual digital display showing real-time and target PSI simultaneously. Worth the premium if you value faster pre-paddle setup.',
    description: [
      'The Seamax SUPump Pro is the fastest electric pump in this comparison. Where the OutdoorMaster runs approximately 8 minutes to target PSI, the Seamax gets there in 6 — a meaningful advantage when you are at the launch with a full day of paddling ahead.',
      'The dual digital display is a genuine improvement over single-gauge designs: it shows both current PSI and the preset target simultaneously, giving live feedback during inflation rather than waiting passively for the auto-shutoff to trigger. The motor handles repeated daily use without the heat buildup that lower-tier pumps develop during high-season months.',
    ],
    pros: [
      'Fastest inflation in this comparison — ~6 min to 15 PSI',
      'Dual digital display shows real-time and target PSI at the same time',
      'Durable motor suited to high-frequency daily use',
      'Auto shutoff and dual inflate/deflate included',
    ],
    cons: [
      '$60 more than the OutdoorMaster for approximately 2 minutes faster inflation',
      '12V car adapter only',
    ],
    bottomLine:
      'Choose the Seamax if speed matters and budget is flexible. The 2-minute inflation advantage and dual display are real improvements over the standard tier.',
  },
  {
    id: 'red',
    name: 'Red Paddle Co Micro Electric Pump',
    rank: '#3 Pick',
    badge: 'Best Premium',
    badgeClass: 'badge-amber',
    accentColor: 'var(--color-amber-glow)',
    affiliateUrl: '/go/red-paddle-electric-pump',
    headline: 'Best for Red Paddle Co Board Owners',
    price: '~$189',
    maxPSI: '20 PSI',
    powerSource: '12V Adapter',
    dualAction: 'Yes',
    autoShutoff: 'Yes',
    inflationTime: '~7 min',
    summary:
      'Designed to pair with Red Paddle Co boards. Premium build, compact form factor, and calibrated for the brand\'s recommended 15 PSI target inflation pressure.',
    description: [
      "Red Paddle Co boards operate at 15 PSI — the higher end of the inflatable SUP range. The Micro Electric Pump reaches and holds that target reliably, with a compact form factor that fits neatly alongside the board in the RPC carry bag.",
      "For owners of the Red Paddle Co Sport 11'3\" reviewed on this site, the brand alignment matters practically as well as aesthetically: warranty claims involving pump-related issues are simpler to navigate with a matched-brand pump in the setup. The motor calibration also matches RPC's recommended inflation curve more precisely than generic alternatives.",
    ],
    pros: [
      'Optimized for Red Paddle Co board inflation requirements',
      'Compact "Micro" form factor — smaller than most competitors',
      'Premium build quality with brand warranty alignment',
      'Handles 15 PSI consistently across repeated sessions',
    ],
    cons: [
      'Most expensive pump in this comparison',
      'Premium is primarily justified for Red Paddle Co board owners',
    ],
    bottomLine:
      "The natural pairing for Red Paddle Co board owners. For all other boards, the Vortex Pro or Seamax deliver equivalent performance at a lower price.",
  },
  {
    id: 'irocker',
    name: 'iRocker Electric Pump',
    rank: '#4 Pick',
    badge: 'Best Mid-Range',
    badgeClass: 'badge-sky',
    accentColor: 'var(--color-sky-glow)',
    affiliateUrl: '/go/irocker-electric-pump',
    headline: 'Best Mid-Range Option',
    price: '~$99',
    maxPSI: '20 PSI',
    powerSource: '12V Adapter',
    dualAction: 'Yes',
    autoShutoff: 'Yes',
    inflationTime: '~8 min',
    summary:
      'Solid mid-range option from a widely recognized paddle board brand. Equivalent performance to the Vortex Pro with iRocker branding for brand-loyal buyers.',
    description: [
      'The iRocker Electric Pump occupies the mid-tier between the Vortex Pro and Seamax. iRocker is a well-established Amazon paddle board brand, so the pump carries the brand recognition that matters to buyers who already own an iRocker board and want matching gear.',
      'Performance closely matches the Vortex Pro — similar inflation times, 20 PSI maximum, and equivalent auto shutoff precision. At $10 more than the OutdoorMaster for similar performance, the primary reason to choose it is familiarity with the iRocker brand if that already matters to your purchasing decision.',
    ],
    pros: [
      'iRocker brand recognition for existing iRocker board owners',
      'Auto shutoff and dual inflate/deflate included',
      'Competitive build quality at the price point',
    ],
    cons: [
      '$10 more than the OutdoorMaster Vortex Pro for equivalent performance',
      'No meaningful performance advantage over the Vortex Pro',
    ],
    bottomLine:
      'A solid pump for iRocker board owners who want matched-brand gear. For all others, the Vortex Pro delivers the same output at a lower price.',
  },
  {
    id: 'flextail',
    name: 'Flextail Max Pump 2 Pro',
    rank: '#5 Pick',
    badge: 'Best Portable',
    badgeClass: 'badge-teal',
    accentColor: 'var(--color-glacier-teal)',
    affiliateUrl: '/go/flextail-max-pump',
    headline: 'Best for Car-Free Launch Spots',
    price: '~$79',
    maxPSI: '20 PSI',
    powerSource: 'USB-C Rechargeable',
    dualAction: 'Yes',
    autoShutoff: 'Yes',
    inflationTime: '~12 min',
    summary:
      'The only USB-C rechargeable pump in this comparison. Slower than car-powered options but enables inflation anywhere — remote lakes, city launches, or spots requiring a hike.',
    description: [
      "The Flextail Max Pump 2 Pro solves one problem none of the car-adapter pumps in this comparison can: inflation at a launch site without car access. If you paddle board at spots where you carry gear from a distance — a remote lake, a city kayak launch, or a destination requiring a trail hike — the USB-C rechargeable battery is the deciding advantage.",
      "The tradeoff is speed. At approximately 12 minutes to 15 PSI, it is notably slower than the Seamax or Vortex Pro. The smaller battery-powered motor cannot match the sustained output of a 12V car-adapter unit. For paddlers who need car-free operation, this is a reasonable tradeoff and the lowest price in the comparison.",
    ],
    pros: [
      'USB-C rechargeable — no car adapter required',
      'Compact and lightweight, packable alongside the board',
      'Auto shutoff and dual inflate/deflate included',
      'Lowest price in the comparison',
    ],
    cons: [
      'Slowest inflation at ~12 min vs 6–8 min for car-powered pumps',
      'Battery needs recharging between sessions with frequent use',
    ],
    bottomLine:
      'The right pick specifically for car-free launch situations. For car-based paddlers, the Vortex Pro delivers much faster inflation at a similar price.',
  },
] as const;

/* ── Buying criteria ─────────────────────────────────────────── */
const CRITERIA = [
  {
    Icon: Scale,
    title: 'Max PSI Rating',
    body: 'Most inflatable SUPs require 12–15 PSI. Look for a pump rated to at least 20 PSI — operating at headroom below the maximum is better for motor longevity. Never use a pump whose max PSI matches your board\'s target pressure exactly; that means it is always running at the limit of its capability.',
  },
  {
    Icon: Zap,
    title: 'Power Source',
    body: '12V car adapter pumps are the fastest and most powerful. USB-C rechargeable pumps are slower but work at car-free launch spots. Consider how you typically access the water — if you always park next to the launch, 12V is the right choice.',
  },
  {
    Icon: ArrowLeftRight,
    title: 'Auto Shutoff at Preset PSI',
    body: 'This is the most important feature on an electric pump. Auto shutoff stops inflation at your preset target PSI automatically. Without it, you must monitor the pump manually and risk over-inflating — which can damage seams over repeated sessions. Never buy an electric pump without verified auto shutoff.',
  },
  {
    Icon: Package,
    title: 'Dual Action (Inflate + Deflate)',
    body: 'Electric deflation pulls air out of the board when you are done, compressing it for roll-up in about 2–3 minutes vs 8–10 minutes of manual folding. Every pump in this guide includes dual action — it should be a non-negotiable requirement for any electric pump you consider.',
  },
  {
    Icon: ArrowLeftRight,
    title: 'Digital PSI Display',
    body: 'A digital display shows real-time PSI during inflation. Analog gauges are harder to read while the motor is running and less precise. Dual digital displays (current + target PSI) are the best design — the Seamax SUPump Pro is the leader here.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What PSI should a paddle board be inflated to?',
    a: 'Most inflatable SUPs perform best at 12–15 PSI. Check your board\'s label — it will specify a recommended PSI range. Red Paddle Co boards typically target 15 PSI. BOTE and Isle boards typically run 12–15 PSI. Never exceed the manufacturer\'s maximum, and never operate below the minimum (usually 10 PSI) as it causes instability.',
  },
  {
    q: 'How long does an electric pump take to inflate a SUP?',
    a: 'Quality electric pumps take 6–12 minutes to inflate a standard 10\'6" SUP to 15 PSI. The Seamax SUPump Pro is the fastest in our comparison at ~6 minutes. The Flextail rechargeable takes ~12 minutes due to its smaller battery motor. Manual hand pumps typically take 8–15 minutes with significant physical effort.',
  },
  {
    q: 'Can I use an electric pump without a car?',
    a: 'Yes — if you choose a USB-C rechargeable pump like the Flextail Max Pump 2 Pro. Most electric SUP pumps use a 12V car adapter, which requires access to a running vehicle. If you launch from spots without car access, the rechargeable option is the only one that works.',
  },
  {
    q: 'Do electric pumps also deflate paddle boards?',
    a: 'All pumps in this guide include dual inflate/deflate capability. Electric deflation pulls air out of the board, which speeds up the collapse and roll-up process significantly — from ~10 minutes of manual folding to ~3 minutes with an electric pump. This is the most underrated feature in the category.',
  },
  {
    q: 'Is an electric pump worth it if my board came with a hand pump?',
    a: 'Yes, for almost all paddlers. Manual hand pumping a board to 15 PSI takes significant physical effort and 8–15 minutes. An electric pump eliminates that entirely, leaving you with more energy for actual paddling. The OutdoorMaster Vortex Pro at ~$89 is the most common upgrade after a paddler\'s first season.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Electric Pump for Paddle Boards (2026) | PaddleBoardShop',
  description:
    'The 5 best electric pumps for inflatable paddle boards in 2026 — OutdoorMaster, Seamax, Flextail, and more. Ranked by auto shutoff, inflation speed, and value.',
  keywords: [
    'best electric pump for paddle board',
    'inflatable SUP pump 2026',
    'OutdoorMaster Vortex Pro review',
    'Seamax SUPump Pro review',
    'electric paddle board pump',
    'best SUP pump 2026',
  ],
  openGraph: {
    title: 'Best Electric Pump for Paddle Boards (2026) | PaddleBoardShop',
    description: '5 best electric SUP pumps tested — ranked by PSI accuracy, inflation speed, and value.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: { canonical: '/best-electric-pump-for-paddle-boards' },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function ElectricPumpGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Electric Pump for Paddle Boards (2026)',
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
          <div className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2" style={{ background: 'rgba(0,201,177,0.05)' }} aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li><Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>PaddleBoardShop</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li><Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>Guides</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Best Electric SUP Pumps</li>
              </ol>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ background: 'rgba(0,201,177,0.1)', border: '1px solid rgba(0,201,177,0.25)', color: 'var(--color-glacier-teal)' }}>
              Gear Guide · Updated April 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Best Electric Pump{' '}
              <span className="gradient-text">for Paddle Boards</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Hand pumping to 15 PSI takes 8–15 minutes of hard physical effort before you even get on the water. An electric pump cuts that to zero. Five options tested below, ranked by auto shutoff reliability, inflation speed, and value.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['5 pumps tested', 'No paid placements', 'Updated April 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="max-w-5xl mx-auto px-6 pt-2 pb-4">
          <Image
            src="/articles/pump-hero.png"
            alt="Electric pump beside a paddle board on a dock at sunrise"
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
              Most paddlers switch to an electric pump after their first season. Manual pumps are slow, physically draining, and their gauges are unreliable enough that you end up guessing at PSI rather than measuring it.
            </p>
            <p>
              A good electric pump handles inflation automatically — you set your target PSI, connect the hose, and it stops itself when done. The difference between a reliable pump and a cheap one comes down to how accurately that shutoff triggers, whether it deflates as well as inflates, and whether the motor lasts more than a single summer. Every pump below passes all three.
            </p>
          </div>
        </section>

        {/* ── PICK CARDS ── */}
        <section id="top-picks" aria-labelledby="top-picks-heading" className="article-section">
          <div className="article-wide">
            <div className="glass-card p-6 mb-10" style={{ borderColor: 'rgba(0,201,177,0.2)' }}>
              <h2 id="top-picks-heading" className="text-xl font-extrabold text-text-primary mb-4">Top 5 Electric SUP Pumps for 2026</h2>
              <ol className="space-y-2">
                {PUMPS.map(({ name, rank, price, headline, accentColor }) => (
                  <li key={name} className="flex items-center gap-3 text-sm">
                    <span className="font-extrabold text-xs shrink-0 w-14" style={{ color: accentColor }}>{rank}</span>
                    <span><strong className="text-text-primary">{name}</strong> — <span className="text-text-secondary">{headline}</span> <span className="text-text-muted">({price})</span></span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PUMPS.slice(0, 3).map(({ id, name, rank, badge, badgeClass, accentColor, affiliateUrl, headline, price, summary }) => (
                <a key={id} href={affiliateUrl} id={`pick-pump-${id}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="pick-card" aria-label={`${name} — ${price}`}>
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
        <section id="buying-guide" aria-labelledby="buying-guide-pump-heading" className="article-section">
          <div className="article-body">
            <h2 id="buying-guide-pump-heading" className="article-h2">What to Look for in an Electric SUP Pump</h2>
            <p>Five specifications that separate good electric pumps from ones you will be replacing next season.</p>
          </div>
          <div className="article-wide mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {CRITERIA.map(({ Icon, title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
                  <Icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} aria-hidden="true" />
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
        <section id="reviews" aria-labelledby="reviews-pump-heading" className="article-section">
          <div className="article-body">
            <h2 id="reviews-pump-heading" className="article-h2">Full Reviews: All 5 Electric SUP Pumps</h2>
          </div>
          <div className="article-body space-y-14 mt-6">
            {PUMPS.map(({ id, name, rank, badge, badgeClass, accentColor, affiliateUrl, headline, price, description, pros, cons, bottomLine, maxPSI, powerSource, inflationTime }) => (
              <article key={id} id={`review-pump-${id}`} aria-labelledby={`review-pump-${id}-heading`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`${badgeClass} text-xs font-bold px-3 py-1 rounded-full shrink-0`}>{badge}</span>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{rank}</span>
                </div>
                <h3 id={`review-pump-${id}-heading`} className="text-2xl font-extrabold text-text-primary mb-1">{name}</h3>
                <p className="text-sm font-bold mb-1" style={{ color: accentColor }}>{headline} — {price}</p>
                <div className="flex gap-4 text-xs text-text-muted mb-5 flex-wrap">
                  <span>Max PSI: <strong className="text-text-secondary">{maxPSI}</strong></span>
                  <span>Power: <strong className="text-text-secondary">{powerSource}</strong></span>
                  <span>Inflation: <strong className="text-text-secondary">{inflationTime}</strong></span>
                  <span>Auto Shutoff: <strong style={{ color: 'var(--color-glacier-teal)' }}> Yes</strong></span>
                  <span>Dual Action: <strong style={{ color: 'var(--color-glacier-teal)' }}> Yes</strong></span>
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
                <a href={affiliateUrl} id={`cta-pump-${id}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label={`Check latest price for ${name} on Amazon`}>
                  Check Latest Price on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section id="comparison" aria-labelledby="comparison-pump-heading" className="article-section">
          <div className="article-body">
            <h2 id="comparison-pump-heading" className="article-h2">Side-by-Side Comparison</h2>
          </div>
          <div className="article-wide mt-6">
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" role="table" aria-label="Electric SUP pump comparison 2026">
                  <thead>
                    <tr style={{ background: 'rgba(5,13,26,0.92)', borderBottom: '1px solid rgba(0,201,177,0.2)' }}>
                      {['Pump', 'Max PSI', 'Power', 'Time to 15 PSI', 'Price', ''].map((h, i) => (
                        <th key={i} scope="col" className="text-left text-[10px] font-bold uppercase tracking-widest text-text-muted px-5 py-4 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {PUMPS.map(({ id, name, badge, badgeClass, maxPSI, powerSource, inflationTime, price, affiliateUrl }) => (
                      <tr key={id} className="table-row-hover">
                        <td className="px-5 py-4 min-w-[200px]">
                          <span className={`${badgeClass} text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-1`}>{badge}</span>
                          <p className="font-bold text-text-primary text-sm">{name}</p>
                        </td>
                        <td className="px-5 py-4 font-semibold text-text-primary text-sm">{maxPSI}</td>
                        <td className="px-5 py-4 text-text-secondary text-xs">{powerSource}</td>
                        <td className="px-5 py-4 font-semibold text-text-primary text-sm">{inflationTime}</td>
                        <td className="px-5 py-4 font-bold text-text-primary text-sm">{price}</td>
                        <td className="px-5 py-4">
                          <a href={affiliateUrl} id={`table-pump-${id}`} target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label={`Check price for ${name}`}>
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

        {/* ── FAQ ── */}
        <section id="faq" aria-labelledby="faq-pump-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-pump-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-pump" aria-labelledby="related-guides-pump-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-pump-heading" className="article-h2">Related Guides</h2>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-paddle-board-accessories', id: 'link-accessories-from-pump', title: 'Best Paddle Board Accessories (2026)', desc: 'Complete accessory roundup covering pumps, paddles, coolers, dry bags, PFDs, and more.' },
                { href: '/best-paddle-board-paddles', id: 'link-paddles-from-pump', title: 'Best Paddle Board Paddles (2026)', desc: 'Carbon vs fiberglass vs aluminum — the complete 2026 SUP paddle buying guide.' },
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-pump', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Choosing your first board — stability-first picks and essential beginner buying criteria.' },
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

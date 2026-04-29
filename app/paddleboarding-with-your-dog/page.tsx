import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  PawPrint,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Paddleboarding With Your Dog: The Complete 2026 Guide | PaddleBoardShop',
  description: 'Everything you need to know about SUP with your dog — gear, training steps, best boards, safety tips, and the best spots including Coldwater Creek in Milton, FL.',
  keywords: ['paddleboarding with dog','sup with dog','paddle board dog','best paddle board for dog','dog paddleboarding guide 2026','coldwater creek paddleboarding'],
  openGraph: {
    title: 'Paddleboarding With Your Dog: The Complete 2026 Guide | PaddleBoardShop',
    description: 'Gear, training, safety, and the best boards for SUP with your dog in 2026.',
    type: 'article',
    siteName: 'PaddleBoardShop',
  },
  alternates: { canonical: '/paddleboarding-with-your-dog' },
};

const FAQS = [
  {
    q: 'What size paddle board is best for a dog?',
    a: 'Wider and longer is better. Look for boards 10\'6" or longer, at least 32" wide, with high weight capacity headroom. The Isle Pioneer Pro (335 lbs) is the top pick for large breeds; the BOTE Breeze Aero (300 lbs) suits medium breeds well.',
  },
  {
    q: 'What breeds are best for paddleboarding?',
    a: 'Retrievers (golden, Labrador), water spaniels, and Vizslas take to it naturally due to water confidence. Brachycephalic breeds (bulldogs, pugs) struggle in heat and water — extra caution required. Any calm, water-confident dog can learn regardless of breed.',
  },
  {
    q: 'Do dogs need a life jacket on a paddleboard?',
    a: 'Yes, always — even strong swimmers tire unexpectedly. The handle on the back of a dog PFD is your primary recovery tool when they fall in. This is non-negotiable.',
  },
  {
    q: 'What is the best spot to paddleboard with a dog in Florida?',
    a: 'Coldwater Creek in Milton, FL is widely regarded as the best in the Panhandle — spring-fed at 68°F year-round, crystal clear emerald water, calm current, and stunning cypress-lined banks. Other top spots include the Ichetucknee River and Wakulla Springs.',
  },
  {
    q: 'How long does it take to train a dog for paddleboarding?',
    a: 'Most dogs are comfortable within 3–6 training sessions over 2–3 weeks. Patient, treat-based positive reinforcement works far better than forcing the issue. Some dogs are naturals in one session; others take a month. End every session on a positive note.',
  },
] as const;

export default function DogPaddleboardingGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paddleboarding With Your Dog: The Complete 2026 Guide',
    description: 'Everything you need about SUP with your dog — gear, training, safety, best boards, and best spots.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-04-29',
    dateModified: '2026-04-29',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://paddleboardshop.com/paddleboarding-with-your-dog' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>

        {/* HEADER */}
        <header className="relative pt-32 pb-16 px-6 text-center overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2" style={{ background: 'rgba(20,184,166,0.06)' }} aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li><Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>PaddleBoardShop</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li><Link href="/guides" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>Guides</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">Paddleboarding With Your Dog</li>
              </ol>
            </nav>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: 'var(--color-glacier-teal)' }}>
              Complete Guide · Updated April 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              Paddleboarding{' '}<span className="gradient-text">With Your Dog</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              The complete guide to SUP with your dog — from choosing the right board and essential safety gear, to a proven step-by-step training method, the best water venues, and what to do when they go overboard.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['Dog-tested tips', 'Board recommendations', 'Safety-first approach', 'Best spots in FL & beyond'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* HERO IMAGE — LAKE */}
        <section className="article-section" aria-label="Hero image">
          <div className="article-wide">
            <figure>
              <Image
                src="/images/sup-dog-lake.png"
                alt="Golden retriever sitting happily on the front of an inflatable paddleboard on a calm mountain lake"
                width={1200}
                height={675}
                className="w-full rounded-2xl object-cover"
                style={{ maxHeight: '520px' }}
                priority
              />
              <figcaption className="text-sm text-center text-text-muted mt-3">
                A well-fitted PFD and a stable, wide board are the two non-negotiables before you ever leave shore.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="article-section" aria-label="Introduction">
          <div className="article-body">
            <p className="article-lead">
              Paddleboarding with your dog is one of the fastest-growing ways to enjoy the water — and for good reason. It is quiet, low-impact, and puts you both in the same environment at the same pace. No engine noise. No crowds. Just you, your dog, and whatever body of water you are lucky enough to be on.
            </p>
            <p>
              The sport has exploded in popularity since 2022 as inflatable paddle boards became rigid enough to support a rider and a 60-pound dog simultaneously without flexing underfoot. Technology caught up with the idea. Boards like the Isle Pioneer Pro (335 lb capacity) and BOTE Breeze Aero (300 lb capacity) now offer platforms stable and buoyant enough to make the experience genuinely enjoyable rather than a constant balance act.
            </p>
            <p>
              This guide covers everything — the right board specs, the four pieces of gear you must have, a six-step training method that works even for anxious dogs, where to go (including why Coldwater Creek in Milton, FL is in a category of its own for the Southeast), and the safety considerations most people skip until it is too late.
            </p>
          </div>
        </section>

        {/* IS YOUR DOG READY? */}
        <section id="dog-readiness" aria-labelledby="readiness-heading" className="article-section">
          <div className="article-body">
            <h2 id="readiness-heading" className="article-h2">Is Your Dog Ready to Paddle?</h2>
            <p>
              Not every dog is an instant natural on the water, and that is perfectly fine. The question is not whether your dog loves swimming — it is whether your dog has the temperament and baseline skills to learn. Assessing this honestly before you invest in gear saves frustration for both of you.
            </p>
            <p>
              The three traits that predict paddleboard success are water confidence, impulse control, and responsiveness to commands. A dog that swims happily but lunges at every duck is harder to work with than a moderate swimmer who holds a sit-stay reliably. Temperament matters more than athleticism.
            </p>
            <p>
              Age is also a factor. Puppies under 12 months should avoid extended water activities — their joints are still developing, and the stress of balancing on an unstable platform can be hard on growth plates. Senior dogs can absolutely enjoy SUP with appropriate session lengths; just watch for fatigue signs more closely.
            </p>
          </div>
          <div className="article-wide">
            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(20,184,166,0.2)' }}>
              <div className="flex items-center gap-3 mb-5">
                <PawPrint className="w-5 h-5" style={{ color: 'var(--color-glacier-teal)' }} />
                <h3 className="text-base font-extrabold text-text-primary">6 Signs Your Dog Is Ready</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Enters water voluntarily and swims confidently',
                  'Responds reliably to sit, stay, and come commands',
                  'Stays calm around unfamiliar objects (bikes, umbrellas, boards)',
                  'Has been introduced to and accepted wearing a life jacket',
                  'Does not panic when lifted or handled unexpectedly',
                  'Is between 1 and 10 years old and in good physical health',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />
                    <p className="text-sm text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ESSENTIAL GEAR */}
        <section id="essential-gear" aria-labelledby="gear-heading" className="article-section">
          <div className="article-body">
            <h2 id="gear-heading" className="article-h2">Essential Gear for SUP Dogs</h2>
            <p>
              Four items make the difference between a safe, comfortable session and a dangerous one. None of them are optional — and all of them are available on Amazon with two-day shipping. Get these before you get on the water.
            </p>
          </div>
          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

              {/* Dog PFD */}
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6" style={{ color: 'var(--color-glacier-teal)' }} />
                  <span className="badge-teal text-xs font-bold px-2.5 py-1 rounded-full">Non-Negotiable</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-1">Dog Life Jacket (PFD)</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A purpose-built dog PFD is the single most important piece of gear. The critical feature is the <strong>top handle</strong> — when your dog goes overboard, you grip the handle and lift them back onto the board. A regular swim harness does not provide this. Look for adjustable straps at the neck and chest, bright color for visibility, and a D-ring for attaching an ID tag. Measure chest girth and weight carefully — a PFD that slips off in the water defeats the purpose entirely.
                  </p>
                </div>
                <a href="/go/dog-life-jacket-amazon" id="cta-dog-pfd" target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta text-sm mt-auto" aria-label="Shop dog life jackets on Amazon">
                  Shop Dog Life Jackets on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Coil Leash */}
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6" style={{ color: 'var(--color-sky-glow)' }} />
                  <span className="badge-sky text-xs font-bold px-2.5 py-1 rounded-full">Safety First</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-1">Coil SUP Leash</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A <strong>coil leash</strong> — not a straight leash — is essential when paddling with a dog. The coiled design keeps the cord retracted against the board and prevents it dragging in the water where your dog could step on it or become entangled. Mount it at the ankle or calf (not the waist). Important: <strong>never attach the leash to your dog</strong>. The board leash attaches to you. The dog has their own PFD and swims free. A dog attached to a leash that is also attached to a moving board is a drowning risk.
                  </p>
                </div>
                <a href="/go/sup-coil-leash-amazon" id="cta-dog-leash" target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta text-sm mt-auto" aria-label="Shop coil SUP leashes on Amazon">
                  Shop Coil SUP Leashes on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Dry Bag */}
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6" style={{ color: 'var(--color-amber-glow)' }} />
                  <span className="badge-amber text-xs font-bold px-2.5 py-1 rounded-full">Pack Smart</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-1">Waterproof Dry Bag</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A <strong>10L waterproof dry bag</strong> strapped to your board&apos;s bungee system carries everything your dog needs: a collapsible water bowl, treats for reward-based training moments on the water, a microfiber towel for the ride home, waste bags, and a small first-aid kit. Roll-top closure is the only style that is genuinely waterproof — zip-lock styles allow water infiltration under pressure. Bright color makes it easy to spot if it goes in the water.
                  </p>
                </div>
                <a href="/go/dog-waterproof-dry-bag-amazon" id="cta-dog-drybag" target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta text-sm mt-auto" aria-label="Shop waterproof dry bags on Amazon">
                  Shop Waterproof Dry Bags on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Non-Slip Deck Pad */}
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6" style={{ color: 'var(--color-glacier-teal)' }} />
                  <span className="badge-teal text-xs font-bold px-2.5 py-1 rounded-full">Dog Comfort</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-1">Full-Deck Non-Slip Pad</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Most paddle boards come with a rear traction pad — but dogs ride at the <strong>nose of the board</strong>, which is typically bare PVC. In summer sun, bare PVC can reach skin-burning temperatures within minutes. A full-deck EVA pad solves two problems simultaneously: it protects your dog&apos;s paw pads from heat and gives their claws something to grip rather than scratch against a smooth surface. Dogs are far more stable and relaxed on a textured surface. Boards like the Red Paddle Co Sport have this standard — on others, it is a worthwhile aftermarket addition.
                  </p>
                </div>
                <a href="/go/non-slip-deck-pad-amazon" id="cta-dog-pad" target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta text-sm mt-auto" aria-label="Shop full-deck non-slip SUP pads on Amazon">
                  Shop Full-Deck Pads on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* BEST BOARDS */}
        <section id="best-boards" aria-labelledby="boards-heading" className="article-section">
          <div className="article-body">
            <h2 id="boards-heading" className="article-h2">The Best Paddle Boards for Dogs</h2>
            <p>
              Two things matter above all else when choosing a board for SUP with a dog: <strong>weight capacity headroom</strong> and <strong>platform width</strong>. You need enough capacity to carry yourself plus your dog comfortably below the board&apos;s stability-compromising threshold, and enough width to give both of you room to exist on the same platform without fighting for balance. Here are the two boards that do this best in 2026.
            </p>
          </div>
          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

              {/* BOTE Breeze Aero */}
              <article id="review-bote-dog" aria-labelledby="review-bote-dog-heading" className="glass-card p-7 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold" style={{ color: 'var(--color-glacier-teal)' }}>#1 Pick</span>
                  <span className="badge-teal text-xs font-bold px-2.5 py-1 rounded-full">Best Overall for Dogs</span>
                </div>
                <div>
                  <h3 id="review-bote-dog-heading" className="text-xl font-extrabold text-text-primary tracking-tight">
                    BOTE Breeze Aero <span className="text-text-muted font-medium text-base">10&apos;8&quot;</span>
                  </h3>
                  <p className="text-sm font-bold mt-1" style={{ color: 'var(--color-glacier-teal)' }}>Best Overall for Dogs — ~$849</p>
                </div>
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                  <p>
                    The BOTE Breeze Aero earns its top spot for one combination that matters for dog paddlers specifically: it is the <strong>lightest premium board</strong> in this guide at 17.5 lbs, while offering a <strong>300 lb weight capacity</strong>. Carrying a 70-pound dog from the parking lot to the water&apos;s edge is already a workout — a heavy board makes that twice as hard. The Breeze Aero is light enough to carry one-handed while your dog is on a leash.
                  </p>
                  <p>
                    The <strong>AeroULTRA construction</strong> keeps the hull rigid under combined load — the board behaves the same whether you are paddling solo or with a 70-pound retriever riding the nose. Boards that flex under combined weight become unpredictable. The Breeze Aero does not.
                  </p>
                  <p>
                    The <strong>MAGNEPOD magnetic accessory system</strong> is a real advantage here: snap a dry bag or cooler onto the deck bungee area without any straps that could snag a dog&apos;s paws or PFD. The wide 33-inch deck gives your dog room to turn around, lie down, or adjust position without immediately destabilizing the board.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 glass-card p-5" style={{ background: 'rgba(5,13,26,0.5)' }}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-glacier-teal)' }}>Why Dogs Love It</p>
                    <ul className="space-y-1.5">
                      {['17.5 lbs — easiest to carry with dog', '300 lb capacity — room for rider + large dog', 'MAGNEPOD — no straps to snag paws', 'Rigid AeroULTRA platform at full load'].map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle className="w-3 h-3 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Considerations</p>
                    <ul className="space-y-1.5">
                      {['300 lb cap limits very large breed + heavier rider combos', 'Rear traction only — add a nose pad for your dog'].map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-text-secondary">
                          <HelpCircle className="w-3 h-3 text-text-muted shrink-0 mt-0.5" />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-text-primary">~$849</p>
                <a href="/go/bote-breeze-aero-dog" id="cta-dog-bote" target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label="Check latest price for BOTE Breeze Aero on Amazon">
                  Check Latest Price on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>

              {/* Isle Pioneer Pro */}
              <article id="review-isle-dog" aria-labelledby="review-isle-dog-heading" className="glass-card p-7 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold" style={{ color: 'var(--color-amber-glow)' }}>#2 Pick</span>
                  <span className="badge-amber text-xs font-bold px-2.5 py-1 rounded-full">Best for Big Dogs</span>
                </div>
                <div>
                  <h3 id="review-isle-dog-heading" className="text-xl font-extrabold text-text-primary tracking-tight">
                    Isle Pioneer Pro <span className="text-text-muted font-medium text-base">10&apos;6&quot;</span>
                  </h3>
                  <p className="text-sm font-bold mt-1" style={{ color: 'var(--color-amber-glow)' }}>Best for Large Breeds — ~$999</p>
                </div>
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                  <p>
                    If you have a large or giant breed dog — Labrador, German Shepherd, Bernese, standard Poodle — the Isle Pioneer Pro is your board. Its <strong>335 lb weight capacity</strong> is the highest of any board we recommend, giving a 200-lb rider and an 80-lb dog a combined 255 lb load against a 335-lb limit. That 80 lbs of headroom is exactly where board stability lives.
                  </p>
                  <p>
                    The <strong>triple-layer PVC rail construction</strong> shrugs off what dog claws do to boards during boarding and exit — a real concern with large breeds that dig in as they scramble. Single-layer boards develop rail delamination from repeated claw contact within one season. The Pioneer Pro&apos;s construction handles it.
                  </p>
                  <p>
                    The <strong>ISLE-LINK rail system</strong> runs the length of both rails, letting you attach a dry bag or kayak-style carry bags directly to the side of the board — keeping the main deck clear for your dog to move freely without stepping on gear.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 glass-card p-5" style={{ background: 'rgba(5,13,26,0.5)' }}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-amber-glow)' }}>Why Big Dogs Need This</p>
                    <ul className="space-y-1.5">
                      {['335 lb capacity — highest in class for large breeds', 'Triple-layer PVC resists claw damage', 'ISLE-LINK keeps deck clear for dog', 'Near-hardboard rigidity under full combined load'].map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle className="w-3 h-3 shrink-0 mt-0.5" style={{ color: 'var(--color-amber-glow)' }} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Considerations</p>
                    <ul className="space-y-1.5">
                      {['Heavier than BOTE at 18 lbs', 'ISLE-LINK accessories cost extra', 'Premium price point'].map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-text-secondary">
                          <HelpCircle className="w-3 h-3 text-text-muted shrink-0 mt-0.5" />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-text-primary">~$999</p>
                <a href="/go/isle-pioneer-pro-dog" id="cta-dog-isle" target="_blank" rel="noopener noreferrer nofollow sponsored" className="table-row-cta" aria-label="Check latest price for Isle Pioneer Pro on Amazon">
                  Check Latest Price on Amazon <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>

            </div>
          </div>
        </section>

        {/* LAZY RIVER IMAGE */}
        <section className="article-section" aria-label="Lazy river paddleboarding with dog">
          <div className="article-wide">
            <figure>
              <Image
                src="/images/sup-dog-lazy-river.png"
                alt="Woman paddleboarding with her dog on a beautiful lazy river lined with cypress trees and Spanish moss, similar to Coldwater Creek in Milton Florida"
                width={1200}
                height={675}
                className="w-full rounded-2xl object-cover"
                style={{ maxHeight: '520px' }}
              />
              <figcaption className="text-sm text-center text-text-muted mt-3">
                A lazy river like Coldwater Creek in Milton, FL is the ideal first venue — spring-fed, calm current, emerald water, and zero powerboat traffic.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* TRAINING STEPS */}
        <section id="training" aria-labelledby="training-heading" className="article-section">
          <div className="article-body">
            <h2 id="training-heading" className="article-h2">How to Train Your Dog for the Paddleboard</h2>
            <p>
              The biggest mistake people make is putting their dog on a board in the water before any land-based introduction. Dogs that experience the board as unstable and surprising on the first contact develop a negative association that is hard to undo. The following six-step process introduces the board as something familiar, positive, and rewarding — before any movement or water is involved. Follow it in order.
            </p>
          </div>
          <div className="article-body space-y-5 mt-8">
            {[
              {
                step: '01',
                title: 'Board Introduction on Land',
                body: 'Set the board flat on the ground in your yard or garage. Let your dog sniff it freely without any pressure to interact. Place high-value treats on the board surface. Do nothing else. End the session after 5 minutes regardless of how it goes. Repeat daily until your dog walks onto the board voluntarily to look for treats. This step may take 2–7 days. Do not rush it.',
              },
              {
                step: '02',
                title: 'Practice the "Place" Command on the Board',
                body: 'Once your dog steps onto the board willingly on land, teach a specific command — "board," "place," or "up" — that means go to your spot at the nose of the board and stay there. Reward heavily. This command will become your most-used tool on the water. The dog should be able to hold position on a stationary board on land for at least 2 minutes before progressing.',
              },
              {
                step: '03',
                title: 'Board in Shallow Water (Dog on Shore)',
                body: 'Move the board to shallow, calm water — a beach entry on a lake is ideal. You stand on the board near shore. Let your dog watch from the bank. Keep your energy calm and positive. Call them into the water and let them swim to the board if they want — do not force contact. Place treats on the nose. If they put their paws on the board from the water, reward immediately. Short sessions of 5–8 minutes.',
              },
              {
                step: '04',
                title: 'Both on Board — You Kneeling',
                body: 'Help your dog onto the board while you are kneeling for maximum stability. Your kneeling drops your center of gravity significantly and makes the platform far more stable for a nervous dog. Use your "place" command to direct them to the nose. Paddle gently no more than 20 feet from shore and return. End the session — always end before the dog shows any stress signs. Repeat until they are relaxed and settled within 30 seconds of boarding.',
              },
              {
                step: '05',
                title: 'Extend Distance — Still Kneeling',
                body: 'Once your dog is consistently calm and settled while you kneel, gradually extend distance. You are still kneeling at this stage. Introduce mild currents if you have been on flat water. Watch for body language: a relaxed dog has soft ears, normal breathing, and a loose body. A stressed dog pants heavily, has rigid posture, or repeatedly tries to jump off. If you see stress, return to shore immediately.',
              },
              {
                step: '06',
                title: 'Graduate to Standing',
                body: 'Only attempt standing when your dog holds their position calmly for at least 5 minutes while you kneel during extended paddles. Rise slowly from kneeling over 10–15 seconds. Use a calm, reassuring voice. Most dogs barely react — they are already comfortable with the board motion and simply adjust their footing. Reward with treats at the nose position when you first reach full standing. From here, duration and distance are the only remaining variables to increase gradually.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="glass-card p-6 flex gap-5 items-start">
                <span className="text-3xl font-extrabold shrink-0 w-12 text-center" style={{ color: 'var(--color-glacier-teal)', opacity: 0.4 }}>{step}</span>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                </div>
              </div>
            ))}

            {/* Pro tip callout */}
            <div className="glass-card p-6 mt-2" style={{ borderColor: 'rgba(20,184,166,0.3)', background: 'rgba(20,184,166,0.04)' }}>
              <div className="flex items-start gap-4">
                <PawPrint className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} />
                <div>
                  <p className="text-sm font-extrabold text-text-primary mb-1">Pro Tip: Always End on a Positive Note</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Keep your first six sessions under 15 minutes on the water. Dogs do not fatigue gradually — they go from fine to overwhelmed quickly, especially in heat. The moment you see your dog relax and settle into their spot, that is the perfect moment to turn around, return to shore, and call the session a success. A dog that ends a session happy comes back eager. A dog that ends stressed may resist the board next time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE TO GO */}
        <section id="best-spots" aria-labelledby="spots-heading" className="article-section">
          <div className="article-body">
            <h2 id="spots-heading" className="article-h2">The Best Water for Paddleboarding With Your Dog</h2>
            <p>
              Where you paddle matters as much as how you paddle. The right venue for your first few sessions dramatically reduces stress for both you and your dog. Here is how to choose progressively, starting with the most controlled environment and building toward more dynamic water.
            </p>
          </div>
          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.25)' }}>
                  <span className="text-lg">🏔️</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">Calm Lakes — Start Here</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A protected lake with a gradual sandy or grassy entry is the ideal first environment. No current means the board stays predictably still when you stop paddling. Warm, clear water removes the anxiety of the unknown. Look for a launch point away from motorboat traffic — wakes are the enemy of a dog&apos;s confidence on their first few sessions. Local reservoirs, state park lakes, and private ponds are perfect. Start at the quietest end of the lake.
                  </p>
                </div>
              </div>
              <div className="glass-card p-6 flex flex-col gap-4" style={{ borderColor: 'rgba(20,184,166,0.2)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.25)' }}>
                  <span className="text-lg">🌊</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">Lazy Rivers — The Sweet Spot</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Once your dog is comfortable on flat water, a gentle spring-fed river is the ideal next step — and the most enjoyable venue for both of you. The mild current adds interest, the scenery changes continuously, and spring water stays cool even in summer heat. <strong>Coldwater Creek in Milton, FL</strong> is widely regarded as one of the best in the entire Southeast: spring-fed at a constant 68°F, crystal-clear emerald water, cypress and oak canopy overhead, zero powerboat access, and a calm current that lets you drift peacefully. Dogs that run warm in summer love the cool spring water. The 6.5-mile paddle from Bryant Bridge to the end is a full-day adventure.
                  </p>
                </div>
              </div>
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.25)' }}>
                  <span className="text-lg">🌅</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-text-primary mb-2">Coastal & Bay — Advanced Only</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Salt water, tidal current, and wind introduce variables that require both you and your dog to already be comfortable on the board. Paddle protected bays, inlets, and coves rather than open ocean. Go out at dawn before wind picks up. Be aware of tides — an outgoing tide at a coastal river mouth can create stronger current than expected. In the Southeast, always scout for alligator activity before entering any brackish or freshwater coastal environment. Rinse your dog with fresh water after every salt water session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section id="safety" aria-labelledby="safety-heading" className="article-section">
          <div className="article-body">
            <h2 id="safety-heading" className="article-h2">Safety on the Water With Your Dog</h2>
            <p>
              Most SUP-with-dog accidents are preventable with awareness and preparation. These are the six risks that most frequently cause problems — and how to manage each one.
            </p>
          </div>
          <div className="article-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {[
                {
                  title: 'Overheating',
                  body: 'Dogs cannot regulate body heat as efficiently as humans. Dark-coated breeds absorb radiant heat from both the sun and the warm board surface. Know the early signs: excessive panting, drooling, glazed eyes, and reluctance to move. Prevention: paddle in early morning or late afternoon, bring 1L of fresh water per hour on the water, wet your dog\'s coat regularly, and cut sessions short on days over 85°F.',
                },
                {
                  title: 'Falling In',
                  body: 'It will happen — plan for it rather than avoiding the topic. A dog in a properly fitted PFD is safe. The issue is getting them back on the board efficiently. Stabilize the board, approach from the rear quarter, grip the PFD handle firmly with both hands, and guide the front paws onto the board first, then lift the rear. Practice this sequence on land before you ever need it on the water.',
                },
                {
                  title: 'Alligator Awareness (SE United States)',
                  body: 'In Florida and the Southeast, alligators inhabit virtually every freshwater and brackish body of water. Coldwater Creek and most clear spring-fed rivers have very low gator activity due to cold water temperatures — one of their many advantages. In warmer, darker water environments, scan banks before entering, avoid dawn and dusk when gators are most active, and never let your dog swim near vegetated banks where gators bask.',
                },
                {
                  title: 'Sun Exposure',
                  body: 'Dog ears, noses, and the skin under thin-coated areas can sunburn on extended paddles. Dog-safe sunscreen (zinc-free — zinc is toxic to dogs) can be applied to the nose and ear tips for long sessions. Provide shade breaks when paddling near shore. Light-colored, thin-coated breeds (white Labs, Vizslas, Dalmatians) are most at risk.',
                },
                {
                  title: 'Dehydration',
                  body: 'Dogs dehydrate faster on the water than on land because the combination of sun, wind, and physical activity is more demanding than it appears. Bring more water than you think you need — minimum 1L per hour in warm conditions. A collapsible silicone bowl takes up no space in a dry bag and is worth its weight every single session. Offer water every 20–30 minutes.',
                },
                {
                  title: 'Leash Entanglement',
                  body: 'Your board leash attaches to you, not your dog. A coil leash minimizes drag in the water and reduces the chance of your dog stepping on it. Never tie your dog to any part of the board or your body — if the board flips or you are separated, a tethered dog cannot swim freely and is at extreme risk. The dog\'s freedom to swim independently is what keeps them safe.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-amber-glow)' }} aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">{title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GETTING DOG BACK ON BOARD */}
        <section id="dog-recovery" aria-labelledby="recovery-heading" className="article-section">
          <div className="article-body">
            <h2 id="recovery-heading" className="article-h2">How to Get Your Dog Back on the Board</h2>
            <p>
              Every dog goes overboard eventually. This is not an emergency — it is a planned-for event that you handle calmly and efficiently. Panic is contagious: if you react with alarm, your dog panics. A calm, practiced recovery keeps it a non-event for both of you.
            </p>

            <div className="glass-card p-6 my-8" style={{ borderColor: 'rgba(251,191,36,0.3)', background: 'rgba(251,191,36,0.04)' }}>
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-amber-glow)' }} />
                <div>
                  <p className="text-sm font-extrabold text-text-primary mb-1">Practice This on Land Before You Need It on Water</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Run through the recovery sequence — approach angle, grip location, lift motion — on the board on the ground before your first water session. Your dog learns what the motion means and does not resist it. You learn the grip and lift without the stress of floating water. This 5-minute practice session prevents the fumbling that leads to prolonged submersion events.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { n: '1', t: 'Stay calm and keep paddling toward your dog', b: 'Your dog is floating safely in their PFD. There is no emergency. Speak in a calm, cheerful voice as you paddle toward them — your tone tells them whether this is a crisis or just a swim.' },
                { n: '2', t: 'Approach from the rear quarter of the board', b: 'Come alongside your dog so the rear of the board is nearest to them. This is the most stable entry point. Kneeling as you approach significantly lowers your center of gravity and reduces tip risk during the lift.' },
                { n: '3', t: 'Grip the PFD handle firmly with both hands', b: 'The top handle on a quality dog PFD is designed for exactly this load. Do not grab the straps, the D-ring, or the dog itself. Grip the handle with both hands if possible.' },
                { n: '4', t: 'Guide front paws onto the board first', b: 'Lift the front of the dog while guiding their front paws to the board edge. Let them feel solid deck under their paws — most dogs push themselves up the rest of the way instinctively once they have purchase.' },
                { n: '5', t: 'Praise immediately and enthusiastically', b: 'The moment all four paws are on the board, praise lavishly. Treats if you have them accessible. You are conditioning the board re-entry as a positive experience, not a stressful one. A dog that is praised for coming back aboard returns willingly next time.' },
              ].map(({ n, t, b }) => (
                <div key={n} className="glass-card p-5 flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-extrabold" style={{ background: 'rgba(20,184,166,0.15)', color: 'var(--color-glacier-teal)' }}>{n}</span>
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-1">{t}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-heading" className="article-h2">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-8">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="glass-card p-6 flex items-start gap-5">
                  <HelpCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-glacier-teal)' }} aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-extrabold text-text-primary mb-2">{q}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section aria-labelledby="related-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-heading" className="article-h2">Continue Your Research</h2>
            <p>More guides to help you get the most out of your time on the water.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              {[
                { href: '/best-paddle-boards-for-beginners', label: 'Best Boards for Beginners', desc: 'The three boards we recommend for first-time buyers in 2026.' },
                { href: '/best-paddle-board-accessories', label: 'Best SUP Accessories', desc: 'Leashes, dry bags, paddles, and everything else worth adding.' },
                { href: '/best-paddle-boards-for-fishing', label: 'Best Fishing SUP Boards', desc: 'Stability, gear mounts, and capacity ratings for fishing builds.' },
              ].map(({ href, label, desc }) => (
                <Link key={href} href={href} className="glass-card p-6 flex flex-col gap-2 hover:border-glacier-teal transition-colors group">
                  <p className="text-sm font-extrabold text-text-primary group-hover:text-glacier-teal transition-colors">{label}</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
                  <span className="text-xs font-bold flex items-center gap-1 mt-auto" style={{ color: 'var(--color-glacier-teal)' }}>
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLOSURE */}
        <section className="article-section" aria-label="Affiliate disclosure">
          <div className="article-body">
            <p className="text-xs text-text-muted leading-relaxed p-5 glass-card" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <strong className="text-text-secondary">Affiliate Disclosure:</strong> PaddleBoardShop is reader-supported. Some links on this page are affiliate links — if you make a purchase through them, we may earn a small commission at no additional cost to you. We only recommend products we have researched and believe provide genuine value. Our editorial opinions are independent of our affiliate relationships.{' '}
              <Link href="/disclosure" className="underline hover:opacity-80">Read our full disclosure policy.</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

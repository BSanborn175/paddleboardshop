import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

/* ── Steps ───────────────────────────────────────────────────── */
const STEPS = [
  {
    number: 1,
    title: 'Choose the Right Board',
    body: 'For beginners, width is everything. Choose a board at least 32 inches wide — ideally 33 inches. Inflatable SUPs between 10\'6" and 11\' long provide the ideal balance of stability and maneuverability. Avoid narrow touring or racing designs until your balance is well-developed.',
  },
  {
    number: 2,
    title: 'Inflate and Gear Up',
    body: 'Inflate your board to 12–15 PSI (check your manufacturer spec). Attach your ankle leash before entering the water — the leash keeps the board with you if you fall. Wear a PFD (life jacket) in open water or anywhere a regulatory body requires it. Sun protection and water shoes are strongly recommended.',
  },
  {
    number: 3,
    title: 'Start on Your Knees',
    body: 'Before standing, spend 5–10 minutes paddling from a kneeling position. Kneel just behind the center carry handle. This gets you accustomed to the board\'s movement and lets you feel how it responds to paddle strokes before adding the balance challenge of standing.',
  },
  {
    number: 4,
    title: 'Stand Up Correctly',
    body: 'When ready to stand, place your hands on the board on either side of the carry handle. Push up one foot at a time — place your feet shoulder-width apart, directly over the center handle. Keep your knees slightly bent, your gaze at the horizon (not at your feet), and your weight centered. Rise slowly and deliberately.',
  },
  {
    number: 5,
    title: 'Proper Paddle Grip',
    body: 'Hold the top of the paddle handle with one hand (this is the "T-grip"). Place your other hand on the shaft about shoulder-width below. The blade should angle forward — away from you — when submerged. Many beginners hold the paddle backwards; a blade angled toward you loses 30% of its efficiency.',
  },
  {
    number: 6,
    title: 'Forward Stroke Technique',
    body: 'Reach the blade forward and fully submerge it near your toes. Pull the blade back through the water toward your hip — then exit before it passes your hip. Keep your arms relatively straight and rotate your torso, not just your arms. Switch sides every 4–5 strokes to track straight.',
  },
  {
    number: 7,
    title: 'How to Turn',
    body: 'To turn right, paddle on the left side with a sweeping stroke that arcs wide away from the board. To turn left, sweep on the right. Back-paddling on one side also turns the board. For sharper turns, step slightly back on the board to lift the nose.',
  },
  {
    number: 8,
    title: 'How to Fall Safely',
    body: 'You will fall — embrace it. When falling, aim to fall to the side, away from the board. Never fall onto the board itself — the hard deck surface or fin can cause injury. Fall flat into the water (not pencil-diving) and protect your head with your arms if you\'re unsure what\'s below.',
  },
  {
    number: 9,
    title: 'How to Get Back On',
    body: 'After falling, the board will be nearby (leash keeps it close). Approach from the side at the middle of the board. Grab the carry handle with both hands, kick your feet to generate momentum, then pull yourself up while swinging one leg onto the board. Mount from the center — climbing on from the tail tips the nose up and you slide off.',
  },
  {
    number: 10,
    title: 'Building Confidence',
    body: 'Stick to flatwater for your first 3–5 sessions. A calm lake or protected bay eliminates wind and current variables while you develop balance. Gradually introduce mild conditions — light wind, gentle current — as your balance and technique solidify. Progress is faster than most people expect.',
  },
] as const;

/* ── Common mistakes ─────────────────────────────────────────── */
const MISTAKES = [
  {
    title: 'Looking down at your feet instead of at the horizon',
    body: 'The single most common beginner error. Looking down shifts your weight and kills your balance. Fix your gaze at the horizon — exactly as you would balance on a balance board. Your feet will do fine without supervision.',
  },
  {
    title: 'Standing too far back or too far forward',
    body: 'Always center yourself over the carry handle. Standing too far back sinks the tail and lifts the nose; too far forward does the reverse. Both positions dramatically reduce stability. The handle marks the board\'s balance point.',
  },
  {
    title: 'Holding the paddle backwards (blade angle reversed)',
    body: 'The blade should angle forward (away from you) when submerged for maximum purchase on the water. A backwards blade loses 30% efficiency and creates awkward stroke mechanics. Check before you launch: the blade face should be angling forward on the power stroke.',
  },
  {
    title: 'Starting in wind or current',
    body: 'Wind and current on a SUP are significantly more challenging than they look from shore. Always start on protected flatwater — a calm lake, sheltered cove, or slow river section. Learn the basics first; add conditions after 3–4 sessions.',
  },
] as const;

/* ── FAQ ─────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'How long does it take to learn to paddle board?',
    a: 'Most beginners can stand and maintain balance within 30–60 minutes on calm, flat water with a stable board (32"+ wide). Paddling with proper technique takes 2–4 sessions to feel natural. Balance improves exponentially — the biggest jumps happen in sessions 1 and 2.',
  },
  {
    q: 'What do you wear paddle boarding?',
    a: 'Quick-dry shorts or leggings, water shoes or barefoot on the deck pad, a rash guard or UV-protective top for sun exposure. Always bring a leash attached to your ankle and a PFD for open water. In cold water, a wetsuit is appropriate — water temperature matters more than air temperature.',
  },
  {
    q: 'Is paddle boarding hard to learn?',
    a: 'With the right board (wide, stable, inflatable), most people can stand within their first session. The challenge is balance — it comes quickly with a calm water environment and a 32"+ board. Narrower boards are significantly harder for beginners. Board choice matters as much as natural balance ability.',
  },
  {
    q: 'What size paddle board is best for beginners?',
    a: '10\'6" to 11\' long, 32–33" wide, 6" thick. Wide boards are dramatically more stable for new paddlers. The Isle Pioneer Pro, BOTE Breeze Aero, and iROCKER Cruiser are all excellent beginner choices that provide the stability margin new paddlers need.',
  },
  {
    q: 'Do you need lessons to paddle board?',
    a: 'No — most people learn without instruction on calm water. Watch one technique video, start on your knees, and give yourself 20 minutes before attempting to stand. Formal lessons help with paddling efficiency but aren\'t required to get started. The learning curve on a wide board is surprisingly gentle.',
  },
] as const;

/* ── SEO metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'How to Paddle Board for Beginners (2026 Complete Guide) | PaddleBoardShop',
  description:
    'Learn how to paddle board step-by-step. Our 2026 beginner guide covers stance, paddle technique, balance tips, safety, and how to get back on after falling.',
  keywords: [
    'how to paddle board',
    'how to SUP for beginners',
    'paddle boarding for beginners',
    'how to stand up paddle board',
    'paddle board technique 2026',
    'how to paddle board step by step',
    'SUP beginner guide',
  ],
  openGraph: {
    title: 'How to Paddle Board for Beginners (2026 Complete Guide) | PaddleBoardShop',
    description:
      'Step-by-step guide: stance, paddle technique, balance tips, safety, and how to get back on after falling.',
    type: 'article',
    siteName: 'PaddleBoardShop',
    images: [{ url: '/images/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Paddle Board for Beginners (2026 Complete Guide)',
    description: 'Step-by-step beginner guide: stance, paddle technique, balance, safety, and getting back on after falling.',
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: 'https://www.paddleboardshop.com/how-to-paddle-board',
  },
};

/* ── Page ────────────────────────────────────────────────────── */
export default function HowToPaddleBoardPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Paddle Board for Beginners (2026 Complete Guide)',
    description:
      'A complete step-by-step guide to learning to paddle board — covering stance, technique, safety, falling, and getting back on.',
    author: { '@type': 'Organization', name: 'PaddleBoardShop' },
    publisher: { '@type': 'Organization', name: 'PaddleBoardShop' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.paddleboardshop.com/how-to-paddle-board',
    },
    image: 'https://www.paddleboardshop.com/images/og-default.png',
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Paddle Board for Beginners',
    description: 'Learn to paddle board step-by-step in 10 clear stages, from choosing your board to building confidence on the water.',
    step: STEPS.map((s) => ({
      '@type': 'HowToStep',
      position: s.number,
      name: s.title,
      text: s.body,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
        { name: 'Guides', item: 'https://www.paddleboardshop.com/guides' },
        { name: 'How to Paddle Board' },
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
            style={{ background: 'rgba(0,201,177,0.05)' }}
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
                <li className="text-text-secondary" aria-current="page">How to Paddle Board</li>
              </ol>
            </nav>

            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                background: 'rgba(0,201,177,0.1)',
                border: '1px solid rgba(0,201,177,0.25)',
                color: 'var(--color-glacier-teal)',
              }}
            >
              Beginner Guide · Updated May 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              How to{' '}
              <span className="gradient-text">Paddle Board</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              A step-by-step guide for complete beginners — covering stance, paddle
              technique, balance, safety, and exactly what to do when you fall in.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-text-muted">
              {['10 clear steps', 'Safety guidance included', 'Common mistakes section', 'Updated May 2026'].map((m) => (
                <span key={m} className="font-medium">&#x2713; {m}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════
            QUICK SUMMARY CALLOUT
        ════════════════════════════════ */}
        <section className="article-section" aria-label="Quick summary">
          <div className="article-wide">
            <div className="glass-card p-7" style={{ borderColor: 'rgba(0,201,177,0.2)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-glacier-teal)' }}>
                Quick Summary
              </p>
              <p className="text-lg font-extrabold text-text-primary leading-snug">
                Most beginners can stand and paddle within 30 minutes on calm water with a board that&apos;s 32&quot;+ wide.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                The 10 steps below take you from unboxing your board to paddling confidently. Start with steps 1–4 before
                anything else — correct setup and board choice determine 80% of your first-session success.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            STEP-BY-STEP
        ════════════════════════════════ */}
        <section id="steps" aria-labelledby="steps-heading" className="article-section">
          <div className="article-body">
            <h2 id="steps-heading" className="article-h2">
              10 Steps to Paddle Boarding
            </h2>
            <p>
              Follow these steps in order for your first session. Each builds on the
              previous — skipping ahead to standing without the kneeling phase is the
              most common reason beginners struggle unnecessarily.
            </p>
          </div>

          <div className="article-wide">
            <div className="space-y-5 mt-8">
              {STEPS.map(({ number, title, body }) => (
                <div key={number} className="glass-card flex items-start gap-6 p-6" style={{ borderColor: 'rgba(0,201,177,0.12)' }}>
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold"
                    style={{ background: 'rgba(0,201,177,0.12)', color: 'var(--color-glacier-teal)', border: '1px solid rgba(0,201,177,0.25)' }}
                    aria-hidden="true"
                  >
                    {number}
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
            COMMON MISTAKES
        ════════════════════════════════ */}
        <section id="common-mistakes" aria-labelledby="mistakes-how-to-heading" className="article-section">
          <div className="article-body">
            <h2 id="mistakes-how-to-heading" className="article-h2">Common Beginner Mistakes</h2>
            <p>
              These four errors account for the majority of beginner frustration on the
              water. Knowing them in advance cuts your learning curve significantly.
            </p>
            <div className="space-y-5 mt-8">
              {MISTAKES.map(({ title, body }) => (
                <div key={title} className="glass-card flex items-start gap-5 p-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
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

        {/* ════════════════════════════════
            FAQ
        ════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-how-to-heading" className="article-section">
          <div className="article-body">
            <h2 id="faq-how-to-heading" className="article-h2">Frequently Asked Questions</h2>
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
        <section id="related-guides-how-to" aria-labelledby="related-guides-how-to-heading" className="article-section">
          <div className="article-body">
            <h2 id="related-guides-how-to-heading" className="article-h2">Related Guides</h2>
            <p>Ready to choose your first board or compare your options? These guides cover the next steps.</p>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-paddle-boards-for-beginners', id: 'link-beginners-from-how-to', title: 'Best Paddle Boards for Beginners (2026)', desc: 'Expert picks from BOTE, Isle, and FunWater with stability ratings and buying criteria.' },
                { href: '/what-size-paddle-board-do-i-need', id: 'link-sizing-from-how-to', title: 'What Size Paddle Board Do I Need? (2026 Sizing Guide)', desc: 'Length, width, thickness, and weight capacity — a complete sizing reference.' },
                { href: '/best-inflatable-paddle-boards', id: 'link-inflatable-from-how-to', title: 'Best Inflatable Paddle Boards (2026)', desc: 'Top inflatable picks across all price ranges.' },
                { href: '/paddle-board-vs-kayak', id: 'link-pvk-from-how-to', title: 'Paddle Board vs Kayak — Which Is Right for You?', desc: 'Full 2026 comparison of SUP vs kayak across workout, stability, storage, and cost.' },
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

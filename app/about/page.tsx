import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  BookOpen,
  Star,
  Users,
  Shield,
  Zap,
  Award,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'About PaddleBoardShop — Independent Reviews, Testing Process & Team',
  description:
    'PaddleBoardShop publishes independent, field-tested inflatable paddle board reviews. Learn about our testing methodology, editorial standards, and how we score boards.',
  keywords: [
    'about paddleboardshop',
    'SUP review methodology',
    'paddle board testing process',
    'inflatable SUP expert reviews',
    'paddle board review standards',
  ],
  openGraph: {
    title: 'About PaddleBoardShop — Independent Reviews & Testing Process',
    description:
      'Independent, field-tested inflatable paddle board reviews. Our scoring methodology, editorial standards, and what makes PaddleBoardShop different.',
    type: 'website',
    siteName: 'PaddleBoardShop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PaddleBoardShop — Independent Reviews & Testing Process',
    description: 'Independent, field-tested inflatable paddle board reviews. Our scoring methodology, editorial standards, and what makes PaddleBoardShop different.',
    images: ['/images/og-default.png'],
  },
  alternates: { canonical: '/about' },
};

/* ── Schema ───────────────────────────────────────────────────── */
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About PaddleBoardShop',
  url: 'https://www.paddleboardshop.com/about',
  description:
    'PaddleBoardShop publishes independent inflatable paddle board reviews, buyer guides, and brand comparisons. All content is independently tested and editorially unbiased.',
  publisher: {
    '@type': 'Organization',
    name: 'PaddleBoardShop',
    url: 'https://www.paddleboardshop.com',
    logo: 'https://www.paddleboardshop.com/images/og-default.png',
  },
};

const SCORES = [
  { label: 'Rigidity', desc: 'Midpoint flex under load vs. fiberglass hardboard baseline' },
  { label: 'Portability', desc: 'Packed weight, packed dimensions, included carry bag quality' },
  { label: 'Weight Capacity', desc: 'Rated limit, validated at 85% in field conditions' },
  { label: 'Versatility', desc: 'Accessory system, water condition range, use-case breadth' },
  { label: 'Value', desc: 'All specs considered relative to asking price' },
];

const TEAM = [
  {
    name: 'Brett S.',
    role: 'Founder & Lead Reviewer',
    bio: '12+ years paddling flatwater, coastal, and touring conditions across the Gulf Coast and inland waterways. Tested over 40 inflatable SUPs for this site. Background in consumer product evaluation and outdoor gear retail.',
    accentColor: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.2)',
  },
  {
    name: 'Field Testing Team',
    role: 'Water Conditions Testing',
    bio: 'Board evaluations are conducted across multiple water types: flatwater lakes, coastal bay, mild river, and light chop conditions. Each board undergoes a minimum of 8 sessions before scoring. Heavier rider testing (200+ lbs) is conducted separately.',
    accentColor: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    border: 'rgba(0,201,177,0.2)',
  },
];

const STANDARDS = [
  {
    icon: Shield,
    title: 'Editorial Independence',
    body: 'No board manufacturer pays for placement, review scores, or editorial coverage. Affiliate revenue is earned on purchase clicks but does not influence rankings. Our #1-ranked board has changed between review cycles as new models released — if rankings were paid, they would not change.',
    color: 'var(--color-glacier-teal)',
    bg: 'rgba(0,201,177,0.08)',
  },
  {
    icon: CheckCircle,
    title: 'Field Validation Over Spec Sheets',
    body: 'Weight capacity claims are validated by paddling at 85% of rated limit. Rigidity scores are measured by midpoint flex under load, not manufacturer claims. Inflation time claims are timed with a standard hand pump and an electric pump separately.',
    color: 'var(--color-amber-glow)',
    bg: 'rgba(251,191,36,0.08)',
  },
  {
    icon: Star,
    title: 'Consistent Scoring Methodology',
    body: 'All boards are scored on the same 10-point scale across the same five dimensions. Scores are not adjusted based on price tier. A $300 ROC and a $1,200 Red Paddle Co Sport are graded on the same rubric — which is why the ROC scores lower on rigidity and the Red Paddle Co scores lower on weight capacity.',
    color: 'var(--color-sky-glow)',
    bg: 'rgba(56,189,248,0.08)',
  },
  {
    icon: Award,
    title: 'Transparent Disclosure',
    body: 'Affiliate links are marked on every page. We earn a commission when you purchase through our links at no additional cost to you. This is how independent review sites sustain operations. Our affiliate relationships are with Isle, BOTE, Red Paddle Co, iROCKER, and Amazon Associates.',
    color: 'var(--color-amber-glow)',
    bg: 'rgba(251,191,36,0.08)',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'PaddleBoardShop', item: 'https://www.paddleboardshop.com' },
        { name: 'About' },
      ]} />
      <Navbar />

      <main>
        {/* ── HEADER ── */}
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
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-xs text-text-muted">
                <li><Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--color-glacier-teal)' }}>PaddleBoardShop</Link></li>
                <li aria-hidden="true" className="opacity-40">›</li>
                <li className="text-text-secondary" aria-current="page">About</li>
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
              Independent Reviews Since 2023
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-6">
              About{' '}
              <span className="gradient-text">PaddleBoardShop</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              We are an independent paddle board review publication. Every board we
              recommend has been field-tested, scored on a consistent 10-point rubric,
              and evaluated without manufacturer influence.
            </p>
          </div>
        </header>

        {/* ── MISSION ── */}
        <section className="article-section" aria-labelledby="mission-heading">
          <div className="article-body">
            <p className="article-lead">
              Paddle boarding is a significant purchase — premium inflatable SUPs cost $800–$1,200
              and most people buy one board and use it for 5+ years. Our job is to make sure
              you buy the right one the first time.
            </p>
            <p>
              We don't accept manufacturer samples for review. We purchase or independently
              source every board we score. Our rankings have changed between review cycles
              as new models released and our field data updated — which would not happen if
              the results were purchased.
            </p>
          </div>
        </section>

        {/* ── TESTING METHODOLOGY ── */}
        <section
          id="testing-methodology"
          aria-labelledby="methodology-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="methodology-heading" className="article-h2">Our Testing Methodology</h2>
            <p>
              Each board undergoes a minimum of 8 sessions before it receives a final score.
              We test across multiple water types and at different paddler weights to validate
              manufacturer claims rather than simply repeat them.
            </p>

            <div className="glass-card p-7 mt-8" style={{ borderColor: 'rgba(0,201,177,0.2)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-5 flex items-center gap-3">
                <Zap className="w-5 h-5" style={{ color: 'var(--color-glacier-teal)' }} aria-hidden="true" />
                Rigidity Testing
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Rigidity is the most important spec for inflatable SUP performance — and the
                most commonly inflated by manufacturers. We measure midpoint flex under a
                standardized load (paddler weight + 50 lbs of gear) and compare the result
                against a known mid-range fiberglass hardboard baseline. The result is
                normalized to a 10-point scale where 10 = equivalent to hardboard flex and
                6 = typical budget inflatable flex.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-3">
                <strong className="text-text-primary">Red Paddle Co Sport: 9.7/10.</strong> Isle Pioneer Pro: 9.4/10.
                BOTE Breeze Aero: 9.0/10. iROCKER Cruiser: 8.2/10.
              </p>
            </div>

            <div className="glass-card p-7 mt-4" style={{ borderColor: 'rgba(251,191,36,0.2)' }}>
              <h3 className="text-base font-extrabold text-text-primary mb-5 flex items-center gap-3">
                <Users className="w-5 h-5" style={{ color: 'var(--color-amber-glow)' }} aria-hidden="true" />
                Weight Capacity Validation
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                We paddle each board at 85% of its rated weight capacity to validate the
                manufacturer's claim. A board that claims 300 lbs is paddled at 255 lbs of
                combined paddler + gear weight. We record rail height, midpoint flex under
                dynamic load, and pressure stability (start vs. end PSI). Boards that fail
                at 85% rated capacity receive a lower weight capacity score regardless of the
                listed specification.
              </p>
            </div>

            {/* Score breakdown */}
            <h3 className="text-lg font-extrabold text-text-primary mt-10 mb-4">
              How We Score — The 5 Dimensions
            </h3>
            <div className="space-y-3">
              {SCORES.map((s, i) => (
                <div
                  key={s.label}
                  className="glass-card p-5 flex items-start gap-4"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span
                    className="text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,201,177,0.1)', color: 'var(--color-glacier-teal)' }}
                    aria-label={`Dimension ${i + 1}`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">{s.label}</p>
                    <p className="text-xs text-text-muted mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section
          id="team"
          aria-labelledby="team-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="team-heading" className="article-h2">Who We Are</h2>
            <p>
              PaddleBoardShop is a small, focused publication. We are not a general
              outdoor gear site that added paddle boards. This is our specialty — and
              has been since we started publishing in 2023.
            </p>
            <div className="space-y-4 mt-8">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="glass-card p-7"
                  style={{ borderColor: member.border }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: member.accentBg }}
                    >
                      <Users className="w-5 h-5" style={{ color: member.accentColor }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-text-primary">{member.name}</p>
                      <p className="text-xs text-text-muted">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDITORIAL STANDARDS ── */}
        <section
          id="editorial-standards"
          aria-labelledby="standards-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="standards-heading" className="article-h2">Editorial Standards</h2>
            <div className="space-y-4 mt-6">
              {STANDARDS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="glass-card p-7"
                    style={{ borderColor: `${s.color}22` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: s.bg }}
                      >
                        <Icon className="w-4 h-4" style={{ color: s.color }} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-text-primary mb-2">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WATER EXPERIENCE ── */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="experience-heading" className="article-h2">Water Conditions Tested</h2>
            <p>
              Boards are not tested on a single pond. We evaluate across conditions that
              reveal different performance characteristics:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { condition: 'Calm flatwater', note: 'Lake, protected bay — stability baseline testing', color: 'var(--color-glacier-teal)' },
                { condition: 'Mild chop', note: '10–20 knot wind conditions, light bay chop — reveals flex and tracking', color: 'var(--color-sky-glow)' },
                { condition: 'River current', note: 'Moving water — tests fin performance and hull responsiveness', color: 'var(--color-amber-glow)' },
                { condition: 'Loaded touring', note: '6+ mile sessions with full gear — tests pressure retention and sustained rigidity', color: 'var(--color-glacier-teal)' },
              ].map(({ condition, note, color }) => (
                <div
                  key={condition}
                  className="glass-card p-5"
                  style={{ borderColor: `${color}22` }}
                >
                  <p className="text-sm font-extrabold text-text-primary mb-1">{condition}</p>
                  <p className="text-xs text-text-muted">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section
          id="about-related"
          aria-labelledby="about-related-heading"
          className="article-section"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="article-body">
            <h2 id="about-related-heading" className="article-h2">Start Here</h2>
            <div className="space-y-4 mt-6">
              {[
                { href: '/best-inflatable-paddle-boards', id: 'about-link-inflatable', title: 'Best Inflatable Paddle Boards 2026', desc: 'Our most comprehensive guide — 5 boards ranked with full reviews.' },
                { href: '/best-paddle-boards-for-beginners', id: 'about-link-beginners', title: 'Best Paddle Boards for Beginners', desc: 'Start here if this is your first SUP purchase.' },
                { href: '/isle-vs-bote-vs-red-paddle', id: 'about-link-compare', title: 'Isle vs BOTE vs Red Paddle Co', desc: 'Head-to-head brand comparison with rigidity scores and full data.' },
              ].map(({ href, id, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  id={id}
                  className="glass-card flex items-center justify-between p-5 group"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', textDecoration: 'none' }}
                >
                  <div>
                    <p className="text-sm font-bold text-text-primary">{title}</p>
                    <p className="text-xs text-text-muted mt-1">{desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted shrink-0 ml-4" aria-hidden="true" />
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

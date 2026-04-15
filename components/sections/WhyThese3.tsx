import {
  Waves,
  Zap,
  Timer,
  Dumbbell,
  ListFilter,
  ShieldCheck,
} from 'lucide-react';

import SectionLayout from '@/components/ui/SectionLayout';

/* ── Copy ────────────────────────────────────────────────────── */
const REASONS = [
  {
    icon: Waves,
    headline: 'Tested on Real Water, Not a Spec Sheet',
    body: 'Every board was paddled across flatwater sprints, multi-mile touring routes, and choppy open-water conditions before a single score was assigned.',
  },
  {
    icon: Zap,
    headline: 'Rigidity Benchmarked Against Carbon Hardboards',
    body: "We pressure-test each hull at rated PSI and measure midpoint flex against rigid epoxy boards. All three cleared what we call the hardboard threshold.",
  },
  {
    icon: Timer,
    headline: 'Portability Timed With a Stopwatch',
    body: "Inflation and deflation cycles were timed. Pack size was measured against airline carry-on limits. If it failed the boot-of-a-car test, it was eliminated.",
  },
  {
    icon: Dumbbell,
    headline: 'Weight Capacity Validated at 85 % Max Load',
    body: "We paddled each board loaded to 85 % of the manufacturer's claimed maximum. All three held form — no rail dip, no measurable pressure loss over 60 minutes.",
  },
  {
    icon: ListFilter,
    headline: 'Shortlisted From 40+ 2026 Model-Year Launches',
    body: 'We evaluated more than 40 inflatable paddle boards released between October 2025 and April 2026. Three passed every test. Those are the only boards in this guide.',
  },
  {
    icon: ShieldCheck,
    headline: 'No Paid Placements. Ever.',
    body: 'Affiliate commissions help fund our real-world testing. They never influence a score, ranking, or recommendation. Every position in this guide was earned on merit.',
  },
] as const;

/* ── Stat bar ─────────────────────────────────────────────── */
const STATS = [
  { value: '40+', label: 'Boards Evaluated' },
  { value: '3',   label: 'Made the Final List' },
  { value: '100 %', label: 'Independent Scoring' },
];

/* ── Component ────────────────────────────────────────────── */
export default function WhyThese3() {
  return (
    <SectionLayout
      id="why-these-3"
      ariaLabelledBy="why-heading"
      eyebrow="Our Testing Standard"
      heading={<>Why These Boards Made Our <span className="gradient-text">2026 List</span></>}
      subtitle="We don't rank boards by brand prestige or marketing budgets. Here's precisely how three boards out of 40+ earned a place in this guide."
      headingId="why-heading"
    >

        {/* ── Reason tiles — 2-column grid ──────────────────── */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10" role="list">
          {REASONS.map(({ icon: Icon, headline, body }) => (
            <li
              key={headline}
              className="glass-card flex items-start gap-5 p-8"
            >
              {/* Icon */}
              <div
                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 201, 177, 0.10)',
                  border: '1px solid rgba(0, 201, 177, 0.22)',
                }}
                aria-hidden="true"
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: 'var(--color-glacier-teal)' }}
                  strokeWidth={2}
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-text-primary leading-snug mb-2">
                  {headline}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Stat bar ───────────────────────────────────────── */}
        <div
          className="grid grid-cols-3 gap-6 mt-20 glass-card px-8 py-8"

          role="list"
          aria-label="Testing statistics"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center" role="listitem">
              <p
                className="text-3xl md:text-4xl font-extrabold mb-1"
                style={{ color: 'var(--color-glacier-teal)' }}
              >
                {value}
              </p>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>

    </SectionLayout>
  );
}

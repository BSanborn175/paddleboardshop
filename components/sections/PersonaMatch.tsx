import { ArrowRight } from 'lucide-react';
import { boards } from '@/lib/boards';
import SectionLayout from '@/components/ui/SectionLayout';

/* ── Persona definitions ──────────────────────────────────────── */
/*
 * Pull boards by ID from the data source so affiliate URLs and
 * prices stay in one place (boards.ts) — never duplicated here.
 */
const getBoard = (id: string) => boards.find((b) => b.id === id)!;

const PERSONAS = [
  {
    emoji: '🌊',
    label: 'Beginner / Casual Rider',
    hook: 'Just getting started?',
    description:
      "You want stability, a forgiving shape, and something you can carry to the water without a workout. Performance numbers matter less than getting on the water.",
    board: getBoard('bote-breeze-aero'),
    accent: 'var(--color-sky-glow)',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.25)',
    ctaText: 'Start with the BOTE Breeze Aero',
  },
  {
    emoji: '🎯',
    label: 'All-Around / Versatile Use',
    hook: 'Want one board for everything?',
    description:
      "Flatwater, mild chop, a camping trip with gear strapped on — you need a board that adapts. One board. Every session.",
    board: getBoard('isle-pioneer-pro'),
    accent: 'var(--color-glacier-teal)',
    accentBg: 'rgba(0,201,177,0.08)',
    accentBorder: 'rgba(0,201,177,0.28)',
    ctaText: 'Get the Isle Pioneer Pro',
  },
  {
    emoji: '🏆',
    label: 'Touring / Performance',
    hook: 'Chasing speed and rigidity?',
    description:
      "You care about tracking, distance, and a platform that rivals a carbon hardboard. You don't compromise — neither does this board.",
    board: getBoard('red-paddle-co-sport'),
    accent: 'var(--color-amber-glow)',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.25)',
    ctaText: 'See the Red Paddle Co Sport',
  },
] as const;

/* ── Component ────────────────────────────────────────────────── */
export default function PersonaMatch() {
  return (
    <SectionLayout
      id="persona-match"
      ariaLabelledBy="persona-heading"
      eyebrow="Find Your Match"
      heading={<>Which Board Is <span className="gradient-text">Right For You?</span></>}
      subtitle="Three types of paddler. Three boards built for them. See yourself below and click through."
      headingId="persona-heading"
    >

        {/* 3-column persona grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERSONAS.map(({ emoji, label, hook, description, board, accent, accentBg, accentBorder, ctaText }) => (
            /*
             * Entire card is the affiliate link (same pick-card pattern).
             * CTA div inside is NOT an <a> — parent is the anchor.
             */
            <a
              key={board.id}
              href={board.affiliateUrl}
              id={`persona-cta-${board.id}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="pick-card"
              style={{ borderColor: accentBorder }}
              aria-label={`${label} — ${board.name} — ${board.price}`}
              data-product={board.name}
              data-ga-location="persona_match"
            >
              <div className="flex flex-col gap-5 p-7">

                {/* Emoji + persona label */}
                <div>
                  <span
                    className="text-3xl"
                    aria-hidden="true"
                    style={{ display: 'block', marginBottom: 10 }}
                  >
                    {emoji}
                  </span>
                  <h3
                    className="text-base font-extrabold text-text-primary leading-tight tracking-tight"
                  >
                    {label}
                  </h3>
                </div>

                {/* Hook + description */}
                <div>
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ color: accent }}
                  >
                    {hook}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Board recommendation chip */}
                <div
                  className="flex items-center gap-2.5 rounded-xl p-3"
                  style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
                >
                  <span
                    className="text-xs font-bold shrink-0"
                    style={{ color: accent }}
                  >
                    Our Pick
                  </span>
                  <span className="text-xs font-semibold text-text-primary leading-tight">
                    {board.name}{' '}
                    <span className="text-text-muted font-normal">{board.length}</span>
                  </span>
                  <span
                    className="ml-auto text-xs font-extrabold shrink-0"
                    style={{ color: accent }}
                  >
                    {board.price}
                  </span>
                </div>

                {/* CTA div — dominant, pick-cta cascade from CSS */}
                <div className="pick-cta">
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </div>

              </div>
            </a>
          ))}
        </div>

        {/* Bottom note — plain hash links, smooth scroll via CSS */}
        <p className="text-center text-xs text-text-muted mt-10">
          Can&apos;t decide? Read our{' '}
          <a
            href="#reviews"
            className="underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: 'var(--color-glacier-teal)' }}
          >
            full in-depth reviews
          </a>{' '}
          or check the{' '}
          <a
            href="#comparison"
            className="underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: 'var(--color-glacier-teal)' }}
          >
            side-by-side comparison
          </a>
          .
        </p>

    </SectionLayout>
  );
}

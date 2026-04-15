'use client';

import { ArrowRight } from 'lucide-react';
import { boards } from '@/lib/boards';
import SectionLayout from '@/components/ui/SectionLayout';

/* ── Helpers ──────────────────────────────────────────────────── */
/** Returns a teal/sky/amber CSS var based on score tier */
function scoreColor(score: number): string {
  if (score >= 9.5) return 'var(--color-glacier-teal)';
  if (score >= 8.5) return 'var(--color-sky-glow)';
  return 'var(--color-amber-glow)';
}

/** Column header labels */
const COLS = [
  'Board',
  'Rigidity',
  'Capacity',
  'Weight',
  'Best For',
  '',   // CTA column — no label
] as const;

/* ── Component ────────────────────────────────────────────────── */
export default function ComparisonTable() {
  return (
    <SectionLayout
      id="comparison"
      ariaLabelledBy="comparison-heading"
      eyebrow="Quick Comparison"
      heading={<>Decide in <span className="gradient-text">Under 10 Seconds</span></>}
      subtitle="Every key metric side-by-side. Click any row or CTA to check the current price directly from the retailer."
      headingId="comparison-heading"
      divider
    >

        {/* ── Table wrapper ─────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'var(--gradient-card)',
            border: '1px solid var(--color-glass-border)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Horizontal scroll on mobile */}
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm border-collapse"
              role="table"
              aria-label="Board comparison table"
            >

              {/* ── Sticky header ──────────────────────────── */}
              <thead>
                <tr
                  style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    background: 'rgba(5, 13, 26, 0.92)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(0, 201, 177, 0.2)',
                  }}
                >
                  {COLS.map((col, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="text-xs font-bold uppercase tracking-widest text-text-muted whitespace-nowrap"
                      style={{
                        padding: '14px 24px',
                        textAlign: i === COLS.length - 1 ? 'right' : 'left',
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ── Body ───────────────────────────────────── */}
              <tbody>
                {boards.map((board, rowIdx) => {
                  /* Highlight the featured / "Editor's Choice" board */
                  const isHighlighted = board.badgeColor === 'amber';
                  const rowBg = isHighlighted
                    ? 'rgba(0, 201, 177, 0.05)'
                    : 'transparent';
                  const rowBorder = 'rgba(255,255,255,0.05)';

                  return (
                    <tr
                      key={board.id}
                      style={{
                        background: rowBg,
                        borderTop: rowIdx > 0 ? `1px solid ${rowBorder}` : 'none',
                        transition: 'background 0.18s ease',
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.background =
                          isHighlighted
                            ? 'rgba(0,201,177,0.1)'
                            : 'rgba(255,255,255,0.03)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.background = rowBg)
                      }
                    >

                      {/* ── Board name ─────────────────────── */}
                      <td style={{ padding: '20px 24px', minWidth: 220 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {/* Badge */}
                          <span
                            style={{
                              display: 'inline-block',
                              width: 'fit-content',
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                              padding: '2px 8px',
                              borderRadius: 999,
                              marginBottom: 4,
                            }}
                            className={`badge-${board.badgeColor}`}
                          >
                            {board.badge}
                          </span>
                          <span
                            className="font-bold text-text-primary"
                            style={{ fontSize: 15, lineHeight: 1.25 }}
                          >
                            {board.name}
                          </span>
                          <span className="text-text-muted" style={{ fontSize: 12 }}>
                            {board.length} · {board.category}
                          </span>
                        </div>
                      </td>

                      {/* ── Rigidity score ─────────────────── */}
                      <td style={{ padding: '20px 24px', minWidth: 130 }}>
                        <span
                          style={{
                            fontSize: 24,
                            fontWeight: 800,
                            color: scoreColor(board.rigidityScore),
                            display: 'block',
                            lineHeight: 1,
                          }}
                        >
                          {board.rigidityScore}
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 500,
                              color: 'var(--color-text-muted)',
                              marginLeft: 2,
                            }}
                          >
                            /10
                          </span>
                        </span>
                        {/* Score bar */}
                        <div className="score-track" style={{ width: 80, marginTop: 6 }}>
                          <div
                            className="score-fill"
                            style={{
                              width: `${board.rigidityScore * 10}%`,
                              background: scoreColor(board.rigidityScore),
                            }}
                          />
                        </div>
                      </td>

                      {/* ── Weight capacity ────────────────── */}
                      <td style={{ padding: '20px 24px', minWidth: 110 }}>
                        <span
                          className="font-bold text-text-primary"
                          style={{ fontSize: 15 }}
                        >
                          {board.weightCapacity}
                        </span>
                      </td>

                      {/* ── Board weight ───────────────────── */}
                      <td style={{ padding: '20px 24px', minWidth: 100 }}>
                        <span
                          className="font-bold text-text-primary"
                          style={{ fontSize: 15 }}
                        >
                          {board.weight}
                        </span>
                      </td>

                      {/* ── Best For tag ───────────────────── */}
                      <td style={{ padding: '20px 24px', minWidth: 180 }}>
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: 12,
                            fontWeight: 600,
                            padding: '5px 12px',
                            borderRadius: 999,
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--color-text-secondary)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {board.bestFor}
                        </span>
                      </td>

                      {/* ── CTA button ─────────────────────── */}
                      <td
                        style={{
                          padding: '20px 24px',
                          textAlign: 'right',
                          minWidth: 180,
                        }}
                      >
                        <a
                          href={board.affiliateUrl}
                          id={`table-cta-${board.id}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="table-row-cta"
                          aria-label={`Check latest price for ${board.name} — ${board.price}`}
                          data-product={board.name}
                          data-ga-location="comparison_table"
                        >
                          <span>{board.price}</span>
                          <ArrowRight
                            style={{ width: 14, height: 14, flexShrink: 0 }}
                          />
                        </a>
                      </td>

                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-text-muted mt-10">
          Rigidity scores reflect our independent field assessment.
          Prices link to current retailer listings and may change.
        </p>
    </SectionLayout>
  );
}

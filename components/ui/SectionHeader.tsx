import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Small uppercase label above the heading. Accepts ReactNode so icons can be embedded. */
  eyebrow?: ReactNode;
  /** Main heading. Accepts ReactNode so gradient <span> can be embedded. */
  heading: ReactNode;
  /** Plain-text subtitle paragraph rendered below the heading. */
  subtitle: string;
  /** Optional id for aria-labelledby on the parent section. */
  headingId?: string;
  /**
   * CSS color value for the eyebrow text.
   * Defaults to glacier-teal; pass var(--color-sky-glow) etc. for variation.
   */
  accentColor?: string;
  /** Extra classes on the wrapper div (e.g. to override max-width inside a card). */
  className?: string;
}

/**
 * SectionHeader
 * ─────────────
 * Unified heading block used by every major homepage section.
 * Spacing contract (enforced via pure CSS class .section-header-block):
 *   eyebrow  →  12px (mb-3 inline style)
 *   heading  →  16px (mb-4 inline style)
 *   subtitle →  48px base / 56px md (section-header-block CSS rule)
 */
export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  headingId,
  accentColor = 'var(--color-glacier-teal)',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`section-header-block flex flex-col items-center text-center w-full ${className}`}
    >

      {/* Eyebrow */}
      {eyebrow && (
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: accentColor, marginBottom: '0.75rem', display: 'block' }}
        >
          {eyebrow}
        </span>
      )}

      {/* Heading */}
      <h2
        id={headingId}
        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
        style={{ marginBottom: '1rem' }}
      >
        {heading}
      </h2>

      {/* Subtitle */}
      <p className="text-white/75 leading-relaxed text-base md:text-lg max-w-2xl">
        {subtitle}
      </p>

    </div>
  );
}

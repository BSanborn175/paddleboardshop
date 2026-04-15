import type { ReactNode } from 'react';
import SectionHeader from './SectionHeader';

interface SectionLayoutProps {
  /** The HTML id, used for anchor links (e.g. #top-picks) */
  id: string;

  /** aria-labelledby value — should match headingId when provided */
  ariaLabelledBy?: string;

  /**
   * Extra classes on the outer <section> element.
   * Use for one-off overrides like "section-last" on the final section.
   */
  className?: string;

  // ── SectionHeader props ───────────────────────────────────────────────────
  /** Small uppercase label above the heading */
  eyebrow?: ReactNode;
  /** Main heading — accepts ReactNode for gradient <span> */
  heading: ReactNode;
  /** Stable id for aria-labelledby wiring */
  headingId?: string;
  /** Plain-text subtitle paragraph */
  subtitle: string;
  /** CSS color value for eyebrow text. Defaults to glacier-teal. */
  accentColor?: string;

  // ── Layout options ────────────────────────────────────────────────────────
  /** Render a teal gradient section-divider above the section content */
  divider?: boolean;

  /**
   * Absolutely-positioned ambient elements (orbs, gradients).
   * Rendered as siblings of the content container, inside the section,
   * so they position relative to the section's "relative" context.
   */
  ambient?: ReactNode;

  /** The content block — grids, tables, cards — rendered below the header */
  children: ReactNode;
}

/**
 * SectionLayout
 * ─────────────
 * Reusable one-design layout shell for every homepage section.
 *
 * Structure (top to bottom):
 *   <section  py-24 md:py-28  relative>
 *     [section-divider — optional]
 *     [ambient orbs   — optional]
 *     <div  max-w-7xl mx-auto px-6  relative z-10>          ← shared container
 *       <div  max-w-3xl mx-auto text-center mb-12>           ← header block
 *         <SectionHeader eyebrow heading subtitle />
 *       </div>
 *       {children}                                            ← content block
 *     </div>
 *   </section>
 *
 * Design contract:
 *   • Header and content share THE SAME max-w-7xl container — no drift.
 *   • max-w-3xl mx-auto on the header wrapper constrains the text column
 *     to 768px, centered within the 1280px content container.
 *   • mb-12 (48px) is the fixed gap between subtitle and content — always.
 *   • section-header-block's own margin-bottom is zeroed in globals.css;
 *     all spacing between header and content lives here instead.
 */
export default function SectionLayout({
  id,
  ariaLabelledBy,
  className = '',
  eyebrow,
  heading,
  headingId,
  subtitle,
  accentColor,
  divider = false,
  ambient,
  children,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-24 md:py-28 relative ${className}`}
    >
      {/* Optional gradient divider line at the section top */}
      {divider && <div className="section-divider mb-10" />}

      {/* Ambient orbs — absolutely positioned relative to this section */}
      {ambient}

      {/* ── Shared container ────────────────────────────────────────────
          max-w-7xl constrains the total width to 1280px.
          Header block and content block BOTH live inside this container,
          ensuring the heading is always centred above the same content.
      ──────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header block ────────────────────────────────────────────
            max-w-3xl mx-auto  — narrows the text column to 768px
                                 and centres it within the 1280px container.
            text-center        — centres all text within the column.
            mb-12              — 48 px fixed gap before the content block.
        ──────────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeader
            eyebrow={eyebrow}
            heading={heading}
            headingId={headingId}
            subtitle={subtitle}
            accentColor={accentColor}
          />
        </div>

        {/* ── Content block ───────────────────────────────────────────
            Fills the full max-w-7xl container width.
            Grids, tables, and cards go here as children.
        ──────────────────────────────────────────────────────────────── */}
        {children}

      </div>
    </section>
  );
}

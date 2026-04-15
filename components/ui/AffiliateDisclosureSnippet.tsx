import { Info } from 'lucide-react';

/**
 * AffiliateDisclosureSnippet
 * ----------------------------
 * A compact, above-the-fold disclosure banner to place at the top of every
 * blog post, review article, or comparison page.
 *
 * FTC 16 CFR Part 255 (2026 guidelines) requires that material connections
 * be disclosed "clearly and conspicuously" before any affiliate link appears.
 */
export default function AffiliateDisclosureSnippet() {
  return (
    <aside
      id="affiliate-disclosure-snippet"
      role="note"
      aria-label="Affiliate disclosure"
      className="flex items-start gap-3 rounded-xl border border-teal-500/20 bg-teal-500/5 px-4 py-3 text-sm text-text-secondary"
    >
      <Info
        className="mt-0.5 h-4 w-4 shrink-0 text-teal"
        aria-hidden="true"
      />
      <p>
        <strong className="font-semibold text-text-primary">Disclosure:</strong>{' '}
        This page contains affiliate links. If you purchase through our links we
        may earn a small commission — at{' '}
        <strong className="font-semibold text-text-primary">
          absolutely no extra cost to you
        </strong>
        . Read our full{' '}
        <a
          href="/disclosure"
          className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
        >
          Affiliate Disclosure
        </a>{' '}
        for details.
      </p>
    </aside>
  );
}

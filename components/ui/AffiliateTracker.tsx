'use client';

import { useEffect } from 'react';
import { trackAffiliateClick } from '@/lib/trackAffiliateClick';

/**
 * AffiliateTracker
 * ────────────────
 * Rendered once in the root layout. Attaches a single document-level
 * click listener (capture phase) that intercepts every click on any
 * <a href="/go/..."> link across the entire site.
 *
 * Why capture phase?
 *   Capture fires before the event bubbles to the element's own handlers,
 *   ensuring tracking runs even if an onClick somewhere calls stopPropagation.
 *
 * Why not onClick on each link?
 *   Affiliate links are spread across server components, blog pages, and
 *   multiple UI components. A global listener means zero per-component
 *   boilerplate — just add data-product and data-ga-location to any <a>.
 *
 * Why target="_blank" links are safe:
 *   All affiliate CTAs open in a NEW TAB. The current page never unloads,
 *   so the GA4 event sends completely before any navigation happens.
 *
 * Data attributes required on each affiliate <a>:
 *   data-product     — product name, e.g. "BOTE Breeze Aero"
 *   data-ga-location — page location, e.g. "top_picks", "comparison_table"
 */
export default function AffiliateTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // Walk up the DOM tree from the clicked element to find the nearest
      // <a href="/go/..."> ancestor (handles clicks on child elements like spans)
      const link = (event.target as Element | null)?.closest('a[href^="/go/"]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const productName = link.dataset.product   ?? '(unknown product)';
      const location    = link.dataset.gaLocation ?? 'unknown';

      trackAffiliateClick(productName, location);
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  // Renders nothing — purely a side-effect component
  return null;
}

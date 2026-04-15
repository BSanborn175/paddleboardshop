/**
 * trackAffiliateClick.ts
 * ──────────────────────
 * Thin wrapper around GA4's gtag affiliate_click event.
 *
 * Called from AffiliateTracker's global click listener whenever
 * a user clicks any link that starts with /go/[slug].
 *
 * Parameters sent to GA4:
 *   product_name — e.g. "BOTE Breeze Aero"
 *   location     — e.g. "top_picks", "comparison_table", "review_section"
 *
 * The function is a no-op when:
 *   • Running server-side (no window)
 *   • GA4 hasn't loaded yet (gtag not on window)
 *   • The user has an ad/analytics blocker
 */

declare global {
  interface Window {
    // Standard GA4 gtag signature — typed just enough for our use case
    gtag: (command: string, eventName: string, params: Record<string, string>) => void;
  }
}

export function trackAffiliateClick(productName: string, location: string): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'affiliate_click', {
    product_name: productName,
    location:     location,
  });
}

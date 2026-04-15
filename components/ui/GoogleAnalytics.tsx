'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  gaId: string;
}

/**
 * GoogleAnalytics
 * ───────────────
 * Loads the GA4 gtag.js script and tracks page views on every
 * client-side navigation (Next.js App Router SPA routing does NOT
 * fire native browser page loads, so we must track manually).
 *
 * Why send_page_view: false?
 *   GA4's automatic page_view fires on gtag('config') — that's the
 *   initial load. But useEffect also fires on mount, so if we kept
 *   send_page_view: true we'd double-count the first page.
 *   Setting it to false lets useEffect own ALL page_view events
 *   (initial mount + every subsequent route change).
 *
 * Why usePathname?
 *   Next.js App Router uses client-side pushState for navigation.
 *   window.location doesn't change in a way GA4 detects natively,
 *   so we use React's usePathname hook to watch for route changes.
 */
export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  // Fire page_view on mount (initial page) + every route change
  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('config', gaId, {
      page_path: pathname,
    });
  }, [pathname, gaId]);

  return (
    <>
      {/* Load the GA4 gtag.js library — afterInteractive means it loads
          after hydration, never blocking LCP or FID scores */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      {/* Bootstrap the dataLayer and configure GA4.
          send_page_view: false — useEffect handles all page_view calls */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}

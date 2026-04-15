/**
 * app/go/[slug]/route.ts
 * ──────────────────────
 * Affiliate redirect handler. Intercepts all /go/[slug] requests
 * and issues a 302 redirect to the mapped external affiliate URL.
 *
 * Performance: no React rendering, no DB calls — pure server-side
 * redirect. Resolves in < 50 ms at the edge.
 *
 * Future: add analytics/event logging here before the redirect
 * (e.g. posthog.capture, database write, etc.) without changing
 * any component or link in the codebase.
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { AFFILIATE_LINKS } from '@/lib/affiliateLinks';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const destination = AFFILIATE_LINKS[slug];

  // Unknown slug — send user to homepage rather than a 404
  if (!destination) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.redirect(destination, {
    status: 302,
    headers: {
      // Prevent crawlers from following or indexing redirect routes.
      // Affiliate links should not pass link equity.
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

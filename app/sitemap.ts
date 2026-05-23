import type { MetadataRoute } from 'next';
import { boards } from '@/lib/boards';

const BASE_URL = 'https://www.paddleboardshop.com';

/**
 * Next.js App Router sitemap generator.
 * Served automatically at /sitemap.xml — no static file needed.
 * Update lastModified dates when page content changes significantly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const TODAY = new Date();

  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // ── High-volume intent pages (Priority 0.95) ───────────────────────────
    {
      url: `${BASE_URL}/best-inflatable-paddle-boards`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/what-size-paddle-board-do-i-need`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // ── Category landing pages (Priority 0.9) ─────────────────────────────
    {
      url: `${BASE_URL}/best-boards-2026`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-paddle-boards-for-beginners`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-inflatable-paddle-boards-under-1000`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-paddle-boards-under-500`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    // ── Use-case landing pages (Priority 0.85) ─────────────────────────────
    {
      url: `${BASE_URL}/best-paddle-boards-for-fishing`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/touring-paddle-boards`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/paddle-boards-for-yoga`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/paddle-boards-for-kids`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // ── Comparison & guide pages (Priority 0.8) ────────────────────────────
    {
      url: `${BASE_URL}/hard-vs-inflatable-paddle-board`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/isle-vs-bote-vs-red-paddle`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/paddleboarding-with-your-dog`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // ── New high-volume landing pages (Priority 0.9) ──────────────────────
    {
      url: `${BASE_URL}/paddle-board-vs-kayak`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/how-to-paddle-board`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-paddle-board-for-heavy-riders`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/best-paddle-board-brands`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/sup-vs-surfboard`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── About / E-E-A-T (Priority 0.6) ───────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      lastModified: TODAY,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // ── Accessory / gear guides (Priority 0.8) ────────────────────────────
    {
      url: `${BASE_URL}/best-paddle-board-paddles`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-paddle-board-accessories`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-electric-pump-for-paddle-boards`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Hub pages (Priority 0.7) ───────────────────────────────────────────
    {
      url: `${BASE_URL}/compare`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gear`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // ── Blog posts ────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog/best-inflatable-paddle-boards-for-beginners-2026`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/isle-pioneer-pro-review-2026`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/bote-breeze-aero-review-2026`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/red-paddle-co-sport-review-2026`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Legal / utility ───────────────────────────────────────────────────
    {
      url: `${BASE_URL}/disclosure`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ── Dynamic review routes (generated from boards data) ────────────────────
  const reviewRoutes: MetadataRoute.Sitemap = boards.map((board) => ({
    url: `${BASE_URL}/reviews/${board.id}`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...reviewRoutes];
}

import type { MetadataRoute } from 'next';
import { boards } from '@/lib/boards';

const BASE_URL = 'https://www.paddleboardshop.com';

/**
 * Next.js App Router sitemap generator.
 * Served automatically at /sitemap.xml — no static file needed.
 * Update lastModified dates when page content changes significantly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/best-boards-2026`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-paddle-boards-for-beginners`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-inflatable-paddle-boards-under-1000`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-paddle-boards-for-fishing`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-paddle-board-paddles`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-paddle-board-accessories`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-electric-pump-for-paddle-boards`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/isle-vs-bote-vs-red-paddle`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/paddleboarding-with-your-dog`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gear`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // ── Blog posts ────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog/best-inflatable-paddle-boards-for-beginners-2026`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/isle-pioneer-pro-review-2026`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/bote-breeze-aero-review-2026`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/red-paddle-co-sport-review-2026`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/isle-pioneer-pro-vs-bote-breeze-aero-vs-red-paddle-co-2026`,
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Legal / utility ───────────────────────────────────────────────────────
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
    lastModified: new Date('2026-05-07'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...reviewRoutes];
}

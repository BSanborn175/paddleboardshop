import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import GoogleAnalytics from '@/components/ui/GoogleAnalytics';
import MicrosoftClarity from '@/components/ui/MicrosoftClarity';
import AffiliateTracker from '@/components/ui/AffiliateTracker';
import './globals.css';

// ── GA4 ──────────────────────────────────────────────────────────────────────
// Set NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX in your .env.local file.
// Only activates in production (NODE_ENV === 'production').
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop Expert Reviews',
  description:
    'Expert reviews of the best inflatable paddle boards for 2026. Compare the Red Paddle Co Sport, BOTE Breeze Aero, and Isle Pioneer Pro — with rigidity scores, portability ratings, and current pricing.',
  keywords: [
    'best inflatable paddle boards 2026',
    'high performance iSUP reviews',
    'inflatable SUP comparison',
    'Red Paddle Co Sport review',
    'BOTE Breeze Aero review',
    'Isle Pioneer Pro review',
    'best iSUP 2026',
    'inflatable paddle board buying guide',
  ],
  openGraph: {
    title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop',
    description:
      'The definitive 2026 guide to high-performance inflatable paddle boards. Rigidity scores, portability ratings, and expert analysis.',
    type: 'website',
    siteName: 'PaddleBoardShop',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* ── Impact.com affiliate network site verification ──────────────
            Impact.com requires the 'value' attribute (non-standard HTML).
            Placed directly in <head> JSX because the Next.js metadata API
            only outputs the standard 'content' attribute.
            Must load on every page — no conditional logic.
        ──────────────────────────────────────────────────────────────── */}
        <meta
          name="impact-site-verification"
          {...({ value: 'd7dcfcd7-a512-4ca3-a8e2-4497f8638a87' } as React.HTMLAttributes<HTMLMetaElement>)}
        />
      </head>
      <body className="antialiased">

        {/* ── Google Analytics 4 ─────────────────────────────────────────
            Active only in production with a valid Measurement ID.
            Tracks page views (including SPA navigation) + affiliate clicks.
            To enable: set NEXT_PUBLIC_GA_ID in .env.local
        ──────────────────────────────────────────────────────────────── */}
        {IS_PRODUCTION && GA_ID      && <GoogleAnalytics gaId={GA_ID} />}
        {IS_PRODUCTION && CLARITY_ID && <MicrosoftClarity clarityId={CLARITY_ID} />}

        {/* ── Affiliate click tracker ────────────────────────────────────
            Global listener — intercepts every /go/ link click sitewide.
            Fires GA4 affiliate_click event with product_name + location.
            Active in all environments so you can test locally.
        ──────────────────────────────────────────────────────────────── */}
        <AffiliateTracker />

        {/* ── AvantLink affiliate network site verification ───────────────
            Required by AvantLink to confirm site ownership.
            Uses lazyOnload so it never blocks page rendering.
            Must be present on the homepage — root layout ensures coverage.
        ──────────────────────────────────────────────────────────────── */}
        <Script
          src="https://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=dde2d49d483f70965f8aed52aaa4ef603a6ecb29"
          strategy="lazyOnload"
        />

        {children}

      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sections — high-conversion affiliate layout (V2)
import Hero from '@/components/sections/Hero';
import TopPicks from '@/components/sections/TopPicks';
import WhyThese3 from '@/components/sections/WhyThese3';
import PersonaMatch from '@/components/sections/PersonaMatch';
import ReviewCards from '@/components/sections/ReviewCards';
import ComparisonTable from '@/components/sections/ComparisonTable';
import CompleteSetup from '@/components/sections/CompleteSetup';
import Locations from '@/components/sections/Locations';
import FinalCTA from '@/components/sections/FinalCTA';
import ConversionElements from '@/components/ui/ConversionElements';

export const metadata: Metadata = {
  title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop Expert Reviews',
  description:
    'Expert reviews of the best inflatable paddle boards for 2026. Compare the Red Paddle Co Sport, BOTE Breeze Aero, and Isle Pioneer Pro with rigidity scores, weight capacity, and current pricing.',
  keywords: [
    'best inflatable paddle boards 2026',
    'high performance iSUP reviews',
    'inflatable SUP comparison',
    'Red Paddle Co Sport review',
    'BOTE Breeze Aero review',
    'Isle Pioneer Pro review',
  ],
  openGraph: {
    title: 'Best Inflatable Paddle Boards 2026 | PaddleBoardShop',
    description:
      'The definitive 2026 guide to high-performance inflatable paddle boards. Rigidity scores, capacity ratings, and expert analysis.',
    type: 'website',
    siteName: 'PaddleBoardShop',
  },
};

/*
 * HIGH-CONVERSION AFFILIATE LAYOUT
 * ─────────────────────────────────
 * 1. Hero              — single CTA "See Top 3 Boards →"
 * 2. TopPicks          — 3 minimal conversion cards (image, name, price, CTA)
 * 3. WhyThese3         — credibility / methodology bullets
 * 4. ReviewCards       — full reviews (shorter copy, bold key phrases)
 * 5. ComparisonTable   — Board · Rigidity · Capacity · Weight · Best For
 * 6. CompleteSetup     — "Complete Your Setup" gear section (same card style)
 * 7. Locations         — Florida/Carolinas directory placeholder
 * 8. FinalCTA          — final push / recap CTA
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 ── Hero */}
        <Hero />

        {/* 2 ── Top 3 Boards (minimal conversion cards) */}
        <TopPicks />

        {/* 3 ── Which Board Is Right For You? (persona self-selection) */}
        <PersonaMatch />

        {/* 4 ── Why These 3? (credibility / methodology) */}
        <WhyThese3 />

        {/* 4 ── Full in-depth reviews */}
        <ReviewCards />

        {/* 5 ── Head-to-head comparison table */}
        <ComparisonTable />

        {/* 6 ── Complete Your Setup (paddles + accessories) */}
        <CompleteSetup />

        {/* 7 ── Locations directory (placeholder, tab-nav target) */}
        <Locations />

        {/* 8 ── Final CTA */}
        <FinalCTA />

        {/* ── Persistent conversion elements (floating + banner) */}
        <ConversionElements />
      </main>
      <Footer />
    </>
  );
}

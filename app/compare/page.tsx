import type { Metadata } from 'next';
import ComingSoonPage from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Compare Paddle Boards 2026 | PaddleBoardShop',
  description:
    'Side-by-side iSUP comparison tool — rigidity scores, weight capacity, and prices. Coming soon.',
};

export default function ComparePage() {
  return (
    <ComingSoonPage
      eyebrow="Comparison Tool — Coming Soon"
      heading="Compare Every Board"
      headingAccent="Side-by-Side"
      description="Our interactive comparison tool will let you pick any two iSUPs and see rigidity scores, weight capacity, portability ratings, and prices in a head-to-head view."
      features={[
        'Pick any 2–4 boards and compare every spec',
        'Filter by price, rigidity score, weight capacity, and category',
        'Radar chart visualization of performance profiles',
        'Direct affiliate price links for each board',
      ]}
      primaryHref="/#comparison"
      primaryLabel="See Current Comparison Table"
      secondaryHref="/"
      secondaryLabel="Back to home"
      orbColor="rgba(56,189,248,0.07)"
    />
  );
}

import type { Metadata } from 'next';
import ComingSoonPage from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'iSUP Gear & Accessories 2026 | PaddleBoardShop',
  description:
    'Best paddles, pumps, dry bags, and accessories for inflatable stand-up paddle boards in 2026.',
};

export default function GearPage() {
  return (
    <ComingSoonPage
      eyebrow="Gear Reviews — Coming Soon"
      heading="Complete Your"
      headingAccent="Setup"
      description="Detailed reviews and buying guides for every accessory you need to get the most out of your inflatable paddle board — from paddles and pumps to dry bags and board bags."
      features={[
        'Best iSUP paddles 2026 — carbon fibre vs fibreglass vs aluminium',
        'Best electric pump reviews — PSI accuracy and inflation speed tested',
        'Dry bag roundup — waterproofing ratings and volume guide',
        'Board bags and backpacks — which fits your rolling kit',
        'Leash guide — coiled vs straight, length, and safety considerations',
      ]}
      primaryHref="/#gear-bag"
      primaryLabel="See Our Current Gear Picks"
      secondaryHref="/"
      secondaryLabel="Back to home"
      orbColor="rgba(251,191,36,0.05)"
    />
  );
}

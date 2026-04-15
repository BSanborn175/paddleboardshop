import type { Metadata } from 'next';
import ComingSoonPage from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Best iSUP Launch Locations 2026 | PaddleBoardShop',
  description:
    'Curated guide to the best inflatable paddle board launch spots, flatwater routes, and beginner-friendly beaches in Florida, the Carolinas, and the Pacific Northwest.',
};

export default function LocationsPage() {
  return (
    <ComingSoonPage
      eyebrow="Launch Directory — Coming Q2 2026"
      heading="Find Your Perfect"
      headingAccent="Launch Spot"
      description="Our curated directory of the best iSUP launch spots, flatwater paddling routes, and beginner-friendly beaches — organised by region, skill level, and board type."
      features={[
        'Florida — Gulf & Atlantic launches: Jupiter Inlet, Cocoa Beach, Naples Bay, Tampa Bay',
        'The Carolinas — Coastal & lake destinations: Outer Banks, Lake Norman, Lake Wylie',
        'Pacific Northwest — Puget Sound, Columbia River Gorge, Crater Lake',
        'Filter by flatwater, coastal, river, or beginner-friendly',
        'Mapped launch spots with parking, facilities, and tide notes',
      ]}
      primaryHref="/#locations"
      primaryLabel="Preview Location Directory"
      secondaryHref="/"
      secondaryLabel="Back to home"
      orbColor="rgba(56,189,248,0.06)"
    />
  );
}

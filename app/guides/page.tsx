import type { Metadata } from 'next';
import ComingSoonPage from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Paddle Board Guides 2026 | PaddleBoardShop',
  description:
    'Expert buying guides, inflation tutorials, and iSUP care tips for 2026 inflatable paddle boards.',
};

export default function GuidesPage() {
  return (
    <ComingSoonPage
      eyebrow="Paddle Guides — Coming Soon"
      heading="Learn Everything About"
      headingAccent="Inflatable SUPs"
      description="In-depth guides covering everything from choosing your first board to advanced touring techniques, inflation best practices, and fin setups."
      features={[
        'Complete iSUP Buying Guide 2026 — what to look for at every price point',
        'How to inflate & store your board for maximum longevity',
        'Fin setup guide — single, twin, and thruster configurations',
        'Best paddles for each paddling style (flat water, surf, touring, yoga)',
        'Weight capacity explained — why it matters more than you think',
      ]}
      primaryHref="/#reviews"
      primaryLabel="Read Our Board Reviews"
      secondaryHref="/"
      secondaryLabel="Back to home"
      orbColor="rgba(0,201,177,0.06)"
    />
  );
}

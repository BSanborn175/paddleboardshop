import { Zap } from 'lucide-react';
import { paddleItems } from '@/lib/gear';
import GearCard from '@/components/ui/GearCard';
import SectionHeader from '@/components/ui/SectionHeader';

export default function PaddleGuide() {
  return (
    <section id="paddle-guide" className="section-pad relative">
      <div className="section-divider mb-10" />

      {/* Ambient orb */}
      <div
        className="orb w-[500px] h-[400px] top-0 right-0"
        style={{ background: 'rgba(0, 201, 177, 0.05)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow={<><Zap className="w-3 h-3 inline mr-1" />Performance Paddles 2026</>}
          heading={<>The 2026 <span className="gradient-text">Paddle Guide</span></>}
          subtitle="Your iSUP is only as fast as your paddle. These carbon-fibre weapons are what the 2026 elite are pulling through the water."
        />

        {/* Gear grid */}
        <div
          className={`grid gap-10 ${
            paddleItems.length === 1
              ? 'max-w-md mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {paddleItems.map((item) => (
            <GearCard key={item.id} item={item} />
          ))}
        </div>

        {/* Coming-soon teaser */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-muted">
            More 2026 paddles being reviewed — check back weekly.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Package } from 'lucide-react';
import { gearItems } from '@/lib/gear';
import GearCard from '@/components/ui/GearCard';
import SectionLayout from '@/components/ui/SectionLayout';

export default function GearBag() {
  return (
    <SectionLayout
      id="gear-bag"
      eyebrow={<><Package className="w-3 h-3 inline mr-1" />Essential Accessories</>}
      accentColor="var(--color-sky-glow)"
      heading={<>The <span className="gradient-text">Gear Bag</span></>}
      subtitle="The pump, the dry bag, and the accessories that make or break a session. Curated for 2026 high-performance iSUP setups."
      divider
    >
      {/* Gear grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gearItems.map((item) => (
          <GearCard key={item.id} item={item} />
        ))}
      </div>

      {/* Disclosure reminder */}
      <p className="mt-16 text-center text-xs text-text-muted">
        ★ Independent reviews · Affiliate links support our work · Prices subject to change
      </p>
    </SectionLayout>
  );
}

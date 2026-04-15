import { Waves, ArrowRight } from 'lucide-react';
import { boards } from '@/lib/boards';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 md:py-28 section-last relative">
      <div className="section-divider mb-10" />

      {/* Ambient orb */}
      <div
        className="orb w-[600px] h-[400px] bottom-0 left-1/2 -translate-x-1/2"
        style={{ background: 'rgba(0, 201, 177, 0.06)' }}
        aria-hidden="true"
      />

      {/*
        FinalCTA intentionally keeps its own narrow centered-card layout
        (max-w-3xl glass card) rather than using SectionLayout's wide grid.
        The mb-10 wrapper around SectionHeader replaces the spacing that
        section-header-block previously provided (now zeroed in globals.css).
      */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
        <div className="glass-card p-12 md:p-16 text-center">

          {/* Wave icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center mx-auto mb-8 shadow-teal-strong">
            <Waves className="w-7 h-7 text-void" strokeWidth={2} />
          </div>

          {/* Header — mb-10 restores the gap since section-header-block is now 0 */}
          <div className="mb-10">
            <SectionHeader
              heading={<>Ready to Find Your <span className="gradient-text">Perfect Board?</span></>}
              subtitle="All three boards represent the pinnacle of 2026 iSUP technology. Whether you're after maximum rigidity, magnetic accessories, or unlimited carry capacity — your next board is below."
            />
          </div>

          {/* Board links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {boards.map((board) => (
              <a
                key={board.id}
                href={board.affiliateUrl}
                id={`final-cta-${board.id}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex flex-col items-center justify-center text-center glass px-6 py-5 rounded-xl hover:border-teal/40 transition-all duration-200 group flex-1 min-w-0 space-y-2"
                data-product={board.name}
                data-ga-location="final_cta"
              >
                <p className="text-xs text-text-muted font-semibold uppercase tracking-widest">
                  {board.category}
                </p>
                <p className="text-sm font-bold text-text-primary leading-snug">
                  {board.name}
                </p>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="text-sm font-extrabold text-teal">{board.price}</p>
                  <ArrowRight className="w-3.5 h-3.5 text-teal shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <p className="text-xs text-text-muted">
            ★ Independent reviews · Affiliate links support our work · Prices subject to change
          </p>
        </div>
      </div>
    </section>
  );
}

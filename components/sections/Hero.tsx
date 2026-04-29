'use client';

import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '65vh' }}
    >
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Inflatable paddle board on glass-calm turquoise water at golden hour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Gradient overlay — darker at top and bottom for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,22,40,0.72) 0%, rgba(10,22,40,0.25) 50%, rgba(10,22,40,0.80) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/50 via-transparent to-[#0A1628]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">

        {/* Eyebrow */}
        <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-6">
          <span className="text-xs font-semibold text-text-secondary tracking-widest uppercase">
            2026 Expert iSUP Review Guide
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-4"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          Find the Best{' '}
          <span className="gradient-text">Paddle Board</span>
          <br />
          for You
        </h1>

        {/* Sub */}
        <p
          className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mb-8"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
        >
          Independent reviews of the top inflatable SUPs — ranked by rigidity,
          portability, and real-world performance so you buy the right board the first time.
        </p>

        {/* CTA pair */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <a href="#top-picks" className="btn-teal inline-flex items-center gap-2">
            <span>See Top Picks</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#comparison" className="btn-ghost inline-flex items-center gap-2">
            <span>Compare All Boards</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {[
            '3 Boards Tested',
            'Independent Reviews',
            'Editor\'s Choice: Isle Pioneer Pro',
            'Updated April 2026',
          ].map((signal) => (
            <span key={signal} className="text-xs text-white/60 font-medium">
              ✓ {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

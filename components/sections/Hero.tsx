'use client';

import Image from 'next/image';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-100px] left-[-150px]"
        style={{ background: 'rgba(0, 201, 177, 0.07)' }}
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-50px] right-[-100px]"
        style={{ background: 'rgba(56, 189, 248, 0.06)' }}
      />

      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Inflatable paddle board floating on glass-calm turquoise water at golden hour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* 3-stop dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,22,40,0.60) 0%, rgba(10,22,40,0.30) 45%, rgba(10,22,40,0.70) 100%)',
          }}
        />
        {/* Side vignette to keep edges dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/40 via-transparent to-[#0A1628]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
          <Star className="w-3.5 h-3.5 text-amber-glow fill-amber-glow" />
          <span className="text-xs font-semibold text-text-secondary tracking-widest uppercase">
            2026 Expert iSUP Review Guide
          </span>
          <Star className="w-3.5 h-3.5 text-amber-glow fill-amber-glow" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          The Best{' '}
          <span className="gradient-text">Inflatable</span>
          <br />
          Paddle Boards{' '}
          <span className="gradient-text">of 2026</span>
        </h1>

        {/* Sub */}
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}
        >
          We tested the top high-performance iSUPs on the market — ranking them
          on <strong className="text-white">Rigidity</strong>,{' '}
          <strong className="text-white">Portability</strong>, and{' '}
          <strong className="text-white">Weight Capacity</strong> so you
          can invest with confidence.
        </p>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {[
            '3 Boards Tested',
            'Independent Reviews',
            '$800–$1,200 Range',
            'Updated April 2026',
          ].map((signal) => (
            <span key={signal} className="text-xs text-text-muted font-medium">
              ✓ {signal}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-teal" />
      </div>
    </section>
  );
}

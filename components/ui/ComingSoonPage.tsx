import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Clock } from 'lucide-react';

export interface ComingSoonPageProps {
  /** Large eyebrow label (e.g. "Comparison Tool") */
  eyebrow: string;
  /** Main heading — plain text before accent */
  heading: string;
  /** Gradient-highlighted tail of heading */
  headingAccent: string;
  /** 1–2 sentence description */
  description: string;
  /** Teaser bullet points for what's coming */
  features: string[];
  /** Link shown in the "Meanwhile" card */
  primaryHref: string;
  primaryLabel: string;
  /** Optional second link */
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Ambient orb colour (rgba) */
  orbColor?: string;
}

export default function ComingSoonPage({
  eyebrow,
  heading,
  headingAccent,
  description,
  features,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  orbColor = 'rgba(0,201,177,0.06)',
}: ComingSoonPageProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6 relative overflow-hidden">
        {/* Ambient orb */}
        <div
          className="orb w-[600px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4"
          style={{ background: orbColor }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-text-muted mb-8">
            <Clock className="w-3.5 h-3.5" />
            {eyebrow}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 text-text-primary">
            {heading}{' '}
            <span className="gradient-text">{headingAccent}</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-lg mx-auto">
            {description}
          </p>

          {/* Coming soon card */}
          <div className="glass-card p-8 md:p-10 text-left mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-5">
              What&apos;s coming
            </p>
            <ul className="space-y-3" role="list">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span
                    className="mt-0.5 text-xs font-bold rounded-full px-1.5 py-0.5 shrink-0"
                    style={{
                      background: 'rgba(0,201,177,0.12)',
                      color: 'var(--color-glacier-teal)',
                      border: '1px solid rgba(0,201,177,0.2)',
                    }}
                  >
                    Soon
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryHref} className="btn-teal">
              <span>{primaryLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

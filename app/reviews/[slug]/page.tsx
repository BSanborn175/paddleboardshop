import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle, Zap, ChevronLeft } from 'lucide-react';
import { boards } from '@/lib/boards';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreBadge from '@/components/ui/ScoreBadge';

/* ── Types ──────────────────────────────────────────────────────── */
interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Static generation ──────────────────────────────────────────── */
export function generateStaticParams() {
  return boards.map((board) => ({ slug: board.id }));
}

/* ── Metadata ───────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const board = boards.find((b) => b.id === slug);
  if (!board) return {};
  return {
    title: `${board.name} ${board.length} Review 2026 | PaddleBoardShop`,
    description: board.description,
    openGraph: {
      title: `${board.name} ${board.length} Review 2026`,
      description: board.description,
      type: 'article',
      siteName: 'PaddleBoardShop',
    },
  };
}

/* ── Badge colour map ───────────────────────────────────────────── */
const badgeClassMap: Record<string, string> = {
  teal: 'badge-teal',
  sky: 'badge-sky',
  amber: 'badge-amber',
};

/* ── Page ───────────────────────────────────────────────────────── */
export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const board = boards.find((b) => b.id === slug);
  if (!board) notFound();

  const otherBoards = boards.filter((b) => b.id !== board.id);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20 pb-20">

        {/* ── Hero Image Banner ──────────────────────────────────── */}
        <div
          className="relative w-full h-[340px] md:h-[440px] overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, var(--color-surface), var(--color-deep-ocean))',
          }}
        >
          <Image
            src={board.image}
            alt={`${board.name} ${board.length} — 2026 inflatable paddle board review`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(5,13,26,0.85) 0%, rgba(5,13,26,0.3) 60%, transparent 100%)',
            }}
          />

          {/* Badge + name + price overlaid on image */}
          <div className="absolute bottom-6 left-0 right-0 px-6 max-w-4xl mx-auto flex items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span
                className={`${badgeClassMap[board.badgeColor]} self-start text-xs font-bold px-3 py-1.5 rounded-full`}
              >
                {board.badge}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {board.name}{' '}
                <span
                  className="text-lg md:text-xl font-medium"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {board.length}
                </span>
              </h1>
              <p
                className="text-base font-bold"
                style={{ color: 'var(--color-glacier-teal)' }}
              >
                {board.tagline}
              </p>
            </div>
            <p
              className="text-4xl font-extrabold text-white shrink-0"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}
            >
              {board.price}
            </p>
          </div>
        </div>

        {/* ── Content ───────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left col: review body ──────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Back link */}
            <Link
              href="/#reviews"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-text-primary transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              All Reviews
            </Link>

            {/* Best For + Category tags */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Best For
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(0,201,177,0.1)',
                  border: '1px solid rgba(0,201,177,0.25)',
                  color: 'var(--color-glacier-teal)',
                }}
              >
                {board.bestFor}
              </span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {board.category}
              </span>
            </div>

            {/* Description */}
            <div className="glass-card p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                Review Summary
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                {board.description}
              </p>
              {/* Inline price CTA */}
              <a
                href={board.affiliateUrl}
                id={`review-page-inline-cta-${board.id}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 text-sm font-bold mt-5 transition-opacity hover:opacity-80"
                style={{ color: 'var(--color-glacier-teal)' }}
              >
                Check Latest Price {board.price}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Technology */}
            <div className="glass-card p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-5">
                Key Technology
              </p>
              <ul className="space-y-4" role="list">
                {board.keyTech.map((tech) => {
                  const [name, ...rest] = tech.split('—');
                  return (
                    <li key={tech} className="flex items-start gap-3">
                      <Zap
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: 'var(--color-glacier-teal)' }}
                        strokeWidth={2}
                      />
                      <span className="text-sm text-text-secondary leading-snug">
                        <strong className="text-text-primary font-semibold">
                          {name.trim()}
                        </strong>
                        {rest.length > 0 && <> — {rest.join('—').trim()}</>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Pros / Cons */}
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-4"
                    style={{ color: 'var(--color-glacier-teal)' }}
                  >
                    Pros
                  </p>
                  <ul className="space-y-3" role="list">
                    {board.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <CheckCircle
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: 'var(--color-glacier-teal)' }}
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-4">
                    Cons
                  </p>
                  <ul className="space-y-3" role="list">
                    {board.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <XCircle className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Compare other boards */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                Compare Other Boards
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherBoards.map((b) => (
                  <Link
                    key={b.id}
                    href={`/reviews/${b.id}`}
                    className="glass flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0"
                      style={{ background: 'var(--gradient-card)' }}
                    >
                      <Image
                        src={b.image}
                        alt={b.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-text-primary truncate">
                        {b.name}
                      </p>
                      <p className="text-xs text-text-muted">{b.price}</p>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-text-muted ml-auto shrink-0 group-hover:text-teal transition-colors"
                      style={{ color: 'var(--color-glacier-teal)' }}
                    />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right col: sticky buy box ──────────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">

              {/* Performance Scores */}
              <div className="glass-card p-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Performance Scores
                </p>
                <ScoreBadge
                  label="Rigidity"
                  score={board.rigidityScore}
                  color={board.badgeColor}
                />
                <ScoreBadge
                  label="Portability"
                  score={board.portabilityScore}
                  color={board.badgeColor}
                />
                <ScoreBadge
                  label="Weight Capacity"
                  score={board.weightCapacityScore}
                  color={board.badgeColor}
                />
              </div>

              {/* Spec tiles */}
              <div className="glass-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
                  Specifications
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Capacity', value: board.weightCapacity },
                    { label: 'Thickness', value: board.thickness },
                    { label: 'Weight', value: board.weight },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="text-center rounded-xl py-3 px-1"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1">
                        {spec.label}
                      </p>
                      <p className="text-sm font-bold text-text-primary">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy CTA */}
              <div className="glass-card p-6 text-center space-y-4">
                <div>
                  <p className="text-3xl font-extrabold text-text-primary">
                    {board.price}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Current retail price
                  </p>
                </div>
                <a
                  href={board.affiliateUrl}
                  id={`review-page-cta-${board.id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-teal w-full justify-center py-4 text-sm font-bold"
                  aria-label={`Check latest price for ${board.name} — ${board.price}`}
                  data-product={board.name}
                  data-ga-location="review_page"
                >
                  <span>Check Latest Price</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Affiliate link — no extra cost to you.{' '}
                  <Link
                    href="/disclosure"
                    className="underline underline-offset-2 hover:text-text-secondary transition-colors"
                  >
                    Disclosure
                  </Link>
                </p>
              </div>

              {/* Back to all */}
              <Link
                href="/#reviews"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-text-muted hover:text-text-primary transition-colors py-2"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Back to all reviews
              </Link>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

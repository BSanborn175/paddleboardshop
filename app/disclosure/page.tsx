import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, DollarSign, Eye, ExternalLink, BookOpen } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | PaddleBoardShop',
  description:
    'PaddleBoardShop participates in affiliate programmes. Learn how we earn commissions, how that influences our editorial process, and your rights as a reader.',
  robots: { index: true, follow: true },
};

/* ── Small heading helper ──────────────────────────────────────── */
function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-teal shadow-teal-glow">
        <Icon className="h-4 w-4 text-void" strokeWidth={2.5} />
      </div>
      <h2 className="text-lg font-bold text-text-primary">{title}</h2>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function DisclosurePage() {
  const effectiveDate = 'January 1, 2026';
  const lastUpdated = 'April 14, 2026';

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 pb-20 px-6">
        {/* ── Hero banner ─────────────────────────────────────── */}
        <section
          id="disclosure-hero"
          className="mx-auto max-w-3xl text-center mb-14"
        >
          {/* Ambient orb */}
          <div
            className="orb w-72 h-72 opacity-20 left-1/2 -translate-x-1/2 -top-20"
            style={{ background: 'radial-gradient(circle, #00c9b1, transparent 70%)' }}
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            FTC Compliant · Updated {lastUpdated}
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Affiliate{' '}
            <span className="gradient-text">Disclosure</span>
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Transparency is the foundation of trust. Here is exactly how
            PaddleBoardShop earns money, so you can read our reviews with full
            confidence.
          </p>

          <p className="mt-4 text-xs text-text-muted">
            Effective date: {effectiveDate} &nbsp;·&nbsp; Last updated:{' '}
            {lastUpdated}
          </p>
        </section>

        {/* ── Content card ────────────────────────────────────── */}
        <article
          id="disclosure-content"
          className="mx-auto max-w-3xl glass-card p-8 md:p-12 space-y-10"
        >
          {/* 1. What is an affiliate link? */}
          <section id="what-is-affiliate" aria-labelledby="what-is-affiliate-heading">
            <SectionHeading icon={BookOpen} title="What Is an Affiliate Link?" />
            <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                PaddleBoardShop (<em>"we," "our," "us"</em>) is an independent
                editorial website that reviews inflatable stand-up paddle boards
                (iSUPs). To keep this site free for readers, we participate in
                affiliate marketing programmes operated by brands and retailers,
                including but not limited to:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-text-secondary">
                <li>BOTE (bote.com affiliate programme)</li>
                <li>Red Paddle Co (redpaddleco.com affiliate programme)</li>
                <li>Isle Surf &amp; SUP (islesurfandsup.com affiliate programme)</li>
                <li>Amazon Associates Programme</li>
                <li>Other paddle-sports retailer affiliate networks</li>
              </ul>
              <p>
                When you click a link marked with a badge or button such as{' '}
                <strong className="text-text-primary">"Check Price,"</strong>{' '}
                <strong className="text-text-primary">"Buy Now,"</strong> or{' '}
                <strong className="text-text-primary">"See Deal,"</strong> you may
                be directed to a third-party retailer site. If you then complete a
                qualifying purchase, we may receive a commission — typically between
                3 % and 10 % of the sale price.
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* 2. No extra cost to you */}
          <section id="no-extra-cost" aria-labelledby="no-extra-cost-heading">
            <SectionHeading icon={DollarSign} title="No Extra Cost to You — Ever" />
            <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                Affiliate commissions are paid by the retailer, not by you. The
                price you pay for a paddle board is identical whether you click
                our affiliate link or type the retailer's URL directly into your
                browser. We never inflate recommended prices, add hidden fees, or
                receive compensation for negative-to-positive review changes.
              </p>
              <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 px-5 py-4 text-sm">
                <p className="font-semibold text-text-primary mb-1">
                  💡 Plain-English Summary
                </p>
                <p>
                  You shop. You pay the same price. We earn a small thank-you
                  commission from the store. Your wallet is completely unaffected.
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* 3. How affiliates influence (or don't) our editorial process */}
          <section id="editorial-independence" aria-labelledby="editorial-independence-heading">
            <SectionHeading icon={Eye} title="Our Editorial Independence" />
            <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                Affiliate relationships do <strong className="text-text-primary">not</strong>{' '}
                determine which boards we review, which boards we recommend, or
                the scores and ratings we assign. Our editorial policies are:
              </p>
              <ol className="ml-5 list-decimal space-y-2">
                <li>
                  <strong className="text-text-primary">Boards are selected independently.</strong>{' '}
                  We choose boards to review based on market relevance, reader
                  interest, and our proprietary Rigidity &amp; Portability scoring
                  methodology — not on available commission rates.
                </li>
                <li>
                  <strong className="text-text-primary">Scores cannot be purchased.</strong>{' '}
                  No brand has ever paid us to alter a rating. Boards receive the
                  score they earn.
                </li>
                <li>
                  <strong className="text-text-primary">Negative reviews are published.</strong>{' '}
                  If a board underperforms, we say so. Honest feedback protects
                  your purchase decision.
                </li>
                <li>
                  <strong className="text-text-primary">Sponsored content is labelled.</strong>{' '}
                  Any paid or sponsored content will be clearly marked{' '}
                  <em>"Sponsored"</em> or <em>"Paid Partnership"</em> at the top of
                  the page.
                </li>
              </ol>
            </div>
          </section>

          <div className="section-divider" />

          {/* 4. FTC compliance statement */}
          <section id="ftc-compliance" aria-labelledby="ftc-compliance-heading">
            <SectionHeading icon={ShieldCheck} title="FTC Compliance Statement" />
            <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                In accordance with the United States Federal Trade Commission
                Guides Concerning Use of Endorsements and Testimonials in
                Advertising (16 CFR Part 255, as updated through 2026),
                PaddleBoardShop discloses all material connections between this
                site and the brands, retailers, and products we feature.
              </p>
              <p>
                This disclosure is placed:{' '}
                <strong className="text-text-primary">
                  (a) at the top of every article containing affiliate links;
                  (b) adjacent to any affiliate link or "Buy" button; and (c)
                  on this dedicated Disclosure page, linked from the site footer.
                </strong>
              </p>
              <p>
                If you are a consumer residing outside the United States, similar
                disclosure obligations may apply under your local regulations
                (e.g., UK CAP Code, EU Directive 2005/29/EC, Canadian Anti-Spam
                Legislation). We follow the stricter of applicable standards.
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* 5. Third-party affiliate networks */}
          <section id="third-party-networks" aria-labelledby="third-party-networks-heading">
            <SectionHeading icon={ExternalLink} title="Third-Party Affiliate Networks" />
            <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                Some affiliate tracking is facilitated by third-party networks
                (e.g., Impact Radius, ShareASale, AvantLink). These networks use
                cookies to attribute referral credit. See our{' '}
                <Link
                  href="/privacy"
                  className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
                >
                  Privacy &amp; Cookie Policy
                </Link>{' '}
                for full information on how tracking cookies work and how to
                opt out.
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* 6. Contact */}
          <section id="disclosure-contact" aria-labelledby="disclosure-contact-heading">
            <h2 className="text-lg font-bold text-text-primary mb-3">
              Questions? Contact Us
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              If you have questions about this disclosure, our affiliate
              relationships, or review methodology, please email us at{' '}
              <a
                href="mailto:editorial@paddleboardshop.com"
                className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
              >
                editorial@paddleboardshop.com
              </a>
              . We aim to respond within 2 business days.
            </p>
          </section>
        </article>

        {/* ── Bottom nav ──────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted">
          <Link href="/" className="hover:text-teal transition-colors">
            ← Back to Home
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-teal transition-colors">
            Privacy &amp; Cookie Policy
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

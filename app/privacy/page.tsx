import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Lock,
  Database,
  Cookie,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy | PaddleBoardShop',
  description:
    'PaddleBoardShop privacy and cookie policy. Learn how we collect, use, and protect your data, your rights under CCPA, GDPR, and applicable 2026 US state privacy laws.',
  robots: { index: true, follow: true },
};

/* ── Shared section heading ────────────────────────────────────── */
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

/* ── Rights pill helper ────────────────────────────────────────── */
function RightPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 px-5 py-4">
      <p className="font-semibold text-text-primary text-sm mb-1">{title}</p>
      <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function PrivacyPage() {
  const effectiveDate = 'January 1, 2026';
  const lastUpdated = 'April 14, 2026';

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 pb-20 px-6">
        {/* ── Hero banner ─────────────────────────────────────── */}
        <section
          id="privacy-hero"
          className="mx-auto max-w-3xl text-center mb-14 relative"
        >
          {/* Ambient orb */}
          <div
            className="orb w-80 h-80 opacity-15 left-1/2 -translate-x-1/2 -top-24"
            style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }}
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-glow/30 bg-sky-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-glow mb-6">
            <Lock className="h-3.5 w-3.5" />
            CCPA · GDPR · 2026 State Laws
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Privacy &amp;{' '}
            <span className="gradient-text">Cookie Policy</span>
          </h1>

          <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            We respect your privacy. This policy explains plainly what data we
            collect, why we collect it, and every right you have over it.
          </p>

          <p className="mt-4 text-xs text-text-muted">
            Effective date: {effectiveDate} &nbsp;·&nbsp; Last updated:{' '}
            {lastUpdated}
          </p>
        </section>

        {/* ── Content card ────────────────────────────────────── */}
        <article
          id="privacy-content"
          className="mx-auto max-w-3xl glass-card p-8 md:p-12 space-y-10"
        >
          {/* 1. Who We Are */}
          <section id="who-we-are" aria-labelledby="who-we-are-heading">
            <SectionHeading icon={ShieldCheck} title="Who We Are" />
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              PaddleBoardShop operates the website{' '}
              <strong className="text-text-primary">paddleboardshop.com</strong>{' '}
              (the "Site"). For the purposes of applicable privacy laws,
              PaddleBoardShop acts as the data controller for personal
              information collected through the Site. If you have questions
              about this policy, contact us at{' '}
              <a
                href="mailto:privacy@paddleboardshop.com"
                className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
              >
                privacy@paddleboardshop.com
              </a>
              .
            </p>
          </section>

          <div className="section-divider" />

          {/* 2. Data We Collect */}
          <section id="data-we-collect" aria-labelledby="data-we-collect-heading">
            <SectionHeading icon={Database} title="Data We Collect & Why" />
            <div className="space-y-5 text-sm md:text-base text-text-secondary leading-relaxed">

              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  2.1 Data Collected Automatically
                </h3>
                <p className="mb-2">
                  When you visit the Site, our servers and third-party analytics
                  tools may automatically log:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    <strong className="text-text-primary">IP address</strong> —
                    used to infer approximate geographic region (country /
                    state) for analytics aggregation and server-side fraud
                    prevention; never sold or used for targeted advertising.
                  </li>
                  <li>
                    <strong className="text-text-primary">Browser &amp; device type</strong> —
                    used to optimise page rendering.
                  </li>
                  <li>
                    <strong className="text-text-primary">Referring URL &amp; pages visited</strong> —
                    used to understand which content is most useful.
                  </li>
                  <li>
                    <strong className="text-text-primary">Date &amp; time of visit</strong> —
                    used to measure traffic patterns.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  2.2 Data You Provide Voluntarily
                </h3>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    <strong className="text-text-primary">Email address</strong> —
                    if you subscribe to our newsletter or submit a contact form.
                    We will not share your e-mail with third parties for their
                    own marketing purposes.
                  </li>
                  <li>
                    <strong className="text-text-primary">Comments / feedback</strong> —
                    if you submit feedback via an on-site form.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  2.3 Data from Affiliate Networks (Third-Party Sources)
                </h3>
                <p>
                  When you click an affiliate link and complete a purchase on a
                  third-party retailer's site, that retailer's affiliate network
                  will share aggregated, anonymised conversion data with us
                  (e.g., that a commission was earned). We do{' '}
                  <strong className="text-text-primary">not</strong> receive
                  your name, credit-card details, shipping address, or any
                  personally identifiable information from retailer transactions.
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* 3. Cookies & Affiliate Tracking */}
          <section id="cookies" aria-labelledby="cookies-heading">
            <SectionHeading icon={Cookie} title="Cookies & Affiliate Tracking" />
            <div className="space-y-4 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                Cookies are small text files stored on your device when you
                visit a website. We, and the third-party services we rely on,
                use the following categories of cookies:
              </p>

              {/* Cookie table */}
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-text-primary">
                      <th className="pb-2 pr-4 text-left font-semibold">Category</th>
                      <th className="pb-2 pr-4 text-left font-semibold">Examples</th>
                      <th className="pb-2 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">Essential</td>
                      <td className="py-3 pr-4">Session cookies</td>
                      <td className="py-3">Required for basic site function.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">Analytics</td>
                      <td className="py-3 pr-4">Google Analytics 4 (_ga)</td>
                      <td className="py-3">Measure aggregate traffic &amp; engagement. IP anonymisation is enabled.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">
                        Affiliate Attribution
                      </td>
                      <td className="py-3 pr-4">
                        Impact Radius, ShareASale, Amazon (_amzn_ref), AvantLink
                      </td>
                      <td className="py-3">
                        Track which of our referral links leads to a completed
                        purchase so we can receive the applicable commission.
                        These cookies are set by <strong>third-party networks</strong>{' '}
                        on their own domains when you click an affiliate link.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">Preference</td>
                      <td className="py-3 pr-4">cookie-consent</td>
                      <td className="py-3">Stores your cookie consent preferences.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-amber-glow/20 bg-amber-glow/5 px-5 py-4 text-sm">
                <p className="font-semibold text-amber-glow mb-1">
                  ⚠️ Third-Party Affiliate Cookies
                </p>
                <p className="text-text-secondary">
                  Affiliate attribution cookies are placed by{' '}
                  <strong>third-party networks</strong> (Impact Radius,
                  ShareASale, AvantLink, Amazon Associates) when you navigate
                  to a retailer's site. These networks have their own privacy
                  policies; we recommend reviewing them. You can prevent these
                  cookies by using private/incognito browsing or a browser
                  extension that blocks third-party cookies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">
                  Managing Cookies
                </h3>
                <p>
                  Most browsers allow you to refuse or delete cookies via browser
                  settings. Note that essential cookies cannot be disabled without
                  affecting site functionality. For programmatic opt-out links,
                  see the respective networks:{' '}
                  <a
                    href="https://www.networkadvertising.org/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
                  >
                    NAI Opt-Out
                  </a>{' '}
                  ·{' '}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
                  >
                    DAA Opt-Out
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <div className="section-divider" />

          {/* 4. User Data Rights */}
          <section id="user-data-rights" aria-labelledby="user-data-rights-heading">
            <SectionHeading icon={UserCheck} title="Your Data Rights" />
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-5">
              Depending on where you reside, you may have the following rights
              regarding your personal information. We honour these rights for
              all users globally, not just residents of specific jurisdictions.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <RightPill
                title="✅ Right to Access"
                desc="Request a copy of the personal data we hold about you in a portable, machine-readable format."
              />
              <RightPill
                title="✏️ Right to Correction"
                desc="Ask us to correct inaccurate or incomplete personal data we hold about you."
              />
              <RightPill
                title="🗑️ Right to Deletion"
                desc="Request that we delete your personal data (also known as the 'right to be forgotten'). We will honour this request unless we have a legal obligation to retain the data."
              />
              <RightPill
                title="🚫 Right to Opt Out of Sale"
                desc="We do not sell your personal data. If this policy changes, we will notify you and provide a clear opt-out mechanism before any sale occurs."
              />
              <RightPill
                title="⚙️ Right to Restrict Processing"
                desc="Request that we limit how we process your data while a correction or deletion request is pending verification."
              />
              <RightPill
                title="📦 Right to Data Portability"
                desc="Receive your data in a structured, commonly used format (e.g., CSV or JSON) to transfer to another service provider."
              />
            </div>

            <div className="mt-5 rounded-xl border border-teal-500/20 bg-teal-500/5 px-5 py-4 text-sm text-text-secondary">
              <p>
                <strong className="text-text-primary">To exercise any of these rights,</strong>{' '}
                email{' '}
                <a
                  href="mailto:privacy@paddleboardshop.com"
                  className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
                >
                  privacy@paddleboardshop.com
                </a>{' '}
                with the subject line{' '}
                <em>"Privacy Rights Request."</em> We will respond within{' '}
                <strong className="text-text-primary">45 days</strong> (the
                maximum required by CCPA and most US state laws). GDPR-subject
                requests receive a response within{' '}
                <strong className="text-text-primary">30 days</strong>.
              </p>
            </div>

            <div className="mt-4 space-y-2 text-xs text-text-muted">
              <p>
                <strong className="text-text-secondary">California residents (CCPA / CPRA):</strong>{' '}
                You have the right to know, delete, correct, and opt out of the
                sale and sharing of personal information. You also have the right
                to limit use of sensitive personal information. PaddleBoardShop
                does not sell or share personal information as defined by the
                California Consumer Privacy Act.
              </p>
              <p>
                <strong className="text-text-secondary">EEA / UK residents (GDPR / UK GDPR):</strong>{' '}
                Our legal basis for processing is legitimate interests (analytics,
                fraud prevention) and consent (optional cookies). You have the
                right to lodge a complaint with your local Data Protection
                Authority.
              </p>
              <p>
                <strong className="text-text-secondary">Other US state residents:</strong>{' '}
                We honour equivalent rights under the Virginia CDPA, Colorado
                CPA, Connecticut CTDPA, Texas TDPSA, and other 2026-effective
                state privacy statutes.
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* 5. How We Protect Your Data */}
          <section id="data-security" aria-labelledby="data-security-heading">
            <SectionHeading icon={Lock} title="How We Protect Your Data" />
            <div className="space-y-3 text-sm md:text-base text-text-secondary leading-relaxed">
              <p>
                We implement industry-standard technical and organisational
                measures to protect your data, including:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>TLS 1.3 encryption for all data in transit (HTTPS-only).</li>
                <li>Access controls limiting data access to authorised personnel.</li>
                <li>Regular security reviews of third-party service providers.</li>
                <li>Minimal data retention — server logs are purged after 90 days.</li>
              </ul>
              <p>
                While no internet transmission is 100 % secure, we use
                commercially reasonable measures consistent with applicable law.
                In the event of a data breach affecting your rights and
                freedoms, we will notify you within the timeframes required by
                applicable law (72 hours under GDPR; "expedient" under most US
                state laws).
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* 6. Children's Privacy */}
          <section id="childrens-privacy" aria-labelledby="childrens-privacy-heading">
            <SectionHeading icon={Baby} title="Children's Privacy" />
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              This Site is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided personal information to us, contact us immediately at{' '}
              <a
                href="mailto:privacy@paddleboardshop.com"
                className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
              >
                privacy@paddleboardshop.com
              </a>{' '}
              and we will delete it promptly.
            </p>
          </section>

          <div className="section-divider" />

          {/* 7. Policy Updates */}
          <section id="policy-updates" aria-labelledby="policy-updates-heading">
            <SectionHeading icon={RefreshCw} title="Policy Updates" />
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              We may update this Privacy &amp; Cookie Policy from time to time to
              reflect changes in law, our data practices, or our service
              offerings. We will post the updated policy on this page with a
              revised "Last updated" date. For material changes, we will also
              provide a notice in a prominent location on the Site or via email
              (for newsletter subscribers) at least 30 days before the change
              takes effect.
            </p>
          </section>

          <div className="section-divider" />

          {/* 8. Contact */}
          <section id="privacy-contact" aria-labelledby="privacy-contact-heading">
            <SectionHeading icon={Mail} title="Contact Us" />
            <div className="text-sm md:text-base text-text-secondary leading-relaxed space-y-2">
              <p>
                For any privacy-related questions, data rights requests, or
                concerns, please reach us at:
              </p>
              <p>
                📧{' '}
                <a
                  href="mailto:privacy@paddleboardshop.com"
                  className="text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
                >
                  privacy@paddleboardshop.com
                </a>
              </p>
              <p className="text-xs text-text-muted">
                PaddleBoardShop is operated as an online publication.
                We aim to respond to all privacy-related correspondence within
                5 business days.
              </p>
            </div>
          </section>
        </article>

        {/* ── Bottom nav ──────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted">
          <Link href="/" className="hover:text-teal transition-colors">
            ← Back to Home
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/disclosure" className="hover:text-teal transition-colors">
            Affiliate Disclosure
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

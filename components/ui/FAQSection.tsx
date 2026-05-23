'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: readonly FAQ[];
  accentColor?: string;
  heading?: string;
  sectionId?: string;
  headingId?: string;
}

/**
 * FAQSection — shared reusable component.
 *
 * Renders:
 *  1. An animated accordion (expand/collapse on click)
 *  2. Inline FAQPage JSON-LD schema injected into the page <head>
 *     so Google and AI crawlers see structured Q&A data.
 *
 * Usage:
 *   <FAQSection
 *     faqs={FAQS}
 *     accentColor="var(--color-glacier-teal)"
 *     heading="Frequently Asked Questions"
 *     sectionId="faq"
 *     headingId="faq-heading"
 *   />
 */
export default function FAQSection({
  faqs,
  accentColor = 'var(--color-glacier-teal)',
  heading = 'Frequently Asked Questions',
  sectionId = 'faq',
  headingId,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const resolvedHeadingId = headingId ?? `${sectionId}-heading`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section id={sectionId} aria-labelledby={resolvedHeadingId} className="article-section">
      {/* FAQPage JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="article-body">
        <h2 id={resolvedHeadingId} className="article-h2">
          {heading}
        </h2>

        <div className="space-y-3 mt-6" role="list">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={q}
                role="listitem"
                className="glass-card overflow-hidden"
                style={{ borderColor: isOpen ? `${accentColor}40` : 'rgba(255,255,255,0.08)' }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${sectionId}-${i}`}
                  id={`faq-question-${sectionId}-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200"
                  style={{ background: isOpen ? `${accentColor}08` : 'transparent' }}
                >
                  <span className="text-sm font-extrabold text-text-primary leading-snug pr-2">
                    {q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-300"
                    style={{
                      color: accentColor,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  />
                </button>

                {/* Animated answer panel */}
                <div
                  id={`faq-answer-${sectionId}-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${sectionId}-${i}`}
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p className="text-sm text-text-secondary leading-relaxed px-6 pb-6">
                    {a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

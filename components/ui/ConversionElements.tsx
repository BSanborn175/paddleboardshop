'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/*
 * ConversionElements
 * ──────────────────
 * Single scroll-aware floating CTA button.
 *
 *  scrollY 0–599  → nothing (user is in Hero, no overlay needed)
 *  scrollY 600+   → Floating "View Top Picks" button (bottom-right)
 *
 * The sticky bottom price banner was removed — it overlapped the
 * footer area and felt intrusive on a premium layout.
 */

const FLOAT_THRESHOLD = 600; // past hero

function scrollToTopPicks() {
  document.getElementById('top-picks')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function ConversionElements() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showFloating = scrollY >= FLOAT_THRESHOLD;

  return (
    <button
      onClick={scrollToTopPicks}
      className={`floating-cta-btn ${showFloating ? 'is-visible' : 'is-hidden'}`}
      aria-label="Scroll to Top Picks — our 3 recommended boards"
      tabIndex={showFloating ? 0 : -1}
    >
      <span>View Top Picks</span>
      <ArrowUp className="w-3.5 h-3.5 opacity-70" />
    </button>
  );
}

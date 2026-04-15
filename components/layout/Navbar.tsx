'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Waves, ChevronRight } from 'lucide-react';

/* ── Tab config ───────────────────────────────────────────────── */
const TABS = [
  { id: 'top-picks', label: 'SUP Reviews' },
  { id: 'reviews',   label: 'Paddle Guide' },   // 'reviews' = ReviewCards section id
  { id: 'locations', label: 'Locations'   },
  { id: 'gear-bag',  label: 'Gear Bag'    },
] as const;

type TabId = (typeof TABS)[number]['id'];

/* ── Helpers ──────────────────────────────────────────────────── */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Component ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('top-picks');

  /* Glass FX on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-spy — highlight the tab whose section is in view */
  useEffect(() => {
    const ids: TabId[] = TABS.map((t) => t.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the intersecting entry that is highest on the page
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return Math.abs(aTop) - Math.abs(bTop);
          });
        if (visible.length > 0) {
          setActiveTab(visible[0].target.id as TabId);
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    scrollToSection(id);
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10"
      style={{
        background: scrolled
          ? 'rgba(10,22,40,0.92)'
          : 'rgba(10,22,40,0.70)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)',
      }}
    >
      {/* ── Desktop: single-row logo | tabs | cta ─────────────── */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-[68px] items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-teal flex items-center justify-center shadow-teal-strong">
            <Waves className="w-4 h-4 text-void" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-tight text-text-primary">
            Paddle<span className="gradient-text">BoardShop</span>
          </span>
        </Link>

        {/* Tab pill bar */}
        <div
          className="flex items-center gap-0.5 rounded-full px-2 py-1.5"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className="px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg,#00c9b1,#38bdf8)',
                        color: '#050d1a',
                        boxShadow: '0 2px 14px rgba(0,201,177,0.35)',
                      }
                    : {
                        color: 'var(--color-text-secondary)',
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      'var(--color-text-secondary)';
                }}
                aria-current={isActive ? 'true' : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <a id="nav-cta" href="#top-picks" className="btn-teal text-sm py-2.5 px-5 shrink-0">
          <span>Best Boards 2026</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ── Mobile: logo row + scrollable tab row ─────────────── */}
      <div className="md:hidden">
        {/* Brand row */}
        <div className="flex items-center justify-between px-5 h-[56px]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-teal flex items-center justify-center">
              <Waves className="w-3.5 h-3.5 text-void" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-base tracking-tight text-text-primary">
              Paddle<span className="gradient-text">BoardShop</span>
            </span>
          </Link>
          <a
            href="#top-picks"
            className="text-xs font-bold px-3 py-1.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg,#00c9b1,#38bdf8)',
              color: '#050d1a',
            }}
          >
            Best Boards ↗
          </a>
        </div>

        {/* Scrollable tabs */}
        <div
          className="flex gap-2 px-4 pb-2.5 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-mobile-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg,#00c9b1,#38bdf8)',
                        color: '#050d1a',
                      }
                    : {
                        color: 'var(--color-text-secondary)',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

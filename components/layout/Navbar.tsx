'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Waves, ChevronRight, ChevronDown, BookOpen } from 'lucide-react';

/* ── Tab config ───────────────────────────────────────────────── */
const TABS = [
  { id: 'top-picks', label: 'SUP Reviews' },
  { id: 'reviews',   label: 'Paddle Guide' },   // 'reviews' = ReviewCards section id
  { id: 'locations', label: 'Locations'   },
  { id: 'gear-bag',  label: 'Gear Bag'    },
] as const;

type TabId = (typeof TABS)[number]['id'];

/* ── Guides dropdown links ────────────────────────────────────── */
const GUIDE_LINKS = [
  {
    href: '/best-inflatable-paddle-boards-under-1000',
    id: 'nav-guide-under1000',
    label: 'Best Boards Under $1,000',
    desc: '2026 Guide',
  },
  {
    href: '/best-paddle-boards-for-fishing',
    id: 'nav-guide-fishing',
    label: 'Best Boards for Fishing',
    desc: "2026 Buyer's Guide",
  },
  {
    href: '/best-paddle-boards-for-beginners',
    id: 'nav-guide-beginners',
    label: 'Best Boards for Beginners',
    desc: '2026 Complete Guide',
  },
  {
    href: '/isle-vs-bote-vs-red-paddle',
    id: 'nav-guide-brand-comparison',
    label: 'Isle vs BOTE vs Red Paddle Co',
    desc: '2026 Comparison Guide',
  },
  {
    href: '/best-paddle-board-accessories',
    id: 'nav-guide-accessories',
    label: 'Best SUP Accessories',
    desc: '2026 Complete Guide',
  },
  {
    href: '/guides',
    id: 'nav-guides-all',
    label: 'All Guides',
    desc: 'View full library',
  },
] as const;

/* ── Helpers ──────────────────────────────────────────────────── */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Component ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [activeTab, setActiveTab]       = useState<TabId>('top-picks');
  const [guidesOpen, setGuidesOpen]     = useState(false);
  const guidesRef                       = useRef<HTMLDivElement>(null);

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

  /* Close guides dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    if (guidesOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [guidesOpen]);

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
      {/* ── Desktop: single-row logo | tabs | guides | cta ────── */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-[68px] items-center justify-between gap-4">
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

        {/* ── Guides dropdown ─────────────────────────────────── */}
        <div ref={guidesRef} className="relative">
          <button
            id="nav-guides-toggle"
            onClick={() => setGuidesOpen((o) => !o)}
            aria-expanded={guidesOpen}
            aria-haspopup="true"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shrink-0"
            style={
              guidesOpen
                ? {
                    background: 'rgba(0,201,177,0.12)',
                    color: 'var(--color-glacier-teal)',
                    border: '1px solid rgba(0,201,177,0.3)',
                  }
                : {
                    color: 'var(--color-text-secondary)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }
            }
            onMouseEnter={(e) => {
              if (!guidesOpen)
                (e.currentTarget as HTMLElement).style.color =
                  'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              if (!guidesOpen)
                (e.currentTarget as HTMLElement).style.color =
                  'var(--color-text-secondary)';
            }}
          >
            Guides
            <ChevronDown
              className="w-3.5 h-3.5 transition-transform duration-200"
              style={{ transform: guidesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          {guidesOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-card overflow-hidden z-50"
              style={{
                minWidth: '260px',
                borderColor: 'rgba(0,201,177,0.2)',
              }}
            >
              {GUIDE_LINKS.map(({ href, id, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  id={id}
                  onClick={() => setGuidesOpen(false)}
                  className="flex items-start gap-3 px-5 py-3 text-sm transition-colors"
                  style={{ textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  <BookOpen
                    className="w-3.5 h-3.5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-glacier-teal)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-text-primary leading-tight">
                      {label}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
            Best Boards &#8599;
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

          {/* Guides link — mobile */}
          <Link
            href="/guides"
            id="tab-mobile-guides"
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-all duration-200"
            style={{
              color: 'var(--color-glacier-teal)',
              border: '1px solid rgba(0,201,177,0.25)',
              textDecoration: 'none',
            }}
          >
            Guides
          </Link>
        </div>
      </div>
    </nav>
  );
}

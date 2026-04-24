'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

/* ── Primary nav links (flat) ─────────────────────────────────── */
const NAV_LINKS = [
  { href: '/',                              id: 'nav-home',        label: 'Home'        },
  { href: '/compare',                       id: 'nav-reviews',     label: 'Reviews'     },
  { href: '/best-paddle-board-accessories', id: 'nav-accessories', label: 'Accessories' },
] as const;

/* ── Component ────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const guidesRef                   = useRef<HTMLDivElement>(null);

  /* Glass FX on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    if (guidesOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [guidesOpen]);

  const linkStyle = { textDecoration: 'none' };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:           scrolled ? 'rgba(10,22,40,0.92)' : 'rgba(10,22,40,0.70)',
        backdropFilter:       'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom:         `1px solid ${scrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-[68px] items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" id="nav-logo" style={linkStyle} className="shrink-0">
          <span className="font-extrabold text-lg tracking-tight text-text-primary">
            Paddle<span className="gradient-text">BoardShop</span>
          </span>
        </Link>

        {/* Center nav: Home · Reviews · Guides ↓ · Accessories */}
        <div className="flex items-center gap-7">

          {/* Home & Reviews */}
          {NAV_LINKS.slice(0, 2).map(({ href, id, label }) => (
            <Link
              key={id}
              href={href}
              id={id}
              style={linkStyle}
              className="text-sm font-semibold text-text-secondary transition-colors duration-200"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'; }}
            >
              {label}
            </Link>
          ))}

          {/* Guides dropdown */}
          <div ref={guidesRef} className="relative">
            <button
              id="nav-guides-toggle"
              onClick={() => setGuidesOpen((o) => !o)}
              aria-expanded={guidesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
              style={{
                background: 'none',
                border:     'none',
                cursor:     'pointer',
                padding:    0,
                color:      guidesOpen ? 'var(--color-glacier-teal)' : 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => { if (!guidesOpen) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)'; }}
              onMouseLeave={(e) => { if (!guidesOpen) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'; }}
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
                style={{ minWidth: '264px', borderColor: 'rgba(0,201,177,0.2)' }}
              >
                {GUIDE_LINKS.map(({ href, id, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    id={id}
                    onClick={() => setGuidesOpen(false)}
                    className="flex flex-col px-5 py-3.5 text-sm transition-colors"
                    style={{ textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    <span className="font-semibold text-text-primary leading-tight">{label}</span>
                    <span className="text-xs text-text-muted mt-0.5">{desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Accessories */}
          {NAV_LINKS.slice(2).map(({ href, id, label }) => (
            <Link
              key={id}
              href={href}
              id={id}
              style={linkStyle}
              className="text-sm font-semibold text-text-secondary transition-colors duration-200"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'; }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a id="nav-cta" href="/#top-picks" className="btn-teal text-sm py-2.5 px-5 shrink-0">
          <span>Best Boards 2026</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ═══════════════════════════ MOBILE ════════════════════════════ */}
      <div className="md:hidden">

        {/* Logo + CTA row */}
        <div className="flex items-center justify-between px-5 h-[56px]">
          <Link href="/" style={linkStyle}>
            <span className="font-extrabold text-base tracking-tight text-text-primary">
              Paddle<span className="gradient-text">BoardShop</span>
            </span>
          </Link>
          <a
            href="/#top-picks"
            className="text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ background: 'linear-gradient(135deg,#00c9b1,#38bdf8)', color: '#050d1a' }}
          >
            Best Boards &#8599;
          </a>
        </div>

        {/* Secondary link strip */}
        <div className="flex gap-6 px-5 pb-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {[
            { href: '/',                              id: 'mobile-nav-home',        label: 'Home'        },
            { href: '/compare',                       id: 'mobile-nav-reviews',     label: 'Reviews'     },
            { href: '/guides',                        id: 'mobile-nav-guides',      label: 'Guides'      },
            { href: '/best-paddle-board-accessories', id: 'mobile-nav-accessories', label: 'Accessories' },
          ].map(({ href, id, label }) => (
            <Link
              key={id}
              href={href}
              id={id}
              style={linkStyle}
              className="text-xs font-semibold text-text-secondary whitespace-nowrap shrink-0"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

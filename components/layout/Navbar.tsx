'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/',                                  id: 'nav-home',        label: 'Home'        },
  { href: '/#top-picks',                        id: 'nav-best-boards', label: 'Best Boards' },
  { href: '/best-paddle-boards-for-fishing',    id: 'nav-fishing',     label: 'Fishing'     },
  { href: '/best-paddle-boards-for-beginners',  id: 'nav-beginner',    label: 'Beginner'    },
  { href: '/best-paddle-board-accessories',     id: 'nav-accessories', label: 'Accessories' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkStyle = { textDecoration: 'none' };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:           scrolled ? 'rgba(10,22,40,0.96)' : 'rgba(10,22,40,0.75)',
        backdropFilter:       'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom:         `1px solid ${scrolled ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      {/* ══════════════════ DESKTOP ══════════════════ */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-[64px] items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" id="nav-logo" style={linkStyle} className="shrink-0">
          <span className="font-extrabold text-lg tracking-tight text-text-primary">
            Paddle<span className="gradient-text">BoardShop</span>
          </span>
        </Link>

        {/* Centre nav */}
        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, id, label }) => (
            <Link
              key={id}
              href={href}
              id={id}
              style={linkStyle}
              className="text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          id="nav-cta"
          href="/#top-picks"
          className="btn-teal text-sm py-2 px-5 shrink-0"
          style={{ padding: '9px 20px', fontSize: '0.8rem' }}
        >
          <span>Best Boards 2026</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ══════════════════ MOBILE ══════════════════ */}
      <div className="md:hidden">
        {/* Logo + CTA row */}
        <div className="flex items-center justify-between px-5 h-[52px]">
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

        {/* Scrollable link strip */}
        <div
          className="flex gap-6 px-5 pb-3 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {NAV_LINKS.map(({ href, id, label }) => (
            <Link
              key={id}
              href={href}
              id={`mobile-${id}`}
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

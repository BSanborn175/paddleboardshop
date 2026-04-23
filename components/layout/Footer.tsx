import Link from 'next/link';
import { Waves } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-teal flex items-center justify-center">
            <Waves className="w-3 h-3 text-void" strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-sm text-text-secondary">
            PaddleBoardShop
          </span>
        </div>
        <p className="text-xs text-text-muted text-center">
          © {year} PaddleBoardShop. Reviews are independent. Affiliate links
          help support our work at no extra cost to you.
        </p>
        <nav aria-label="Footer links" className="flex items-center gap-4 text-xs text-text-muted flex-wrap justify-center">
          <Link href="/guides" className="hover:text-teal transition-colors">
            Guides
          </Link>
          <Link href="/privacy" className="hover:text-teal transition-colors">
            Privacy &amp; Cookies
          </Link>
          <Link href="/disclosure" className="hover:text-teal transition-colors">
            Disclosure
          </Link>
          <a href="mailto:editorial@paddleboardshop.com" className="hover:text-teal transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

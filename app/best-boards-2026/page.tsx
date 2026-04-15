import { redirect } from 'next/navigation';

/**
 * /best-boards-2026 — redirects to the homepage which IS the
 * definitive 2026 best boards guide. Keeps the URL alive for
 * external links, bookmarks, and SEO without duplicate content.
 */
export default function BestBoards2026() {
  redirect('/');
}

/**
 * affiliateLinks.ts
 * ─────────────────
 * Single source of truth for every external affiliate destination.
 *
 * Keyed by the same slug used in /go/[slug] routes and board/gear IDs.
 * When you receive your affiliate tracking URLs from each program, replace
 * the placeholder values here — nothing else on the site needs to change.
 *
 * URL format: full absolute URL including https://
 *
 * ── How to add a new product ─────────────────────────────────────
 * 1. Add a new entry here: 'your-slug': 'https://...'
 * 2. Set board.affiliateUrl or item.affiliateUrl to '/go/your-slug'
 * 3. That's it — the redirect Route Handler picks it up automatically.
 */

export const AFFILIATE_LINKS: Record<string, string> = {

  // ── Boards ──────────────────────────────────────────────────────
  // TODO: Replace with real affiliate tracking URLs before launch.
  // Apply for each program: Red Paddle Co, BOTE, and ISLE affiliate portals.

  'red-paddle-co-sport':
    'https://www.redpaddleco.com/en-us/paddle-boards/sport/',
    // TODO: Replace with tagged affiliate URL from Red Paddle Co program

  'bote-breeze-aero':
    'https://boteboard.com/products/breeze-aero-inflatable-paddle-board',
    // TODO: Replace with tagged affiliate URL from BOTE affiliate program

  'isle-pioneer-pro':
    'https://www.islepaddleboards.com/products/pioneer-pro-inflatable-paddle-board',
    // TODO: Replace with tagged affiliate URL from ISLE affiliate program

  // ── Accessories & Paddles ────────────────────────────────────────
  // TODO: Replace with real affiliate tracking URLs before launch.

  'starboard-foil-blade-carbon':
    'https://www.star-board.com/stand-up-paddle-boards/paddles/',
    // TODO: Replace with tagged affiliate URL from Starboard program

  'yeti-sidekick-dry-6l':
    'https://www.yeti.com/en_US/bags/sidekick-dry-6l-gear-case/68110000000.html',
    // TODO: Replace with tagged affiliate URL from YETI affiliate program

  'outdoormaster-vortex-pro':
    'https://www.outdoormaster.com/products/outdoormaster-vortex-pro-electric-sup-pump',
    // TODO: Replace with tagged affiliate URL from OutdoorMaster affiliate program

};

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
 * Audit history:
 *   2026-04-15 — Initial setup with placeholder brand URLs
 *   2026-04-16 — FIXED: Red Paddle Co domain changed to red-equipment.us
 *                FIXED: Isle Pioneer Pro domain corrected to islesurfandsup.com
 *                FIXED: YETI Sidekick URL updated (old URL 404'd)
 *                FIXED: OutdoorMaster Vortex Pro URL corrected (old slug 404'd)
 *
 * ── How to add a new product ─────────────────────────────────────
 * 1. Add a new entry here: 'your-slug': 'https://...'
 * 2. Set board.affiliateUrl or item.affiliateUrl to '/go/your-slug'
 * 3. That's it — the redirect Route Handler picks it up automatically.
 *
 * ── Status key ───────────────────────────────────────────────────
 * ✅ VERIFIED  — URL confirmed working (200 OK), correct product page
 * ⚠️  CATEGORY  — URL works but lands on a category, not a single product
 * 🔖 TODO      — Replace with tagged affiliate tracking URL before launch
 */

export const AFFILIATE_LINKS: Record<string, string> = {

  // ── Boards ──────────────────────────────────────────────────────
  // TODO: Replace with real affiliate tracking URLs before launch.
  // Apply for each program: Red Equipment, BOTE, and ISLE affiliate portals.

  'red-paddle-co-sport':
    // ✅ VERIFIED 2026-04-16 — Red Paddle Co rebranded to Red Equipment (red-equipment.us)
    // Old URL (redpaddleco.com/en-us/paddle-boards/sport/) returned HTTP 500
    // 🔖 TODO: Replace with tagged affiliate URL from Red Equipment affiliate program
    'https://red-equipment.us/products/113-sport-msl-inflatable-paddle-board-package-1',

  'bote-breeze-aero':
    // ✅ VERIFIED 2026-04-16 — Correct product page on boteboard.com
    // 🔖 TODO: Replace with tagged affiliate URL from BOTE affiliate program
    'https://boteboard.com/products/breeze-aero-inflatable-paddle-board',

  'isle-pioneer-pro':
    // ✅ VERIFIED 2026-04-16 — Old domain (islepaddleboards.com) 404'd; correct domain is islesurfandsup.com
    // 🔖 TODO: Replace with tagged affiliate URL from ISLE affiliate program
    'https://islesurfandsup.com/products/pioneer-pro',

  // ── Accessories & Paddles ────────────────────────────────────────
  // TODO: Replace with real affiliate tracking URLs before launch.

  'starboard-foil-blade-carbon':
    // ⚠️  CATEGORY 2026-04-16 — URL confirmed working (200 OK) but lands on the
    //     Starboard paddles category page, not the specific Foil Blade Carbon.
    //     Update to a direct product URL once you have the affiliate link.
    // 🔖 TODO: Replace with tagged affiliate URL from Starboard program
    'https://www.star-board.com/stand-up-paddle-boards/paddles/',

  'yeti-sidekick-dry-6l':
    // ✅ VERIFIED 2026-04-16 — Old URL (68110000000.html) 404'd in browser;
    //     correct YETI URL structure is /bags/bags-accessories/sidekick-dry-6l.html
    //     Note: YETI blocks server-side crawlers (403) but works in real browsers.
    // 🔖 TODO: Replace with tagged affiliate URL from YETI affiliate program
    'https://www.yeti.com/bags/bags-accessories/sidekick-dry-6l.html',

  // ── New guide articles — Amazon-tagged URLs ─────────────────────
  // Used by: /best-inflatable-paddle-boards-under-1000
  //          /best-paddle-boards-for-fishing
  // Affiliate tag: paddleboar030-20 (embedded in each URL)

  'bote-breeze-aero-amazon':
    // BOTE Breeze Aero — Amazon search (both new guide articles)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=bote+breeze+aero&tag=paddleboar030-20',

  'isle-pioneer-amazon':
    // Isle Pioneer 10'6" — Amazon search (under-$1000 article)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=isle+pioneer+paddle+board&tag=paddleboar030-20',

  'roc-sup-amazon':
    // ROC Inflatable Paddle Board — Amazon search (under-$1000 article)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=roc+inflatable+paddle+board&tag=paddleboar030-20',

  'isle-pioneer-pro-amazon':
    // Isle Pioneer Pro — Amazon search (fishing guide)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=isle+pioneer+pro+paddle+board&tag=paddleboar030-20',

  'funwater-sup-amazon':
    // FunWater Inflatable SUP — Amazon search (fishing guide)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=funwater+inflatable+paddle+board&tag=paddleboar030-20',

  'yeti-sidekick-amazon':
    // YETI Sidekick Dry 6L — Amazon-tagged (fishing accessories)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=yeti+sidekick+dry+6l&tag=paddleboar030-20',

  'outdoormaster-vortex-amazon':
    // OutdoorMaster Vortex Pro — Amazon-tagged (fishing accessories)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=outdoormaster+vortex+pro&tag=paddleboar030-20',

  'carbon-fiber-sup-paddle':
    // Carbon Fiber SUP Paddle — Amazon search (fishing accessories)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=carbon+fiber+sup+paddle&tag=paddleboar030-20',

  // ── Brand-level comparison article slugs ─────────────────────
  // Used by: /isle-vs-bote-vs-red-paddle
  // Brand search pages — broader than product-specific slugs above.

  'isle-brand-amazon':
    // Isle Paddle Boards — brand-level Amazon search
    // 🔖 TODO: Replace with direct category link once confirmed
    'https://www.amazon.com/s?k=isle+paddle+board&tag=paddleboar030-20',

  'bote-brand-amazon':
    // BOTE Paddle Boards — brand-level Amazon search
    // 🔖 TODO: Replace with direct category link once confirmed
    'https://www.amazon.com/s?k=bote+paddle+board&tag=paddleboar030-20',

  'red-paddle-brand-amazon':
    // Red Paddle Co Boards — brand-level Amazon search
    // 🔖 TODO: Replace with direct category link once confirmed
    'https://www.amazon.com/s?k=red+paddle+co+board&tag=paddleboar030-20',

  // ── Electric pump article slugs ───────────────────────────────
  // Used by: /best-electric-pump-for-paddle-boards

  'seamax-supump-pro':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=seamax+supump+pro&tag=paddleboar030-20',

  'flextail-max-pump':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=flextail+max+pump+2+pro&tag=paddleboar030-20',

  'red-paddle-electric-pump':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=red+paddle+co+electric+pump&tag=paddleboar030-20',

  'irocker-electric-pump':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=irocker+electric+pump&tag=paddleboar030-20',

  // ── Paddle article slugs ──────────────────────────────────────
  // Used by: /best-paddle-board-paddles

  'werner-camano-paddle':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=werner+camano+sup+paddle&tag=paddleboar030-20',

  'aqua-bound-manta-ray':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=aqua+bound+manta+ray+carbon+sup&tag=paddleboar030-20',

  'bote-rover-paddle':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=bote+rover+aero+paddle&tag=paddleboar030-20',

  'gili-carbon-paddle':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=gili+carbon+fiber+sup+paddle&tag=paddleboar030-20',

  'bending-branches-whiskey':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=bending+branches+whiskey+carbon+sup+paddle&tag=paddleboar030-20',

  // ── Accessories roundup slugs ─────────────────────────────────
  // Used by: /best-paddle-board-accessories

  'yeti-hopper-flip-8':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=yeti+hopper+flip+8&tag=paddleboar030-20',

  'rtic-soft-pack-cooler':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=rtic+soft+pack+cooler&tag=paddleboar030-20',

  'earth-pak-dry-bag':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=earth+pak+waterproof+dry+bag&tag=paddleboar030-20',

  'ho-stevie-sup-leash':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=ho+stevie+sup+leash&tag=paddleboar030-20',

  'onyx-movevent-pfd':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=onyx+movevent+dynamic+pfd&tag=paddleboar030-20',

  'gopro-hero-13':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=gopro+hero+13+black&tag=paddleboar030-20',

  'ram-mounts-sup':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=ram+mounts+sup+phone+mount&tag=paddleboar030-20',

  'creatures-stomp-pad':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=creatures+of+leisure+sup+stomp+pad&tag=paddleboar030-20',

  'fcs-h4-sup-fin':
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=fcs+h4+sup+fin&tag=paddleboar030-20',

  'outdoormaster-vortex-pro':
    // ✅ VERIFIED 2026-04-16 — Old URL slug 404'd; correct slug includes typo "protable"
    //     (this is OutdoorMaster's actual published product URL — not a typo on our end)
    // 🔖 TODO: Replace with tagged affiliate URL from OutdoorMaster affiliate program
    'https://outdoormaster.com/products/vortex-pro-rechargeable-and-protable-electric-pump',

  // ── Dog paddleboarding article slugs ─────────────────────────
  // Used by: /paddleboarding-with-your-dog

  'dog-life-jacket-amazon':
    // Dog life jacket / PFD for paddleboarding — Amazon search
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=dog+life+jacket+paddleboard&tag=paddleboar030-20',

  'sup-coil-leash-amazon':
    // Coil SUP leash — recommended for river/flatwater with dogs aboard
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=sup+coil+leash+paddleboard&tag=paddleboar030-20',

  'dog-waterproof-dry-bag-amazon':
    // Waterproof dry bag for dog supplies, treats, towel on SUP
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=waterproof+dry+bag+10l&tag=paddleboar030-20',

  'non-slip-deck-pad-amazon':
    // Replacement full-deck traction pad — recommended for dogs to avoid claw slippage
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=sup+full+deck+pad+non+slip&tag=paddleboar030-20',

  'bote-breeze-aero-dog':
    // BOTE Breeze Aero — recommended board in dog paddleboarding guide
    // Reuses the existing bote-breeze-aero-amazon slug destination
    'https://www.amazon.com/s?k=bote+breeze+aero&tag=paddleboar030-20',

  'isle-pioneer-pro-dog':
    // Isle Pioneer Pro — recommended board in dog paddleboarding guide (high weight cap)
    // 🔖 TODO: Replace with direct ASIN link once confirmed
    'https://www.amazon.com/s?k=isle+pioneer+pro+paddle+board&tag=paddleboar030-20',

};

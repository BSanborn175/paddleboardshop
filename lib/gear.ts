export interface GearItem {
  id: string;
  name: string;
  brand: string;
  category: 'paddle' | 'dry-bag' | 'pump' | 'accessory';
  categoryLabel: string;
  price: string;
  headline: string;
  description: string;
  keyFeatures: string[];
  specs: Array<{ label: string; value: string }>;
  affiliateUrl: string;
  badge: string;
  badgeColor: 'teal' | 'sky' | 'amber';
}

/* ── Paddle Guide ─────────────────────────────────────────────── */
export const paddleItems: GearItem[] = [
  {
    id: 'starboard-foil-blade-carbon',
    name: '2026 Foil Blade Carbon',
    brand: 'Starboard',
    category: 'paddle',
    categoryLabel: 'Performance Paddle',
    price: '$349',
    headline: 'Carbon 1-Piece — Elite Acceleration',
    description:
      'The Starboard 2026 Foil Blade Carbon is engineered for paddlers who refuse to compromise. The one-piece carbon construction eliminates all joint flex — every stroke delivers 100 % impulse to the water for elite-level acceleration off the catch.',
    keyFeatures: [
      'Full carbon 1-piece — zero joint flex, maximum power transfer per stroke',
      'Foil Blade geometry — hydrodynamic entry angle for instant acceleration',
      'Ultra-light 500 g construction — dramatically reduces arm fatigue on long-distance tours',
    ],
    specs: [
      { label: 'Material', value: 'Full Carbon' },
      { label: 'Weight', value: '500 g' },
      { label: 'Blade Area', value: '95 sq in' },
    ],
    affiliateUrl: '/go/starboard-foil-blade-carbon',
    badge: '#1 Performance Paddle',
    badgeColor: 'teal',
  },
];

/* ── Gear Bag ─────────────────────────────────────────────────── */
export const gearItems: GearItem[] = [
  {
    id: 'yeti-sidekick-dry-6l',
    name: 'Sidekick Dry 6L',
    brand: 'YETI',
    category: 'dry-bag',
    categoryLabel: 'Dry Bag',
    price: '$79',
    headline: 'HydroShield Magnetic Closure',
    description:
      'The YETI Sidekick Dry 6L pairs military-grade waterproofing with YETI\'s signature bomber construction. The HydroShield Magnetic Closure seals in a single motion — no rolling, no buckles, no fumbling while you\'re on the water.',
    keyFeatures: [
      'HydroShield Magnetic Closure — seals and opens in one motion, every time',
      'RF-welded construction — waterproof to IPX7 (1 m submersion for 30 min)',
      'MOLLE-compatible lash points — clips directly onto board bungee systems',
    ],
    specs: [
      { label: 'Volume', value: '6 L' },
      { label: 'Rating', value: 'IPX7' },
      { label: 'Closure', value: 'Magnetic' },
    ],
    affiliateUrl: '/go/yeti-sidekick-dry-6l',
    badge: 'Best Dry Bag 2026',
    badgeColor: 'sky',
  },
  {
    id: 'outdoormaster-vortex-pro',
    name: 'Vortex Pro Pump',
    brand: 'OutdoorMaster',
    category: 'pump',
    categoryLabel: 'Electric Pump',
    price: '$189',
    headline: '20 PSI Cordless — Max Rigidity',
    description:
      'The OutdoorMaster Vortex Pro is the first cordless electric iSUP pump to reach 20 PSI — the pressure threshold for near-hardboard rigidity on premium boards like the Red Paddle Co Sport. Fully inflate any iSUP in under 10 minutes, no outlet required.',
    keyFeatures: [
      '20 PSI maximum output — high enough to maximise stiffness on premium iSUPs',
      'Fully cordless — USB-C rechargeable with 12 V car-adapter backup option',
      'Auto shut-off at target PSI — set it, walk away, board inflated to spec',
    ],
    specs: [
      { label: 'Max PSI', value: '20 PSI' },
      { label: 'Power', value: 'USB-C / 12V' },
      { label: 'Inflate', value: '< 10 min' },
    ],
    affiliateUrl: '/go/outdoormaster-vortex-pro',
    badge: 'Top Pump 2026',
    badgeColor: 'amber',
  },
];

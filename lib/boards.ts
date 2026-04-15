export interface Board {
  id: string;
  name: string;
  length: string;
  tagline: string;
  category: string;
  price: string;
  rigidityScore: number;
  portabilityScore: number;
  weightCapacityScore: number;
  weightCapacity: string;
  thickness: string;
  weight: string;
  image: string;
  affiliateUrl: string;
  badge: string;
  badgeColor: 'teal' | 'sky' | 'amber';
  keyTech: string[];
  pros: string[];
  cons: string[];
  description: string;
  shortDescription: string; // 2-sentence conversion copy for leaner card view
  bestFor: string;          // Comparison table column
}

export const boards: Board[] = [
  {
    id: 'red-paddle-co-sport',
    name: 'Red Paddle Co Sport',
    length: "11'3\"",
    tagline: 'Premium Touring Perfection',
    category: 'Premium Touring',
    price: '$1,149',
    rigidityScore: 9.7,
    portabilityScore: 8.9,
    weightCapacityScore: 8.5,
    weightCapacity: '220 lbs',
    thickness: '4.7"',
    weight: '19 lbs',
    image: '/images/red-paddle-sport.png',
    affiliateUrl: '/go/red-paddle-co-sport',
    badge: 'Most Rigid',
    badgeColor: 'teal',
    keyTech: [
      'RSS Battens — MSL-fused stiffening rods eliminate flex at the rails',
      'Diamond-Cut Traction Pad — Full-length deck coverage for superior grip',
      'MSL Fusion Technology — Military-spec construction for near-hardboard rigidity',
    ],
    pros: [
      'Industry-leading rigidity via RSS batten system',
      'Full-length diamond-cut traction pad for all-day comfort',
      'Best-in-class 5-year warranty',
      'Race-ready touring hull profile',
    ],
    cons: ['Premium price point', 'Lower weight capacity vs competitors'],
    description:
      'The Red Paddle Co Sport 11\'3" is the undisputed rigidity champion of 2026. Its RSS batten system and MSL Fusion construction deliver a platform so stiff it rivals carbon-fiber hardboards — while rolling down to a pack size that fits in an overhead locker.',
    shortDescription:
      'The <strong>RSS batten system</strong> and <strong>MSL Fusion</strong> construction deliver near-hardboard rigidity in an iSUP that rolls into an overhead-locker pack. The gold standard for touring performance in 2026.',
    bestFor: 'Touring & racing',
  },
  {
    id: 'bote-breeze-aero',
    name: 'BOTE Breeze Aero',
    length: "10'8\"",
    tagline: 'The Everyday Flagship',
    category: 'All-Around',
    price: '$849',
    rigidityScore: 8.8,
    portabilityScore: 9.6,
    weightCapacityScore: 9.2,
    weightCapacity: '300 lbs',
    thickness: '6"',
    weight: '17.5 lbs',
    image: '/images/bote-breeze-aero.png',
    affiliateUrl: '/go/bote-breeze-aero',
    badge: 'Best Value',
    badgeColor: 'sky',
    keyTech: [
      'AeroULTRA™ Construction — Proprietary fusion process for max air retention',
      'MAGNEPOD™ System — Magnetic accessory mounting — no straps, no fumbling',
      'Aero-Specific Rails — Reinforced drop-stitch edge for clean, stable glide',
    ],
    pros: [
      'MAGNEPOD magnetic accessory system is a game-changer',
      'AeroULTRA tech delivers best-in-class air retention',
      'Feather-light 17.5 lbs for effortless carry',
      'Highest weight capacity in our test group',
    ],
    cons: ['Narrower deck than Red Paddle Co', 'Smaller center fin box'],
    description:
      'The BOTE Breeze Aero 10\'8" is the board for paddlers who want premium technology without the touring-only specialization. The MAGNEPOD system alone is worth the price of entry — snap on a cooler, a tackle bag, or a fishing rod holder without a single strap.',
    shortDescription:
      'The <strong>MAGNEPOD</strong> magnetic accessory system snaps coolers, tackle bags, and rod holders on without a single strap. Lightest board in our test group at <strong>17.5 lbs</strong> with the highest weight capacity at <strong>300 lbs</strong>.',
    bestFor: 'All-around paddling',
  },
  {
    id: 'isle-pioneer-pro',
    name: 'Isle Pioneer Pro',
    length: "10'6\"",
    tagline: 'The Utility King',
    category: 'All-Around / Utility',
    price: '$999',
    rigidityScore: 9.4,
    portabilityScore: 9.1,
    weightCapacityScore: 9.8,
    weightCapacity: '335 lbs',
    thickness: '6"',
    weight: '18 lbs',
    image: '/images/isle-pioneer-pro.png',
    affiliateUrl: '/go/isle-pioneer-pro',
    badge: "Editor's Choice",
    badgeColor: 'amber',
    keyTech: [
      'ISLE-LINK™ Rail System — Modular accessory attachment for racks, bags & more',
      'Ultra-Dense Drop-Stitch Core — Near-hardboard rigidity at 15 PSI',
      'Triple-Layer PVC Rails — Military-grade durability for rough water use',
    ],
    pros: [
      'ISLE-LINK system unlocks infinite customization',
      'Highest weight capacity of any board in this guide',
      'Near-hardboard rigidity at standard inflation pressure',
      'Versatile shape handles flatwater to light surf',
    ],
    cons: ['Slightly heavier than the BOTE', 'Accessory ecosystem costs extra'],
    description:
      'The Isle Pioneer Pro 10\'6" is the most versatile board in our 2026 lineup. The ISLE-LINK rail system transforms it from a clean-water touring board to a fully rigged adventure platform in minutes. With the highest weight capacity in our test group and near-hardboard rigidity, it earns its "Utility King" title.',
    shortDescription:
      'The <strong>ISLE-LINK</strong> rail system transforms it from touring board to fully rigged adventure platform in minutes. Best-in-class <strong>335 lbs weight capacity</strong> — the highest of any board in this guide.',
    bestFor: 'Adventure & heavy loads',
  },
];

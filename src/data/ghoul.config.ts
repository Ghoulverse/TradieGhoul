/**
 * Ghoul Site Configuration
 */

export interface CrossLink {
  id: string;
  name: string;
  domain: string;
  icon: string;
  color: string;
  realm: string;
  live: boolean;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  category: 'core' | 'pro' | 'tool' | 'refill' | 'limited';
  volume: string;
  price: string;
  features: string[];
  heroIngredient?: string;
}

export interface GhoulConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  isLeader: boolean;
  products: Product[];
  crossLinks: CrossLink[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  gameUrl: string;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  science: {
    title: string;
    subtitle: string;
    description: string;
    adaptation: string;
    stats: { label: string; value: string }[];
  };
  marketSize: string;
  traction: { label: string; value: string; status: 'complete' | 'in-progress' | 'upcoming' }[];
  ipStatus: string;
  ipClasses: string[];
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
  fundingAsk: string;
  valuation: string;
  equityOffered: string;
  projectedRevenue: { year: string; amount: string; sources: string }[];
  roiTarget: string;
  partnerships: { type: string; description: string }[];
  revenueStreams: { stream: string; description: string; timeline: string }[];
}

export const config: GhoulConfig = {
  id: "tradie",
  name: "TRADIE GHOUL",
  tagline: "Industrial Strength Spirit",
  description:
    "Built tough for tough builds. TRADIE GHOUL handles the industrial-grade messes that would break lesser entities.",
  domain: "https://www.tradieghoul.com",
  icon: "🔧",
  isLeader: false,

  products: [
    {
      name: "Heavy-Duty Hand Cleaner",
      tagline: "Grease doesn't stand a chance",
      description: "Industrial-grade hand scrub with pumice and citrus solvent. Cuts through oil, grease, paint, and sealant without drying skin.",
      category: "core",
      volume: "500ml",
      price: "$18.99 AUD",
      features: ["Pumice abrasive", "Citrus solvent", "Skin conditioners"],
      heroIngredient: "Industrial Ectoplasm™",
    },
    {
      name: "Workshop Degreaser",
      tagline: "Cuts oil like it's nothing",
      description: "Heavy-duty solvent degreaser for floors, machinery, and workbenches. Emulsifies petroleum-based contaminants for easy wipe-off.",
      category: "core",
      volume: "1L",
      price: "$24.99 AUD",
      features: ["Petroleum emulsifier", "Non-corrosive on metal", "Low-residue finish"],
      heroIngredient: "Industrial Ectoplasm™",
    },
    {
      name: "Oil & Grease Destroyer",
      tagline: "The nuclear option for stains",
      description: "Maximum-strength formula for embedded oil stains on concrete, pavers, and driveways. Penetrates 5mm deep to lift years of buildup.",
      category: "core",
      volume: "750ml",
      price: "$22.99 AUD",
      features: ["5mm penetration", "Concrete-safe", "Pressure-wash compatible"],
      heroIngredient: "Industrial Ectoplasm™",
    },
    {
      name: "Concrete Dissolver",
      tagline: "Melt concrete, not your hands",
      description: "Professional-grade concrete and mortar dissolver for tools, mixers, and accidental spills. Reacts with calcium compounds to soften hardened material.",
      category: "pro",
      volume: "2L",
      price: "$49.99 AUD",
      features: ["Calcium-reactive formula", "Non-fuming", "Tool-safe"],
      heroIngredient: "Industrial Ectoplasm™",
    },
    {
      name: "Tool Restoration Kit",
      tagline: "Bring rusted tools back from the dead",
      description: "Complete kit with rust converter, protective oil, and micro-abrasive pads. Restores hand tools, sockets, and blades to working condition.",
      category: "pro",
      volume: "Kit",
      price: "$59.99 AUD",
      features: ["Rust converter + oil", "Micro-abrasive pads", "Protective coating"],
      heroIngredient: "Industrial Ectoplasm™",
    },
    {
      name: "Industrial Scrub Brush Set",
      tagline: "Built for the workshop",
      description: "Set of 3 heavy-duty brushes with replaceable heads — stiff bristle, wire, and nylon. Ergonomic grips for extended use.",
      category: "tool",
      volume: "3 Pack",
      price: "$29.99 AUD",
      features: ["Replaceable heads", "Ergonomic grip", "3 bristle types"],
    },
    {
      name: "The Tool Chest Caddy",
      tagline: "Organized chaos",
      description: "Steel-reinforced plastic caddy with dividers, handle, and spill tray. Holds 8+ bottles and brushes in a workshop-proof shell.",
      category: "tool",
      volume: "Caddy",
      price: "$54.99 AUD",
      features: ["Steel-reinforced", "Spill tray", "8-bottle capacity"],
    },
    {
      name: "Hand Cleaner Refill",
      tagline: "Bulk strength for bulk mess",
      description: "2L bulk refill drum for the Heavy-Duty Hand Cleaner. Economical for workshops, garages, and trade vans.",
      category: "refill",
      volume: "2L Drum",
      price: "$29.99 AUD",
      features: ["Workshop bulk size", "Pump-dispense ready", "Same formula"],
      heroIngredient: "Industrial Ectoplasm™",
    },
    {
      name: "Summer Site Survival Pack",
      tagline: "Limited summer release",
      description: "A heavy-duty kit for the Australian summer — hand cleaner, degreaser, sun-screen wipes, and electrolyte drink mix. Built for the site.",
      category: "limited",
      volume: "Kit",
      price: "$69.99 AUD",
      features: ["4 products + canteen", "Site-ready", "Summer only"],
      heroIngredient: "Industrial Ectoplasm™",
    },
  ],

  crossLinks: [
    {
      id: "ghoulverse",
      name: "GHOULVERSE",
      domain: "https://www.ghoulverse.com",
      icon: "🌌",
      color: "#00f0ff",
      realm: "The Universe",
      live: true,
    },
    {
      id: "goo",
      name: "GOO GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/goo/",
      icon: "👻",
      color: "#ff00ff",
      realm: "The Goo Dimension",
      live: true,
    },
    {
      id: "party",
      name: "PARTY GHOUL",
      domain: "https://www.partyghoul.com",
      icon: "🎉",
      color: "#ff00ff",
      realm: "The Neon District",
      live: true,
    },
    {
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
      live: true,
    },
    {
      id: "garden",
      name: "GARDEN GHOUL",
      domain: "https://www.gardenghoul.com",
      icon: "🌿",
      color: "#22c55e",
      realm: "The Verdant Wilds",
      live: true,
    },
    {
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
      live: true,
    },
    {
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
      live: true,
    },
    {
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "sport",
      name: "SPORT GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/sport/",
      icon: "🏆",
      color: "#f97316",
      realm: "The Arena",
      live: false,
    },
    {
      id: "googoo",
      name: "GOO GOO",
      domain: "https://www.ghoulverse.com/ghouls/googoo/",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Nursery",
      live: false,
    },
    {
      id: "kid",
      name: "KID GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/kid/",
      icon: "🧒",
      color: "#ef4444",
      realm: "The Playground",
      live: false,
    },
    {
      id: "teen",
      name: "TEEN GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/teen/",
      icon: "🎧",
      color: "#8b5cf6",
      realm: "The Hangout",
      live: false,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/scholar/",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full investor deck and financial projections.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  science: {
    title: "The Science",
    subtitle: "Industrial Ectoplasm™",
    description: "Every TRADIE GHOUL product is powered by Industrial Ectoplasm™ — a proprietary enzyme complex engineered for maximum molecular aggression. This technology breaks down petroleum, concrete, rust, and industrial contaminants at the chemical level.",
    adaptation: "For the Industrial Wastes, we developed a maximum-strength variant that doesn't flinch at concrete, grease, or rust. It's the same core technology — just dialled up to the limits of chemical engineering.",
    stats: [
      { label: "Grease Cut Speed", value: "< 10 sec" },
      { label: "Concrete Penetration", value: "5mm" },
      { label: "Rust Reversal", value: "Grade 3" },
      { label: "Industrial Certification", value: "ISO 9001" },
    ],
  },

  marketSize: "$180B global industrial cleaning market",
  traction: [
    { label: "Character Websites", value: "6 Live", status: "complete" },
    { label: "GOO GHOUL™ Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "GHOULVERSE Game", value: "Live", status: "complete" },
    { label: "Brand Partnerships", value: "Seeking First Deals", status: "upcoming" },
  ],
  ipStatus: "Trademark filed — Class 7 (power tools & machines), Class 8 (hand tools) and Class 3 (industrial cleaning preparations).",
  ipClasses: [
    "Class 7 — Power tools, machines & industrial equipment",
    "Class 8 — Hand tools, implements & trade hardware",
    "Class 3 — Industrial cleaning preparations & degreasers",
    "Class 37 — Repair, maintenance & construction services",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" },
    { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" },
    { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" },
    { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" },
    { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" },
    { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL household cleaners", "Vertical-specific product lines"], status: "upcoming" },
  ],

  fundingAsk: "$250,000 AUD",
  valuation: "$1,250,000 pre-money",
  equityOffered: "20%",
  projectedRevenue: [
    { year: "Year 1", amount: "$200,000", sources: "Brand sponsorships, event appearances, affiliate commissions" },
    { year: "Year 2", amount: "$560,000", sources: "Licensing, events, merch royalties, content" },
    { year: "Year 3", amount: "$1,200,000", sources: "Full licensing engine + product sales" },
  ],
  roiTarget: "5–8x over 3–5 years (40–70% IRR)",
  partnerships: [
    { type: "Brand Sponsorships", description: "Existing companies in each vertical pay to associate with our character IP at events and online." },
    { type: "Affiliate Marketing", description: "Partner products featured on ghoul websites — we earn commission on referred sales." },
    { type: "Event Appearances", description: "Mascots appear at sports events, conventions, retail launches — appearance fees + brand exposure." },
    { type: "Licensing", description: "Brands license ghoul characters for their own marketing, packaging, and promotions." },
  ],
  revenueStreams: [
    { stream: "Sponsorships", description: "Sector-specific brand deals per ghoul", timeline: "Year 1" },
    { stream: "Events", description: "Mascot appearances and activations", timeline: "Year 1" },
    { stream: "Affiliate", description: "Commission on partner product sales", timeline: "Year 1" },
    { stream: "Licensing", description: "Character IP licensing to brands", timeline: "Year 2" },
    { stream: "Merchandise", description: "Royalties on plush, apparel, accessories", timeline: "Year 2" },
    { stream: "Animation", description: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2" },
    { stream: "Products", description: "Owned product lines (GOO GHOUL cleaners first)", timeline: "Year 3" },
  ],
};

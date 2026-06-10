// All copy is original to REVERN. Imagery is placeholder pending asset replacement.

export const BRAND = "REVERN";

export const announce = "Crafted in Germany · Complimentary shipping over €120";

export const models = [
  { id: "glide", name: "Glide", tag: "Straight-pull", line: "Fast, fluid, instinctive.", img: "/assets/model-glide.jpg" },
  { id: "heritage", name: "Heritage", tag: "The legend", line: "The locked action that built the name.", img: "/assets/model-heritage.jpg" },
  { id: "field", name: "Field", tag: "All-rounder", line: "Dependable from first light to last.", img: "/assets/model-field.jpg" },
  { id: "summit", name: "Summit", tag: "Everyman", line: "Pure craft, ready for anywhere.", img: "/assets/model-summit.jpg" },
  { id: "atelier", name: "Atelier", tag: "Bespoke", line: "Hand-built to a single hunter's hand.", img: "/assets/model-atelier.jpg" },
];

export const nav = [
  { label: "Glide", href: "#models" },
  { label: "Heritage", href: "#models" },
  { label: "Field", href: "#models" },
  { label: "Summit", href: "#models" },
  {
    label: "World", href: "#stories", mega: [
      { h: "Discover", links: ["Stories", "The Journal", "Field & Practice", "Hunt & Hunter"] },
      { h: "Ownership", links: ["Dealer Locator", "Warranty Extension", "Workshop", "Service Book"] },
      { h: "Community", links: ["Starter Packages", "In the Field", "Events & Fairs", "Master Workshop"] },
      { h: "Read", links: ["Across the Fjords", "The Quiet Formula", "The Old Stag"] },
    ], feature: { img: "/assets/box-expedition.jpg", t: "Iceland, on foot", s: "A REVERN Summit at the edge of the map." }
  },
  {
    label: "Shop", href: "#categories", mega: [
      { h: "Equipment", links: ["Hunting Gear", "Bags & Cases", "Knives", "Rifle Accessories", "Suppressors", "Magazines"] },
      { h: "Apparel", links: ["Jackets", "Knitwear & Tees", "Caps & Accessories", "Originals Collection"] },
      { h: "Highlights", links: ["New Arrivals", "Best Sellers", "Gift Cards", "Sale"] },
    ], feature: { img: "/assets/cat-originals.jpg", t: "Originals Collection", s: "The cloth our wild ones are cut from." }
  },
  { label: "Service", href: "#footer" },
  { label: "Company", href: "#footer" },
];

export const hero = {
  eyebrow: "The Originals Collection",
  title: "Where heritage meets the hunt.",
  sub: "Honest cloth, hard wear, and the quiet confidence of a name a century in the making.",
  cta: "Discover Originals",
  img: "/assets/hero-desktop.jpg",
  imgMobile: "/assets/hero-mobile.jpg",
};

export const statement = {
  title: "There is only one standard. Ours.",
  body: "REVERN was born in the workshop and proven in the field. We build hunting rifles the slow way — full-steel actions, hand-fitted barrels and a precision that earns its keep season after season. A century on, the people who trust their shot to a REVERN are still the ones who refuse to compromise.",
};

export const categoryBoxes = [
  { title: "The Expedition", img: "/assets/box-expedition.jpg" },
  { title: "Starter Packages", img: "/assets/box-starter.jpg" },
  { title: "Field Equipment", img: "/assets/box-gear.jpg" },
];

export const deals = {
  banner: "/assets/deals-banner.jpg",
  title: "Field Deals",
  items: [
    { cat: "Apparel", name: "Original Crest Tee — Matte Olive", now: "29.95", old: "39.95", off: "-25%", front: "/assets/p-tshirt-olive.png", back: "/assets/p-tshirt-olive-alt.png" },
    { cat: "Knives", name: "Folding Hunter Knife — Forest", now: "79.95", old: "119.00", off: "-33%", front: "/assets/p-knife-green.png", back: "/assets/p-knife-green-closed.png" },
    { cat: "Equipment", name: "Field Hatchet — Original", now: "69.95", old: "94.95", off: "-26%", front: "/assets/p-axe.png", back: "/assets/p-axe.png" },
    { cat: "Apparel", name: "Heritage 'Legend' Tee — Sand", now: "24.95", old: "39.95", off: "-37%", front: "/assets/p-tshirt-legend.png", back: "/assets/p-tshirt-legend-alt.png" },
    { cat: "Knives", name: "Original Hunting Knife — Large", now: "89.95", old: "124.95", off: "-28%", front: "/assets/p-knife-large.png", back: "/assets/p-knife-small.png" },
    { cat: "Apparel", name: "System Tee — Matte Olive", now: "29.95", old: "39.95", off: "-25%", front: "/assets/p-tshirt-system.png", back: "/assets/p-tshirt-system-alt.png" },
    { cat: "Apparel", name: "Trail Tee — Sand", now: "24.95", old: "39.95", off: "-37%", front: "/assets/p-tshirt-sand.png", back: "/assets/p-tshirt-sand-alt.png" },
  ],
};

export const glideBanner = {
  eyebrow: "New",
  title: "Meet the Glide.",
  body: "A bolt that moves like a thought. The straight-pull Glide cycles fast and impossibly smooth — a whole new class of REVERN shooting, with nothing standing between you and the moment.",
  cta: "Experience Glide",
  img: "/assets/banner-glide.jpg",
};

export const categories = {
  title: "Our categories",
  sub: "Everything for the hunt — and the long way home.",
  items: [
    { label: "Originals Collection", img: "/assets/cat-originals.jpg" },
    { label: "Apparel", img: "/assets/cat-apparel.jpg" },
    { label: "Equipment", img: "/assets/cat-equipment.jpg" },
    { label: "Knives", img: "/assets/cat-knives.jpg" },
    { label: "Bags", img: "/assets/cat-bags.jpg" },
    { label: "The Journal", img: "/assets/cat-stories.jpg" },
  ],
};

export const shopTheLook = {
  title: "All REVERN.",
  img: "/assets/shopthelook.jpg",
  hotspots: [
    { top: 32, left: 15, idx: 0 },
    { top: 42, left: 50, idx: 1 },
    { top: 80, left: 12, idx: 2 },
  ],
  products: [
    { name: "Original Pack 35L", desc: "Roomy 35-litre pack — light, balanced and built for long carries.", img: "/assets/p-backpack.png" },
    { name: "Tornado Softshell — Olive", desc: "Functional, light and weather-shedding, with fleece lining and smart pockets.", img: "/assets/p-jacket.png" },
    { name: "Glide Max Rifle", desc: "The straight-pull flagship — fast cycling, full-steel, made to last.", img: "/assets/p-rifle-glide.png" },
    { name: "Original Field Knife", desc: "A hand-finished blade that holds its edge through the season.", img: "/assets/p-knife-large.png", noSpot: true },
  ],
};

export const modelsSection = {
  title: "The rifles",
  sub: "Four lines, one obsession. Find the REVERN built for your hunt.",
};

export const stories = {
  title: "REVERN Stories",
  sub: "Lived passion, honest craft and the moments that stay with you long after the season ends.",
  items: [
    { date: "26 Mar 2026", tag: "Expedition", title: "Across the Icelandic fjords with the Summit", img: "/assets/story-expedition.jpg" },
    { date: "16 Feb 2026", tag: "Heritage", title: "The quiet formula behind a century-old action", img: "/assets/story-anniversary.jpg" },
    { date: "16 Feb 2026", tag: "The Hunt", title: "Mysterium: the old stag and the long wait", img: "/assets/story-stag.jpg" },
  ],
};

export const summitBanner = {
  eyebrow: "Craft",
  title: "Pure craft. No frills.",
  body: "The Summit is the everyman's rifle done right — stripped back to what matters, ready for anywhere at any hour. The one you reach for without thinking, and never have to think about again.",
  cta: "Explore Summit",
  img: "/assets/banner-summit.jpg",
};

export const newsletter = {
  title: "Get the news that actually counts.",
  body: "Field stories, new arrivals and quiet drops — straight to your inbox, never more than you'd want.",
  placeholder: "Your email address",
  cta: "Subscribe",
  note: "By subscribing you agree to our privacy policy. Unsubscribe anytime.",
};

export const footer = {
  tagline: "Precision hunting rifles and field outfitting, crafted the honest way since 1911.",
  contact: { email: "hello@revern.com", phone: "+49 7562 000 000", hours: "Mon–Fri 9–12 · Mon–Thu 13–16:30" },
  columns: [
    { h: "Company", links: ["About REVERN", "Careers", "Sustainability", "Code of Conduct", "Press"] },
    { h: "Service", links: ["Contact", "Dealer Locator", "Downloads", "Warranty", "Returns & Repairs"] },
    { h: "Shop", links: ["Rifles", "Apparel", "Equipment", "Knives", "Sale"] },
    { h: "Discover", links: ["Newsletter", "Events & Fairs", "The Journal", "Master Workshop"] },
  ],
  social: ["Instagram", "Facebook", "YouTube", "Vimeo"],
  pay: ["/assets/pay-paypal.svg", "/assets/pay-card.svg", "/assets/pay-dhl.webp"],
  legal: "Firearms, essential firearm components and ammunition are supplied only to holders of a valid acquisition permit. Sound suppressors and certain optics are subject to national regulation and may not be available in every region.",
  bottomLinks: ["Terms", "Imprint", "Privacy", "Cookie Settings"],
};

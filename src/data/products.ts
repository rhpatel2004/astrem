export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  material: string;
  features: { title: string; description: string }[];
  applications: string[];
  sizes: string[];
  colorOptions?: string[];
  customSizing?: string;
  image: { desktop: string; mobile: string };
}

export const products: Product[] = [
  {
    slug: "kids-tent-pipe",
    image: { desktop: "/images/tent-desktop.jpeg", mobile: "/images/tent-mobile.jpeg" },
    name: "Kids Tent Pipe",
    shortDescription: "Lightweight PVC pipes designed for children's tent and play structures.",
    fullDescription:
      "Astrem Kids Tent Pipes are specially manufactured lightweight PVC pipes ideal for building children's play tents, canopy frames, and DIY play structures. These pipes are safe, smooth-edged, and easy to assemble, making them perfect for creating fun and durable play setups for kids.",
    features: [
      { title: "Lightweight", description: "Easy for assembly and handling" },
      { title: "Smooth Finish", description: "Safe edges for children's use" },
      { title: "Durable", description: "Long-lasting PVC construction" },
      { title: "Easy Assembly", description: "Simple push-fit connections" },
    ],
    applications: [
      "Children's play tents",
      "Canopy frames",
      "DIY play structures",
      "Event tent frameworks",
    ],
    material: "PVC",
    sizes: ["11mm Outer Diameter", "13mm Outer Diameter"],
    colorOptions: ["White", "Black"],
    customSizing:
      "We offer custom length cutting for tent pipe orders. If your tent design requires specific pipe lengths, we can cut pipes to your exact measurements. Ideal for tent manufacturers and bulk buyers with unique frame dimensions.",
  },
  {
    slug: "rack-pipe",
    image: { desktop: "/images/rack-desktop.jpeg", mobile: "/images/rack-mobile.jpeg" },
    name: "Rack Pipe",
    shortDescription: "Sturdy PVC pipes for shoe racks, display stands, and storage solutions.",
    fullDescription:
      "Astrem Rack Pipes are purpose-built PVC pipes designed for assembling shoe racks, display stands, storage shelves, and other household or commercial organizing structures. These pipes offer excellent load-bearing capacity with a clean white finish, making them ideal for building neat and durable rack systems.",
    features: [
      { title: "Load Bearing", description: "Strong enough to hold heavy items on racks" },
      { title: "Clean Finish", description: "Smooth white surface for a polished look" },
      { title: "Versatile", description: "Suitable for various rack and stand designs" },
      { title: "Easy to Cut", description: "Can be cut to custom lengths easily" },
    ],
    applications: [
      "Shoe racks",
      "Display stands",
      "Storage shelves",
      "Wardrobe organizers",
    ],
    material: "PVC",
    sizes: ["12mm Outer Diameter", "13mm Outer Diameter", "19mm Outer Diameter"],
    colorOptions: ["White", "Black"],
    customSizing:
      "Custom length cutting available on request. Whether you need pipes for a specific rack design or display stand, we can cut to your exact length requirements.",
  },
  {
    slug: "plumbing-pipe",
    image: { desktop: "/images/plumbing-desktop.jpeg", mobile: "/images/plumbing-mobile.jpeg" },
    name: "Plumbing Pipe",
    shortDescription: "High-quality PVC plumbing pipes for residential and commercial water supply systems.",
    fullDescription:
      "Astrem Plumbing Pipes are manufactured to the highest quality standards for reliable water supply and drainage systems. Built for both residential and commercial applications, these pipes offer excellent chemical resistance, leak-proof joints, and a long service life.",
    features: [
      { title: "Leak-Proof", description: "Precision-engineered joints for zero leakage" },
      { title: "Chemical Resistant", description: "Withstands harsh water conditions" },
      { title: "High Pressure Rating", description: "Suitable for pressurized water systems" },
      { title: "Corrosion Free", description: "No rust or degradation over time" },
    ],
    applications: [
      "Residential water supply",
      "Commercial plumbing",
      "Drainage systems",
      "Agricultural irrigation",
    ],
    material: "uPVC",
    sizes: ["1/2 Inch", "3/4 Inch", "1 Inch"],
  },
  {
    slug: "conduit-pipe",
    image: { desktop: "/images/conduit-desktop.jpeg", mobile: "/images/conduit_mobile.jpeg" },
    name: "Conduit Pipe",
    shortDescription: "Rigid PVC conduit pipes for safe electrical wiring and cable protection.",
    fullDescription:
      "Astrem Conduit Pipes provide a safe and durable pathway for electrical wiring in residential, commercial, and industrial buildings. These rigid PVC pipes protect cables from physical damage, moisture, and environmental hazards while ensuring easy wire pulling during installation.",
    features: [
      { title: "Flame Retardant", description: "Self-extinguishing PVC material" },
      { title: "Moisture Proof", description: "Protects wiring from water damage" },
      { title: "Impact Resistant", description: "Withstands physical stress during construction" },
      { title: "Smooth Interior", description: "Easy wire pulling during installation" },
    ],
    applications: [
      "Residential electrical wiring",
      "Commercial building installations",
      "Industrial cable management",
      "Underground cable protection",
    ],
    material: "PVC",
    sizes: ["19mm", "20mm", "25mm"],
  },
  {
    slug: "casing-capping-pipe",
    image: { desktop: "/images/casing-desktop.jpeg", mobile: "/images/casing-mobile.jpeg" },
    name: "Casing Capping",
    shortDescription: "PVC casing and capping systems for neat, concealed surface wiring.",
    fullDescription:
      "Astrem Casing Capping offers a clean and professional solution for surface-mounted electrical wiring. The two-part casing and capping system allows easy installation and future maintenance access while keeping wires neatly concealed and protected along walls and ceilings.",
    features: [
      { title: "Neat Finish", description: "Clean, professional look for surface wiring" },
      { title: "Easy Access", description: "Snap-on capping for simple maintenance" },
      { title: "Durable", description: "Rigid PVC withstands daily wear" },
      { title: "Termite Proof", description: "PVC is immune to termite damage" },
    ],
    applications: [
      "Surface-mounted wiring in homes",
      "Office and commercial interiors",
      "Renovation and retrofit projects",
      "Ceiling wire management",
    ],
    material: "PVC",
    sizes: ["25 x 32mm"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

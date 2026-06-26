export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: { title: string; description: string }[];
  applications: string[];
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "kids-tent-pipe",
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
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Color", value: "White" },
      { label: "Sizes", value: "Available in multiple sizes" },
    ],
  },
  {
    slug: "plumbing-pipe",
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
    specs: [
      { label: "Material", value: "uPVC" },
      { label: "Color", value: "White" },
      { label: "Sizes", value: "Available in multiple sizes" },
    ],
  },
  {
    slug: "conduit-pipe",
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
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Color", value: "White" },
      { label: "Sizes", value: "Available in multiple sizes" },
    ],
  },
  {
    slug: "casing-capping-pipe",
    name: "Casing Capping Pipe",
    shortDescription: "PVC casing and capping systems for neat, concealed surface wiring.",
    fullDescription:
      "Astrem Casing Capping Pipes offer a clean and professional solution for surface-mounted electrical wiring. The two-part casing and capping system allows easy installation and future maintenance access while keeping wires neatly concealed and protected along walls and ceilings.",
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
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Color", value: "White" },
      { label: "Sizes", value: "Available in multiple sizes" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

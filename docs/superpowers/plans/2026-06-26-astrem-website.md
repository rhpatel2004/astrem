# Astrem Business Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page, mobile-first business website for Astrem Pipe (PVC pipe manufacturer) with product catalog, about page, and contact form.

**Architecture:** Next.js 16 App Router with Tailwind CSS 4. Static frontend-only site. Product data stored in a TypeScript data file. Contact form powered by Web3Forms. All pages share a global header, footer, and floating WhatsApp button.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Web3Forms API

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx                          (root layout: fonts, metadata, header, footer, whatsapp)
│   ├── page.tsx                            (home page)
│   ├── globals.css                         (tailwind + custom theme)
│   ├── about/
│   │   └── page.tsx                        (about us page)
│   ├── contact/
│   │   └── page.tsx                        (contact us page)
│   └── products/
│       ├── page.tsx                        (products overview)
│       ├── kids-tent-pipe/
│       │   └── page.tsx
│       ├── plumbing-pipe/
│       │   └── page.tsx
│       ├── conduit-pipe/
│       │   └── page.tsx
│       └── casing-capping-pipe/
│           └── page.tsx
├── components/
│   ├── Header.tsx                          (sticky nav with mobile hamburger + products dropdown)
│   ├── Footer.tsx                          (3-col footer, black bg)
│   ├── WhatsAppButton.tsx                  (floating bottom-right button)
│   ├── CTABanner.tsx                       (reusable black CTA strip)
│   ├── ProductCard.tsx                     (product category card with hover effect)
│   ├── ContactForm.tsx                     (web3forms-powered form)
│   ├── StatCounter.tsx                     (animated count-up number)
│   └── ScrollReveal.tsx                    (fade-in-up on scroll wrapper)
├── data/
│   └── products.ts                         (all product category data)
└── lib/
    └── constants.ts                        (business info: phone, email, address, whatsapp link)
```

---

### Task 1: Clean Boilerplate & Set Up Foundation

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Create: `src/lib/constants.ts`
- Create: `src/data/products.ts`

- [ ] **Step 1: Replace globals.css with project theme**

Replace the contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), Arial, Helvetica, sans-serif;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

- [ ] **Step 2: Create constants file**

Create `src/lib/constants.ts`:

```typescript
export const BUSINESS = {
  brandName: "Astrem Pipe",
  companyName: "Mortex Polymers",
  tagline: "Trusted PVC Pipe Manufacturer Since 25+ Years",
  phone: "9913761276",
  whatsappLink: "https://wa.me/919913761276?text=Hi%2C%20I%27m%20interested%20in%20Astrem%20Pipes.%20Please%20share%20more%20details.",
  email: "mortexpolymers@gmail.com",
  address: "Plot 61, 62, Umiya Ind. Estate, Near Kavya Mill, Jolwa Gam Road, Jolwa, Surat-394305, Gujarat",
  city: "Surat",
  state: "Gujarat",
  web3formsKey: "", // User adds their Web3Forms access key
} as const;
```

- [ ] **Step 3: Create products data file**

Create `src/data/products.ts`:

```typescript
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
```

- [ ] **Step 4: Clean up layout.tsx with proper metadata**

Replace `src/app/layout.tsx` with root layout that has SEO metadata, font setup, and wraps children (header/footer added in later task):

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Astrem Pipe | Trusted PVC Pipe Manufacturer in Surat",
    template: "%s | Astrem Pipe",
  },
  description:
    "Astrem Pipe by Mortex Polymers — 25+ years of trusted PVC pipe manufacturing in Surat, Gujarat. Kids tent pipes, plumbing pipes, conduit pipes & casing capping pipes.",
  keywords: [
    "PVC pipe manufacturer",
    "Astrem Pipe",
    "Mortex Polymers",
    "PVC pipes Surat",
    "plumbing pipes",
    "conduit pipes",
    "casing capping pipes",
    "kids tent pipes",
  ],
  openGraph: {
    title: "Astrem Pipe | Trusted PVC Pipe Manufacturer",
    description:
      "25+ years of quality PVC pipe manufacturing. Plumbing, conduit, casing capping & kids tent pipes.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 5: Replace page.tsx with minimal placeholder**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold">Astrem Pipe</h1>
    </main>
  );
}
```

- [ ] **Step 6: Verify dev server runs**

Run: `npm run dev`
Expected: Server starts on localhost:3000, shows "Astrem Pipe" heading with clean white page.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "chore: clean boilerplate, add product data and constants"
```

---

### Task 2: Build Global Components (Header, Footer, WhatsApp Button)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/WhatsAppButton.tsx`
- Create: `src/components/ScrollReveal.tsx`
- Create: `src/components/CTABanner.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Header component**

Create `src/components/Header.tsx` — sticky header with logo on left, nav links center, WhatsApp CTA right. Mobile hamburger menu with slide-out nav. Products nav item has a dropdown showing all 4 categories.

Key behavior:
- `"use client"` component (needs state for mobile menu + scroll detection)
- On scroll past 20px, add subtle shadow via `scrolled` state
- Mobile menu: hamburger icon toggles a full-height slide-in panel from the right
- Products dropdown: on desktop hover, on mobile accordion-style expand
- Close mobile menu on link click
- WhatsApp "Get Quote" button visible on desktop, hidden in mobile nav (replaced by in-menu link)

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/kids-tent-pipe", label: "Kids Tent Pipe" },
      { href: "/products/plumbing-pipe", label: "Plumbing Pipe" },
      { href: "/products/conduit-pipe", label: "Conduit Pipe" },
      { href: "/products/casing-capping-pipe", label: "Casing Capping Pipe" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/astrem-logo.jpeg"
            alt="Astrem Pipe Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-tight">ASTREM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {link.label}
                  <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-black"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:flex"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Get Quote
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 transform bg-white transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="ml-4 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 mt-4 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-base font-medium text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Quote on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/products/kids-tent-pipe", label: "Kids Tent Pipe" },
  { href: "/products/plumbing-pipe", label: "Plumbing Pipe" },
  { href: "/products/conduit-pipe", label: "Conduit Pipe" },
  { href: "/products/casing-capping-pipe", label: "Casing Capping Pipe" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/astrem-logo.jpeg"
                alt="Astrem Pipe Logo"
                width={40}
                height={40}
                className="rounded-full brightness-0 invert"
              />
              <span className="text-lg font-bold">ASTREM PIPE</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              A product of {BUSINESS.companyName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Trusted PVC pipe manufacturer with over 25 years of experience,
              delivering quality pipes across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {BUSINESS.address}
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:+91${BUSINESS.phone}`} className="transition-colors hover:text-white">
                  +91 {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-white">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {BUSINESS.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Create WhatsApp floating button**

Create `src/components/WhatsAppButton.tsx`:

```tsx
import { BUSINESS } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
```

- [ ] **Step 4: Create ScrollReveal component**

Create `src/components/ScrollReveal.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 5: Create CTABanner component**

Create `src/components/CTABanner.tsx`:

```tsx
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function CTABanner({
  title = "Need PVC Pipes in Bulk? Let's Talk.",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-black px-4 py-16 text-center text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-gray-400">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Wire Header, Footer, WhatsAppButton into layout.tsx**

Update `src/app/layout.tsx` to import and render Header, Footer, and WhatsAppButton wrapping `{children}`:

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Astrem Pipe | Trusted PVC Pipe Manufacturer in Surat",
    template: "%s | Astrem Pipe",
  },
  description:
    "Astrem Pipe by Mortex Polymers — 25+ years of trusted PVC pipe manufacturing in Surat, Gujarat. Kids tent pipes, plumbing pipes, conduit pipes & casing capping pipes.",
  keywords: [
    "PVC pipe manufacturer",
    "Astrem Pipe",
    "Mortex Polymers",
    "PVC pipes Surat",
    "plumbing pipes",
    "conduit pipes",
    "casing capping pipes",
    "kids tent pipes",
  ],
  openGraph: {
    title: "Astrem Pipe | Trusted PVC Pipe Manufacturer",
    description:
      "25+ years of quality PVC pipe manufacturing. Plumbing, conduit, casing capping & kids tent pipes.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Verify everything renders**

Run: `npm run dev`
Expected: Page shows header with logo + nav, "Astrem Pipe" placeholder content, footer with 3 columns, floating WhatsApp button bottom-right. Mobile responsive hamburger menu works.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat: add header, footer, whatsapp button, scroll reveal, CTA banner"
```

---

### Task 3: Build Home Page

**Files:**
- Create: `src/components/ProductCard.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create ProductCard component**

Create `src/components/ProductCard.tsx`:

```tsx
import Link from "next/link";

export default function ProductCard({
  name,
  slug,
  description,
  large = false,
}: {
  name: string;
  slug: string;
  description: string;
  large?: boolean;
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image placeholder */}
      <div
        className={`flex items-center justify-center bg-gray-100 ${
          large ? "h-56 sm:h-64" : "h-44 sm:h-52"
        }`}
      >
        <div className="text-center text-gray-400">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-1 text-xs">Product Image</p>
        </div>
      </div>
      <div className={`p-4 ${large ? "sm:p-6" : ""}`}>
        <h3 className="text-lg font-semibold text-black group-hover:underline">
          {name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-black">
          View Details
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Build full Home page**

Replace `src/app/page.tsx`:

```tsx
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        {/* Geometric pipe pattern background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pipes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="12" fill="none" stroke="black" strokeWidth="2" />
                <circle cx="30" cy="30" r="6" fill="none" stroke="black" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pipes)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            {BUSINESS.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
            Quality PVC pipes for plumbing, electrical, and construction needs.
            Manufactured by {BUSINESS.companyName}, {BUSINESS.city}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto"
            >
              Explore Products
            </Link>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-black px-8 py-3.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white sm:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">Our Products</h2>
              <p className="mt-3 text-gray-600">PVC pipe solutions for every need</p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <ScrollReveal key={product.slug}>
                <ProductCard
                  name={product.name}
                  slug={product.slug}
                  description={product.shortDescription}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Astrem */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
              Why Choose Astrem
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {[
              { number: "25+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "4", label: "Product Lines", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { number: "1000+", label: "Happy Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { number: "Pan India", label: "Delivery Network", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                    <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-black sm:text-3xl">{stat.number}</p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Built on Trust & Quality
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              With over 25 years of manufacturing expertise, {BUSINESS.companyName} has
              established Astrem as a trusted name in PVC pipes across India. From
              plumbing to electrical solutions, our commitment to quality and
              innovation drives everything we do.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-black underline underline-offset-4 hover:no-underline"
            >
              Learn more about us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
```

- [ ] **Step 3: Verify home page renders**

Run: `npm run dev`
Expected: Full home page with hero, product grid, stats, about preview, CTA banner. Mobile responsive.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: build home page with hero, products, stats, about preview, CTA"
```

---

### Task 4: Build Products Overview & Category Pages

**Files:**
- Create: `src/app/products/page.tsx`
- Create: `src/app/products/kids-tent-pipe/page.tsx`
- Create: `src/app/products/plumbing-pipe/page.tsx`
- Create: `src/app/products/conduit-pipe/page.tsx`
- Create: `src/app/products/casing-capping-pipe/page.tsx`

- [ ] **Step 1: Create Products overview page**

Create `src/app/products/page.tsx`:

```tsx
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Astrem's complete range of PVC pipes — kids tent pipes, plumbing pipes, conduit pipes, and casing capping pipes. Quality pipes for every application.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black sm:text-5xl">Our Products</h1>
            <p className="mt-3 text-lg text-gray-600">
              Quality PVC pipe solutions for every application
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <ScrollReveal key={product.slug}>
                <ProductCard
                  name={product.name}
                  slug={product.slug}
                  description={product.shortDescription}
                  large
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
```

- [ ] **Step 2: Create a shared product category page builder**

Since all 4 product category pages follow the same template, create each page importing data from `products.ts`. Each page is a separate file for SEO (unique metadata per page).

Create `src/app/products/kids-tent-pipe/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import { BUSINESS } from "@/lib/constants";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

const product = getProductBySlug("kids-tent-pipe")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.fullDescription.slice(0, 160),
};

export default function KidsTentPipePage() {
  return (
    <>
      {/* Hero Image */}
      <section className="bg-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-20 sm:py-28">
          <div className="text-center text-gray-400">
            <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-2 text-sm">Product Image — {product.name}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb + Header */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-black">Products</Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{product.fullDescription}</p>
        </div>
      </section>

      {/* Specs Table */}
      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Specifications</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="py-3 pr-6 font-semibold">Specification</th>
                    <th className="py-3 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.label} className="border-b border-gray-200">
                      <td className="py-3 pr-6 font-medium text-black">{spec.label}</td>
                      <td className="py-3 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features */}
      <ScrollReveal>
        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Features & Benefits</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature.title} className="rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-black">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Applications */}
      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Applications</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((app) => (
                <li key={app} className="flex items-center gap-2 text-gray-700">
                  <svg className="h-4 w-4 shrink-0 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <CTABanner
        title={`Interested in ${product.name}? Get a Quote`}
        subtitle="Contact us for pricing, bulk orders, and custom requirements."
      />
    </>
  );
}
```

- [ ] **Step 3: Create plumbing pipe page**

Create `src/app/products/plumbing-pipe/page.tsx` — identical structure to kids-tent-pipe page but with:
- `const product = getProductBySlug("plumbing-pipe")!;`
- Function name: `PlumbingPipePage`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

const product = getProductBySlug("plumbing-pipe")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.fullDescription.slice(0, 160),
};

export default function PlumbingPipePage() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-20 sm:py-28">
          <div className="text-center text-gray-400">
            <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-2 text-sm">Product Image — {product.name}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-black">Products</Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{product.fullDescription}</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Specifications</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="py-3 pr-6 font-semibold">Specification</th>
                    <th className="py-3 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.label} className="border-b border-gray-200">
                      <td className="py-3 pr-6 font-medium text-black">{spec.label}</td>
                      <td className="py-3 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Features & Benefits</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature.title} className="rounded-lg border border-gray-200 p-5">
                  <h3 className="font-semibold text-black">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Applications</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((app) => (
                <li key={app} className="flex items-center gap-2 text-gray-700">
                  <svg className="h-4 w-4 shrink-0 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <CTABanner
        title={`Interested in ${product.name}? Get a Quote`}
        subtitle="Contact us for pricing, bulk orders, and custom requirements."
      />
    </>
  );
}
```

- [ ] **Step 4: Create conduit pipe page**

Create `src/app/products/conduit-pipe/page.tsx` — identical structure with:
- `const product = getProductBySlug("conduit-pipe")!;`
- Function name: `ConduitPipePage`

(Full code same as Step 3 but with slug "conduit-pipe" and function name `ConduitPipePage`)

- [ ] **Step 5: Create casing capping pipe page**

Create `src/app/products/casing-capping-pipe/page.tsx` — identical structure with:
- `const product = getProductBySlug("casing-capping-pipe")!;`
- Function name: `CasingCappingPipePage`

(Full code same as Step 3 but with slug "casing-capping-pipe" and function name `CasingCappingPipePage`)

- [ ] **Step 6: Verify all product pages**

Run: `npm run dev`
Visit: `/products`, `/products/kids-tent-pipe`, `/products/plumbing-pipe`, `/products/conduit-pipe`, `/products/casing-capping-pipe`
Expected: All pages render with correct product data, breadcrumbs, specs tables, features, applications, and CTAs.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: add products overview and 4 product category pages"
```

---

### Task 5: Build About Us Page

**Files:**
- Create: `src/components/StatCounter.tsx`
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create StatCounter component**

Create `src/components/StatCounter.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-black sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
}
```

- [ ] **Step 2: Build About Us page**

Create `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Astrem Pipe by Mortex Polymers — over 25 years of PVC pipe manufacturing excellence in Surat, Gujarat. Quality, trust, and innovation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Company Story */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-5xl">
                About Astrem Pipe
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  <strong className="text-black">Astrem</strong> is a trusted brand of{" "}
                  <strong className="text-black">{BUSINESS.companyName}</strong>, a PVC
                  pipe manufacturing company with over{" "}
                  <strong className="text-black">25 years of experience</strong> in the
                  industry.
                </p>
                <p>
                  Established in Surat, Gujarat, we have grown from a modest
                  manufacturing unit to a well-recognized name in the PVC pipe market.
                  Our state-of-the-art facility in Jolwa produces a wide range of
                  pipes — from plumbing and electrical conduit to specialized kids tent
                  pipes and casing capping solutions.
                </p>
                <p>
                  At Astrem, quality is not just a promise — it&apos;s our foundation.
                  Every pipe we manufacture undergoes rigorous quality checks to ensure
                  it meets the highest standards. Our commitment to innovation,
                  durability, and customer satisfaction has earned us the trust of
                  thousands of clients across India.
                </p>
                <p>
                  Whether you&apos;re a contractor, retailer, or homeowner, Astrem
                  Pipes deliver the reliability you need for every project.
                </p>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="flex items-center justify-center rounded-xl bg-gray-100 py-24">
              <div className="text-center text-gray-400">
                <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="mt-2 text-sm">Company / Factory Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <ScrollReveal>
        <section className="bg-black px-4 py-14 sm:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            <StatCounter end={25} suffix="+" label="Years Experience" />
            <StatCounter end={4} label="Product Lines" />
            <StatCounter end={1000} suffix="+" label="Happy Clients" />
            <StatCounter end={50} suffix="+" label="Cities Served" />
          </div>
        </section>
      </ScrollReveal>

      {/* Certifications */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-black sm:text-4xl">
              Our Certifications
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Quality assured through recognized certifications
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-xl border border-gray-200 p-8"
                >
                  <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-50">
                    <div className="text-center text-gray-400">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <p className="mt-1 text-xs">Certificate {i}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-black">Certificate Title {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTABanner />
    </>
  );
}
```

Note: StatCounter text color must be white inside the black stats section. Fix the StatCounter to accept a `className` prop, OR override in the section. Simpler: the stat counter section on about page has black bg — the StatCounter text classes should be overridable. Let's update: make the stat section use white text by wrapping the counters:

Actually the StatCounter hardcodes `text-black`. For the black section, we need white text. Update StatCounter to accept `dark` prop:

Update `src/components/StatCounter.tsx` — add `dark?: boolean` prop. When true, number uses `text-white` and label uses `text-gray-300`.

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  end,
  suffix = "",
  label,
  dark = false,
}: {
  end: number;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <p className={`text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-black"}`}>
        {count}
        {suffix}
      </p>
      <p className={`mt-1 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{label}</p>
    </div>
  );
}
```

And in about page, use `<StatCounter ... dark />` for all 4 counters.

- [ ] **Step 3: Verify about page**

Run: `npm run dev`, visit `/about`
Expected: Company story with text + image placeholder, animated stats strip (white on black), certifications grid, CTA banner.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add about us page with stats, certifications, company story"
```

---

### Task 6: Build Contact Us Page

**Files:**
- Create: `src/components/ContactForm.tsx`
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create ContactForm component**

Create `src/components/ContactForm.tsx`:

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS } from "@/lib/constants";

const productOptions = [
  "Kids Tent Pipe",
  "Plumbing Pipe",
  "Conduit Pipe",
  "Casing Capping Pipe",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", BUSINESS.web3formsKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">
          Name <span className="text-gray-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-black">
          Phone <span className="text-gray-400">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
          Email <span className="text-gray-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-black">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
        >
          <option value="">Select a product</option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-gray-50 p-3 text-center text-sm text-green-700">
          Thank you! Your inquiry has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-gray-50 p-3 text-center text-sm text-red-700">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Build Contact Us page**

Create `src/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Astrem Pipe for PVC pipe inquiries, bulk orders, and quotes. Call, WhatsApp, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black sm:text-5xl">Contact Us</h1>
            <p className="mt-3 text-lg text-gray-600">
              Have a question or need a quote? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <ScrollReveal>
              <div className="rounded-xl border border-gray-200 p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-black">Send us an Inquiry</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-black">Get in Touch</h2>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-black">Address</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                          {BUSINESS.address}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-black">Phone / WhatsApp</p>
                        <a
                          href={`tel:+91${BUSINESS.phone}`}
                          className="mt-1 block text-sm text-gray-600 hover:text-black"
                        >
                          +91 {BUSINESS.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-black">Email</p>
                        <a
                          href={`mailto:${BUSINESS.email}`}
                          className="mt-1 block text-sm text-gray-600 hover:text-black"
                        >
                          {BUSINESS.email}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Quick Connect */}
                <div>
                  <h3 className="text-lg font-semibold text-black">Quick Connect</h3>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:+91${BUSINESS.phone}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                    <a
                      href={BUSINESS.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                    >
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Google Maps */}
                <div>
                  <h3 className="text-lg font-semibold text-black">Find Us</h3>
                  <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
                    <iframe
                      title="Astrem Pipe Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7!2d72.83!3d21.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzI0LjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify contact page**

Run: `npm run dev`, visit `/contact`
Expected: Form on left, contact details + map on right (stacked on mobile). Form validates required fields. Quick connect buttons work.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add contact page with web3forms form, map, quick connect"
```

---

### Task 7: Add SEO & JSON-LD Structured Data

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add JSON-LD structured data to layout**

Add a `<script type="application/ld+json">` in the `<head>` of `layout.tsx` with LocalBusiness schema:

```tsx
// Add inside <html> before <body>:
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Astrem Pipe - Mortex Polymers",
        description:
          "Trusted PVC pipe manufacturer with 25+ years of experience in Surat, Gujarat.",
        url: "https://astrempipe.com",
        telephone: "+919913761276",
        email: "mortexpolymers@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Plot 61, 62, Umiya Ind. Estate, Near Kavya Mill, Jolwa Gam Road",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          postalCode: "394305",
          addressCountry: "IN",
        },
        image: "/astrem-logo.jpeg",
      }),
    }}
  />
</head>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build succeeds with no errors. All 7 pages are generated.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add JSON-LD structured data for SEO"
```

---

### Task 8: Final Polish & Cleanup

**Files:**
- Remove: `public/next.svg`, `public/vercel.svg`
- Verify: `public/astrem-logo.jpeg` exists (user needs to place it)

- [ ] **Step 1: Remove Next.js boilerplate assets**

```bash
rm -f public/next.svg public/vercel.svg
```

- [ ] **Step 2: Add placeholder logo if not present**

If `public/astrem-logo.jpeg` doesn't exist, create a note for the user. The logo needs to be copied to `public/astrem-logo.jpeg`.

- [ ] **Step 3: Run final build**

Run: `npm run build`
Expected: Clean build with all 7 routes. No warnings or errors.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: remove boilerplate assets, final cleanup"
```

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Clean boilerplate, add data & constants | globals.css, layout.tsx, page.tsx, constants.ts, products.ts |
| 2 | Global components (Header, Footer, WhatsApp, ScrollReveal, CTA) | 5 components + layout.tsx |
| 3 | Home page | ProductCard.tsx, page.tsx |
| 4 | Products overview + 4 category pages | 5 page files |
| 5 | About Us page | StatCounter.tsx, about/page.tsx |
| 6 | Contact Us page | ContactForm.tsx, contact/page.tsx |
| 7 | SEO structured data | layout.tsx |
| 8 | Final cleanup | remove boilerplate assets |

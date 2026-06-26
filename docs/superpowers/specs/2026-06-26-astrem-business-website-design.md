# Astrem Pipe - Business Website Design Spec

## Overview

A multi-page, mobile-first business website for **Astrem Pipe** (brand of **Mortex Polymers**), a PVC pipe manufacturer based in Surat, Gujarat with 25+ years of experience. The site serves as an online presence and lead generation tool for a broad audience (retailers, contractors, end consumers).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Form Service:** Web3Forms (free tier, sends to mortexpolymers@gmail.com)
- **Deployment:** Static/frontend-only (no backend)

## Theme & Design Language

- **Colors:** Black & white only. White backgrounds, black text, black accent sections. No other colors except the green WhatsApp icon.
- **Typography:** Geist Sans (already configured). Clean, modern, highly readable.
- **Aesthetic:** Subtle, professional, pipe-themed. Geometric line patterns inspired by pipe cross-sections for backgrounds. Minimal but not empty.
- **Interactions:** Subtle transitions — fade-ins on scroll, slight hover lifts on cards, smooth scroll navigation. Nothing flashy.
- **Mobile-first:** All layouts designed for mobile first. Major user base is mobile. Responsive grid that stacks cleanly.

## Brand Handling

- **Astrem Pipe** is the customer-facing brand — used in header, hero, page titles, SEO.
- **Mortex Polymers** is the parent company — mentioned in About page story, footer ("A product of Mortex Polymers"), and metadata for SEO.

## Business Details

- **WhatsApp:** 9913761276
- **Email:** mortexpolymers@gmail.com
- **Address:** Plot 61, 62, Umiya Ind. Estate, Near Kavya Mill, Jolwa Gam Road, Jolwa, Surat-394305, Gujarat
- **Logo:** Oval black & white logo with "ASTREM Pipe" text (file: astrem-logo.jpeg in project)

## Product Categories

1. **Kids Tent Pipe** — PVC pipes for children's tent/play structures
2. **Plumbing Pipe** — Standard PVC plumbing pipes for residential/commercial use
3. **Conduit Pipe** — Electrical conduit PVC pipes for wire protection
4. **Casing Capping Pipe** — PVC casing and capping for concealed wiring

Sizes and detailed specs to be provided later by the client.

---

## Site Structure

```
Home (/)
├── Products (/products)
│   ├── Kids Tent Pipe (/products/kids-tent-pipe)
│   ├── Plumbing Pipe (/products/plumbing-pipe)
│   ├── Conduit Pipe (/products/conduit-pipe)
│   └── Casing Capping Pipe (/products/casing-capping-pipe)
├── About Us (/about)
└── Contact Us (/contact)
```

7 pages total.

---

## Global Components

### Header (Sticky)
- **Left:** Astrem Pipe logo (circular/oval version)
- **Center:** Nav links — Home | Products (dropdown with 4 categories) | About Us | Contact Us
- **Right:** WhatsApp "Get Quote" CTA button
- White background, subtle bottom border
- Slight shrink effect on scroll
- **Mobile:** Hamburger menu with slide-out navigation

### Footer
- **3-column layout** (stacked on mobile):
  - Col 1: Astrem Pipe logo + "A product of Mortex Polymers" + company one-liner
  - Col 2: Quick Links — Home, Products (4 sub-links), About Us, Contact Us
  - Col 3: Contact Info — Address, Email, WhatsApp
- Bottom bar: "© 2026 Mortex Polymers. All rights reserved."
- Black background, white text

### Floating WhatsApp Button
- Fixed bottom-right corner on all pages
- Green WhatsApp icon
- Opens WhatsApp chat with pre-filled message: "Hi, I'm interested in Astrem Pipes. Please share more details."

---

## Page Designs

### Home Page (/)

**Section 1 — Hero:**
- Full-width banner with subtle pipe-themed geometric background pattern
- Large heading: "Trusted PVC Pipe Manufacturer Since 25+ Years"
- Subtext: short quality/reliability statement
- Two CTA buttons: "Explore Products" | "Get a Quote" (WhatsApp link)
- Fade-in animation on load

**Section 2 — Product Categories:**
- 4 cards in 2x2 grid (stacked on mobile)
- Each card: image placeholder + category name + short description + "View Details" link
- Hover lift effect on cards

**Section 3 — Why Choose Astrem:**
- 4 icon/stat blocks in a row (stacked 2x2 on mobile):
  - 25+ Years Experience
  - Quality Certified
  - Pan-India Supply
  - Trusted by Clients
- Black & white icons, clean layout

**Section 4 — About Preview:**
- 2-3 line intro about Mortex Polymers & Astrem
- "Learn More" link to About page

**Section 5 — CTA Banner:**
- Full-width black background
- "Need PVC Pipes in Bulk? Let's Talk."
- WhatsApp + Contact page buttons
- White text on black

---

### Products Overview Page (/products)

- Page heading: "Our Products"
- 4 large clickable cards — one per category
- Each card: image placeholder + category name + description + "View Details" link
- Bigger and more descriptive than homepage cards

---

### Product Category Pages (/products/[category])

Each of the 4 category pages uses the same template:

**Section 1 — Product Hero Image:**
- Large, prominent product photo (full-width or near full-width)
- Good visual space dedicated to the image — this is the first thing visitors see
- Image placeholder until client provides actual photos

**Section 2 — Category Header:**
- Breadcrumb: Home → Products → [Category Name]
- Category name as large heading
- Short description of what this pipe type is used for

**Section 3 — Product Size/Spec Table:**
- Clean responsive table: Size, Diameter, Thickness, Length, etc.
- Placeholder data — client fills in real specs later
- Horizontal scroll on mobile for wide tables

**Section 4 — Features/Benefits:**
- 3-4 bullet points with icons specific to each pipe category
- E.g., "Durable", "UV Resistant", "Lightweight", "Easy Installation"

**Section 5 — Applications:**
- Where this pipe is commonly used
- Short paragraph or bullet list

**Section 6 — CTA:**
- "Interested in [Category Name]? Get a Quote"
- WhatsApp + Contact page buttons

---

### About Us Page (/about)

**Section 1 — Company Story:**
- Heading: "About Astrem Pipe"
- 2-column layout (stacked on mobile): text left, image placeholder right
- Content: Mortex Polymers founded 25+ years ago in Surat, manufacturing excellence, the Astrem brand, commitment to quality

**Section 2 — Key Numbers:**
- Horizontal strip with animated count-up stats:
  - 25+ Years | 4 Product Lines | 1000+ Happy Clients | Pan-India Delivery
  - Placeholder numbers — client updates later

**Section 3 — Certifications:**
- Heading: "Our Certifications"
- Grid of certificate image placeholders with titles
- Client uploads actual certificate images later

**Section 4 — CTA Banner:**
- Same "Need PVC Pipes? Let's Talk." strip

---

### Contact Us Page (/contact)

**Section 1 — Contact Form + Details (side by side on desktop, stacked on mobile):**

Form fields:
- Name (required)
- Phone (required)
- Email (required)
- Product Interest (dropdown: Kids Tent Pipe, Plumbing Pipe, Conduit Pipe, Casing Capping Pipe, Other)
- Message (textarea)
- Submit button
- Powered by Web3Forms
- Success/error toast notifications

Contact details (beside form):
- Phone/WhatsApp: 9913761276
- Email: mortexpolymers@gmail.com
- Address: Plot 61, 62, Umiya Ind. Estate, Near Kavya Mill, Jolwa Gam Road, Jolwa, Surat-394305, Gujarat

**Section 2 — Google Maps Embed:**
- Embedded Google Maps showing factory location

**Section 3 — Quick Connect:**
- Three icon buttons: Call Now | WhatsApp | Email Us

---

## SEO Strategy

- Proper `<title>` and `<meta description>` on every page
- Semantic HTML: h1, h2, h3 hierarchy
- Open Graph tags for social sharing
- JSON-LD structured data (LocalBusiness schema) for Google
- Alt text on all images
- Clean URL slugs (/products/plumbing-pipe)
- Next.js built-in sitemap generation
- Target keywords: "PVC pipe manufacturer Surat", "Astrem Pipe", "Mortex Polymers", product-specific terms

## Animations & Interactions

- **Scroll animations:** Subtle fade-in-up on sections as they enter viewport (CSS-only or lightweight, no heavy libraries)
- **Card hovers:** Slight lift/shadow on product cards
- **Button hovers:** Background/border transitions
- **Count-up:** Number animation on About page stats when scrolled into view
- **Header:** Slight background opacity/size change on scroll
- **Page transitions:** Smooth, no jarring full-page reloads (Next.js handles this)
- **Mobile menu:** Smooth slide-in hamburger menu

## File Structure

```
src/
├── app/
│   ├── layout.tsx              (root layout: header + footer + metadata)
│   ├── page.tsx                (home page)
│   ├── about/
│   │   └── page.tsx            (about us)
│   ├── contact/
│   │   └── page.tsx            (contact us)
│   └── products/
│       ├── page.tsx            (products overview)
│       ├── kids-tent-pipe/
│       │   └── page.tsx
│       ├── plumbing-pipe/
│       │   └── page.tsx
│       ├── conduit-pipe/
│       │   └── page.tsx
│       └── casing-capping-pipe/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── CTABanner.tsx
│   ├── ProductCard.tsx
│   ├── ContactForm.tsx
│   ├── StatCounter.tsx
│   └── ScrollAnimation.tsx
├── data/
│   └── products.ts             (product category data: names, descriptions, specs, features)
└── lib/
    └── constants.ts            (business details, WhatsApp number, email, address)
```

## Image Placeholders

All images use a clean grey placeholder with a pipe icon/text until the client provides actual photos:
- Logo: astrem-logo.jpeg (already provided)
- Product category images: 4 images (one per category — to be provided)
- About page company image: to be provided
- Certificate images: to be provided

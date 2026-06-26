import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        {/* SVG pattern background */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="pipes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipes)" />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black animate-fade-in-up">
            {BUSINESS.tagline}
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Premium quality PVC pipes for plumbing, electrical, and structural applications. Trusted by builders and contractors across India for over 25 years.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Explore Products
            </Link>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-black px-8 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* 2. Product Categories */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">Our Products</h2>
            <p className="mt-3 text-gray-600 text-base sm:text-lg">
              A complete range of PVC pipe solutions for every application
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
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

      {/* 3. Why Choose Astrem */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">Why Choose Astrem</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Years Experience */}
            <ScrollReveal className="text-center">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-black">25+</p>
                <p className="mt-1 text-sm text-gray-600">Years Experience</p>
              </div>
            </ScrollReveal>

            {/* Product Lines */}
            <ScrollReveal className="text-center">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-black">4</p>
                <p className="mt-1 text-sm text-gray-600">Product Lines</p>
              </div>
            </ScrollReveal>

            {/* Happy Clients */}
            <ScrollReveal className="text-center">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-black">1000+</p>
                <p className="mt-1 text-sm text-gray-600">Happy Clients</p>
              </div>
            </ScrollReveal>

            {/* Delivery Network */}
            <ScrollReveal className="text-center">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-black">Pan India</p>
                <p className="mt-1 text-sm text-gray-600">Delivery Network</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">Built on Trust &amp; Quality</h2>
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Mortex Polymers, the company behind Astrem Pipe, has been manufacturing premium PVC pipes for over 25 years. Based in Surat, Gujarat, we combine decades of expertise with modern manufacturing standards to deliver products that builders, contractors, and homeowners can rely on for a lifetime.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
            >
              Learn more about us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CTA Banner */}
      <CTABanner />
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-black px-4 pt-28 pb-28 sm:px-6 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        {/* Background images — responsive */}
        <Image
          src="/images/banner-mobile.png"
          alt="Astrem Pipe"
          fill
          className="object-cover scale-110 sm:hidden"
          priority
        />
        <Image
          src="/images/banner-desktop.png"
          alt="Astrem Pipe"
          fill
          className="hidden object-cover scale-110 sm:block"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Subtle pipe pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pipes"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="30"
                cy="30"
                r="12"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx="30"
                cy="30"
                r="6"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipes)" />
        </svg>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-gray-300">
            Quality You Can Trust
          </p>
          <h1 className="mt-4 animate-fade-in-up text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {BUSINESS.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Best quality PVC pipes for plumbing, electrical, and structural
            applications. Manufactured by {BUSINESS.companyName},{" "}
            {BUSINESS.city}.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200 sm:w-auto"
            >
              Explore Products
            </Link>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent sm:h-16 sm:via-transparent" />
      </section>

      {/* 2. Product Categories */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Our Products
            </h2>
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
                  mobileImage={product.image.mobile}
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
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Why Choose Astrem
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: "25+",
                label: "Years Experience",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                number: "5",
                label: "Product Lines",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                number: "1000+",
                label: "Happy Clients",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                number: "Pan India",
                label: "Delivery Network",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((stat) => (
              <ScrollReveal key={stat.label} className="text-center">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <svg
                      className="h-7 w-7 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={stat.icon}
                      />
                    </svg>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-black">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Built on Trust &amp; Quality
            </h2>
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Mortex Polymers, the company behind Astrem Pipe, has been
              manufacturing premium PVC pipes for over 25 years. Based in Surat,
              Gujarat, we combine decades of expertise with modern manufacturing
              standards to deliver products that builders, contractors, and
              homeowners can rely on for a lifetime.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
            >
              Learn more about us
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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

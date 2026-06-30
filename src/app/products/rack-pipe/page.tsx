import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug } from "@/data/products";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

const product = getProductBySlug("rack-pipe")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.fullDescription.slice(0, 160),
};

export default function RackPipePage() {
  return (
    <>
      {/* Hero Image */}
      <section className="relative bg-white">
        <div className="relative mx-auto max-w-7xl">
          <Image src={product.image.mobile} alt={product.name} width={800} height={800} className="block w-full object-contain sm:hidden" priority />
          <Image src={product.image.desktop} alt={product.name} width={1400} height={500} className="hidden w-full object-contain sm:block" priority />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white to-transparent sm:block" />
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

      {/* Sizes & Details */}
      <ScrollReveal>
        <section className="bg-gray-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Available Sizes</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full border-2 border-black px-5 py-2.5 text-sm font-semibold text-black"
                >
                  {size}
                </span>
              ))}
            </div>

            {product.colorOptions && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Color Options
                </h3>
                <div className="mt-3 flex items-center gap-4">
                  {product.colorOptions.map((color) => (
                    <div key={color} className="flex items-center gap-2">
                      <span
                        className={`h-6 w-6 rounded-full border-2 ${
                          color === "Black"
                            ? "border-black bg-black"
                            : "border-gray-300 bg-white"
                        }`}
                      />
                      <span className="text-sm font-medium text-gray-700">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-4 py-2.5">
              <span className="text-xs uppercase tracking-wider text-gray-500">Material</span>
              <span className="text-sm font-semibold text-black">{product.material}</span>
            </div>

            {product.customSizing && (
              <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                  <h3 className="text-sm font-semibold text-black">Custom Length Cutting Available</h3>
                </div>
                <p className="mt-1.5 text-sm text-gray-500">{product.customSizing}</p>
                <a
                  href={`https://wa.me/919913761276?text=Hi%2C%20I%20need%20custom%20size%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
                >
                  Request Custom Size &rarr;
                </a>
              </div>
            )}
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

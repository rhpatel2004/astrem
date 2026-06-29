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
              <div className="mt-8 rounded-xl border-2 border-black bg-white p-6">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-6 w-6 shrink-0 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Custom Length Cutting Available</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{product.customSizing}</p>
                    <a
                      href={`https://wa.me/919913761276?text=Hi%2C%20I%20need%20custom%20size%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      Request Custom Size
                    </a>
                  </div>
                </div>
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

import type { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

const product = getProductBySlug("casing-capping-pipe")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.fullDescription.slice(0, 160),
};

export default function CasingCappingPipePage() {
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

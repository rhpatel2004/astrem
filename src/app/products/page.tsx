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
            <h1 className="text-4xl font-bold sm:text-5xl">Our Products</h1>
            <p className="mt-4 text-lg text-gray-600">
              Quality PVC pipes engineered for every application — from children&apos;s play
              structures to professional plumbing and electrical installations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
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

      <CTABanner />
    </>
  );
}

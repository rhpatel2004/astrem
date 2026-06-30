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
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">About Astrem Pipe</h1>
          <p className="mt-6 text-gray-600 leading-relaxed">
            <strong className="text-black">{BUSINESS.brandName}</strong> is a brand of{" "}
            <strong className="text-black">{BUSINESS.companyName}</strong> — a PVC pipe manufacturer with over{" "}
            <strong className="text-black">25 years of experience</strong>, based in Surat, Gujarat.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From our facility in Jolwa, we manufacture pipes for plumbing, electrical conduit, kids tent structures, and casing capping — serving contractors, retailers, and homeowners across India.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Every Astrem pipe undergoes rigorous quality checks. Quality isn&apos;t just a promise — it&apos;s our foundation.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <ScrollReveal>
        <section className="bg-black px-4 py-14 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            <StatCounter end={25} suffix="+" label="Years Experience" dark />
            <StatCounter end={5} label="Product Lines" dark />
            <StatCounter end={1000} suffix="+" label="Happy Clients" dark />
            <StatCounter end={50} suffix="+" label="Cities Served" dark />
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}

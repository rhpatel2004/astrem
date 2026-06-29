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
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left column */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">About Astrem Pipe</h1>
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

            {/* Right column — image placeholder */}
            <div className="rounded-xl bg-gray-100 py-24 flex flex-col items-center justify-center gap-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-sm font-medium">Company / Factory Image</span>
            </div>
          </div>
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

      {/* Certifications */}
      <ScrollReveal>
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Certifications</h2>
              <p className="mt-3 text-gray-600">
                Quality assured through recognized certifications
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-xl border p-8">
                  <div className="flex flex-col items-center gap-3 rounded-lg bg-gray-100 py-10 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Certificate {n}</span>
                  </div>
                  <p className="mt-4 text-center font-semibold text-black">
                    Certificate Title {n}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}

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
    <section>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Reach out for inquiries, bulk orders, or quotes. We&apos;re here to help.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Left column — inquiry form */}
          <ScrollReveal>
            <div className="rounded-xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-black">Send us an Inquiry</h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — contact details, quick connect, map */}
          <ScrollReveal>
            <div className="space-y-8">
              {/* Block 1 — Contact details */}
              <div>
                <h2 className="text-2xl font-bold text-black">Get in Touch</h2>
                <ul className="mt-4 space-y-4">
                  {/* Address */}
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        className="h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{BUSINESS.address}</span>
                  </li>

                  {/* Phone */}
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        className="h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <a
                      href={`tel:+91${BUSINESS.phone}`}
                      className="text-sm text-gray-700 hover:text-black"
                    >
                      +91 {BUSINESS.phone}
                    </a>
                  </li>

                  {/* Email */}
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        className="h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-sm text-gray-700 hover:text-black"
                    >
                      {BUSINESS.email}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Block 2 — Quick Connect */}
              <div>
                <h3 className="text-lg font-semibold text-black">Quick Connect</h3>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:+91${BUSINESS.phone}`}
                    className="rounded-full border-2 border-black px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-black px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="rounded-full border-2 border-black px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              {/* Block 3 — Google Maps */}
              <div>
                <h3 className="text-lg font-semibold text-black">Find Us</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
                  <iframe
                    src="https://maps.google.com/maps?q=21.166298,73.002892&z=17&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Astrem Pipe - Umiya Ind. Estate, Jolwa, Surat"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

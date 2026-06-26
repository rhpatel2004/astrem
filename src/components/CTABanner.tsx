import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Need PVC Pipes in Bulk? Let's Talk.",
  subtitle,
}: CTABannerProps) {
  return (
    <section className="bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-gray-300 text-base sm:text-lg">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
          >
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

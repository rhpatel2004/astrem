import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        {/* Brand — always full width */}
        <div className="flex flex-col gap-2">
          <Image
            src="/astrem-logo-footer.png"
            alt="Astrem Pipe Logo"
            width={160}
            height={64}
            className="object-contain brightness-0 invert"
          />
          <p className="text-sm text-gray-400">
            A product of {BUSINESS.companyName}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering quality PVC pipes across India since 25+ years.
          </p>
        </div>

        {/* Links + Contact grid */}
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-16">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Our Products
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/products/kids-tent-pipe", label: "Kids Tent Pipe" },
                { href: "/products/rack-pipe", label: "Rack Pipe" },
                { href: "/products/plumbing-pipe", label: "Plumbing Pipe" },
                { href: "/products/conduit-pipe", label: "Conduit Pipe" },
                {
                  href: "/products/casing-capping-pipe",
                  label: "Casing Capping",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile, in grid on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              {/* Address */}
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-300 leading-relaxed">
                  {BUSINESS.address}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span className="shrink-0">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <a
                  href={`tel:+91${BUSINESS.phone}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +91 {BUSINESS.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span className="shrink-0">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {BUSINESS.companyName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

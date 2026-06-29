"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/kids-tent-pipe", label: "Kids Tent Pipe" },
      { href: "/products/rack-pipe", label: "Rack Pipe" },
      { href: "/products/plumbing-pipe", label: "Plumbing Pipe" },
      { href: "/products/conduit-pipe", label: "Conduit Pipe" },
      { href: "/products/casing-capping-pipe", label: "Casing Capping" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={closeMobile}>
            <Image
              src="/astream-logo-cropped.png"
              alt="Astrem Pipe Logo"
              width={120}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                    {link.label}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-52 rounded-lg border border-gray-100 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
          >
            <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Quote
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
            <Image
              src="/astream-logo-cropped.png"
              alt="Astrem Pipe Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>
          <button
            className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-1 overflow-y-auto h-[calc(100%-4rem)]">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobile}
                  className="block py-3 text-base font-medium text-gray-800 hover:text-black"
                >
                  {link.label}
                </Link>
                <div className="ml-4 flex flex-col gap-1 pb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-gray-600 hover:text-black"
                      onClick={closeMobile}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-gray-800 hover:text-black border-b border-gray-50"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

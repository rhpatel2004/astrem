import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Astrem Pipe | Trusted PVC Pipe Manufacturer in Surat",
    template: "%s | Astrem Pipe",
  },
  description:
    "Astrem Pipe by Mortex Polymers — 25+ years of trusted PVC pipe manufacturing in Surat, Gujarat. Kids tent pipes, plumbing pipes, conduit pipes & casing capping pipes.",
  keywords: [
    "PVC pipe manufacturer",
    "Astrem Pipe",
    "Mortex Polymers",
    "PVC pipes Surat",
    "plumbing pipes",
    "conduit pipes",
    "casing capping pipes",
    "kids tent pipes",
  ],
  openGraph: {
    title: "Astrem Pipe | Trusted PVC Pipe Manufacturer",
    description:
      "25+ years of quality PVC pipe manufacturing. Plumbing, conduit, casing capping & kids tent pipes.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

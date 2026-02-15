import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ValuEZ Tech — Enterprise Technology Solutions",
    template: "%s | ValuEZ Tech",
  },
  description:
    "Empowering enterprises with next-generation technology solutions. Digital transformation, cloud, AI, and cybersecurity services built for scale.",
  keywords: [
    "enterprise technology",
    "digital transformation",
    "cloud solutions",
    "AI analytics",
    "cybersecurity",
    "managed IT",
    "consulting",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ValuEZ Tech",
    title: "ValuEZ Tech — Enterprise Technology Solutions",
    description:
      "Empowering enterprises with next-generation technology solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValuEZ Tech — Enterprise Technology Solutions",
    description:
      "Empowering enterprises with next-generation technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-dark text-text-light font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-glass-blue focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

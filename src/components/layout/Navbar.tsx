"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partners" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/80 backdrop-blur-xl border-b border-white/10 supports-[backdrop-filter]:bg-[#111827]/60"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="ValuEZ Tech — Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-glass-blue to-accent-glow flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-glass-blue transition-colors">
              ValuEZ<span className="text-glass-blue">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-white transition-colors text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-glass-blue after:transition-all hover:after:w-full"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="/contact">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        role="menu"
      >
        <div className="px-6 py-4 space-y-3 border-t border-white/5 bg-dark/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-text-muted hover:text-white transition-colors"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button variant="primary" size="sm" href="/contact">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

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
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 shadow-[0_8px_32px_rgba(0,20,60,0.4),0_1px_3px_rgba(0,0,0,0.2)] overflow-hidden"
      role="navigation"
      aria-label="Main navigation"
      style={{ 
        background: 'rgba(17, 24, 39, 0.4)',
        backdropFilter: 'blur(28px) saturate(180%)', 
        WebkitBackdropFilter: 'blur(28px) saturate(180%)' 
      }}
    >
      {/* Atmospheric blue glow effect - similar to Reflect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)'
        }}
      />
      
      {/* Subtle gradient overlay for glass effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 100%)'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
            aria-label="ValuEZ Tech — Home"
          >
            <img 
              src="/logo.png" 
              alt="ValuEZ Tech Logo" 
              className="w-[72px] h-[72px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300"
              style={{ background: 'transparent' }}
            />
            <span className="text-xl font-bold text-white group-hover:text-glass-blue transition-colors">
              ValuEZ<span className="text-glass-blue">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav - Pill Container */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            {/* Radial glow behind pill */}
            <div 
              className="absolute inset-0 -z-10 blur-xl opacity-40"
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
              }}
            />
            
            {/* Pill-shaped navigation container */}
            <div 
              className="flex items-center gap-7 px-8 py-3 rounded-full border border-white/15 shadow-[0_4px_24px_rgba(0,20,60,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-white/25 hover:shadow-[0_6px_32px_rgba(59,130,246,0.2)]" 
              role="menubar"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)'
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative whitespace-nowrap after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block relative z-40">
            <Button variant="primary" size="sm" href="/contact">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="relative z-50 md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors active:scale-95"
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
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
        <div 
          className="px-6 py-4 space-y-3 border-t border-white/10 shadow-[0_8px_32px_rgba(0,20,60,0.5)]" 
          style={{ 
            background: 'rgba(17, 24, 39, 0.6)',
            backdropFilter: 'blur(28px) saturate(180%)', 
            WebkitBackdropFilter: 'blur(28px) saturate(180%)' 
          }}
        >
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

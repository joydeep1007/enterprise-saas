"use client";

import Button from "@/components/ui/Button";
import DashboardMockup from "@/components/ui/DashboardMockup";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Radial glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] radial-glow" />
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-glass-blue/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-glow/5 rounded-full blur-3xl animate-float delay-300" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 mb-8 shadow-[0_4px_16px_rgba(255,255,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.1)]" style={{ backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              <span className="text-sm text-text-muted">
                Trusted by 500+ Enterprise Clients
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-white mb-6"
            >
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-glass-blue to-accent-glow bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed">
              Enterprise-grade technology solutions that drive innovation,
              accelerate growth, and deliver measurable results. Partner with
              industry leaders who understand your vision.
            </p>

            <div className="flex flex-wrap gap-4 relative z-10">
              <Button variant="primary" size="lg" href="/contact">
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="secondary" size="lg" href="/services">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right - Modern Dashboard Mockup */}
          <div className="hidden lg:flex justify-center items-center relative" aria-hidden="true">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden gradient-cta" aria-labelledby="cta-heading">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glass-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 500+ enterprises that have accelerated their digital journey with
          ValuEZ Tech. Let&apos;s build your future together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="/contact">
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="/about">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}

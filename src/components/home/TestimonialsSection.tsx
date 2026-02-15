"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "ValuEZ Tech transformed our entire digital infrastructure. Their team delivered beyond expectations with a seamless migration to the cloud.",
    name: "Sarah Chen",
    role: "CTO",
    company: "GlobalFinance Corp",
  },
  {
    quote:
      "The AI analytics platform they built has given us unprecedented visibility into our operations. ROI exceeded projections by 3x in the first year.",
    name: "Michael Rodriguez",
    role: "VP Engineering",
    company: "TechScale Industries",
  },
  {
    quote:
      "Working with ValuEZ Tech feels like having an elite technology team as part of your company. Their responsiveness and expertise are unmatched.",
    name: "Amanda Foster",
    role: "Director of IT",
    company: "NexGen Healthcare",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white mb-6">
          What Our Clients Say
        </h2>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <TestimonialCard {...testimonials[active]} />
        <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active
                  ? "bg-glass-blue w-8"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

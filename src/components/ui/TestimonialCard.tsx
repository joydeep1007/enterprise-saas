import React from "react";
import GlassCard from "./GlassCard";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <GlassCard className="flex flex-col gap-6">
      <div className="text-glass-blue w-10 h-10 rounded-xl bg-gradient-to-br from-glass-blue/15 to-glass-blue/5 flex items-center justify-center border border-glass-blue/20 shadow-[0_4px_16px_rgba(59,130,246,0.15)]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.3 2.5c-1.4.7-2.5 1.6-3.3 2.8-.8 1.2-1.2 2.6-1.2 4.2 0 1.3.3 2.4.8 3.3s1.2 1.6 2 2.1c.8.5 1.6.7 2.4.7 1.1 0 2-.4 2.8-1.1.8-.7 1.1-1.6 1.1-2.7 0-1-.3-1.8-1-2.5-.7-.7-1.5-1-2.5-1-.5 0-1 .1-1.4.3.6-1.3 1.7-2.4 3.3-3.3l-3-2.8zm-9 0c-1.4.7-2.5 1.6-3.3 2.8C-1.8 6.5-2.2 7.9-2.2 9.5c0 1.3.3 2.4.8 3.3s1.2 1.6 2 2.1c.8.5 1.6.7 2.4.7 1.1 0 2-.4 2.8-1.1.8-.7 1.1-1.6 1.1-2.7 0-1-.3-1.8-1-2.5-.7-.7-1.5-1-2.5-1-.5 0-1 .1-1.4.3.6-1.3 1.7-2.4 3.3-3.3L2.3 2.5z" transform="translate(3, 3)" />
        </svg>
      </div>
      <p className="text-text-light/90 leading-relaxed text-lg italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto pt-4 border-t border-white/10">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-text-muted text-sm">
          {role}, {company}
        </p>
      </div>
    </GlassCard>
  );
}

import React from "react";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <GlassCard className="flex flex-col items-start gap-4 h-full">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-glass-blue/15 to-glass-blue/5 flex items-center justify-center text-glass-blue border border-glass-blue/20 shadow-[0_4px_16px_rgba(59,130,246,0.15),inset_0_1px_0_0_rgba(59,130,246,0.2)]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </GlassCard>
  );
}

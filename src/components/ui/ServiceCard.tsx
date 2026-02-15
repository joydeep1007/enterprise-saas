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
      <div className="w-14 h-14 rounded-2xl bg-glass-blue/10 flex items-center justify-center text-glass-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </GlassCard>
  );
}

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card p-8 ${hover ? "" : "hover:transform-none hover:shadow-none"} ${className}`}
    >
      {children}
    </div>
  );
}

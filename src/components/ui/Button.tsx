"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-glow text-white font-semibold",
  secondary:
    "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/30 text-white font-semibold hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/40 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-all duration-300",
  outline:
    "border-2 border-glass-blue/80 text-glass-blue font-semibold hover:bg-glass-blue/10 hover:border-glass-blue hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all duration-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-[10px]",
  md: "px-6 py-3 text-base rounded-[12px]",
  lg: "px-8 py-4 text-lg rounded-[12px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className} cursor-pointer select-none`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

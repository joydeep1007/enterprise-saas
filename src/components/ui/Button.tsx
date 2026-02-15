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
    "bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300",
  outline:
    "border-2 border-glass-blue text-glass-blue font-semibold hover:bg-glass-blue/10 transition-all duration-300",
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

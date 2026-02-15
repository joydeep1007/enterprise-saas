"use client";

import { useEffect, useRef, useState } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`section-padding transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "digital-transformation",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Digital Transformation",
    description:
      "Modernize your legacy systems and processes with comprehensive digital transformation strategies tailored to your industry. We help you reimagine customer experiences, streamline operations, and build a future-ready technology foundation.",
    features: [
      "Legacy system modernization",
      "Process automation & optimization",
      "Digital experience platforms",
      "API-first architecture design",
    ],
  },
  {
    id: "cloud-solutions",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description:
      "Seamlessly migrate, manage, and optimize your cloud infrastructure across AWS, Azure, and Google Cloud. Our cloud architects design resilient, cost-effective solutions that scale with your business demands.",
    features: [
      "Multi-cloud strategy & migration",
      "Cloud-native development",
      "Infrastructure as Code (IaC)",
      "Cost optimization & FinOps",
    ],
  },
  {
    id: "ai-analytics",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI & Analytics",
    description:
      "Unlock the full potential of your data with machine learning, predictive analytics, and intelligent automation. We build AI solutions that deliver actionable insights and measurable business outcomes.",
    features: [
      "Machine learning model development",
      "Predictive & prescriptive analytics",
      "Natural language processing",
      "Computer vision solutions",
    ],
  },
  {
    id: "cybersecurity",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Cybersecurity",
    description:
      "Protect your enterprise with comprehensive security solutions spanning threat detection, compliance, and incident response. Our zero-trust approach ensures your data and systems remain secure in an evolving threat landscape.",
    features: [
      "Zero-trust security architecture",
      "24/7 threat monitoring & SOC",
      "Compliance & governance (SOC2, ISO)",
      "Penetration testing & red teaming",
    ],
  },
  {
    id: "managed-it",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Managed IT Services",
    description:
      "Focus on your core business while we handle your IT operations. Our managed services provide proactive monitoring, maintenance, and support across your entire technology stack with guaranteed SLAs.",
    features: [
      "24/7 infrastructure monitoring",
      "Proactive incident management",
      "Help desk & end-user support",
      "IT asset lifecycle management",
    ],
  },
];

export default function ServicesPage() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    serviceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add animation classes when element is visible with stagger
              const contentDiv = entry.target.querySelector('.service-content');
              const capabilitiesDiv = entry.target.querySelector('.service-capabilities');
              
              if (contentDiv) {
                setTimeout(() => {
                  contentDiv.classList.add('animate-slide-in-left');
                }, 100);
              }
              if (capabilitiesDiv) {
                setTimeout(() => {
                  capabilitiesDiv.classList.add('animate-slide-in-right');
                }, 300);
              }
              
              // Unobserve after animation is triggered
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32" aria-labelledby="services-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">Our Services</p>
          <h1 id="services-heading" className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1]">
            Enterprise Solutions for Every Challenge
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            From cloud migration to AI implementation, our services are designed to
            transform your technology landscape and accelerate growth.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      {services.map((service, i) => (
        <SectionWrapper
          key={service.id}
          id={service.id}
          className={i % 2 === 1 ? "bg-gradient-to-b from-dark via-slate-900/30 to-dark" : ""}
        >
          <div 
            ref={(el) => { serviceRefs.current[i] = el; }}
            className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className={`service-content ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-glass-blue/15 to-glass-blue/5 flex items-center justify-center text-glass-blue border border-glass-blue/20 shadow-[0_4px_16px_rgba(59,130,246,0.15),inset_0_1px_0_0_rgba(59,130,246,0.2)] mb-6">
                {service.icon}
              </div>
              <h2 className="text-3xl lg:text-[36px] font-semibold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">{service.description}</p>
              <Button variant="primary" size="md" href="/contact">
                Get Started
              </Button>
            </div>
            <div className={`glass-card p-8 service-capabilities ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h3 className="text-lg font-semibold text-white mb-6">Key Capabilities</h3>
              <ul className="space-y-4" role="list">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-glass-blue/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-glass-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text-light/80">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Blue accent divider */}
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-glass-blue to-accent-glow" aria-hidden="true" />
            </div>
          </div>
        </SectionWrapper>
      ))}
    </>
  );
}

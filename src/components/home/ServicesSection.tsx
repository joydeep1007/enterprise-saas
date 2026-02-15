import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Digital Transformation",
    description:
      "Modernize legacy systems and accelerate your digital journey with custom solutions that scale with your enterprise needs.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description:
      "Seamlessly migrate, manage, and optimize your cloud infrastructure across AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI & Analytics",
    description:
      "Unlock data-driven insights with machine learning, predictive analytics, and intelligent automation solutions.",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
          What We Do
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white mb-6">
          Enterprise Solutions That Scale
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
          We deliver comprehensive technology services designed to transform your
          operations and drive sustainable competitive advantage.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

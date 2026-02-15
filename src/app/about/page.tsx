import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ValuEZ Tech — our mission, values, and leadership team driving enterprise digital transformation.",
};

const coreValues = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation First",
    description: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Integrity",
    description: "Transparent partnerships built on accountability, reliability, and ethical business practices.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Client Partnership",
    description: "We treat every client relationship as a long-term strategic partnership, not just a project.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Relentless Excellence",
    description: "We set the highest standards and continuously measure, optimize, and improve our delivery.",
  },
];

const leaders = [
  { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
  { name: "Priya Sharma", role: "CTO", initials: "PS" },
  { name: "David Chen", role: "VP Engineering", initials: "DC" },
  { name: "Emily Watson", role: "Head of Strategy", initials: "EW" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32" aria-labelledby="about-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
            About Us
          </p>
          <h1
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1]"
          >
            Engineering the Future of Enterprise Technology
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Since 2014, we&apos;ve been at the forefront of enterprise digital
            transformation, helping the world&apos;s most ambitious organizations
            achieve their technology vision.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
              Our Story
            </p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-white mb-6">
              From Startup to Global Enterprise Partner
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                ValuEZ Tech was founded with a singular mission: to make
                enterprise-grade technology accessible and transformative for
                businesses of all sizes.
              </p>
              <p>
                What started as a team of five passionate engineers has grown
                into a global consultancy with 150+ experts across 12 countries,
                serving Fortune 500 companies and high-growth startups alike.
              </p>
              <p>
                Our approach combines deep technical expertise with strategic
                business thinking, ensuring every solution we deliver creates
                measurable impact and lasting competitive advantage.
              </p>
            </div>
          </div>
          <div className="glass-card p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-glass-blue mb-2">12+</div>
                <p className="text-text-muted text-sm">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-glow mb-2">500+</div>
                <p className="text-text-muted text-sm">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-glass-blue mb-2">150+</div>
                <p className="text-text-muted text-sm">Global Experts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-glow mb-2">12</div>
                <p className="text-text-muted text-sm">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="bg-gradient-to-b from-dark via-slate-900/30 to-dark">
        <div className="text-center mb-16">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
            Our Values
          </p>
          <h2 className="text-3xl lg:text-[40px] font-semibold text-white mb-6">
            Principles That Guide Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, i) => (
            <GlassCard key={i} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-glass-blue/10 flex items-center justify-center text-glass-blue mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
            Leadership
          </p>
          <h2 className="text-3xl lg:text-[40px] font-semibold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Our leadership team brings decades of combined experience across
            enterprise technology, consulting, and digital innovation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <GlassCard key={i} className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-glass-blue to-accent-glow flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">{leader.initials}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{leader.name}</h3>
              <p className="text-glass-blue text-sm">{leader.role}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

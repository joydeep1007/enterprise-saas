import SectionWrapper from "@/components/ui/SectionWrapper";
import StatCounter from "@/components/ui/StatCounter";

const bulletPoints = [
  {
    title: "Industry-Leading Expertise",
    description: "15+ years of enterprise technology consulting across Fortune 500 companies.",
  },
  {
    title: "End-to-End Solutions",
    description: "From strategy to implementation, we deliver complete digital transformation.",
  },
  {
    title: "Agile & Scalable Approach",
    description: "Flexible methodologies that adapt to your business velocity and scale.",
  },
  {
    title: "24/7 Global Support",
    description: "Round-the-clock technical support with dedicated account management.",
  },
];

const stats = [
  { end: 500, suffix: "+", label: "Enterprise Clients" },
  { end: 98, suffix: "%", label: "Client Retention" },
  { end: 150, suffix: "+", label: "Global Experts" },
  { end: 12, suffix: "+", label: "Years Experience" },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-dark via-slate-900/50 to-dark">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Bullet points */}
        <div>
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white mb-10">
            Built for Enterprise Excellence
          </h2>

          <div className="space-y-8">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glass-blue/15 to-glass-blue/5 border border-glass-blue/30 flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                    <svg
                      className="w-4 h-4 text-glass-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {point.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Stats */}
        <div className="glass-card p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-10">
            {stats.map((stat, i) => (
              <StatCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

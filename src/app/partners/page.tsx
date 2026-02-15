import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our strategic technology partnerships with leading platforms and providers worldwide.",
};

const partners = [
  { name: "Microsoft Azure", tier: "Platinum" },
  { name: "Amazon Web Services", tier: "Premier" },
  { name: "Google Cloud", tier: "Premier" },
  { name: "Salesforce", tier: "Gold" },
  { name: "Oracle", tier: "Gold" },
  { name: "SAP", tier: "Silver" },
  { name: "IBM", tier: "Platinum" },
  { name: "Cisco", tier: "Gold" },
  { name: "ServiceNow", tier: "Premier" },
  { name: "Snowflake", tier: "Silver" },
  { name: "Databricks", tier: "Silver" },
  { name: "Palo Alto Networks", tier: "Gold" },
];

const tierColors: Record<string, string> = {
  Platinum: "from-slate-300 to-slate-500",
  Premier: "from-glass-blue to-accent-glow",
  Gold: "from-amber-400 to-amber-600",
  Silver: "from-gray-400 to-gray-500",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32" aria-labelledby="partners-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">Our Partners</p>
          <h1 id="partners-heading" className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1]">
            Strategic Technology Alliances
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            We partner with the world&apos;s leading technology providers to deliver
            best-in-class enterprise solutions.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="glass-card p-8 flex flex-col items-center justify-center text-center group cursor-default"
            >
              {/* Placeholder logo */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-glass-blue/10 transition-colors">
                <span className="text-2xl font-bold text-text-muted group-hover:text-glass-blue transition-colors">
                  {partner.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{partner.name}</h3>
              <span
                className={`text-xs font-medium bg-gradient-to-r ${tierColors[partner.tier]} bg-clip-text text-transparent`}
              >
                {partner.tier} Partner
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="gradient-cta relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl" />
        </div>
        <div className="relative text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Become a Technology Partner
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Join our ecosystem of industry-leading technology providers and unlock
            new growth opportunities together.
          </p>
          <a
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 text-lg rounded-[12px] text-white font-semibold"
          >
            Partner With Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our strategic technology partnerships with leading platforms and providers worldwide.",
};

const partners = [
  { name: "Microsoft Azure", tier: "Platinum", logo: "/azure.png" },
  { name: "Amazon Web Services", tier: "Premier", logo: "/aws.png" },
  { name: "Google Cloud", tier: "Premier", logo: "/gcp.png" },
  { name: "Salesforce", tier: "Gold", logo: "/salesforce.png" },
  { name: "Oracle", tier: "Gold", logo: "/oracle.png" },
  { name: "SAP", tier: "Silver", logo: "/sap.png" },
  { name: "IBM", tier: "Platinum", logo: "/ibm.png" },
  { name: "Cisco", tier: "Gold", logo: "/cisco.png" },
  { name: "ServiceNow", tier: "Premier", logo: "/servicenow.png" },
  { name: "Snowflake", tier: "Silver", logo: "/snowflake.png" },
  { name: "Databricks", tier: "Silver", logo: "/databricks.png" },
  { name: "Palo Alto Networks", tier: "Gold", logo: "/paloalto.png" },
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
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
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
              className="relative glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center group cursor-default overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-glass-blue/20"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-glass-blue/10 blur-2xl" />
              </div>
              
              {/* Logo Container */}
              <div className="relative h-20 sm:h-24 w-full flex items-center justify-center p-4 mb-4">
                <div className="relative max-h-16 sm:max-h-20 max-w-full h-full w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
                  />
                </div>
              </div>
              
              <h3 className="text-sm font-semibold text-white mb-2 relative z-10">{partner.name}</h3>
              <span
                className={`text-xs font-medium bg-gradient-to-r ${tierColors[partner.tier]} bg-clip-text text-transparent relative z-10`}
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

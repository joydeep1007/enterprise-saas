"use client";

import Image from "next/image";

const companies = [
  { name: "Microsoft", logo: "/azure.png" },
  { name: "AWS", logo: "/aws.png" },
  { name: "Google Cloud", logo: "/gcp.png" },
  { name: "Salesforce", logo: "/salesforce.png" },
  { name: "Oracle", logo: "/oracle.png" },
  { name: "SAP", logo: "/sap.png" },
  { name: "IBM", logo: "/ibm.png" },
  { name: "Cisco", logo: "/cisco.png" },
];

export default function TrustedBySection() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Subtle gradient fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 lg:w-48"
        style={{
          background:
            "linear-gradient(to right, #111827 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 lg:w-48"
        style={{
          background:
            "linear-gradient(to left, #111827 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-text-muted text-xs sm:text-sm uppercase tracking-widest font-medium">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div className="group relative flex">
          {/* Render logos twice for seamless infinite loop */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="marquee-track flex shrink-0 items-center gap-16 lg:gap-20 pr-16 lg:pr-20"
            >
              {companies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="relative h-12 w-32 sm:w-36 lg:w-40 flex items-center justify-center group/logo"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain opacity-60 group-hover/logo:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

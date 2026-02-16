"use client";

const companies = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Salesforce",
  "Oracle",
  "SAP",
  "IBM",
  "Cisco",
];

export default function TrustedBySection() {
  return (
    <section className="relative py-16 bg-dark border-y border-white/5 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-text-muted text-sm uppercase tracking-widest font-medium">
          Trusted by industry leaders worldwide
        </p>
      </div>

      {/* Gradient fade masks — left & right edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40"
        style={{
          background:
            "linear-gradient(to right, #111827 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40"
        style={{
          background:
            "linear-gradient(to left, #111827 0%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <div
        className="group relative flex"
        role="list"
        aria-label="Client logos"
      >
        {/* We render the list twice so the second copy seamlessly follows the first */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="marquee-track flex shrink-0 items-center gap-16 sm:gap-24 md:gap-32 pr-16 sm:pr-24 md:pr-32"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {companies.map((name) => (
              <span
                key={name}
                role="listitem"
                className="whitespace-nowrap text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-white/[0.35] opacity-70 select-none transition-all duration-300 hover:text-white hover:opacity-100 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

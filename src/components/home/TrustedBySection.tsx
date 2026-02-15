import SectionWrapper from "@/components/ui/SectionWrapper";

const logos = [
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
    <SectionWrapper className="!py-16 border-y border-white/5">
      <div className="text-center mb-10">
        <p className="text-text-muted text-sm uppercase tracking-widest font-medium">
          Trusted by industry leaders worldwide
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        role="list"
        aria-label="Client logos"
      >
        {logos.map((name) => (
          <div
            key={name}
            className="text-text-muted/40 hover:text-text-muted/80 transition-colors duration-300 text-xl font-bold tracking-wider select-none"
            role="listitem"
          >
            {name}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

import { Section } from "@/components/ui/section";
import type { HomeTrustedEcosystemModule as HomeTrustedEcosystemModuleData } from "@/content/home";

interface HomeTrustedEcosystemModuleProps {
  module: HomeTrustedEcosystemModuleData;
}

export function HomeTrustedEcosystemModule({ module }: HomeTrustedEcosystemModuleProps) {
  return (
    <Section className="py-16 md:py-24 border-t border-white/5">
      <div className="mb-10">
        <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">
          {module.sectionLabel}
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {module.sectionHeadline}
        </h3>
        <p className="text-sm text-muted-foreground leading-[1.8] max-w-xl">{module.sectionBody}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-4xl">
        {Object.entries(module.groups).map(([category, logos]) => (
          <div key={category}>
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-5 border-b border-white/5 pb-3">
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-white/40 hover:text-brand-teal hover:border-brand-teal/20 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(0,196,204,0.2)] transition-all duration-300 cursor-default"
                  data-testid={`logo-${logo.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

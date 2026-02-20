import { Section } from "@/components/ui/section";
import type { HomeProcessModule as HomeProcessModuleData } from "@/content/home";

interface HomeProcessModuleProps {
  module: HomeProcessModuleData;
}

export function HomeProcessModule({ module }: HomeProcessModuleProps) {
  return (
    <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">
          {module.sectionLabel}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">{module.sectionHeadline}</h3>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {module.steps.map((step, i) => (
          <div key={i} className="relative group" data-testid={`step-${step.title.toLowerCase()}`}>
            <div className="text-6xl font-black text-white/[0.04] mb-4 group-hover:text-brand-teal/10 transition-colors select-none">
              {step.step}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-[1.8]">{step.desc}</p>
            <div className="w-10 h-0.5 bg-brand-teal/30 mt-6 group-hover:w-full group-hover:bg-brand-teal transition-all duration-500" />
          </div>
        ))}
      </div>
    </Section>
  );
}

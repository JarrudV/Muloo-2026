import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { ProblemFramingSectionModule } from "@/types/modules";

interface ServiceProblemFramingModuleProps {
  module: ProblemFramingSectionModule;
}

export function ServiceProblemFramingModule({ module }: ServiceProblemFramingModuleProps) {
  const labelColor = module.accentColor ?? module.variant;

  return (
    <Section className={module.sectionClassName ?? "py-20 md:py-[120px] border-t border-white/5"}>
      <div className={cn("max-w-2xl", module.containerClassName)}>
        <span
          className={cn(
            "text-sm font-mono uppercase tracking-widest mb-6 block",
            module.labelClassName,
          )}
          style={{ color: labelColor ?? undefined }}
        >
          {module.sectionLabel}
        </span>
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white mb-8 leading-tight", module.headlineClassName)}>
          {module.headline}
        </h2>
        {module.body ? (
          <p className={cn("text-lg text-muted-foreground leading-[1.8]", module.bodyClassName)}>
            {module.body}
          </p>
        ) : null}
      </div>
    </Section>
  );
}

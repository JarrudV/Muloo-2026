import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/modules/services/sections/service-icon-map";
import type { OutcomesSectionModule } from "@/types/modules";

interface ServiceOutcomesModuleProps {
  module: OutcomesSectionModule;
}

export function ServiceOutcomesModule({ module }: ServiceOutcomesModuleProps) {
  return (
    <Section className={module.sectionClassName ?? "py-20 md:py-[120px] border-t border-white/5"}>
      <div className={cn("mb-16 max-w-2xl", module.containerClassName)}>
        <span className={cn("text-sm font-mono uppercase tracking-widest mb-4 block", module.labelClassName)} style={{ color: module.accentColor }}>
          {module.sectionLabel}
        </span>
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white", module.headlineClassName)}>
          {module.headline}
        </h2>
      </div>

      <div className={cn("grid md:grid-cols-3 gap-6", module.columnsClassName)}>
        {module.items.map((item, i) => (
          <div
            key={item.id ?? `${module.id}-${i}`}
            className={cn("glass-card rounded-2xl p-8", module.cardClassName)}
            style={{ borderTop: `3px solid ${module.accentColor}` }}
            data-testid={`card-outcome-${i}`}
          >
            {item.icon ? (
              <div
                className={cn(
                  "h-10 w-10 rounded-lg flex items-center justify-center mb-4",
                  module.iconWrapClassName,
                )}
                style={{ backgroundColor: `${module.accentColor}1A` }}
              >
                <ServiceIcon icon={item.icon} className="h-5 w-5" color={module.accentColor} />
              </div>
            ) : null}
            <h3 className={cn("text-xl font-bold mb-3 text-white", module.itemTitleClassName)}>
              {item.title}
            </h3>
            <p className={cn("text-muted-foreground text-sm leading-[1.8]", module.itemBodyClassName)}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

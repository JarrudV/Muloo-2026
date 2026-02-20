import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { ProcessStepsSectionModule } from "@/types/modules";

interface ServiceProcessStepsModuleProps {
  module: ProcessStepsSectionModule;
}

export function ServiceProcessStepsModule({ module }: ServiceProcessStepsModuleProps) {
  const accent = module.accentColor ?? "#00C4CC";
  const isGlassCardVariant = module.variant === "glassCards";

  return (
    <Section className={module.sectionClassName ?? "py-20 md:py-[120px] border-t border-white/5"}>
      <div className={cn("mb-16 max-w-2xl", module.containerClassName)}>
        <span className={cn("text-sm font-mono uppercase tracking-widest mb-4 block", module.labelClassName)} style={{ color: accent }}>
          {module.sectionLabel}
        </span>
        <h2 className={cn("text-3xl md:text-4xl font-bold text-white", module.headlineClassName)}>
          {module.headline}
        </h2>
      </div>

      <div className={cn("grid md:grid-cols-4 gap-8", module.columnsClassName)}>
        {module.items.map((item, i) => (
          <div
            key={item.id ?? `${module.id}-${i}`}
            className={cn(
              isGlassCardVariant
                ? "relative glass-card rounded-xl p-6 group transition-all duration-300 overflow-hidden"
                : "relative group",
              module.cardClassName,
            )}
            data-testid={`card-${module.id}-${i}`}
          >
            {isGlassCardVariant && (item.step || item.num) ? (
              <span className="absolute top-3 right-3 text-4xl font-extrabold text-white/[0.03] select-none">
                {item.step ?? item.num}
              </span>
            ) : null}

            {!isGlassCardVariant && (item.step || item.num) ? (
              <div className="text-6xl font-black text-white/[0.04] mb-4 group-hover:opacity-90 transition-colors select-none">
                {item.step ?? item.num}
              </div>
            ) : null}

            {isGlassCardVariant ? (
              <div
                className="w-full h-0.5 mb-5 origin-left transition-all duration-500 group-hover:scale-x-100 scale-x-[0.3]"
                style={{ backgroundColor: accent }}
              />
            ) : null}
            <h3 className={cn("text-xl font-bold mb-3 text-white", module.itemTitleClassName)}>{item.title}</h3>
            <p className={cn("text-muted-foreground text-sm leading-[1.8]", module.itemBodyClassName)}>
              {item.body}
            </p>
            {!isGlassCardVariant ? (
              <div
                className="w-10 h-0.5 mt-6 opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: accent }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

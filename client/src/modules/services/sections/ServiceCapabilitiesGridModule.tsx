import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { CapabilitiesGridSectionModule } from "@/types/modules";
import { ServiceIcon } from "@/modules/services/sections/service-icon-map";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface ServiceCapabilitiesGridModuleProps {
  module: CapabilitiesGridSectionModule;
}

export function ServiceCapabilitiesGridModule({ module }: ServiceCapabilitiesGridModuleProps) {
  if (module.variant === "tagCloud") {
    return (
      <Section className={module.sectionClassName ?? "py-20 md:py-[120px] border-t border-white/5"}>
        <div className={cn("mb-14 max-w-2xl", module.containerClassName)}>
          <span
            className={cn("text-sm font-mono uppercase tracking-widest mb-4 block", module.labelClassName)}
            style={{ color: module.accentColor }}
          >
            {module.sectionLabel}
          </span>
          <h2 className={cn("text-3xl md:text-4xl font-bold text-white", module.headlineClassName)}>
            {module.headline}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 max-w-3xl">
          {module.items.map((item, i) => (
            <span
              key={item.id ?? `${module.id}-tag-${i}`}
              className={cn(
                "px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm font-mono text-white/50 transition-all duration-300",
                module.tagClassName,
              )}
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              data-testid={`tag-${module.id}-${i}`}
            >
              {item.title}
            </span>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section className={module.sectionClassName ?? "py-20 md:py-[120px] border-t border-white/5"}>
      <div className={cn("mb-16 max-w-2xl", module.containerClassName)}>
        <span className={cn("text-sm font-mono uppercase tracking-widest mb-4 block", module.labelClassName)} style={{ color: module.accentColor }}>
          {module.sectionLabel}
        </span>
        {module.headline ? (
          <h2 className={cn("text-3xl md:text-4xl font-bold text-white", module.headlineClassName)}>
            {module.headline}
          </h2>
        ) : null}
      </div>

      <div className={cn("grid md:grid-cols-2 gap-6", module.columnsClassName)}>
        {module.items.map((item, i) => (
          <div
            key={item.id ?? `${module.id}-item-${i}`}
            className={cn(
              "glass-card rounded-2xl p-8 group transition-all duration-300",
              module.cardClassName,
            )}
            style={module.cardBorderTopColor ? { borderTop: `2px solid ${module.cardBorderTopColor}` } : undefined}
            data-testid={module.cardDataTestIdPrefix ? `${module.cardDataTestIdPrefix}-${i}` : undefined}
          >
            {!module.hideIcons && item.icon ? (
              <div
                className={cn(
                  "h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors",
                  module.iconWrapClassName,
                )}
                style={{ backgroundColor: `${module.accentColor}1A` }}
              >
                <ServiceIcon icon={item.icon} className="h-6 w-6" color={module.accentColor} />
              </div>
            ) : null}

            <h3 className={cn("text-xl font-bold mb-3 text-white", module.itemTitleClassName)}>
              {item.title}
            </h3>

            {item.subtitle ? (
              <div
                className={cn(
                  "text-sm font-mono text-muted-foreground mb-4 border-b border-white/10 pb-2",
                  module.itemSubtitleClassName,
                )}
              >
                {item.subtitle}
              </div>
            ) : null}

            <p className={cn("text-muted-foreground text-sm leading-[1.8]", module.itemBodyClassName)}>
              {item.body}
            </p>

            {module.showItemUnderline ? (
              <div
                className="w-10 h-0.5 mt-6 opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: module.underlineColor ?? module.accentColor }}
              />
            ) : null}

            {item.href && item.ctaLabel ? (
              <Link href={item.href}>
                <Button
                  variant="outline"
                  className={cn(
                    "mt-6 w-full border-white/10 text-white hover:bg-white/5",
                    module.itemCtaClassName,
                  )}
                >
                  {item.ctaLabel}
                </Button>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

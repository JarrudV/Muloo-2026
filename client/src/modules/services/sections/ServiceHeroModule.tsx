import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { ServiceHeroSectionModule } from "@/types/modules";

interface ServiceHeroModuleProps {
  module: ServiceHeroSectionModule;
}

function getMediaArray(module: ServiceHeroSectionModule) {
  if (!module.media) {
    return [];
  }
  return Array.isArray(module.media) ? module.media : [module.media];
}

export function ServiceHeroModule({ module }: ServiceHeroModuleProps) {
  const mediaItems = getMediaArray(module);

  return (
    <Section className={module.sectionClassName ?? "pt-32 pb-20 bg-hero-gradient"}>
      {module.variant === "with-grid-overlay" ? (
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
      ) : null}
      <div className={cn("max-w-4xl", module.containerClassName)}>
        {module.badgeLabel || mediaItems.length > 0 ? (
          <div className="flex items-center gap-4 mb-8">
            {module.badgeLabel ? (
              <Badge
                data-testid={`badge-${module.id}`}
                className={
                  module.badgeClassName ??
                  "border bg-transparent"
                }
                style={{
                  borderColor: `${module.accentColor}55`,
                  color: module.accentColor,
                  backgroundColor: `${module.accentColor}14`,
                }}
              >
                {module.badgeLabel}
              </Badge>
            ) : null}
            {mediaItems.map((media, i) => (
              <img
                key={`${module.id}-media-${i}`}
                src={media.src}
                alt={media.alt ?? ""}
                className="h-12 w-auto"
              />
            ))}
          </div>
        ) : null}

        <h1 className={cn("text-5xl md:text-7xl font-extrabold mb-8 text-white", module.headlineClassName)}>
          {module.headline}
        </h1>
        <p
          className={cn(
            "text-xl md:text-2xl text-muted-foreground leading-[1.8] pl-6",
            module.bodyClassName,
          )}
          style={{ borderLeft: `4px solid ${module.accentColor}` }}
        >
          {module.body}
        </p>
        {module.note ? (
          <p className={cn("text-sm text-white/40 font-mono mt-6 max-w-2xl", module.noteClassName)}>
            {module.note}
          </p>
        ) : null}

        {module.primaryCta || module.secondaryCta ? (
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {module.primaryCta ? (
              <Link href={module.primaryCta.href}>
                <Button
                  size="lg"
                  data-testid={`button-${module.id}-cta`}
                  className={cn("font-bold px-10 h-14 text-white", module.primaryCtaClassName)}
                  style={
                    module.primaryCtaClassName
                      ? undefined
                      : { backgroundColor: module.accentColor }
                  }
                >
                  {module.primaryCta.label} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : null}
            {module.secondaryCta ? (
              <Link href={module.secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "border-white/15 text-white hover:bg-white/5 px-10 h-14",
                    module.secondaryCtaClassName,
                  )}
                >
                  {module.secondaryCta.label}
                </Button>
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { CtaBandSectionModule } from "@/types/modules";

interface ServiceCtaBandModuleProps {
  module: CtaBandSectionModule;
}

export function ServiceCtaBandModule({ module }: ServiceCtaBandModuleProps) {
  return (
    <Section className={module.sectionClassName ?? "text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden"}>
      {module.variant === "with-grid-overlay" ? (
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
      ) : null}
      <div className={cn("relative z-10 max-w-3xl mx-auto", module.containerClassName)}>
        <h2 className={cn("text-4xl md:text-5xl font-bold mb-6 text-white", module.headlineClassName)}>
          {module.headline}
        </h2>
        <p className={cn("text-xl text-muted-foreground mb-10 leading-[1.8]", module.bodyClassName)}>
          {module.body}
        </p>
        <Link href={module.cta.href}>
          <Button
            size="lg"
            className={cn("font-bold px-10 h-14 text-white rounded-lg", module.ctaClassName)}
            style={module.useInlineStyleAccent ? { backgroundColor: module.accentColor } : undefined}
            data-testid={`button-${module.id}-cta`}
          >
            {module.cta.label} <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

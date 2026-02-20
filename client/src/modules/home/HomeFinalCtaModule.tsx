import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { HomeFinalCtaModule as HomeFinalCtaModuleData } from "@/content/home";

interface HomeFinalCtaModuleProps {
  module: HomeFinalCtaModuleData;
}

export function HomeFinalCtaModule({ module }: HomeFinalCtaModuleProps) {
  return (
    <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to build <span className="text-gradient-teal">properly</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">{module.body}</p>
        <Link href={module.cta.href}>
          <Button
            size="lg"
            className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-14 rounded-lg glow-orange-sm"
            data-testid="button-cta-final"
          >
            {module.cta.label} <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

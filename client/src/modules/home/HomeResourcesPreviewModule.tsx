import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { HomeResourcesPreviewModule as HomeResourcesPreviewModuleData } from "@/content/home";

interface HomeResourcesPreviewModuleProps {
  module: HomeResourcesPreviewModuleData;
}

export function HomeResourcesPreviewModule({ module }: HomeResourcesPreviewModuleProps) {
  return (
    <Section className="py-20 md:py-[120px] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-30" />
      <div className="relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">
            {module.sectionLabel}
          </h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-xl leading-[1.8]">
            {module.sectionBody}
          </p>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {module.sectionHeadline}
          </h3>
          <p className="text-muted-foreground max-w-xl text-lg leading-[1.8]">
            {module.sectionSubheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {module.cards.map((card, i) => (
            <a
              key={i}
              href={module.exploreCta.href}
              className="group glass-card rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-brand-teal/15 transition-all duration-300"
              data-testid={`card-insight-${i}`}
            >
              <span className="inline-flex self-start items-center rounded-full bg-brand-teal/5 border border-brand-teal/10 px-3 py-1 text-[11px] font-mono text-brand-teal/70 uppercase tracking-wider mb-5">
                {card.badge}
              </span>
              <h4 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-brand-teal transition-colors">
                {card.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-[1.8] mb-6 flex-grow">
                {card.desc}
              </p>
              <span className="text-sm font-semibold text-brand-teal/70 group-hover:text-brand-teal flex items-center transition-colors">
                Read more{" "}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link href={module.exploreCta.href}>
            <Button
              variant="outline"
              size="lg"
              className="border-white/10 text-white hover:bg-white/5 hover:border-brand-teal/20 px-8 h-12 rounded-lg"
              data-testid="button-explore-insights"
            >
              {module.exploreCta.label} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { MiniCaseSnippetSectionModule } from "@/types/modules";

interface ServiceMiniCaseSnippetModuleProps {
  module: MiniCaseSnippetSectionModule;
}

export function ServiceMiniCaseSnippetModule({ module }: ServiceMiniCaseSnippetModuleProps) {
  return (
    <Section className={module.sectionClassName ?? "py-20 md:py-[120px] bg-section-soft border-t border-white/5"}>
      <div
        className={cn("glass-card rounded-2xl p-10 md:p-14 max-w-3xl", module.blockClassName)}
        style={{ borderLeft: `4px solid ${module.accentColor}` }}
        data-testid={`card-${module.id}`}
      >
        <span className="text-sm font-mono uppercase tracking-widest mb-6 block" style={{ color: module.accentColor }}>
          {module.sectionLabel}
        </span>
        {module.headline ? <h3 className="text-2xl font-bold text-white mb-6">{module.headline}</h3> : null}
        {module.quote ? (
          <blockquote className={cn("text-lg md:text-xl text-white/90 leading-[1.8] mb-8", module.quoteClassName)}>
            "{module.quote}"
          </blockquote>
        ) : module.body ? (
          <p className="text-muted-foreground leading-[1.8]">{module.body}</p>
        ) : null}
        {module.person || module.role ? (
          <div>
            {module.person ? <p className="text-white font-bold">{module.person}</p> : null}
            {module.role ? <p className="text-muted-foreground text-sm">{module.role}</p> : null}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

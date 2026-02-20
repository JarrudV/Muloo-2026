import { Check, TrendingUp, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import type { HomePainPointsModule as HomePainPointsModuleData } from "@/content/home";

interface HomePainPointsModuleProps {
  module: HomePainPointsModuleData;
}

function DashboardMock({ module }: HomePainPointsModuleProps) {
  return (
    <div className="relative w-full max-w-md mx-auto" data-testid="dashboard-mock">
      <div className="absolute -inset-8 bg-brand-teal/[0.03] blur-3xl rounded-full pointer-events-none" />
      <div className="relative space-y-4">
        <div className="glass-card rounded-xl p-5 border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Revenue Velocity
            </span>
            <TrendingUp className="h-4 w-4 text-brand-teal/60" />
          </div>
          <div className="flex items-end gap-1 h-16">
            {module.dashboardBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-brand-teal/20 hover:bg-brand-teal/30 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-[10px] text-muted-foreground/40 font-mono">Jan</span>
            <span className="text-[10px] text-muted-foreground/40 font-mono">Dec</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card rounded-xl p-5 border-white/[0.06]">
            <span className="text-xs font-mono text-muted-foreground/60 block mb-2">
              Pipeline
            </span>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/[0.03] overflow-hidden">
                <div className="h-full rounded-full bg-brand-teal/40 w-[72%]" />
              </div>
              <div className="h-2 rounded-full bg-white/[0.03] overflow-hidden">
                <div className="h-full rounded-full bg-brand-teal/25 w-[48%]" />
              </div>
              <div className="h-2 rounded-full bg-white/[0.03] overflow-hidden">
                <div className="h-full rounded-full bg-brand-teal/15 w-[31%]" />
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground/40 font-mono mt-3 block">
              3 stages active
            </span>
          </div>

          <div className="glass-card rounded-xl p-5 border-white/[0.06]">
            <span className="text-xs font-mono text-muted-foreground/60 block mb-3">
              Automations
            </span>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-brand-teal/50" />
              <span className="text-xs text-white/60">12 active</span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-1.5 w-1.5 rounded-full bg-brand-teal/30" />
              ))}
              <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>
            <span className="text-[10px] text-muted-foreground/40 font-mono mt-3 block">
              Workflows synced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePainPointsModule({ module }: HomePainPointsModuleProps) {
  return (
    <Section className="py-20 md:py-[120px] border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-10 leading-tight">
            {module.headline}
          </h2>

          <p className="text-lg text-muted-foreground leading-[1.8] mb-12">{module.body}</p>

          <ul className="space-y-5">
            {module.points.map((point, i) => (
              <li key={i} className="flex items-start gap-4" data-testid={`card-pain-${i}`}>
                <span className="mt-0.5 shrink-0 h-6 w-6 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                </span>
                <span className="text-[15px] text-white/80 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <DashboardMock module={module} />
      </div>
    </Section>
  );
}

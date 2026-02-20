import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, Shield, Workflow } from "lucide-react";
import type { HomeHeroModule as HomeHeroModuleData } from "@/content/home";

interface HomeHeroModuleProps {
  module: HomeHeroModuleData;
}

function RotatingBadge({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <div
      className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-sm h-9 min-w-[280px]"
      data-testid="badge-hero"
    >
      <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2 animate-pulse shrink-0" />
      <span
        className="transition-all duration-400"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-6px)",
        }}
      >
        {phrases[index]}
      </span>
    </div>
  );
}

function SystemDiagram({ module }: HomeHeroModuleProps) {
  const iconMap = {
    cloud: <Cloud className="h-5 w-5" />,
    server: <Server className="h-5 w-5" />,
    workflow: <Workflow className="h-5 w-5" />,
    shield: <Shield className="h-5 w-5" />,
  } as const;

  return (
    <div
      className="relative w-full max-w-md mx-auto hidden lg:block"
      data-testid="hero-system-diagram"
    >
      <div className="absolute inset-0 bg-brand-teal/5 blur-3xl rounded-full" />
      <div className="relative space-y-4">
        {module.systemNodes.map((node, i) => (
          <div key={`${node.label}-${i}`} className="relative">
            {i > 0 && <div className="absolute -top-4 left-8 w-px h-4 bg-white/10" />}
            <div
              className="glass-card rounded-xl p-4 flex items-center gap-4 hover:-translate-x-1 transition-transform duration-300"
              style={{ borderColor: `${node.color}15` }}
            >
              <div
                className="p-2.5 rounded-lg shrink-0"
                style={{ backgroundColor: `${node.color}12`, color: node.color }}
              >
                {iconMap[node.icon]}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{node.label}</div>
                <div className="text-xs text-muted-foreground font-mono">{node.sub}</div>
              </div>
              <div
                className="ml-auto h-1.5 w-1.5 rounded-full opacity-60"
                style={{ backgroundColor: node.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeHeroModule({ module }: HomeHeroModuleProps) {
  return (
    <div className="relative pt-32 pb-24 md:pt-44 md:pb-28 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-16">
          <div className="max-w-3xl flex-1">
            <RotatingBadge phrases={module.rotatingPhrases} />

            <h1 className="text-4xl md:text-[3.5rem] lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
              {module.headline?.split("revenue.")[0]}
              <span className="text-gradient-teal">revenue.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
              {module.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href={module.primaryCta.href}>
                <Button
                  size="lg"
                  className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-8 h-14 rounded-lg glow-orange-sm hover:-translate-y-0.5 transition-all"
                  data-testid="button-hero-cta"
                >
                  {module.primaryCta.label} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={module.secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/15 text-white hover:bg-white/5 px-8 h-14 rounded-lg"
                  data-testid="button-hero-secondary"
                >
                  {module.secondaryCta.label}
                </Button>
              </Link>
            </div>

            <p className="text-sm font-mono text-muted-foreground/50 tracking-wider">
              {module.footerNote}
            </p>
          </div>

          <SystemDiagram module={module} />
        </div>
      </div>
    </div>
  );
}

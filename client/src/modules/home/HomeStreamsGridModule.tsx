import type { ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight, Bot, Cpu, Database, Layout } from "lucide-react";
import { Section } from "@/components/ui/section";
import type { HomeStreamsGridModule as HomeStreamsGridModuleData } from "@/content/home";

interface HomeStreamsGridModuleProps {
  module: HomeStreamsGridModuleData;
}

const streamColors: Record<
  string,
  { accent: string; bg: string; text: string; glow: string }
> = {
  hub: {
    accent: "bg-stream-hub",
    bg: "bg-stream-hub/10",
    text: "text-stream-hub",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(244,118,33,0.35)]",
  },
  build: {
    accent: "bg-stream-build",
    bg: "bg-stream-build/10",
    text: "text-stream-build",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(21,93,252,0.35)]",
  },
  ai: {
    accent: "bg-stream-ai",
    bg: "bg-stream-ai/10",
    text: "text-stream-ai",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(193,64,255,0.35)]",
  },
  product: {
    accent: "bg-stream-product",
    bg: "bg-stream-product/10",
    text: "text-stream-product",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(89,191,150,0.35)]",
  },
};

const pillarIcons: Record<string, ReactNode> = {
  hub: <Database className="h-6 w-6" />,
  build: <Cpu className="h-6 w-6" />,
  ai: <Bot className="h-6 w-6" />,
  product: <Layout className="h-6 w-6" />,
};

export function HomeStreamsGridModule({ module }: HomeStreamsGridModuleProps) {
  return (
    <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">
          {module.sectionLabel}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
          {module.sectionHeadline}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {module.items.map((pillar) => {
          const colors = streamColors[pillar.id];
          return (
            <Link key={pillar.id} href={pillar.href}>
              <div
                className={`group glass-card h-full p-8 rounded-2xl flex flex-col cursor-pointer hover:-translate-y-1 transition-all duration-300 ${colors.glow}`}
                data-testid={`card-service-${pillar.id}`}
              >
                <div className={`mb-6 p-3 rounded-xl w-fit ${colors.bg} ${colors.text}`}>
                  {pillarIcons[pillar.id]}
                </div>

                <h4 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                  {pillar.subtitle}
                </h4>
                <h3 className="text-2xl font-bold mb-3 text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.8] mb-6 flex-grow">
                  {pillar.desc}
                </p>

                <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {pillar.features.slice(0, 3).map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-white/50">
                      <span className={`h-1.5 w-1.5 rounded-full mr-2 ${colors.accent}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center text-sm font-semibold ${colors.text} mt-auto`}>
                  Explore{" "}
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

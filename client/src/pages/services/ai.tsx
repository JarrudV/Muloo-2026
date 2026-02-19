import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Code2,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageSquare,
  RotateCcw,
  Brain,
  Cpu,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceAiContent } from "@/lib/content";

const streamPurple = "#C140FF";

const serviceIcons = [Code2, Sparkles, Bot, ShieldCheck];

export function ServicesAi() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 border-[#C140FF]/30 text-[#C140FF] bg-[#C140FF]/5"
            data-testid="badge-ai"
          >
            Muloo AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
            {serviceAiContent.h1}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-[#C140FF] pl-6">
            {serviceAiContent.intro}
          </p>
        </div>
      </Section>

      {/* AI Workflow Diagram */}
      <Section className="py-20 bg-section-soft">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How AI Agents Work
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our agents follow a continuous loop — ingesting signals, reasoning
            through context, executing actions, and learning from feedback.
          </p>
        </div>

        <div
          className="bg-[#0f1115] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          data-testid="diagram-ai-workflow"
        >
          <div
            className="absolute top-0 right-0 w-full h-full pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, rgba(193, 64, 255, 0.08), transparent)`,
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            {/* Input Signal */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="h-10 w-10 text-muted-foreground" />
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                Input Signal
              </span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: `rgba(193, 64, 255, 0.3)` }}
              />
              <ArrowRight className="h-4 w-4" style={{ color: streamPurple }} />
            </div>
            <div className="flex md:hidden items-center">
              <ArrowRight
                className="h-4 w-4 rotate-90"
                style={{ color: streamPurple }}
              />
            </div>

            {/* AI Agent */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="h-24 w-24 rounded-xl flex items-center justify-center glow-purple-sm"
                style={{
                  backgroundColor: `rgba(193, 64, 255, 0.1)`,
                  border: `1px solid rgba(193, 64, 255, 0.3)`,
                }}
              >
                <Brain className="h-10 w-10" style={{ color: streamPurple }} />
              </div>
              <span className="font-mono text-sm" style={{ color: streamPurple }}>
                AI Agent
              </span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: `rgba(193, 64, 255, 0.3)` }}
              />
              <ArrowRight className="h-4 w-4" style={{ color: streamPurple }} />
            </div>
            <div className="flex md:hidden items-center">
              <ArrowRight
                className="h-4 w-4 rotate-90"
                style={{ color: streamPurple }}
              />
            </div>

            {/* Action */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <Zap className="h-10 w-10 text-muted-foreground" />
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                Action
              </span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: `rgba(193, 64, 255, 0.3)` }}
              />
              <ArrowRight className="h-4 w-4" style={{ color: streamPurple }} />
            </div>
            <div className="flex md:hidden items-center">
              <ArrowRight
                className="h-4 w-4 rotate-90"
                style={{ color: streamPurple }}
              />
            </div>

            {/* Feedback Loop */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="h-24 w-24 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `rgba(193, 64, 255, 0.05)`,
                  border: `1px solid rgba(193, 64, 255, 0.2)`,
                }}
              >
                <RotateCcw
                  className="h-10 w-10"
                  style={{ color: streamPurple }}
                />
              </div>
              <span className="font-mono text-sm" style={{ color: streamPurple }}>
                Feedback
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">
              Continuous Intelligence Loop
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every agent is designed to observe, decide, act, and improve —
              turning raw signals into reliable outcomes.
            </p>
          </div>
        </div>
      </Section>

      {/* Code Snippet Block */}
      <Section className="py-24 glow-ai">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Agent Configuration
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Define intelligent agents with structured configs. Here's how a
            typical AI service agent is configured in our framework.
          </p>

          <div className="code-block" data-testid="code-block-agent">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                agent.config.ts
              </span>
            </div>
            <pre className="text-xs md:text-sm leading-relaxed">
              <code>
{`import { Agent } from "@muloo/ai-agents";

export const supportAgent = new Agent({
  name: "support-triage",
  model: "gpt-4o",
  temperature: 0.2,
  systemPrompt: \`You are a support triage agent.
    Classify tickets by urgency and route
    to the appropriate team.\`,
  tools: ["classify", "route", "escalate"],
  memory: { type: "vector", ttl: "24h" },
  feedback: {
    enabled: true,
    channel: "webhook",
    endpoint: "/api/agent/feedback",
  },
});`}
              </code>
            </pre>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="py-24 bg-section-soft">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What we deliver
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Practical AI implementation across your engineering, product, and
            operations teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceAiContent.services.map((service, i) => {
            const IconComponent = serviceIcons[i] || Cpu;
            return (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col items-start group relative overflow-hidden"
                data-testid={`card-service-${i}`}
              >
                <div className="absolute top-0 right-0 p-3 opacity-5">
                  <Workflow className="h-24 w-24 text-[#C140FF]" />
                </div>

                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `rgba(193, 64, 255, 0.1)` }}
                >
                  <IconComponent
                    className="h-6 w-6"
                    style={{ color: streamPurple }}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#C140FF] transition-colors">
                  {service.title}
                </h3>
                <div className="text-sm font-mono text-muted-foreground mb-4 w-full">
                  Lead: {service.lead}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <div
                  className="w-12 h-1 mb-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: streamPurple }}
                />

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-white hover:bg-[#C140FF]/10 hover:text-[#C140FF] hover:border-[#C140FF]/30"
                    data-testid={`button-discuss-${i}`}
                  >
                    Discuss Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Ready to deploy intelligence?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Move from AI hype to practical engineering.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="font-bold px-10 h-14 text-white"
            style={{ backgroundColor: streamPurple }}
            data-testid="button-book-ai-audit"
          >
            Book an AI Audit <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

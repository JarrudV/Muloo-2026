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
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceAiContent } from "@/lib/content";

const streamPurple = "#C140FF";

const whatWeDoItems = [
  { icon: Code2, title: "Codex Dev Agents", desc: "AI coding assistants that accelerate internal development velocity and reduce time to ship." },
  { icon: Sparkles, title: "Rapid Prototyping", desc: "Vibe coding sessions to go from idea to functional prototype in days, not weeks." },
  { icon: Bot, title: "AI Service Agents", desc: "Autonomous agents that triage support tickets and handle routine customer inquiries." },
  { icon: ShieldCheck, title: "AI Security Audits", desc: "Auditing LLM prompts and data pipelines for vulnerabilities and data leakage." },
  { icon: Workflow, title: "Workflow Automation", desc: "Intelligent automation that connects AI reasoning to your existing business processes." },
  { icon: Brain, title: "Model Selection", desc: "Choosing the right model for the job — balancing cost, latency, and accuracy." },
];

const howWeWorkSteps = [
  { num: "01", title: "Discover", desc: "Identify high-impact use cases and audit existing data pipelines for AI readiness." },
  { num: "02", title: "Architect", desc: "Design agent architecture, define guardrails, and select models for each use case." },
  { num: "03", title: "Ship", desc: "Build, test, and deploy agents with monitoring, feedback loops, and safety nets." },
  { num: "04", title: "Support", desc: "Continuous improvement through usage analytics, prompt refinement, and model updates." },
];

const outcomes = [
  { title: "Faster development", desc: "AI-assisted coding reduces development cycles by 40-60% on routine engineering tasks." },
  { title: "Autonomous operations", desc: "Support agents handle tier-1 queries without human intervention, 24/7." },
  { title: "Production confidence", desc: "Every agent ships with monitoring, guardrails, and human escalation paths." },
];

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
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#C140FF] pl-6">
            {serviceAiContent.intro}
          </p>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4">
            The challenge
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Everyone's talking about AI, but most implementations are demos, not systems. Chatbots that hallucinate. Agents with no guardrails. Prototypes that never ship. You need practical AI that actually runs in production.
          </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4">
            What we do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Practical AI, Production-Ready
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whatWeDoItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex items-start gap-6"
                data-testid={`card-service-${i}`}
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 bg-[#C140FF]/10">
                  <IconComponent className="h-6 w-6 text-[#C140FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How We Work */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4">
            How we work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Structured. Iterative. Transparent.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howWeWorkSteps.map((step, i) => (
            <div key={i} className="group relative" data-testid={`step-${i}`}>
              <span className="text-6xl font-black text-white/[0.04] block mb-4">
                {step.num}
              </span>
              <div
                className="w-12 h-1 mb-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: streamPurple }}
              />
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-muted-foreground leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visual Mock — Continuous Intelligence Loop */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4">
              Intelligence loop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Continuous Intelligence Loop
            </h2>
            <p className="text-muted-foreground leading-[1.8]">
              Every agent is designed to observe, decide, act, and improve — turning raw signals into reliable outcomes.
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

            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Input Signal */}
              <div className="flex items-center gap-4 w-full">
                <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="h-8 w-8 text-muted-foreground" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">Input Signal</span>
                <div className="flex-1" />
                <ArrowRight className="h-4 w-4 text-[#C140FF] rotate-90 md:rotate-0" />
              </div>

              {/* AI Agent */}
              <div className="flex items-center gap-4 w-full">
                <div
                  className="h-16 w-16 rounded-xl flex items-center justify-center shrink-0 glow-purple-sm"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.1)`,
                    border: `1px solid rgba(193, 64, 255, 0.3)`,
                  }}
                >
                  <Brain className="h-8 w-8" style={{ color: streamPurple }} />
                </div>
                <span className="font-mono text-sm" style={{ color: streamPurple }}>AI Agent</span>
                <div className="flex-1" />
                <ArrowRight className="h-4 w-4 text-[#C140FF] rotate-90 md:rotate-0" />
              </div>

              {/* Action */}
              <div className="flex items-center gap-4 w-full">
                <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">Action</span>
                <div className="flex-1" />
                <ArrowRight className="h-4 w-4 text-[#C140FF] rotate-90 md:rotate-0" />
              </div>

              {/* Feedback */}
              <div className="flex items-center gap-4 w-full">
                <div
                  className="h-16 w-16 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.05)`,
                    border: `1px solid rgba(193, 64, 255, 0.2)`,
                  }}
                >
                  <RotateCcw className="h-8 w-8" style={{ color: streamPurple }} />
                </div>
                <span className="font-mono text-sm" style={{ color: streamPurple }}>Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4">
            Outcomes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            What changes after we're involved
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl border-t-2 border-[#C140FF]"
              data-testid={`card-outcome-${i}`}
            >
              <h3 className="text-xl font-bold mb-3 text-white">{outcome.title}</h3>
              <p className="text-muted-foreground leading-[1.8]">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="glass-card p-10 md:p-14 rounded-2xl border-l-4 border-[#C140FF] max-w-4xl">
          <p className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-6">
            Case study
          </p>
          <blockquote className="text-xl md:text-2xl text-white leading-[1.8] mb-6">
            "Muloo deployed a triage agent that handles 60% of our inbound support tickets automatically. Response times dropped from hours to seconds."
          </blockquote>
          <p className="text-muted-foreground">
            <span className="text-white font-semibold">David Chen</span>, Head of Support — Nexus Systems
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10">
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
              style={{ backgroundColor: "#C140FF" }}
              data-testid="button-book-ai-audit"
            >
              Book an AI Audit <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

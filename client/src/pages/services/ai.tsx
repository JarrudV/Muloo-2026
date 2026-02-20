import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Code2,
  ShieldCheck,
  Zap,
  Brain,
  Workflow,
  BarChart3,
  Activity,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceAiContent } from "@/lib/content";
import { CodexSnippet } from "@/components/sections/CodexSnippet";

const streamPurple = "#C140FF";

const serviceIcons = [Bot, Code2, Workflow, ShieldCheck];
const codexSnippetLines = [
  "const ticket = await queue.next();",
  "const context = await crm.enrich(ticket.customerId);",
  "const plan = await agent.reason({ ticket, context, policy });",
  "const action = await agent.execute(plan);",
  "await audit.log({ ticketId: ticket.id, action, model: plan.model });",
  "if (action.escalationRequired) await human.handoff(action);",
  "return monitor.capture({ latency: action.ms, cost: action.usd });",
];

export function ServicesAi() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Muloo AI | Applied AI & Agentic Automation"
        description="Practical AI systems for enterprise. We deploy autonomous agents, automated triage systems, and intelligent workflows with strict safety guardrails."
      />
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
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#C140FF] pl-6 max-w-2xl">
            {serviceAiContent.intro}
          </p>
          <p className="text-sm text-white/40 font-mono mt-6 max-w-2xl">We apply AI inside defined business boundaries, not as experimental overlays.</p>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-6 block">The problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Most AI projects never leave the demo.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Chatbots that hallucinate. Agents with no guardrails. Prototypes that impressed in a meeting but never shipped. AI only creates value when it's deployed into real workflows with monitoring, safety nets, and measurable outcomes.
          </p>
        </div>
      </Section>

      {/* What We Deploy */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">What we deploy</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Four Applied AI Systems</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceAiContent.services.map((service, i) => {
            const IconComponent = serviceIcons[i];
            return (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl group hover:border-[#C140FF]/20 transition-all duration-300"
                data-testid={`card-service-${i}`}
              >
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 bg-[#C140FF]/10">
                    <IconComponent className="h-6 w-6 text-[#C140FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.8]">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Workflow Visual */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">How it works</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Agent Workflow Loop</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              Every agent follows the same disciplined loop: a trigger fires, the agent reasons and acts, results are logged, and the system learns. No black boxes.
            </p>
            <ul className="space-y-4">
              {[
                "Deterministic triggers — no ambiguous activation",
                "Structured reasoning with guardrails",
                "Actions logged and auditable",
                "Continuous feedback improves accuracy over time",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamPurple }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-ai-workflow">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(193, 64, 255, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">agent-workflow.loop</span>
              </div>

              <div className="flex flex-col gap-3">
                {/* Trigger */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.03)`,
                    border: `1px solid rgba(193, 64, 255, 0.1)`,
                  }}
                >
                  <Zap className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.5)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.7)` }}>Trigger</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Webhook · Schedule · Event</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(193, 64, 255, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                  </div>
                </div>

                {/* Agent */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.06)`,
                    border: `1px solid rgba(193, 64, 255, 0.25)`,
                    boxShadow: `0 0 20px -8px rgba(193, 64, 255, 0.15)`,
                  }}
                >
                  <Brain className="h-5 w-5 shrink-0" style={{ color: streamPurple }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: streamPurple }}>Agent</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Reason · Decide · Guardrails</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(193, 64, 255, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                  </div>
                </div>

                {/* Action */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.03)`,
                    border: `1px solid rgba(193, 64, 255, 0.1)`,
                  }}
                >
                  <Activity className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.5)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.7)` }}>Action</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Execute · Log · Notify</span>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center py-0.5">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: `rgba(193, 64, 255, 0.4)` }} />
                    <div className="w-px h-3" style={{ backgroundColor: `rgba(193, 64, 255, 0.15)` }} />
                  </div>
                </div>

                {/* Reporting Loop */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(193, 64, 255, 0.04)`,
                    border: `1px solid rgba(193, 64, 255, 0.15)`,
                  }}
                >
                  <BarChart3 className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.6)` }} />
                  <div>
                    <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.8)` }}>Reporting Loop</span>
                    <span className="text-[9px] text-white/20 block font-mono mt-0.5">Measure · Learn · Improve</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">Agent active</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">Loop: continuous</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Codex Acceleration Snippet */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Codex acceleration</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Where AI assistance fits in production delivery
            </h2>
            <p className="text-muted-foreground leading-[1.8] mb-8">
              We use code agents to accelerate deterministic implementation tasks, then enforce human review, policy checks, and audit logging before deployment. Speed without control is still risk.
            </p>
            <ul className="space-y-4">
              {[
                "Agent output is scoped to defined contracts",
                "Every action emits structured audit events",
                "Escalation to humans is explicit and immediate",
                "Performance and cost are monitored continuously",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamPurple }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <CodexSnippet
            title="agent-ticket-triage.ts"
            fileLabel="muloo-ai/pipelines/support"
            lines={codexSnippetLines}
            accentColor={streamPurple}
          />
        </div>
      </Section>

      {/* AI With Guardrails */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI With Guardrails</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Controlled deployment", desc: "Staged rollouts with kill switches — no agent goes live without validation." },
            { title: "Data boundary protection", desc: "Strict controls on what data agents can access, process, and store." },
            { title: "Audit logging", desc: "Every agent decision, action, and outcome is logged and traceable." },
            { title: "Performance monitoring", desc: "Accuracy, latency, and cost tracked continuously across every interaction." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(193, 64, 255, 0.3)` }}
              data-testid={`card-guardrail-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Should Reduce Risk */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Assurance</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Should Reduce Risk, Not Add It.</h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Every AI deployment we deliver is scoped, tested, and monitored before it touches production data. We don't experiment on your business. Agents are validated against real scenarios, deployed with rollback capability, and measured against defined success criteria — so leadership can approve with confidence, not anxiety.
          </p>
        </div>
      </Section>

      {/* Engagement Model */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-4 block">Engagement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How we engage</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "01", title: "Pilot", desc: "Identify the highest-value use case, build a scoped proof of concept, and measure impact." },
            { num: "02", title: "Deploy", desc: "Production deployment with monitoring, guardrails, and human escalation paths." },
            { num: "03", title: "Monitor", desc: "Track accuracy, latency, cost, and user satisfaction across every agent interaction." },
            { num: "04", title: "Optimise", desc: "Prompt refinement, model updates, and workflow adjustments based on real usage data." },
          ].map((step, i) => (
            <div
              key={i}
              data-testid={`card-engagement-${i}`}
              className="relative glass-card rounded-xl p-6 group hover:border-[#C140FF]/20 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-4xl font-extrabold text-white/[0.03] select-none">{step.num}</span>
              <div
                className="w-full h-0.5 mb-5 origin-left transition-all duration-500 group-hover:scale-x-100 scale-x-[0.3]"
                style={{ backgroundColor: `rgba(193, 64, 255, 0.3)` }}
              />
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: `4px solid ${streamPurple}` }}
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-[#C140FF] uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Muloo deployed a triage agent that handles 60% of our inbound support tickets automatically. Response times dropped from hours to seconds."
          </blockquote>
          <div>
            <p className="text-white font-bold">David Chen</p>
            <p className="text-muted-foreground text-sm">Head of Support — Nexus Systems</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to deploy applied AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's identify where AI creates real operational lift for your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white"
              style={{ backgroundColor: streamPurple }}
              data-testid="button-explore-ai"
            >
              Explore AI opportunities <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

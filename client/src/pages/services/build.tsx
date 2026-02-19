import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Webhook, Code2, Shield, Zap, Database, Terminal, Server, RefreshCw, Lock, Activity } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceBuildContent } from "@/lib/content";

const streamBlue = "#155DFC";

export function ServicesBuild() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 border-[#155DFC]/30 text-[#155DFC] bg-[#155DFC]/5"
            data-testid="badge-build"
          >
            Muloo Build
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
            {serviceBuildContent.h1}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#155DFC] pl-6">
            {serviceBuildContent.intro}
          </p>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-6 block">The challenge</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Modern stacks rarely fail because of strategy.<br />They fail because of architecture.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Integration gaps compound silently. APIs drift out of sync, middleware breaks on edge cases, and data inconsistencies erode trust in every downstream system. Your platforms work individually — but they don't work together. The problem isn't the tools. It's the connective tissue between them.
          </p>
        </div>
      </Section>

      {/* What We Build */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">What we build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Engineering That Connects Systems</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: "API Development", desc: "RESTful and GraphQL APIs designed with typed contracts, versioning, and comprehensive documentation." },
            { icon: Webhook, title: "Middleware Architecture", desc: "Typed data pipelines that sync, transform, and route data between any two systems with retry logic and structured error handling." },
            { icon: Lock, title: "Client Portals", desc: "Authenticated web applications with role-based access, giving your customers and teams self-service capabilities." },
            { icon: Zap, title: "Event-Based Integrations", desc: "Webhook listeners, message queues, and event-driven architectures that react to changes across your stack in real time." },
            { icon: Database, title: "Data Sync & Governance", desc: "Schema mapping, validation rules, deduplication, and incremental sync to keep data consistent across every platform." },
            { icon: RefreshCw, title: "Platform Connectivity", desc: "Connect any system — CRMs, ERPs, payment gateways, shipping providers, or proprietary internal tools." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[#155DFC]/20 transition-all duration-300"
              data-testid={`card-capability-${i}`}
            >
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors"
                style={{ backgroundColor: `rgba(21, 93, 252, 0.1)` }}
              >
                <item.icon className="h-6 w-6" style={{ color: streamBlue }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture Visual Block */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How Data Moves Through Your Stack</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8">
              We design integration pipelines that handle failure gracefully, log extensively, and scale with your data volume. Every layer is typed, tested, and monitored.
            </p>
            <ul className="space-y-4">
              {[
                "Retry logic with exponential backoff",
                "Structured logging at every pipeline stage",
                "Schema validation before data enters any system",
                "Graceful degradation when downstream services fail",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamBlue }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden" data-testid="diagram-architecture">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, rgba(21, 93, 252, 0.06), transparent)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">system-architecture</span>
              </div>

              <div className="flex flex-col gap-4">
                {/* Source Systems */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {["ERP", "CRM", "Payments"].map((label) => (
                      <div key={label} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
                        {label}
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider ml-auto">Sources</span>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center py-1">
                  <div className="w-px h-6" style={{ backgroundColor: `rgba(21, 93, 252, 0.3)` }} />
                </div>

                {/* API Gateway */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(21, 93, 252, 0.05)`,
                    border: `1px solid rgba(21, 93, 252, 0.2)`,
                    boxShadow: `0 0 30px -10px rgba(21, 93, 252, 0.15)`,
                  }}
                >
                  <Shield className="h-5 w-5 shrink-0" style={{ color: streamBlue }} />
                  <div>
                    <span className="font-mono text-sm font-semibold" style={{ color: streamBlue }}>API Gateway</span>
                    <span className="text-[10px] text-muted-foreground block font-mono">Auth · Rate Limit · Validate</span>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center py-1">
                  <div className="w-px h-6" style={{ backgroundColor: `rgba(21, 93, 252, 0.3)` }} />
                </div>

                {/* Middleware */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{
                    backgroundColor: `rgba(21, 93, 252, 0.08)`,
                    border: `1px solid rgba(21, 93, 252, 0.3)`,
                    boxShadow: `0 0 30px -10px rgba(21, 93, 252, 0.25)`,
                  }}
                >
                  <Terminal className="h-5 w-5 shrink-0" style={{ color: streamBlue }} />
                  <div>
                    <span className="font-mono text-sm font-semibold" style={{ color: streamBlue }}>Middleware Pipeline</span>
                    <span className="text-[10px] text-muted-foreground block font-mono">Transform · Validate · Route</span>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center py-1">
                  <div className="w-px h-6" style={{ backgroundColor: `rgba(21, 93, 252, 0.3)` }} />
                </div>

                {/* Destination Systems */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {["Database", "Analytics", "Webhooks"].map((label) => (
                      <div key={label} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
                        {label}
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider ml-auto">Targets</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5" style={{ color: streamBlue }} />
                  <span className="text-[11px] font-mono text-muted-foreground">Pipeline healthy</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono text-white/30">Latency: 42ms</span>
                  <span className="text-[11px] font-mono text-white/30">Uptime: 99.98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Our approach</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Structured. Iterative. Transparent.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {serviceBuildContent.approach.map((item, i) => (
            <div key={i} className="relative group" data-testid={`step-${item.step}`}>
              <div className="text-6xl font-black text-white/[0.04] mb-4 group-hover:text-[#155DFC]/10 transition-colors select-none">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
              <div
                className="w-12 h-0.5 mt-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: streamBlue }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Outcomes</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">What changes after we're involved</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Zero manual syncs", desc: "Data flows automatically between systems with retry logic and structured error handling. No more spreadsheets bridging the gaps." },
            { title: "Type-safe pipelines", desc: "Every integration is typed end-to-end. Errors are caught at build time, not discovered in production at 2am." },
            { title: "Production confidence", desc: "Monitoring, alerting, and graceful degradation built into every deployment. You ship knowing it won't break silently." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8"
              style={{ borderTop: `3px solid ${streamBlue}` }}
              data-testid={`card-outcome-${i}`}
            >
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-4xl"
          style={{ borderLeft: `4px solid ${streamBlue}` }}
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "We needed middleware that connected our ERP to our CRM without breaking every time something changed. Muloo built it properly — typed, tested, and monitored. It's been running for over a year without a single issue."
          </blockquote>
          <div>
            <p className="text-white font-bold">James van der Berg</p>
            <p className="text-muted-foreground text-sm">Head of Digital — Meridian Financial Services</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Need custom engineering?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's scope out your architecture requirements and build a roadmap.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white rounded-lg"
              style={{ backgroundColor: streamBlue }}
              data-testid="button-discuss-architecture"
            >
              Discuss your architecture <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

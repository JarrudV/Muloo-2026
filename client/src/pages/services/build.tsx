import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Webhook, Code2, Shield, Zap, GitBranch, Database, Layers, Terminal } from "lucide-react";
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
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.8]">
            Your tools don't talk to each other. Data lives in silos, syncs break silently, and your team wastes hours on manual workarounds. You don't need another connector — you need properly engineered middleware.
          </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">What we do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Custom Software, Purpose-Built</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Webhook, title: "Custom Middleware", desc: "Typed data pipelines that sync, transform, and route data between any two systems reliably." },
            { icon: Code2, title: "Client Portals", desc: "Authenticated web apps built on CRM data — giving your customers self-service access." },
            { icon: Shield, title: "Secure Auth Systems", desc: "OAuth flows, session management, and role-based access for portals and internal tools." },
            { icon: Zap, title: "External Integrations", desc: "Connect any API — payment gateways, shipping providers, ERPs, or proprietary systems." },
            { icon: GitBranch, title: "CI/CD & DevOps", desc: "Automated deployment pipelines, staging environments, and infrastructure-as-code." },
            { icon: Database, title: "Data Migration", desc: "Schema mapping, validation rules, and incremental sync for moving between platforms." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group"
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

      {/* How We Work */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">How we work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Structured. Iterative. Transparent.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discover", desc: "Technical requirements gathering, API schema definition, and stakeholder alignment." },
            { step: "02", title: "Architect", desc: "System design with typed contracts, data flow diagrams, and infrastructure planning." },
            { step: "03", title: "Ship", desc: "Iterative development with CI/CD, testing, and staging environment validation." },
            { step: "04", title: "Support", desc: "Production monitoring, error tracking, performance optimisation, and knowledge transfer." },
          ].map((item, i) => (
            <div key={i} className="relative group" data-testid={`step-${item.step}`}>
              <div className="text-6xl font-extrabold text-white/5 mb-4 group-hover:text-[#155DFC]/10 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
              <div
                className="w-12 h-1 mt-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: streamBlue }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Visual Mock - System Architecture */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#155DFC] uppercase tracking-widest mb-4 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">System Architecture</h2>
            <p className="text-muted-foreground leading-[1.8]">
              We design integration pipelines that handle failure gracefully, log extensively, and scale with your data volume.
            </p>
          </div>

          <div className="bg-[#0f1115] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, rgba(21, 93, 252, 0.08), transparent)`,
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="h-24 w-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                  <Database className="h-10 w-10 text-muted-foreground" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">Legacy ERP</span>
              </div>

              <div className="flex items-center justify-center relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[2px] bg-white/10" />
                </div>
                <div
                  className="relative z-10 p-4 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor: "#050A30",
                    border: `1px solid rgba(21, 93, 252, 0.3)`,
                    boxShadow: `0 0 20px -5px rgba(21, 93, 252, 0.2)`,
                  }}
                >
                  <Terminal className="h-5 w-5" style={{ color: streamBlue }} />
                  <span className="font-mono text-sm" style={{ color: streamBlue }}>
                    Middleware / Sync
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="h-24 w-24 bg-[#F47621]/10 border border-[#F47621]/30 rounded-xl flex items-center justify-center">
                  <Layers className="h-10 w-10 text-[#F47621]" />
                </div>
                <span className="font-mono text-sm text-[#F47621]">HubSpot CRM</span>
              </div>
            </div>
          </div>
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
            { title: "Zero manual syncs", desc: "Data flows automatically between systems with retry logic and structured error handling." },
            { title: "Type-safe pipelines", desc: "Every integration is typed end-to-end, catching errors at build time not runtime." },
            { title: "Production confidence", desc: "Monitoring, alerting, and graceful degradation built into every deployment." },
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
            "We needed middleware that connected our ERP to HubSpot without breaking every time something changed. Muloo built it properly — and it's been running for over a year without a single issue."
          </blockquote>
          <div>
            <p className="text-white font-bold">James van der Berg</p>
            <p className="text-muted-foreground text-sm">Head of Digital — Meridian Financial Services</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Need a custom integration?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-[1.8]">
            Let's scope out your technical requirements and build a roadmap.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white"
              style={{ backgroundColor: streamBlue }}
              data-testid="button-discuss-project"
            >
              Discuss your project <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

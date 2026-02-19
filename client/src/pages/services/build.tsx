import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Layers, GitBranch, Terminal, Webhook, Shield, Zap } from "lucide-react";
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
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-[#155DFC] pl-6">
            {serviceBuildContent.intro}
          </p>
        </div>
      </Section>

      {/* Architecture Visual Block */}
      <Section className="py-20 bg-section-soft">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">System Architecture</h2>
          <p className="text-muted-foreground leading-relaxed">
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

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Left System */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <Database className="h-10 w-10 text-muted-foreground" />
              </div>
              <span className="font-mono text-sm text-muted-foreground">Legacy ERP</span>
            </div>

            {/* Middleware Pipeline */}
            <div className="flex-1 flex items-center justify-center relative w-full md:w-auto">
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

            {/* Right System */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-24 bg-[#F47621]/10 border border-[#F47621]/30 rounded-xl flex items-center justify-center">
                <Layers className="h-10 w-10 text-[#F47621]" />
              </div>
              <span className="font-mono text-sm text-[#F47621]">HubSpot CRM</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Robust Architecture</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Typed pipelines, retry logic, structured logging, and graceful degradation built into every layer.
            </p>
          </div>
        </div>
      </Section>

      {/* Code Snippet Block */}
      <Section className="py-24 glow-build">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">API-First Engineering</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Every integration starts with a well-defined contract. Here's how a typical middleware sync looks in practice.
          </p>

          <div className="code-block" data-testid="code-block-api">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">sync-contacts.ts</span>
            </div>
            <pre className="text-xs md:text-sm leading-relaxed">
              <code>
{`import { HubSpotClient } from "@muloo/hubspot";
import { ERPConnector } from "@muloo/erp";

export async function syncContacts(opts: SyncOptions) {
  const erp = new ERPConnector(opts.erpConfig);
  const hub = new HubSpotClient(opts.hubToken);

  const contacts = await erp.fetchUpdatedContacts({
    since: opts.lastSync,
    limit: 500,
  });

  const results = await hub.batchUpsert("contacts", contacts, {
    idProperty: "erp_id",
    retries: 3,
    onError: (err) => logger.warn("Upsert failed", err),
  });

  return { synced: results.success, failed: results.errors };
}`}
              </code>
            </pre>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="py-24 bg-section-soft">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What we build</h2>
          <p className="text-muted-foreground leading-relaxed">
            Purpose-built software that bridges the gap between SaaS platforms and your business logic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Webhook, title: "Custom Middleware", desc: "Typed data pipelines that sync, transform, and route data between any two systems reliably." },
            { icon: Shield, title: "Secure Auth Systems", desc: "OAuth flows, session management, and role-based access for client-facing portals and internal tools." },
            { icon: Code2, title: "Client Portals", desc: "Authenticated web apps built on top of CRM data — giving your customers self-service access." },
            { icon: GitBranch, title: "CI/CD & DevOps", desc: "Automated deployment pipelines, staging environments, and infrastructure-as-code." },
            { icon: Database, title: "Data Migration", desc: "Schema mapping, validation rules, and incremental sync for moving between platforms." },
            { icon: Zap, title: "External Integrations", desc: "Connect any API — payment gateways, shipping providers, ERPs, or proprietary systems." },
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
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Steps */}
      <Section className="py-24">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">How we approach build</h2>
          <p className="text-muted-foreground leading-relaxed">
            A disciplined, iterative process from requirements through to production monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {serviceBuildContent.approach.map((step, i) => (
            <div key={i} className="relative group" data-testid={`step-${step.step}`}>
              <div className="text-6xl font-extrabold text-white/5 mb-4 group-hover:text-[#155DFC]/10 transition-colors">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              <div
                className="w-12 h-1 mt-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: streamBlue }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Need a custom integration?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
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
      </Section>
    </div>
  );
}

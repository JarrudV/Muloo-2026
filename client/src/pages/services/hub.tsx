import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Building2, Database, Code2, LineChart, ClipboardCheck, Layers } from "lucide-react";
import { serviceHubContent } from "@/lib/content";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";

const services = [
  { icon: Building2, title: "Enterprise Architecture", desc: "Data modeling, object relationships, and pipeline configuration designed for scale." },
  { icon: Database, title: "Data Migration", desc: "Schema mapping, validation rules, and incremental sync for moving between platforms." },
  { icon: Code2, title: "Programmable Automation", desc: "Serverless functions, custom coded actions, and workflow orchestration." },
  { icon: LineChart, title: "Advanced Reporting", desc: "SQL-based analytics, attribution modeling, and real-time revenue dashboards." },
  { icon: ClipboardCheck, title: "Portal Audits", desc: "Systematic review of portal health, data hygiene, and configuration debt." },
  { icon: Layers, title: "CRM UI Extensions", desc: "Custom cards, sidebar modules, and UI improvements for user adoption." },
];

const steps = [
  { num: "01", title: "Discover", desc: "Deep audit of your current portal, data model, and integration landscape." },
  { num: "02", title: "Architect", desc: "Solution design with documentation, data flow diagrams, and migration plans." },
  { num: "03", title: "Ship", desc: "Iterative implementation with staging environments and stakeholder sign-off." },
  { num: "04", title: "Support", desc: "Ongoing monitoring, optimisation, and knowledge transfer to your team." },
];

const outcomes = [
  { title: "Single source of truth", desc: "Clean, deduplicated data with enforced naming conventions and lifecycle stages." },
  { title: "Automated pipelines", desc: "Deal flows and task routing that run without manual intervention." },
  { title: "Revenue attribution", desc: "Know exactly which channels, campaigns, and touchpoints drive closed revenue." },
];

export function ServicesHub() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-32 pb-24 bg-hero-gradient glow-hub relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Badge
              data-testid="badge-hubspot-partner"
              className="bg-[#F47621]/10 text-[#F47621] border-[#F47621]/30 hover:bg-[#F47621]/20"
            >
              HubSpot Partners
            </Badge>
            <img
              src={hubspotBadge}
              alt="HubSpot Gold Partner Badge"
              className="h-12 w-auto"
              data-testid="img-hubspot-badge"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">
            {serviceHubContent.h1}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#F47621] pl-6 max-w-3xl">
            {serviceHubContent.intro}
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                data-testid="button-hero-cta"
                className="bg-[#F47621] text-white hover:bg-[#F47621]/90 font-bold px-10 h-14"
              >
                Talk to a HubSpot Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">The challenge</span>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.8]">
            Most HubSpot implementations are configured by marketers, not engineers. The result is duplicated data, brittle workflows, and reports no one trusts. You don't need more features — you need architecture.
          </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">What we do</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Enterprise HubSpot, Engineered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                data-testid={`card-service-${i}`}
                className="glass-card flex items-start gap-4 p-6 rounded-xl hover:border-[#F47621]/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F47621]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F47621]/20 transition-colors">
                  <s.icon className="h-5 w-5 text-[#F47621]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-[1.8]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">How we work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Structured. Iterative. Transparent.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                data-testid={`card-step-${i}`}
                className="relative glass-card rounded-xl p-6 group hover:border-[#F47621]/30 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-5xl font-extrabold text-white/[0.04] select-none">{step.num}</span>
                <div className="w-full h-0.5 bg-[#F47621]/30 mb-6 origin-left transition-all duration-500 group-hover:bg-[#F47621] group-hover:scale-x-100 scale-x-50" />
                <h3 className="text-lg font-semibold text-white mb-2">{step.num} {step.title}</h3>
                <p className="text-muted-foreground leading-[1.8]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Visual Mock */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">Live dashboards</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue visibility, in real time</h2>
            <p className="text-muted-foreground leading-[1.8]">
              Custom reporting surfaces built on top of your HubSpot data — so leadership sees pipeline health, attribution, and forecasts without spreadsheets.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#F47621]/15 blur-3xl rounded-full opacity-30" />
            <div className="glass-card rounded-xl p-6 shadow-2xl relative z-10 glow-orange-sm">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F47621]/15 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-[#F47621]" />
                  </div>
                  <span className="font-bold text-white">Revenue Dashboard</span>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs border-[#F47621]/40 text-[#F47621]"
                  data-testid="badge-dashboard-live"
                >
                  Live
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="text-xs text-muted-foreground mb-1">Deals Closed</div>
                  <div className="text-2xl font-bold text-white">142</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="text-xs text-muted-foreground mb-1">Revenue</div>
                  <div className="text-2xl font-bold text-[#F47621]">$1.2M</div>
                </div>
              </div>
              <div className="h-32 bg-white/5 rounded-lg flex items-end justify-between p-3 gap-2 border border-white/5">
                {[40, 60, 45, 70, 55, 80, 65, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-[#F47621]/40 hover:bg-[#F47621]/70 transition-colors rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What changes after we're involved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <div
                key={i}
                data-testid={`card-outcome-${i}`}
                className="glass-card rounded-xl p-6 border-t-2 border-t-[#F47621]"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{o.title}</h3>
                <p className="text-muted-foreground leading-[1.8]">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mini Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="max-w-3xl">
          <div className="glass-card rounded-xl p-8 border-l-4 border-l-[#F47621]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-6 block">Case study</span>
            <blockquote className="text-lg md:text-xl text-white leading-[1.8] mb-6">
              "Muloo restructured our entire HubSpot instance in 6 weeks. Pipeline visibility improved by 40% and our sales team finally trusts the data."
            </blockquote>
            <p className="text-muted-foreground text-sm">
              <span className="text-white font-medium">Sarah Mitchell</span>, VP Revenue Ops — TechScale Group
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="text-cta-headline">
            Is your CRM technically sound?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's review your architecture and identify optimisation opportunities.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              data-testid="button-cta-contact"
              className="bg-[#F47621] text-white hover:bg-[#F47621]/90 font-bold px-10 h-14"
            >
              Talk to a HubSpot Expert <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

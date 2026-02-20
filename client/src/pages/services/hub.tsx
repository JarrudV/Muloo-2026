import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Building2, Database, Code2, LineChart, ClipboardCheck, Layers, AlertTriangle, GitBranch, Workflow, Eye, Users, Settings, Shield, TrendingUp } from "lucide-react";
import { serviceHubContent } from "@/lib/content";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";

const streamOrange = "#F47621";

const services = [
  { icon: Building2, title: "Enterprise Architecture", desc: "Data modeling, object relationships, and pipeline configuration designed for scale." },
  { icon: Database, title: "Data Migration", desc: "Schema mapping, validation rules, and incremental sync for moving between platforms." },
  { icon: Code2, title: "Programmable Automation", desc: "Serverless functions, custom coded actions, and workflow orchestration." },
  { icon: LineChart, title: "Advanced Reporting", desc: "SQL-based analytics, attribution modeling, and real-time revenue dashboards." },
  { icon: ClipboardCheck, title: "Portal Audits", desc: "Systematic review of portal health, data hygiene, and configuration debt." },
  { icon: Layers, title: "CRM UI Extensions", desc: "Custom cards, sidebar modules, and UI improvements for user adoption." },
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
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#F47621] pl-6 max-w-2xl">
            {serviceHubContent.intro}
          </p>
          <p className="text-sm text-white/40 font-mono mt-6 max-w-2xl">This is about operational calm, not configuration.</p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                data-testid="button-hero-cta"
                className="bg-[#F47621] text-white hover:bg-[#F47621]/90 font-bold px-10 h-14"
              >
                Book a HubSpot architecture review <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Most Portals Fail */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-6 block">The problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Why most portals fail
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          {[
            { icon: Database, title: "Overloaded properties", desc: "Hundreds of unused or duplicate fields that pollute every report and list." },
            { icon: GitBranch, title: "Poor pipeline structure", desc: "Stages that don't reflect reality, missing gates, and no enforcement logic." },
            { icon: Workflow, title: "Broken automation logic", desc: "Workflows built on assumptions that changed months ago, firing silently on bad data." },
            { icon: Eye, title: "Reporting without clarity", desc: "Dashboards that look busy but answer none of the questions leadership actually asks." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 group hover:border-[#F47621]/20 transition-all duration-300"
              data-testid={`card-portal-fail-${i}`}
            >
              <div className="h-10 w-10 rounded-lg bg-[#F47621]/10 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-[#F47621]" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Do */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">What we do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Enterprise HubSpot, Engineered</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              data-testid={`card-service-${i}`}
              className="glass-card flex items-start gap-4 p-6 rounded-xl hover:border-[#F47621]/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F47621]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F47621]/15 transition-colors">
                <s.icon className="h-5 w-5 text-[#F47621]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CRM Structure Visual */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">CRM architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Structured for clarity, not complexity</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              A well-architected portal isn't about features. It's about clean pipelines, governed properties, transparent automation, and reporting that leadership trusts.
            </p>
            <ul className="space-y-4">
              {[
                "Lifecycle stages mapped to real buyer journeys",
                "Properties governed with naming conventions",
                "Automations documented and version-controlled",
                "Permission models aligned to team structure",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamOrange }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-crm-structure">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(244, 118, 33, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">crm-architecture.view</span>
              </div>

              <div className="flex flex-col gap-4">
                {/* Pipeline */}
                <div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block">Deal Pipeline</span>
                  <div className="flex gap-1.5">
                    {["Lead In", "Qualified", "Proposal", "Negotiation", "Closed"].map((stage, i) => (
                      <div
                        key={stage}
                        className="flex-1 py-2 rounded-md text-center text-[10px] font-mono"
                        style={{
                          backgroundColor: i === 4 ? `rgba(244, 118, 33, 0.12)` : `rgba(255, 255, 255, 0.03)`,
                          border: i === 4 ? `1px solid rgba(244, 118, 33, 0.25)` : `1px solid rgba(255, 255, 255, 0.05)`,
                          color: i === 4 ? streamOrange : `rgba(255, 255, 255, 0.35)`,
                        }}
                      >
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reporting Block */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                    <span className="text-[9px] font-mono text-white/20 block mb-1">Conversion</span>
                    <span className="text-sm font-mono font-medium text-white/50">34.2%</span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                    <span className="text-[9px] font-mono text-white/20 block mb-1">Velocity</span>
                    <span className="text-sm font-mono font-medium text-white/50">18d</span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                    <span className="text-[9px] font-mono text-white/20 block mb-1">Win Rate</span>
                    <span className="text-sm font-mono font-medium" style={{ color: `rgba(244, 118, 33, 0.7)` }}>28%</span>
                  </div>
                </div>

                {/* Permission + Automation row */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="p-3 rounded-lg flex items-center gap-3"
                    style={{
                      backgroundColor: `rgba(244, 118, 33, 0.04)`,
                      border: `1px solid rgba(244, 118, 33, 0.12)`,
                    }}
                  >
                    <Shield className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(244, 118, 33, 0.5)` }} />
                    <div>
                      <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(244, 118, 33, 0.7)` }}>Permissions</span>
                      <span className="text-[9px] text-white/20 block font-mono">Role-based access</span>
                    </div>
                  </div>
                  <div
                    className="p-3 rounded-lg flex items-center gap-3"
                    style={{
                      backgroundColor: `rgba(244, 118, 33, 0.04)`,
                      border: `1px solid rgba(244, 118, 33, 0.12)`,
                    }}
                  >
                    <Workflow className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(244, 118, 33, 0.5)` }} />
                    <div>
                      <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(244, 118, 33, 0.7)` }}>Automations</span>
                      <span className="text-[9px] text-white/20 block font-mono">12 active · 0 errors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">Portal healthy</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">Last audit: 3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our HubSpot Framework */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">Framework</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our HubSpot framework</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { num: "01", title: "Audit", desc: "Deep review of portal health, data hygiene, automation logic, and reporting gaps." },
            { num: "02", title: "Restructure", desc: "Rationalise properties, clean pipelines, and document the target data model." },
            { num: "03", title: "Rebuild", desc: "Implement the new architecture with staging environments and stakeholder validation." },
            { num: "04", title: "Enable", desc: "Train your team, transfer knowledge, and embed governance practices." },
            { num: "05", title: "Optimise", desc: "Ongoing monitoring, reporting refinement, and incremental improvements." },
          ].map((step, i) => (
            <div
              key={i}
              data-testid={`card-framework-${i}`}
              className="relative glass-card rounded-xl p-6 group hover:border-[#F47621]/20 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-4xl font-extrabold text-white/[0.03] select-none">{step.num}</span>
              <div
                className="w-full h-0.5 mb-5 origin-left transition-all duration-500 group-hover:scale-x-100 scale-x-[0.3]"
                style={{ backgroundColor: `rgba(244, 118, 33, 0.3)` }}
              />
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Governance Built In */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Governance Built In</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Role-based access", desc: "Permissions aligned to team structure — no one sees or edits what they shouldn't." },
            { title: "Version-controlled workflows", desc: "Every automation change is documented, testable, and reversible." },
            { title: "Structured property design", desc: "Naming conventions, field types, and lifecycle rules enforced from the start." },
            { title: "Executive reporting clarity", desc: "Dashboards built on governed data that leadership actually trusts." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(244, 118, 33, 0.3)` }}
              data-testid={`card-governance-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Clean CRM Feels Like */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">The difference</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Clean CRM Actually Feels Like</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Reports you trust", desc: "Leadership makes decisions from dashboards — not spreadsheets exported and manually corrected." },
            { title: "Automations that hold", desc: "Workflows run reliably because the data model underneath them is governed and stable." },
            { title: "Sales teams that adopt", desc: "Reps use the CRM because it helps them sell — not because they're told to." },
            { title: "Onboarding in days", desc: "New hires understand the system quickly because properties, pipelines, and naming conventions make sense." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(244, 118, 33, 0.3)` }}
              data-testid={`card-clean-crm-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-4 block">Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What changes after we're involved</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BarChart3, title: "Cleaner reporting", desc: "Dashboards built on governed data that leadership actually uses." },
            { icon: TrendingUp, title: "Faster pipeline movement", desc: "Stages with clear entry criteria and automated progression logic." },
            { icon: Settings, title: "Lower admin overhead", desc: "Automation handles the repetitive work — your team focuses on selling." },
            { icon: Users, title: "Clear executive visibility", desc: "Revenue, attribution, and forecasting available in real time." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `3px solid ${streamOrange}` }}
              data-testid={`card-outcome-${i}`}
            >
              <div className="h-10 w-10 rounded-lg bg-[#F47621]/10 flex items-center justify-center mb-4">
                <item.icon className="h-5 w-5 text-[#F47621]" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: `4px solid ${streamOrange}` }}
          data-testid="card-case-study"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#F47621] mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Muloo restructured our entire HubSpot instance in 6 weeks. Pipeline visibility improved by 40% and our sales team finally trusts the data."
          </blockquote>
          <div>
            <p className="text-white font-bold">Sarah Mitchell</p>
            <p className="text-muted-foreground text-sm">VP Revenue Ops — TechScale Group</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-cta-headline">
            Ready for a structured HubSpot?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's review your portal architecture and build a roadmap.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              data-testid="button-cta-contact"
              className="bg-[#F47621] text-white hover:bg-[#F47621]/90 font-bold px-10 h-14"
            >
              Book a HubSpot architecture review <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

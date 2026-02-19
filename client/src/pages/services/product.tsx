import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Laptop, Rocket, BarChart3, Settings, Lightbulb, Users, CreditCard, Server, HeadphonesIcon, Activity } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceProductContent } from "@/lib/content";

const streamGreen = "#59BF96";

export function ServicesProduct() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 border-[#59BF96]/30 text-[#59BF96] bg-[#59BF96]/5"
            data-testid="badge-product"
          >
            Muloo Product
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
            {serviceProductContent.h1}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#59BF96] pl-6 max-w-2xl">
            {serviceProductContent.intro}
          </p>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-6 block">The challenge</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Ideas don't fail because of code. They fail because of execution.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Most product builds stall in the gap between prototype and production. Feature creep, unclear architecture, and missing go-to-market engineering turn promising concepts into expensive experiments. You need a team that ships products, not just features.
          </p>
        </div>
      </Section>

      {/* Abstract SaaS Visual */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">What ships</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Production software, not prototypes.</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              Every product we build ships with the infrastructure commercial software demands — multi-tenancy, billing, analytics, and operational dashboards included.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-tenant data isolation",
                "Subscription billing and plan management",
                "Usage analytics and customer health scoring",
                "Role-based access and team management",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamGreen }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="mock-saas-visual">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(89, 191, 150, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">product-dashboard.app</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: "MRR", value: "$48.2k", trend: "+12%" },
                  { label: "Active Users", value: "1,284", trend: "+8%" },
                  { label: "Churn", value: "2.1%", trend: "-0.4%" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                    <span className="text-[9px] font-mono text-white/20 block mb-1">{m.label}</span>
                    <span className="text-sm font-mono font-medium" style={{ color: `rgba(89, 191, 150, 0.8)` }}>{m.value}</span>
                    <span className="text-[9px] font-mono text-green-400/50 ml-1.5">{m.trend}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                {[
                  { label: "Enterprise", w: "78%" },
                  { label: "Growth", w: "52%" },
                  { label: "Starter", w: "35%" },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-white/25 w-16">{bar.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.04]">
                      <div className="h-full rounded-full" style={{ width: bar.w, backgroundColor: `rgba(89, 191, 150, 0.4)` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: `rgba(89, 191, 150, 0.04)`, border: `1px solid rgba(89, 191, 150, 0.12)` }}>
                  <Activity className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>API Health</span>
                    <span className="text-[9px] text-white/20 block font-mono">99.97% uptime</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: `rgba(89, 191, 150, 0.04)`, border: `1px solid rgba(89, 191, 150, 0.12)` }}>
                  <Users className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>Tenants</span>
                    <span className="text-[9px] text-white/20 block font-mono">47 active orgs</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">All systems operational</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">v2.4.1</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Build */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">What we build</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Products Built to Ship</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Wrench, title: "Internal Tools", desc: "Custom-built operational tools that eliminate manual processes and spreadsheet dependency." },
            { icon: Laptop, title: "Commercial SaaS", desc: "Market-facing products designed, built, and maintained with scalable multi-tenant architecture." },
            { icon: Rocket, title: "MVP Development", desc: "From concept to functional product in weeks — built lean, tested with real users, iterated fast." },
            { icon: Settings, title: "Ongoing Product Engineering", desc: "Long-term product support, feature iteration, performance tuning, and infrastructure management." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl group hover:border-[#59BF96]/20 transition-all duration-300"
              data-testid={`card-service-${i}`}
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 bg-[#59BF96]/10">
                  <item.icon className="h-6 w-6 text-[#59BF96]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Lifecycle */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Lifecycle</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">From idea to scale</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "01", title: "Ideate", desc: "Problem definition, market validation, and user research to ensure you're building something worth shipping." },
            { num: "02", title: "Prototype", desc: "Rapid design and development of a functional prototype — tested with real users, refined with real data." },
            { num: "03", title: "Launch", desc: "Production deployment with monitoring, onboarding flows, and go-to-market engineering." },
            { num: "04", title: "Scale", desc: "Infrastructure scaling, feature iteration, usage analytics, and performance optimisation as traction grows." },
          ].map((step, i) => (
            <div
              key={i}
              data-testid={`card-lifecycle-${i}`}
              className="relative glass-card rounded-xl p-6 group hover:border-[#59BF96]/20 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-4xl font-extrabold text-white/[0.03] select-none">{step.num}</span>
              <div
                className="w-full h-0.5 mb-5 origin-left transition-all duration-500 group-hover:scale-x-100 scale-x-[0.3]"
                style={{ backgroundColor: `rgba(89, 191, 150, 0.3)` }}
              />
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SaaS Dashboard Mock */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Production-ready</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built for commercial operation</h2>
            <p className="text-muted-foreground leading-[1.8] mb-8 max-w-lg">
              Our products ship with the infrastructure commercial software demands — multi-tenancy, usage metering, billing integration, and operational dashboards.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-tenant architecture from day one",
                "Usage analytics and customer health scoring",
                "Automated billing and subscription management",
                "Role-based access and team management",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: streamGreen }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="mock-dashboard">
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{ background: `radial-gradient(circle at top right, rgba(89, 191, 150, 0.04), transparent)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                <span className="ml-3 text-[10px] font-mono text-white/20">saas-dashboard.app</span>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                  <span className="text-[9px] font-mono text-white/20 block mb-1">Active Users</span>
                  <span className="text-lg font-mono font-medium text-white/50">2,847</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                  <span className="text-[9px] font-mono text-white/20 block mb-1">MRR</span>
                  <span className="text-lg font-mono font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>$48.2K</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
                  <span className="text-[9px] font-mono text-white/20 block mb-1">Uptime</span>
                  <span className="text-lg font-mono font-medium text-white/50">99.97%</span>
                </div>
              </div>

              {/* Usage chart */}
              <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3 mb-4">
                <span className="text-[9px] font-mono text-white/20 block mb-3">Monthly Usage</span>
                <div className="h-20 flex items-end justify-between gap-1.5">
                  {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-sm transition-colors"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i >= 10 ? `rgba(89, 191, 150, 0.5)` : `rgba(89, 191, 150, 0.2)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Tenant / Subscription row */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="p-3 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor: `rgba(89, 191, 150, 0.04)`,
                    border: `1px solid rgba(89, 191, 150, 0.12)`,
                  }}
                >
                  <Users className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>Tenants</span>
                    <span className="text-[9px] text-white/20 block font-mono">34 active orgs</span>
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor: `rgba(89, 191, 150, 0.04)`,
                    border: `1px solid rgba(89, 191, 150, 0.12)`,
                  }}
                >
                  <CreditCard className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(89, 191, 150, 0.5)` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>Subscriptions</span>
                    <span className="text-[9px] text-white/20 block font-mono">89% retention</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-white/25">All systems operational</span>
                </div>
                <span className="text-[10px] font-mono text-white/20">v2.4.1</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Commercialisation */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Commercialisation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Beyond the build</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: CreditCard, title: "Pricing models", desc: "Usage-based, tiered, or flat-rate — we engineer the billing logic and subscription management into the product." },
            { icon: Server, title: "Infrastructure", desc: "Cloud architecture, CI/CD pipelines, monitoring, and auto-scaling designed for production SaaS workloads." },
            { icon: Users, title: "Customer onboarding", desc: "Self-serve signup flows, guided setup wizards, and in-app onboarding that reduces time to value." },
            { icon: HeadphonesIcon, title: "Support model", desc: "Ticketing integration, knowledge bases, and escalation workflows built into the product from launch." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 group hover:border-[#59BF96]/20 transition-all duration-300"
              data-testid={`card-commercial-${i}`}
            >
              <div className="h-10 w-10 rounded-lg bg-[#59BF96]/10 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-[#59BF96]" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Designed for Scale */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for Scale</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Multi-tenant architecture", desc: "Isolated data, shared infrastructure — built to serve many customers from day one." },
            { title: "Subscription-ready", desc: "Billing, plan management, and usage metering engineered into the product core." },
            { title: "Secure authentication", desc: "Role-based access, SSO support, and token management as standard." },
            { title: "Infrastructure planning", desc: "Cloud topology, scaling strategy, and cost modelling before the first deploy." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(89, 191, 150, 0.3)` }}
              data-testid={`card-scale-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Built for Commercial Reality */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4 block">Commercial</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Commercial Reality</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Production hosting", desc: "Cloud infrastructure sized for real workloads — not demo environments that collapse under traffic." },
            { title: "Subscription lifecycle", desc: "Trial, upgrade, downgrade, cancellation, and renewal flows engineered into the product from launch." },
            { title: "Product analytics", desc: "Usage tracking, cohort analysis, and churn indicators built in — not bolted on after the fact." },
            { title: "Customer support", desc: "Ticketing, knowledge bases, and escalation workflows integrated so support scales with the product." },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6"
              style={{ borderTop: `2px solid rgba(89, 191, 150, 0.3)` }}
              data-testid={`card-commercial-reality-${i}`}
            >
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl"
          style={{ borderLeft: `4px solid ${streamGreen}` }}
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Muloo built our inventory sync tool in 4 weeks. It replaced a manual process that was costing us 15 hours a week and eliminated sync errors entirely."
          </blockquote>
          <div>
            <p className="text-white font-bold">Laura Thompson</p>
            <p className="text-muted-foreground text-sm">Operations Manager — Atlas Commerce</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to build your product?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's scope your product vision and build a roadmap to launch.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white"
              style={{ backgroundColor: streamGreen }}
              data-testid="button-discuss-roadmap"
            >
              Discuss your product roadmap <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

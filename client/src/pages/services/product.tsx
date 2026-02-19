import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Laptop, Compass, Rocket, BarChart3, Settings } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceProductContent } from "@/lib/content";

const streamGreen = "#59BF96";

const whatWeDoItems = [
  { icon: Wrench, title: "Internal Tools", desc: "Custom-built operational tools that eliminate manual processes and spreadsheet dependency." },
  { icon: Laptop, title: "Commercial SaaS", desc: "Market-facing products designed, built, and maintained by our engineering team." },
  { icon: Compass, title: "Product Strategy", desc: "Discovery, validation, and roadmap planning to ensure you're building the right thing." },
  { icon: Rocket, title: "MVP Development", desc: "From concept to functional product in weeks, not months — built to learn from real users." },
  { icon: BarChart3, title: "Launch & Scale", desc: "Go-to-market engineering, usage analytics, and infrastructure scaling." },
  { icon: Settings, title: "Ongoing Maintenance", desc: "Long-term product support, feature iteration, and performance optimisation." },
];

const howWeWorkSteps = [
  { num: "01", title: "Discover", desc: "Problem definition, user research, and market validation to ensure product-market fit." },
  { num: "02", title: "Architect", desc: "Technical architecture, data modeling, and UX design with clear engineering specifications." },
  { num: "03", title: "Ship", desc: "Iterative sprints with continuous deployment, user testing, and stakeholder demos." },
  { num: "04", title: "Support", desc: "Usage analytics, bug triage, feature iteration, and infrastructure management." },
];

const outcomes = [
  { title: "Operational efficiency", desc: "Manual processes replaced with purpose-built tools that save hours every week." },
  { title: "Market validation", desc: "Real users on real products, generating feedback and revenue from day one." },
  { title: "Scalable infrastructure", desc: "Products built on modern architecture that handles growth without re-engineering." },
];

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
          <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-[#59BF96] pl-6">
            {serviceProductContent.intro}
          </p>
        </div>
      </Section>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4">The challenge</p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Off-the-shelf tools almost fit, but never quite. You end up with spreadsheets filling gaps, manual processes that should be automated, and operational bottlenecks that no SaaS product was built to solve.
          </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-12">
          <p className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Products Built to Solve Real Problems</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {whatWeDoItems.map((item, i) => (
            <div key={i} className="flex gap-5" data-testid={`service-item-${i}`}>
              <div className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0 bg-[#59BF96]/10">
                <item.icon className="h-6 w-6 text-[#59BF96]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-muted-foreground leading-[1.8]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-12">
          <p className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4">How we work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Structured. Iterative. Transparent.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howWeWorkSteps.map((step, i) => (
            <div key={i} className="group relative" data-testid={`step-${i}`}>
              <span className="text-7xl font-extrabold text-white/[0.04] block mb-4 select-none">{step.num}</span>
              <div className="w-8 h-0.5 bg-[#59BF96]/40 mb-4 group-hover:w-full transition-all duration-500" />
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-[1.8]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visual Mock */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4">Production-ready</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Scale</h2>
            <p className="text-lg text-muted-foreground leading-[1.8]">
              Our products are engineered for production — with monitoring, analytics, and infrastructure that grows with usage.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 glow-green-sm" data-testid="mock-dashboard">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-bold text-lg">Product Dashboard</span>
              <Badge className="bg-[#59BF96]/20 text-[#59BF96] border-[#59BF96]/30" variant="outline">
                <span className="h-2 w-2 rounded-full bg-[#22c55e] mr-2 inline-block" />
                Live
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                <p className="text-xs text-muted-foreground mb-1">Active Users</p>
                <p className="text-xl font-bold text-white">2,847</p>
              </div>
              <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                <p className="text-xs text-muted-foreground mb-1">MRR</p>
                <p className="text-xl font-bold text-[#59BF96]">$48.2K</p>
              </div>
              <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                <p className="text-xs text-muted-foreground mb-1">Uptime</p>
                <p className="text-xl font-bold text-white">99.97%</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "API Requests", value: 92 },
                { label: "Data Sync", value: 78 },
                { label: "Auth Events", value: 65 },
                { label: "Webhooks", value: 48 },
              ].map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-24 shrink-0">{bar.label}</span>
                  <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${bar.value}%`, backgroundColor: streamGreen, opacity: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-12">
          <p className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-4">Outcomes</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">What changes after we're involved</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 border-t-2 border-[#59BF96]"
              data-testid={`outcome-${i}`}
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="glass-card rounded-2xl p-10 md:p-14 border-l-4 border-[#59BF96] max-w-4xl">
          <p className="text-sm font-mono text-[#59BF96] uppercase tracking-widest mb-6">Case study</p>
          <blockquote className="text-xl md:text-2xl text-white leading-[1.8] mb-6 italic">
            "Muloo built our inventory sync tool in 4 weeks. It replaced a manual process that was costing us 15 hours a week and eliminated sync errors entirely."
          </blockquote>
          <p className="text-muted-foreground">
            <span className="text-white font-semibold">Laura Thompson</span>, Operations Manager — Atlas Commerce
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Built for scale.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-[1.8]">
            See how our pre-built solutions can accelerate your operations.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="font-bold px-10 h-14 text-white"
              style={{ backgroundColor: streamGreen }}
              data-testid="button-request-demo"
            >
              Request a Demo <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

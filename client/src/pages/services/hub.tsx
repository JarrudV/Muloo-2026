import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, BarChart3, Users, LayoutDashboard, Settings, Database, Code2, LineChart } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceHubContent } from "@/lib/content";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";

const featureIcons = [LayoutDashboard, Database, Code2, Settings, LineChart, BarChart3, Users, CheckCircle2];

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
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-[#F47621] pl-6 max-w-3xl">
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

      {/* Before / After */}
      <Section className="py-24 bg-section-soft">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">From Chaos</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3 text-destructive">
                  <span className="w-2 h-2 rounded-full bg-destructive shrink-0" />
                  Duplicate contacts & dirty data
                </li>
                <li className="flex items-center gap-3 text-destructive">
                  <span className="w-2 h-2 rounded-full bg-destructive shrink-0" />
                  No clear sales process
                </li>
                <li className="flex items-center gap-3 text-destructive">
                  <span className="w-2 h-2 rounded-full bg-destructive shrink-0" />
                  Reporting based on guesswork
                </li>
              </ul>
            </div>
            <div className="w-full h-px bg-white/10" />
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-orange">To Clarity</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#F47621] shrink-0" />
                  Single source of truth
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#F47621] shrink-0" />
                  Automated, reliable pipelines
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#F47621] shrink-0" />
                  Real-time revenue attribution
                </li>
              </ul>
            </div>
          </div>

          {/* Dashboard Mock */}
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

      {/* Features Grid */}
      <Section className="py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What we <span className="text-gradient-orange">deliver</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Enterprise-grade HubSpot capabilities, engineered with precision.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceHubContent.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div
                  key={i}
                  data-testid={`card-feature-${i}`}
                  className="glass-card flex items-start gap-4 p-6 rounded-xl hover:border-[#F47621]/30 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F47621]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F47621]/20 transition-colors">
                    <Icon className="h-5 w-5 text-[#F47621]" />
                  </div>
                  <span className="text-lg font-medium text-white/90 pt-1.5">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 bg-section-soft border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="text-cta-headline">
            {serviceHubContent.cta.headline}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {serviceHubContent.cta.body}
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

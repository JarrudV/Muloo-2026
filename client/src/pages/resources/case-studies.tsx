import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    { id: 1, client: "FinTech Corp", title: "Migrating 50k contacts to HubSpot", tag: "Migration" },
    { id: 2, client: "SaaS Scaleup", title: "Custom onboarding portal build", tag: "Product" },
    { id: 3, client: "Global Retailer", title: "Integrations for inventory sync", tag: "Integration" },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Case Studies | Real-World Solutions by Muloo"
        description="Explore how we've helped companies scale through custom engineering, HubSpot optimization, and strategic technical leadership."
      />
      <Section className="pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Case Studies.</h1>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <Link key={c.id} href={`/case-studies/${c.id}`}>
              <div className="bg-card rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-brand-teal/50 transition-all">
                <div className="aspect-video bg-white/5 group-hover:bg-white/10 transition-colors" />
                <div className="p-8">
                  <div className="text-brand-teal text-sm font-mono mb-2 uppercase tracking-wider">{c.tag}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.client}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

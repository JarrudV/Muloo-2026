import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ServiceCard } from "@/components/sections/service-card";
import { Partners } from "@/components/sections/partners";
import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero 
        headline={homeContent.hero.headline}
        subhead={homeContent.hero.subhead}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
      />
      
      <FeatureGrid features={homeContent.proofPoints} />
      
      <Section id="services" className="bg-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          {homeContent.services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Section>
      
      <Section className="bg-brand-navy border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{homeContent.global.headline}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {homeContent.global.body}
            </p>
          </div>
          <div className="bg-card/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
             {/* Abstract Map Decoration */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal via-transparent to-transparent" />
             <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-brand-teal animate-pulse" />
                  <span className="font-mono text-sm">Cape Town (HQ)</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="font-mono text-sm">London</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="font-mono text-sm">New York</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="font-mono text-sm">Sydney</span>
                </div>
             </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-brand-navy">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{homeContent.partners.headline}</h2>
            <p className="text-muted-foreground mb-12">{homeContent.partners.body}</p>
            <div className="flex justify-center gap-12 flex-wrap">
              {homeContent.partners.list.map(partner => (
                <div key={partner} className="text-2xl font-bold text-white/40">{partner}</div>
              ))}
            </div>
        </div>
      </Section>
      
      <Section className="py-32 text-center bg-gradient-to-b from-brand-navy to-black/40">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to scale?</h2>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-12 h-16 text-xl">
            Book a discovery call <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

import { Section } from "@/components/ui/section";
import { serviceHubContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function ServicesHub() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="text-brand-teal font-mono mb-4 text-sm tracking-widest uppercase">Service Focus</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{serviceHubContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-teal pl-6">
            {serviceHubContent.intro}
          </p>
        </div>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid gap-6">
             {serviceHubContent.bullets.map((bullet, i) => (
               <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-white/5 hover:border-brand-teal/30 transition-colors">
                 <CheckCircle2 className="h-6 w-6 text-brand-teal shrink-0 mt-1" />
                 <span className="text-lg">{bullet}</span>
               </div>
             ))}
          </div>
          <div className="relative hidden md:block">
            {/* Abstract visual for Hub */}
            <div className="sticky top-32 bg-gradient-to-br from-brand-orange/20 to-brand-teal/20 rounded-3xl aspect-square p-1 border border-white/10">
               <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-[20px] flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-4 w-full h-full opacity-50">
                    <div className="bg-white/5 rounded-xl animate-pulse" style={{animationDelay: "0s"}} />
                    <div className="bg-white/5 rounded-xl animate-pulse" style={{animationDelay: "0.2s"}} />
                    <div className="bg-white/5 rounded-xl animate-pulse" style={{animationDelay: "0.4s"}} />
                    <div className="bg-white/5 rounded-xl animate-pulse" style={{animationDelay: "0.6s"}} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{serviceHubContent.cta.headline}</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{serviceHubContent.cta.body}</p>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14">
            Talk to a HubSpot Expert <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

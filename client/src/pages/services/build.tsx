import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Layers, GitBranch, Terminal } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceBuildContent } from "@/lib/content";

export function ServicesBuild() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-6 border-brand-teal/20 text-brand-teal">Muloo Build</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{serviceBuildContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-teal pl-6">
            {serviceBuildContent.intro}
          </p>
        </div>
      </Section>

      {/* Architecture Visual Block */}
      <Section className="py-20 bg-section-soft">
        <div className="bg-[#0f1115] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/10 to-transparent pointer-events-none" />
           
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
                    <div className="w-full h-[2px] bg-white/10"></div>
                 </div>
                 <div className="relative z-10 bg-brand-navy border border-brand-teal/30 p-4 rounded-lg flex items-center gap-3 shadow-[0_0_20px_-5px_hsl(182,100%,40%,0.2)]">
                    <Terminal className="h-5 w-5 text-brand-teal" />
                    <span className="font-mono text-sm text-brand-teal">Middleware / Sync</span>
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
              <h3 className="text-xl font-bold mb-2">Robust Architecture</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">We design systems that handle failure gracefully, log extensively, and scale with your data volume.</p>
           </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section className="py-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How we approach build</h2>
        <div className="grid md:grid-cols-4 gap-8">
           {serviceBuildContent.approach.map((step, i) => (
             <div key={i} className="relative group">
                <div className="text-6xl font-extrabold text-white/5 mb-4 group-hover:text-brand-teal/10 transition-colors">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                <div className="w-12 h-1 bg-brand-teal mt-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500" />
             </div>
           ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a custom integration?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Let's scope out your technical requirements and build a roadmap.</p>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14">
            Discuss your project <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Code2, Database, LayoutTemplate, Share2, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Dark SaaS Style Gradient */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 text-sm font-medium text-brand-teal mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2 animate-pulse"></span>
            Technical Partner for HubSpot
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto">
            HubSpot and custom dev,<br/>
            <span className="text-gradient-teal">built properly.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            {homeContent.hero.subhead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-8 h-14 text-lg w-full sm:w-auto">
                {homeContent.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-14 text-lg w-full sm:w-auto">
                {homeContent.hero.secondaryCta}
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground font-mono opacity-70">
            {homeContent.hero.microLine}
          </p>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-navy rounded-full blur-3xl opacity-60 -z-10 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
      </div>

      {/* 2. Three Pillars Section */}
      <Section className="bg-section-soft py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {homeContent.pillars.map((pillar) => (
            <Link key={pillar.id} href={pillar.href}>
              <div className="group relative p-8 rounded-2xl border border-white/5 bg-card/40 hover:bg-card/60 transition-all duration-300 overflow-hidden h-full cursor-pointer">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <Badge variant="outline" className="mb-6 border-brand-teal/20 text-brand-teal bg-brand-teal/5">
                  {pillar.title}
                </Badge>
                
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-teal transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {pillar.desc}
                </p>
                
                <div className="flex items-center text-sm font-bold text-brand-teal mt-auto">
                  <span className="relative">
                    Explore
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 3. Capability Grid (Hyperboliq Inspired) */}
      <Section className="py-24 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Capabilities</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical depth.</h2>
          <p className="text-xl text-muted-foreground">
            We go deeper than standard agency implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {homeContent.capabilities.map((cap, i) => (
            <div key={i} className="bg-background/95 p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-colors group">
              {i % 4 === 0 && <Database className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-teal transition-colors" />}
              {i % 4 === 1 && <LayoutTemplate className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-teal transition-colors" />}
              {i % 4 === 2 && <Code2 className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-teal transition-colors" />}
              {i % 4 === 3 && <Share2 className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-teal transition-colors" />}
              <span className="font-medium text-lg">{cap}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Built Properly Section (Engineering Tone) */}
      <Section className="bg-section-soft-reverse py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{homeContent.builtProperly.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {homeContent.builtProperly.desc}
            </p>
            
            <div className="space-y-8">
              {homeContent.builtProperly.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-teal">
                     {i === 0 ? <Code2 className="h-6 w-6" /> : i === 1 ? <Share2 className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             {/* Code Block Visual */}
             <div className="bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                   <div className="h-3 w-3 rounded-full bg-red-500/50" />
                   <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                   <div className="h-3 w-3 rounded-full bg-green-500/50" />
                   <div className="ml-auto text-xs text-muted-foreground font-mono">config.ts</div>
                </div>
                <div className="p-6 font-mono text-sm leading-loose text-blue-100/80 overflow-x-auto">
                   <div className="text-gray-500">// Muloo Implementation Standard</div>
                   <div><span className="text-purple-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-200">hubspotConfig</span> = {'{'}</div>
                   <div className="pl-4">objects: [<span className="text-green-300">'deals'</span>, <span className="text-green-300">'tickets'</span>, <span className="text-green-300">'custom_objects'</span>],</div>
                   <div className="pl-4">sync: {'{'}</div>
                   <div className="pl-8">mode: <span className="text-green-300">'bidirectional'</span>,</div>
                   <div className="pl-8">frequency: <span className="text-blue-400">5000</span>,</div>
                   <div className="pl-8">retryStrategy: <span className="text-purple-400">true</span></div>
                   <div className="pl-4">{'}'},</div>
                   <div className="pl-4">security: <span className="text-green-300">'strict'</span></div>
                   <div>{'}'};</div>
                </div>
             </div>
             
             {/* Decorator */}
             <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-brand-teal/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* 5. Partners Section (Strategic Collaborators) */}
      <Section className="py-24 border-t border-white/5 bg-brand-navy">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4 opacity-80">{homeContent.partners.headline}</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">{homeContent.partners.body}</p>
            <div className="flex justify-center gap-12 md:gap-24 flex-wrap items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {homeContent.partners.list.map(partner => (
                <div key={partner} className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white hover:text-brand-teal cursor-default">
                  {partner}
                </div>
              ))}
            </div>
        </div>
      </Section>
      
      {/* CTA Footer */}
      <Section className="py-32 text-center bg-gradient-to-b from-brand-navy to-black/40 border-t border-white/5">
        <Badge variant="outline" className="mb-6 border-brand-teal/20 text-brand-teal">Ready to build?</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's scope your project.</h2>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-12 h-16 text-xl shadow-[0_0_30px_-5px_hsl(182,100%,40%,0.3)] hover:shadow-[0_0_40px_-5px_hsl(182,100%,40%,0.4)] transition-all">
            Book a discovery call <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

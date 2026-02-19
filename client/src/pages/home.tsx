import { Hero } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, LayoutTemplate, Share2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import womanInCafe from "@assets/happy-african-american-young-woman-afro-hair-modern-cafe-small_1771487221441.jpg";
import teamWork from "@assets/happiness-at-workplace-GettyImages-1129332568_1771487221441.jpg";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Dark SaaS Style Gradient and Orange Glows */}
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
              <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-8 h-14 text-lg w-full sm:w-auto shadow-[0_0_20px_-5px_hsl(24,90%,54%,0.4)]">
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

        {/* Abstract Background Elements with Orange */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-navy rounded-full blur-3xl opacity-60 -z-10 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4 pointer-events-none -z-10"></div>
      </div>

      {/* 2. Three Pillars Section */}
      <Section className="bg-section-soft py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {homeContent.pillars.map((pillar) => (
            <Link key={pillar.id} href={pillar.href}>
              <div className="group relative p-8 rounded-2xl border border-white/5 bg-card/40 hover:bg-card/60 transition-all duration-300 overflow-hidden h-full cursor-pointer">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <Badge variant="outline" className="mb-6 border-brand-teal/20 text-brand-teal bg-brand-teal/5 group-hover:border-brand-orange/30 group-hover:text-brand-orange group-hover:bg-brand-orange/5 transition-colors">
                  {pillar.title}
                </Badge>
                
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {pillar.desc}
                </p>
                
                <div className="flex items-center text-sm font-bold text-brand-teal mt-auto group-hover:text-brand-orange transition-colors">
                  <span className="relative">
                    Explore
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-300" />
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
          <Badge className="mb-4 bg-brand-teal/10 text-brand-teal border-brand-teal/20">Capabilities</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical depth.</h2>
          <p className="text-xl text-muted-foreground">
            We go deeper than standard agency implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {homeContent.capabilities.map((cap, i) => (
            <div key={i} className="bg-background/95 p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-colors group">
              {i % 4 === 0 && <Database className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-orange transition-colors" />}
              {i % 4 === 1 && <LayoutTemplate className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-orange transition-colors" />}
              {i % 4 === 2 && <Code2 className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-orange transition-colors" />}
              {i % 4 === 3 && <Share2 className="h-8 w-8 text-brand-teal/50 group-hover:text-brand-orange transition-colors" />}
              <span className="font-medium text-lg">{cap}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Built Properly Section with Image Context */}
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
                  <div className="h-12 w-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 text-brand-orange">
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
             {/* Using the "Woman in Cafe" image here to represent the human/approachable side of tech */}
             <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  src={womanInCafe} 
                  alt="Muloo team member" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-8">
                   <div className="font-mono text-brand-teal text-sm mb-2">Human-Centric Tech</div>
                   <div className="text-white font-bold text-lg">We build for people, not just machines.</div>
                </div>
             </div>
             
             {/* Decorator */}
             <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-brand-orange/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* 5. Partners Section (Strategic Collaborators) + Badges */}
      <Section className="py-24 border-t border-white/5 bg-brand-navy">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8 opacity-80">Trusted by</h2>
            
            {/* Certification Badges Row */}
            <div className="flex justify-center gap-12 mb-16 items-center flex-wrap">
               <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-24 md:h-32 w-auto drop-shadow-[0_0_15px_rgba(244,118,33,0.3)]" />
               <img src={googleBadge} alt="Google Partner" className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>

            <div className="w-full h-px bg-white/5 max-w-2xl mx-auto mb-16" />

            <h2 className="text-2xl font-bold mb-4 opacity-80">{homeContent.partners.headline}</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">{homeContent.partners.body}</p>
            <div className="flex justify-center gap-12 md:gap-24 flex-wrap items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {homeContent.partners.list.map(partner => (
                <div key={partner} className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white hover:text-brand-orange cursor-default">
                  {partner}
                </div>
              ))}
            </div>
        </div>
      </Section>
      
      {/* CTA Footer */}
      <Section className="py-32 text-center bg-gradient-to-b from-brand-navy to-black/40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay pointer-events-none" />
        <div className="relative z-10">
          <Badge variant="outline" className="mb-6 border-brand-orange/20 text-brand-orange bg-brand-orange/5">Ready to build?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's scope your project.</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-12 h-16 text-xl shadow-[0_0_30px_-5px_hsl(24,90%,54%,0.4)] hover:shadow-[0_0_40px_-5px_hsl(24,90%,54%,0.6)] transition-all">
              Book a discovery call <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

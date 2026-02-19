import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Layers, Zap, Cpu, Rocket, GitBranch, Globe } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import womanInCafe from "@assets/happy-african-american-young-woman-afro-hair-modern-cafe-small_1771487221441.jpg";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

export function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* 1. New "Cosmic" Hero Section */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-hero-cosmic">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
            {homeContent.hero.badge}
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] max-w-6xl mx-auto text-white drop-shadow-2xl">
            Stop buying hours.<br/>
            <span className="text-gradient-orange">Start shipping software.</span>
          </h1>
          
          {/* Subhead */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            {homeContent.hero.subhead}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-16 text-lg w-full sm:w-auto rounded-full shadow-[0_0_30px_-5px_hsl(24,90%,54%,0.4)] hover:shadow-[0_0_50px_-10px_hsl(24,90%,54%,0.6)] hover:-translate-y-1 transition-all duration-300">
                {homeContent.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-10 h-16 text-lg w-full sm:w-auto rounded-full border border-white/10 hover:border-white/20">
                {homeContent.hero.secondaryCta}
              </Button>
            </Link>
          </div>

          {/* Tech Stack Ticker - "Cosmic" Style */}
          <div className="max-w-4xl mx-auto border-t border-white/5 pt-12">
            <p className="text-sm font-mono text-muted-foreground/50 mb-6 uppercase tracking-widest">Powering scalable systems with</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
              {homeContent.hero.techStack.map((tech) => (
                <span key={tech} className="text-lg font-bold text-white/40 hover:text-white hover:scale-110 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Value Proposition - Dark & Impactful */}
      <Section className="py-24 bg-[#050A15] border-y border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-brand-orange font-mono text-sm mb-4 tracking-widest uppercase">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">{homeContent.valueProp.title}</h3>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              {homeContent.valueProp.desc}
            </p>
         </div>
      </Section>

      {/* 3. Redesigned Services - "Sleek Cards" */}
      <Section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="grid lg:grid-cols-3 gap-6">
          {homeContent.pillars.map((pillar, i) => (
            <Link key={pillar.id} href={pillar.href}>
              <div className="group glass-card h-full p-8 md:p-10 rounded-3xl flex flex-col cursor-pointer relative overflow-hidden">
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 ${i === 0 ? 'bg-brand-orange' : i === 1 ? 'bg-brand-teal' : 'bg-white/20'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Icon */}
                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                  {i === 0 ? <Cpu className="h-8 w-8 text-brand-orange" /> : i === 1 ? <Database className="h-8 w-8 text-brand-teal" /> : <GitBranch className="h-8 w-8 text-white" />}
                </div>

                <div className="mb-auto">
                  <h4 className="text-sm font-mono text-muted-foreground mb-2">{pillar.subtitle}</h4>
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:translate-x-1 transition-transform">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                    {pillar.desc}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pillar.features.map(feat => (
                    <li key={feat} className="flex items-center text-sm font-medium text-white/60">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20 mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center text-white font-bold group-hover:text-brand-orange transition-colors">
                   Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4. "Built Properly" Feature Section - Split Layout */}
      <Section className="py-32 bg-background border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src={womanInCafe} 
                  alt="Engineering team" 
                  className="w-full h-auto object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-transparent to-transparent opacity-80" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                   {homeContent.stats.slice(0, 2).map((stat, i) => (
                     <div key={i} className="bg-[#050A15]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </div>
             
             {/* Decorator */}
             <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-brand-orange/30 rounded-tl-3xl" />
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full -z-10" />
          </div>
          
          <div className="order-1 md:order-2">
            <Badge className="mb-6 bg-brand-orange/10 text-brand-orange border-brand-orange/20 hover:bg-brand-orange/20 px-3 py-1">Engineering Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">We speak <span className="text-gradient-teal">API</span>, not just marketing.</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Most HubSpot partners are marketing agencies trying to be technical. We are a software house that specializes in revenue operations.
            </p>
            
            <div className="space-y-6">
               <div className="flex gap-4 items-start group">
                  <div className="mt-1 h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-teal/50 transition-colors">
                    <Layers className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Architecture First</h3>
                    <p className="text-muted-foreground">We design data models that scale, not just quick fixes that break in 6 months.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start group">
                  <div className="mt-1 h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 transition-colors">
                    <Rocket className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Rapid Deployment</h3>
                    <p className="text-muted-foreground">We ship code. From custom apps to complex integrations, we move fast.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start group">
                  <div className="mt-1 h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/50 transition-colors">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Global Standards</h3>
                    <p className="text-muted-foreground">Documentation, version control, and security best practices come standard.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Proof Section */}
      <Section className="py-24 border-t border-white/5 bg-[#0A0F1C]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-lg font-mono text-muted-foreground mb-12 uppercase tracking-[0.2em]">Certified Technical Experts</h2>
            
            <div className="flex justify-center gap-16 md:gap-24 items-center flex-wrap">
               <div className="group relative">
                  <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-28 md:h-32 w-auto relative z-10" />
               </div>
               <img src={googleBadge} alt="Google Partner" className="h-12 md:h-16 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
            </div>
        </div>
      </Section>
      
      {/* 6. Big CTA Footer */}
      <Section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-orange/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">Ready to <span className="text-brand-orange">build</span>?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stop hacking together spreadsheets and zaps. Let's build a proper scalable system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-12 h-16 text-xl rounded-full shadow-lg hover:scale-105 transition-transform">
                Start a Project
              </Button>
            </Link>
            <Link href="/services/consulting">
               <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 px-10 h-16 text-xl rounded-full">
                  Explore Consulting
               </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Layers, Zap, Cpu, Rocket, GitBranch, Globe, Bot, Layout, Server, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import womanInCafe from "@assets/happy-african-american-young-woman-afro-hair-modern-cafe-small_1771487221441.jpg";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

export function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* 1. Hero Section - Refined for "Technical Partner" positioning */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gradient-core">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2 animate-pulse"></span>
            {homeContent.hero.badge}
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] max-w-6xl mx-auto text-white drop-shadow-2xl">
            Engineering the future of <span className="text-gradient-orange">revenue.</span>
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

          {/* Tech Stack Ticker - Code style */}
          <div className="max-w-4xl mx-auto border-t border-white/5 pt-12">
            <p className="text-sm font-mono text-muted-foreground/50 mb-6 uppercase tracking-widest">Built with</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {homeContent.hero.techStack.map((tech) => (
                <div key={tech} className="px-3 py-1 rounded bg-white/5 border border-white/5 text-sm font-mono text-muted-foreground hover:text-brand-teal hover:border-brand-teal/30 transition-colors cursor-default">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Value Proposition - "Code. Config. Context." */}
      <Section className="py-24 bg-gradient-teal-soft border-y border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-brand-teal font-mono text-sm mb-4 tracking-widest uppercase">{homeContent.valueProp.subtitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">{homeContent.valueProp.title}</h3>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              {homeContent.valueProp.desc}
            </p>
         </div>
      </Section>

      {/* 3. The 4 Pillars - Modular Cards */}
      <Section className="py-24 bg-background relative overflow-hidden">
        <div className="grid lg:grid-cols-4 gap-6">
          {homeContent.pillars.map((pillar, i) => (
            <Link key={pillar.id} href={pillar.href}>
              <div className="group glass-card h-full p-8 rounded-2xl flex flex-col cursor-pointer relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                
                {/* Icon */}
                <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:bg-brand-teal/10 transition-colors">
                  {i === 0 ? <Database className="h-6 w-6 text-brand-orange" /> : 
                   i === 1 ? <Cpu className="h-6 w-6 text-brand-teal" /> : 
                   i === 2 ? <Layout className="h-6 w-6 text-white" /> : 
                   <Bot className="h-6 w-6 text-purple-400" />}
                </div>

                <div className="mb-auto">
                  <h4 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{pillar.subtitle}</h4>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-teal transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <ul className="space-y-2 mb-8 border-t border-white/5 pt-4">
                  {pillar.features.slice(0, 3).map(feat => (
                    <li key={feat} className="flex items-center text-xs font-medium text-white/60">
                      <div className="h-1 w-1 rounded-full bg-brand-teal/50 mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:text-brand-teal transition-colors">
                   Details <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4. Engineering Impact - Split Layout with Image */}
      <Section className="py-32 bg-background border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src={womanInCafe} 
                  alt="Engineering team" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 via-transparent to-transparent" />
                
                {/* Floating Code Snippet */}
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="code-block text-xs backdrop-blur-md bg-black/60 border-white/10 shadow-xl">
                      <div className="text-muted-foreground mb-2">// Automated RevOps Workflow</div>
                      <div className="text-green-400">await</div> HubSpot.deals.create(<span className="text-yellow-300">{"{"}</span><br/>
                      &nbsp;&nbsp;properties: ai_enriched_data<br/>
                      <span className="text-yellow-300">{"}"}</span>);
                   </div>
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <Badge className="mb-6 bg-brand-teal/10 text-brand-teal border-brand-teal/20 hover:bg-brand-teal/20 px-3 py-1">Full Stack Capability</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">We speak <span className="text-gradient-teal">code</span>, not just marketing.</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Most partners click buttons. We write the software that connects your entire ecosystem.
            </p>
            
            <div className="grid gap-6">
               {homeContent.stats.map((stat, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-brand-teal/30 transition-colors">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Proof Section */}
      <Section className="py-24 border-t border-white/5 bg-[#0A0F1C]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-xs font-mono text-muted-foreground mb-12 uppercase tracking-[0.2em]">Certified Technical Experts</h2>
            
            <div className="flex justify-center gap-16 md:gap-24 items-center flex-wrap">
               <div className="group relative">
                  <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-24 w-auto relative z-10 drop-shadow-xl" />
               </div>
               <img src={googleBadge} alt="Google Partner" className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
            </div>
        </div>
      </Section>
      
      {/* 6. Big CTA Footer */}
      <Section className="py-32 text-center relative overflow-hidden bg-gradient-core">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">Ready to <span className="text-gradient-orange">build</span>?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stop hacking together spreadsheets. Let's engineer a scalable revenue machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-12 h-16 text-xl rounded-full shadow-lg hover:scale-105 transition-transform">
                Start a Project
              </Button>
            </Link>
            <Link href="/services/ai">
               <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 px-10 h-16 text-xl rounded-full">
                  Explore AI Agents
               </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

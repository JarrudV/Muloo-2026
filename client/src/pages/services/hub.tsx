import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, BarChart3, Users, LayoutDashboard } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceHubContent } from "@/lib/content";

export function ServicesHub() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge variant="hubspot" className="mb-6">HubSpot Partners</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{serviceHubContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-[#F47621] pl-6">
            {serviceHubContent.intro}
          </p>
        </div>
      </Section>

      {/* Before / After Concept */}
      <Section className="py-24 bg-section-soft">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <div>
                 <h2 className="text-3xl font-bold mb-4 text-white">From Chaos</h2>
                 <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2 text-destructive"><span className="w-2 h-2 rounded-full bg-destructive" /> Duplicate contacts & dirty data</li>
                    <li className="flex items-center gap-2 text-destructive"><span className="w-2 h-2 rounded-full bg-destructive" /> No clear sales process</li>
                    <li className="flex items-center gap-2 text-destructive"><span className="w-2 h-2 rounded-full bg-destructive" /> Reporting based on guesswork</li>
                 </ul>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                 <h2 className="text-3xl font-bold mb-4 text-brand-teal">To Clarity</h2>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-5 h-5 text-brand-teal" /> Single source of truth</li>
                    <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-5 h-5 text-brand-teal" /> Automated, reliable pipelines</li>
                    <li className="flex items-center gap-2 text-white"><CheckCircle2 className="w-5 h-5 text-brand-teal" /> Real-time revenue attribution</li>
                 </ul>
              </div>
           </div>
           
           {/* Reporting Dashboard Mock */}
           <div className="relative">
              <div className="absolute inset-0 bg-[#F47621]/20 blur-3xl rounded-full opacity-20" />
              <div className="bg-card border border-white/10 rounded-xl p-6 shadow-2xl relative z-10 backdrop-blur-sm">
                 <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                       <BarChart3 className="text-brand-teal" />
                       <span className="font-bold">Revenue Dashboard</span>
                    </div>
                    <Badge variant="outline" className="text-xs">Live</Badge>
                 </div>
                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg">
                       <div className="text-xs text-muted-foreground mb-1">Deals Closed</div>
                       <div className="text-2xl font-bold text-white">142</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                       <div className="text-xs text-muted-foreground mb-1">Revenue</div>
                       <div className="text-2xl font-bold text-brand-teal">$1.2M</div>
                    </div>
                 </div>
                 <div className="h-32 bg-white/5 rounded-lg flex items-end justify-between p-2 gap-2">
                    {[40, 60, 45, 70, 55, 80, 65, 90].map((h, i) => (
                       <div key={i} className="w-full bg-brand-teal/50 hover:bg-brand-teal transition-colors rounded-t-sm" style={{height: `${h}%`}} />
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {serviceHubContent.features.map((feature, i) => (
               <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-white/5 hover:border-[#F47621]/50 hover:bg-card/50 transition-all duration-300 group">
                 <div className="mt-1">
                    <CheckCircle2 className="h-5 w-5 text-brand-teal group-hover:text-[#F47621] transition-colors" />
                 </div>
                 <span className="text-lg font-medium">{feature}</span>
               </div>
             ))}
        </div>
      </Section>

      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{serviceHubContent.cta.headline}</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{serviceHubContent.cta.body}</p>
        <Link href="/contact">
          <Button size="lg" className="bg-[#F47621] text-white hover:bg-[#F47621]/90 font-bold px-10 h-14">
            Talk to a HubSpot Expert <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

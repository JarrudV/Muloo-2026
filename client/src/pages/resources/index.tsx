import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileCode2, Settings, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ResourcesIndex() {
  const categories = [
    { title: "HubSpot Foundations", icon: Settings, desc: "Setup guides and best practices." },
    { title: "Integration Patterns", icon: FileCode2, desc: "Connecting systems securely." },
    { title: "CRM Architecture", icon: BookOpen, desc: "Data modeling and hygiene." },
    { title: "Product Notes", icon: Smartphone, desc: "Updates on our apps." },
  ];

  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Technical Insights.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          No fluff. Just practical guides on engineering, design, and growth operations.
        </p>
      </Section>

      <Section className="bg-section-soft py-12 border-b border-white/5">
         <div className="grid md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
               <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                  <cat.icon className="h-5 w-5 text-brand-teal" />
                  <div>
                     <div className="font-bold text-sm">{cat.title}</div>
                     <div className="text-xs text-muted-foreground">{cat.desc}</div>
                  </div>
               </div>
            ))}
         </div>
      </Section>

      <Section className="py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Recent Articles */}
          <div className="space-y-8">
             <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
             {[1, 2, 3].map((i) => (
                <Link key={i} href={`/blog/${i}`}>
                   <div className="group cursor-pointer block">
                      <div className="flex items-center gap-3 mb-2 text-xs font-mono text-brand-teal">
                         <span>Oct 12, 2025</span>
                         <span className="w-1 h-1 rounded-full bg-brand-teal/50" />
                         <span>Architecture</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                         Why your HubSpot data is messy (and how to fix it)
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                         Data hygiene is the unsexy hero of revenue operations. Without clean data, your fancy automation is just scaling chaos.
                      </p>
                      <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                         Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                   </div>
                </Link>
             ))}
          </div>

          {/* Featured Case Study */}
          <div>
             <h2 className="text-2xl font-bold mb-8">Featured Work</h2>
             <div className="bg-card rounded-2xl border border-white/10 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-brand-navy to-brand-teal/20 p-8 flex items-center justify-center">
                   <div className="text-4xl font-extrabold text-white/10">CASE STUDY</div>
                </div>
                <div className="p-8">
                   <Badge className="mb-4">Migration</Badge>
                   <h3 className="text-3xl font-bold mb-4">Migrating 50k contacts to HubSpot</h3>
                   <p className="text-muted-foreground mb-8">
                      How we helped a leading FinTech company consolidate 5 different CRM systems into a single source of truth.
                   </p>
                   <Link href="/case-studies/1">
                      <Button variant="outline" className="w-full">Read Case Study</Button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

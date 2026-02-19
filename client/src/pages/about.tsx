import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";
import { aboutContent } from "@/lib/content";

export function About() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{aboutContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {aboutContent.intro}
          </p>
        </div>
      </Section>

      <Section className="py-24 bg-section-soft">
         <div className="grid md:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
               <div className="space-y-8">
                  {aboutContent.philosophy.map((item, i) => (
                     <div key={i} className="pl-6 border-l-2 border-white/10 hover:border-brand-teal transition-colors">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bg-card border border-white/10 rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Terminal className="w-24 h-24" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Technical & Human</h3>
               <p className="text-muted-foreground leading-relaxed mb-6">
                  We built Muloo because we saw a gap. Agencies were great at creative, but bad at systems. Developers were great at code, but bad at strategy.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                  We sit in the middle. We are engineers who understand revenue. We are consultants who write code.
               </p>
            </div>
         </div>
      </Section>

      <Section className="py-24">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground">The people setting the technical standard.</p>
         </div>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl border border-white/10 flex items-center gap-6">
               <div className="h-20 w-20 rounded-full bg-white/10 shrink-0" />
               <div>
                  <h3 className="text-xl font-bold">Jarrud van der Merwe</h3>
                  <div className="text-brand-teal font-mono text-sm mb-2">Founder & Strategy Lead</div>
                  <p className="text-sm text-muted-foreground">Ex-Head of Product. Obsessed with CRM architecture and scalable systems.</p>
               </div>
            </div>
             <div className="bg-card p-6 rounded-xl border border-white/10 flex items-center gap-6">
               <div className="h-20 w-20 rounded-full bg-white/10 shrink-0" />
               <div>
                  <h3 className="text-xl font-bold">Technical Lead</h3>
                  <div className="text-brand-teal font-mono text-sm mb-2">Head of Engineering</div>
                  <p className="text-sm text-muted-foreground">Full stack developer specializing in API integrations and HubSpot CMS.</p>
               </div>
            </div>
         </div>
      </Section>

      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Work with us</h2>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14">
            Get in touch <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code2, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceAiContent } from "@/lib/content";

export function ServicesAi() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20 bg-gradient-core">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-6 border-brand-teal/20 text-brand-teal bg-brand-teal/5">Muloo AI</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">{serviceAiContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-teal pl-6">
            {serviceAiContent.intro}
          </p>
        </div>
      </Section>

      <Section className="bg-gradient-teal-soft py-24">
        <div className="grid md:grid-cols-2 gap-8">
            {serviceAiContent.services.map((service, i) => (
               <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-start group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10">
                    <Sparkles className="h-24 w-24 text-brand-teal" />
                  </div>
                  
                  <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-colors">
                      {i === 0 ? <Code2 className="h-6 w-6 text-brand-teal" /> : 
                       i === 1 ? <Sparkles className="h-6 w-6 text-brand-teal" /> : 
                       i === 2 ? <Bot className="h-6 w-6 text-brand-teal" /> : 
                       <ShieldCheck className="h-6 w-6 text-brand-teal" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-brand-teal transition-colors">{service.title}</h3>
                  <div className="text-sm font-mono text-muted-foreground mb-4 w-full">Lead: {service.lead}</div>
                  <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">{service.desc}</p>
                  
                  {i === 1 && (
                    <div className="code-block w-full mb-6 text-xs">
                        <span className="text-purple-400">const</span> <span className="text-blue-400">prototype</span> = <span className="text-yellow-400">await</span> vibe.code(<span className="text-green-400">"idea"</span>);
                    </div>
                  )}
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-brand-teal/10 hover:text-brand-teal hover:border-brand-teal/30">
                       Discuss Application <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
               </div>
            ))}
        </div>
      </Section>

      <Section className="py-32 text-center bg-background border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to deploy intelligence?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Move from AI hype to practical engineering.</p>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-background hover:bg-brand-teal/90 font-bold px-10 h-14 rounded-full glow-tech">
            Book an AI Audit <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

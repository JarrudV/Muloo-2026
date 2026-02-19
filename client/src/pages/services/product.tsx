import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Hammer, Laptop, Package } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceProductContent } from "@/lib/content";

export function ServicesProduct() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-6 border-brand-teal/20 text-brand-teal">Muloo Product</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{serviceProductContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-teal pl-6">
            {serviceProductContent.intro}
          </p>
        </div>
      </Section>

      <Section className="bg-section-soft py-24">
        <div className="grid md:grid-cols-3 gap-8">
            {serviceProductContent.products.map((product, i) => (
               <div key={i} className="bg-card p-8 rounded-2xl border border-white/10 flex flex-col items-start hover:border-brand-teal/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                  <div className="flex justify-between w-full mb-6">
                      <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                          {i === 0 ? <Package className="h-6 w-6 text-brand-teal" /> : i === 1 ? <Laptop className="h-6 w-6 text-brand-teal" /> : <Hammer className="h-6 w-6 text-brand-teal" />}
                      </div>
                      <Badge variant={product.status === "Commercial Product" ? "teal" : "navy"} className="h-fit">
                         {product.status}
                      </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-teal transition-colors">{product.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">{product.desc}</p>
                  
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 hover:text-brand-teal group-hover:border-brand-teal/30">
                     View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
               </div>
            ))}
        </div>
      </Section>

      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for scale.</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">See how our pre-built solutions can accelerate your operations.</p>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14">
            Request a demo <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

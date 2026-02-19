import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, LayoutGrid } from "lucide-react";
import { Link } from "wouter";

export function ServicesProduct() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="text-brand-teal font-mono mb-4 text-sm tracking-widest uppercase">Service Focus</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Muloo Product</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-teal pl-6">
            Commercial software and internal tools built by Muloo. Products that solve real operational problems and plug neatly into modern CRM stacks.
          </p>
        </div>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-2xl border border-white/10 flex flex-col items-start">
                <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                    <LayoutGrid className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dashboards & Portals</h3>
                <p className="text-muted-foreground mb-8">Client-facing portals that expose HubSpot data securely. Give your customers visibility into their projects, tickets, and invoices.</p>
                <Button variant="outline" className="mt-auto">Learn more</Button>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-white/10 flex flex-col items-start">
                <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                    <Box className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Inventory Manager</h3>
                <p className="text-muted-foreground mb-8">A lightweight inventory management tool that syncs directly with HubSpot Deals and Products. Perfect for wholesalers.</p>
                <Button variant="outline" className="mt-auto">View Product</Button>
            </div>
        </div>
      </Section>

      <Section className="py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore our products</h2>
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

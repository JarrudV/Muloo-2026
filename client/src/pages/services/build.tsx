import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Workflow } from "lucide-react";
import { Link } from "wouter";

export function ServicesBuild() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="text-brand-teal font-mono mb-4 text-sm tracking-widest uppercase">Service Focus</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Muloo Build</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-brand-teal pl-6">
            Integrations, apps, and full stack development. We connect platforms, automate workflows, and build custom software where off the shelf tools stop short.
          </p>
        </div>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-white/10">
                <Code2 className="h-10 w-10 text-brand-teal mb-6" />
                <h3 className="text-2xl font-bold mb-4">Custom Apps</h3>
                <p className="text-muted-foreground">React & Node.js applications that solve specific business problems tailored to your workflow.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-white/10">
                <Database className="h-10 w-10 text-brand-teal mb-6" />
                <h3 className="text-2xl font-bold mb-4">Integrations</h3>
                <p className="text-muted-foreground">Robust data sync between HubSpot, ERPs, and legacy systems. Built to handle scale and complexity.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-white/10">
                <Workflow className="h-10 w-10 text-brand-teal mb-6" />
                <h3 className="text-2xl font-bold mb-4">Automation</h3>
                <p className="text-muted-foreground">Complex workflow automation that goes beyond standard triggers. Serverless functions and scheduled jobs.</p>
            </div>
        </div>
      </Section>

      <Section className="py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need something custom built?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Let's scope out your technical requirements and build a roadmap.</p>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14">
            Discuss your project <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

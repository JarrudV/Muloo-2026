import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Zap } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">About Muloo.</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We are a technical partner for ambitious teams. We bridge the gap between marketing strategy and engineering reality.
          </p>
        </div>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <p className="text-muted-foreground">A small, focused team of engineers, HubSpot architects, and product designers based in Cape Town.</p>
          </div>
          <div>
            <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
            <p className="text-muted-foreground">We work with clients across the UK, US, and Europe, delivering high-quality work from our SA time zone.</p>
          </div>
          <div>
            <div className="h-12 w-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-muted-foreground">No fluff. We care about clean code, scalable architecture, and systems that actually work.</p>
          </div>
        </div>
      </Section>

      <Section className="py-32 text-center">
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

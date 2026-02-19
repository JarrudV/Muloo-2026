import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

export function ResourcesIndex() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Resources.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          Learnings, case studies, and technical guides from the Muloo team.
        </p>
      </Section>

      <Section className="bg-white/5 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-2xl border border-white/10 group hover:border-brand-teal/50 transition-colors">
            <BookOpen className="h-10 w-10 text-brand-teal mb-6" />
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-muted-foreground mb-8">
              Deep dives into how we've helped clients scale with HubSpot and custom software.
            </p>
            <Link href="/case-studies">
              <Button variant="outline" className="group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-white/10 group hover:border-brand-teal/50 transition-colors">
            <FileText className="h-10 w-10 text-brand-teal mb-6" />
            <h2 className="text-3xl font-bold mb-4">Insights</h2>
            <p className="text-muted-foreground mb-8">
              Technical articles, tutorials, and opinions on the state of marketing ops.
            </p>
            <Link href="/blog">
              <Button variant="outline" className="group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors">
                Read the Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

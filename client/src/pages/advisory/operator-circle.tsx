import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function OperatorCircle() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 border-brand-orange/30 text-brand-orange bg-brand-orange/5"
              data-testid="badge-operator-circle-status"
            >
              In Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Operator Circle</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] border-l-4 border-brand-orange pl-6 mb-6">
              A private forum in development for founders navigating systems, scale, and AI adoption.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.8] max-w-2xl">
              Operator Circle is being designed as a focused environment for practical decision-making. The intent is
              to create a forum where experienced operators can work through real constraints with peers.
            </p>
          </div>
        </div>
      </Section>

      {/* Concept */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-3xl">
          <span className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-6 block">Concept</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Structured operator conversations</h2>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">
            The model is built around curated operator discussions with a practical focus on systems, governance, AI,
            and capital decisions.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            This is not a panel format and not a networking event. The goal is disciplined, useful conversations that
            lead to clearer decisions.
          </p>
        </div>
      </Section>

      {/* Status */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="max-w-3xl">
          <span className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-6 block">Status</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Currently in design</h2>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">
            We are currently designing the session format, including options for a hybrid model.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8] mb-6">
            We are also evaluating a paid membership structure that keeps participation intentional and high quality.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            The initiative is aligned with Muloo&apos;s advisory and selective build-for-equity work so conversations
            remain connected to real operating and delivery experience.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Interested in shaping it?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            If this is relevant to your stage, register interest and we&apos;ll keep you informed as the model is
            defined.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-14 rounded-lg"
              data-testid="button-register-interest"
            >
              Register Interest <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

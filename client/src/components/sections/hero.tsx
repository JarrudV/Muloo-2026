import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

interface HeroProps {
  headline: string;
  subhead: string;
  primaryCta: string;
  secondaryCta: string;
  align?: "left" | "center";
}

export function Hero({ headline, subhead, primaryCta, secondaryCta, align = "left" }: HeroProps) {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32">
      <div className={cn("max-w-4xl", align === "center" ? "mx-auto text-center" : "")}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          {headline.split(" ").map((word, i) => (
             word.toLowerCase().includes("hubspot") ? <span key={i} className="text-gradient-teal">{word} </span> : word + " "
          ))}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
          {subhead}
        </p>
        <div className={cn("flex flex-wrap gap-4", align === "center" ? "justify-center" : "")}>
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-8 h-14 text-lg">
            {primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-14 text-lg">
            {secondaryCta}
          </Button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </Section>
  );
}

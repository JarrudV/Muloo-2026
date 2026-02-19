import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Linkedin, Shield, TrendingUp, Settings, Cog } from "lucide-react";
import { advisoryContent } from "@/lib/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import jarrudImg from "@assets/d1bde727-2cda-4a05-ad55-08a4eeb1c30f_1771492083207.png";
import morneImg from "@assets/Morne_1771492100987.png";
import paulImg from "@assets/e03647df-fb65-4c59-b350-b505eb0fd17b_1771492117754.png";

const getImage = (imageName: string) => {
  if (imageName.includes("jarrud")) return jarrudImg;
  if (imageName.includes("morne")) return morneImg;
  if (imageName.includes("paul")) return paulImg;
  return "";
};

const serviceIcons: Record<string, React.ReactNode> = {
  cto: <Shield className="h-6 w-6" />,
  "sales-eng": <TrendingUp className="h-6 w-6" />,
  process: <Cog className="h-6 w-6" />,
  coo: <Settings className="h-6 w-6" />,
};

export function Advisory() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-sm" data-testid="badge-advisory">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2" />
              Advisory
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05] text-white" data-testid="text-advisory-headline">
              {advisoryContent.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-[1.8] max-w-2xl font-light">
              {advisoryContent.hero.subtext}
            </p>
          </div>
        </div>
      </div>

      {/* Problem Framing */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-6 block">The gap</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Growing businesses need senior capability before they can afford it full-time.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            The gap between where you are and where you need to be requires experienced operators — people who've built, scaled, and shipped before. Not more junior hires. Not another agency. Leadership that embeds, decides, and delivers.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Advisory Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advisoryContent.services.map((service) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-2xl group hover:border-white/10 transition-all duration-300"
              data-testid={`card-advisory-${service.id}`}
            >
              <div className="flex items-start gap-6">
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                >
                  {serviceIcons[service.id]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-[1.8] text-sm">{service.desc}</p>
                  <div
                    className="w-10 h-0.5 mt-6 opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: service.accent }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Grid */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The people behind the advisory.</h2>
          <p className="text-muted-foreground leading-[1.8]">Senior practitioners who embed directly into your business. Not consultants who disappear after a slide deck.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {advisoryContent.leaders.map((leader, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-start group" data-testid={`card-leader-${i}`}>
              <div className="mb-6 relative">
                <div
                  className="h-24 w-24 rounded-full p-[2px] transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${leader.accent}30, transparent 60%)`,
                  }}
                >
                  <div className="h-full w-full rounded-full overflow-hidden">
                    <Avatar className="h-full w-full">
                      <AvatarImage src={getImage(leader.image)} alt={leader.name} className="object-cover" />
                      <AvatarFallback className="text-lg font-bold">{leader.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{leader.name}</h3>
              <p className="text-xs font-mono mb-4" style={{ color: leader.accent }}>{leader.title}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {leader.roles.map((role, ri) => (
                  <span
                    key={ri}
                    className="text-[11px] px-2 py-0.5 rounded border font-mono"
                    style={{
                      borderColor: `${leader.accent}20`,
                      backgroundColor: `${leader.accent}08`,
                      color: `${leader.accent}99`,
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-[1.8] mb-6 flex-grow">{leader.bio}</p>

              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="mt-auto" data-testid={`link-linkedin-${i}`}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white hover:bg-white/5 px-0">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Button>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Engagement Model */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Engagement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How we engage</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fractional",
              desc: "Ongoing part-time leadership embedded in your team — attending standups, making decisions, and driving outcomes on a retained basis.",
            },
            {
              title: "Interim",
              desc: "Full-time senior leadership for a defined period — covering a gap, managing a transition, or stabilising before a permanent hire.",
            },
            {
              title: "Project-Led",
              desc: "Scoped strategic engagements with clear deliverables — audits, roadmaps, team assessments, or transformation programmes.",
            },
          ].map((model, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 group hover:border-brand-teal/15 transition-all duration-300"
              data-testid={`card-engagement-${i}`}
            >
              <h3 className="text-lg font-bold mb-3 text-white">{model.title}</h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">{model.desc}</p>
              <div className="w-10 h-0.5 mt-6 bg-brand-teal opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="py-20 md:py-[120px] border-t border-white/5">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4 block">Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What changes after we're involved</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Strategic clarity", desc: "Clear technical direction with documented architecture decisions and prioritised roadmaps." },
            { title: "Team acceleration", desc: "Your existing team levels up through embedded mentorship and knowledge transfer." },
            { title: "Reduced risk", desc: "Senior oversight on critical decisions without the overhead of a full-time executive hire." },
          ].map((outcome, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-xl border-t-2 border-brand-teal"
              data-testid={`card-outcome-${i}`}
            >
              <h3 className="text-lg font-bold text-white mb-3">{outcome.title}</h3>
              <p className="text-muted-foreground leading-[1.8] text-sm">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="py-20 md:py-[120px] bg-section-soft border-t border-white/5">
        <div
          className="glass-card rounded-2xl p-10 md:p-14 max-w-3xl border-l-4 border-brand-teal"
          data-testid="card-case-study"
        >
          <span className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-6 block">Case study</span>
          <blockquote className="text-lg md:text-xl text-white/90 leading-[1.8] mb-8">
            "Having Muloo as our fractional CTO gave us the technical leadership we needed during a critical growth phase. They didn't just advise — they embedded and shipped alongside our team."
          </blockquote>
          <div>
            <p className="text-white font-bold">Michael Torres</p>
            <p className="text-muted-foreground text-sm">CEO — Elevate Digital</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-[120px] text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-advisory-cta">
            Need senior capability without the commitment?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-[1.8]">
            Let's discuss how embedded leadership can accelerate your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-teal text-white hover:bg-brand-teal/90 font-bold px-10 h-14 rounded-lg" data-testid="button-advisory-cta">
              Discuss leadership support <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

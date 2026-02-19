import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Linkedin, Shield, TrendingUp, Settings, FileSearch } from "lucide-react";
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
  coo: <Settings className="h-6 w-6" />,
  ba: <FileSearch className="h-6 w-6" />,
};

export function Advisory() {
  return (
    <div className="flex flex-col">
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-sm" data-testid="badge-advisory">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2" />
              Embedded Leadership
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05] text-white" data-testid="text-advisory-headline">
              {advisoryContent.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              {advisoryContent.hero.subtext}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/5" />

      <Section className="py-24 bg-section-soft">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">What we offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">Advisory Services</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advisoryContent.services.map((service) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: `0 0 0 0 transparent` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px -10px ${service.accent}30`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 transparent`; }}
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
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:transition-colors" style={{ ['--hover-color' as string]: service.accent }}>
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                  <div
                    className="w-10 h-0.5 mt-6 opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: service.accent }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="w-full h-px bg-white/5" />

      <Section className="py-24">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">The people behind the advisory.</h3>
          <p className="text-muted-foreground mt-4 max-w-xl">Senior practitioners who embed directly into your business. Not consultants who disappear after a slide deck.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {advisoryContent.leaders.map((leader, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-start group" data-testid={`card-leader-${i}`}>
              <div className="mb-6 relative">
                <div
                  className="h-28 w-28 rounded-full p-[3px] transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${leader.accent}40, transparent 60%)`,
                  }}
                >
                  <div
                    className="h-full w-full rounded-full overflow-hidden group-hover:shadow-lg transition-shadow duration-300"
                    style={{ boxShadow: `0 0 0 0 transparent` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px -5px ${leader.accent}40`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 transparent`; }}
                  >
                    <Avatar className="h-full w-full">
                      <AvatarImage src={getImage(leader.image)} alt={leader.name} className="object-cover" />
                      <AvatarFallback className="text-lg font-bold">{leader.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">{leader.name}</h4>
              <p className="text-sm font-mono mb-4" style={{ color: leader.accent }}>{leader.title}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {leader.roles.map((role, ri) => (
                  <span
                    key={ri}
                    className="text-xs px-2.5 py-1 rounded-md border font-mono"
                    style={{
                      borderColor: `${leader.accent}25`,
                      backgroundColor: `${leader.accent}08`,
                      color: `${leader.accent}cc`,
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{leader.bio}</p>

              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="mt-auto" data-testid={`link-linkedin-${i}`}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white hover:bg-white/5 px-0">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Button>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <div className="w-full h-px bg-white/5" />

      <Section className="py-32 text-center bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" data-testid="text-advisory-cta">Need senior capability without the full-time commitment?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how embedded leadership can accelerate your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-14 rounded-lg glow-orange-sm" data-testid="button-advisory-cta">
              Start a Conversation <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

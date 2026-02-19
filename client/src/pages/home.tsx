import { Section } from "@/components/ui/section";
import { homeContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Database, Cpu, Bot, Layout, ChevronRight, Cloud, Server, Workflow, Shield, AlertTriangle, X } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useCallback } from "react";
import { useLocation as useWouterLocation } from "wouter";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

const rotatingPhrases = [
  "Technical Partner for HubSpot",
  "Systems & Integration Specialists",
  "AI Workflow & Agent Builders",
  "Embedded CTO & Sales Engineering",
];

const streamColors: Record<string, { accent: string; border: string; bg: string; text: string; glow: string }> = {
  hub: { accent: "bg-stream-hub", border: "border-stream-hub/30", bg: "bg-stream-hub/10", text: "text-stream-hub", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(244,118,33,0.35)]" },
  build: { accent: "bg-stream-build", border: "border-stream-build/30", bg: "bg-stream-build/10", text: "text-stream-build", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(21,93,252,0.35)]" },
  ai: { accent: "bg-stream-ai", border: "border-stream-ai/30", bg: "bg-stream-ai/10", text: "text-stream-ai", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(193,64,255,0.35)]" },
  product: { accent: "bg-stream-product", border: "border-stream-product/30", bg: "bg-stream-product/10", text: "text-stream-product", glow: "group-hover:shadow-[0_0_40px_-8px_rgba(89,191,150,0.35)]" },
};

const painPoints = [
  "HubSpot feels messy and unreliable.",
  "Systems don't talk to each other.",
  "Reporting lacks clarity.",
  "AI feels exciting but unclear how to apply.",
];

const pillarIcons: Record<string, React.ReactNode> = {
  hub: <Database className="h-6 w-6" />,
  build: <Cpu className="h-6 w-6" />,
  ai: <Bot className="h-6 w-6" />,
  product: <Layout className="h-6 w-6" />,
};

const ecosystemLogos = {
  "Engineering Stack": ["Azure", "Google Cloud", "Microsoft", "SQL Server", "SAP"],
  "CRM & Sales Tools": ["HubSpot", "Apollo", "LinkedIn", "HubLink"],
  "Data & Infrastructure": ["Snowflake", "Azure Data", "BigQuery"],
};

const processSteps = [
  { step: "01", title: "Discover", desc: "We map your existing systems, data flows, and pain points." },
  { step: "02", title: "Architect", desc: "We design the technical blueprint with clear deliverables." },
  { step: "03", title: "Ship", desc: "We build iteratively with weekly demos and sprint reviews." },
  { step: "04", title: "Support", desc: "We maintain, monitor, and evolve your systems over time." },
];

function RotatingBadge() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setIsVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-sm font-medium text-brand-teal mb-8 backdrop-blur-sm h-9 min-w-[280px]" data-testid="badge-hero">
      <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2 animate-pulse shrink-0" />
      <span
        className="transition-all duration-400"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-6px)",
        }}
      >
        {rotatingPhrases[index]}
      </span>
    </div>
  );
}

function SystemDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto hidden lg:block" data-testid="hero-system-diagram">
      <div className="absolute inset-0 bg-brand-teal/5 blur-3xl rounded-full" />
      <div className="relative space-y-4">
        {[
          { icon: <Cloud className="h-5 w-5" />, label: "CRM & Data", sub: "HubSpot · Salesforce", color: "#F47621" },
          { icon: <Server className="h-5 w-5" />, label: "Middleware", sub: "APIs · Sync · Auth", color: "#155DFC" },
          { icon: <Workflow className="h-5 w-5" />, label: "AI Agents", sub: "Codex · Automation", color: "#C140FF" },
          { icon: <Shield className="h-5 w-5" />, label: "Products", sub: "SaaS · Portals", color: "#59BF96" },
        ].map((node, i) => (
          <div key={i} className="relative">
            {i > 0 && (
              <div className="absolute -top-4 left-8 w-px h-4 bg-white/10" />
            )}
            <div
              className="glass-card rounded-xl p-4 flex items-center gap-4 hover:-translate-x-1 transition-transform duration-300"
              style={{ borderColor: `${node.color}15` }}
            >
              <div
                className="p-2.5 rounded-lg shrink-0"
                style={{ backgroundColor: `${node.color}12`, color: node.color }}
              >
                {node.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{node.label}</div>
                <div className="text-xs text-muted-foreground font-mono">{node.sub}</div>
              </div>
              <div
                className="ml-auto h-1.5 w-1.5 rounded-full opacity-60"
                style={{ backgroundColor: node.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Home() {
  const [, navigate] = useWouterLocation();
  return (
    <div className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative pt-32 pb-24 md:pt-44 md:pb-28 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-16">
            <div className="max-w-3xl flex-1">
              <RotatingBadge />
              
              <h1 className="text-4xl md:text-[3.5rem] lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
                {homeContent.hero.headline.split("revenue.")[0]}
                <span className="text-gradient-teal">revenue.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
                {homeContent.hero.subhead}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-8 h-14 rounded-lg glow-orange-sm hover:-translate-y-0.5 transition-all" data-testid="button-hero-cta">
                    {homeContent.hero.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 px-8 h-14 rounded-lg" data-testid="button-hero-secondary">
                    {homeContent.hero.secondaryCta}
                  </Button>
                </Link>
              </div>

              <p className="text-sm font-mono text-muted-foreground/50 tracking-wider">
                Cape Town based. Globally delivered.
              </p>
            </div>

            <SystemDiagram />
          </div>
        </div>
      </div>

      {/* ── PAIN POINTS ── */}
      <Section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">If any of this sounds familiar…</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {painPoints.map((point, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-white/15 transition-colors" data-testid={`card-pain-${i}`}>
                <AlertTriangle className="h-5 w-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                <p className="text-[15px] text-white/80 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICES OVERVIEW ── */}
      <Section className="py-28 bg-section-soft border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">Four streams. One technical partner.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.pillars.map((pillar) => {
            const colors = streamColors[pillar.id];
            return (
              <a
                key={pillar.id}
                href={pillar.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(pillar.href);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                <div className={`group glass-card h-full p-8 rounded-2xl flex flex-col cursor-pointer hover:-translate-y-1 transition-all duration-300 ${colors.glow}`} data-testid={`card-service-${pillar.id}`}>
                  <div className={`mb-6 p-3 rounded-xl w-fit ${colors.bg} ${colors.text}`}>
                    {pillarIcons[pillar.id]}
                  </div>

                  <h4 className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{pillar.subtitle}</h4>
                  <h3 className="text-2xl font-bold mb-3 text-white transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{pillar.desc}</p>

                  <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {pillar.features.slice(0, 3).map(feat => (
                      <li key={feat} className="flex items-center text-xs text-white/50">
                        <span className={`h-1.5 w-1.5 rounded-full mr-2 ${colors.accent}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center text-sm font-semibold ${colors.text} mt-auto`}>
                    Explore <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Section>

      {/* ── TRUSTED ECOSYSTEM ── */}
      <Section className="py-28 border-t border-white/5">
        <div className="text-center mb-6">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">Trusted Ecosystem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies we integrate with</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">We work with the platforms your business already depends on.</p>
        </div>

        <div className="mb-4" />

        {/* ── Certifications ── */}
        <div className="mb-16">
          <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8 text-center">Certified & Accredited</h4>
          <div className="flex justify-center gap-16 md:gap-24 items-center flex-wrap">
            <div className="group relative">
              <div className="absolute inset-0 bg-stream-hub/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-28 md:h-32 w-auto relative z-10" data-testid="img-hubspot-badge" />
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-teal/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src={googleBadge} alt="Google Partner" className="h-11 md:h-14 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 relative z-10" data-testid="img-google-badge" />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-14" />

        <div className="grid md:grid-cols-3 gap-14 max-w-4xl mx-auto">
          {Object.entries(ecosystemLogos).map(([category, logos]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6 border-b border-white/5 pb-3">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {logos.map(logo => (
                  <a
                    key={logo}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs font-mono text-muted-foreground hover:text-brand-teal hover:border-brand-teal/20 hover:shadow-[0_0_12px_-4px_rgba(0,196,204,0.25)] transition-all duration-300"
                    data-testid={`logo-${logo.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {logo}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── LEAD MAGNET ── */}
      <LeadMagnetSection />

      {/* ── HOW WE WORK ── */}
      <Section className="py-28 bg-section-soft border-t border-white/5">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">How we work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Structured. Iterative. Transparent.</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="relative group" data-testid={`step-${step.title.toLowerCase()}`}>
              <div className="text-6xl font-black text-white/[0.04] mb-4 group-hover:text-brand-teal/10 transition-colors select-none">{step.step}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              <div className="w-10 h-0.5 bg-brand-teal/30 mt-6 group-hover:w-full group-hover:bg-brand-teal transition-all duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section className="py-28 text-center bg-hero-gradient border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-fade pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to build <span className="text-gradient-teal">properly</span>?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's talk about your systems, your data, and what needs to change.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-10 h-14 rounded-lg glow-orange-sm" data-testid="button-cta-final">
              Start a Conversation <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

function LeadMagnetSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 2500);
  }, []);

  return (
    <>
      <Section className="py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,196,204,0.04), transparent)" }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">Free Resource</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Free HubSpot & Systems Health Check</h3>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Get the 10-point checklist we use to stabilise CRM, integrations, and reporting foundations.
          </p>
          <Button
            size="lg"
            className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14 rounded-lg glow-teal-sm"
            onClick={() => setIsOpen(true)}
            data-testid="button-lead-magnet"
          >
            Download the checklist <ArrowRight className="ml-2" />
          </Button>
        </div>
      </Section>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" data-testid="modal-lead-magnet">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative bg-[#0A0F1C] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">Get the checklist</h3>
            <p className="text-sm text-muted-foreground mb-6">Enter your email and we'll send the 10-point health check straight to your inbox.</p>
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-brand-teal text-lg font-semibold mb-2">Thanks!</div>
                <p className="text-sm text-muted-foreground">Check your inbox shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-white/5 border-white/10 focus:border-brand-teal"
                  data-testid="input-lead-email"
                />
                <Button type="submit" className="w-full h-12 bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold" data-testid="button-lead-submit">
                  Send me the checklist
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

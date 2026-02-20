import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const coreColors = [
  { name: "Navy", hex: "#050A30", className: "bg-brand-navy border border-white/10", textDark: false },
  { name: "Teal", hex: "#00C4CC", className: "bg-brand-teal", textDark: true },
  { name: "White", hex: "#FFFFFF", className: "bg-white", textDark: true },
  { name: "Soft Teal Tint", hex: "#E6FBFD", className: "bg-soft-teal", textDark: true },
];

const streamColors = [
  { name: "Muloo Hub", label: "Orange", hex: "#F47621", className: "bg-stream-hub" },
  { name: "Muloo Build", label: "Blue", hex: "#155DFC", className: "bg-stream-build" },
  { name: "Muloo AI", label: "Purple", hex: "#C140FF", className: "bg-stream-ai" },
  { name: "Muloo Product", label: "Green", hex: "#59BF96", className: "bg-stream-product" },
];

const glowEffects = [
  { name: "glow-teal-sm", className: "glow-teal-sm", color: "border-brand-teal" },
  { name: "glow-orange-sm", className: "glow-orange-sm", color: "border-stream-hub" },
  { name: "glow-blue-sm", className: "glow-blue-sm", color: "border-stream-build" },
  { name: "glow-purple-sm", className: "glow-purple-sm", color: "border-stream-ai" },
  { name: "glow-green-sm", className: "glow-green-sm", color: "border-stream-product" },
];

export function Styleguide() {
  return (
    <div className="flex flex-col" data-testid="styleguide-page">
      {/* Hero */}
      <Section className="bg-hero-gradient pt-32" data-testid="styleguide-hero">
        <Badge variant="teal" className="mb-4" data-testid="badge-design-system">Design System</Badge>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4" data-testid="text-styleguide-title">Muloo Styleguide</h1>
        <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-styleguide-subtitle">
          A comprehensive reference for the Muloo design system — color tokens, typography, components, and utility classes.
        </p>
      </Section>

      {/* Color Tokens */}
      <Section className="bg-section-soft" data-testid="section-color-tokens">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-colors">Color Tokens</h2>
        <p className="text-muted-foreground mb-8">Core Brand Foundation</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="grid-core-colors">
          {coreColors.map((c) => (
            <div key={c.hex} className="space-y-2" data-testid={`swatch-${c.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className={`h-24 w-full rounded-lg ${c.className}`} />
              <p className="font-semibold text-sm">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stream Accent Colors */}
      <Section data-testid="section-stream-colors">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-streams">Stream Accent Colors</h2>
        <p className="text-muted-foreground mb-8">Each Muloo stream has its own accent color</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-testid="grid-stream-colors">
          {streamColors.map((c) => (
            <div key={c.hex} className="space-y-2" data-testid={`swatch-stream-${c.label.toLowerCase()}`}>
              <div className="h-24 w-full rounded-lg" style={{ backgroundColor: c.hex }} />
              <p className="font-semibold text-sm">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.label} · {c.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gradient Tokens */}
      <Section className="bg-section-soft" data-testid="section-gradients">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-gradients">Gradient Tokens</h2>
        <p className="text-muted-foreground mb-8">Background gradients and text gradients</p>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">.bg-hero-gradient</p>
            <div className="bg-hero-gradient h-32 rounded-lg border border-white/10" data-testid="gradient-hero" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "glow-hub", className: "glow-hub" },
              { name: "glow-build", className: "glow-build" },
              { name: "glow-ai", className: "glow-ai" },
              { name: "glow-product", className: "glow-product" },
            ].map((g) => (
              <div key={g.name} data-testid={`gradient-${g.name}`}>
                <div className={`${g.className} h-24 rounded-lg border border-white/10`} />
                <p className="font-mono text-xs text-muted-foreground mt-2">.{g.name}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">.bg-section-soft</p>
            <div className="bg-section-soft h-24 rounded-lg border border-white/10" data-testid="gradient-section-soft" />
          </div>

          <div className="space-y-4">
            <p className="font-mono text-sm text-muted-foreground">Text Gradients</p>
            <div className="flex flex-wrap gap-8 items-center">
              <div data-testid="gradient-text-teal">
                <span className="text-gradient-teal text-3xl font-bold">text-gradient-teal</span>
              </div>
              <div data-testid="gradient-text-orange">
                <span className="text-gradient-orange text-3xl font-bold">text-gradient-orange</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section data-testid="section-typography">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-typography">Typography</h2>
        <p className="text-muted-foreground mb-8">Montserrat for headings &amp; body · JetBrains Mono for code</p>

        <div className="space-y-6">
          <div data-testid="typography-h1">
            <h1 className="text-6xl font-extrabold">Heading 1 — Extra Bold</h1>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans · text-6xl · font-extrabold</p>
          </div>
          <div data-testid="typography-h2">
            <h2 className="text-5xl font-bold">Heading 2 — Bold</h2>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans · text-5xl · font-bold</p>
          </div>
          <div data-testid="typography-h3">
            <h3 className="text-3xl font-semibold">Heading 3 — SemiBold</h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans · text-3xl · font-semibold</p>
          </div>
          <div data-testid="typography-subtitle">
            <p className="text-xl font-light">Subtitle — Extra Light</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans · text-xl · font-light</p>
          </div>
          <div data-testid="typography-body">
            <p className="leading-relaxed max-w-2xl">
              Body text (Regular). Muloo empowers organisations with scalable digital transformation solutions —
              from HubSpot consulting to custom AI-driven workflows. Clear, accessible copy that pairs with
              Montserrat's clean geometry.
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-sans · text-base · font-normal</p>
          </div>
          <div data-testid="typography-mono">
            <p className="font-mono text-sm">const stream = "JetBrains Mono for inline code";</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">font-mono · text-sm</p>
          </div>
        </div>
      </Section>

      {/* Button Styles */}
      <Section className="bg-section-soft" data-testid="section-buttons">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-buttons">Button Styles</h2>
        <p className="text-muted-foreground mb-8">Primary, CTA, outline, ghost, and stream-colored variants</p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-semibold" data-testid="button-primary">
              Primary (Teal)
            </Button>
            <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-semibold" data-testid="button-orange-cta">
              Orange CTA
            </Button>
            <Button size="lg" variant="outline" data-testid="button-outline">
              Outline
            </Button>
            <Button size="lg" variant="ghost" data-testid="button-ghost">
              Ghost
            </Button>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground mb-3">Stream-colored buttons</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#F47621" }} data-testid="button-stream-hub">
                Hub
              </Button>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#155DFC" }} data-testid="button-stream-build">
                Build
              </Button>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#C140FF" }} data-testid="button-stream-ai">
                AI
              </Button>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#59BF96" }} data-testid="button-stream-product">
                Product
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Card Styles */}
      <Section data-testid="section-cards">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-cards">Card Styles</h2>
        <p className="text-muted-foreground mb-8">Glass cards with stream accent hover colors</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streamColors.map((stream) => (
            <Card
              key={stream.hex}
              className="glass-card rounded-xl hover:border-white/20 transition-all duration-300 group"
              style={{ ["--hover-color" as string]: stream.hex }}
              data-testid={`card-stream-${stream.label.toLowerCase()}`}
            >
              <CardHeader>
                <div className="h-1 w-12 rounded-full mb-2" style={{ backgroundColor: stream.hex }} />
                <CardTitle className="text-lg">{stream.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Glass card with <span className="font-mono" style={{ color: stream.hex }}>{stream.label.toLowerCase()}</span> accent.
                  Hover to see the glow effect.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Glow Examples */}
      <Section className="bg-section-soft" data-testid="section-glows">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-glows">Glow Effects</h2>
        <p className="text-muted-foreground mb-8">Small box-shadow glows for accent highlights</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {glowEffects.map((g) => (
            <div
              key={g.name}
              className={`${g.className} rounded-xl p-6 border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center gap-2`}
              data-testid={`glow-${g.name}`}
            >
              <div className={`w-4 h-4 rounded-full ${g.color} border-2`} />
              <p className="font-mono text-xs text-muted-foreground text-center">.{g.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Code Block */}
      <Section data-testid="section-code-block">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-code">Code Block</h2>
        <p className="text-muted-foreground mb-8">The <code className="font-mono text-brand-teal">.code-block</code> utility class</p>

        <div className="max-w-2xl">
          <pre className="code-block" data-testid="code-block-example">
            {`// Muloo Design System — Tailwind config tokens
const colors = {
  brand: {
    navy:   "#050A30",
    teal:   "#00C4CC",
    orange: "#F47621",
  },
  stream: {
    hub:     "#F47621",
    build:   "#155DFC",
    ai:      "#C140FF",
    product: "#59BF96",
  },
  soft: {
    teal: "#E6FBFD",
  },
};`}
          </pre>
        </div>
      </Section>

      {/* Forms */}
      <Section className="bg-section-soft" data-testid="section-forms">
        <h2 className="text-3xl font-bold mb-2" data-testid="text-section-forms">Form Inputs</h2>
        <p className="text-muted-foreground mb-8">Input states and badges</p>

        <div className="max-w-md space-y-4 mb-8">
          <Input placeholder="Default input" data-testid="input-default" />
          <Input placeholder="Focused / active input" className="border-brand-teal" data-testid="input-active" />
          <Input placeholder="Disabled input" disabled data-testid="input-disabled" />
        </div>

        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">Badges</p>
          <div className="flex flex-wrap gap-3">
            <Badge data-testid="badge-default">Default</Badge>
            <Badge variant="teal" data-testid="badge-teal">Teal</Badge>
            <Badge variant="secondary" data-testid="badge-secondary">Secondary</Badge>
            <Badge variant="outline" data-testid="badge-outline">Outline</Badge>
            <Badge variant="navy" data-testid="badge-navy">Navy</Badge>
          </div>
        </div>
      </Section>
    </div>
  );
}

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Styleguide() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32">
        <h1 className="text-5xl font-extrabold mb-12">Styleguide</h1>
        
        <div className="space-y-20">
          {/* Colors */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 w-full bg-brand-navy rounded-lg border border-white/10"></div>
                <p className="font-mono text-sm">Navy #050A30</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 w-full bg-brand-teal rounded-lg"></div>
                <p className="font-mono text-sm">Teal #00C4CC</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 w-full bg-brand-orange rounded-lg"></div>
                <p className="font-mono text-sm">Orange #F47621</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 w-full bg-white rounded-lg"></div>
                <p className="font-mono text-sm">White #FFFFFF</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Typography (Montserrat)</h2>
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl font-extrabold">Heading 1 (Extra Bold)</h1>
                <p className="text-muted-foreground font-mono">text-6xl font-extrabold</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold">Heading 2 (Bold)</h2>
                <p className="text-muted-foreground font-mono">text-5xl font-bold</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Heading 3 (SemiBold)</h3>
                <p className="text-muted-foreground font-mono">text-3xl font-semibold</p>
              </div>
              <div>
                <p className="text-xl font-light">Subtitle Text (Extra Light)</p>
                <p className="text-muted-foreground font-mono">text-xl font-light</p>
              </div>
              <div>
                <p className="leading-relaxed max-w-2xl">
                  Body text (Regular). Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-muted-foreground font-mono mt-2">text-base font-normal</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90">Primary Button</Button>
              <Button size="lg" variant="outline">Secondary Button</Button>
              <Button size="lg" variant="ghost">Ghost Button</Button>
              <Button size="lg" variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Inputs */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Forms</h2>
            <div className="max-w-md space-y-4">
              <Input placeholder="Default Input" />
              <Input placeholder="Active Input" className="border-brand-teal" />
              <Input placeholder="Disabled Input" disabled />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}

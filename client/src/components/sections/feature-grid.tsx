import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";

interface FeatureGridProps {
  features: string[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <Section className="py-12 border-y border-white/5 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-brand-teal shrink-0 mt-1" />
              <p className="text-lg font-medium leading-tight">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

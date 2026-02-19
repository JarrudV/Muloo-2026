import { Section } from "@/components/ui/section";

interface PartnersProps {
  headline: string;
  body: string;
  partners: string[];
}

export function Partners({ headline, body, partners }: PartnersProps) {
  return (
    <Section className="bg-brand-navy/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{headline}</h2>
            <p className="text-muted-foreground leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-start md:justify-end">
            {partners.map((partner) => (
              <div key={partner} className="text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

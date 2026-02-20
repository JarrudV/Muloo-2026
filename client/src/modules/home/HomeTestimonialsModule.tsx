import { Section } from "@/components/ui/section";
import type { HomeTestimonialsModule as HomeTestimonialsModuleData } from "@/content/home";

interface HomeTestimonialsModuleProps {
  module: HomeTestimonialsModuleData;
}

export function HomeTestimonialsModule({ module }: HomeTestimonialsModuleProps) {
  return (
    <Section className="py-20 md:py-[120px] border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">
          {module.sectionLabel}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">{module.sectionHeadline}</h3>
      </div>

      <div className="space-y-14 max-w-4xl">
        {module.testimonials.map((testimonial, i) => (
          <div key={i} className="grid md:grid-cols-[80px_1fr] gap-8 md:gap-12" data-testid={`testimonial-${i}`}>
            <div className="hidden md:block">
              <svg viewBox="0 0 40 40" className="w-14 h-14 text-brand-teal/15" fill="currentColor">
                <path d="M0 25.6c0-6.4 4.48-12.16 11.2-16L13.12 12.8C9.6 15.36 7.68 18.56 7.04 22.4H11.2c2.24 0 4 1.76 4 4v9.6c0 2.24-1.76 4-4 4H4c-2.24 0-4-1.76-4-4V25.6zm21.6 0c0-6.4 4.48-12.16 11.2-16l1.92 3.2c-3.52 2.56-5.44 5.76-6.08 9.6h4.16c2.24 0 4 1.76 4 4v9.6c0 2.24-1.76 4-4 4h-7.2c-2.24 0-4-1.76-4-4V25.6z" />
              </svg>
            </div>
            <div>
              <p className="text-lg md:text-xl text-white/80 leading-[1.8] mb-8 font-light">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

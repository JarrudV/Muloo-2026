import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <div className="flex flex-col">
      <Section className="pt-8 pb-8 md:pt-12 md:pb-10 text-center bg-hero-gradient border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Get in touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to streamline your systems? Book a call or send us a message below.
        </p>
      </Section>

      <Section className="pt-8 pb-24 md:pt-10 md:pb-28">
        <ContactForm />
      </Section>
    </div>
  );
}

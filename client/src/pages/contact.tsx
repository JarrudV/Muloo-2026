import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Get in touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to streamline your systems? Book a call or send us a message below.
        </p>
      </Section>

      <Section className="pb-32">
        <ContactForm />
      </Section>
    </div>
  );
}

import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Contact Muloo | Discuss Your Digital Initiative"
        description="Ready to build or optimize? Get in touch with our team to discuss your next project, strategic initiative, or technical challenge."
      />
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

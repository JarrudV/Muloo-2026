import { useCallback, useState, type FormEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { HomeLeadMagnetModule as HomeLeadMagnetModuleData } from "@/content/home";

interface HomeLeadMagnetModuleProps {
  module: HomeLeadMagnetModuleData;
}

export function HomeLeadMagnetModule({ module }: HomeLeadMagnetModuleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: FormEvent) => {
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
      <Section className="py-20 md:py-[120px] border-t border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,196,204,0.04), transparent)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-brand-teal uppercase tracking-widest mb-4">
            Free Resource
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{module.headline}</h3>
          <p className="text-muted-foreground mb-10 leading-[1.8]">{module.body}</p>
          <Button
            size="lg"
            className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14 rounded-lg glow-teal-sm"
            onClick={() => setIsOpen(true)}
            data-testid="button-lead-magnet"
          >
            {module.triggerLabel} <ArrowRight className="ml-2" />
          </Button>
        </div>
      </Section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          data-testid="modal-lead-magnet"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-[#0A0F1C] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">{module.modalHeadline}</h3>
            <p className="text-sm text-muted-foreground mb-6">{module.modalBody}</p>
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-brand-teal text-lg font-semibold mb-2">
                  {module.successTitle}
                </div>
                <p className="text-sm text-muted-foreground">{module.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder={module.modalInputPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-white/5 border-white/10 focus:border-brand-teal"
                  data-testid="input-lead-email"
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold"
                  data-testid="button-lead-submit"
                >
                  {module.modalSubmitLabel}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

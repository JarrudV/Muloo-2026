import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}

export function Section({ children, className, id, container = true }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-[120px] relative overflow-hidden", className)}>
      {container ? (
        <div className="container mx-auto px-6 relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

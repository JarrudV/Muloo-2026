import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MulooAssist } from "./MulooAssist";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-brand-teal selection:text-brand-navy">
      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
      <MulooAssist />
    </div>
  );
}

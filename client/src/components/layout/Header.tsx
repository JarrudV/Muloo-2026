import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import mulooLogo from "@assets/logo.png";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
        isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
            <img src={mulooLogo} alt="Muloo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.subItems) {
              return (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-brand-orange transition-colors outline-none cursor-pointer">
                    {link.name} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-xl border-border p-2">
                    {link.subItems.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild className="cursor-pointer focus:bg-white/5">
                        <Link href={sub.href} className="flex flex-col items-start gap-1 p-3 w-full group">
                          <span className="font-semibold text-brand-teal group-hover:text-brand-orange transition-colors">{sub.name}</span>
                          <span className="text-xs text-muted-foreground">{sub.desc}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link key={link.name} href={link.href} className={cn(
                  "text-sm font-medium hover:text-brand-orange transition-colors cursor-pointer",
                  location === link.href ? "text-brand-orange" : ""
                )}>
                  {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="outline" className="border-brand-teal/50 text-brand-teal hover:bg-brand-teal hover:text-background cursor-pointer hover:border-brand-teal">
              Book a call
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-border w-[85vw] p-6 overflow-y-auto">
             <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  {link.subItems ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-lg font-bold text-muted-foreground/50 border-b border-white/10 pb-2">{link.name}</span>
                      {link.subItems.map(sub => (
                        <Link key={sub.name} href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium pl-4 border-l-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-all">
                            {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold hover:text-brand-orange transition-colors">
                        {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-brand-teal text-background font-bold hover:bg-brand-teal/90 mt-4">
                  Book a call
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

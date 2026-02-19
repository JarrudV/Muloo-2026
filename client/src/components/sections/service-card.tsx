import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Code2, Rocket } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  id: string;
  title: string;
  blurb: string;
  cta: string;
  link: string;
}

const icons = {
  hub: Rocket,
  build: Code2,
  product: Box
};

export function ServiceCard({ id, title, blurb, cta, link }: ServiceCardProps) {
  const Icon = icons[id as keyof typeof icons] || Box;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-brand-teal/50 transition-all duration-300 group overflow-hidden">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors duration-300">
          <Icon className="h-6 w-6 text-brand-teal group-hover:text-brand-navy transition-colors" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed h-24">
          {blurb}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={link}>
          <Button variant="link" className="p-0 text-brand-teal font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
            {cta} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

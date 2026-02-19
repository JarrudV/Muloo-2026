import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Package,
  Laptop,
  Wrench,
  Layers,
  Rocket,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { serviceProductContent } from "@/lib/content";

const streamGreen = "#59BF96";

const productIcons = [Package, Laptop, Wrench];

const statusConfig: Record<string, { label: string; dotColor: string }> = {
  Live: { label: "Live", dotColor: "#22c55e" },
  Beta: { label: "Beta", dotColor: "#facc15" },
  Internal: { label: "Internal", dotColor: "#94a3b8" },
};

export function ServicesProduct() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 border-[#59BF96]/30 text-[#59BF96] bg-[#59BF96]/5"
            data-testid="badge-product"
          >
            Muloo Product
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
            {serviceProductContent.h1}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-[#59BF96] pl-6">
            {serviceProductContent.intro}
          </p>
        </div>
      </Section>

      {/* Product Capability Strip */}
      <Section className="py-16 bg-section-soft">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Layers, label: "Product Strategy" },
            { icon: Rocket, label: "MVP Development" },
            { icon: BarChart3, label: "Market Fit" },
            { icon: CheckCircle2, label: "Launch & Scale" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 py-6 px-4 glass-card rounded-xl"
              data-testid={`capability-${i}`}
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `rgba(89, 191, 150, 0.1)` }}
              >
                <item.icon className="h-5 w-5" style={{ color: streamGreen }} />
              </div>
              <span className="text-sm font-medium text-muted-foreground text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Cards */}
      <Section className="py-24 glow-product">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Our Products
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Commercial SaaS solutions and internal tools built to solve specific
            operational gaps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceProductContent.products.map((product, i) => {
            const IconComponent = productIcons[i] || Package;
            const status = statusConfig[product.status] || statusConfig.Internal;
            return (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col items-start group relative overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(89,191,150,0.3)] glow-green-sm"
                data-testid={`card-product-${i}`}
              >
                <div className="absolute top-0 right-0 p-3 opacity-5">
                  <Layers className="h-24 w-24 text-[#59BF96]" />
                </div>

                <div className="flex justify-between w-full mb-6">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `rgba(89, 191, 150, 0.1)` }}
                  >
                    <IconComponent
                      className="h-6 w-6"
                      style={{ color: streamGreen }}
                    />
                  </div>
                  <div className="flex items-center gap-2 h-fit">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: status.dotColor }}
                    />
                    <span className="text-xs font-mono text-muted-foreground">
                      {status.label}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#59BF96] transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {product.desc}
                </p>

                <div
                  className="w-12 h-1 mb-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: streamGreen }}
                />

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-white hover:bg-[#59BF96]/10 hover:text-[#59BF96] hover:border-[#59BF96]/30"
                    data-testid={`button-product-details-${i}`}
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Built for scale.
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          See how our pre-built solutions can accelerate your operations.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="font-bold px-10 h-14 text-white"
            style={{ backgroundColor: streamGreen }}
            data-testid="button-request-demo"
          >
            Request a demo <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

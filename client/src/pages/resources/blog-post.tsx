import { Section } from "@/components/ui/section";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";

export function BlogPost() {
    const [match, params] = useRoute("/blog/:id");
    const id = params?.id;

    return (
        <div className="flex flex-col">
            <SEO
                title="Blog Post | Muloo Insights"
                description="Deep dive into technical and operational excellence."
            />
            <Section className="pt-32 pb-12 max-w-3xl mx-auto">
                <Link href="/blog">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-brand-teal">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
                    </Button>
                </Link>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 font-mono">
                    <span>Oct 12, 2025</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Why your HubSpot data is messy (and how to fix it)</h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-muted-foreground">
                        Data hygiene is the unsexy hero of revenue operations. Without clean data, your fancy automation is just scaling chaos.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3>The problem with manual entry</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3>Automating the clean up</h3>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </Section>
        </div>
    );
}

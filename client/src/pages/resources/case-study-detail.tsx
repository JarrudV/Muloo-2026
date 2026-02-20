import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";

export function CaseStudyDetail() {
    const [match, params] = useRoute("/case-studies/:id");
    const id = params?.id;

    return (
        <div className="flex flex-col">
            <Section className="pt-32 pb-12">
                <Link href="/case-studies">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-brand-teal">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
                    </Button>
                </Link>
                <div className="text-brand-teal font-mono mb-4">CASE STUDY #{id}</div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Migrating 50k contacts to HubSpot</h1>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    How we helped a leading FinTech company consolidate 5 different CRM systems into a single source of truth on HubSpot.
                </p>
            </Section>

            <Section className="bg-white/5 py-20">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <strong className="text-white block mb-2">The Challenge</strong>
                            The client had data scattered across Salesforce, Pipedrive, and Excel sheets. Duplicates were rampant, and attribution was impossible.
                        </p>
                        <p>
                            <strong className="text-white block mb-2">The Solution</strong>
                            We architected a new HubSpot data model, built a custom migration script using the API, and deduplicated records based on email and company domains.
                        </p>
                        <p>
                            <strong className="text-white block mb-2">The Result</strong>
                            A clean, single view of the customer. Marketing can now run targeted campaigns, and Sales has full visibility into engagement history.
                        </p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border border-white/10 h-fit">
                        <h3 className="text-xl font-bold mb-6">Key Stats</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="text-3xl font-bold text-brand-teal">50,000+</div>
                                <div className="text-sm text-muted-foreground">Records Migrated</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-brand-teal">0%</div>
                                <div className="text-sm text-muted-foreground">Data Loss</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-brand-teal">2 Weeks</div>
                                <div className="text-sm text-muted-foreground">Turnaround Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

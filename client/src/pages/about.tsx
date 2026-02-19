import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Terminal, Linkedin } from "lucide-react";
import { aboutContent } from "@/lib/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import jarrudImg from "@assets/jarrud_profile_picture_1771486552112.png";
import morneImg from "@assets/Component_25_–_1_1771486552111.png";
import paulImg from "@assets/Component_77_–_1_1771486552111.png";

// Helper to get image by name since content is static
const getImage = (imageName: string) => {
    if (imageName.includes("jarrud")) return jarrudImg;
    if (imageName.includes("Component_25")) return morneImg;
    if (imageName.includes("Component_77")) return paulImg;
    return "";
};

export function About() {
  return (
    <div className="flex flex-col">
      <Section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{aboutContent.h1}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {aboutContent.intro}
          </p>
        </div>
      </Section>

      <Section className="py-24 bg-section-soft">
         <div className="grid md:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
               <div className="space-y-8">
                  {aboutContent.philosophy.map((item, i) => (
                     <div key={i} className="pl-6 border-l-2 border-white/10 hover:border-brand-orange transition-colors">
                        <h3 className="text-xl font-bold mb-2 hover-text-orange transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bg-card border border-white/10 rounded-2xl p-8 relative overflow-hidden orange-glow">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Terminal className="w-24 h-24 text-brand-orange" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Technical & Human</h3>
               <p className="text-muted-foreground leading-relaxed mb-6">
                  We built Muloo because we saw a gap. Agencies were great at creative, but bad at systems. Developers were great at code, but bad at strategy.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                  We sit in the middle. We are engineers who understand revenue. We are consultants who write code.
               </p>
            </div>
         </div>
      </Section>

      <Section className="py-24">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground">The people setting the technical standard.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutContent.team && aboutContent.team.map((member, i) => (
                <div key={i} className="bg-card p-8 rounded-xl border border-white/10 flex flex-col items-center text-center gap-6 hover:border-brand-orange/50 transition-colors group">
                   <div className="h-32 w-32 rounded-full border-2 border-brand-teal/20 p-1 group-hover:border-brand-orange/50 transition-colors">
                       <Avatar className="h-full w-full">
                           <AvatarImage src={getImage(member.image)} alt={member.name} className="object-cover" />
                           <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                       </Avatar>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors">{member.name}</h3>
                      <div className="text-brand-teal font-mono text-sm mb-3 mt-1 h-10 flex items-center justify-center">{member.role}</div>
                      <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
                      
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                            <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                        </Button>
                      </a>
                   </div>
                </div>
            ))}
         </div>
      </Section>

      <Section className="py-32 text-center bg-white/5 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Work with us</h2>
        <Link href="/contact">
          <Button size="lg" className="bg-brand-teal text-brand-navy hover:bg-brand-teal/90 font-bold px-10 h-14">
            Get in touch <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}

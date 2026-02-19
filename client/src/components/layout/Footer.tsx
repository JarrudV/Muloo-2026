import { Link } from "wouter";
import mulooLogo from "@assets/logo.png";
import hubspotBadge from "@assets/gold-badge-color_1771487221441.png";
import googleBadge from "@assets/google-partner-logo_1771487221441.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030720] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div>
            <Link href="/" className="block mb-6 hover:opacity-90">
                <img src={mulooLogo} alt="Muloo" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based in Cape Town. <br/>
              Built for global teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white text-sm">Expertise</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/services/hub" className="hover:text-stream-hub transition-colors">Muloo Hub</Link></li>
              <li><Link href="/services/build" className="hover:text-stream-build transition-colors">Muloo Build</Link></li>
              <li><Link href="/services/ai" className="hover:text-stream-ai transition-colors">Muloo AI</Link></li>
              <li><Link href="/services/product" className="hover:text-stream-product transition-colors">Muloo Product</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/advisory" className="hover:text-brand-teal transition-colors">Advisory</Link></li>
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-teal transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-brand-teal transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-white text-sm">Connect</h4>
             <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-brand-teal transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">GitHub</a></li>
              <li><Link href="/styleguide" className="hover:text-brand-teal transition-colors">Styleguide</Link></li>
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="font-bold mb-6 text-white text-sm">Accreditations</h4>
            <div className="flex flex-col gap-5 items-start md:items-end">
              <img src={hubspotBadge} alt="HubSpot Gold Partner" className="h-14 w-auto" data-testid="footer-hubspot-badge" />
              <img src={googleBadge} alt="Google Partner" className="h-6 w-auto opacity-50 grayscale" data-testid="footer-google-badge" />
              <span className="text-[11px] text-muted-foreground/40 font-mono">More coming soon</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muloo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

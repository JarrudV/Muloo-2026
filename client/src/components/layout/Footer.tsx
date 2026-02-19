import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter block mb-6 hover:opacity-90">
                MULOO<span className="text-brand-teal">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based in Cape Town. <br/>
              Built for global teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/services/hub" className="hover:text-brand-teal transition-colors">Muloo Hub</Link></li>
              <li><Link href="/services/build" className="hover:text-brand-teal transition-colors">Muloo Build</Link></li>
              <li><Link href="/services/product" className="hover:text-brand-teal transition-colors">Muloo Product</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
              <li><Link href="/styleguide" className="hover:text-brand-teal transition-colors">Styleguide</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Connect</h4>
             <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-brand-teal transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muloo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

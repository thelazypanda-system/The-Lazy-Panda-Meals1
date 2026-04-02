import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🐼</span>
              <span className="font-bold text-foreground">Lazy Panda</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Simple, cheap, and fast meals for busy people.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Pages</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/store" className="hover:text-primary transition-colors">Store</Link>
              <Link href="/ai" className="hover:text-primary transition-colors">AI Meal Generator</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/work-with-us" className="hover:text-primary transition-colors">Work With Us</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Sponsors</h4>
            <div className="flex flex-col gap-4">
              <a href="https://askpibo.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">PIBO Consulting</div>
                <div className="text-xs text-primary font-medium">⭐ Premium Sponsor</div>
              </a>
              <div>
                <div className="text-sm font-semibold text-foreground">Borpiz Hospitality</div>
                <div className="text-xs text-muted-foreground font-medium">Featured Sponsor</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lazy Panda. Created by <span className="font-semibold text-foreground">Jacob Pizano</span>.</p>
          <p>This site may contain affiliate links. I earn a small commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  );
}

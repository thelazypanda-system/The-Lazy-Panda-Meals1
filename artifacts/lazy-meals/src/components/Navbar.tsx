import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/ai", label: "AI Meal Generator" },
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Work With Us" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐼</span>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-foreground text-base tracking-tight">Lazy Panda</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Simple Meals. Zero Stress.</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${location === l.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-5 h-9 text-sm shadow-sm">
            <a href="https://wowofijo.gumroad.com/l/lazymeals" target="_blank" rel="noopener noreferrer">Get Meal Plan</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white pt-10">
              <div className="flex flex-col gap-5">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium transition-colors ${location === l.href ? "text-primary" : "text-foreground hover:text-primary"}`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold mt-2">
                  <a href="https://wowofijo.gumroad.com/l/lazymeals" target="_blank" rel="noopener noreferrer">Get Meal Plan</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

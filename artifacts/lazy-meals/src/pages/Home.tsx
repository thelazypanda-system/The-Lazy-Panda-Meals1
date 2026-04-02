import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Utensils, ChefHat } from "lucide-react";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GUMROAD = "https://wowofijo.gumroad.com/l/lazymeals";

const Divider = () => (
  <div className="w-12 h-px bg-primary mx-auto my-6 opacity-60" />
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif" }}>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐼</span>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-foreground text-base tracking-tight">Lazy Panda</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Simple Meals. Zero Stress.</span>
            </div>
          </div>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-9 text-sm shadow-sm" data-testid="nav-cta">
            <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col">

        {/* HERO */}
        <section className="py-32 md:py-44 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mb-8">怠食 — Lazy Meal</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Stop Thinking About<br />What to Cook
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-light">
                Lazy Panda gives you simple, ready-to-use meals with zero stress.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-base h-13 px-10 shadow-md" data-testid="hero-cta">
                <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Instant Access ($12)</a>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="py-28 bg-muted/40 text-center">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-4">The Product</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Lazy Panda System</h2>
              <Divider />
              <p className="text-muted-foreground mb-10 font-light">Normally $20 — get it today for $12</p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <ul className="inline-flex flex-col gap-5 text-left mb-12">
                {["20 simple meals", "No cooking skills needed", "Fast and easy"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-base font-medium text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-10 h-12" data-testid="product-cta">
                <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Instant Access ($12) <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* SIMPLICITY WINS — Japanese Style Section */}
        <section className="py-28 bg-white text-center">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <p className="text-[3rem] mb-6 opacity-10 font-bold text-foreground select-none" style={{ fontFamily: "'Noto Sans JP', serif" }}>簡</p>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mb-4">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Simplicity Wins</h2>
              <Divider />
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Inspired by minimal living, Lazy Panda removes the stress of cooking and keeps things simple, fast, and effective.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* WHY NOT JUST USE AI? */}
        <section className="py-28 bg-muted/40 text-center">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-4">Common Question</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Not Just Use AI?</h2>
              <Divider />
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="space-y-5 text-muted-foreground leading-relaxed font-light text-lg">
                <p>AI gives you options. Lazy Panda gives you answers.</p>
                <p>No searching. No thinking. No stress.</p>
                <p className="text-foreground font-medium">Just simple meals, ready to go.</p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* AFFILIATE SECTION */}
        <section className="py-28 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-4">Recommended</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Essential Tools</h2>
              <Divider />
            </FadeInUp>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                {
                  icon: <Utensils className="h-6 w-6" />,
                  title: "Air Fryer",
                  desc: "Crispy meals in minutes. The easiest way to cook with zero effort.",
                  url: "https://amzn.to/47WDuRF",
                  testId: "affiliate-airfryer",
                },
                {
                  icon: <ChefHat className="h-6 w-6" />,
                  title: "Meal Prep Kit",
                  desc: "Prep a full week of meals in one focused hour on Sunday.",
                  url: "https://amzn.to/4vcPqIX",
                  testId: "affiliate-mealprep",
                },
              ].map((item, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all font-medium w-full" data-testid={item.testId}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">View on Amazon <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-border py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">🐼</span>
          <span className="font-bold text-foreground tracking-tight">Lazy Panda</span>
        </div>
        <p className="text-sm text-muted-foreground font-light">Created by Jacob Pizano</p>
        <p className="text-xs text-muted-foreground/60 mt-2">© {new Date().getFullYear()} Lazy Panda. All rights reserved.</p>
      </footer>

    </div>
  );
}

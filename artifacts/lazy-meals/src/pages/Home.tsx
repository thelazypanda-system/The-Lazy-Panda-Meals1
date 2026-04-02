import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Utensils, ChefHat, Zap, DollarSign, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const Divider = () => <div className="w-10 h-px bg-primary mx-auto my-5 opacity-50" />;

const GUMROAD = "https://wowofijo.gumroad.com/l/lazymeals";

const products = [
  { title: "7-Day Budget Starter", desc: "7 days of ultra-cheap meals under $5 a day. Perfect for beginners.", price: "$5", url: "https://wowofijo.gumroad.com/l/lazymeals" },
  { title: "Lazy Panda 30-Day System", desc: "The full system — 30 days of simple, fast, affordable meals planned for you.", price: "$12", url: GUMROAD, badge: "Best Value" },
  { title: "Weekly Meal Prep Guide", desc: "Prep one hour on Sunday and eat stress-free all week long.", price: "$7", url: "https://wowofijo.gumroad.com/l/lazymeals" },
];

const amazonProducts = [
  { icon: <Utensils className="h-7 w-7" />, title: "Rice Cooker", desc: "Set it and forget it. Perfect fluffy rice every time.", url: "https://www.amazon.com/s?k=rice+cooker&tag=lazymeals-20" },
  { icon: <Zap className="h-7 w-7" />, title: "Air Fryer", desc: "Crispy meals in minutes with zero effort.", url: "https://amzn.to/47WDuRF" },
  { icon: <ChefHat className="h-7 w-7" />, title: "Meal Prep Tools", desc: "Containers and tools to prep a week of meals in one hour.", url: "https://amzn.to/4vcPqIX" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* PIBO Consulting — Premium Sponsor Banner */}
      <div className="w-full bg-primary/5 border-b border-primary/10 py-3 px-5 text-center">
        <p className="text-sm text-foreground/80">
          <span className="font-semibold text-primary">⭐ Premium Sponsor</span>
          {" "}— Lazy Panda is proudly powered by{" "}
          <a href="https://askpibo.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
            PIBO Consulting
          </a>
          {" "}— experts in passive income and digital growth.
        </p>
      </div>

      <main className="flex-1 flex flex-col">

        {/* HERO */}
        <section className="py-28 md:py-40 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mb-6">怠食 — Lazy Panda</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
                Lazy Panda – Eat Better<br />With Less Effort
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
                Simple, cheap, and fast meals for busy people
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-base h-13 px-10 shadow-md">
                <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Your First Meal Plan</a>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-muted/40 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">Why Lazy Panda</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Built for real, busy people</h2>
              <Divider />
            </FadeInUp>
            <div className="grid sm:grid-cols-3 gap-8 mt-10">
              {[
                { icon: <DollarSign className="h-6 w-6" />, title: "Budget Meals", desc: "Every meal costs less than $5. Eat well without spending more." },
                { icon: <Clock className="h-6 w-6" />, title: "Fast Recipes", desc: "Most meals take under 15 minutes. No long prep, no stress." },
                { icon: <Sparkles className="h-6 w-6" />, title: "Smart Suggestions", desc: "AI-powered ideas tailored to your budget, time, and ingredients." },
              ].map((b, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">{b.icon}</div>
                    <h3 className="font-semibold text-lg">{b.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{b.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* BORPIZ HOSPITALITY — Featured Partner */}
        <section className="py-16 bg-white border-y border-border text-center">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-4">Featured Partner</p>
              <h3 className="text-2xl font-bold mb-3">Borpiz Hospitality</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Proud partner of Lazy Panda. Borpiz Hospitality brings world-class food experience and hospitality to every table.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="py-24 bg-muted/40 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">Digital Products</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Meal Plans — Ready to Download</h2>
              <Divider />
              <p className="text-muted-foreground font-light mb-10">Instant download after purchase</p>
            </FadeInUp>
            <div className="grid sm:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-7 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all relative">
                    {p.badge && (
                      <span className="absolute top-4 right-4 text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">{p.badge}</span>
                    )}
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">{p.desc}</p>
                    <div className="text-2xl font-bold text-primary">{p.price}</div>
                    <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold w-full">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">Buy Now</a>
                    </Button>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* AI MEAL GENERATOR TEASER */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <div className="text-4xl mb-5">🤖</div>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">New Feature</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">AI Meal Generator</h2>
              <Divider />
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Tell us your budget, time, and what's in your kitchen. We'll generate simple meal ideas instantly — no thinking required.
              </p>
              <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 h-11 transition-all">
                <Link href="/ai">Try the AI Generator <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* LAZY ESSENTIALS — Amazon Affiliate Section */}
        <section className="py-24 bg-muted/40 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">Affiliate Picks</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Lazy Essentials</h2>
              <Divider />
              <p className="text-muted-foreground font-light mb-10">The tools that make lazy cooking actually work</p>
            </FadeInUp>
            <div className="grid sm:grid-cols-3 gap-6">
              {amazonProducts.map((item, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-7 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">{item.desc}</p>
                    <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all font-medium w-full">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">View on Amazon <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </FadeInUp>
              ))}
            </div>
            <FadeInUp delay={0.3}>
              <p className="text-xs text-muted-foreground mt-8 font-light max-w-lg mx-auto">
                This page may contain affiliate links, which means I earn a commission at no extra cost to you.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ABOUT BLURB */}
        <section className="py-20 bg-white text-center border-t border-border">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <span className="text-3xl">🐼</span>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed text-base">
                Built by <span className="font-semibold text-foreground">Jacob Pizano</span>, Lazy Panda was created to help people eat better without stress, time, or high costs.
              </p>
              <Link href="/about" className="inline-block mt-4 text-sm text-primary hover:underline font-medium">Read our story →</Link>
            </FadeInUp>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, ArrowRight, Utensils, ChefHat, TrendingUp, Star, Quote } from "lucide-react";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GUMROAD = "https://wowofijo.gumroad.com/l/lazymeals";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="#ea580c"/>
              <text x="19" y="24" textAnchor="middle" fontFamily="serif" fontSize="16" fill="white" fontWeight="bold">怠</text>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-widest uppercase">Lazy Meal</span>
              <span className="text-orange-400 text-[10px] tracking-[0.3em] uppercase font-medium">System</span>
            </div>
          </div>
          <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 h-10 shadow-md" data-testid="nav-cta">
            <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Instant Access ($12)</a>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col">

        {/* HERO */}
        <section className="relative py-28 md:py-40 overflow-hidden bg-black text-white text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-black to-black pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-5">
            <FadeInUp>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Stop Thinking About<br />
                <span className="text-orange-400">What to Cook</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
                Get simple meals and a system that saves you time every day
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Button asChild size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg h-14 px-10 shadow-xl shadow-orange-500/30" data-testid="hero-cta">
                <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Instant Access ($12)</a>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className="py-24 bg-card">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Lazy Meal System</h2>
              <p className="text-lg text-muted-foreground mb-10">Normally $20 — get it today for $12</p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <ul className="inline-flex flex-col gap-5 text-left mb-12">
                {[
                  "20 fast, simple meals",
                  "No cooking skills needed",
                  "Save time every day",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-xl font-medium">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <Button asChild size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg h-14 px-10 shadow-lg shadow-orange-500/20" data-testid="product-cta">
                <a href={GUMROAD} target="_blank" rel="noopener noreferrer">Get Instant Access ($12) <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </FadeInUp>
          </div>
        </section>

        {/* WHY NOT JUST USE AI? */}
        <section className="py-24 bg-muted/40">
          <div className="max-w-2xl mx-auto px-5">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why Not Just Use AI?</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>AI can give you ideas, but it still makes you think, choose, and decide.</p>
                <p>The Lazy Meal System removes all that. You get ready-to-use meals that are already simple, tested, and organized.</p>
                <p>No searching. No scrolling. No overthinking.</p>
                <p className="text-foreground font-semibold text-xl">Just open it, pick a meal, and eat.</p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* PIBO CONSULTING */}
        <section className="py-24 bg-card">
          <div className="max-w-3xl mx-auto px-5">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">How This Site Makes Passive Income</h2>
              <p className="text-center text-muted-foreground text-lg mb-12">
                This site is powered by the <strong className="text-foreground">PIBO Consulting</strong> methodology — a proven system for building audiences and earning through affiliate links, digital products, and audience growth.
              </p>
            </FadeInUp>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Utensils className="h-6 w-6" />, title: "Affiliate Links", desc: "We recommend tools we actually use and earn a commission when you buy." },
                { icon: <TrendingUp className="h-6 w-6" />, title: "Digital Products", desc: "100% margin, zero fulfillment. Sell once, earn forever." },
                { icon: <ChefHat className="h-6 w-6" />, title: "Audience Growth", desc: "Helpful content builds trust, and trust converts to income." },
              ].map((item, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="rounded-2xl bg-muted/50 p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
            <FadeInUp delay={0.3}>
              <div className="text-center">
                <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 h-12" data-testid="pibo-learn-more">
                  <a href="https://askpibo.com" target="_blank" rel="noopener noreferrer">Learn More at PIBO Consulting</a>
                </Button>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* AFFILIATE SECTION */}
        <section className="py-24 bg-muted/40">
          <div className="max-w-3xl mx-auto px-5">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Tools I Recommend</h2>
            </FadeInUp>
            <div className="grid sm:grid-cols-2 gap-8">
              <FadeInUp delay={0.1}>
                <div className="rounded-3xl border border-border bg-background p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-lg hover:border-orange-400/50 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Utensils className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">Air Fryer</h3>
                  <p className="text-muted-foreground text-sm">Crispy meals in minutes — the laziest way to cook.</p>
                  <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold w-full" data-testid="affiliate-airfryer">
                    <a href="https://amzn.to/47WDuRF" target="_blank" rel="noopener noreferrer">View on Amazon <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.15}>
                <div className="rounded-3xl border border-border bg-background p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-lg hover:border-orange-400/50 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <ChefHat className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">Meal Prep Kit</h3>
                  <p className="text-muted-foreground text-sm">Prep a full week of meals in one hour on Sunday.</p>
                  <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold w-full" data-testid="affiliate-mealprep">
                    <a href="https://amzn.to/4vcPqIX" target="_blank" rel="noopener noreferrer">View on Amazon <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-24 bg-card">
          <div className="max-w-5xl mx-auto px-5">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">What People Are Saying</h2>
            </FadeInUp>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I haven't spent more than 15 minutes cooking dinner in a month. This system completely changed my evenings.",
                  name: "Sarah J.",
                  role: "Accountant",
                },
                {
                  quote: "Finally something that actually removes the decision fatigue. I open it, pick a meal, and I'm done.",
                  name: "Marcus T.",
                  role: "Marketer",
                },
                {
                  quote: "No cooking skills, no problem. These meals are simple and I actually stick to them every week.",
                  name: "Priya P.",
                  role: "Mom of 3",
                },
              ].map((review, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <Card className="h-full rounded-3xl border-none shadow-lg bg-muted/50 relative">
                    <div className="absolute top-6 right-6 text-orange-500/20">
                      <Quote className="h-10 w-10" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-4 text-orange-500">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                      </div>
                      <p className="text-lg font-medium leading-relaxed italic">"{review.quote}"</p>
                    </CardHeader>
                    <CardFooter className="gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-orange-500/20 text-orange-500 font-bold">{review.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.role}</div>
                      </div>
                    </CardFooter>
                  </Card>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white/50 py-10 border-t border-white/10 text-center text-sm">
        <p className="text-white font-semibold text-base mb-1">Jacob Pizano</p>
        <p>© {new Date().getFullYear()} Lazy Meal System. All rights reserved.</p>
      </footer>

    </div>
  );
}

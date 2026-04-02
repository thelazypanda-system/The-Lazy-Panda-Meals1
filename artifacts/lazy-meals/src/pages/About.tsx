import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-24 bg-white text-center border-b border-border">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <span className="text-5xl">🐼</span>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mt-6 mb-3">Our Story</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">About Lazy Panda</h1>
              <Divider />
              <p className="text-muted-foreground font-light leading-relaxed">
                Built by Jacob Pizano, Lazy Panda was created to help people eat better without stress, time, or high costs.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">Mission</p>
              <h2 className="text-3xl font-bold mb-2">Why Lazy Panda exists</h2>
              <Divider />
              <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-base text-left mt-8">
                <p>
                  Most people don't need gourmet recipes. They need something fast, affordable, and simple — a meal they can make after a long day without thinking too hard.
                </p>
                <p>
                  Lazy Panda was born from that exact frustration. Jacob Pizano started cooking simple meals on a tight budget and realized there was no resource that combined everything: speed, cost, and simplicity — without the fluff.
                </p>
                <p>
                  So he built one. Lazy Panda is the resource he wished existed: no 40-ingredient recipes, no expensive tools, no judgment. Just meals that work.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">What we stand for</p>
              <h2 className="text-3xl font-bold mb-2">Our Values</h2>
              <Divider />
            </FadeInUp>
            <div className="grid sm:grid-cols-3 gap-8 mt-10">
              {[
                { kanji: "簡", title: "Simplicity", desc: "Every recipe and plan is designed for the least possible effort." },
                { kanji: "安", title: "Affordability", desc: "Budget meals aren't boring. We prove that every day." },
                { kanji: "速", title: "Speed", desc: "Most meals take 15 minutes or less. Your time is precious." },
              ].map((v, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center gap-4 p-6">
                    <div className="text-4xl font-bold text-primary/20 select-none" style={{ fontFamily: "'Noto Sans JP', serif" }}>{v.kanji}</div>
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{v.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="py-16 bg-muted/40 border-y border-border">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <FadeInUp>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground font-medium mb-3">Backed by</p>
              <h2 className="text-2xl font-bold mb-8">Our Sponsors</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://askpibo.com" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white rounded-2xl border border-primary/20 p-6 text-center hover:border-primary transition-colors group">
                  <div className="text-xs text-primary font-semibold mb-1">⭐ Premium Sponsor</div>
                  <div className="font-bold text-lg group-hover:text-primary transition-colors">PIBO Consulting</div>
                  <div className="text-sm text-muted-foreground font-light mt-1">Passive income & digital growth experts</div>
                </a>
                <div className="flex-1 bg-white rounded-2xl border border-border p-6 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">Featured Sponsor</div>
                  <div className="font-bold text-lg">Borpiz Hospitality</div>
                  <div className="text-sm text-muted-foreground font-light mt-1">World-class food & hospitality</div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-md mx-auto px-6">
            <FadeInUp>
              <h2 className="text-2xl font-bold mb-4">Want to sponsor Lazy Panda?</h2>
              <p className="text-muted-foreground font-light mb-7">Join PIBO Consulting and Borpiz Hospitality as a sponsor and reach our growing audience of busy people who care about food.</p>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-11">
                <Link href="/work-with-us">See Sponsor Tiers</Link>
              </Button>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const tiers = [
  {
    name: "Basic",
    price: "$10/month",
    desc: "Get in front of our growing audience with a footer mention.",
    features: ["Footer name mention", "Link to your website", "Monthly newsletter mention", "Lazy Panda community access"],
  },
  {
    name: "Featured",
    price: "$25/month",
    desc: "A dedicated section on the homepage with a description and link.",
    features: ["Homepage partner section", "Footer spotlight", "Social media mention", "Priority support", "Monthly analytics report"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$50/month",
    desc: "Top placement across the site with maximum brand visibility.",
    features: ["Top-of-site sponsor banner", "Homepage hero mention", "Every page footer logo", "Co-branded content", "Monthly call + analytics", "Custom ad placement"],
    highlight: false,
    badge: "Most Visibility",
  },
];

export default function WorkWithUs() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", tier: "Featured", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    toast({
      title: "Message received!",
      description: "We'll be in touch within 24 hours.",
    });
    setForm({ name: "", email: "", tier: "Featured", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-24 bg-white text-center border-b border-border">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mb-3">Partnerships</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Work With Us</h1>
              <Divider />
              <p className="text-muted-foreground font-light leading-relaxed">
                Reach a growing audience of budget-conscious, busy people who care about food. Sponsor Lazy Panda and grow your brand.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-10 bg-primary/5 border-b border-primary/10 text-center">
          <p className="text-sm text-foreground/70">
            Current sponsors:{" "}
            <a href="https://askpibo.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">PIBO Consulting</a>
            {" "}(Premium) &{" "}
            <span className="font-bold text-foreground">Borpiz Hospitality</span>
            {" "}(Featured)
          </p>
        </section>

        {/* Tiers */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-center mb-2">Sponsor Tiers</h2>
              <p className="text-center text-muted-foreground font-light mb-12">Choose the level that fits your goals</p>
            </FadeInUp>
            <div className="grid sm:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className={`bg-white rounded-2xl border p-7 flex flex-col gap-5 shadow-sm relative h-full ${tier.highlight ? "border-primary shadow-md" : "border-border"}`}>
                    {tier.badge && (
                      <span className="absolute top-4 right-4 text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">{tier.badge}</span>
                    )}
                    {tier.highlight && (
                      <span className="absolute top-4 right-4 text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">Most Popular</span>
                    )}
                    <div>
                      <h3 className="font-bold text-xl mb-1">{tier.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-3">{tier.price}</div>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{tier.desc}</p>
                    </div>
                    <ul className="flex flex-col gap-3 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={tier.highlight ? "default" : "outline"}
                      className={`rounded-full font-semibold w-full mt-2 ${tier.highlight ? "bg-primary hover:bg-primary/90 text-white" : "border-primary/30 text-primary hover:bg-primary hover:text-white"}`}
                      onClick={() => {
                        setForm((prev) => ({ ...prev, tier: tier.name }));
                        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Choose {tier.name}
                    </Button>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
              <p className="text-center text-muted-foreground font-light mb-10">Fill out the form and we'll get back to you within 24 hours.</p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              {submitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center">
                  <div className="text-4xl mb-4">🐼</div>
                  <h3 className="text-xl font-bold mb-2">Message received!</h3>
                  <p className="text-muted-foreground font-light">We'll be in touch within 24 hours.</p>
                  <Button className="mt-6 rounded-full bg-primary text-white" onClick={() => setSubmitted(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-5">
                  <div>
                    <label className="text-sm font-semibold block mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name or business name"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Sponsor Tier</label>
                    <select
                      value={form.tier}
                      onChange={(e) => setForm((p) => ({ ...p, tier: e.target.value }))}
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                      data-testid="select-tier"
                    >
                      <option>Basic</option>
                      <option>Featured</option>
                      <option>Premium</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Message <span className="font-normal text-muted-foreground">(optional)</span></label>
                    <textarea
                      placeholder="Tell us about your brand or any questions..."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      rows={4}
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-12" data-testid="submit-button">
                    Send Message
                  </Button>
                </form>
              )}
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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

const products = [
  {
    title: "7-Day Budget Starter Plan",
    desc: "7 days of simple, affordable meals — all under $5 per day. Includes a shopping list and prep guide.",
    price: "$5",
    tag: "Beginner Friendly",
    url: "https://wowofijo.gumroad.com/l/lazymeals",
    includes: ["7 full day meal plans", "Shopping list included", "Under $5/day budget", "No cooking skills needed"],
  },
  {
    title: "Lazy Panda 30-Day System",
    desc: "The complete Lazy Panda system — 30 days of ready-to-use meals that are cheap, fast, and simple.",
    price: "$12",
    tag: "Most Popular",
    url: "https://wowofijo.gumroad.com/l/lazymeals",
    includes: ["30 full day meal plans", "Weekly shopping lists", "15-min or less recipes", "Bonus: affiliate income breakdown"],
    highlight: true,
  },
  {
    title: "Weekly Meal Prep Guide",
    desc: "Spend one hour on Sunday, eat stress-free all week. Includes containers guide and batch cooking tips.",
    price: "$7",
    tag: "Time Saver",
    url: "https://wowofijo.gumroad.com/l/lazymeals",
    includes: ["7-day meal prep schedule", "Batch cooking guide", "Container tips", "Reheating instructions"],
  },
  {
    title: "Student Survival Pack",
    desc: "Designed for students with a tiny budget, no kitchen skills, and barely any time.",
    price: "$4",
    tag: "Budget Pick",
    url: "https://wowofijo.gumroad.com/l/lazymeals",
    includes: ["Dorm-friendly meals", "Microwave recipes", "Ultra-low budget", "Quick & easy"],
  },
  {
    title: "Family Easy Meals Bundle",
    desc: "Feeding a family on a budget. Simple meals that kids and adults will both enjoy.",
    price: "$9",
    tag: "Family Edition",
    url: "https://wowofijo.gumroad.com/l/lazymeals",
    includes: ["Serves 4+ people", "Kid-approved meals", "Bulk-friendly recipes", "Freezer-friendly options"],
  },
  {
    title: "High Protein Lazy Plan",
    desc: "Cheap, fast, and high in protein. For those who want to eat healthy without overthinking it.",
    price: "$8",
    tag: "Health Edition",
    url: "https://wowofijo.gumroad.com/l/lazymeals",
    includes: ["30g+ protein per meal", "Budget-friendly sources", "Simple prep", "Grocery list included"],
  },
];

export default function Store() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-white text-center border-b border-border">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mb-3">Digital Downloads</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">The Store</h1>
              <Divider />
              <p className="text-muted-foreground font-light leading-relaxed">
                All meal plans are PDF downloads — instant access after purchase.
              </p>
              <div className="flex items-center justify-center gap-2 mt-5 text-sm text-primary font-medium">
                <Download className="h-4 w-4" />
                Instant download after purchase
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <FadeInUp key={i} delay={(i % 3) * 0.1}>
                  <div className={`bg-white rounded-2xl border p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-all h-full relative ${p.highlight ? "border-primary shadow-md" : "border-border hover:border-primary/30"}`}>
                    {p.tag && (
                      <span className={`absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full font-medium ${p.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                        {p.tag}
                      </span>
                    )}
                    <div>
                      <h3 className="font-bold text-lg mb-2 pr-16">{p.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
                    </div>
                    <ul className="flex flex-col gap-2 flex-1">
                      {p.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="text-primary text-xs">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-2xl font-bold text-primary">{p.price}</span>
                      <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6">
                        <a href={p.url} target="_blank" rel="noopener noreferrer">Buy Now</a>
                      </Button>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Trust note */}
        <section className="py-14 bg-white text-center border-t border-border">
          <div className="max-w-md mx-auto px-6">
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              All purchases are processed securely through <strong className="text-foreground">Gumroad</strong>. You'll receive a download link immediately after checkout. No account required.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

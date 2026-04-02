import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, DollarSign, ChefHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Divider = () => <div className="w-10 h-px bg-primary mx-auto my-5 opacity-50" />;

interface Meal {
  name: string;
  time: number;
  budget: "low" | "medium" | "high";
  tags: string[];
  steps: string[];
  tip: string;
}

const mealDatabase: Meal[] = [
  { name: "Fried Rice", time: 15, budget: "low", tags: ["rice", "eggs", "vegetables", "soy sauce"], steps: ["Cook rice (or use leftover)", "Scramble eggs in a pan", "Add rice, soy sauce, and any veggies", "Stir fry for 3 minutes"], tip: "Leftover rice works best!" },
  { name: "Avocado Toast", time: 5, budget: "low", tags: ["bread", "avocado", "salt", "eggs"], steps: ["Toast bread", "Mash avocado with salt", "Spread on toast", "Add optional toppings"], tip: "Add a fried egg on top for extra protein." },
  { name: "Instant Ramen Upgrade", time: 10, budget: "low", tags: ["ramen", "noodles", "egg", "quick", "instant"], steps: ["Boil noodles as directed", "Soft boil an egg (6 min)", "Add soy sauce and sesame oil", "Top with egg and any vegetables"], tip: "Add frozen veggies to the boiling water." },
  { name: "Peanut Butter Wrap", time: 5, budget: "low", tags: ["peanut butter", "banana", "wrap", "tortilla", "quick"], steps: ["Lay out a tortilla", "Spread peanut butter", "Add sliced banana", "Roll it up and eat"], tip: "Add honey for extra sweetness." },
  { name: "Scrambled Eggs & Toast", time: 8, budget: "low", tags: ["eggs", "bread", "butter", "quick"], steps: ["Toast bread", "Beat eggs with salt", "Cook on low heat with butter", "Stir slowly until fluffy"], tip: "Low heat = creamier eggs." },
  { name: "Pasta with Marinara", time: 15, budget: "low", tags: ["pasta", "tomato sauce", "garlic", "parmesan"], steps: ["Boil salted water", "Cook pasta per package", "Heat marinara sauce", "Combine and add cheese"], tip: "Salt the pasta water generously." },
  { name: "Quesadillas", time: 12, budget: "low", tags: ["cheese", "tortilla", "beans", "salsa"], steps: ["Heat pan on medium", "Add tortilla with cheese and fillings", "Fold in half", "Cook 2 min per side until golden"], tip: "Use shredded cheese for best melt." },
  { name: "Microwave Baked Potato", time: 10, budget: "low", tags: ["potato", "quick", "butter", "cheese"], steps: ["Pierce potato all over with fork", "Microwave 5 min, flip, 5 more min", "Cut open and fluff", "Add butter, cheese, toppings"], tip: "Wrap in a damp paper towel for best results." },
  { name: "Tuna Sandwich", time: 5, budget: "low", tags: ["tuna", "bread", "mayo", "quick", "canned"], steps: ["Open and drain tuna can", "Mix with mayo and a pinch of salt", "Spread on bread", "Add lettuce if available"], tip: "Add pickles or celery for crunch." },
  { name: "Oatmeal Bowl", time: 8, budget: "low", tags: ["oats", "milk", "banana", "quick", "breakfast"], steps: ["Heat milk or water", "Add oats and stir", "Cook 3-4 minutes", "Top with banana and honey"], tip: "Overnight oats require zero cooking!" },
  { name: "Bean Burrito", time: 15, budget: "low", tags: ["beans", "tortilla", "cheese", "rice", "salsa"], steps: ["Warm canned beans with cumin", "Heat a tortilla", "Layer beans, rice, cheese, salsa", "Roll tight"], tip: "Canned refried beans make this even faster." },
  { name: "Stir Fry Vegetables", time: 15, budget: "low", tags: ["vegetables", "soy sauce", "garlic", "rice", "oil"], steps: ["Heat oil in a pan or wok", "Add garlic and vegetables", "Stir fry on high heat 5 min", "Add soy sauce and serve over rice"], tip: "High heat = better texture." },
  { name: "Grilled Cheese", time: 8, budget: "low", tags: ["bread", "cheese", "butter", "quick"], steps: ["Butter both sides of bread", "Add cheese slices inside", "Cook on medium heat 3 min per side", "Eat immediately"], tip: "Covering the pan melts cheese faster." },
  { name: "Greek Yogurt Parfait", time: 5, budget: "medium", tags: ["yogurt", "fruit", "granola", "honey", "quick"], steps: ["Add yogurt to a bowl or cup", "Layer with fruit", "Top with granola", "Drizzle honey"], tip: "Prep the night before for a quick breakfast." },
  { name: "Chicken Stir Fry", time: 20, budget: "medium", tags: ["chicken", "vegetables", "soy sauce", "rice", "garlic"], steps: ["Slice chicken thin", "Cook on high heat 5-6 min", "Add vegetables and garlic", "Add soy sauce and serve over rice"], tip: "Marinate chicken in soy sauce for 10 min first." },
  { name: "Vegetable Soup", time: 30, budget: "low", tags: ["vegetables", "broth", "garlic", "onion", "carrots"], steps: ["Sauté onion and garlic", "Add chopped vegetables", "Pour in broth", "Simmer 20 minutes"], tip: "Use any vegetables you have on hand." },
  { name: "Overnight Oats", time: 5, budget: "low", tags: ["oats", "milk", "banana", "yogurt", "quick"], steps: ["Mix oats and milk 1:1", "Add yogurt and toppings", "Cover and refrigerate overnight", "Eat cold in the morning"], tip: "Make 3-4 jars on Sunday for the whole week." },
  { name: "Air Fryer Frozen Meal", time: 15, budget: "low", tags: ["frozen", "quick", "air fryer", "easy"], steps: ["Preheat air fryer to 375°F", "Place frozen food inside", "Cook per package (usually 10-12 min)", "Shake halfway through"], tip: "Almost anything frozen tastes better in an air fryer." },
  { name: "Caprese Salad", time: 5, budget: "medium", tags: ["tomato", "mozzarella", "basil", "olive oil", "quick"], steps: ["Slice tomatoes and mozzarella", "Alternate on a plate", "Add fresh basil", "Drizzle olive oil and salt"], tip: "Best with fresh buffalo mozzarella." },
  { name: "BLT Sandwich", time: 10, budget: "medium", tags: ["bacon", "lettuce", "tomato", "bread", "mayo"], steps: ["Cook bacon until crispy", "Toast bread", "Spread mayo", "Layer bacon, lettuce, tomato"], tip: "Pat the tomato dry so the bread doesn't get soggy." },
];

export default function AIMealGenerator() {
  const [budget, setBudget] = useState("low");
  const [time, setTime] = useState("15");
  const [ingredients, setIngredients] = useState("");
  const [results, setResults] = useState<Meal[]>([]);
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const generate = () => {
    setLoading(true);
    setGenerated(false);

    setTimeout(() => {
      const maxTime = parseInt(time);
      const userIngredients = ingredients.toLowerCase().split(",").map((s) => s.trim()).filter(Boolean);

      let filtered = mealDatabase.filter((m) => {
        if (m.time > maxTime) return false;
        if (budget === "low" && m.budget !== "low") return false;
        if (budget === "medium" && m.budget === "high") return false;
        return true;
      });

      if (userIngredients.length > 0) {
        filtered = filtered.sort((a, b) => {
          const aMatches = a.tags.filter((t) => userIngredients.some((i) => t.includes(i) || i.includes(t))).length;
          const bMatches = b.tags.filter((t) => userIngredients.some((i) => t.includes(i) || i.includes(t))).length;
          return bMatches - aMatches;
        });
      }

      setResults(filtered.slice(0, 4));
      setGenerated(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-white text-center border-b border-border">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <div className="text-4xl mb-4">🤖</div>
              <p className="text-xs tracking-[0.4em] uppercase text-primary font-medium mb-3">AI Powered</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">AI Meal Generator</h1>
              <Divider />
              <p className="text-muted-foreground font-light leading-relaxed">
                Tell us your budget, time, and what's in your kitchen. We'll find the perfect lazy meal for you.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Generator Form */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-xl mx-auto px-6">
            <FadeInUp>
              <div className="bg-white rounded-3xl border border-border p-8 shadow-sm space-y-7">
                {/* Budget */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <DollarSign className="h-4 w-4 text-primary" /> Budget per meal
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: "low", label: "Low", sub: "Under $5" },
                      { val: "medium", label: "Medium", sub: "$5–$10" },
                      { val: "high", label: "Any", sub: "No limit" },
                    ].map((b) => (
                      <button
                        key={b.val}
                        onClick={() => setBudget(b.val)}
                        className={`rounded-xl border py-3 px-2 text-center transition-all ${budget === b.val ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                      >
                        <div className="font-semibold text-sm">{b.label}</div>
                        <div className="text-xs opacity-70">{b.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <Clock className="h-4 w-4 text-primary" /> Time available
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: "5", label: "5 min", sub: "Super fast" },
                      { val: "15", label: "15 min", sub: "Quick" },
                      { val: "30", label: "30 min", sub: "Normal" },
                    ].map((t) => (
                      <button
                        key={t.val}
                        onClick={() => setTime(t.val)}
                        className={`rounded-xl border py-3 px-2 text-center transition-all ${time === t.val ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                      >
                        <div className="font-semibold text-sm">{t.label}</div>
                        <div className="text-xs opacity-70">{t.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <ChefHat className="h-4 w-4 text-primary" /> Ingredients you have <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. eggs, rice, cheese, chicken"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">Separate with commas. We'll prioritize meals using what you have.</p>
                </div>

                <Button
                  onClick={generate}
                  disabled={loading}
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-base shadow-sm"
                  data-testid="generate-button"
                >
                  {loading ? (
                    <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 animate-spin" /> Generating...</span>
                  ) : (
                    <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Generate Meal Ideas</span>
                  )}
                </Button>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Results */}
        <AnimatePresence>
          {generated && (
            <section className="py-16 bg-white">
              <div className="max-w-3xl mx-auto px-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-2xl font-bold text-center mb-2">
                    {results.length > 0 ? `${results.length} meal ideas for you` : "No matches found"}
                  </h2>
                  <p className="text-center text-muted-foreground text-sm font-light mb-10">
                    {results.length > 0 ? "Here are your personalized lazy meals" : "Try adjusting your budget or time settings"}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {results.map((meal, i) => (
                      <motion.div
                        key={meal.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-2xl border border-border p-6 shadow-sm"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-bold text-lg">{meal.name}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium whitespace-nowrap ml-2">{meal.time} min</span>
                        </div>
                        <ol className="flex flex-col gap-2 mb-4">
                          {meal.steps.map((step, j) => (
                            <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-primary font-bold flex-shrink-0">{j + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <div className="bg-primary/5 rounded-xl px-4 py-2.5 text-xs text-primary font-medium">
                          💡 {meal.tip}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Utensils, ChefHat, Timer, TrendingUp, CheckCircle2, PlayCircle, Star, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "You're in!",
      description: "Check your email for the free recipe pack.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/30 text-foreground overflow-x-hidden">
      {/* 1. Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl transition-all supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl text-white">
              <Utensils className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Lazy Meals</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="rounded-full font-bold px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-white bg-primary hover:bg-primary/90" data-testid="nav-cta-button">
              <a href="#signup">Start Earning <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 overflow-hidden flex items-center">
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-black z-0" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4 z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3 z-0 pointer-events-none" />
          
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <FadeInUp>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Passive Income System V2.0
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Too Tired to Cook? <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-500">
                  Steal My Lazy System
                </span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                Eat better in minutes + learn exactly how this page generates passive income through smart affiliate placements.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="rounded-full text-lg h-14 px-8 w-full sm:w-auto font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]" asChild data-testid="hero-cta-main">
                  <a href="#signup">Get the Free Guide</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm" asChild data-testid="hero-cta-secondary">
                  <a href="#how-it-works"><PlayCircle className="mr-2 h-5 w-5" /> See How it Works</a>
                </Button>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.5}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/50">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No Cooking Skills Needed</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Set & Forget Income</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% Beginner Friendly</div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* 4. Passive Income Explainer */}
        <section id="how-it-works" className="py-24 bg-card relative z-20 -mt-10 rounded-t-[3rem] shadow-[-10px_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeInUp>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    How this simple site <span className="text-primary">makes money.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    This isn't just a recipe site. It's a demonstration of the <strong className="text-foreground">PIBO Consulting</strong> methodology for automated income. We built an audience of tired professionals and provide them solutions.
                  </p>
                </FadeInUp>
                
                <div className="space-y-8">
                  <FadeInUp delay={0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <ChefHat className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">1. The Hook</h3>
                        <p className="text-muted-foreground">We offer free, genuinely useful "lazy recipes" that solve an immediate painful problem for our audience.</p>
                      </div>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={0.2}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">2. Affiliate Links</h3>
                        <p className="text-muted-foreground">We recommend the tools and services (meal kits, choppers) that make these recipes possible. We earn a cut.</p>
                      </div>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={0.3}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">3. Digital Products</h3>
                        <p className="text-muted-foreground">We sell premium packs for those who want the complete system instantly. 100% margin, zero fulfillment.</p>
                      </div>
                    </div>
                  </FadeInUp>
                </div>
                
                <FadeInUp delay={0.4}>
                  <Button className="mt-10 rounded-full font-bold px-8 h-12" data-testid="explainer-learn-more">
                    Learn the PIBO Method
                  </Button>
                </FadeInUp>
              </div>
              
              <div className="relative">
                <FadeInUp delay={0.2}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/5 aspect-square max-w-md mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50"></div>
                    
                    {/* Abstract illustration of the system */}
                    <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center gap-6">
                      <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-lg flex items-center gap-4 transform -rotate-2 hover:rotate-0 transition-transform">
                         <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500"><Utensils size={20}/></div>
                         <div>
                           <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2"></div>
                           <div className="h-3 w-32 bg-zinc-100 dark:bg-zinc-800/50 rounded-full"></div>
                         </div>
                         <div className="ml-auto text-green-500 font-bold">+$12</div>
                      </div>
                      
                      <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-lg flex items-center gap-4 transform rotate-3 hover:rotate-0 transition-transform ml-8">
                         <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500"><ChefHat size={20}/></div>
                         <div>
                           <div className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2"></div>
                           <div className="h-3 w-20 bg-zinc-100 dark:bg-zinc-800/50 rounded-full"></div>
                         </div>
                         <div className="ml-auto text-green-500 font-bold">+$45</div>
                      </div>
                      
                      <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-lg flex items-center gap-4 transform -rotate-1 hover:rotate-0 transition-transform">
                         <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500"><Timer size={20}/></div>
                         <div>
                           <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2"></div>
                           <div className="h-3 w-36 bg-zinc-100 dark:bg-zinc-800/50 rounded-full"></div>
                         </div>
                         <div className="ml-auto text-green-500 font-bold">+$9</div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Digital Product */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeInUp>
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/80 to-orange-600 p-1 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-black rounded-xl p-8 flex flex-col border border-white/10">
                      <div className="text-primary font-bold tracking-widest uppercase text-sm mb-auto">Premium Resource</div>
                      <div>
                        <h3 className="text-4xl font-extrabold leading-tight mb-4 text-white">The Lazy<br/>Recipe Pack</h3>
                        <p className="text-zinc-400 mb-8">90 days of dinners that take under 15 minutes of active time. No chopping, no prep, no mess.</p>
                        <div className="flex items-end justify-between">
                          <div className="text-3xl font-bold text-white">$29<span className="text-sm text-zinc-500 font-normal line-through ml-2">$99</span></div>
                          <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px]">A</div>
                             <div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px]">B</div>
                             <div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px]">C</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
                
                <div>
                  <FadeInUp delay={0.2}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Skip the learning curve. Get the exact system.</h2>
                    <p className="text-zinc-400 text-lg mb-8">
                      This is our flagship digital product. It's how we monetize our audience while delivering massive value. Buy it to eat better, or buy it to reverse-engineer our funnel.
                    </p>
                    <ul className="space-y-4 mb-10">
                      <li className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>90 pre-planned "lazy" dinner recipes</span>
                      </li>
                      <li className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Automated grocery lists for every week</span>
                      </li>
                      <li className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Bonus: The complete affiliate strategy breakdown</span>
                      </li>
                    </ul>
                    <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-10 text-lg font-bold" data-testid="buy-product-button">
                      Download Now for $29
                    </Button>
                  </FadeInUp>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Affiliate Products */}
        <section id="products" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInUp>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Tools we actually use.</h2>
                <p className="text-lg text-muted-foreground">
                  The lazy system requires the right tools. Here are our top recommendations (yes, these are affiliate links — that's the whole point).
                </p>
              </FadeInUp>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "FreshPrep Meal Kits",
                  desc: "Pre-chopped ingredients delivered. The ultimate lazy hack.",
                  tag: "Top Pick",
                  price: "$60/week",
                  icon: <Utensils className="h-8 w-8" />
                },
                {
                  title: "Ninja Chopper Pro",
                  desc: "Stop chopping onions. Press a button and you're done.",
                  tag: "Kitchen Gear",
                  price: "$39.99",
                  icon: <ChefHat className="h-8 w-8" />
                },
                {
                  title: "InstaCook Multicooker",
                  desc: "Throw frozen meat in, press button, eat 30 mins later.",
                  tag: "Appliance",
                  price: "$89.99",
                  icon: <Timer className="h-8 w-8" />
                }
              ].map((prod, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <Card className="h-full flex flex-col rounded-3xl border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 bg-card overflow-hidden group">
                    <CardHeader className="pb-4 relative">
                      <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {prod.tag}
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        {prod.icon}
                      </div>
                      <CardTitle className="text-2xl">{prod.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-base text-muted-foreground">
                        {prod.desc}
                      </CardDescription>
                      <div className="mt-4 font-bold text-lg">{prod.price}</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" data-testid={`affiliate-button-${i}`}>
                        View Product <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section id="reviews" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInUp>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Don't just take our word for it.</h2>
            </FadeInUp>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I haven't spent more than 15 minutes cooking dinner in a month. This system completely changed my evenings after work.",
                  name: "Sarah Jenkins",
                  role: "Exhausted Accountant"
                },
                {
                  quote: "Bought the recipe pack to see how the funnel worked. Ended up using the recipes every week. Brilliant execution.",
                  name: "Marcus T.",
                  role: "Marketer"
                },
                {
                  quote: "Finally a food blog that doesn't expect me to make my own pasta from scratch. Thank you for embracing the lazy.",
                  name: "Priya Patel",
                  role: "Mom of 3"
                }
              ].map((review, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <Card className="h-full rounded-3xl border-none shadow-lg bg-muted/50 relative">
                    <div className="absolute top-6 right-6 text-primary/20">
                      <Quote className="h-10 w-10" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-4 text-primary">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <p className="text-lg font-medium leading-relaxed italic relative z-10">"{review.quote}"</p>
                    </CardHeader>
                    <CardFooter className="gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary/20 text-primary font-bold">{review.name[0]}</AvatarFallback>
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

        {/* 3. Email Signup */}
        <section id="signup" className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <FadeInUp>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                  Get Free Recipes + Income Tips
                </h2>
                <p className="text-xl text-white/90 mb-10 font-medium">
                  Join our newsletter to get 5 lazy recipes immediately, plus our weekly breakdown of how we monetize this site.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="h-14 rounded-full px-6 text-lg bg-white border-none shadow-xl text-black placeholder:text-zinc-400 focus-visible:ring-4 focus-visible:ring-black/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="email-input"
                  />
                  <Button type="submit" size="lg" className="h-14 rounded-full px-8 text-lg font-bold bg-black text-white hover:bg-black/80 shadow-xl" data-testid="subscribe-button">
                    Subscribe
                  </Button>
                </form>
                
                <div className="flex items-center justify-center gap-4 text-white/80 font-medium">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <Avatar key={i} className="w-8 h-8 border-2 border-primary">
                        <AvatarFallback className="bg-zinc-100 text-zinc-900 text-xs font-bold">{['A', 'J', 'S', 'M', 'K'][i-1]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span>47,000+ people already using this system</span>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="bg-black text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white">Lazy Meals</span>
            </div>
            
            <nav className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a>
            </nav>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Lazy Meals. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Powered by <span className="font-bold text-white">PIBO Consulting</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
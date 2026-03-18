"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

type Service = {
  id: string;
  title: string;
  category: "Class" | "Training" | "Wellness";
  description: string;
  image: string;
};

const servicesList: Service[] = [
  {
    id: "1",
    title: "High Intensity Interval Training (HIIT)",
    category: "Class",
    description: "Burn maximum calories in minimum time with our elite HIIT coaching.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "1-on-1 Personal Training",
    category: "Training",
    description: "Get a customized workout plan and dedicated attention to crush your goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Yoga & Mobility",
    category: "Wellness",
    description: "Improve flexibility, reduce stress, and strengthen your core.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Strength & Conditioning",
    category: "Class",
    description: "Build raw power and athleticism in our dynamic group sessions.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Nutritional Coaching",
    category: "Wellness",
    description: "Fuel your body right with personalized meal plans and expert guidance.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2915&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Olympic Weightlifting",
    category: "Training",
    description: "Master the snatch and clean & jerk with certified lifting specialists.",
    image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=2940&auto=format&fit=crop"
  }
];

export function Services() {
  const [filter, setFilter] = useState<"All" | "Class" | "Training" | "Wellness">("All");
  const [search, setSearch] = useState("");

  const filteredServices = servicesList.filter((service) => {
    const matchesFilter = filter === "All" || service.category === filter;
    const matchesSearch = service.title.toLowerCase().includes(search.toLowerCase()) || 
                          service.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-background w-full min-h-[800px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              PREMIUM <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive range of fitness solutions designed to elevate your training. Explore our classes, personal training, and wellness programs.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex gap-2 bg-muted p-1 rounded-full overflow-x-auto no-scrollbar">
              {["All", "Class", "Training", "Wellness"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`flex-1 min-w-fit px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    filter === cat 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-foreground hover:bg-background/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(194,255,5,0.1)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-foreground">
                    {service.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <button className="mt-6 text-sm font-bold text-primary flex items-center gap-2 group/btn">
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center text-muted-foreground"
              >
                No services found matching your criteria. Let's try another search.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

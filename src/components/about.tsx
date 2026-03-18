"use client";

import { motion } from "framer-motion";
import { Target, Activity, Users, Medal } from "lucide-react";

export function About() {
  const stats = [
    { icon: <Target className="w-8 h-8 text-primary" />, value: "10K+", label: "Active Members" },
    { icon: <Activity className="w-8 h-8 text-primary" />, value: "50+", label: "Weekly Classes" },
    { icon: <Users className="w-8 h-8 text-primary" />, value: "30+", label: "Expert Trainers" },
    { icon: <Medal className="w-8 h-8 text-primary" />, value: "15Y+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 bg-card w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase">
              About FitBody
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
              WE DON'T JUST BUILD BODIES, WE BUILD <span className="text-primary">CHARACTER.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At FitBody Gym, we believe fitness is not a destination, but a lifelong journey. We provide a premium environment equipped with state-of-the-art machinery and led by industry-certified professionals. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are a seasoned athlete or just starting out, our tailored programs and supportive community will help you smash your goals and discover what you're truly capable of.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-8">
              {stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="p-3 bg-muted rounded-xl w-fit">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop" 
              alt="Gym Facility"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Overlay Stat Card */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-[-20px] lg:right-auto z-20 bg-background/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-border/50 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Medal className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Award Winning</div>
                  <div className="text-sm text-muted-foreground">Voted best local gym 2025</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

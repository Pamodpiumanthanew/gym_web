"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with dark overlay & subtle glassmorphism */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground">
              UNLEASH YOUR <br />
              <span className="text-primary uppercase drop-shadow-lg">Inner Beast</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-2xl text-muted-foreground max-w-2xl font-light"
          >
            Experience the ultimate premium fitness destination. World-class equipment, elite trainers, and a community built on relentless progress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_var(--color-primary)]">
              <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:bg-transparent transition-colors" />
              Join Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-transparent border-2 border-primary/20 hover:border-primary/50 rounded-full transition-all hover:bg-primary/5">
              Explore Programs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

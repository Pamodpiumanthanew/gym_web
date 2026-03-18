"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Dumbbell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50 py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 group">
            <Dumbbell className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold tracking-tight uppercase">
              Fit<span className="text-primary">Body</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
            <Link 
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-muted/50 text-foreground"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
            <button
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border shadow-lg"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 text-foreground/80 hover:text-primary border-b border-border/50"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-center w-full"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

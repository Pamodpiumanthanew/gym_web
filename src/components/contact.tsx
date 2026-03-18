"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // API call to mock endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card w-full border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                READY TO START <br/><span className="text-primary">YOUR JOURNEY?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Drop us a line to learn more about our memberships, arrange a tour, or connect with one of our elite trainers.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">123 Iron Avenue, Fitness City, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">join@fitbodygym.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-3xl p-8 shadow-lg border border-border"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {isSuccess && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  {...register("name")}
                  className={`w-full bg-muted border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.name ? 'border-red-500' : 'border-border/50'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  {...register("email")}
                  className={`w-full bg-muted border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.email ? 'border-red-500' : 'border-border/50'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Message</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className={`w-full bg-muted border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-border/50'
                  }`}
                  placeholder="How can we help you crush your goals?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

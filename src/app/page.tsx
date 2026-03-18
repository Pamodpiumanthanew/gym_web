import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}

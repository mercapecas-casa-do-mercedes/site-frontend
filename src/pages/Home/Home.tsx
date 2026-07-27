import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { useScrollToHash } from "./hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Brands />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

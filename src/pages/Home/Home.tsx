import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SEO } from "@/components/globals/SEO";
import { useScrollToHash } from "./hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Mercapeças | Peças para Caminhões Mercedes-Benz - Linha Pesada"
        description="Especialista em peças para caminhões Mercedes-Benz da linha pesada na Mercapeças Casa do Mercedes. Qualidade, pronta entrega e atendimento especializado em Uberlândia e região."
        canonicalUrl="https://mercapecas.com.br/"
        ogImage="https://mercapecas.com.br/img01-01.webp"
      />
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


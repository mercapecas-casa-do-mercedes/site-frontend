import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/globals/SEO";

export function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Fale Conosco | Mercapeças Casa do Mercedes - Peças para Caminhões"
        description="Entre em contato com a Mercapeças Casa do Mercedes. Solicite cotações de peças para caminhões Mercedes-Benz e atendimento especializado via WhatsApp ou telefone."
        canonicalUrl="https://mercapecas.com.br/contato"
        ogImage="https://mercapecas.com.br/img01-01.webp"
      />
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}


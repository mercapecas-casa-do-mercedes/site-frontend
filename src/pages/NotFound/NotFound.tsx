import { Container } from "@/components/globals/Container";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/globals/SEO";
import { ArrowLeft, SearchX } from "lucide-react";

export function NotFound() {
    return (
        <div className="flex min-h-screen flex-col">
            <SEO title="Página Não Encontrada | Mercapeças Casa do Mercedes" noIndex />
            <Header />
            <main className="flex-1">
                <section className="relative flex items-center overflow-hidden py-24 md:py-32">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E51515]/5 blur-3xl" />
                    </div>
                    <Container>
                        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#E51515]/10 text-[#E51515]">
                                <SearchX className="h-9 w-9" />
                            </div>

                            <p className="text-[8rem] font-extrabold leading-none tracking-tighter text-[#E51515] sm:text-[10rem]">
                                404
                            </p>

                            <h1 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
                                Página não encontrada
                            </h1>
                            <p className="mt-4 max-w-md text-base text-muted-foreground">
                                O endereço que você acessou não existe ou foi movido. Verifique o
                                link ou volte para a página inicial para continuar navegando.
                            </p>

                            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#E51515] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-200 hover:bg-[#c41212]"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Voltar ao início
                                </a>
                                <a
                                    href="/contato"
                                    className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-border px-8 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-all duration-200 hover:bg-accent"
                                >
                                    Falar conosco
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

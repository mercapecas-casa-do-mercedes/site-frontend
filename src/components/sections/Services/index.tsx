import { Container } from "@/components/globals/Container";
import { Settings, Gauge, Wrench, Shield, Cpu, Zap } from "lucide-react";

const categories = [
  { icon: Settings, label: "Motor" },
  { icon: Gauge, label: "Transmissão" },
  { icon: Wrench, label: "Suspensão" },
  { icon: Shield, label: "Freios" },
  { icon: Cpu, label: "Diferencial" },
  { icon: Zap, label: "Eixos Dianteiros" },
];

export function Services() {
  return (
    <section id="produtos" className="scroll-mt-20 bg-muted/40 py-20">
      <Container>
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#E51515]">
            Nossas Peças
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trabalhamos com todas as categorias
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Encontre todas as peças que você precisa para manter seu caminhão Mercedes em perfeito estado.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ icon: Icon, label }) => (
            <a
              key={label}
              /*        href="#" */
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#E51515] hover:shadow-md xs:p-4 smm:p-4 sm:gap-3 sm:p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E51515]/10 transition-colors group-hover:bg-[#E51515] xs:h-9 xs:w-9 smm:h-10 smm:w-10 sm:h-12 sm:w-12">
                <Icon className="size-4 text-[#E51515] transition-colors group-hover:text-white xs:size-[18px] smm:size-5 sm:size-6" />
              </div>
              <span className="text-xs font-semibold text-foreground smm:text-[13px] sm:text-sm">{label}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/globals/Container";
import { CompanyContactInfo } from "@/components/globals/CompanyContactInfo";
import { ContactForm } from "@/components/globals/ContactForm";

const CONTACT_EMAIL_ENDPOINT = `${import.meta.env.VITE_API_URL}/email`;

export function Footer() {
  return (
    <footer id="contato" className="scroll-mt-20 bg-zinc-950 text-zinc-300">
      <div className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <CompanyContactInfo />
            <ContactForm endpoint={CONTACT_EMAIL_ENDPOINT} />
          </div>
        </Container>
      </div>

      <div className="border-t border-zinc-800 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
            <span>Copyright © {new Date().getFullYear()} Mercapecas. Todos os direitos reservados.</span>
            <span>CNPJ: 02.761.265/0001-38</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

import { ContactFormField } from "./components/ContactFormField";
import { ContactFormSubmitButton } from "./components/ContactFormSubmitButton";
import type { ContactFormProps } from "./types";
import { useContactSubmission } from "./hooks/useContactSubmission";

export function ContactForm({ endpoint }: ContactFormProps) {
  const { formData, status, handleChange, handlePhoneAccept, handleSubmit } = useContactSubmission(endpoint);
  const isLoading = status === "loading";

  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">Contato</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <ContactFormField
          id="fullName"
          name="fullName"
          label="Nome Completo"
          placeholder="Seu nome"
          type="text"
          required
          value={formData.fullName}
          onChange={handleChange}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <ContactFormField
            id="email"
            name="email"
            label="E-mail"
            placeholder="seu@email.com"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <ContactFormField
            id="phone"
            name="phone"
            label="Telefone"
            placeholder="(00) 00000-0000"
            type="tel"
            required
            value={formData.phone}
            mask="(00) 00000-0000"
            onAccept={handlePhoneAccept}
          />
        </div>
        <ContactFormField
          id="message"
          name="message"
          label="Mensagem"
          placeholder="Escreva sua mensagem..."
          type="textarea"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
        />
        
        <ContactFormSubmitButton disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar Mensagem"}
        </ContactFormSubmitButton>

        {status === "success" && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-md border border-emerald-800 bg-emerald-950/50 p-3 text-sm font-medium text-emerald-400"
          >
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}

        {status === "error" && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-md border border-red-800 bg-red-950/50 p-3 text-sm font-medium text-red-400"
          >
            Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
          </div>
        )}
      </form>
    </div>
  );
}

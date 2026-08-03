import type { ContactFormData, ContactFormPayload } from "../types";

export function buildContactEmailPayload(data: ContactFormData): ContactFormPayload {
  return {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    message: data.message,
  };
}

export interface ContactFormProps {
  endpoint: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactFormPayload = ContactFormData;

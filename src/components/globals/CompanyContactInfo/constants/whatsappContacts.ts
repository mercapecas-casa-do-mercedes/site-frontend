export interface WhatsAppContact {
  label: string;
  phone: string;
  phoneRaw: string;
}

export const defaultWhatsappContacts: WhatsAppContact[] = [
  {
    label: "Vendas",
    phone: "(34) 3213-9266",
    phoneRaw: "553432139266",
  },
  {
    label: "Financeiro",
    phone: "(34) 9976-1464",
    phoneRaw: "553499761464",
  },
  {
    label: "Compras",
    phone: "(34) 9976-1464",
    phoneRaw: "553499761464",
  },
  {
    label: "Garantia",
    phone: "(34) 9976-1464",
    phoneRaw: "553499761464",
  },
];

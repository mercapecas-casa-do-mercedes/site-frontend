import React, { useState } from "react";
import type { ContactFormData } from "../types";
import { buildContactEmailPayload } from "../services/buildContactEmailPayload";
import { sendContactEmail } from "../services/sendContactEmail";

export type SubmissionStatus = "idle" | "loading" | "success" | "error";

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

export function useContactSubmission(endpoint: string) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneAccept = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      const payload = buildContactEmailPayload(formData);
      await sendContactEmail(endpoint, payload);
      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      console.error("Failed to send contact email:", error);
    }
  };

  return {
    formData,
    status,
    handleChange,
    handlePhoneAccept,
    handleSubmit,
  };
}

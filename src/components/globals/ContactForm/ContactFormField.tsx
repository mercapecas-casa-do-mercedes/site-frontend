import React from "react";
import { IMaskInput } from "react-imask";
import { cn } from "@/lib/utils";

export interface ContactFormFieldProps {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "textarea";
  rows?: number;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  required?: boolean;
  value?: string;
  mask?: string;
  onAccept?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputProps?: React.ComponentPropsWithoutRef<"input">;
  textareaProps?: React.ComponentPropsWithoutRef<"textarea">;
}

export function ContactFormField({
  id,
  label,
  name,
  placeholder,
  type = "text",
  rows = 4,
  className,
  inputClassName,
  labelClassName,
  required,
  value,
  mask,
  onAccept,
  onChange,
  inputProps,
  textareaProps,
}: ContactFormFieldProps) {
  const commonFieldClass =
    "w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#E51515] focus:ring-1 focus:ring-[#E51515]";

  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className={cn("mb-1.5 block text-sm font-medium text-zinc-400", labelClassName)}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
          className={cn(commonFieldClass, "resize-none", inputClassName)}
          {...textareaProps}
        />
      ) : mask ? (
        <IMaskInput
          id={id}
          name={name}
          mask={mask}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onAccept={(val) => onAccept?.(val as string)}
          className={cn(commonFieldClass, inputClassName)}
          {...(inputProps as React.ComponentPropsWithoutRef<"input">)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={cn(commonFieldClass, inputClassName)}
          {...inputProps}
        />
      )}
    </div>
  );
}

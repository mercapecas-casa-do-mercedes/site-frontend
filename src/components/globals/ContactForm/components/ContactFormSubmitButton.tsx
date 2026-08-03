import React from "react";
import { cn } from "@/lib/utils";

export interface ContactFormSubmitButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function ContactFormSubmitButton({
  children,
  className,
  type = "submit",
  ...props
}: ContactFormSubmitButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "w-full rounded-sm bg-[#E51515] py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#c41212] focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

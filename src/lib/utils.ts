import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(message?: string): string {
  const phone = "5571983216686";
  const defaultText = "Olá! Gostaria de solicitar um orçamento com a Leandro Santana Cerimonial.";
  const text = message && message.trim().length > 0 ? message : defaultText;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : "";
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

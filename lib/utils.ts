import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY = {
  name: "JNJ Fumigation Services",
  shortName: "JNJ",
  phone: "+923001234567",
  phoneDisplay: "+92 300 1234567",
  whatsapp: "923001234567",
  email: "info@jnjfumigation.com",
  address: "Business Bay, Karachi, Pakistan",
  url: "https://jnjfumigation.com",
};

export const whatsappLink = (msg = "Hi JNJ, I'd like a free pest control quote.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${COMPANY.phone}`;

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY = {
  name: "JNJ Fumigation Services",
  shortName: "JNJ",
  phone: "+923122007495",
  phoneDisplay: "0312 2007495",
  whatsapp: "923122007495",
  address: "Karachi, Pakistan",
  url: "https://jnjfumigation.com",
};

export const whatsappLink = (msg = "Hi JNJ, I'd like a free pest control quote.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${COMPANY.phone}`;

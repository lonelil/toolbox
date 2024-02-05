import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimedGreeting() {
  const currentHour = new Date().getHours();

  return currentHour < 5
    ? "Night"
    : currentHour < 12
    ? "Morning"
    : currentHour < 18
    ? "Afternoon"
    : "Evening";
}

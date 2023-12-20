import { startOfToday, toDate } from "date-fns";

import type { Dateable } from "./types";

/**
 * Return a german date string, e.g. "31.12.2019". Defaults to Europe/Berlin timezone.
 */
export function toGermanDateString(
  date: Dateable,
  options?: Intl.DateTimeFormatOptions
): string {
  return toDate(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
    ...options,
  });
}

/**
 * Return a german time string, e.g. "18:00". Defaults to Europe/Berlin timezone.
 */
export function toGermanTimeString(
  date: Dateable,
  options?: Intl.DateTimeFormatOptions
): string {
  return toDate(date).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
    ...options,
  });
}

/**
 * Return a german date and time string, e.g. "31.12.2019, 18:00". Defaults to Europe/Berlin timezone.
 */
export function toGermanDateTimeString(
  date: Dateable,
  options?: Intl.DateTimeFormatOptions
): string {
  return toDate(date).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
    ...options,
  });
}

/**
 * Return a german date and time string, e.g. "31.12.2019, 18:00". Defaults to Europe/Berlin timezone.
 * @deprecated Use `toGermanDateTimeString` instead.
 */
export function toGermanString(
  date: Dateable,
  options?: Intl.DateTimeFormatOptions
): string {
  return toGermanDateTimeString(date, options);
}

/**
 * Return the current time as a Date object.
 */
export function now(): Date {
  return new Date();
}

/**
 * Return the start of today as a Date object.
 */
export function today(): Date {
  return startOfToday();
}

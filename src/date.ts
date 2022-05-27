import { startOfToday } from 'date-fns'
import type { Dateable } from './types'

/**
 * Parse a date, an unix timestamp or a date string into a Date object.
 *
 * @example ```ts
 * const fromIsoString = toDate('2020-01-01T00:00:00.000Z')
 * const fromTimestamp = toDate(1577836800000)
 * const fromDateObject = toDate(new Date())
 * ```
 */
export function toDate(date: Dateable): Date {
  if (date instanceof Date) {
    // return date clone
    return new Date(date.getTime())
  }

  return new Date(date)
}

/**
 * Return a german date string, e.g. "31.12.2019".
 */
export function toGermanDateString(date: Dateable): string {
  return toDate(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Berlin',
  })
}

/**
 * Return a german time string, e.g. "18:00".
 */
export function toGermanTimeString(date: Dateable): string {
  return toDate(date).toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Berlin',
  })
}

/**
 * Return a german date and time string, e.g. "31.12.2019, 18:00".
 */
export function toGermanString(date: Dateable): string {
  date = toDate(date)

  return `${toGermanDateString(date)}, ${toGermanTimeString(date)}`
}

/**
 * Return the current time as a Date object.
 */
export function now(): Date {
  return new Date()
}

/**
 * Return the start of today as a Date object.
 */
export function today(): Date {
  return startOfToday()
}

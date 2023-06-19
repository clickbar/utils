import { expect, it } from 'vitest'
import {
  toDate,
  toGermanDateString,
  toGermanTimeString,
  toGermanString,
  toUtcDateString,
  toUtcTimeString,
  toUtcString,
} from './date'

it('toDate', () => {
  const fromIsoString = toDate('2020-01-01T00:00:00.000Z')
  const fromUnixTimestamp = toDate(1_577_836_800_000)
  expect(toDate(new Date())).toBeInstanceOf(Date)
  expect(fromIsoString).toBeInstanceOf(Date)
  expect(fromIsoString.getTime()).toBe(1_577_836_800_000)
  expect(fromUnixTimestamp).toBeInstanceOf(Date)
  expect(fromUnixTimestamp.getTime()).toBe(1_577_836_800_000)
})

it('toGermanDateString', () => {
  const date = toDate('2020-01-31T00:00:00.000Z')
  expect(toGermanDateString(date)).toBe('31.01.2020')
})

it('toUtcDateString', () => {
  const date = toDate('2020-01-31T00:00:00.000Z')
  expect(toUtcDateString(date)).toBe('31.01.2020')
})

it('toGermanTimeString', () => {
  // this is 01:00 because of the timezone offset
  const date = toDate('2020-01-01T00:00:00.000Z')
  expect(toGermanTimeString(date)).toBe('01:00')
})

it('toUtcTimeString', () => {
  // this is 01:00 because of the timezone offset
  const date = toDate('2020-01-01T00:00:00.000Z')
  expect(toUtcTimeString(date)).toBe('00:00')
})

it('toGermanString', () => {
  const date = toDate('2020-01-31T00:00:00.000Z')
  expect(toGermanString(date)).toBe('31.01.2020, 01:00')
})

it('toUtcString', () => {
  const date = toDate('2020-01-31T00:00:00.000Z')
  expect(toUtcString(date)).toBe('31.01.2020, 00:00')
})

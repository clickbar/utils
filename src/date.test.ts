import { toDate } from "date-fns";
import { expect, it } from "vitest";

import {
  toGermanDateString,
  toGermanTimeString,
  toGermanDateTimeString,
} from "./date";

it("toDate", () => {
  const fromIsoString = toDate("2020-01-01T00:00:00.000Z");
  const fromUnixTimestamp = toDate(1_577_836_800_000);
  expect(toDate(new Date())).toBeInstanceOf(Date);
  expect(fromIsoString).toBeInstanceOf(Date);
  expect(fromIsoString.getTime()).toBe(1_577_836_800_000);
  expect(fromUnixTimestamp).toBeInstanceOf(Date);
  expect(fromUnixTimestamp.getTime()).toBe(1_577_836_800_000);
});

it("toGermanDateString with default timezone", () => {
  const date = toDate("2020-01-31T00:00:00.000Z");
  expect(toGermanDateString(date)).toBe("31.01.2020");
});

it("toGermanDateString with UTC Timezone", () => {
  const date = toDate("2020-01-31T00:00:00.000Z");
  expect(toGermanDateString(date, { timeZone: "UTC" })).toBe("31.01.2020");
});

it("toGermanTimeString with default timezone", () => {
  // this is 01:00 because of the timezone offset
  const date = toDate("2020-01-01T00:00:00.000Z");
  expect(toGermanTimeString(date)).toBe("01:00");
});

it("toGermanTimeString with UTC timezone", () => {
  const date = toDate("2020-01-01T00:00:00.000Z");
  expect(toGermanTimeString(date, { timeZone: "UTC" })).toBe("00:00");
});

it("toGermanDateTimeString with default timezone", () => {
  const date = toDate("2020-01-31T00:00:00.000Z");
  expect(toGermanDateTimeString(date)).toBe("31.01.2020, 01:00");
});

it("toGermanDateTimeString with UTC timezone", () => {
  const date = toDate("2020-01-31T00:00:00.000Z");
  expect(toGermanDateTimeString(date, { timeZone: "UTC" })).toBe(
    "31.01.2020, 00:00"
  );
});

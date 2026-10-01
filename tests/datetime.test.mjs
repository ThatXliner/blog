import process from "node:process";
import assert from "node:assert/strict";
import { test } from "node:test";
import { formatDatetime } from "../src/utils/formatDatetime.ts";

test("UTC build renders the author's Pacific date and daylight saving time", () => {
  assert.equal(formatDatetime("2026-10-01T03:43:21Z", { timeZone: "America/Los_Angeles" }), "September 30, 2026 | 8:43 PM PDT");
  assert.equal(formatDatetime("2026-01-08T04:39:30Z", { timeZone: "America/Los_Angeles" }), "January 7, 2026 | 8:39 PM PST");
});

test("browser dates follow the reader's timezone", () => {
  process.env.TZ = "America/Los_Angeles";
  assert.equal(formatDatetime("2026-10-01T03:43:21Z"), "September 30, 2026 | 8:43 PM PDT");
  process.env.TZ = "Asia/Tokyo";
  assert.match(formatDatetime("2026-10-01T03:43:21Z"), /^October 1, 2026 \| 12:43 PM/);
});

test("date-only posts never change calendar day or invent a posting time", () => {
  process.env.TZ = "America/Los_Angeles";
  assert.equal(formatDatetime("2020-10-11T00:00:00Z", { dateOnly: true }), "October 11, 2020");
});

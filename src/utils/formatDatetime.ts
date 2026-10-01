export function formatDatetime(
  datetime: string | Date,
  { dateOnly = false, timeZone }: { dateOnly?: boolean; timeZone?: string } = {}
) {
  const value = new Date(datetime);
  // A calendar date has no timezone and must never move to the previous day.
  const date = value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: dateOnly ? "UTC" : timeZone,
  });
  if (dateOnly) return date;
  const time = value.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
    timeZoneName: "short",
  });
  return `${date} | ${time}`;
}

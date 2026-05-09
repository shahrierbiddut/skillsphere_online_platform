const compactFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1
});

export function formatCompactCount(value) {
  return compactFormatter.format(value);
}

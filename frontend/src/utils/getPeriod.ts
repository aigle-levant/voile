function century(cent: string) {
  const num = parseInt(cent);
  return !isNaN(num) ? `${num}00s` : cent;
}

export default function getPeriod(period: string) {
  if (!period) return "Unknown";
  if (period.includes("century")) {
    return century(period);
  } else if (period.includes("–")) {
    return period.slice(0, 4); // first year
  } else if (period.includes("s")) {
    return period; // decade
  } else {
    return period; // fallback
  }
}

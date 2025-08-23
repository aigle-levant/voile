import { getCountryCode } from "countries-list";
import { getContinentName } from "@brixtol/country-continent";

export default function getContinent(item: string) {
  if (!item) return "Unknown";
  const code = getCountryCode(item);
  if (!code) return "Unknown";
  let continent = getContinentName(code);
  if (!continent) return "Unknown";
  if (continent === "North America" || continent === "South America") {
    continent = "The Americas";
  }
  return continent;
}

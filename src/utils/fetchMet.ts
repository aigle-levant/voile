// components
import { contKeys, periodKeys, fashionKeys } from "./keywords";
import { type Artifact } from "./types";

function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function fetchMet(
  continent: string,
  period: string,
  count = 8,
): Promise<Artifact[]> {
  const cList = contKeys[continent] || [];
  const pList = periodKeys[period] || [];
  const fList = fashionKeys;

  if (!cList.length || !pList.length) {
    console.warn("Missing keywords for", continent, period);
    return [];
  }

  const cKey = random(cList);
  const pKey = random(pList);
  const fKey = random(fList);
  const query = `${cKey} ${pKey} ${fKey}`;

  const response = await fetch(
    `/api/met?query=${encodeURIComponent(query)}&count=${count}`,
  );
  if (!response.ok) return [];

  let data: { objectIDs?: number[] | null } | undefined;
  try {
    data = await response.json();
  } catch (error) {
    console.log("Failed to parse JSON:", error);
    return [];
  }

  if (!Array.isArray(data?.objectIDs) || data.objectIDs.length === 0) {
    console.log("No objectIDs returned for query:", query);
    return [];
  }

  const objectIDs = data.objectIDs.slice(0, count * 3);
  const results: Artifact[] = [];

  for (const id of objectIDs) {
    const objRes = await fetch(`/api/metproxy?endpoint=objects/${id}`);
    if (!objRes.ok) continue;

    try {
      const obj = await objRes.json();
      if (obj.primaryImageSmall) {
        results.push({
          objectID: obj.objectID,
          title: obj.title,
          primaryImageSmall: obj.primaryImageSmall,
          artistDisplayName: obj.artistDisplayName,
          objectDate: obj.objectDate,
          objectName: obj.objectName,
        });
      }
    } catch (err) {
      console.warn("Failed to parse object:", id, err);
    }

    if (results.length >= count) break;
  }

  return results;
}

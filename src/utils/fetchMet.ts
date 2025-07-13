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
  // list keys
  const cList = contKeys[continent] || [];
  const pList = periodKeys[period] || [];
  const fList = fashionKeys;
  // check for missing keywords
  if (!cList.length || !pList.length) {
    console.warn("Missing keywords for", continent, period);
    return [];
  }
  // randomize
  const cKey = random(cList);
  const pKey = random(pList);
  const fKey = random(fList);

  // fetch stuff from met api
  const query = `${cKey} ${pKey} ${fKey}`;
  const response = await fetch(
    `/api/metproxy?endpoint=search&q=${query}&hasImages=true&departmentId=8`,
  );
  // handle fail
  if (!response.ok) {
    console.error("Fetch failed with status", response.status);
    return [];
  }

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
    const objectResponse = await fetch(`/api/metproxy?endpoint=objects/${id}`);
    const obj = await objectResponse.json();

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
    if (results.length >= count) break;
  }
  console.log(results);
  return results;
}

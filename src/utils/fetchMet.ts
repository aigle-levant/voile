// GET
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
  // randomize
  const cKey = random(contKeys[continent]);
  const pKey = random(periodKeys[period]);
  const fKey = random(fashionKeys);

  // fetch stuff from met api
  const query = `${cKey} ${pKey} ${fKey}`;
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(query)}&hasImages=true&departmentId=8`,
  );
  const data = await response.json();

  if ((!data)?.objectIDs?.length) return [];
  const objectIDs = data.objectIDs.slice(0, count * 3);
  const results: Artifact[] = [];

  for (const id of objectIDs) {
    const objectResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
    );
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
  return results;
}

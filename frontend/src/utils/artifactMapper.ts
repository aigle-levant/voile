import { type Artifact } from "./types";

export default function artifactMapper(item: Artifact) {
  return {
    objectID: item.objectID,
    primaryImage: item.primaryImage,
    title: item.title,
    culture: item.culture,
    period: item.period,
    artistDisplayName: item.artistDisplayName,
    objectDate: item.objectDate,
    country: item.country,
  };
}

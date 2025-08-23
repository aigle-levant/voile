// components
import { ArtifactGridProps } from "../../utils/types";

import ArtifactCard from "./ArtifactCard";

export default function ArtifactGrid({ artifacts }: ArtifactGridProps) {
  // now time to filter by continent and period

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {artifacts.map((artifact) => (
        <ArtifactCard key={artifact.objectID} artifact={artifact} />
      ))}
    </div>
  );
}

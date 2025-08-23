// libraries
import { useState } from "react";
// components
import { type ArtifactCardProps } from "../../utils/types";

export default function ArtifactCard({ artifact }: ArtifactCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      id="card"
      className="flex h-72 max-h-[300px] w-[300px] cursor-pointer flex-col justify-between rounded-xl p-4 shadow"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className="absolute inset-0 max-h-full w-full overflow-hidden rounded bg-white shadow backface-hidden">
          <img
            src={artifact.primaryImage}
            alt={artifact.title}
            className="h-auto w-full rounded-xl"
          />
        </div>

        <div className="absolute inset-0 flex rotate-y-180 flex-col justify-center rounded bg-white p-4 shadow backface-hidden">
          <h3 className="text-sm font-semibold">{artifact.title}</h3>
          <p className="text-muted-foreground text-xs">
            {artifact.artistDisplayName || "Unknown"}
          </p>
          <p className="text-xs">{artifact.objectDate}</p>
          <p className="text-xs">{artifact.country}</p>
          <p className="text-xs">{artifact.culture}</p>
        </div>
      </div>
    </div>
  );
}

// components
import { type ArtifactCardProps, type Artifact } from "@/utils/types";
import ArtifactCard from "./ArtifactCard";
import { fetchMet } from "@/utils/fetchMet";
// libraries
import { useEffect, useState } from "react";

export default function ArtifactGrid({ continent, period }: ArtifactCardProps) {
  const [artifactVar, setArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadArtis = async () => {
      setLoading(true);
      const data = await fetchMet(continent, period, 8);
      setArtifacts(data);
      setLoading(false);
    };
    if (continent && period) {
      loadArtis();
    }
  }, [continent, period]);
  if (loading)
    return (
      <p className="font-sans text-2xl text-zinc-950 dark:text-zinc-50">
        Loading artifacts...
      </p>
    );
  if (!artifactVar.length) return <p>No fashion pieces found.</p>;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {artifactVar.map((artifact) => (
        <ArtifactCard key={artifact.objectID} artifactVar={artifact} />
      ))}
    </div>
  );
}

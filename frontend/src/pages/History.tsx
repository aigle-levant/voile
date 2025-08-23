// libraries
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
// components
import Tab from "../components/history/Tab.tsx";
import Filter from "../components/history/Filter.tsx";
import ArtifactGrid from "../components/history/ArtifactGrid.tsx";
import { type Artifact } from "../utils/types.ts";
import getContinent from "../utils/getContinent.ts";
import getPeriod from "../utils/getPeriod.ts";

export default function History() {
  const { t } = useTranslation("history");
  const [continent, setContinent] = useState("asia");
  const [period, setPeriod] = useState("20XX");

  const [artifactVar, setArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(false);

  // fetch the artifacts
  useEffect(() => {
    async function fetchArtis() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${continent}&hasImages=true`,
        );
        const data = await res.json();
        const objects = data.objectIDs.slice(0, 20);
        const details = objects.map((id: number) =>
          fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
          ).then((res) => res.json()),
        );
        const artifacts = await Promise.all(details);
        const filtered_array = artifacts.filter(
          (artifact: { country: string; period: string }) => {
            const cont = getContinent(artifact.country);
            const per = getPeriod(artifact.period);
            return cont === continent && per === period;
          },
        );
        setArtifacts(filtered_array);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchArtis();
  }, [continent, period]);
  console.log("Artifacts received:", artifactVar);
  if (loading)
    return (
      <p className="font-sans text-2xl text-zinc-950 dark:text-zinc-50">
        Loading artifacts...
      </p>
    );
  if (!artifactVar.length) return <p>No fashion pieces found.</p>;
  return (
    <main
      id="main"
      className="flex min-h-screen flex-grow flex-col overflow-x-hidden bg-zinc-50 px-3 py-10 text-center text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <h1 className="font-heading pt-10 text-4xl">{t("intro")}</h1>
      <section className="flex flex-col items-center justify-center py-10">
        <Tab currentContinent={continent} onContinentChange={setContinent} />
        <Filter currentPeriod={period} onPeriodChange={setPeriod} />
        <ArtifactGrid artifacts={artifactVar} />
      </section>
    </main>
  );
}

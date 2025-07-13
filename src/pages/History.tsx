// libraries
import { useTranslation } from "react-i18next";
import { useState } from "react";
// components
import Tab from "@/components/history/Tab";
import Filter from "@/components/history/Filter";
import ArtifactGrid from "@/components/history/ArtifactGrid";

export default function History() {
  const { t } = useTranslation("history");
  const [continent, setContinent] = useState("asia");
  const [period, setPeriod] = useState("20XX");

  return (
    <main
      id="main"
      className="flex min-h-screen flex-grow flex-col overflow-x-hidden bg-zinc-50 px-3 py-10 text-center text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <h1 className="font-heading pt-10 text-4xl">{t("intro")}</h1>
      <section className="flex flex-col items-center justify-center py-10">
        <Tab currentContinent={continent} onContinentChange={setContinent} />
        <Filter currentPeriod={period} onPeriodChange={setPeriod} />
        <ArtifactGrid continent={continent} period={period} />
      </section>
    </main>
  );
}

// libraries
import { useTranslation } from "react-i18next";
// components
import Tab from "@/components/history/Tab";

export default function History() {
  const { t } = useTranslation("history");
  return (
    <main
      id="main"
      className="flex min-h-screen flex-grow flex-col overflow-x-hidden bg-zinc-50 px-3 py-10 text-center text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <h1 className="font-heading pt-10 text-4xl">{t("intro")}</h1>
      <section className="mx-3 flex flex-col items-center justify-center py-10">
        <Tab />
      </section>
    </main>
  );
}

// libraries
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation("notFound");
  return (
    <main
      id="main"
      className="flex min-h-screen flex-grow flex-col overflow-x-hidden bg-zinc-50 px-3 py-10 text-center text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <h1 className="font-heading pt-10 text-4xl">{t("main")}</h1>
      <p className="text-l pt-4 font-sans sm:pb-43">{t("sub")}</p>
    </main>
  );
}

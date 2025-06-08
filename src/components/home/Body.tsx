// libraries
import { useTranslation } from "react-i18next";

export default function Body() {
  const { t } = useTranslation("home");
  return (
    <section id="body" className="my-10 p-10">
      <h2 className="font-heading mb-4 text-center text-4xl">{t("bodyOne")}</h2>
      <div className="mt-4 flex flex-row gap-10">
        <p className="font-sans">{t("bodyTwo")}</p>
        <p className="font-sans">{t("bodyThree")}</p>
      </div>
    </section>
  );
}

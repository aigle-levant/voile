// components
import ScrollVelocity from "../imported/ScrollVelocity.tsx";
// libraries
import { useTranslation } from "react-i18next";

export default function Marquee() {
  const { t } = useTranslation("navbar");
  return (
    <section
      id="marquee"
      className="w-full bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <ScrollVelocity texts={[t("marquee")]} velocity={100} />
    </section>
  );
}

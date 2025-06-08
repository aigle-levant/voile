// components
import ScrollVelocity from "../imported/ScrollVelocity.tsx";
// libraries
import { useTranslation } from "react-i18next";

export default function Marquee() {
  const { t } = useTranslation("home");
  return (
    <section id="marquee" className="w-full">
      <ScrollVelocity
        texts={[t("marquee")]}
        velocity={100}
        className="relative w-full overflow-hidden bg-zinc-950 py-10 text-zinc-50"
      />
    </section>
  );
}

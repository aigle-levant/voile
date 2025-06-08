// libraries
import { useTranslation } from "react-i18next";

export default function Marquee() {
  const { t } = useTranslation("home");
  const marqueeItems = t("marquee", { returnObjects: true }) as string[];
  return (
    <section
      id="marquee"
      className="w-full bg-zinc-50 py-4 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <div
        id="marquee-holder"
        className="w-full min-w-max overflow-hidden p-0.5 whitespace-nowrap"
      >
        <p className="font-heading animate-marquee inline-flex gap-10 text-4xl">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="font-heading text-4xl tracking-wider uppercase"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

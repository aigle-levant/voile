import ScrollVelocity from "../imported/ScrollVelocity.tsx";

export default function Marquee() {
  return (
    <section
      id="marquee"
      className="w-full bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <ScrollVelocity
        texts={[
          "AESTHETIC EN VOGUE STYLE HAUTE-COUTURE HOI POLLOI GAUCHE FASHION ENSEMBLE FAD",
        ]}
        velocity={100}
      />
    </section>
  );
}

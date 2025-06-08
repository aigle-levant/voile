// components
import AnimatedComponent from "./AnimatedComponent";

export default function AnimatedSection() {
  return (
    <section
      id="animated"
      className="my-4 bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <div className="flex flex-row">
        <div id="quote">
          <p className="font-quote">
            "Fashions fade, style is eternal" - Yves Saint-Laurent
          </p>
        </div>
        <AnimatedComponent />
      </div>
    </section>
  );
}

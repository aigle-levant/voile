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
          <p className="font-quote px-2 text-xl sm:ml-4 sm:text-3xl">
            "Fashions fade, style is eternal" - Yves Saint-Laurent
          </p>
        </div>
        <div id="video-card" className="my-2 ml-10 -rotate-30 sm:-rotate-20">
          <AnimatedComponent />
        </div>
      </div>
    </section>
  );
}

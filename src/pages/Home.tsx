// components
import HeroSection from "../components/home/HeroSection.tsx";
import Marquee from "../components/home/Marquee.tsx";
import AnimatedSection from "@/components/home/AnimatedSection.tsx";
// style
import "../assets/styles/marquee.css";

export default function Home() {
  return (
    <main
      id="main"
      className="overflow-x-hidden bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <HeroSection />
      <Marquee />
      <AnimatedSection />
    </main>
  );
}

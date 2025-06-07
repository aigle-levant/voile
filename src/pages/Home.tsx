// components
import HeroSection from "../components/home/HeroSection.tsx";
import Marquee from "../components/home/Marquee.tsx";
// style
import "../assets/styles/marquee.css";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <Marquee />
    </main>
  );
}

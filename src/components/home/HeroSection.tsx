// images
import imgOne from "../../assets/images/home/hero-1.png";

export default function HeroSection() {
  return (
    <section className="hero relative w-full sm:h-full">
      <div className="hero-img-container absolute inset-0 top-0 z-0 w-full bg-transparent">
        <h1 className="z-20">Voile</h1>
        <p className="z-20">Lyon</p>
        <div className="backdrop-blur-5 absolute top-0 left-[50%] z-5 w-[50%]"></div>
        <img src={imgOne} alt="." className="z-0" />
      </div>
    </section>
  );
}

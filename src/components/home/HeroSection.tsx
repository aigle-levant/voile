// images
import imgOne from "../../assets/images/home/hero-1.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <div
        id="hero wrapper"
        className="md-2 grid [grid-template-columns:repeat(10,1fr)] [grid-template-rows:repeat(10,1fr)]"
      >
        <span className="z-0 col-start-1 col-end-11 row-start-1 row-end-10 flex justify-center md:block">
          <img src={imgOne} alt="" className="object-cover" />
        </span>

        <div
          id="overlay"
          className="z-2 col-start-1 col-end-6 row-start-1 row-end-10 backdrop-blur backdrop-filter"
        ></div>
        <p className="font-title place-self-left z-50 col-start-2 col-end-2 row-start-3 row-end-3 text-4xl font-light text-gray-50 sm:text-5xl md:bottom-[35rem] md:left-[40%]">
          Voile
        </p>
        <p className="font-title place-self-left z-50 col-start-9 col-end-9 row-start-7 row-end-7 text-4xl font-extralight text-gray-50 sm:text-5xl md:bottom-[35rem] md:left-[40%]">
          Lyon
        </p>
      </div>
    </section>
  );
}

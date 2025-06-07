{
  /* <section className="hero relative w-full sm:h-full">
  <div className="hero-img-container absolute inset-0 top-0 z-0 w-full bg-transparent">
    <h1 className="z-20">Voile</h1>
    <p className="z-20">Lyon</p>
    <div className="backdrop-blur-5 absolute top-0 left-[50%] z-5 w-[50%]"></div>
    <img src={imgOne} alt="." className="z-0" />
  </div>
</section>; */
}
// images
import imgOne from "../../assets/images/home/hero-1.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <div
        id="hero wrapper"
        className="grid [grid-template-columns:repeat(10,1fr)] [grid-template-rows:repeat(10,1fr)]"
      >
        <span className="z-0 col-start-1 col-end-11 row-start-1 row-end-11 flex justify-center md:block">
          <img src={imgOne} alt="" className="object-cover" />
        </span>

        <div
          id="overlay"
          className="z-2 col-start-1 col-end-6 row-start-1 row-end-11 backdrop-blur backdrop-filter"
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

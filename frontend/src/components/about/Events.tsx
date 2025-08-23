// components
import TimelinePart from "../ui/TimelinePart.tsx";
import Slide from "../imported/Slide.tsx";
// images
import imageOne from "../../assets/images/about/about-gallery-1.jpg";
import imageTwo from "../../assets/images/about/about-gallery-2.jpg";
import imageThree from "../../assets/images/about/about-gallery-3.jpg";

export default function Events() {
  return (
    <section id="timeline" className="mx-10 mt-20 pt-5">
      <TimelinePart />
      <div id="timeline-gallery" className="mx-6 my-20">
        <Slide images={[imageOne, imageTwo, imageThree]} />
      </div>
    </section>
  );
}

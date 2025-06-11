// components
import Slide from "../imported/Slide";
// images
import imageOne from "../../assets/images/home/hero-2.png";
import imageTwo from "../../assets/images/home/hero-3.png";
import imageThree from "../../assets/images/home/hero-4.png";

export default function ImageGallery() {
  return (
    <section id="image-gallery" className="my-4 p-2">
      <Slide images={[imageOne, imageTwo, imageThree]} />
    </section>
  );
}

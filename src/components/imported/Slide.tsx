// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// images
import imageOne from "../../assets/images/home/hero-2.png";
import imageTwo from "../../assets/images/home/hero-3.png";
import imageThree from "../../assets/images/home/hero-4.png";

export default function Slide() {
  const gallery = [{ img: imageOne }, { img: imageTwo }, { img: imageThree }];
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {gallery.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image.img}
              alt={`Slide ${i + 1}`}
              className="h-[50%] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

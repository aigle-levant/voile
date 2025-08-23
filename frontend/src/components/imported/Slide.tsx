// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Slide({ images }: { images: string[] }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            alt={`Slide ${i + 1}`}
            loading="lazy"
            className="h-[50%] w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

"use client";
import Image from "next/image";
import Carousel1 from "@/assets/images/carousel-1.jpeg";
import Carousel2 from "@/assets/images/carousel-2.jpeg";
import Carousel3 from "@/assets/images/carousel-3.jpeg";
import LeftArrowIcon from "@/assets/icons/left-arrow.svg";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

export default function Carousel() {
  const [swipe, setSwipe] = useState({});
  const slidePrev = () => {
    swipe.slidePrev();
  };
  const slideNext = () => {
    swipe.slideNext();
  };

  return (
    <div className="relative w-full mb-8">
      <Swiper
        autoplay={{ delay: 3000 }}
        speed={1000}
        pagination={{ clickable: true }}
        onSwiper={(s) => setSwipe(s)}
        modules={[Pagination, Autoplay]}
        className="h-full w-full rounded-md"
        loop={true}
      >
        <SwiperSlide className={"rounded-md"}>
          <Image
            src={Carousel1}
            height={420}
            className={"w-full h-[420px] object-cover object-center"}
            alt={"img-1"}
          />
        </SwiperSlide>
        <SwiperSlide className={"rounded-md"}>
          <Image
            src={Carousel2}
            height={420}
            className={"w-full h-[420px] object-cover object-center"}
            alt={"img-2"}
          />
        </SwiperSlide>
        <SwiperSlide className={"rounded-md"}>
          <Image
            src={Carousel3}
            height={420}
            className={"w-full h-[420px] object-cover object-center"}
            alt={"img-3"}
          />
        </SwiperSlide>
      </Swiper>
      {/* carousel arrows */}
      <button
        onClick={slidePrev}
        className="absolute top-1/2 z-10 -left-5 w-10 h-10 rounded-lg bg-white flex items-center justify-center carousel-arrows"
      >
        <Image src={LeftArrowIcon} alt="left arrow" />
      </button>
      <button
        onClick={slideNext}
        className="absolute top-1/2 z-10 -right-5 w-10 h-10 rounded-lg bg-white flex items-center justify-center carousel-arrows"
      >
        <Image src={RightArrowIcon} alt="right arrow" />
      </button>
    </div>
  );
}

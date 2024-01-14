"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import LeftArrowIcon from "@/assets/icons/left-arrow.svg";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";
import { useState } from "react";

const MainProductsCarousel = ({ title, products }) => {
  const [swipe, setSwipe] = useState({});
  const slidePrev = () => {
    swipe.slidePrev();
  };
  const slideNext = () => {
    swipe.slideNext();
  };
  return (
    <div>
      {/*section title */}
      <div>
        <h1 className={"text-2xl font-bold"}>{title}</h1>
      </div>
      {/*  carousel  */}
      <div className={"w-full h-fit relative"}>
        <Swiper
          onSwiper={(s) => setSwipe(s)}
          slidesPerView={2}
          spaceBetween={"10px"}
          modules={[Pagination]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              className={"w-full bg-white rounded-xl"}
              key={product.id}
            >
              <div>
                <Image
                  src={product.img}
                  alt={product.title}
                  width={300}
                  height={208}
                />
              </div>
              {/* card body */}
              <div className={"p-2"}>
                <h3 className={"font-bold"}>{product.title}</h3>
                <p className={"product-card-text my-2"}>
                  {product.description}
                </p>
                <span>
                  {Number(product.price).toLocaleString()}
                  сум
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* carousel arrows */}
        <button
          onClick={slidePrev}
          style={{ zIndex: "9" }}
          className="absolute top-1/2 -left-3 md:-left-5  w-10 h-10 rounded-lg bg-white flex items-center justify-center carousel-arrows"
        >
          <Image src={LeftArrowIcon} alt="left arrow" />
        </button>
        <button
          onClick={slideNext}
          style={{ zIndex: "9" }}
          className="absolute top-1/2 -right-3 md:-right-5 w-10 h-10 rounded-lg bg-white flex items-center justify-center carousel-arrows"
        >
          <Image src={RightArrowIcon} alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default MainProductsCarousel;

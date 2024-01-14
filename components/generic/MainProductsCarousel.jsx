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
import Link from "next/link";

const MainProductsCarousel = ({ title, products }) => {
  const [swipe, setSwipe] = useState({});
  const slidePrev = () => {
    swipe.slidePrev();
  };
  const slideNext = () => {
    swipe.slideNext();
  };
  return (
    <div className={"mb-20"}>
      {/*section title */}
      <div>
        <h1 className={"text-2xl font-bold"}>{title}</h1>
      </div>
      {/*  carousel  */}
      <div className={"w-full h-fit relative"}>
        <Swiper
          onSwiper={(s) => setSwipe(s)}
          spaceBetween={"10px"}
          modules={[Pagination]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              className={"w-full bg-white rounded-xl"}
              key={product.id}
            >
              <Link className={"w-full"} href={`/product/${product.id}`}>
                <div className={"w-full flex justify-center"}>
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={300}
                    height={208}
                    className={"w-full"}
                  />
                </div>
                {/* card body */}
                <div className={"p-2"}>
                  <h3
                    className={
                      "font-bold product-card-title text-sm sm:text-lg md:text-base xl:text-lg"
                    }
                  >
                    {product.title}
                  </h3>
                  <p
                    className={
                      "product-card-text my-2 text-deepGray text-xs md:text-base"
                    }
                  >
                    {product.description}
                  </p>
                  <span className={"text-bold text-sm md:text-base"}>
                    {product.price}
                    сум
                  </span>
                </div>
              </Link>
              <div className={"p-2"}>
                <button
                  className={
                    "bg-gray w-full text-sm md:text-base py-2 rounded-md text-bold hover:bg-primary hover:text-white transition"
                  }
                >
                  В корзину
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* carousel arrows */}
        <button
          onClick={slidePrev}
          style={{ zIndex: "9" }}
          className="absolute top-1/3 -left-3 md:-left-5  w-10 h-10 rounded-lg bg-white flex items-center justify-center carousel-arrows"
        >
          <Image src={LeftArrowIcon} alt="left arrow" />
        </button>
        <button
          onClick={slideNext}
          style={{ zIndex: "9" }}
          className="absolute top-1/3 -right-3 md:-right-5 w-10 h-10 rounded-lg bg-white flex items-center justify-center carousel-arrows"
        >
          <Image src={RightArrowIcon} alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default MainProductsCarousel;

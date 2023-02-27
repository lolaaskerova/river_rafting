import React from "react";
import "./swiperSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SwiperSlider = (props) => {
  const { img1, img2, img3 } = props;
  return (
    <div className="swiper-slider-field">
      <Swiper
        centeredSlides={true}
        freeMode={true}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 5 },
          767: { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
      >
        <SwiperSlide>
          <div className="swiper-img-part">
            <img src={img1} alt="swiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-part">
            <img src={img2} alt="swiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-part">
            <img src={img3} alt="swiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-part">
            <img src={img1} alt="swiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-part">
            <img src={img2} alt="swiper" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-img-part">
            <img src={img3} alt="swiper" />
          </div>
        </SwiperSlide>
        <div className="swiper-buttons">
          <TbChevronLeft className="swiper-button-prev" />
          <TbChevronRight Name="swiper-button-next" />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AboutUsSlider.scss";
import aboutSwiper1 from "../../../assets/images/aboutswiper1.jpg";
import aboutSwiper2 from "../../../assets/images/aboutswiper2.jpg";
import aboutSwiper3 from "../../../assets/images/aboutswiper3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const AboutUsSlider = () => {
  return (
    <>
      <div className="smth">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={0}
          slidesOffsetAfter={0}
          loopFillGroupBlank={false}
          freeMode={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={aboutSwiper1} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aboutSwiper2} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aboutSwiper3} alt="swiper" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutUsSlider;

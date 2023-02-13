import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AboutUsSlider.scss";
import aboutSwiper3 from "../../../assets/images/aboutswiper1.jpg";
import aboutSwiper2 from "../../../assets/images/aboutswiper2.jpg";
import aboutSwiper1 from "../../../assets/images/aboutswiper3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperSlider from "../../SwiperSlider/SwiperSlider";

const AboutUsSlider = () => {
  return (
    <SwiperSlider img1={aboutSwiper1} img2={aboutSwiper2} img3={aboutSwiper3} />
  );
};

export default AboutUsSlider;

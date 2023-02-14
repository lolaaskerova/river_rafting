import React from 'react'
import "./careersWhy.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Navigation } from "swiper";
import aboutSwiper3 from "../../../assets/images/aboutswiper1.jpg";
import aboutSwiper2 from "../../../assets/images/aboutswiper2.jpg";
import aboutSwiper1 from "../../../assets/images/aboutswiper3.jpg";

const CareersWhy = () => {
    return (
        <div className="careers-why-field">
            <div className="container">
                <div className="careers-why">
                    <div className="careers-why-left">
                        <div className="careers-why-content">
                            <h3>Why come work for us?</h3>
                            <p>Nulla at mauris accumsan eros ullamcorper tincidunt at nec ipsum. In iaculis est ut sapien ultrices, vel feugiat nulla lobortis. Donec nec quam accumsan, lobortis. <br /><br />
                                Integer at erat malesuada, tincidunt orci nec, aliquet quam. Nulla accumsan sapien eu ultrices pulvinar. Proin tincidunt augue a auctor placerat. In iaculis est ut sapien ultrices, vel feugiat nulla. Morbi in fermentum erat. Vivamus porta velit interdum, iaculis ipsum ultrices, maximus magna. Quisque sagittis ac est non fringilla. Mauris viverra lectus non diam dictum, quis pretium est iaculis.</p>
                        </div>
                    </div>
                    <div className="careers-why-right">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
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
                        >
                            <SwiperSlide>
                                <div className="swiper-img-part">
                                    <img src={aboutSwiper3} alt="swiper" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-img-part">
                                    <img src={aboutSwiper2} alt="swiper" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-img-part">
                                    <img src={aboutSwiper1} alt="swiper" />
                                </div>
                            </SwiperSlide>
                            <div className="swiper-buttons">
                                <TbChevronLeft className="swiper-button-prev careers-why-swiper" />
                                <TbChevronRight className="swiper-button-next careers-why-swiper" />
                            </div>
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareersWhy
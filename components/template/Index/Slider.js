import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Styles from '@/styles/slider.module.css'

// import required modules
import { Navigation } from "swiper/modules";
const Slider = () => {
  return (
      <Swiper loop={true} navigation={true} modules={[Navigation]} className={Styles.swiper}>
        <SwiperSlide className={Styles.swiper_slide}>
                    <div class={`carousel-caption d-flex flex-column align-items-center justify-content-center ${Styles.slider_caption}`} style={{ backgroundImage : "url(img/carousel-1.jpg)"}}>
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
                    <div className={`carousel-caption d-flex flex-column align-items-center justify-content-center ${Styles.slider_caption}`} style={{ backgroundImage : "url(img/carousel-2.jpg)"}}>
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Slider;

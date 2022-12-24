import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import {
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/home.scss"
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
function Home() {
  return (
    <>
      <Header />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="images1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="images2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="images3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="images4" />
        </SwiperSlide>
      </Swiper>
      <Nav />
    </>
  );
}

export default Home;

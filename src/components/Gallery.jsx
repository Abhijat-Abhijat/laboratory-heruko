// import React from "react";
import React, { useState } from "react";
import Papa from "papaparse";
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
import "../styles/gallery.scss"
const Home = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSHxuWne8qzfCA-b0JvH7FUd_WH_UQLuoL8A8kYW32eKhLEOygxFZCZps-YBAeaMxZi06xaHJjYq_S-/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const publication = Array.from(data);
  return (
    <>
    <Header/>
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
        {publication.map((data) => (
        <SwiperSlide key={data.pics}>
          <img src={data.pics} alt="images" />
          <p>{data.title}</p>
        </SwiperSlide>
        ))}
      </Swiper>
    <Nav/>
    </>
  );
};

export default Home;

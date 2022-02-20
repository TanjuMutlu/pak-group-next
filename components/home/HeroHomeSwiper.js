import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "styles/home/HeroHome.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import { Box } from "@mui/material";
import carauselItems from "includes/home/ImgCarauselItems";
SwiperCore.use([EffectFade, Autoplay]);

export default function HeroHomeSwiper() {
  return (
    <Box width="100%">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {carauselItems.map((item) => (
          <SwiperSlide key="slide">
            <div className={styles.heroSlideImgGradient} key="1" />
            <Image
              src={item}
              alt={`${item}`}
              key={`${item}`}
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

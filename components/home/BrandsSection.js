import React from "react";
import styles from "styles/home/Sections.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import swipeItems from "includes/home/SwipeItems";

SwiperCore.use([Autoplay, Pagination]);

export default function BrandsSection() {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box className={styles.sectionBrandsContainer}>
      <Box className={styles.titleBox}>
        <Typography className={styles.title}>Markalarımız</Typography>
        <div className={styles.redLine} />
      </Box>
      <Swiper
        className={styles.swiper}
        slidesPerView={matches ? 5 : 1}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        navigation={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
      >
        {swipeItems.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <Link href={item.link} passHref>
              <Image
                src={item.img}
                alt={`${item}`}
                width="240px"
                height="180px"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

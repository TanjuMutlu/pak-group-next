import React from "react";
import styles from "styles/home/HeroHome.module.css";
import HeroHomeSwiper from "components/home/HeroHomeSwiper";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import SectorButtons from "base/SectorButtons";

export default function HeroHome() {
  return (
    <Box className={styles.main}>
      <Box className={styles.swiperWrap}>
        <HeroHomeSwiper />
        <Box className={styles.child}>
          <Typography variant="h6" className={styles.title}>
            İnsan için hijyen ve kalite üretiyor, toplumsal sorumluluklarımızı
            yerine getiriyor, sürdürülebilir hayat ve çevre için tüm gücümüzle
            çalışıyoruz.
          </Typography>
          <Button
            disableRipple={true}
            className={styles.infoButton}
            variant="contained"
          >
            <Typography variant="h5">Detaylı Bilgi</Typography>
          </Button>
        </Box>
        <Box className={styles.cardBox}>
          <SectorButtons />
        </Box>
      </Box>
    </Box>
  );
}

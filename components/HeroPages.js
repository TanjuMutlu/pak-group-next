import styles from "styles/HeroPages.module.css";
import { Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import BreadCrumb from "base/BreadCrumb";

export default function HeroPages({
  title,
  subtitle,
  background,
  breadTitle,
  breadBrand,
  breadSector,
}) {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            height: matches ? "600px" : "400px",
            width: "2000px",
          }}
        >
          <Image src={background} layout="fill" alt="background" />
        </div>
        <Box className={styles.titles}>
          <Typography className={styles.subtitle}>{subtitle}</Typography>
          <Typography variant="subtitle1" className={styles.title}>
            {title}
          </Typography>
        </Box>
        <div className={styles.breadCrumbWrap}>
          <BreadCrumb
            title={breadTitle}
            brand={breadBrand}
            sector={breadSector}
          />
        </div>
      </Box>
    </>
  );
}

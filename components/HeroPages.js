import styles from "styles/HeroPages.module.css";
import { Typography } from "@mui/material";
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
          <Image src={background} height={1000} width={3000} alt="background" />
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

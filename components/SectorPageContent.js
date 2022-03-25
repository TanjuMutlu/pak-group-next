import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import SectorButtons from "base/SectorButtons";
import styles from "styles/SectorPages.module.css";

export default function SectorPageContent({
  sectorName,
  sectorIcon,
  title,
  img,
  bodyLeft,
  bodyRight,
  sectorCompanies,
}) {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.titleContainer}>
          <Image src={sectorIcon} alt="sectorIcon" />
          <Typography
            variant="h3"
            sx={{ maxWidth: "900px", marginLeft: "10px", marginRight: "10px" }}
          >
            {title}
          </Typography>
          <div className={styles.titleRedline} />
        </Box>

        <Box className={styles.imgBox}>
          <Image src={img} alt="img" />
          <Box className={styles.bodyBox}>
            <Typography className={styles.body}>{bodyLeft}</Typography>
            <Typography className={styles.body}>{bodyRight}</Typography>
          </Box>
        </Box>

        <Box className={styles.brandsAndCompanies}>
          <Typography variant="h3" sx={{ margin: "50px 0 0 0" }}>
            {sectorName} Marka ve Şirketleri
          </Typography>
          <div className={styles.titleRedline} />
          {sectorCompanies.map((item, index) => (
            <Box className={styles.companyCard} key={index}>
              <Box className={styles.companyCardTexts}>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="body1">{item.body} </Typography>
                <Link href={item.link} passHref>
                  <Typography variant="h1">Detayli Bilgi</Typography>
                </Link>
              </Box>
              <div className={styles.imgWrap}>
                <Image src={item.img} layout="fill" alt="sectorImg" />
              </div>
            </Box>
          ))}
          <div style={{ height: "50px" }} />
        </Box>

        <Box className={styles.sectorButtons}>
          <Typography className={styles.sectorButtonsTitle}>
            Faaliyet Gösterdiğimiz Sektörler
          </Typography>
          <div className={styles.sectorButtonsRedline} />
          <SectorButtons />
        </Box>
      </Box>
    </>
  );
}

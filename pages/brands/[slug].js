import { Typography, Box, Button } from "@mui/material";
import axios from "axios";
import SectorButtons from "base/SectorButtons";
import HeroPages from "components/HeroPages";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/BrandsSlug.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SimpleBrand = ({ brand }) => {
  return (
    <>
      <HeroPages
        background="/backgrounds/about-page.jpg"
        title={brand.title}
        breadTitle={brand.title}
      />
      <Box className={styles.brandContentContainer}>
        <Box className={styles.descriptionAndBody}>
          <Typography className={styles.description}>
            {brand.description}
          </Typography>
          <Box className={styles.bodyBox}>
            {brand.body.map((item, index) => (
              <>
                {index == 2 ? (
                  brand.bodyImg ? (
                    <Image
                      src={brand.bodyImg}
                      width={790}
                      height={400}
                      alt="brandImg"
                    />
                  ) : null
                ) : null}
                {index % 2 == 0 ? (
                  <Typography className={styles.title}>{item}</Typography>
                ) : null}

                {index % 2 == 1 ? (
                  <Typography className={styles.body}> {item} </Typography>
                ) : null}
              </>
            ))}
          </Box>
        </Box>
        <Box className={styles.logoAndContacts}>
          <div className={styles.logo}>
            <Image src={brand.logo} width={375} height={250} alt="logo" />
          </div>
          <Box className={styles.contacts}>
            <div className={styles.contactItem}>
              <Typography className={styles.contactName}>
                Web sitesi:
              </Typography>
              <Link href="https://www.pakmaya.com" passHref>
                <Typography className={styles.contactLink}>
                  {brand.webSitesi}
                </Typography>
              </Link>
            </div>
            <div className={styles.contactItem}>
              <Typography className={styles.contactName}>E-Posta:</Typography>
              <Link href="https://www.pakmaya.com" passHref>
                <Typography className={styles.contactLink}>
                  {brand.ePosta}
                </Typography>
              </Link>
            </div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.navButtons}>
        <Button className={styles.buttonL} disableRipple>
          <ArrowBackIosIcon fontSize="s" />
          <Typography className={styles.buttonText}>Onceki marka</Typography>
        </Button>
        <Button className={styles.buttonR} disableRipple>
          <Typography className={styles.buttonText}>Sonraki Marka</Typography>{" "}
          <ArrowForwardIosIcon fontSize="s" />
        </Button>
      </Box>
      <div className={styles.sectorButtonsContainer}>
        <Typography className={styles.sectorButtonsTitle}>
          Faaliyet Gösterdiğimiz Sektörler
        </Typography>
        <div className={styles.sectorButtonsRedLine} />
        <SectorButtons />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:3000/api/${context.params.slug}`,
  });
  const data = res.data;
  return {
    props: {
      brand: data,
    },
  };
};

export default SimpleBrand;

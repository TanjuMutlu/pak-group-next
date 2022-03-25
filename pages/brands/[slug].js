import { Typography, Box, Button, useMediaQuery } from "@mui/material";
import axios from "axios";
import SectorButtons from "base/SectorButtons";
import HeroPages from "components/HeroPages";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/BrandsSlug.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SimpleBrand = ({ brand }) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <HeroPages
        background="/backgrounds/about-page.jpg"
        title={brand.title}
        breadTitle={brand.title}
      />
      <Box className={styles.brandContentContainer}>
        {matches ? null : (
          <div className={styles.logo}>
            <Image src={brand.logo} width={375} height={250} alt="logo" />
          </div>
        )}
        <Box className={styles.descriptionAndBody}>
          <Typography className={styles.description}>
            {brand.description}
          </Typography>
          <Box className={styles.bodyBox}>
            {brand.body.map((item, index) => (
              <div key={index}>
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
              </div>
            ))}
          </Box>
        </Box>
        {matches ? null : (
          <Box className={styles.logoAndContacts}>
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
        )}
        {matches ? null : (
          <Box className={styles.navButtons}>
            <Button className={styles.buttonL} disableRipple>
              <ArrowBackIosIcon color="primary" fontSize="s" />
              Onceki marka
            </Button>
            <Button className={styles.buttonR} disableRipple>
              Sonraki Marka
              <ArrowForwardIosIcon color="primary" fontSize="s" />
            </Button>
          </Box>
        )}
        {matches ? (
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
        ) : null}
      </Box>
      {matches ? (
        <Box className={styles.navButtons}>
          <Button className={styles.buttonL} disableRipple>
            <ArrowBackIosIcon color="primary" fontSize="s" />
            Onceki marka
          </Button>
          <Button className={styles.buttonR} disableRipple>
            Sonraki Marka
            <ArrowForwardIosIcon color="primary" fontSize="s" />
          </Button>
        </Box>
      ) : null}
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

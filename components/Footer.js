import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "styles/HeaderAndFooter.module.css";
import linkTitles from "includes/FooterLinks";

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <Box>
        <Typography sx={{ fontSize: "14px" }}>
          © 2021 Pak Holding. Tüm hakları saklıdır.
        </Typography>
      </Box>

      <Box className={styles.footerLinksContainer}>
        {linkTitles.map((item, index) => {
          return (
            <Link href={item.link} passHref={true} key={index}>
              <Typography className={styles.footerLink}>
                {item.title}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

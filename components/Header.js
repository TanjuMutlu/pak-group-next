import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "styles/HeaderAndFooter.module.css";
import headerLogo from "public/header-logo-transparent.svg";
import headerLogoWhite from "public/header-logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import navItems from "includes/NavItems";

export default function Header() {
  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);
  return (
    <>
      {header ? (
        <Box className={styles.headerContainerWhite}>
          <Link href="/" passHref={true}>
            <Image
              src={headerLogoWhite}
              className={styles.headerLogo}
              width={88}
              height={74}
              alt="header logo"
            />
          </Link>
          <Grid container direction={"row"} xs={9.4} justifyContent="flex-end">
            {navItems.map((item, index) => {
              return (
                <>
                  <Grid>
                    <Link href={item.link} passHref={true} key={index}>
                      <Typography
                        variant="h4"
                        color="#000"
                        className={styles.headerLink}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Box className={styles.headerContainer}>
          <Link href="/" passHref={true}>
            <Image
              src={headerLogo}
              className={styles.headerLogo}
              width={98}
              height={84}
              alt=""
            />
          </Link>
          <Grid container direction={"row"} xs={9.3} justifyContent="flex-end">
            {navItems.map((item, index) => {
              return (
                <>
                  <Grid>
                    <Link href={item.link} passHref={true} key={index}>
                      <Typography
                        variant="h4"
                        color="#fff"
                        className={styles.headerLink}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

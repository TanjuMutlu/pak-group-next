import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import styles from "styles/HeaderAndFooter.module.css";
import headerLogo from "public/header-logo-transparent.svg";
import headerLogoWhite from "public/header-logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "base/HamburgerMenu";
import navItems from "includes/NavItems";
import HeaderDropdown from "base/HeaderDropdown";

export default function Header() {
  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  const matches = useMediaQuery("(min-width:745px)");
  window.addEventListener("scroll", changeHeader);
  return (
    <>
      {header ? (
        <Box className={styles.headerContainerWhite}>
          <Box className={styles.headerWrap}>
            <Link href="/" passHref>
              <Image
                src={headerLogoWhite}
                className={styles.headerLogo}
                width={88}
                height={74}
                alt="header logo"
              />
            </Link>
            <Grid
              container
              item
              direction={"row"}
              xs={11}
              justifyContent="flex-end"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {matches ? (
                navItems.map((item, index) => {
                  return index == 1 ? (
                    <HeaderDropdown title="Sektorler" arrowIcon key={index} />
                  ) : index == 4 ? (
                    <HeaderDropdown title="TR" key={index} />
                  ) : (
                    <Grid key={index}>
                      <Link href={item.link} passHref>
                        <Typography
                          variant="h4"
                          color="#000"
                          className={styles.headerLink}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </Grid>
                  );
                })
              ) : (
                <HamburgerMenu />
              )}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box className={styles.headerContainer}>
          <Box className={styles.headerWrap}>
            <Link href="/" passHref>
              <Image
                src={headerLogo}
                className={styles.headerLogo}
                width={98}
                height={84}
                alt=""
              />
            </Link>
            <Grid
              container
              item
              direction={"row"}
              xs={11}
              justifyContent="flex-end"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {matches ? (
                navItems.map((item, index) => {
                  return index == 1 ? (
                    <div className={styles.headerLink} key={index}>
                      <HeaderDropdown title="Sektorler" arrowIcon />
                    </div>
                  ) : index == 4 ? (
                    <HeaderDropdown title="TR" key={index} />
                  ) : (
                    <Grid key={index}>
                      <Link href={item.link} passHref>
                        <Typography
                          variant="h4"
                          color="#fff"
                          className={styles.headerLink}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </Grid>
                  );
                })
              ) : (
                <HamburgerMenu />
              )}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}

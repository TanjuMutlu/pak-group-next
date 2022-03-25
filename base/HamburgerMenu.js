import {
  Grid,
  Typography,
  Button,
  Dialog,
  IconButton,
  Box,
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import styles from "styles/Includes.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import hamburgerItems from "includes/HamburgerItems";
import Link from "next/link";
import HamburgerAccordion from "./HamburgerAccordion";
import iconWhite from "public/iconWhite.svg";
import iconBlack from "public/iconBlack.svg";
import cross from "public/crossIcon.svg";

export default function HamburgerMenu() {
  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid>
        <Button
          style={{ left: "15px", background: "transparent" }}
          onClick={handleClickOpen}
        >
          <Image
            src={header ? iconBlack : iconWhite}
            passHref
            width={26}
            height={26}
            alt="iconMenu"
          />
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose}>
          <Box className={styles.hamburgerMenuLogo}>
            <Image
              src="/header-logo-white.svg"
              width={65}
              height={65}
              alt="logo"
            />
            <IconButton
              className={styles.hamburgerMenuCloseButton}
              color="common"
              onClick={handleClose}
            >
              <Image
                src={cross}
                passHref
                width={26}
                height={26}
                alt="iconClose"
              />
            </IconButton>
          </Box>
          <Box className={styles.hamburgerMenuItems}>
            {hamburgerItems.map((item, index) => (
              <div key={index}>
                <Box className={styles.hamburgerMenuItemsChild}>
                  {item.title ? (
                    <Link href={item.link} passHref>
                      <Button
                        style={{ background: "transparent" }}
                        onClick={handleClose}
                      >
                        <Typography
                          sx={{ marginLeft: "13px" }}
                          className={styles.hamburgerMenuTitle}
                        >
                          {item.title}
                        </Typography>
                      </Button>
                    </Link>
                  ) : (
                    <HamburgerAccordion
                      closeDialog={handleClose}
                      accordionType={index == 1 ? "sectors" : "languange"}
                    />
                  )}
                </Box>
              </div>
            ))}
          </Box>
        </Dialog>
      </Grid>
    </>
  );
}

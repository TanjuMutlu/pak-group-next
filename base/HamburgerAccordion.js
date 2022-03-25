import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import styles from "styles/Includes.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LanguageIcon from "@mui/icons-material/Language";
import HamburgerAccordionItem from "./HamburgerAccordionItem";
import accordionItems from "includes/AccordionItems";

export default function HamburgerAccordion(props) {
  const [expand, setExpand] = useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (
    <>
      <Accordion disableGutters elevation={false} sx={{ maxWidth: "600px" }}>
        <AccordionSummary
          onClick={toggleAcordion}
          classes={{
            content: styles.accordionSummary,
            root: styles.accordionRoot,
          }}
        >
          {props.accordionType == "sectors" ? (
            <Typography className={styles.hamburgerMenuTitle}>
              SEKTORLER
              <ArrowForwardIosIcon
                sx={{
                  transform: expand ? "rotateZ(90deg)" : "none",
                  transition: "0.2s",
                  marginLeft: "10px",
                  fontSize: "15px",
                  color: "gray",
                }}
              />
            </Typography>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon />
              <Typography className={styles.hamburgerMenuTitle}>TR</Typography>
            </div>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {props.accordionType == "sectors" ? (
            <Box className={styles.HamburgerAccordionItems}>
              {accordionItems.map((item, index) => (
                <Button
                  onClick={props.closeDialog}
                  key={index}
                  style={{ background: "transparent" }}
                >
                  <HamburgerAccordionItem
                    icon={item.icon}
                    redIcon={item.redIcon}
                    title={item.title}
                    href={item.href}
                  />
                </Button>
              ))}
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{ marginLeft: "20px" }}
                className={styles.hamburgerMenuTitle}
                color={"#000"}
              >
                TR
              </Typography>
              <Typography
                sx={{ marginLeft: "20px" }}
                className={styles.hamburgerMenuTitle}
                color={"gray"}
              >
                EN
              </Typography>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

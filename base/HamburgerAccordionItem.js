import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import styles from "styles/Includes.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HamburgerAccordionItem(props) {
  const [isHovering, setIsHovered] = useState("noHover");

  return (
    <Link href={props.href} onClick={props.closeDialog} passHref>
      <Box
        onMouseEnter={() => setIsHovered("hover")}
        onMouseLeave={() => setIsHovered("noHover")}
        className={styles.HamburgerAccordionItem}
      >
        <Image
          src={isHovering === "hover" ? props.redIcon : props.icon}
          height={30}
          width={30}
          alt="icon image"
        />
        <Typography
          sx={{ transition: "0.2s", margin: "15px" }}
          color={isHovering === "hover" ? "primary" : "common"}
        >
          {props.title}
        </Typography>
      </Box>
    </Link>
  );
}

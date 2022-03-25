import React from "react";
import styles from "styles/Includes.module.css";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import SectorItems from "includes/SectorButtonItems";
import SectorItemsMobile from "includes/SectorButtonItemsMobile";

export default function SectorButtons() {
  const matches = useMediaQuery("(min-width:900px)");
  const items = matches ? SectorItems : SectorItemsMobile;
  return (
    <Box className={styles.sectorBox}>
      {items.map((item, index) => (
        <Link
          href={item[2]}
          key={index}
          className={styles.sectorItemLink}
          passHref
        >
          <div className={styles.overlay}>
            {matches ? (
              <>
                <Image src={item[1]} width={240} height={200} alt="" />
                <Image
                  className={styles.sectorItemImg}
                  src={item[0]}
                  width={240}
                  height={200}
                  layout="responsive"
                  alt=""
                />
              </>
            ) : (
              <>
                <Image src={item[1]} width={80} height={80} alt="" />
                <Image
                  className={styles.sectorItemImg}
                  src={item[0]}
                  width={120}
                  height={100}
                  layout="responsive"
                  alt=""
                />
              </>
            )}
          </div>
        </Link>
      ))}
    </Box>
  );
}

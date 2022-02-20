import React from "react";
import styles from "styles/Includes.module.css";
import { Box } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import SectorItems from "includes/SectorButtonItems";

export default function SectorButtons() {
  return (
    <Box className={styles.sectorBox}>
      {SectorItems.map((item, index) => (
        <Link
          href={item[2]}
          key={index}
          className={styles.sectorItemLink}
          passHref={true}
        >
          <div className={styles.overlay}>
            <Image src={item[1]} width={240} height={200} alt="" />
            <Image
              className={styles.sectorItemImg}
              src={item[0]}
              width={240}
              height={200}
              layout="responsive"
              alt=""
            />
          </div>
        </Link>
      ))}
    </Box>
  );
}

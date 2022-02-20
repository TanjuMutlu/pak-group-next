import Link from "next/link";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Typography } from "@mui/material";
import styles from "styles/brands.module.css";

export default function TabLinkItem({ title, link }) {
  return (
    <>
      <Link href={`${link}`} passHref={true} key="tab panel link">
        <div className={styles.tabPanelLink}>
          <ArrowForwardIosOutlinedIcon
            sx={{ margin: "5px" }}
            color="primary"
            fontSize="m"
          />
          <Typography className={styles.tabPanelTitle}>{title}</Typography>
        </div>
      </Link>
    </>
  );
}

import * as React from "react";
import styles from "styles/brands.module.css";
import HeroPages from "components/HeroPages";
import background from "public/backgrounds/about-page.jpg";
import { Typography, Tab, Tabs, Box } from "@mui/material";
import Link from "next/link";
import tabPanelItems from "includes/BrandsData";
import TabPanel from "base/TabPanel";
import TabLinkItem from "base/TabLinkItem";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function Brands() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className={styles.container}>
        <HeroPages
          background={background}
          title="Şirketlerimiz"
          breadTitle="Şirketlerimiz"
        />
        <Box className={styles.tabBox}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            {categories.map((item, index) => (
              <Tab
                className={styles.tab}
                key={index}
                value={index}
                label={
                  item == "TUMU" ? (
                    <Typography className={styles.tabTitle} color="primary">
                      {item}
                    </Typography>
                  ) : (
                    <Typography className={styles.tabTitle}>{item}</Typography>
                  )
                }
              />
            ))}
          </Tabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <Box className={styles.tabPanelWrap}>
              {tabPanelItems.map((item, index) => (
                <Link href={item.link} passHref={true} key={index}>
                  <div className={styles.tabPanelLink}>
                    <ArrowForwardIosOutlinedIcon
                      sx={{ margin: "5px" }}
                      color="primary"
                      fontSize="m"
                    />
                    <Typography className={styles.tabPanelTitle}>
                      {item.title}
                    </Typography>
                  </div>
                </Link>
              ))}
            </Box>
          </TabPanel>

          {categories.map((category, index) => (
            <TabPanel value={value} index={index} key={index}>
              <Box className={styles.tabPanelWrap}>
                {tabPanelItems.map((item) => (
                  <>
                    {item.category == `${category}` ? (
                      <TabLinkItem title={item.title} link={item.link} />
                    ) : null}
                  </>
                ))}
              </Box>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
}
const categories = ["TUMU", "GIDA", "AMBALAJ", "YEM", "EMLAK", "PORTFOY"];

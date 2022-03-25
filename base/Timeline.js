import { Typography, Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import styles from "styles/Timeline.module.css";
import TimelineItems from "includes/Timeline";

export default function Timeline() {
  const matches = useMediaQuery("(min-width:800px)");
  return (
    <Box className={styles.timeline}>
      <div className={styles.line} />
 
      {TimelineItems.map((item, index) =>
        matches ? (
          index % 2 == 0 ? (
            <Box key={index} className={styles.timlelineItemBox}>
              <Box className={styles.bodyBox}>
                <Typography sx={{ textAlign: "end" }} className={styles.title}>
                  {item.title}
                </Typography>
                <Typography sx={{ textAlign: "end" }} className={styles.body}>
                  {item.body}
                </Typography>
              </Box>
              <Image
                src="/timeline/circle.png"
                height={24}
                width={24}
                alt="circle"
              />
              <div className={styles.img}>
                <Image src={item.img} alt="itemImg" height={220} width={408} />
              </div>
            </Box>
          ) : (
            <Box key={index} className={styles.timlelineItemBox}>
              <div className={styles.img}>
                <Image src={item.img} alt="itemImg" height={220} width={408} />
              </div>
              <Image
                src="/timeline/circle.png"
                height={24}
                width={24}
                alt="circle"
              />
              <Box className={styles.bodyBox}>
                <Typography className={styles.title}>{item.title}</Typography>
                <Typography className={styles.body}>{item.body}</Typography>
              </Box>
            </Box>
          )
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <div
                style={{
                  paddingRight: "10px",
                  position: "absolute",
                  margin: "70px 0 0 10px",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/timeline/circle.png"
                  height={24}
                  width={24}
                  alt="circle"
                />
              </div>
              <div className={styles.lineMobile} />
            </div>
            <Box
              key={index}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className={styles.timlelineItemMobile}>
                <Box className={styles.bodyBox}>
                  <Typography className={styles.title}>{item.title}</Typography>
                  <Typography className={styles.body}>{item.body}</Typography>
                </Box>
              </div>
              <div className={styles.imgMobile}>
                <Image
                  src={item.img}
                  alt="itemImg"
                  width={400}
                  height={200}
                  layout="responsive"
                />
              </div>
            </Box>
          </div>
        )
      )}
    </Box>
  );
}

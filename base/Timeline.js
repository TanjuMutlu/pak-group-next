import { Typography, Box } from "@mui/material";
import Image from "next/image";
import styles from "styles/Timeline.module.css";
import TimelineItems from "includes/Timeline";

export default function Timeline() {
  return (
    <Box className={styles.timeline}>
      <div className={styles.line} />

      {TimelineItems.map((item, index) =>
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
      )}
    </Box>
  );
}

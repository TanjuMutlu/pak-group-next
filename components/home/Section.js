import React from "react";
import styles from "styles/home/Sections.module.css";
import ReactPlayer from "react-player";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import buttonImg from "public/home/videoPlayerImg.svg";
import buttonImgMobile from "public/home/video-button-mobile.svg";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    background: "none",
    overflow: "hidden",
    boxShadow: "none",
  },
}));
export default function SectionHome() {
  const matches1200 = useMediaQuery("(min-width:1000px)");
  const matches900 = useMediaQuery("(min-width:900px)");
  const matches600 = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={styles.sectionContainer}>
      <div className={styles.imagesWrap}>
        <div className={styles.paralellogramWrap}>
          <div className={styles.paralellogramTexts}>
            {paralellogramItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: (index + 1) * 30,
                }}
              >
                <Image
                  src={item.icon}
                  width={45}
                  height={45}
                  alt="parrallelogramIcon"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <Typography className={styles.paralelNumber}>
                    {item.number}
                  </Typography>
                  <Typography className={styles.paralelName}>
                    {item.name}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.paralellogram} />
        </div>
        <div className={styles.videoButtonWrap}>
          <Button
            disableRipple={true}
            onClick={handleClickOpen}
            className={styles.playVideoButton}
            style={{ background: "none" }}
          >
            {matches1200 ? (
              <Image src={buttonImg} alt="buttonImg" layout="fill" />
            ) : (
              <Image
                src={matches600 ? buttonImg : buttonImgMobile}
                alt="buttonImg"
                width={750}
                height={550}
              />
            )}
          </Button>
        </div>
      </div>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        open={open}
        onClose={handleClose}
        maxWidth="lg"
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              m: "auto",
            }}
          >
            <ReactPlayer
              width={1024}
              height={576}
              url="https://youtu.be/LbPPkmfuhsA"
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

const paralellogramItems = [
  { icon: "/home/coins.svg", number: "$550", name: "Milyon ciro" },
  { icon: "/home/earth.svg", number: "130+", name: "Ülkeye İhracat" },
  { icon: "/home/users.svg", number: "2.050", name: "Çalışan" },
];

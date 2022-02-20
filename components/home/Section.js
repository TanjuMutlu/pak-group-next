import React from "react";
import styles from "styles/home/Sections.module.css";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import buttonImg from "public/home/videoPlayerImg.svg";
import infosImg from "public/home/infosImg.svg";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    background: "none",
    overflow: "hidden",
    boxShadow: "none",
  },
}));
export default function SectionHome() {
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
      <div className={styles.infosImg}>
        <Image src={infosImg} alt="infosImg" />
      </div>
      <Button
        disableRipple={true}
        onClick={handleClickOpen}
        className={styles.playVideoButton}
        style={{ background: "none" }}
      >
        <Image src={buttonImg} alt="buttonImg" />
      </Button>
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

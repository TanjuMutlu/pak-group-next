import { makeStyles } from "@mui/styles";
import { Typography, useMediaQuery } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  title: {
    color: "#fff",
    fontSize: "14px",
    fontFamily: "Fira Sans",
    lineHeight: "17px",
    padding: "0 5px 0 5px",
  },
});

export default function BreadCrumb({ title, brand, sector }) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: matches ? "80%" : "90%",
          height: "45px",
          margin: matches ? "auto" : "",
          background: "#DC002E",
          borderRadius: "0 0 58px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "95%",
            height: "100%",
            flexDirection: "row",
          }}
        >
          <HomeOutlinedIcon color="secondary" />
          <ChevronRightIcon color="secondary" />
          <Typography className={classes.title}>
            {title.toUpperCase()}
          </Typography>
          {brand ? (
            <>
              <ChevronRightIcon color="secondary" />
              <Typography className={classes.title}>
                {brand.toUpperCase()}
              </Typography>
            </>
          ) : null}
          {sector ? (
            <>
              <ChevronRightIcon color="secondary" />
              <Typography className={classes.title}>
                {sector.toUpperCase()}
              </Typography>
            </>
          ) : null}
        </Box>
      </Box>
    </>
  );
}

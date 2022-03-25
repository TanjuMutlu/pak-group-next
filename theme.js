import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
const breakpoints = createBreakpoints({});

let theme = createTheme({
  palette: {
    secondary: { main: "#fff" },
    primary: { main: "#DC002E" },
    common: { main: "#000" },
  },
  typography: {
    subtitle1: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "50px",
      lineHeight: " 60px",
      color: "#FFFFFF",
      [breakpoints.down("md")]: {
        fontWeight: 500,
        maxWidth: "300px",
        fontSize: "40px",
        lineHeight: "80px",
      },
    },
    subtitle2: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: " 24px",
      color: "#000",
    },
    body1: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: " 22px",
      color: "#000",
    },
    h6: {
      maxWidth: "1700px",
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "40px",
      lineHeight: "48px",
      color: "#FFFFFF",
      [breakpoints.down("lg")]: {
        fontWeight: 500,
        fontSize: "35px",
        lineHeight: "40px",
      },
      [breakpoints.down("md")]: {
        fontWeight: 500,
        maxWidth: "300px",
        fontSize: "25px",
        lineHeight: "30px",
      },
    },
    h5: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "20px",
    },
    h4: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "0.05em",
      color: "#000000",
      [breakpoints.down("md")]: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "16px",
      },
    },
    h3: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "36px",
      lineHeight: "43px",
      color: "#000000",
      textAlign: "center",
      [breakpoints.down("sm")]: {
        fontSize: "26px",
      },
    },
    h1: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#DC002E",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  shadows: {
    0: "none",
    1: "none",
    8: "none",
    [false]: "none",
    24: "none",
  },
});

export default theme;

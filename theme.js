import { createTheme } from "@mui/material/styles";

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
      minWidth: "500px",
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "40px",
      lineHeight: "48px",
      color: "#FFFFFF",
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
    },
    h3: {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "36px",
      lineHeight: "43px",
      color: "#000000",
      textAlign: "center",
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
});

export default theme;

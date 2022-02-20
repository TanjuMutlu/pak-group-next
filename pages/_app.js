import LayoutApp from "components/layouts/LayoutApp";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import dynamic from "next/dynamic";
import Footer from "components/Footer";
import "styles/globals.css";

const Header = dynamic(
  () => {
    return import("components/Header");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutApp>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutApp>
    </ThemeProvider>
  );
}

export default MyApp;

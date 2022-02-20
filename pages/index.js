import HeroHome from "components/home/HeroHome";
import Box from "@mui/material/Box";
import SectionHome from "components/home/Section";
import BrandsSection from "components/home/BrandsSection";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <HeroHome />
        <SectionHome />
        <BrandsSection />
      </Box>
    </>
  );
}

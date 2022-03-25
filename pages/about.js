import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import HeroPages from "components/HeroPages";
import background from "public/backgrounds/about-page.jpg";
import SectionHome from "components/home/Section";
import Timeline from "base/Timeline";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
const breakpoints = createBreakpoints({});

const useStyles = makeStyles({
  bodyWrap: {
    maxWidth: "800px",
    padding: "60px 0 0 0",
    margin: "30px",
    [breakpoints.down("sm")]: {
      padding: "20px 0 0 0",
    },
  },
  section: { width: "100%", paddingTop: "50px" },
});

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <HeroPages
          background={background}
          title="Hakkimizda"
          breadTitle="About"
        />
        <Box className={classes.bodyWrap}>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Fira Sans",
              marginBottom: "10px",
            }}
          >
            Mauris ac neque sit amet tellus egestas tempor sed non augue. Donec
            et efficitur dolor, in placerat odio. Quisque tempus quam erat, quis
            placerat ex elementum finibus. Suspendisse pretium lectus vitae
            metus imperdiet laoreet.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontFamily: "Fira Sans" }}>
            Suspendisse et eros ipsum. Sed pretium condimentum mauris at
            maximus. Morbi tortor ipsum, vestibulum at feugiat at, pharetra ut
            lacus. Aenean feugiat dapibus urna ut semper. Nullam nec egestas mi.
            In erat orci, ullamcorper sit amet rutrum vel, maximus vitae lacus.
            Sed auctor ipsum nisi, in porta lacus iaculis vitae. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Duis tempus maximus tellus dapibus euismod. Quisque vitae
            purus tellus. Aenean placerat tortor id leo laoreet dignissim. Etiam
            maximus in justo sit amet vestibulum. Sed ac orci at risus bibendum
            imperdiet ut sit amet velit. Nunc egestas bibendum metus, a
            tristique sapien vulputate eget. Suspendisse convallis metus ut
            bibendum tristique. Duis ac ipsum in lectus finibus auctor eget
            iaculis quam. Phasellus ex neque, suscipit quis imperdiet sit amet,
            rhoncus id tortor. Nulla ac consequat turpis. Praesent consequat
            arcu ex, ut porta quam iaculis sit amet.
          </Typography>
        </Box>
        <div className={classes.section}>
          <SectionHome />
        </div>
        <Timeline />
      </Box>
    </>
  );
}

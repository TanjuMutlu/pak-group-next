import Box from "@mui/material/Box";
import HeroPages from "components/HeroPages";
import SectorPageContent from "components/SectorPageContent";
import background from "public/backgrounds/about-page.jpg";
import sectorIcon from "public/sector/Ambalaj-icon-red.svg";
import img from "public/sector/ambalaj.svg";
import kartonsan from "public/home/brands/Kartonsan.png";
import donkasan from "public/home/brands/Donkasan.png";
import mel from "public/home/brands/Mel.png";
import intermat from "public/home/brands/Intermat.png";

export default function ambalaj() {
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
        <HeroPages
          background={background}
          title="Ambalaj"
          subtitle="Faalİyet Alanlarımız"
          breadTitle="Sektorler"
          breadSector="Ambalaj"
        />
        <SectorPageContent
          sectorIcon={sectorIcon}
          img={img}
          sectorCompanies={sectorCompanies}
          sectorName="Ambalaj Sektörü"
          title="İleri teknolojimiz ve yetişmiş insan gücümüzle, kuşe kartonda uluslararası saygınlıkta markaların sahibiyiz."
          bodyLeft="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nisl finibus, luctus sem quis, placerat nisl. Donec convallis fermentum enim vitae egestas. Nam facilisis, orci eu porttitor rhoncus, ante tellus sollicitudin mauris, vel cursus enim enim ac dui. Pellentesque eget risus sapien. Integer congue, leo vitae lobortis tincidunt, mauris magna sodales elit, ac aliquam mi nibh sed ligula."
          bodyRight="Pellentesque eget risus sapien. Integer congue, leo vitae lobortis tincidunt, mauris magna sodales elit, ac aliquam mi nibh sed ligula. Morbi lobortis fringilla rhoncus. Quisque eleifend interdum tempus. Mauris massa arcu, ultrices sit amet facilisis rhoncus, dictum non augue. Fusce in metus ut augue laoreet feugiat at ac magna. Duis elementum ligula nec rutrum sodales."
        />
      </Box>
    </>
  );
}
const sectorCompanies = [
  {
    title: "Kartonsan",
    body: "1970 yılında kurulan Kartonsan, Türkiye’nin lider, Avrupa’nın 5. büyük kuşe karton üreticisi.",
    link: "/brands/kartonsan",
    img: kartonsan,
  },
  {
    title: "Donkasan",
    body: "1970 yılında kurulan Kartonsan, Türkiye’nin lider, Avrupa’nın 5. büyük kuşe karton üreticisi.",
    link: "/brands/donkasan",
    img: donkasan,
  },
  {
    title: "Mel",
    body: "1970 yılında kurulan Kartonsan, Türkiye’nin lider, Avrupa’nın 5. büyük kuşe karton üreticisi.",
    link: "/brands/mel",
    img: mel,
  },
  {
    title: "Intermat",
    body: "1970 yılında kurulan Kartonsan, Türkiye’nin lider, Avrupa’nın 5. büyük kuşe karton üreticisi.",
    link: "/brands/intermat",
    img: intermat,
  },
];

import Box from "@mui/material/Box";
import HeroPages from "components/HeroPages";
import SectorPageContent from "components/SectorPageContent";
import background from "public/backgrounds/about-page.jpg";
import sectorIcon from "public/sector/Gida-icon-red.svg";
import img from "public/sector/gida.svg";
import pak from "public/home/brands/Pakmaya.png";

export default function gida() {
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
          title="Gida"
          subtitle="Faalİyet Alanlarımız"
          breadTitle="Sektorler"
          breadSector="GIDA"
        />
        <SectorPageContent
          sectorIcon={sectorIcon}
          img={img}
          sectorCompanies={sectorCompanies}
          sectorName="Gıda Sektörü"
          title="Köklü bir hijyen ve kalite mirasıyla; sağlıklı, formda, tadına doyulmaz bir hayat için emek veriyoruz."
          bodyLeft="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nisl finibus, luctus sem quis, placerat nisl. Donec convallis fermentum enim vitae egestas. Nam facilisis, orci eu porttitor rhoncus, ante tellus sollicitudin mauris, vel cursus enim enim ac dui. Pellentesque eget risus sapien. Integer congue, leo vitae lobortis tincidunt, mauris magna sodales elit, ac aliquam mi nibh sed ligula."
          bodyRight="Pellentesque eget risus sapien. Integer congue, leo vitae lobortis tincidunt, mauris magna sodales elit, ac aliquam mi nibh sed ligula. Morbi lobortis fringilla rhoncus. Quisque eleifend interdum tempus. Mauris massa arcu, ultrices sit amet facilisis rhoncus, dictum non augue. Fusce in metus ut augue laoreet feugiat at ac magna. Duis elementum ligula nec rutrum sodales."
        />
      </Box>
    </>
  );
}
const sectorCompanies = [
  {
    title: "Pak Gida",
    body: "1973 yılında Türkiye İzmit’te yaş ekmek mayası üretimine başlayan Pakmaya, modern üretim yöntemleri ve üstün kalitesiyle maya ile özdeş isim olarak tanınıyor.",
    link: "/brands/pak",
    img: pak,
  },
  {
    title: "As Gıda",
    body: "İzmit’te en modern üretim teknolojisi ve otomasyon sistemlerine sahip bir işletme olarak faaliyetine başlayan As Gıda, fırıncılık, değirmencilik, pastacılık ve perakende sektörüne yönelik yardımcı madde, geliştiriciler ve mamul maddeler üretiyor. ",
    link: "/brands/as-gida",
    img: pak,
  },
  {
    title: "Pak İhracat",
    body: "Kuruluşundan 1980 yılına kadar yoğun bir çalışmayla Türkiye maya pazarını geliştiren Pakmaya, bu tarihten sonra ihracat pazarlarına da yöneldi.",
    link: "/brands/pak-ihracat",
    img: pak,
  },
  {
    title: "RomPak",
    body: "Romanya’da faaliyet gösteren Rompak, maya, fırıncılık, pastacılık, ev tüketim ürünleriyle ülkenin tek maya üreticisi. ",
    link: "/brands/rompak",
    img: pak,
  },
  {
    title: "Bellarise",
    body: "Pakmaya, Kuzey Amerika’da Bellarise markası altında, kendi kuruluşu ile, merkezi Los Angeles olmak üzere ABD, Kanada ve Meksika çapında faaliyet gösteriyor.",
    link: "/brands/bellarise",
    img: pak,
  },
];

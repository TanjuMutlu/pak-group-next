import HeaderDropdown from "base/HeaderDropdown";
import HeaderDropdownIcon from "base/HeaderDropdownIcon";

const NavItems = [
  { title: "HAKKIMIZDA", link: "/about" },
  { title: <HeaderDropdown key="dropdown" />, link: "" },
  { title: "ŞİRKETLERİMİZ", link: "/brands" },
  { title: "İLETİŞİM", link: "/contact" },
  { title: <HeaderDropdownIcon key="icon" />, link: "" },
];
export default NavItems;

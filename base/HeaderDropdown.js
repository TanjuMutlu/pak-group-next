import React, { useState } from "react";
import {
  Button,
  Typography,
  Stack,
  MenuList,
  MenuItem,
  Popper,
  Paper,
  Grow,
  ListItemIcon,
  ClickAwayListener,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import styles from "styles/Includes.module.css";
import gida from "public/sector/Gida-icon.svg";
import ambalaj from "public/sector/Ambalaj-icon.svg";
import yem from "public/sector/Yem-icon.svg";
import emlak from "public/sector/Emlak-icon.svg";
import gidaRed from "public/sector/Gida-icon-red.svg";
import ambalajRed from "public/sector/Ambalaj-icon-red.svg";
import yemRed from "public/sector/Yem-icon-red.svg";
import emlakRed from "public/sector/Emlak-icon-red.svg";
import Link from "next/link";
import Image from "next/image";

const DropdownItem = ({ title, iconHover, iconNoHover, link }) => {
  const [isHovering, setIsHovered] = useState("noHover");
  return (
    <Link href={link} passHref={true}>
      <MenuItem
        className={styles.dropdownItem}
        style={{ background: "none" }}
        onMouseEnter={() => setIsHovered("hover")}
        onMouseLeave={() => setIsHovered("noHover")}
      >
        <ListItemIcon>
          <Image
            src={isHovering === "hover" ? iconNoHover : iconHover}
            alt={title}
            width={23}
            height={23}
          />
        </ListItemIcon>
        <Typography className={styles.dropdownText}>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

export default function HeaderDropdown() {
  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeHeader);
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ background: "none" }}
        >
          <Typography
            color={header ? "common" : "secondary"}
            className={styles.dropdownTitle}
          >
            SEKTORLER
          </Typography>
          <KeyboardArrowDownOutlinedIcon
            color={header ? "common" : "secondary"}
            className={styles.dropdownTitle}
          />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper className={styles.dropdownPaper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {menuItems.map((item, index) => (
                      <DropdownItem
                        title={item[2]}
                        iconHover={item[0]}
                        iconNoHover={item[1]}
                        link={item[3]}
                        key={index}
                      />
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
const menuItems = [
  [gida, gidaRed, "GIDA", "/sectors/gida"],
  [ambalaj, ambalajRed, "AMBALAJ", "/sectors/ambalaj"],
  [yem, yemRed, "YEM", "/sectors/yem"],
  [emlak, emlakRed, "EMLAK", "/sectors/emlak"],
];

import * as React from "react";
import styles from "styles/contact.module.css";
import HeroPages from "components/HeroPages";
import background from "public/backgrounds/about-page.jpg";
import { Typography, Button, Box, TextField, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import currencies from "includes/contact/currencies";
import contactNumbers from "includes/contact/contactNumbers";
import labels from "includes/contact/labels";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    "& .MuiFilledInput-root": {
      background: "#fff !important",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <HeroPages
        background={background}
        title="Iletisim"
        breadTitle="Iletisim"
      />
      <Box className={styles.container}>
        <Box className={styles.childContainer}>
          <Typography color="#000" variant="subtitle1" className={styles.title}>
            Merkez Büro
          </Typography>
          <Typography className={styles.textAdress}>
            Pak İş Merkezi Prof. Dr. Bülent Tarcan Cad. No: 5 Gayrettepe
            Beşiktaş - 34349 İstanbul
          </Typography>
          {contactNumbers.map((item, index) => (
            <Box className={styles.numbers} key={index}>
              {item.icon}
              <Typography className={styles.numbersName}>
                {item.name}
              </Typography>
              <Typography className={styles.numbersNumber}>
                {item.number}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{ borderRadius: "10px", background: "#F8F8F8" }}
          className={styles.childContainer}
        >
          <Box className={styles.formWrap}>
            {labels.map((item, index) => (
              <div key={index} className={styles.formItem}>
                {item == "Endustri" ? (
                  <TextField
                    className={classes.root}
                    label="Endustri"
                    select
                    value={currency}
                    onChange={handleChange}
                    variant="filled"
                  >
                    {currencies.map((item, index) => (
                      <MenuItem key={index} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    className={classes.root}
                    label={item}
                    variant="filled"
                  />
                )}
              </div>
            ))}
            <TextField
              className={classes.root}
              style={{ width: "95%", maxWidth: "500px", margin: "10px" }}
              multiline
              rows={4}
              label="Mesaj"
              variant="filled"
            />
            <Box
              sx={{
                display: "flex",
                width: "88%",
                justifyContent: "flex-start",
              }}
            >
              <Button variant="contained" className={styles.submitButton}>
                <Typography variant="h5">Gonder</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

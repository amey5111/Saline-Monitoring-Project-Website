import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import { Box, Link } from "@material-ui/core";
// import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles({
  MaintexT: {
    color: "white",
    width: "fit-content",
    marginRight: "3px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  contain: {
    color: "white",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row-reverse",
    borderBottom: "2px solid yellow",
  },
  Logo: {
    height: "55px",
    width: "55px",
    borderRadius: "10px",
  },
  TLogo: {
    height: "50px",
    marginRight: "10px",
    marginTop: "5px",
    borderRadius: "10px",
    border: "2px solid white",
    marginBottom: "5px",
  },
  techol: {
    marginRight: "auto",
    display: "flex",
    flexDirection: "row-reverse",
  },
  techolT: {
    width: "fit-content",
    marginRight: "3px",
    marginTop: "auto",
    marginBottom: "auto",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.contain}>
      <Box mt={1}>
        <Link
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener"
          className={classes.link}
        >
          <img
            src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/GitHub%20black.png?raw=true"
            alt="github icon"
            className={classes.Logo}
          ></img>
        </Link>
      </Box>
      <Typography variant="subtitle2" className={classes.MaintexT}>
        For More Informatiom about the project Follow Us:
      </Typography>
      <Box className={classes.techol}>
        <img
          src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/open%20ai%20GPT%20logo%20.png?raw=true"
          alt="chatgpt logo"
          className={classes.TLogo}
        ></img>
        <img
          src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/Material%20ui%20black%20logo%20.png?raw=true"
          alt="MUI icon"
          className={classes.TLogo}
        ></img>
        <img
          src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/React%20logo%20Black.jpg?raw=true"
          alt="React icon"
          className={classes.TLogo}
        ></img>
        <div className={classes.techolT}>
          Technologies used to made this website:{" "}
        </div>
      </Box>
    </div>
  );
};

export default Footer;

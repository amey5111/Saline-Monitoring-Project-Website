import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles({
  heading: {
    borderBottom: "2px solid yellow",
    margin: "auto",
    width: "95%",
  },
  image: {
    height: "350px",
    margin: "auto",
    marginTop: "10px",
    width: "95%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "70%",
    margin: "auto",
  },
  discription: {
    border: "2px solid white",
    marginLeft: "5px",
    marginRight: "5px",
    paddingRight: "2px",
    paddingLeft: "2px",
    borderRadius: "12px",
  },
  head: {
    fontSize: "30px",
    padding: "5px",
    borderBottom: "3px solid yellow ",
    backgroundColor: "white",
    width: "300px",
    textAlign: "right",
    height: "fit-content",
    marginRight: "10px",
    marginLeft: "10px",
    marginTop: "auto",
    marginBottom: "auto",
  },
});
export default function ImagesCarousel(props) {
  var items = [
    {
      name: "Entire Set Up of Project",
      src: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/Images%20carousel%20Entire%20System%20photo.png?raw=true",
      description:
        "This is the picture of the entire system talked in the project",
    },
    {
      name: "System At Patient side",
      src: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/patient%20side%20pic.png?raw=true",
      description:
        "This is the picture of the system at patient side which consists of ESP32 board for controlling as well as IR sensor and Load cell for drop count and Saline level monitoring respectively",
    },
    {
      name: "Handheld alert Indicator for Nurses",
      src: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/Nurse%20System%20images.png?raw=true",
      description:
        "This consists of Aurdiuno controller borad, communicating nrf module and display",
    },
    {
      name: "Web server for Nurses for Real time Monitoring",
      src: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/nurse%20Monitor%20Web.png?raw=true",
      description:
        "used ESP 32 inbuild wifi module and Ajax to build it for nurses mainly to monitor saline level from any smart device ",
    },
    {
      name: "Display interfaces at patient side system",
      src: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/patient%20system%20oled%20interface.png?raw=true",
      description:
        "These are interfaces on displays at the patient side for controlling the system and didplay of saline level and other parameters for nurses",
    },
    {
      name: "Structures needed for different sensors ",
      src: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/Structure%20for%20IR%20Sensor%20and%20motor%20photo.png?raw=true",
      description:
        "These are the structures required to hold the sensors and the servo mottor at required angle",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div>
      <Fade Left>
        <span className={classes.head}>
          <BorderColorTwoToneIcon sx={{ paddingRight: "3px" }} />
          Photo Gallary
        </span>
      </Fade>
      <Paper
        sx={{
          backgroundColor: "#AF69EE",
          border: "3px solid yellow",
          borderRadius: "12px",
          color: "white",
          marginTop: "14px",
        }}
        className={classes.container}
      >
        <h2 className={classes.heading}>{props.item.name}</h2>
        <img className={classes.image} src={props.item.src} alt="carusel" />
        <p className={classes.discription}>{props.item.description}</p>
      </Paper>
    </div>
  );
}

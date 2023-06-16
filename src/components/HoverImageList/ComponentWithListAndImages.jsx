import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import Fade from "react-reveal/Fade";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid red",
  },
  listItem: {
    textAlign: "center",
    cursor: "pointer",
    border: "3px solid #AF69EE",
    borderRadius: "12px",
    padding: "10px",
    margin: "5px",
    // color: "white",
    backgroundColor: "#FFFAA0",
  },
  ListText: {
    fontSize: "30px",
  },
  imageContainer: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid red",
    marginLeft: "19px",
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
  image: {
    width: "80%",
    height: "auto",
    transition: "all 0.3s ease-in-out",
  },
}));

const ComponentWithListAndImages = () => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(
    "https://media.tenor.com/2jd3xi2WVt0AAAAC/recurring-settings.gif"
  );

  const handleListItemHover = (image) => {
    setCurrentImage(image);
  };

  const images = {
    ESP32:
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/1.png?raw=true",
    "Load cell":
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/2.png?raw=true",
    "IR sensor Module":
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/3.png?raw=true",
    "Servo Motor":
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/4.png?raw=true",
    "OLED display":
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/5.png?raw=true",
    "Lithium Battery":
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/6.png?raw=true",
    "Nrf Transceiver modules":
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/7.png?raw=true",
    Arduino:
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/8.png?raw=true",
    buzzer:
      "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/9.png?raw=true",
    LED: "https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/10.png?raw=true",
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        {currentImage && (
          <img
            src={currentImage}
            alt="Hardware component"
            className={classes.image}
          />
        )}
      </div>
      <List className={classes.list}>
        {Object.keys(images).map((component) => (
          <Fade bottom delay={600}>
            <ListItem
              key={component}
              className={classes.listItem}
              onMouseEnter={() => handleListItemHover(images[component])}
              onMouseLeave={() =>
                setCurrentImage(
                  "https://media.tenor.com/2jd3xi2WVt0AAAAC/recurring-settings.gif"
                )
              }
            >
              <ListItemText primary={component} className={classes.ListText} />
            </ListItem>
          </Fade>
        ))}
      </List>
      <Fade right>
        <span className={classes.head}>
          <BorderColorTwoToneIcon sx={{ paddingRight: "3px" }} />
          Hardware components Used in project
        </span>
      </Fade>
    </div>
  );
};

export default ComponentWithListAndImages;

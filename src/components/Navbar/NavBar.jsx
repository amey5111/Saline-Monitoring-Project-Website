import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Typewriter from "typewriter-effect";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    flexDirection: "column",
    border: "3px solid #AF69EE",
    backgroundColor: "#FFFAA0",
    width: "40%",
  },
  profileb: {
    display: "flex",
    flexDirection: "row",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
  },
  avatar: {
    width: 110,
    height: 120,
    margin: "12px",
    border: "2px solid #AF69EE",
    backgroundColor: "#9de6ed",
    borderRadius: "12px",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  head: {
    height: "fit-content",
    width: "50%",
    fontSize: "50px",
    margin: "auto",
    padding: "10px",
    borderLeft: "5px solid blue",
  },
  Divider: {
    backgroundColor: "AF69EE",
  },
  bF: {
    marginLeft: "auto",
  },
  logoimage: {
    margin: "10px",
    borderRadius: "10px",
  },
  title: {
    color: "black",
  },
});
const drawerWidth = 240;

function NavBar(props) {
  const classses = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen01, setIsOpen01] = useState(false);

  const handleOpen01 = () => {
    setIsOpen01(true);
  };
  const handleClose01 = () => {
    setIsOpen01(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const classes = useStyles();
  const navItems = [
    {
      name: "About Project",
      function() {
        handleOpen01();
      },
    },
    {
      name: "About Team",
      function() {
        handleOpen();
      },
    },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SMART SALINE ASSISTANCE SYSTEM
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const modalBody01 = (
    <div
      style={{
        // display: "flex",
        marginRight: "10%",
        marginTop: "3%",
        marginLeft: "5%",
        // height: 500,
        // width: 400,
        padding: 16,
        backgroundColor: "#B19CD7",
        border: "3px solid yellow",
        borderRadius: "12px",
      }}
    >
      <h1 className={classes.modalheadings}>
        Propesed System Methodology of SMART SALINE ASSISTACE SYSTEM
      </h1>
      <p>
        Entire system comprises two units. First, at the patient side also
        called as the patient side system and another at the nurse side also
        called as nurse side system.
      </p>
      <h2 className={classes.modalheadings}>Patient Side System :</h2>
      <p>
        The system on this side consists of all the monitoring circuitry. Here,
        the saline bottle is hung over the load cell to get its weight so that
        using the formula we can calculate how much quantity is left inside the
        bottle. Also, using two Infrared Photodiodes placed parallelly across
        the drip chamber, several drops falling can be calculated. All the
        collected data from the sensor is given to the microcontroller and
        displayed at the OLED screen at the patient side system. Rotary encoder
        knobs can be used to adjust the flow rate at the patient side system as
        prescribed by the doctor. According to the values of the sensor, an
        actuator mechanism is used to maintain the desired flow rate and
        automatically pinch the IV tube before the saline bottle gets emptied.
        Using an inbuilt wifi module inside the microcontroller that can send
        all the data to the cloud and to the smartphone. Now, for offline
        communication, NRF24L01 Transceiver is used which will send the alert
        information to the nurse station monitoring dashboard.
      </p>
      <h2 className={classes.modalheadings}>Nurse Side System : </h2>
      <p>
        All the alerts and information from the patient side system about the
        parameters (such as Drops count, Volume of saline Bottle Fluid left in
        saline, Flow rate, etc ) can be visualized using a Webserver. Also, with
        the help of handheld alert device saline level can be displayed and
        alert of the situation when saline is about to empty with the help of
        buzzer can be given to the nurse can be alerted about any issues
        occurred by the IV set at patient side system
      </p>
    </div>
  );
  const modalBody = (
    <div
      style={{
        // display: "flex",
        marginRight: "10%",
        marginTop: "3%",
        marginLeft: "5%",
        // height: 500,
        // width: 400,
        padding: 16,
        backgroundColor: "#B19CD7",
        border: "3px solid yellow",
        borderRadius: "12px",
      }}
    >
      <Box className={classes.profileb}>
        <Box className={classes.head}>
          <Typewriter
            options={{
              strings: ["Meet our team", "We are team ACHIEVERS "],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Card className={classes.root}>
          <div className={classes.info}>
            <div>
              <Avatar
                alt="Person 1"
                src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/y.png?raw=true"
                className={classes.avatar}
              />
            </div>
            <div className={classes.details}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  Yash Barot
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  BE Electronics and Telecommunication Engineering
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/yash-barot-a39864214/"
                  target="_blank"
                >
                  View LinkedIn Profile
                </Link>
              </CardContent>
            </div>
          </div>
          <Divider className={classes.Divider} />
          <div className={classes.info}>
            <div>
              <Avatar
                alt="Person 1"
                src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/H.png?raw=true"
                className={classes.avatar}
              />
            </div>
            <div className={classes.details}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  Harsh Dodiya
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  BE Electronics and Telecommunication Engineering
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/harsh-dodiya-76882b196/"
                  target="_blank"
                >
                  View LinkedIn Profile
                </Link>
              </CardContent>
            </div>
          </div>
          <Divider className={classes.Divider} />
          <div className={classes.info}>
            <div>
              <Avatar
                alt="Person 1"
                src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/A.png?raw=true"
                className={classes.avatar}
              />
            </div>
            <div className={classes.details}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  Amey Morye
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  BE Electronics and Telecommunication Engineering
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/amey-morye-983429217/"
                  target="_blank"
                >
                  View LinkedIn Profile
                </Link>
              </CardContent>
            </div>
          </div>
        </Card>
      </Box>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#AF69EE", borderBottom: "5px solid yellow" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/SSAS%20take%20002.png?raw=true"
            alt="logo"
            // height="90px"
            // width="200px"
            className={classses.logoimage}
          ></img>
          <Box
            className={classses.bF}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "#89CFF0",
                  borderBottom: "5px solid yellow",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                onClick={item.function}
              >
                {item.name}
              </Button>
            ))}
            <Modal open={isOpen01} onClose={handleClose01}>
              {modalBody01}
            </Modal>
            <Modal open={isOpen} onClose={handleClose}>
              {modalBody}
            </Modal>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;

import React, { useState } from "react";
import { Button, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  head: {
    fontSize: "30px",
    padding: "5px",
    borderBottom: "3px solid yellow ",
    backgroundColor: "white",
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    // backgroundColor: "#f2f2f2",
  },
  images: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: theme.spacing(4),
  },
  image: {
    marginBottom: "5px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "30px",
  },
  supportImage: {
    height: "35%",
    width: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-beteween",
  },
  GifImageandButton: {
    height: "60%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
  },
  subt: {
    height: "fit-content",
    width: "fit-content",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "30px",
    marginTop: "5px",
    border: "2px solid red",
    borderRadius: "12px",
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "#B19CD7",
  },
  modalheadings: {
    color: "white",
    width: "fit-content",
    borderBottom: "2px solid yellow",
  },
  divButton: {
    marginTop: "50px",
  },
}));

const MethodologyBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const classes = useStyles();
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

  return (
    <div className={classes.root}>
      <Fade left>
        <span className={classes.head}>
          <BorderColorTwoToneIcon sx={{ paddingRight: "3px" }} />
          Proposed Methodology of Project :
        </span>
      </Fade>
      <div className={classes.images}>
        <div className={classes.GifImageandButton}>
          <img
            src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/screen-capture%20(online-video-cutter.com).gif?raw=true"
            alt="Methodology of System"
            height="100%"
            width="100%"
          />
          <Typography variant="h5" component="h5" className={classes.subt}>
            Schematics of Entire System
          </Typography>
          <div className={classes.divButton}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Read More about system
            </Button>
            <Modal open={isOpen} onClose={handleClose}>
              {modalBody}
            </Modal>
          </div>
        </div>
        <div className={classes.supportImage}>
          <img
            className={classes.image}
            src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/PSS.png?raw=true"
            alt="patient side system"
          />
          <Typography variant="h5" component="h5" className={classes.subt}>
            Schematics of Patient Side System
          </Typography>
          <img
            className={classes.image}
            src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/SN.png?raw=true"
            alt="nurse side system"
          />
          <Typography variant="h5" component="h5" className={classes.subt}>
            Schematics of System at Nurse Station
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MethodologyBox;

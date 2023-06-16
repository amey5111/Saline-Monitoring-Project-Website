import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  ImageC: {
    marginTop: "200px",
  },
});
const MainHeading = () => {
  const classes = useStyles();
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Box
        sx={{
          marginLeft: "10px",
          marginTop: "100px",
          height: "40vh",
          width: "50%",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Design and Developement of</Typography>
        <Typography variant="h3">Samrt Saline Assistance System</Typography>
        <Typography variant="subtitle2">
          IOT based system which will help nurses and doctors mainly in
          monitoring and controlling Saline Level for their convinience.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "60vh",
          // border: "1px solid black",
          textAlign: "center",
        }}
      >
        <Image
          src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/heading%20Image%20002.png?raw=true"
          width="100%"
          height="70%"
          className={classes.ImageC}
        />
      </Box>
    </Box>
  );
};
export default MainHeading;

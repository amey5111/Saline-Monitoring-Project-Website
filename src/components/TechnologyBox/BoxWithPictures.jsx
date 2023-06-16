import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: "auto",
    display: "flex",
    flexDirection: "row",
  },
  head: {
    fontSize: "30px",
    padding: "5px",
    borderBottom: "3px solid yellow ",
    backgroundColor: "white",
    height: "fit-content",
    marginRight: "10px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 100,
    width: 100,
    position: "relative",
    overflow: "hidden",
    border: "3px solid white",
    // borderLeft: "5px solid yellow",
    backgroundColor: "#AF69EE",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const BoxWithPictures = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade left>
        <span className={classes.head}>
          <BorderColorTwoToneIcon sx={{ paddingRight: "3px" }} />
          Technology stack Used in project:
        </span>
      </Fade>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Fade top>
            <Tooltip
              title="Arduino-IDE in an Integrated Developement Environment software used to program the ESP32 micro-controller Board"
              placement="right"
            >
              <Paper className={classes.paper}>
                <img
                  src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/logo%20Ardiuno%20Ide%20image.png?raw=true"
                  alt="Arduino IDE"
                  className={classes.img}
                />
              </Paper>
            </Tooltip>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade top delay={200}>
            <Tooltip
              title="HTML is used for building the website"
              placement="right"
            >
              <Paper className={classes.paper}>
                <img
                  src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/HTML5_logo_and_wordmark.svg.png?raw=true"
                  alt="HTML"
                  className={classes.img}
                />
              </Paper>
            </Tooltip>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade top delay={400}>
            <Tooltip
              title="CSS is just for design and decoration of webserver Interface"
              placement="right"
            >
              <Paper className={classes.paper}>
                <img
                  src="https://raw.githubusercontent.com/amey5111/Final-Year-Project-Website/3ce3b403141299667f6b40a5aaf303185c661191/images/css3-logo-svg-vector.svg"
                  alt="CSS"
                  className={classes.img}
                />
              </Paper>
            </Tooltip>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade top delay={600}>
            <Tooltip
              title="JavaScript is basically to introduce the liveness in webserver interface"
              placement="right"
            >
              <Paper className={classes.paper}>
                <img
                  src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/JavaScript-logo.png?raw=true"
                  alt="JavaScript"
                  className={classes.img}
                />
              </Paper>
            </Tooltip>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade top delay={800}>
            <Tooltip
              title="Ajax is used to Dynamically change the Real time values of desired parameters"
              placement="right"
            >
              <Paper className={classes.paper}>
                <img
                  src="https://github.com/amey5111/Final-Year-Project-Website/blob/main/images/timg%20Ajax.png?raw=true"
                  alt="Ajax"
                  className={classes.img}
                />
              </Paper>
            </Tooltip>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default BoxWithPictures;

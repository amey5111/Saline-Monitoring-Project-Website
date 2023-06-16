import React from "react";
import Typography from "@mui/material/Typography";
import { Box, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import DrawTwoToneIcon from "@mui/icons-material/DrawTwoTone";
import ListItemIcon from "@mui/material/ListItemIcon";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import DoDisturbOffTwoToneIcon from "@mui/icons-material/DoDisturbOffTwoTone";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";

export default function BasicIdeaBox() {
  return (
    <Box
      borderLeft="5px solid black"
      marginLeft="5px"
      paddingTop="10px"
      backgroundColor="lightpink"
      width="fit-content"
      borderRadius="23px"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography
          width="fit-content"
          variant="h5"
          gutterBottom
          border="5px"
          color="white"
          padding="9px"
          borderRadius="15px"
          marginLeft="19px"
          sx={{ backgroundColor: "blueviolet" }}
        >
          Basic Idea
          <DrawTwoToneIcon sx={{ margin: "2px", height: "30px" }} />
        </Typography>
      </Box>
      <List>
        <ListItem>
          <ListItemIcon>
            <LocalHospitalTwoToneIcon sx={{ color: "blueviolet" }} />
          </ListItemIcon>
          <Typography marginLeft="12px" paddingTop="5px">
            The basic Motive Behind the Project is to help the Nurses and to
            reduce their work of continuous monitoring the saline level.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DoDisturbOffTwoToneIcon sx={{ color: "blueviolet" }} />
          </ListItemIcon>
          <Typography marginLeft="12px" paddingTop="5px">
            The system also helps by pinching the IV set pipe to stop the saline
            flow when the saline is about to empty.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CampaignTwoToneIcon sx={{ color: "blueviolet" }} />
          </ListItemIcon>
          <Typography marginLeft="12px" paddingTop="5px">
            Alerts the Nurses to change the respective saline bottle when it is
            about to empty.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ListAltTwoToneIcon sx={{ color: "blueviolet" }} />
          </ListItemIcon>
          <Typography marginLeft="12px" paddingTop="5px">
            Not only monitors the saline level but also keeps track on other
            crutial parameters for the Nurses.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LaptopChromebookTwoToneIcon sx={{ color: "blueviolet" }} />
          </ListItemIcon>
          <Typography marginLeft="12px" paddingTop="5px">
            Thereby also shows all this Real time value of crutial parameters to
            nurses stright away on there mobile phones or PCs at the Nurse
            station.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

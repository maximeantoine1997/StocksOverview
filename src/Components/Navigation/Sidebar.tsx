import { Box, createStyles, Divider, Drawer, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles(() =>
   createStyles({
      paperAnchorLeft: {
         borderStyle: "none",
      },
      drawer: {
         height: "100%",
         maxWidth: "10vw",
         background: "#131A2E",
         color: "white",
      },
      tab: {
         maxWidth: "5vw",
         padding: "0px",
         margin: "0px",
      },
      root: {
         maxWidth: "10vw",
         padding: "0px",
         margin: "0px",
         paddingTop: "20px",
         paddingBottom: "20px",
         alignContent: "flex-start",
         justifyContent: "center",
      },
   })
);

const SideBar: React.FC = () => {
   const [index, setIndex] = useState<number>(0);

   const classes = useStyles();
   return (
      <Drawer anchor="left" variant="permanent" classes={{ paperAnchorLeft: classes.paperAnchorLeft }}>
         <Box className={classes.drawer}>
            <Divider />
            <Tabs orientation="vertical" value={index} onChange={(e, value) => setIndex(value as number)}>
               <Tab to="/" icon={<HomeIcon fontSize="large" />} component={Link} classes={{ root: classes.root }} />
               <Tab
                  to="/my-stocks"
                  icon={<TrendingUpIcon fontSize="large" />}
                  component={Link}
                  classes={{ root: classes.root }}
               />
               <Tab
                  to="/add-stocks"
                  icon={<AddCircleOutlineIcon fontSize="large" />}
                  component={Link}
                  classes={{ root: classes.root }}
               />
            </Tabs>
         </Box>
      </Drawer>
   );
};

export default SideBar;

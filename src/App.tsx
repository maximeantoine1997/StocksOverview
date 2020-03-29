import { createStyles, Grid, makeStyles } from "@material-ui/core";
import SideBar from "Components/Navigation/Sidebar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyStocks from "Pages/MyStocks";
import AddStocks from "Pages/AddStocks";
import HomePage from "Pages/HomePage";

const useStyles = makeStyles(() =>
   createStyles({
      content: {
         marginLeft: "10vw",
         width: "90vw",
         height: "100vh",
         background: "linear-gradient(to right, #182035, #131A2E);",
         color: "white",
      },
   })
);

const App: React.FC = () => {
   const classes = useStyles();
   return (
      <Router>
         <Grid direction="row" container>
            <SideBar />
            <Grid item xs={12} justify="center" className={classes.content}>
               <Switch>
                  <Route path="/my-stocks">
                     <MyStocks />
                  </Route>
                  <Route path="/add-stocks">
                     <AddStocks />
                  </Route>
                  <Route exact path="/">
                     <HomePage />
                  </Route>
               </Switch>
            </Grid>
         </Grid>
      </Router>
   );
};

export default App;

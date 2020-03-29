import React from "react";
import StockTable from "Components/Dashboard/StockTable";
import { Box, Grid } from "@material-ui/core";
import InvestmentTable from "Components/Dashboard/InvestmentTable";

const MyStocks: React.FC = () => {
   return (
      <Box paddingX="5%">
         <Grid container>
            <Grid item xs={6}>
               <h1>My Stocks Page</h1>
               <StockTable />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
               <h1>My Stocks Page</h1>
               <InvestmentTable />
            </Grid>
         </Grid>
      </Box>
   );
};

export default MyStocks;

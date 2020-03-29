import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import InvestmentRow from "Components/Dashboard/InvestmentRow";
import React from "react";

interface StockTableProps {}
const InvestmentTable: React.FC<StockTableProps> = () => {
   return (
      <Box>
         <TableContainer component={Paper}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="center">Stock Name</TableCell>
                     <TableCell align="center">Initial Investment</TableCell>
                     <TableCell align="center">Actions</TableCell>
                     <TableCell align="center">Profit/Loss</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <InvestmentRow stockName="KBC.BR" />
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
};

export default InvestmentTable;

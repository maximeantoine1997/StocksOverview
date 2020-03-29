import React from "react";
import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import StockTableRow from "Components/Dashboard/StockTableRow";

interface StockTableProps {}
const StockTable: React.FC<StockTableProps> = () => {
   return (
      <Box>
         <TableContainer component={Paper}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="center">Stock Name</TableCell>
                     <TableCell align="center">Stock Price</TableCell>
                     <TableCell align="center">Difference</TableCell>
                     <TableCell align="center">Opening</TableCell>
                     <TableCell align="center">Max.</TableCell>
                     <TableCell align="center">Min.</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <StockTableRow stockName="KBC.BR" />
                  <StockTableRow stockName="KBCA.BR" />
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
};

export default StockTable;

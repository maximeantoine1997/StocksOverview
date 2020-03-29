import { CircularProgress, TableCell, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface StockData {
   open: string;
   difference: string;
   high: string;
   low: string;
   close: string;
}
interface InvestmentRowProps {
   stockName: string;
}
const InvestmentRow: React.FC<InvestmentRowProps> = ({ stockName }) => {
   const [data, setData] = useState<StockData | null>(null);
   useEffect(() => {
      const getData = () => {
         const investment = localStorage.getItem(stockName);
         console.log(investment);
      };

      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (data) {
      return (
         <TableRow>
            <TableCell align="center">Stock Name</TableCell>
            <TableCell align="center">Initial Investment</TableCell>
            <TableCell align="center">Actions</TableCell>
            <TableCell align="center">Profit/Loss</TableCell>
         </TableRow>
      );
   }

   return (
      <TableRow>
         <TableCell align="center">{stockName}</TableCell>
         <TableCell align="center"></TableCell>
         <TableCell align="center"></TableCell>
         <TableCell align="center">
            <CircularProgress color="secondary" />
         </TableCell>
         <TableCell align="center"></TableCell>
         <TableCell align="center"></TableCell>
      </TableRow>
   );
};

export default InvestmentRow;

import { TableCell, TableRow, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface StockData {
   open: string;
   difference: string;
   high: string;
   low: string;
   close: string;
}
interface StockTableRowProps {
   stockName: string;
}
const StockTableRow: React.FC<StockTableRowProps> = ({ stockName }) => {
   const [data, setData] = useState<StockData | null>(null);
   useEffect(() => {
      const getData = async () => {
         await axios
            .get(
               `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&outputsize=compact&apikey=${process.env.REACT_APP_STOCKS_API}`
            )
            .then(value => {
               const stockData = value.data["Time Series (Daily)"];
               if (stockData) {
                  const today = Object.values(stockData)[0] as any;
                  const difference = ((today["4. close"] as number) - today["1. open"]) as number;
                  setData({
                     open: today["1. open"],
                     difference: difference.toFixed(2),
                     high: today["2. high"],
                     low: today["3. low"],
                     close: today["4. close"],
                  });
               } else {
                  setData({
                     open: "ERR",
                     difference: "ERR",
                     high: "ERR",
                     low: "ERR",
                     close: "ERR",
                  });
               }
            })
            .catch(error => {
               console.log(error);
            });
      };

      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (data) {
      return (
         <TableRow>
            <TableCell align="center">{stockName}</TableCell>
            <TableCell align="center">{data.open}</TableCell>
            <TableCell align="center">{data.difference}</TableCell>
            <TableCell align="center">{data.open}</TableCell>
            <TableCell align="center">{data.high}</TableCell>
            <TableCell align="center">{data.low}</TableCell>
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

export default StockTableRow;

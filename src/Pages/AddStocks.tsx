import React, { useRef } from "react";
import { Box, TextField, makeStyles, createStyles, withStyles, Grid, Button } from "@material-ui/core";

const StyledTextField = withStyles({
   root: {
      "marginTop": "10px",
      "marginBottom": "10px",
      "& label.MuiFormLabel-root": {
         color: "white",
      },
      "& label.Mui-focused": {
         color: "#E1305B",
      },
      "& .MuiInput-underline:after": {
         borderBottomColor: "#E1305B",
      },
      "& .MuiOutlinedInput-root": {
         "& fieldset": {
            borderColor: "white",
         },
         "&:hover fieldset": {
            borderColor: "white",
         },
         "&.Mui-focused fieldset": {
            borderColor: "#E1305B",
         },
      },
   },
})(TextField);

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         borderRadius: "5px",
         color: "white !important",
      },
      input: {
         color: "white !important",
      },
   })
);

const AddStocks: React.FC = () => {
   const classes = useStyles();

   const stockName = useRef<string>("");
   const investment = useRef<number | null>(null);
   const value = useRef<number | null>(null);
   return (
      <Box paddingX="10%" width="80%">
         <Grid container>
            <Grid item xs={12}>
               <h1>Add Stocks Page</h1>
            </Grid>
            <Grid item xs={12}>
               <StyledTextField
                  label="Stock Name"
                  variant="outlined"
                  InputProps={{
                     className: classes.input,
                  }}
                  onBlur={e => {
                     stockName.current = e.target.value;
                  }}
               />
            </Grid>
            <Grid item xs={12}>
               <StyledTextField
                  type="number"
                  label="initial Investment"
                  variant="outlined"
                  InputProps={{
                     className: classes.input,
                  }}
                  onBlur={e => {
                     investment.current = (e.target.value as unknown) as number;
                  }}
               />
            </Grid>
            <Grid item xs={12}>
               <StyledTextField
                  type="number"
                  label="Stock Price"
                  variant="outlined"
                  InputProps={{
                     className: classes.input,
                  }}
                  onBlur={e => {
                     value.current = (e.target.value as unknown) as number;
                  }}
               />
            </Grid>
            <Grid item xs={12}>
               <Button variant="outlined">+ ADD</Button>
            </Grid>
         </Grid>
      </Box>
   );
};

export default AddStocks;

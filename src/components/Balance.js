import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { GlobalContext } from "../contexts/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    "& > *": {
      padding: theme.spacing(1),
      height: theme.spacing(7),
      width: "100%",
      marginTop: 10,
    },
  },
}));

const Balance = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trans) => trans.amount);
  const total = amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h3>Your Balance: ${total}</h3>
      </Paper>
    </div>
  );
};

export default Balance;

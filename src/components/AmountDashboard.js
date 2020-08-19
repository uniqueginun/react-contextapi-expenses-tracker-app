import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { GlobalContext } from "../contexts/GlobalState";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(5),
      paddingTop: 20,
    },
  },
  income: {
    backgroundColor: "#48bb78",
    color: "#fff",
  },
  expense: {
    backgroundColor: "#e53e3e",
    color: "#fff",
  },
}));

function AmountDashboard() {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const expense = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <div className={classes.root}>
      <Paper className={classes.income} variant="outlined">
        Income: ${Math.abs(income)}
      </Paper>
      <Paper className={classes.expense} variant="outlined">
        Expense: ${Math.abs(expense)}
      </Paper>
    </div>
  );
}

export default AmountDashboard;

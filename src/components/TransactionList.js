import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../contexts/GlobalState";
import Transaction from "./Transaction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(5),
      padding: 4,
    },
  },
}));

function TransactionList() {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);
  return (
    <div className={classes.root}>
      <h2>Transactions</h2>
      {transactions.length ? (
        transactions.map((t) => <Transaction key={t.id} transaction={t} />)
      ) : (
        <div>
          <strong style={{ color: "red" }}>No transactions added</strong>
        </div>
      )}
    </div>
  );
}

export default TransactionList;

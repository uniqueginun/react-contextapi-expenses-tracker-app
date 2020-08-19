import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { GlobalContext } from "../contexts/GlobalState";

const useStyles = makeStyles((theme) => ({
  transaction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Transaction({ transaction }) {
  const classes = useStyles();
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <Paper
      className={classes.transaction}
      style={{
        border: 6,
        borderRightColor: transaction.amount < 0 ? "red" : "green",
        borderRightStyle: "inset",
      }}
      elevation={3}
    >
      <div>
        <IconButton
          onClick={() => deleteTransaction(transaction.id)}
          aria-label="delete transaction"
        >
          <DeleteTwoToneIcon />
        </IconButton>
        {transaction.title}
      </div>
      <div>
        {sign} ${Math.abs(transaction.amount.toFixed(2))}
      </div>
    </Paper>
  );
}

export default Transaction;

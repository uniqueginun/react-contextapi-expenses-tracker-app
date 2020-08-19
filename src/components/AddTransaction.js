import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../contexts/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

function AddTransaction() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(title, amount);
    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <h4>Add New Transaction</h4>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Title"
        variant="outlined"
      />
      <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        label="Amount"
        type="number"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default AddTransaction;

import React, { createContext, useReducer } from "react";
import { AppReducer } from "../reducers/AppReducer";
import { v4 as uuidv4 } from "uuid";
import TransactionList from "../components/TransactionList";

const trans = localStorage.getItem("transactions");
let transactionsList = trans ? JSON.parse(trans) : [];

const intialState = {
  transactions: transactionsList,
};

export const GlobalContext = createContext(intialState);

function GlobalStateProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      id,
    });
  };

  const addTransaction = (title, amount) => {
    const transaction = {
      title,
      amount: parseInt(amount),
      id: uuidv4(),
    };

    const trans = localStorage.getItem("transactions");
    let transactionsList = trans ? JSON.parse(trans) : [];
    transactionsList.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactionsList));

    dispatch({
      type: "ADD_TRANSACTION",
      transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalStateProvider;

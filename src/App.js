import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";

/**
 * screens
 */
import Header from "./components/Header";
import Balance from "./components/Balance";
import AmountDashboard from "./components/AmountDashboard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

/**
 * Global stare provider
 */
import GlobalStateProvider from "./contexts/GlobalState";

function App() {
  return (
    <GlobalStateProvider>
      <Container maxWidth="sm">
        <div className="App">
          <Header />
          <Balance />
          <AmountDashboard />
          <TransactionList />
          <AddTransaction />
        </div>
      </Container>
    </GlobalStateProvider>
  );
}

export default App;

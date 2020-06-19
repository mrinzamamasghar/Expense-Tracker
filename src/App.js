import React, { useContext, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomExpenses from "./components/IncomExpenses";
import TransactionList from "./components/TransactionList";
import AddTransacion from "./components/AddTransacion";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpenses />
        <TransactionList />
        <AddTransacion />
      </div>
    </GlobalProvider>
  );
}

export default App;

import React from "react";
import "./style.css";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

function Balance(props) {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((amount) => amount.amount);
  const sum = amount.reduce((acc, itm) => (acc += itm), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      {<h1 id="balance">${sum}</h1>}
    </>
  );
}

export default Balance;

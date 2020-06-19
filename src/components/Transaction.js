import React from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

export const Transaction = ({ transaction }) => {
   const { DeleteTransaction } = useContext(GlobalContext);

  return (
    <li
      className={transaction.amount < 0 ? "minus" : "plus"}
      key={transaction.key}
    >
      {transaction.text} <span>$ {transaction.amount}</span>
      <button
         onClick={() => DeleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

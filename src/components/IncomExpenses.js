import React from "react";
import "./style.css";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
function IncomExpenses(props) {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((amount) => amount.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, itm) => (acc += itm), 0)
    .toFixed(2);

  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, itm) => (acc += itm), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </>
      <>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </>
    </div>
  );
}

export default IncomExpenses;

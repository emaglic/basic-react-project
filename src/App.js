import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2021, 1, 21) },
  { id: "e2", title: "Buy Apples", amount: 5.6, date: new Date(2021, 1, 22) },
  { id: "e3", title: "Buy Beer", amount: 15.25, date: new Date(2021, 2, 24) },
  { id: "e4", title: "Pay Phone Bill", amount: 123.45, date: new Date(2021, 3, 25) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

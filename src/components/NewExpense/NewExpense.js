import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [toggleShowForm, setToggleShowForm] = useState(false);

  const SaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const toggleShowFormHandler = () => {
    setToggleShowForm((prevToggleForm) => {
      return !prevToggleForm;
    });
  };

  if (!toggleShowForm) {
    return (
      <div className='new-expense'>
        <button className='add-new-expense' onClick={toggleShowFormHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className='new-expense'>
      <ExpenseForm toggleShowFormHandler={toggleShowFormHandler} onSaveExpenseData={SaveExpenseData} />
    </div>
  );
};

export default NewExpense;

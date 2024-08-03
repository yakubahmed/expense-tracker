
import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.title}: ${expense.amount.toFixed(2)} on {expense.date.toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

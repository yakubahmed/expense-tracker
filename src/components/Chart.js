
import React from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ expenses }) {
  const data = {
    labels: expenses.map(expense => expense.title),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(expense => expense.amount),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Expense Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default Chart;

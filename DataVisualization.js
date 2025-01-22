import React from 'react';
import { Bar } from 'react-chartjs-2';

const DataVisualization = ({ data }) => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        data: data.income,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Expenses',
        data: data.expenses,
        backgroundColor: 'rgba(255,99,132,0.6)',
      }
    ]
  };

  return (
    <div>
      <h2>Income vs Expenses</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default DataVisualization;
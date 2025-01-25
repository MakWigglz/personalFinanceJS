import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';


const DataVisualization = ({ data }) => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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

const DataVisualization = ({ data }) => {
  const categoryData = {
    labels: Object.keys(data.categoryTotals || {}),
    datasets: [{
      data: Object.values(data.categoryTotals || {}),
      backgroundColor: [
        'rgba(75,192,192,0.6)',
        'rgba(255,99,132,0.6)',
        'rgba(54,162,235,0.6)',
        'rgba(255,206,86,0.6)',
        'rgba(153,102,255,0.6)'
      ]
    }]
  };

  return (
    <div>
      <h2>Income vs Expenses</h2>
      <Bar data={chartData} />
        <Bar data={data} />
      <h2>Spending by Category</h2>
      <Pie data={categoryData} />
    </div>
  );
};

};

export default DataVisualization;
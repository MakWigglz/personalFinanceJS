import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/dashboard');
      setFinancialData(res.data);
    };
    fetchData();
  }, []);

  if (!financialData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <div>Total Income: ${financialData.totalIncome}</div>
      <div>Total Expenses: ${financialData.totalExpenses}</div>
      <div>Net Balance: ${financialData.netBalance}</div>
      {/* Add more dashboard elements here */}
    </div>
  );
};

export default Dashboard;
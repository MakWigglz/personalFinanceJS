import React, { useState, useEffect } from 'react';
import DataVisualization from './DataVisualization';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    recentTransactions: [],
    upcomingBills: []
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/dashboard', {
        headers: { 'x-auth-token': token }
      });
      setUserData(response.data);
    };
    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Financial Dashboard</h1>
        <div className="summary-cards">
          <div className="card">
            <h3>Total Income</h3>
            <p>${userData.totalIncome}</p>
          </div>
          <div className="card">
            <h3>Total Expenses</h3>
            <p>${userData.totalExpenses}</p>
          </div>
          <div className="card">
            <h3>Net Balance</h3>
            <p>${userData.totalIncome - userData.totalExpenses}</p>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="visualization-section">
          <DataVisualization data={userData} />
        </div>
        
        <div className="recent-transactions">
          <h2>Recent Transactions</h2>
          <ul>
            {userData.recentTransactions.map(transaction => (
              <li key={transaction._id}>
                <span>{transaction.description}</span>
                <span>${transaction.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="upcoming-bills">
          <h2>Upcoming Bills</h2>
          <ul>
            {userData.upcomingBills.map(bill => (
              <li key={bill._id}>
                <span>{bill.description}</span>
                <span>Due: {new Date(bill.dueDate).toLocaleDateString()}</span>
                <span>${bill.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

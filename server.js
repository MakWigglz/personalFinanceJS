const express = require('express');
const app = express();
const dashboardRoutes = require('./routes/dashboard');

app.use('/api/dashboard', dashboardRoutes);

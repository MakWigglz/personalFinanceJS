const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');
const Transaction = require('../models/Transaction');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
    await seedDatabase();
    console.log('Data seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  // Clear existing data
  await User.deleteMany({});
  await Transaction.deleteMany({});

  const testUser = await User.create({
    username: 'testuser',
    email: 'test@example.com',
    password: 'hashedpassword123'
  });

  await Transaction.insertMany([
    {
      user: testUser._id,
      amount: 1000,
      type: 'income',
      category: 'Salary',
      description: 'Monthly salary',
      date: new Date()
    },
    {
      user: testUser._id,
      amount: 50,
      type: 'expense',
      category: 'Food',
      description: 'Groceries',
      date: new Date()
    }
  ]);
};

connectDB();

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

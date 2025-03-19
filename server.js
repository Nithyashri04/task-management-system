const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/task-project');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./src/routes/userRoutes'));

app.use('/api/tasks', require('./src/routes/taskRoutes'));

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

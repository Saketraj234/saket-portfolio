import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allow all origins for debugging
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

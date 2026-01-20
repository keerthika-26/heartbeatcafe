const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userroutes');
const orderRoutes = require('./routes/orderroutes');
const menuRoutes = require('./routes/menuroutes');

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:3000', // React frontend URL
  credentials: true,
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ Serve uploaded images
app.use('/uploads', express.static('uploads')); // <-- important for profile images

// ✅ Routes
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/menu', menuRoutes);

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


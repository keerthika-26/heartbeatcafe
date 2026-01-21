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
  origin: '*', // allow all origins (important for Vercel)
  credentials: true,
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ Serve uploaded images
app.use('/uploads', express.static('uploads'));

// ✅ Routes
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/menu', menuRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ IMPORTANT FOR VERCEL
const PORT = process.env.PORT || 5000;

// Run server only in local (not in Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

// Export app for Vercel
module.exports = app;


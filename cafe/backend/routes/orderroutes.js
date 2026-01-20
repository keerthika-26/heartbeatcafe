// backend/routes/orderroutes.js
const express = require('express');
const router = express.Router();

// ✅ Import from your actual folder name
const orderController = require('../controller/ordercontroller');
const MenuItem = require('../models/menuitems');

console.log("✅ orderroutes.js loaded successfully");
console.log("Loaded orderController functions:", orderController); // 🔧 Debug

// ✅ Order routes (ensure these functions exist in ordercontroller.js)
router.post('/place', orderController.placeOrder);
router.get('/', orderController.getAllOrders);
router.get('/user/:userId', orderController.getUserOrders);
router.patch('/:orderId/status', orderController.updateOrderStatus);
router.delete('/:orderId', orderController.cancelOrder);

// ✅ Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Order routes working ✅' });
});

// ✅ Route to get all menu items
router.get('/menuitems', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    console.error("❌ Error fetching menu items:", err);
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

module.exports = router;












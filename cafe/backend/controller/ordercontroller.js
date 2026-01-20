/// backend/controller/ordercontroller.js
const Order = require('../models/order');
const MenuItem = require('../models/menuitems');

// ✅ Place a new order
exports.placeOrder = async (req, res) => {
  try {
    console.log("📩 Incoming Order Request:", req.body);

    const { userId, items, paymentInfo } = req.body;

    // ✅ Input validation
    if (!userId || userId === 'undefined') {
      return res.status(400).json({ error: 'User ID is missing or invalid.' });
    }
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Order must contain at least one item.' });
    }
    if (!paymentInfo) {
      return res.status(400).json({ error: 'Payment info is required.' });
    }

    // ✅ Calculate total amount
    let totalAmount = 0;
    for (const item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) {
        console.warn(`⚠️ Menu item not found: ${item.menuItem}`);
        return res.status(404).json({ error: `Menu item not found: ${item.menuItem}` });
      }
      totalAmount += menuItem.price * item.quantity;
    }

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      paymentInfo
    });

    const savedOrder = await newOrder.save();
    console.log("✅ Order Saved Successfully:", savedOrder);

    res.status(201).json({ message: '✅ Order placed successfully', order: savedOrder });
  } catch (err) {
    console.error('🔥 Order placement error:', err);
    res.status(500).json({ error: '❌ Failed to place order' });
  }
};

// ✅ Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items.menuItem');
    res.json(orders);
  } catch (err) {
    console.error("❌ Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// ✅ Get orders by userId
exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate('items.menuItem');
    res.json(orders);
  } catch (err) {
    console.error("❌ Error fetching user orders:", err);
    res.status(500).json({ error: "Failed to fetch user orders" });
  }
};

// ✅ Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "✅ Order status updated", order: updatedOrder });
  } catch (err) {
    console.error("❌ Error updating order status:", err);
    res.status(500).json({ error: "Failed to update order status" });
  }
};

// ✅ Cancel order (delete)
exports.cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "✅ Order cancelled", order: deletedOrder });
  } catch (err) {
    console.error("❌ Error cancelling order:", err);
    res.status(500).json({ error: "Failed to cancel order" });
  }
};

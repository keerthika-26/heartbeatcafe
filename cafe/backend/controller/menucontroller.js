const MenuItem = require('../models/menuitems');

exports.addMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, imageUrl } = req.body;
    const item = new MenuItem({ name, description, price, category, imageUrl });
    await item.save();
    res.status(201).json({ message: 'Item added successfully', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMenuItems = async (req, res) => {
  const items = await MenuItem.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const updated = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ message: 'Item updated', updated });
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  await MenuItem.findByIdAndDelete(id);
  res.json({ message: 'Item deleted' });
};

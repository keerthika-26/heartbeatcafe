const express = require('express');
const router = express.Router();
const Menu = require('../models/menuitems'); // adjust path

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find(); // fetch all menu items
    res.status(200).json(menuItems);
  } catch (err) {
    console.error('Failed to fetch menu items:', err);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

module.exports = router;


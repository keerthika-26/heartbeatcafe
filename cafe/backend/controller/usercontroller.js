const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate unique userId
const generateUserId = (firstname) => {
  const randomNum = Math.floor(Math.random() * 90 + 10);
  return `${firstname}${randomNum}`;
};

exports.register = async (req, res) => {
  try {
    const {
      Firstname,
      secondname,
      email,
      username,
      password,
      phonenumber,
      adharnumber,
      address,
      role,
    } = req.body;

    // Save uploaded image path
    const profileImage = req.file ? req.file.path : null;

    // Check required fields
    if (!Firstname || !secondname || !email || !username || !password) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    // Unique userId
    let userId = generateUserId(Firstname);
    while (await User.findOne({ userId })) {
      userId = generateUserId(Firstname);
    }

    // Check username/email exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(400).json({ error: 'Username or Email exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      userId,
      Firstname,
      secondname,
      email,
      username,
      password: hashedPassword,
      phonenumber,
      adharnumber,
      address,
      role: role || 'customer',
      profileImage,
    });

    await newUser.save();

    res.status(201).json({ 
      message: 'User registered successfully', 
      userId, 
      username, 
      profileImage 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};



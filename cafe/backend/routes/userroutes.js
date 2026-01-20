const express = require('express');
const router = express.Router();
const { register, login } = require('../controller/usercontroller');
const multer = require('multer');
const path = require('path');

// Setup folder for profile images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // store images here
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueName);
  },
});

const upload = multer({ storage: storage });

// ✅ Register route with image upload
router.post('/register', upload.single('profileImage'), register);

// Login route
router.post('/login', login);

module.exports = router;




// routes/auth.js
const express = require("express");
const { register, login, logout } = require("../controllers/authController");

const router = express.Router();

// Register
router.post("/register", register);
// Login
router.post("/login", login);
// Logout
router.post("/logout", logout);

module.exports = router;

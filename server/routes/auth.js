const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (db) => {
  // ... existing signup route ...

  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const usersCollection = db.collection("users");

      // Find user by email
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Create and sign JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token, userId: user._id });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

  return router;
};

router.post("/signup", async (req, res) => {
  try {
    console.log("Received signup request:", req.body);
    const { username, email, password } = req.body;
    const usersCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const result = await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    console.log("User created successfully:", result.insertedId);
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});

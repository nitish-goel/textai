// controllers/authController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const registerUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // 1. Check empty fields
      if (!email || !password) {
        return res.status(400).json({ status:"fail", message: "All fields are required" });
      }
  
      // 2. Email format check
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ status:"fail", message: "Invalid email format" });
      }
  
      // 3. Password length
      if (password.length < 6) {
        return res.status(400).json({ status:"fail", message: "Password must be at least 6 characters" });
      }
  
      // 4. Check existing user
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ status:"fail", message: "User already exists" });
      }
  
      // 5. Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // 6. Create user
      const user = await User.create({
        email,
        password: hashedPassword,
      });
  
      // 7. Generate token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      res.status(201).json({ token, status:"success", message: "Registeration successfull" });
  
    } catch (error) {
      res.status(500).json({ status:"fail", message: "Server error" });
    }
  };

// LOGIN
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // 1. Check empty
      if (!email || !password) {
        return res.status(400).json({ status:"fail", message: "All fields are required" });
      }
  
      // 2. Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ status:"fail", message: "User not found" });
      }
  
      // 3. Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ status:"fail", message: "Incorrect password" });
      }
  
      // 4. Token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      res.json({ token , status:"success", message: "Login successfull" });
  
    } catch (error) {
      res.status(500).json({ status:"fail", message: "Server error" });
    }
  };
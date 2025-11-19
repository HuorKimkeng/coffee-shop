import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ===== LOGIN API =====
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Demo logic — replace with real DB check later
  if (username === "admin" && password === "1234") {
    return res.json({ message: "Login success!" });
  }

  return res.status(401).json({ message: "Invalid credentials!" });
});

// ===== REGISTER API =====
app.post("/api/register", (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Just log to console for now (simulate saving to database)
  console.log("🆕 New user registered:", fullname, email);
  return res.json({ message: "User registered successfully!" });
});

// ===== START SERVER =====
app.listen(PORT, () => { 
  console.log(`🚀 Server running on http://localhost:${PORT}`); 
});
// server.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/userModel.js";

dotenv.config();

const app = express();
app.use(express.json());

// ----- CORS Setup -----
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map(o => o.trim())
  : ["http://localhost:5173"]; // fallback for local dev

app.use(cors({
  origin: function(origin, callback) {
    // allow Postman, curl, or server-to-server requests
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) return callback(null, true);

    console.log("❌ CORS blocked:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Preflight requests handling (OPTIONS)
app.options("/*", cors());

// ----- Environment -----
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const SECRET_KEY = process.env.SECRET_KEY || "dev_secret_key";

// ----- Start server after DB connected -----
async function start() {
  if (!MONGO_URI) {
    console.error("MONGO_URI is not set. Exiting.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// ----- JWT Middleware -----
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing token" });

  jwt.verify(token, SECRET_KEY, (err, payload) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = payload;
    next();
  });
}

// ----- Routes -----
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/*login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/*profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => res.json({ status: "ok" }));

start();

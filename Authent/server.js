// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow all origins, fine for testing

// Environment
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Test Mongo connection first
async function start() {
  if (!MONGO_URI) {
    console.error("MONGO_URI is not set. Exiting.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Simple test route
    app.get("/", (req, res) => res.json({ status: "ok" }));

    // Another test route
    app.get("/test", (req, res) => res.json({ message: "Server is alive!" }));

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

start();


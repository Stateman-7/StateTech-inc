import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/usermodel.js";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());
const router = express.Router();
const SECRET_KEY = "MavellousSecretKey2025!";

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});
// connect to mongoDb Atlas
mongoose.connect("mongodb+srv://fitahnjoro4:Fitah777@cluster0.oucxeth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error(" MongoDB connection error:", err));

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
  res.json({ token });
});

// Protected route
router.get("/profile", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "No token" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    res.json({ message: "Access granted", user });
  });
});

// ✅ Mount the router
app.use("/", router);

  export default router;

    // start server
  const PORT = 5000;
  app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));



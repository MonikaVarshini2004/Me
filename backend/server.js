import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
const allowedOrigins = [
  "https://me-frontend-fn9q.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== "production") {
      callback(null, true);
    } else {
      callback(new Error("CORS blocked by origin"));
    }
  },
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: "https://me-frontend-fn9q.onrender.com",
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

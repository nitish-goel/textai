// server/server.js
import "./config/env.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import generateRoutes from "./routes/generateRoutes.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173'
//   }));

app.get("/", (req, res) => {
    res.send("API is running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/generate", generateRoutes);

const PORT = process.env.PORT || 5911;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
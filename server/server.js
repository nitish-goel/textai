// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
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


const PORT = process.env.PORT || 5911;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
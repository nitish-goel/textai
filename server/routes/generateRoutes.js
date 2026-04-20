// routes/generateRoutes.js
import express from "express";
import { generatePost } from "../controllers/generateController.js";
import { protect } from "../middleware/authMiddleware.js";
import { checkCredits } from "../middleware/creditMiddleware.js";

const router = express.Router();

router.post("/", protect, checkCredits, generatePost);

export default router;
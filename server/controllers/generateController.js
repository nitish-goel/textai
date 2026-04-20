// controllers/generateController.js
import { generateLinkedInPost } from "../services/openaiService.js";
import User from "../models/User.js";

export const generatePost = async (req, res) => {
    const { topic, tone, length } = req.body;

    try {
        // Validation
        if (!topic) {
            return res.status(400).json({ message: "Topic is required" });
        }

        // Generate content
        const content = await generateLinkedInPost({ topic, tone, length });

        // Deduct credit
        await User.findByIdAndUpdate(req.user._id, {
            $inc: { credits: -1 },
        });

        res.json({ content });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Generation failed" });
    }
};
// server/services/openaiService.js
import "../config/env.js";
import OpenAI from "openai";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateLinkedInPost = async ({ topic, tone, length }) => {
    const prompt = `
Write a LinkedIn post about "${topic}".
Tone: ${tone}
Length: ${length}
 
Make it engaging, professional, and include a hook + CTA.
`;

    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;
};
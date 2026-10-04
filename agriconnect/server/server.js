import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: "./server/.env" });

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/ai", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-6-luna",
      instructions: `
You are AgriConnect AI Assistant, an agricultural assistant for Indian farmers.

Help users with:
- Crop management
- Farming practices
- Weather-related farming guidance
- Soil and fertilizer basics
- Pest and disease guidance
- Market-price related questions
- Government schemes
- General agriculture questions

Rules:
- Answer in simple Hindi, Hinglish, or English according to the user's language.
- Keep answers practical and easy to understand.
- Do not claim to be a government official.
- If you don't know something, clearly say so.
`,
      input: message,
    });

    res.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Failed to get AI response.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`AI server running on http://localhost:${PORT}`);
});
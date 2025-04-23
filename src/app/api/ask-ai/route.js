// app/api/ask-ai/route.js
import { GoogleGenAI } from "@google/genai";

export async function POST(request) {
  const { prompt } = await request.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

 
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

    return Response.json({ response });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

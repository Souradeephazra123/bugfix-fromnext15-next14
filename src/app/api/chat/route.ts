import { type NextRequest, NextResponse } from "next/server";

// This prevents exposing the API key in client-side code
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Validate input
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 },
      );
    }

    // Call OpenRouter API
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://www.schapiracpa.com",
          "X-Title": "Schapira CPA Assistant",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant for Schapira CPA, a firm specializing in accounting services for manufacturing businesses. You can help with tax planning, R&D credits, cost accounting, and growth financing questions. Keep responses concise and professional. If you don't know something, suggest the user schedule a consultation.",
            },
            ...messages,
          ],
        }),
      },
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // In a real application, you would call an AI service here
    // This is a simple response for demonstration purposes
    const responses = [
      "That's an interesting question! Let me think about that for a moment.",
      "I understand what you're asking. Here's my perspective on that topic.",
      "Great question! I'd be happy to help you with that.",
      "I can definitely assist you with that. Let me provide some insights.",
      "That's a thoughtful inquiry. Here's what I think about that.",
    ];

    let aiResponse = responses[Math.floor(Math.random() * responses.length)];

    if (
      message.toLowerCase().includes("hello") ||
      message.toLowerCase().includes("hi")
    ) {
      aiResponse =
        "Hello there! It's great to meet you. What would you like to chat about?";
    }

    if (message.toLowerCase().includes("help")) {
      aiResponse =
        "I'm here to help! You can ask me questions about various topics, and I'll do my best to provide helpful responses.";
    }

    // Simulate server processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}

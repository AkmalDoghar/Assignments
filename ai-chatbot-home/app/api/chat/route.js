// app/api/chat/route.js
export async function POST(req) {
  try {
    const { messages } = await req.json();

    console.log("📩 Incoming messages:", messages);
    console.log("🔑 API Key exists:", !!process.env.OPENROUTER_API_KEY);
    console.log("🌐 SITE_URL:", process.env.SITE_URL);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.SITE_URL,
        'X-Title': 'My AI Chatbot'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages
      })
    });

    console.log("📡 Response status:", response.status);

    const text = await response.text();
    console.log("📦 Raw response:", text);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: text }), { status: response.status });
    }

    const data = JSON.parse(text);
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error("💥 Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

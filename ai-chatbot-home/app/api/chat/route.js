// app/api/chat/route.js
export async function POST(req) {
  const { messages } = await req.json();

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.SITE_URL || 'http://localhost:3000',
      'X-Title': 'My AI Chatbot'
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages
    })
  });

  const data = await response.json();
  return Response.json(data);
}

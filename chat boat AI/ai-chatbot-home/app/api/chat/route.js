// app/api/chat/route.js

export async function POST(req) {
  const { messages } = await req.json();

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:3000', // 👈 Change this if deploying
      'X-Title': 'My AI Chatbot'
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo', // or try 'mistralai/mixtral-8x7b' or 'anthropic/claude-2'
      messages
    })
  });

  const data = await response.json();
  return Response.json(data);
}

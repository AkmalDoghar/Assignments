export async function POST(req) {
  try {
    const { messages } = await req.json();

    const headers = {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Title': 'My AI Chatbot'
    };

    if (process.env.SITE_URL && !process.env.SITE_URL.includes('localhost')) {
      headers['Referer'] = process.env.SITE_URL; // Correct header name
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

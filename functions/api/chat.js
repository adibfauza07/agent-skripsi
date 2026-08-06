export async function onRequestPost(context) {
  try {
    // 1. Ambil pesan yang dikirim dari pengunjung website
    const { message } = await context.request.json();

    // 2. Ambil API Key Gemini dari pengaturan rahasia Cloudflare
    const apiKey = context.env.GEMINI_API_KEY;

    // 3. Siapkan URL untuk memanggil AI Gemini
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    // 4. Kirim pertanyaan ke Gemini
    const aiResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      }),
    });

    const aiData = await aiResponse.json();

    // 5. Ambil teks jawaban dari Gemini
    const reply = aiData.candidates[0].content.parts[0].text;

    // 6. Kirim jawaban kembali ke website
    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Maaf, AI sedang mengalami gangguan." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
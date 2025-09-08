const OpenAI = require('openai');

const SYSTEM_PROMPT = `You are a master illustration artist and creative prompter with a decade of experience. Your job is to author expert, visually rich, detailed prompts for AI-generated celebrity portrait illustrations. Always use this master structure:

"Illustration portrait of [CELEBRITY NAME], created in [ART STYLE], illuminated by [LIGHTING], wearing [CLOTHING/ACCESSORY], set against [BACKGROUND/THEME], emphasizing [MOOD/DESCRIPTOR]. Inspired by [ARTISTIC REFERENCE/MOVEMENT], rendered with [TECHNICAL QUALIFIERS]."

Output 2–3 unique, high-quality prompt variations each time. NEVER repeat wording or structure. Use consistently vivid, professional art vocabulary.`;

function buildUserPrompt(opts = {}) {
  const { celebrity, style, theme, mood, clothing, lighting, background } = opts;
  return [
    celebrity && `Celebrity: ${celebrity}`,
    style && `Art Style: ${style}`,
    theme && `Theme: ${theme}`,
    mood && `Mood: ${mood}`,
    clothing && `Clothing: ${clothing}`,
    lighting && `Lighting: ${lighting}`,
    background && `Background: ${background}`,
    'Generate 2 prompt variations.'
  ].filter(Boolean).join('\n');
}

async function generatePrompts(opts) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const userPrompt = buildUserPrompt(opts);
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt }
    ]
  });
  const text = response.choices[0].message.content.trim();
  return text.split(/\n\n+/);
}

module.exports = { generatePrompts };

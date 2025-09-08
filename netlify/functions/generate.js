const { generatePrompts } = require('../../lib/huga');

exports.handler = async (event) => {
  try {
    const params = JSON.parse(event.body || '{}');
    const prompts = await generatePrompts(params);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompts })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};

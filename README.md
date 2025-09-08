# Celebrity Portrait Prompt App

This project demonstrates a simple web app that generates illustration prompts for celebrity portraits using OpenAI's API.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Deploy to Netlify with an `OPENAI_API_KEY` environment variable.
3. The serverless function lives in `netlify/functions/generate.js` and uses a small custom library `lib/huga.js` for prompt construction.

## Usage

Open `index.html` locally or through a Netlify deployment. Fill in the fields and generate 2 unique prompt variations. Copy any prompt for use in art generators.

This starter can be extended with richer UI, saved prompts, and social sharing.

// ===============================
// Data (can be replaced by fetch)
// ===============================
const CELEBRITY_LIBRARY = {
  male: {
    hollywood: [
      "Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Dwayne Johnson",
      "Chris Hemsworth", "Robert Downey Jr.", "Johnny Depp", "Keanu Reeves",
      "Will Smith", "Hugh Jackman"
    ],
    bollywood: [
      "Shah Rukh Khan", "Aamir Khan", "Salman Khan", "Ranbir Kapoor",
      "Hrithik Roshan", "Akshay Kumar", "Ranveer Singh", "Amitabh Bachchan",
      "Saif Ali Khan", "Varun Dhawan"
    ],
    hiphop: [
      "Jay-Z", "Eminem", "Kanye West", "Drake", "Kendrick Lamar",
      "J. Cole", "Travis Scott", "50 Cent", "Lil Wayne", "Snoop Dogg"
    ],
    singers: [
      "Ed Sheeran", "Justin Bieber", "Chris Brown", "Bruno Mars",
      "Shawn Mendes", "The Weeknd", "Harry Styles", "Adam Levine",
      "Sam Smith", "Usher"
    ],
    sports: [
      "Lionel Messi", "Cristiano Ronaldo", "LeBron James", "Virat Kohli",
      "Roger Federer", "Michael Jordan", "Neymar Jr.", "Mike Tyson",
      "Conor McGregor", "Tom Brady"
    ],
    kpop: [
      "RM", "Jin", "Suga", "J-Hope", "Jimin",
      "V", "Jungkook", "Taeyang", "G-Dragon", "Jackson Wang"
    ],
    influencers: [
      "MrBeast", "PewDiePie", "Markiplier", "Logan Paul", "KSI",
      "Ninja", "David Dobrik", "Marques Brownlee", "Zach King", "Khaby Lame"
    ],
    models: [
      "Tyson Beckford", "David Gandy", "Lucky Blue Smith", "Sean O'Pry",
      "Jon Kortajarena", "Noah Mills", "Marcus Schenkenberg", "Simon Nessman",
      "Oliver Cheshire", "Francisco Lachowski"
    ],
    directors: [
      "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese",
      "James Cameron", "Ridley Scott", "Peter Jackson", "Denis Villeneuve",
      "Guillermo del Toro", "Tim Burton"
    ]
  },
  female: {
    hollywood: [
      "Scarlett Johansson", "Meryl Streep", "Angelina Jolie", "Jennifer Lawrence",
      "Emma Stone", "Natalie Portman", "Charlize Theron", "Julia Roberts",
      "Keira Knightley", "Anne Hathaway"
    ],
    bollywood: [
      "Priyanka Chopra", "Deepika Padukone", "Kareena Kapoor", "Katrina Kaif",
      "Alia Bhatt", "Aishwarya Rai", "Anushka Sharma", "Vidya Balan",
      "Shraddha Kapoor", "Jacqueline Fernandez"
    ],
    hiphop: [
      "Nicki Minaj", "Cardi B", "Megan Thee Stallion", "Doja Cat", "Lil' Kim",
      "Queen Latifah", "Saweetie", "Iggy Azalea", "Missy Elliott", "Eve"
    ],
    singers: [
      "Beyonce", "Ariana Grande", "Adele", "Taylor Swift", "Rihanna",
      "Billie Eilish", "Lady Gaga", "Selena Gomez", "Katy Perry", "Dua Lipa"
    ],
    sports: [
      "Serena Williams", "Maria Sharapova", "Simone Biles", "Megan Rapinoe",
      "Sania Mirza", "Ronda Rousey", "Danica Patrick", "Lindsey Vonn",
      "Naomi Osaka", "Alex Morgan"
    ],
    kpop: [
      "Lisa", "Jennie", "Jisoo", "Rosé", "IU",
      "Taeyeon", "Sunmi", "Hwasa", "Suzy", "Seulgi"
    ],
    influencers: [
      "Addison Rae", "Charli D'Amelio", "Emma Chamberlain", "Lilly Singh",
      "Liza Koshy", "NikkieTutorials", "Pokimane", "Sommer Ray", "Bella Poarch", "Huda Kattan"
    ],
    models: [
      "Gigi Hadid", "Kendall Jenner", "Bella Hadid", "Cara Delevingne",
      "Karlie Kloss", "Adriana Lima", "Miranda Kerr", "Joan Smalls",
      "Liu Wen", "Barbara Palvin"
    ],
    directors: [
      "Kathryn Bigelow", "Sofia Coppola", "Patty Jenkins", "Greta Gerwig",
      "Ava DuVernay", "Chloe Zhao", "Jane Campion", "Nora Ephron",
      "Dee Rees", "Niki Caro"
    ]
  }
};

function getAllCelebrities() {
  return Object.values(CELEBRITY_LIBRARY).flatMap(ind =>
    Object.values(ind).flat()
  );
}

function getCelebritiesByFilter(gender, industry) {
  if (gender && industry) {
    return CELEBRITY_LIBRARY[gender]?.[industry] || [];
  }
  if (gender) {
    return Object.values(CELEBRITY_LIBRARY[gender] || {}).flat();
  }
  if (industry) {
    return Object.values(CELEBRITY_LIBRARY).flatMap(g => g[industry] || []);
  }
  return getAllCelebrities();
}
const ART_STYLES = [
  "Digital Painting", "Pop Art", "Anime", "Line Art", "Hyperrealistic",
  "Oil Canvas", "Watercolor", "Sketch", "Fantasy", "Comic Style",
  "Surrealism", "Impressionism", "Pixel Art", "Vector Art", "Minimalist Vector",
  "Photorealism", "Steampunk", "Cyberpunk", "Low Poly", "Neon Noir"
];
const THEMES = [
  "Futuristic", "Glamour", "Retro 80s", "Royal", "Festival",
  "Cyberpunk", "Romantic", "Minimalist", "Mythological", "Cosmic",
  "Post-Apocalyptic", "Steampunk", "Underwater", "Jungle Adventure", "Noir",
  "Space Opera", "Winter Wonderland", "Desert Oasis", "Urban Street", "Fantasy Forest"
];
const LIGHTINGS = [
  "cinematic lighting", "golden hour lighting", "neon rim-light", "soft studio lighting", "dramatic side lighting",
  "hard backlighting", "rembrandt lighting", "spotlight", "bioluminescent glow", "volumetric god rays",
  "moonlit scene"
];
const CLOTHINGS = [
  "modern elegant attire", "traditional ethnic wear", "futuristic fashion", "royal costume", "casual contemporary",
  "streetwear", "armored battle suit", "vintage 1920s", "post-apocalyptic gear", "superhero costume",
  "steampunk outfit"
];
const ART_REFERENCES = [
  "Artgerm", "Loish", "Greg Rutkowski", "Moebius", "Van Gogh", "Andy Warhol", "Marvel Comics", "Studio Ghibli",
  "H.R. Giger", "Hayao Miyazaki", "Banksy", "Pablo Picasso", "Frida Kahlo",
  "Salvador Dali", "Katsuhiro Otomo", "Roy Lichtenstein", "Yayoi Kusama", "Ralph Steadman"
];
const TECH_TERMS = [
  "sharp focus", "ultra-detailed", "concept art", "8K resolution", "rich textures", "vibrant colors", "dynamic composition", "high-res illustration",
  "physically based rendering", "ray tracing", "subsurface scattering", "depth of field", "cinematic color grading",
  "volumetric lighting", "global illumination", "tilt-shift lens", "octane render", "unreal engine", "hdr lighting"
];

// ================
// UI Initialization
// ================
window.addEventListener('DOMContentLoaded', () => {
updateCelebritySources();
renderGrid('styleGrid', ART_STYLES);
renderGrid('themeGrid', THEMES);
document.getElementById('genderFilter').onchange = updateCelebritySources;
document.getElementById('industryFilter').onchange = updateCelebritySources;
document.getElementById('celebrityInput').addEventListener('input', handleCelebrityInput);
});

function updateCelebritySources() {
const gender = document.getElementById('genderFilter').value;
const industry = document.getElementById('industryFilter').value;
renderChips('celebrityGrid', getCelebritiesByFilter(gender, industry).slice(0, 8));
handleCelebrityInput();
}

function handleCelebrityInput() {
const input = document.getElementById('celebrityInput');
const suggestions = document.getElementById('celebritySuggestions');
const gender = document.getElementById('genderFilter').value;
const industry = document.getElementById('industryFilter').value;
const query = input.value.toLowerCase();
const matches = getCelebritiesByFilter(gender, industry)
  .filter(name => name.toLowerCase().includes(query))
  .slice(0, 5);
suggestions.innerHTML = '';
if (matches.length && query) {
  matches.forEach(name => {
    const div = document.createElement('div');
    div.textContent = name;
    div.onclick = () => {
      input.value = name;
      suggestions.innerHTML = '';
      suggestions.style.display = 'none';
    };
    suggestions.appendChild(div);
  });
  suggestions.style.display = 'block';
} else {
  suggestions.style.display = 'none';
}
}

document.addEventListener('click', e => {
const search = document.querySelector('.celebrity-search');
if (search && !search.contains(e.target)) {
  const sugg = document.getElementById('celebritySuggestions');
  sugg.innerHTML = '';
  sugg.style.display = 'none';
}
});

function renderChips(containerId, items) {
const container = document.getElementById(containerId);
if (!container) return;
container.innerHTML = '';
items.forEach(name => {
const span = document.createElement('span');
span.textContent = name;
span.onclick = () => {
document.getElementById('celebrityInput').value = name;
};
container.appendChild(span);
});
}
function renderGrid(containerId, items) {
const container = document.getElementById(containerId);
if (!container) return;
container.innerHTML = '';
items.forEach(item => {
const span = document.createElement('span');
span.textContent = item;
span.onclick = () => setSelected(container, span, item);
container.appendChild(span);
});
}
function setSelected(container, span, value) {
Array.from(container.children).forEach(child => child.classList.remove('selected'));
span.classList.add('selected');
container.setAttribute('data-selected', value);
}
// ===============
// Prompt Generator
// ===============

// Gemini API integration
const GEMINI_API_KEY = "AIzaSyDUYUjoLLILnyNZjO9aLaPQ7n7yO9lhP2U";
const MIN_PROMPT_CHARS = 1000;
const MAX_PROMPT_CHARS = 1300;

function ensurePromptLength(text) {
  if (!text) return text;
  let result = text.trim();
  if (result.length > MAX_PROMPT_CHARS) {
    result = result.slice(0, MAX_PROMPT_CHARS);
  }
  if (result.length < MIN_PROMPT_CHARS) {
    const filler =
      " Elaborate with imaginative, professional detail, describing atmosphere, textures, colors, emotions, and nuanced scene elements.";
    while (result.length < MIN_PROMPT_CHARS) {
      result += filler;
    }
    if (result.length > MAX_PROMPT_CHARS) {
      result = result.slice(0, MAX_PROMPT_CHARS);
    }
  }
  return result;
}

async function enhancePromptWithAI(prompt) {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Act as a creative professional with over 10 years of experience. Rewrite the following art prompt into a single vivid description between ${MIN_PROMPT_CHARS} and ${MAX_PROMPT_CHARS} characters:\n${prompt}`,
                },
              ],
            },
          ],
          generationConfig: { maxOutputTokens: 1024 },
        }),
      }
    );
    const data = await response.json();
    const refined =
      data.candidates?.[0]?.content?.parts?.map((p) => p.text).join(" ").trim() ||
      null;
    return ensurePromptLength(refined);
  } catch (err) {
    console.error("Gemini API error", err);
    return null;
  }
}
function getSelectedValue(containerId) {
const grid = document.getElementById(containerId);
if (!grid) return '';
return grid.getAttribute('data-selected') || '';
}
function getRandom(items) {
return items[Math.floor(Math.random() * items.length)];
}
function buildPrompt(data) {
// Use structure: "Illustration portrait of [CELEB], created in [STYLE], with [LIGHTING], wearing [CLOTHING], set in [THEME], emphasizing [MOOD]. Rendered in the style of [REFERENCE], with [TECH TERMS]."
const reference = data.artRef
? data.artRef
: getRandom(ART_REFERENCES);
const tech = data.techTerms
? data.techTerms
: [getRandom(TECH_TERMS), getRandom(TECH_TERMS)].filter((v,i,a)=>a.indexOf(v)===i).join(", ");

return `Illustration portrait of ${data.celebrity}, created in ${data.artStyle}` +
  `${data.expression ? ", showing a " + data.expression + " expression" : ""}` +
  `${data.lighting ? ", with " + data.lighting : ""}` +
  `${data.clothing ? ", wearing " + data.clothing : ""}` +
  `, set in ${data.theme}` +
  `${data.background ? ", against a " + data.background + " background" : ""}` +
  `${data.features ? ", highlighting " + data.features : ""}.` +
  ` Rendered in the style of ${reference}, with ${tech}.`;
}
function generatePromptVariations(inputs) {
const variations = [];
for (let i = 0; i < 2; i++) {
// Slightly randomize art reference and tech terms
let variant = Object.assign({}, inputs);
variant.artRef = getRandom(ART_REFERENCES);
let techA = getRandom(TECH_TERMS), techB = getRandom(TECH_TERMS);
if (techA === techB) techB = getRandom(TECH_TERMS);
variant.techTerms = `${techA}, ${techB}`;
variations.push(buildPrompt(variant));
}
return variations;
}
// =============
// Event Handlers
// =============
document.getElementById('generateBtn').onclick = async function() {
const celebrity = document.getElementById('celebrityInput').value.trim();
if (!celebrity) {
alert('Please enter or select a celebrity.');
return;
}
const artStyle = getSelectedValue('styleGrid') || ART_STYLES[0];
const theme = getSelectedValue('themeGrid') || THEMES[0];
const lighting = document.getElementById('lightingSelect').value;
const clothing = document.getElementById('outfitSelect').value;
const expression = document.getElementById('expressionSelect').value;
const background = document.getElementById('backgroundSelect').value;
const features = document.getElementById('specialFeatures').value.trim();
const basePrompts = generatePromptVariations({
celebrity, artStyle, theme,
lighting, clothing, background, expression, features
});
// Show loading overlay
const overlay = document.getElementById('loadingOverlay');
overlay.classList.add('active');
const prompts = await Promise.all(
  basePrompts.map(async (p) => {
    const aiPrompt = await enhancePromptWithAI(p);
    return ensurePromptLength(aiPrompt || p);
  })
);
overlay.classList.remove('active');
displayPrompts(prompts);
};
function displayPrompts(prompts) {
const pContainer = document.getElementById('promptsContainer');
pContainer.innerHTML = '';
prompts.forEach(prompt => {
const promptDiv = document.createElement('div');
promptDiv.className = 'code-prompt';
const code = document.createElement('code');
code.textContent = prompt;
promptDiv.appendChild(code);
const copyBtn = document.createElement('button');
copyBtn.className = 'copy-btn';
copyBtn.textContent = 'Copy';
copyBtn.onclick = () => {
navigator.clipboard.writeText(prompt);
copyBtn.textContent = 'Copied!';
setTimeout(() => copyBtn.textContent = 'Copy', 1300);
};
promptDiv.appendChild(copyBtn);
pContainer.appendChild(promptDiv);
});
}
const clearBtn = document.getElementById('clearBtn');
if (clearBtn) {
clearBtn.onclick = () => {
  document.getElementById('promptsContainer').innerHTML = '';
};
}
const advToggle = document.getElementById('advancedToggle');
if (advToggle) {
advToggle.onclick = () => {
  const adv = document.getElementById('advancedOptions');
  if (adv) adv.classList.toggle('open');
};
}
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
themeToggle.onclick = () => {
  document.body.classList.toggle('night');
};
}

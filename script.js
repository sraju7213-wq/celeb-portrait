// ===============================
// Data (can be replaced by fetch)
// ===============================
const CELEBRITY_LIBRARY = {
  male: {
    hollywood: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise"],
    bollywood: ["Shah Rukh Khan", "Aamir Khan", "Salman Khan"],
    hiphop: ["Jay-Z", "Eminem", "Kanye West"],
    singers: ["Ed Sheeran", "Justin Bieber", "Chris Brown"]
  },
  female: {
    hollywood: ["Scarlett Johansson", "Meryl Streep", "Angelina Jolie"],
    bollywood: ["Priyanka Chopra", "Deepika Padukone", "Kareena Kapoor"],
    hiphop: ["Nicki Minaj", "Cardi B", "Megan Thee Stallion"],
    singers: ["Beyonce", "Ariana Grande", "Adele"]
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
"Digital Painting",
"Pop Art",
"Anime",
"Line Art",
"Hyperrealistic",
"Oil Canvas",
"Watercolor",
"Sketch",
"Fantasy",
"Comic Style"
];
const THEMES = [
"Futuristic",
"Glamour",
"Retro 80s",
"Royal",
"Festival",
"Cyberpunk",
"Romantic",
"Minimalist",
"Mythological",
"Cosmic"
];
const LIGHTINGS = [
"cinematic lighting", "golden hour lighting", "neon rim-light", "soft studio lighting", "dramatic side lighting"
];
const CLOTHINGS = [
"modern elegant attire", "traditional ethnic wear", "futuristic fashion", "royal costume", "casual contemporary"
];
const ART_REFERENCES = [
"Artgerm", "Loish", "Greg Rutkowski", "Moebius", "Van Gogh", "Andy Warhol", "Marvel Comics", "Studio Ghibli"
];
const TECH_TERMS = [
"sharp focus", "ultra-detailed", "concept art", "8K resolution", "rich textures", "vibrant colors", "dynamic composition", "high-res illustration"
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
document.getElementById('generateBtn').onclick = function() {
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
const prompts = generatePromptVariations({
celebrity, artStyle, theme,
lighting, clothing, background, expression, features
});
// Show loading overlay
const overlay = document.getElementById('loadingOverlay');
overlay.classList.add('active');
setTimeout(() => {
overlay.classList.remove('active');
displayPrompts(prompts);
}, 500);
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

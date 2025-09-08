// ===============================
// Data (can be replaced by fetch)
// ===============================
const CELEBRITY_LIST = [
"Deepika Padukone",
"Shah Rukh Khan",
"Priyanka Chopra",
"Alia Bhatt",
"Ranveer Singh",
"Salman Khan",
"Amitabh Bachchan",
"Ranbir Kapoor",
"Virat Kohli",
"Kareena Kapoor",
"Katrina Kaif",
"Hrithik Roshan",
"Aishwarya Rai",
"Robert Downey Jr.",
"Zendaya",
"Emma Watson",
"BTS RM",
"Taylor Swift",
"Billie Eilish",
"Chris Hemsworth"
];
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
renderChips('celebrityChips', CELEBRITY_LIST.slice(0, 8));
renderGrid('styleGrid', ART_STYLES);
renderGrid('themeGrid', THEMES);
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

return `Illustration portrait of ${data.celebrity}, created in ${data.artStyle}${data.lighting ? ", with " + data.lighting : ""}${data.clothing ? ", wearing " + data.clothing : ""}, set in ${data.theme}, emphasizing ${data.mood || data.theme.toLowerCase()} mood. Rendered in the style of ${reference}, with ${tech}.`;
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
const clothing = document.getElementById('clothingSelect').value;
const prompts = generatePromptVariations({
celebrity, artStyle, theme,
lighting, clothing
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
document.getElementById('clearBtn').onclick = () => {
document.getElementById('promptsContainer').innerHTML = '';
};
document.getElementById('advancedToggle').onclick = () => {
const adv = document.getElementById('advancedOptions');
adv.classList.toggle('open');
};
document.getElementById('themeToggle').onclick = () => {
document.body.classList.toggle('night');
};

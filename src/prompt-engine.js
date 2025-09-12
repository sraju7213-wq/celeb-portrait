import { CHARACTER_ELEMENTS, TRENDING_STYLES_URL, CULTURAL_ELEMENTS_URL, SEASONAL_THEMES_URL } from './data/elements.js';
import { weightedRandom, remember } from './utils/random.js';

/**
 * Level configuration controls how many descriptive layers to include.
 */
const LEVEL_CONFIG = {
  beginner: { layers: 3 },
  intermediate: { layers: 5 },
  professional: { layers: 7 }
};

// recent selections per category to avoid repetition
const recentSelections = new Map();

// dynamic libraries populated at runtime
let trendingStyles = [];
let culturalElements = [];
let seasonalThemes = [];

async function refreshDynamicData() {
  try {
    const [styleRes, cultureRes, seasonRes] = await Promise.all([
      fetch(TRENDING_STYLES_URL).then(r => r.json()),
      fetch(CULTURAL_ELEMENTS_URL).then(r => r.json()),
      fetch(SEASONAL_THEMES_URL).then(r => r.json())
    ]);
    trendingStyles = styleRes.painters || styleRes || [];
    culturalElements = cultureRes.dance_moves || cultureRes || [];
    seasonalThemes = seasonRes.thanksgiving_meals || seasonRes || [];
  } catch {
    // network failures fall back to defaults
  }
}

refreshDynamicData();

/**
 * Build layered description pieces based on user level configuration.
 */
function buildLayers(level, excludeRecent = false) {
  const cfg = LEVEL_CONFIG[level] || LEVEL_CONFIG.intermediate;
  const pieces = [];
  pieces.push(weightedRandom(CHARACTER_ELEMENTS.styles, excludeRecent ? recentSelections.get('style') : new Set()));
  pieces.push(weightedRandom(CHARACTER_ELEMENTS.emotions, excludeRecent ? recentSelections.get('emotion') : new Set()));
  pieces.push(weightedRandom(CHARACTER_ELEMENTS.atmospheres, excludeRecent ? recentSelections.get('atmosphere') : new Set()));
  if (cfg.layers > 3) pieces.push(weightedRandom(CHARACTER_ELEMENTS.lighting, excludeRecent ? recentSelections.get('lighting') : new Set()));
  if (cfg.layers > 4) pieces.push(weightedRandom(CHARACTER_ELEMENTS.composition, excludeRecent ? recentSelections.get('composition') : new Set()));
  if (cfg.layers > 5) pieces.push(weightedRandom(CHARACTER_ELEMENTS.technical, excludeRecent ? recentSelections.get('technical') : new Set()));
  if (cfg.layers > 6) pieces.push(weightedRandom(CHARACTER_ELEMENTS.extras, excludeRecent ? recentSelections.get('extras') : new Set()));
  return pieces;
}

/**
 * Conduct simple quality checks ensuring variety and content.
 */
function qaCheck(parts) {
  const unique = new Set(parts);
  return unique.size === parts.length && parts.every(Boolean);
}

/**
 * Generate a creative, layered portrait prompt.
 */
export function generateCreativePortraitPrompt({ celebrity, userLevel = 'intermediate', theme, excludeRecent = false }) {
  const layers = buildLayers(userLevel, excludeRecent);
  if (!qaCheck(layers)) return generateCreativePortraitPrompt({ celebrity, userLevel, theme, excludeRecent });

  layers.forEach((val, idx) => {
    const keys = ['style','emotion','atmosphere','lighting','composition','technical','extras'];
    remember(recentSelections, keys[idx], val);
  });

  const style = layers[0];
  const emotion = layers[1];
  const atmosphere = layers[2];
  const lighting = layers[3];
  const composition = layers[4];
  const technical = layers[5];
  const extras = layers[6];

  const dynamicStyle = trendingStyles.length ? `, inspired by ${weightedRandom(trendingStyles.map(v=>({value:v, weight:1})))}` : '';
  const cultural = culturalElements.length ? ` infused with ${weightedRandom(culturalElements.map(v=>({value:v, weight:1})))} culture` : '';
  const seasonal = seasonalThemes.length ? ` set against ${weightedRandom(seasonalThemes.map(v=>({value:v, weight:1})))} vibes` : '';

  const prompt = `Portrait of ${celebrity} in ${style} style, ${theme || 'thematic'} theme. ` +
    `${emotion} expression, ${atmosphere}${lighting?`, lit with ${lighting}`:''}${composition?`, composition using ${composition}`:''}${technical?`, ${technical}`:''}${extras?`, featuring ${extras}`:''}${dynamicStyle}${cultural}${seasonal}.`;
  return prompt.replace(/\s+/g, ' ').trim();
}

export default { generateCreativePortraitPrompt };

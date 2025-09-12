export const CHARACTER_ELEMENTS = {
  styles: [
    { value: 'surrealist', weight: 2 },
    { value: 'impressionist', weight: 1 },
    { value: 'photorealistic', weight: 3 },
    { value: 'cubist', weight: 1 },
    { value: 'digital matte', weight: 2 },
    { value: 'watercolor', weight: 2 },
    { value: 'neo-noir', weight: 1 },
    { value: 'vaporwave', weight: 1 },
    { value: 'art deco', weight: 1 },
    { value: 'renaissance', weight: 1 }
  ],
  emotions: [
    { value: 'wistful', weight: 1 },
    { value: 'defiant', weight: 1 },
    { value: 'serene', weight: 2 },
    { value: 'melancholic', weight: 1 },
    { value: 'euphoric', weight: 1 },
    { value: 'contemplative', weight: 1 },
    { value: 'enigmatic', weight: 1 },
    { value: 'triumphant', weight: 1 },
    { value: 'brooding', weight: 1 }
  ],
  atmospheres: [
    { value: 'mist-laden alley', weight: 1 },
    { value: 'sun-drenched meadow', weight: 1 },
    { value: 'rain-soaked neon city', weight: 2 },
    { value: 'ancient temple ruins', weight: 1 },
    { value: 'cosmic nebula horizon', weight: 1 },
    { value: 'moonlit seashore', weight: 1 },
    { value: 'fiery volcanic ridge', weight: 1 }
  ],
  technical: [
    { value: '8k ultra-realistic', weight: 2 },
    { value: 'dynamic global illumination', weight: 1 },
    { value: 'volumetric fog', weight: 1 },
    { value: 'sub-surface scattering', weight: 1 },
    { value: 'anamorphic lens', weight: 1 },
    { value: 'tilt-shift focus', weight: 1 },
    { value: 'HDR tonemapped', weight: 1 }
  ],
  lighting: [
    { value: 'rim lighting', weight: 1 },
    { value: 'golden hour glow', weight: 2 },
    { value: 'chiaroscuro', weight: 1 },
    { value: 'studio softbox', weight: 1 },
    { value: 'bioluminescent accents', weight: 1 }
  ],
  composition: [
    { value: 'rule of thirds', weight: 2 },
    { value: 'Dutch angle', weight: 1 },
    { value: 'close-up portrait', weight: 2 },
    { value: 'wide cinematic frame', weight: 1 },
    { value: 'symmetrical balance', weight: 1 }
  ],
  extras: [
    { value: 'ethereal particles', weight: 1 },
    { value: 'floating petals', weight: 1 },
    { value: 'digital glitch effects', weight: 1 },
    { value: 'celestial halos', weight: 1 },
    { value: 'gossamer veils', weight: 1 }
  ]
};

export const TRENDING_STYLES_URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/art/painters.json';
export const CULTURAL_ELEMENTS_URL = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/culture/dance_moves.json';
export const SEASONAL_THEMES_URL = ['https://raw.githubusercontent.com', '/dariusk/corpora/master/data/holidays/' +
  'thanksgiving_meals.json'].join('');

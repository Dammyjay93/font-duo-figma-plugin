interface FontPair {
  heading: string;
  body: string;
}

figma.showUI(__html__, { width: 300, height: 450 });

figma.ui.onmessage = async (msg: { type: string; vibe?: string }) => {
  if (msg.type === 'generate-pair' && msg.vibe) {
    const pair = generateFontPair(msg.vibe);
    const score = calculateAccessibilityScore(pair);
    
    figma.ui.postMessage({
      type: 'update-preview',
      headingFont: pair.heading,
      bodyFont: pair.body,
      score: score
    });
  } else if (msg.type === 'apply-to-design') {
    // We'll implement this later
    console.log('Applying to design...');
  }
};

function generateFontPair(vibe: string) {
  const pairs: { [key: string]: { heading: string; body: string } } = {
    minimalist: { heading: 'Helvetica', body: 'Arial' },
    modern: { heading: 'Futura', body: 'Roboto' },
    classic: { heading: 'Garamond', body: 'Times New Roman' }
  };
  return pairs[vibe] || pairs.minimalist;
}

function calculateAccessibilityScore(pair: { heading: string; body: string }): number {
  // This is a placeholder. We'll implement a real scoring system later.
  return Math.floor(Math.random() * 41) + 60; // Random score between 60 and 100
}

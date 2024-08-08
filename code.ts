figma.showUI(__html__, { width: 232, height: 400, themeColors: true });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-pair') {
    const pair = generateFontPair(msg.vibe);
    
    figma.ui.postMessage({
      type: 'update-preview',
      headingFont: pair.heading,
      bodyFont: pair.body
    });
  }
};

function generateFontPair(vibe: string): { heading: string; body: string } {
  const pairs: { [key: string]: { heading: string; body: string } } = {
    elegant: { heading: 'Playfair Display', body: 'Lato' },
    minimalist: { heading: 'Helvetica', body: 'Arial' },
    // Add more pairs as needed
  };
  return pairs[vibe] || pairs.minimalist;
}

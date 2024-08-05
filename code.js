figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-text') {
    const text = figma.createText();
    text.characters = "Font Duo";
    figma.currentPage.appendChild(text);
    figma.currentPage.selection = [text];
    figma.viewport.scrollAndZoomIntoView([text]);
  }
};

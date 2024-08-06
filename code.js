"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 300, height: 450 });
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === 'generate-pair' && msg.vibe) {
        const pair = generateFontPair(msg.vibe);
        const score = calculateAccessibilityScore(pair);
        figma.ui.postMessage({
            type: 'update-preview',
            headingFont: pair.heading,
            bodyFont: pair.body,
            score: score
        });
    }
    else if (msg.type === 'apply-to-design') {
        // We'll implement this later
        console.log('Applying to design...');
    }
});
function generateFontPair(vibe) {
    const pairs = {
        minimalist: { heading: 'Helvetica', body: 'Arial' },
        modern: { heading: 'Futura', body: 'Roboto' },
        classic: { heading: 'Garamond', body: 'Times New Roman' }
    };
    return pairs[vibe] || pairs.minimalist;
}
function calculateAccessibilityScore(pair) {
    // This is a placeholder. We'll implement a real scoring system later.
    return Math.floor(Math.random() * 41) + 60; // Random score between 60 and 100
}

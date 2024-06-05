// Calculate Break point
function calculateBreakpoints(
  originalWidth,
  originalHeight,
  originalScreenWidth
) {
  const breakpoints = {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1512,
  };

  const scaledDimensions = {
    width: {},
    height: {},
  };

  for (const [key, value] of Object.entries(breakpoints)) {
    const scale = value / originalScreenWidth;
    scaledDimensions.width[key] = `${Math.round(originalWidth * scale)}px`;
    scaledDimensions.height[key] = `${Math.round(originalHeight * scale)}px`;
  }

  return scaledDimensions;
}

const originalWidth = 262;
const originalHeight = 320;
const originalScreenWidth = 1512;

const breakpoints = calculateBreakpoints(
  originalWidth,
  originalHeight,
  originalScreenWidth
);

console.log(breakpoints);




// Calculate fontSize

function calculateFontSizes(
  originalFontSize,
  originalScreenWidth,
  minFontSize = 6
) {
  const breakpoints = {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1512,
  };

  const scaledFontSizes = {};

  for (const [key, value] of Object.entries(breakpoints)) {
    const scale = value / originalScreenWidth;
    const calculatedSize = originalFontSize * scale;
    scaledFontSizes[key] = `${Math.max(calculatedSize, minFontSize).toFixed(
      2
    )}px`;
  }

  return scaledFontSizes;
}

const originalFontSize = 18; // example font size in px
//   const originalScreenWidth = 1512;
const minFontSize = 6;

const fontSizes = calculateFontSizes(
  originalFontSize,
  originalScreenWidth,
  minFontSize
);
console.log(fontSizes);




//Calculate padding

function calculatePadding(
  originalPadding,
  originalScreenWidth,
  minPadding = 0
) {
  const breakpoints = {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1512,
  };

  const scaledPadding = {};

  for (const [key, value] of Object.entries(breakpoints)) {
    const scale = value / originalScreenWidth;
    const calculatedPadding = originalPadding * scale;
    scaledPadding[key] = `${Math.max(calculatedPadding, minPadding).toFixed(
      2
    )}px`;
  }

  return scaledPadding;
}

const originalPadding = 100; // example padding in px
//   const originalScreenWidth = 1512;
const minPadding = 6; // minimum padding value in px

const paddingValues = calculatePadding(
  originalPadding,
  originalScreenWidth,
  minPadding
);
console.log(paddingValues);

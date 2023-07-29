const fs = require('fs');

function renderSVG(text, textColor, shape, shapeColor) {
  console.log(`A ${shapeColor} ${shape} will be created with ${textColor} text that says ${text}!`);

  switch (shape) {
    case 'circle':
      return `<svg width="100" height="100">
                \n\t<circle cx="50" cy="50" r="40" fill="${shapeColor}" />
                \n\t<text x="50%" y ="50%" font-family="Arial" font-size="16" fill="${textColor}" \n\ttext-anchor="middle" dominant-baseline="middle">${text}</text>
              \n</svg>`;
    case 'square':
      return `<svg width="100" height="100">
                \n\t<rect width="100" height="100" fill="${shapeColor}" />
                \n\t<text x="50%" y ="50%" font-family="Arial" font-size="16" fill="${textColor}" \n\ttext-anchor="middle" dominant-baseline="middle">${text}</text>
              \n</svg>`;
    case 'triangle':
      return `<svg width="100" height="100">
                \n\t<polygon points="50,0 100,100 0,100" fill="${shapeColor}" />
                \n\t<text x="50%" y ="50%" font-family="Arial" font-size="16" fill="${textColor}" \n\ttext-anchor="middle" dominant-baseline="middle">${text}</text>
              \n</svg>`;
    default:
      console.log('Error creating shape, not all criteria provided.');
      return `<svg width="100" height="100">
                \n\t<text x="50%" y ="50%" font-family="Arial" font-size="16" fill="${textColor}" \n\ttext-anchor="middle" dominant-baseline="middle">${text}</text>
            \n</svg>`;
  }
}

module.exports = { renderSVG };
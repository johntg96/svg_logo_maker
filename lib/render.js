function renderSVG(text, textColor, shapeString) {

  return `<svg width="300" height="200">
          ${shapeString}
          \n\t<text x="50%" y ="50%" font-family="Arial" font-size="16" fill="${textColor}" \n\ttext-anchor="middle" dominant-baseline="middle">${text}</text>
          \n</svg>`;
}

module.exports = { renderSVG };
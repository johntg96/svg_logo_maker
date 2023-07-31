function renderSVG(text, textColor, shapeString) {

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shapeString}
          \n\t<text x="50%" y ="50%" font-family="Arial" font-size="40" fill="${textColor}" \n\ttext-anchor="middle" dominant-baseline="middle">${text}</text>
          \n</svg>`;
}

module.exports = { renderSVG };
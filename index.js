// index.js
const fs = require('fs');
const  { askQuestions } = require('./lib/questions');
const { renderSVG } = require('./lib/render');

async function main() {
  try {
    const shapeDescription = await askQuestions();
    console.log(shapeDescription);
    // Now the shape input is given back as an object, it can be used/accessed from here..
    // create colored shape here:
    renderSVG(shapeDescription.logoText, shapeDescription.logoTextColor, shapeDescription.logoShape, shapeDescription.logoBgColor);


  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
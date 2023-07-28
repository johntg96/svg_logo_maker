// index.js
const fs = require('fs');
const  { askQuestions } = require('./lib/questions');
const { createTriangle, createSquare, createCircle } = require('./lib/shapes');

async function main() {
  try {
    const shapeDescription = await askQuestions();
    console.log(shapeDescription);
    // Now the shape input is given back as an object, it can be used/accessed from here..
    
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
// index.js
const fs = require('fs');
const  { askQuestions } = require('./lib/questions');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { renderSVG } = require('./lib/render');
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

async function main() {
  try {
    // obtain svg criteria from user
    const shapeDescription = await askQuestions();
    console.log(shapeDescription);
    console.log(shapeDescription.logoShape[0]);

    let shape;
    
    // instantiate new obj depending on choice of shape
    if (shapeDescription.logoShape[0] == 'circle') {
      shape = new Circle(shapeDescription.logoBgColor);
    } else if (shapeDescription.logoShape[0] == 'square') {
      shape = new Square(shapeDescription.logoBgColor);
    } else if (shapeDescription.logoShape[0] == 'triangle') {
      shape = new Triangle(shapeDescription.logoBgColor);
    } else {
      outputCyanText('\nInvalid shape selection!\n');
    }

    console.log(shape);
    
    // set default file name
    if (shapeDescription.fileName === '') {
      shapeDescription.fileName = "logo";
    }

    // take the users svg criteria and render the SVG string
    svgString = renderSVG(shapeDescription.logoText, shapeDescription.logoTextColor, shape.render());

    // append file system directory to file name path
    svgFile = `./generated_SVG/${shapeDescription.fileName}.svg`;

    // create the svg file and write the string to it
    fs.writeFile(svgFile, svgString, (error) => {
      if (error) {
        throw error;
      } else {
        outputCyanText(`\nSVG created! ${shapeDescription.fileName}\n`);
      }
    });

  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
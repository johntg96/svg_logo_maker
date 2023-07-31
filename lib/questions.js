// questions.js
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = [
  {
    type: 'maxlength-input',
    name: 'logoText',
    message: "Logo Text: ",
    maxLength: 3
  },
  {
    type: 'input',
    name: 'logoTextColor',
    message: "Logo Text Color: "
  },
  {
    type: 'checkbox',
    name: 'logoShape',
    message: "Logo Shape: ",
    choices: ["circle", "triangle", "square"]
  },
  {
    type: 'input',
    name: 'logoBgColor',
    message: "Logo Color: "
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'File Name (if blank then "logo.svg" will be used): '
  }
];

function askQuestions() {
  return new Promise((resolve, reject) => {
    inquirer.prompt(questions)
      .then((shapeDescription) => {
        // console.log(shapeDescription);
        resolve(shapeDescription);
      })
      .catch((err) => reject(err));
  });
}


module.exports = { askQuestions };
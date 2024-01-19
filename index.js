const inquirer = require('inquirer');
const { Square, Circle, Triangle } = require('./lib/shapes.js');
const fs = require('fs');

//questions about logo
const questions = [{
    type: 'input',
    name: 'characters',
    message: 'Enter up to three characters'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'enter the color keyword or hexadecimal for the text'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'pick a shape for your logo',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'enter the color keyword or hexadecimal for the shape'
  },
];

//generates logo from answers and grabs object from shapes.js
function writeToFile(data) {
  let shapeObj = '';
  if(data.characters.length > 3){
    console.log('Please only input 3 characters');
    return;
  }
  if(data.shape === 'circle'){
    shapeObj = new Circle(data.shapeColor, data.textColor, data.characters);
  }
  if(data.shape === 'triangle'){
    shapeObj = new Triangle(data.shapeColor, data.textColor, data.characters);
  }
  if(data.shape === 'square'){
    shapeObj = new Square(data.shapeColor, data.textColor, data.characters);
  }

  let info = `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.shape()}
  </svg>`

  fs.writeFile('./examples/logo.svg', info, (err) =>
  err ? console.error(err) : console.log('Generated logo.svg'))
  };

  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile(answers);
      });
  }
  
  init();
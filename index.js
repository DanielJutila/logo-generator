import inquirer from 'inquirer';
import {Square, Circle, Triangle}  from './lib/shapes.js';
import fs from 'fs';

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

function writeToFile(data) {
  let logoText = data.characters;
  let squareObj = '';

  if(data.shape === 'circle'){
    squareObj = new Square(data.shapeColor);
  }
  if(data.shape === 'triangle'){
    squareObj = new Triangle(data.shapeColor);
  }
  if(data.shape === 'square'){
    squareObj = new Circle(data.shapeColor);
  }

  let info = `
  <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${squareObj.shape()}
    <text x="35" y="35" font-size="14" text-anchor="middle" fill="${data.textColor}">${logoText}</text>
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
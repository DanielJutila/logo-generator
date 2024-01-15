import inquirer from 'inquirer';
import generateShape from './lib/shapes.js';
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
    choices: ['circle', 'trianlge', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'enter the color keyword or hexadecimal for the shape'
  },
];

function writeToFile(data) {
  let info = generateShape(data);
  fs.writeFile('./examples/logo.svg', info, (err) =>
  err ? console.error(err) : console.log('Logo generated'))
  };

  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile(answers);
      });
  }
  
  init();
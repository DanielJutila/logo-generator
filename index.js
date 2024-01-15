const inquirer = require('inquirer');
const fs = require('fs');
const questions = [{
    type: 'input',
    name: 'characters',
    message: 'Ente up to three characters'
  },
  {
    type: 'input',
    name: 'color',
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
    name: 'color',
    message: 'enter the color keyword or hexadecimal for the shape'
  },
];

function writeToFile(data) {
    let info = generateMarkdown(data);
    fs.writeFile('logo.svg', info, (err) =>
      err ? console.error(err) : console.log('ReadMe Generated'))
  };

  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile(answers);
      });
  }
  
  init();
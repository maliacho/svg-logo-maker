// import necessary files and define global variables
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./lib/shapes')
const fs = require('fs');

// Ask user for input on logo design
const questions = [ 
    {
        type: 'list',
        message : 'What shape would you like your logo to be?',
        name : 'shapeInput',
        choices : [
            'Circle',
            'Square',
            'Triangle',
        ]
    }
    {
        type : 'input',
        message : 'What color would you like your logo to be?',
        name : 'colorInput',
    }
    {
        type : 'input',
        message : 'What text would you like displayed on your logo?',
        name : 'textInput',
    }
    {
        type: 'input',
        message : 'What color would you like the text to be?',
        name : 'textColorInput',
    }
];


function writeToFile (data) {
    fs.writeFile(`${fileName}.svg`, data, (err) => {
        err ? console.error(err) : console.log(`Your logo has been created.`)
    })
}

const init = () => {
    inquirer.prompt(questions)
      .then(writeToFile)
  };

  init();
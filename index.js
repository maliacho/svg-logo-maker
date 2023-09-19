// import necessary files and define global variables
const inquirer = require('inquirer')

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
];

const responseHandler = () => {

}

const init = (questionsArray, handlerFunction) => {
    inquirer
      .prompt(questionsArray)
      .then(handlerFunction)
  };

  init(questions, responseHandler)
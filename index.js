// import necessary files and define global variables
const inquirer = require('inquirer')

// Ask user for input on logo design
const questions = [
    .prompt([
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
])
]

// if the user 
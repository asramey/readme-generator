const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A title is required!")
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A description is required.")
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions on how to install your project.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Installation instructions are required.")
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should users know about the usage of your project?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please enter usage information.")
            }
        }        
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidelines for contributing to this project?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Contribution information is required, even if N/A!")
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email address.",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("An email is required.")
            }
        }
    }

];

// Write to README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your readme has been generated.")
    });
}

function init() {
    const responses = inquirer.prompt(questions);
    
}

// Function call to initialize app
init();

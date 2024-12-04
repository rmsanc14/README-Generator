// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'

//Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        }
    ]);
};

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Your README.md file has been generated.')
    );
}

// Create a function to initialize app
function init() {
    promptUser()
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();


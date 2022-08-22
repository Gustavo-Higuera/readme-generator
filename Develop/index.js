// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your first and last name?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'What is your LinkedIn URL?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation instructions of your project if there are any.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your project?',
      choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache 2.0']
    },
  ])

    .then((data) => {
      writeToFile("README.md",generateMarkdown(data));
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// Function call to initialize app
init();

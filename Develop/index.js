// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const mdFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// HEN I choose a license for my application from a list of options
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?'
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
    mdFile.generateMarkdown(data);
  })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Success!'))
// }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

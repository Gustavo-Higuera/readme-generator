// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "ISC":
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    case "GNU GPLv3":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    default:
      "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      "https://choosealicense.com/licenses/mit/"
      break;
    case "ISC":
      "https://choosealicense.com/licenses/isc/"
      break;
    case "GNU GPLv3":
      "https://choosealicense.com/licenses/gpl-3.0/"
      break;
    case "Apache 2.0":
      "https://choosealicense.com/licenses/apache-2.0/"
      break;
    default:
      "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const fileName = 'README.md';

  writeToFile(fileName, data);

  return `
  #**${data.title}**

  ## License

  ${data.license}

  ## Author
  
  **${data.name}**
  * GitHub: https://github.com/${data.username}
  * LinkedIn: ${data.linkedin}
  * Email: ${data.email}
  
  ## Description

  ${data.description}

  ## Installation:

  ${data.installation}
  
`
}

module.exports = generateMarkdown();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # **${data.title}**

  ## License
  ${renderLicenseBadge(data.license)}

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

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'GNU GPLv3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU GPLv3') {
    return `[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'Apache 2.0') {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'ISC') {
    return `[ISC License](https://opensource.org/licenses/ISC)`;
  } else {
    return '';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions about the repo, open an issue or contact [${data.github}](https://github.com/${data.github}) directly at ${data.email}.

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
`};

// // Example usage:
// const data = {
//   title: 'Project Title',
//   description: 'Project Description',
//   installation: 'npm install',
//   usage: 'npm start',
//   license: 'MIT',
//   contributing: 'Contributing Guidelines',
//   tests: 'npm test',
//   github: 'your-github-username',
//   email: 'your-email@example.com'
// };

// console.log(generateMarkdown(data));
export default generateMarkdown;
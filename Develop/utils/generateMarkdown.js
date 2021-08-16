// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${responses.title}
## Description
${responses.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Questions](#questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## License
${responses.license}

## Contribution
${responses.contribution}

## Questions
Have any questions?
[Find me here...](https://github.com/asramey)
[...or shoot me an email.](${responses.email})
`;
}

module.exports = generateMarkdown;

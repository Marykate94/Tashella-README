// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `
  # ${readmeData.title}

  ![badge](https://img.shields.io/badge/license-${readmeData.license}-blue)

  ## Description
  ${readmeData.description}

  ## Table of Contents
  - [Description](#description)
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Instructions 
  ${readmeData.instructions}

  ## Usage
  ${readmeData.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${readmeData.license}-blue)

  ## Contributors
  ${readmeData.contributors}

  ## Tests
  ${readmeData.test}

  ## Questions
  My name is ${readmeData.name}. Find my on GitHub using ${readmeData.github} or ${readmeData.link}. 
  Alternatively I can be reached via email at ${readmeData.contact}.
  he best way to reach me is via ${readmeData.reach}.
`;
}

module.exports = generateMarkdown;

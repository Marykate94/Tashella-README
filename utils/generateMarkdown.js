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

  
  ![GitHub license](https://img.shields.io/badge/license-${readmeData.license}-blue.svg)
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
  ${readmeData.license} 

 
  [Check out each licenses meaning](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository)

  ## Contributors
  ${readmeData.contributors}

  ## Tests
  ${readmeData.test}

  ## Questions
  Made by ${readmeData.name}. Find me on GitHub at https://github.com/${readmeData.github}. Alternatively I can be reached via email at ${readmeData.contact}.
  Instructions on how to reach me: ${readmeData.reach}
`;
}

module.exports = generateMarkdown;

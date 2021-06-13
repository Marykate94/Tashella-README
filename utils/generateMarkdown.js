// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}
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
      (https://img.shields.io/badge/dynamic/json?url=<URL>&label=License&query=${readmeData.license}&color=blue&prefix=<PREFIX>&suffix=<SUFFIX>)
      ## Contributors
      ${readmeData.contributors}
      ## Tests
      ${readmeData.test}
      ## Questions
      My name is ${readmeData.name}. Find my on GitHub using ${readmeData.github} or ${readmeData.link}. 
      Alternatively I can be reached via email at ${readmeData.contact}.
      The best way to reach me is via ${readmeData.reach}.
`;
}

module.exports = generateMarkdown;

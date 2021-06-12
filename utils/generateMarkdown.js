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
function generateMarkdown(data) {
  return `# ${data.title}
      ## Description
      ${promptReadme.description}
      ## Table of Contents
      - [Description](#description)
      - [Instructions](#instructions)
      - [Usage](#Usage)
      - [License](#License)
      - [Contributors](#Contributors)
      - [Tests](#Tests)
      - [Questions](#Questions)
      ## Instructions
      ${promptReadme.instructions}
      ## Usage
      ${promptReadme.usage}
      ## License

      ## Contributors
      ${promptReadme.contributors}
      ## Tests
      ${promptReadme.test}
      ## Questions
  
`;
}

module.exports = generateMarkdown;

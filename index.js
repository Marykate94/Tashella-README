// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// will need to create page-template file below
// const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is your GitHub profile link? (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub profile link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is your email address? (Required)',
            validate: contactInput => {
                if (contactInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'reach',
            message: 'How is it best to reach you? (Required)',
            validate: reachInput => {
                if (reachInput) {
                    return true;
                } else {
                    console.log('Please provide instructions on how to reach you!');
                    return false;
                }
            }
        }

    ]);
};

const promptReadme = readmeData => {
    console.log(`
    =============
    Add a Project
    =============
    `);

    if (!readmeData.projects) {
        readmeData.projects = [];
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a project title!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your application: (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a description of your application!');
                    return false;
                }
            }
        },
        // table of contents???
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running: (Required)',
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                    console.log('You need to provide installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. Include screenshots as needed: (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to provide instructions on how to use this application!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license/s did you use? (Check all that apply)',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'MIT License', 'Apache License 2.0', 'The Unlicense']
        },
        // add badge icon to licenses?
        {
            type: 'confirm',
            name: 'confirmContributors',
            message: 'Would you like others to contribute to this project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please provide collaboration guidelines for other contributors:',
            when: ({ confirmContributors }) => confirmContributors
        },
        {
            type: 'confirm',
            name: 'testsConfirm',
            message: 'Have you written tests for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide examples on how to run tests for your application:',
            when: ({ confirmTests }) => confirmTests
        }
    ]);
};

// questions section part of first array - place into HTML according to Questions section

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
              return console.log(err);
            }
          
            console.log("Success! Your README.md file has been generated")
        });
    }


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

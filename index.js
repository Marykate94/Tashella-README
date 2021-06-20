// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// const { writeFile, copyFile } = require('./readme-guide.md');

// TODO: Create an array of questions for user input
// created prompt readme array to loop through
const promptReadme = readmeData => {

     if (!readmeData) {
         readmeData = [];
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
            message: 'Please provide instructions and examples for use: (Required)',
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
            choices: ['GNU', 'Mozilla', 'MIT', 'Apache', 'Unlicense']
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
            name: 'confirmTests',
            message: 'Have you written tests for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide examples on how to run tests for your application:',
            when: ({ confirmTests }) => confirmTests
        },
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
    ])
    .then(readmeData => writeToFile('./README.md', generateMarkdown(readmeData)));
    // .then(projectData => {
    //     readmeData.push(projectData);
    //     if (projectData.testsConfirm) {
    //         return promptReadme(readmeData);
    //     } else {
    //     return readmeData;
    //     }
    // })
};

//  promptReadme() 
//  .then(fileName => {
//      return fs.writeFile(fileName)
//      .then(writeToFile => {
//          console.log(writeToFile);
//      })
//      .then(copy)
//  })


 // call write to file / make promises / basically init function within here. 
//         return generateMarkdown(readmeData);
//     })
    //  .then(readmeData => {
    //      return generateMarkdown(readmeData);
    //  })
    //  .then(pageHTML => {
    //      return writeFile(pageHTML);
    //  })
    //  .then(writeToFile => {
    //      console.log(writeToFile);
    //      return copyFile();
    //  })
    // .then(copy)
    //  promptReadme()
    //  .then(readmeData => {
    //  return generateMarkdown(readmeData);
    //  }

// TODO: Create a function to write README file
  function writeToFile(fileName, data) {

     fileName = 'README.md'
         fs.writeFile(fileName, data, err => {
             if (err) {
               return console.log(err);
             }
          
             console.log("YAY! Your README.md file has been generated")
         });
      }

      promptReadme() 

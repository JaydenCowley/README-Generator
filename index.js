// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// const readmeData = [];
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // project name
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project name. (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        // project Description
        //What does your application do?
        {
            type: 'input',
            name: 'description',
            message: 'What does your application do? (Required)',
            validate: purposeInput => {
                if (purposeInput) {
                    return true;
                } else {
                    console.log('Please, enter a description of what your application does!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any installation instructions need to run the application. (Required)',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please, enter installation instructions!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the application? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please, enter a description of what your application does!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'please enter any contribution instructions you have (Required)',
            validate: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please, enter any contribution instructions you have!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInsruct',
            message: 'Please enter any test instructions you have (Required)',
            validate: testInsruct => {
                if (testInsruct) {
                    return true;
                } else {
                    console.log('Please, enter any test instructions you have!')
                    return false;
                }
            }
        },
        //Why you used the technologies you used?
        {
            type: 'input',
            name: 'techInput',
            message: 'What technologies does your application use? (Required)',
            validate: techInput => {
                if (techInput) {
                    return true;
                } else {
                    console.log('Please, enter what technologies your application uses!')
                    return false;
                }
            }
        },
        //Some of the challenges you faced and features you hope to implement in the future.
        {
            type: 'input',
            name: 'challenges',
            message: 'What challenges did you face creating this application? (Required)',
            validate: challenges => {
                if (challenges) {
                    return true;
                } else {
                    console.log('Please, enter the challenges you faces creating this application!')
                    return false;
                }
            }
        },
        // // would you like to include a table of contents? Y/N
        // {
        //     type: 'confirm',
        //     name: 'tableOfContentsConfirm',
        //     message: 'Would you like to include a table of contents?',
        //     default: false
        // },
        // Are special instructions needed for use? Y/N
        {
            type: 'confirm',
            name: 'speclInstructConfirm',
            message: 'Does your application require special instructions before use?',
            default: false
        },
        // please enter instructions
        {
            type: 'input',
            name: 'speclInstruct',
            message: 'Please enter special instructions.',
            validate: speclInstruct => {
                if (speclInstruct) {
                    return true;
                } else {
                    console.log('Please, enter special instructions!')
                    return false
                }
            },
            when: ({ speclInstructConfirm }) => speclInstructConfirm
            
        },
        // would you like to include a screenshot? Y/N
        {
            type: 'confirm',
            name: 'screenshotConfirm',
            message: 'Would you like to include a screenshot?',
            default: false
        },
        // Please enter the relative path to your screenshot
        {
            type: 'input',
            name: 'screenshotInput',
            message: 'Please enter the relative path to your screenshot.',
            validate: screenshotInput => {
                if (screenshotInput) {
                    return true;
                } else {
                    console.log('Please, enter the relative path to your screenshot!')
                    return false;
                }
            },
            when: ({screenshotConfirm}) => screenshotConfirm
        },
        // What is the link you your published application?
        {
            type: 'input',
            name: 'linkInput',
            message: 'Enter the link to your published application.',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please, enter a link to your published application!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Does your project require any licenses?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'licenseInput',
            message: 'What licenses does your project need?(Check all that apply)',
            choices: ['Apache_2.0', 'Boost_1.0', 'BSD_3--Clause','BSD_2--Clause', 'EPL_1.0', 'GPLv3', 'GPL_v2', 'AGPL_v3', 'FDL_v1.3', 'MIT', 'MPL_2.0', 'Perl', 'SIL', 'The Unlicense', 'WTFPL', 'Zlib'],
            when: ({licenseConfirm}) => licenseConfirm,
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please, select one license!')
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'githubUserName',
            message: 'Enter your github username.',
            validate: githubUserName => {
                if (githubUserName) {
                    return true;
                } else {
                    console.log('Please, enter your Github Username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailInput',
            message: 'Enter your email.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please, enter email so if people have questions about your application they can contact you!')
                    return false;
                }
            }
        }
          
    ])
    .then((answer) => {
        
       var readmeData = generateMarkdown(answer);
        writeToFile(readmeData)
    })
};

// TODO: Create a function to write README file
const writeToFile = (readmeData) => {
    fs.writeFile('genREADME.md', readmeData, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
// function init() {
//     questions()
//     //.then writeToFile(README.md,readmeData)
    
// }

// // Function call to initialize app
questions();

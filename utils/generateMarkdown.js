// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## table of contents
  [Description](README.md/#description)  
  [Installation](README.md/#installation)  
  [Usage](README.md/#usage)  
  [License](README.md/#license)  
  [Contributing](README.md/#contribution)  
  [Questions](README.md/#questions)  
  ## License
  [![License](https://img.shields.io/badge/License-${data.licenseInput}-blue.svg)](https://opensource.org/licenses/${data.licenseInput})
  ## Description
  ${data.description}

  ### Installation Instructions
  ${data.installation}
  
  ### Usage
  ${data.usage}

  ### Contribution
  ${data.contribution}

  ### Test Instructions
  ${data.testInstruct}

  ## Technologies
  ${data.techInput}

  ## Challenges
  ${data.challenges}
  
  ## Special Instructions
  ${data.speclInstruct}


  ![Alt text](${data.screenshotInput})
  ## link to live application
  ${data.linkInput}

  ## Questions
  - [My Github account](https://github.com/${data.githubUserName})
  - [Contact me via email](${data.emailInput})
`;
}

module.exports = generateMarkdown;

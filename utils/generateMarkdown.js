// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Technologies
  ${data.techInput}

  ## Challenges
  ${data.challenges}
  
  ## Special Instructions
  ${data.speclInstruct}
  
  ## License
  ${data.licenseInput}
  [![License](https://img.shields.io/badge/License-${data.licenseInput}-blue.svg)](https://opensource.org/licenses/${data.licenseInput})

  ## Credits
  ${data.creditInput}

  ## link to live application
  ${data.linkInput}
`;
}

module.exports = generateMarkdown;

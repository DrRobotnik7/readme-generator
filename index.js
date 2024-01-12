const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); // https://www.w3schools.com/nodejs/ref_path.asp
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
.prompt([
    {
    type: 'input',
    message: 'What is the title of your project',
    name: 'title',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn profile?',
        name: 'LinkedIn',
    },
])
.then((response) => {
fs.appendFile(`${response.title}-README.md`,
`
# ${response.title} README ${response.license.icon}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

${response.questions}

` , (err) =>
err ? console.error(err) : console.log('README created!')
)});

// I have made up ${response.license.icon} at the top of the readme, need to work out how to make that an icon
// Need to add more code in the license section so it includes information on the selected licence - make an object of licences with descriptions i.e. licences [
    // {
    // name: MIT
    // description: 
    // }
    // {
    // name:
    // description:
    // }
    // {
    // name:
    // description:
    // }
    // ]



// When a user enters the project title then it is displayed as the title of the README
// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README





// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

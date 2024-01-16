const inquirer = require('inquirer');
const fs = require('fs');

// This function uses a switch statement to fetch the badge of the chosen license
fetchLicenseBadge = (response) => {
switch(response) {
    case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
    case "GPL 3.0":
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
    case "Apache 2.0":
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
    case "BSD 3":
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        break;
    default:
        licenseBadge = ""
}}

// This function alters the text shown in the license section depending on which license is chosen, if any
setLicenseInfo = (response) => {
    if (response === "Unlicensed") {
        licenseInfo = "Unlicensed"
    } else {
        licenseInfo = `Distributed under the ${response} License. For more information visit https://choosealicense.com/.`
    }
}

// This function alters the text shown in the contributing section depending on whether the user opts in or out
setContributionInfo = (response) => {
    if (response === "Yes") {
        contributionInfo = 
`Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.\n
If you have a suggestion that would make this better, please fork the repo and create a pull request.
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request`
    } else {
        contributionInfo = "No contributions please!"
    }
}

// This is the main logic which contains the questions and generates the readme
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Would you like other developers to be able to contribute to your project?',
        choices: [
        {
            name: "Yes"
        },
        {
            name: "No"
        },
        ],
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please choose which license you would like to use, if any:',
        choices: [
            {
                name: "MIT"
            },
            {
                name: "Apache 2.0"
            },
            {
                name: "GPL 3.0"
            },
            {
                name: "BSD 3"
            },
            {
                name: "Unlicensed"
            }
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username so developers can contact you with questions about your application:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide your email address so developers can contact you with questions about your application:',
        name: 'email',
    },
])
.then((response) => {
fetchLicenseBadge(response.license) // Calls the fetch licence badge function, passing response.license as an argument
setLicenseInfo(response.license) // Calls the set licence info function, passing response.license as an argument
setContributionInfo(response.contribution) // Calls the function, passing response.contribution as an argument
fs.writeFile(`${response.title}-README.md`, // Generates a readme using a template literal with embedded expressions
`
# ${response.title} README ${licenseBadge}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${licenseInfo}

## Contributing

${contributionInfo}

## Tests

${response.tests}

## Questions

If you have any questions about the application then please feel free to contact me:\n
Email: ${response.email}\n
GitHub: ${response.github}
` , (err) =>
err ? console.error(err) : console.log('README created!')
)});
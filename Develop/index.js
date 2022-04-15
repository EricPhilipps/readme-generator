// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    'What would you like the title of your README to be?',
    'What is the description of your program?',
    'What installation instructions would you like to include?',
    'What usage information would you like to include?',
    'What contribution guidelines would you like to include?',
    'What test instructions would youb like to include?',
    'What license badge would you like to include?',
    'What is your GitHub username?',
    'What is your email address?',
    'How would you like someone to reach you with questions?',
];

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: questions[2],
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: questions[3],
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: questions[4],
    },
    {
        type: 'input',
        name: 'testInstruct',
        message: questions[5],
    },
    {
        type: 'input',
        name: 'githubUser',
        message: questions[7],
    },
    {
        type: 'input',
        name: 'email',
        message: questions[8]
    },
    {
        type: 'input',
        name: 'contactInstruct',
        message: questions[9]
    },
    ]);
}

// TODO: Create a function to write README file
const writeToFile = ({title, description, installationGuide, usageInfo, contributionGuide, testInstruct, gitHubUser, email, contactInstruct}) =>
    `
#${title}
##Table of Contents
### [Description](#description)

### [Installation Guidelines](#installation-guidelines)

### [Usage Information](#usage-information)

### [Contribution Guidelines](#contribution-guidelines)

### [Test Instructions](#test-instructions)

### [Questions](#questions)


---

##Description

${description}

---

##Installation Guidelines

${installationGuide}

---

##Usage Information

${usageInfo}

---

##Contribution Guidelines

${contributionGuide}

---

##Test Instructions

${testInstruct}

---

## Questions

GitHub: https://github.com/${gitHubUser}

Email Address : ${email}

### How to Reach Me

${contactInstruct}
    `;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((input) => fs.writeFileSync('generatedREADME.md', writeToFile(input)))
        .then(() => console.log('Successfully wrote to file: generatedREADME.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();

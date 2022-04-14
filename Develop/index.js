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
    'How would you like someone to reach dyou with questions?',
];

const promptUser = () => {
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
    }

}

// TODO: Create a function to write README file
function writeToFile({title, description, installationGuide, usageInfo, contributionGuide, testInstruct, gitHubUser}) =>
    `
    <h1 align="center">${title}</h1>

---

<h1 align="center">Description</h1>

<p align="center">${description}</p>

---

<h1 align="center">Installation Guidelines</h1>

<p align="center">${installationGuide}</p>

---

<h1 align="center">Usage Information</h1>

<p align="center">${usageInfo}</p>

---

<h1 align="center">Contribution Guidelines</h1>

<p align="center">${contributionGuide}</p>

---

<h1 align="center">Test Instructions</h1>

<p align="center">${testInstruct}</p>

---

<h1 align="center">Questions</h1>

<p align="center">
<a href="https://github.com/${gitHubUser}">GitHub Link</a>
Email Address : ${email}
</p>

<h2 align="center">How to reach me<h2>
<p align="center">${contactInstruct}<p>
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

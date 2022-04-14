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
    'What is your email address?'
];



// TODO: Create a function to write README file
function writeToFile({title, description, installationGuide, usageInfo, contributionGuide, testInstruct, gitHubUser}) {
    `
    <h1 align="center">${title}</h1>
<h1 align="center"></h1>
<h2 align="center">Technologies Used</h1>

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

<h2 align="center">Github Repo for Genre-Finder</h2>
<p align="center"><a href="https://github.com/StuMartin22/genre-finder">https://github.com/StuMartin22/genre-finder</a></p>

---

<h1 align="center">Link to Github</h1>

<p align="center"><a href="https://github.com/${gitHubUser}">GitHub Link</a></p>
    `
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require(".utils/generateMarkdown");
const { error } = require("console");
const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [

    {
        message: "What is your Github name?",
        name: "gitUserName",
        type: "input"
    }, {
        message: "What is your project title?",
        name: "projectTitle",
        type: "input"
    }, {
        message: "Please enter the name of your repository",
        name: "gitRepository",
        type: "input"
    }, {
        message: "Are there any other contributors?",
        name: "projectContributors",
        type: "input"
    }, {
        message: "What are the usage instructions?",
        name: "projectInstructions",
        type: "input"
    }, {
        message: "What kind of framework was used?",
        name: "projectFramework",
        type: "input"
    }


];

// function to write README file
const writeToFile = (userAnswers, data) => {
    fs.writeFile('README.md', generateMarkdown(userAnswers, data), (error) => {
        if (error) throw error;
        console.log('File saved!')
    })
};

writeToFile(userAnswers)
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require('inquirer')

//prompt questions

const managerQuestions = [
    {
        type:'input',
        message: 'What is the managers name?',
        name:'managerName'
    },
    {
        type:'input',
        message: 'What is the managers id?',
        name:'managerId'
    },
    {
        type:'input',
        message: 'What is the managers email?',
        name:'managerEmail'
    },
    {
        type:'input',
        message: 'What is the managers office number?',
        name:'managerOfficeNumber'
    }
];



const init = () => {
    inquirer
        .prompt(managerQuestions)
}

init();
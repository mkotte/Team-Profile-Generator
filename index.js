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
const employeeQs = [

]

const generateNewTeam = (data) => {
    fs.writeFile('./dist/index.html', 
    `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                />
            </head>
            <body>
                <main class="jumbotron">
                    <div class="col-3">
                        <div class="card">
                            <div class="card-header">
                                <h2>${data.name}</h2>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>ID: ${data.id}</li>
                                    <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                                    <li>Office number: ${data.officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    `, (err) => {if (err) {throw err}});
};

const addNextEmployee = () => {
    inquirer 
        .prompt(employeeQs)
        .then((answers) =>{
            switch (answers.role) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    fs.appendFile('.dist/index.html', `
                            </section>
                        </body>
                    </html>`
                    , (err) => {if (err) {throw err} else console.log('Successfully appended!')}) ;
            }
        });
};

const addEngineer = () => {};

const addIntern = () => {};

const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((answers) =>{ 
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            generateNewTeam(manager);
            addNextEmployee();
        });
};

init();
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
    {
        type:'list',
        message: 'What type of Employee would you like to add?',
        name:  'role',
        choices:['Engineer', 'Intern', 'Actually I am finished!']
    },
];

const internQuestions = [
    {
        type:'input',
        message: 'What is the interns name?',
        name:'name'
    },
    {
        type:'input',
        message: 'What is the interns id?',
        name:'id'
    },
    {
        type:'input',
        message: 'What is the interns email?',
        name:'email'
    },
    {
        type:'input',
        message: 'What is the interns school name?',
        name:'school'
    }
];

const engineerQuestions = [
    {
        type:'input',
        message: 'What is the engineers name?',
        name:'name'
    },
    {
        type:'input',
        message: 'What is the engineers id?',
        name:'id'
    },
    {
        type:'input',
        message: 'What is the engineers email?',
        name:'email'
    },
    {
        type:'input',
        message: 'What is the github engineers username?',
        name:'github'
    }
];

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
                <main class="jumbotron vh-100" style="display:flex; justify-content:center;">
                    <div class="col-3">
                        <div class="card">
                            <div class="card-header">
                                <h2>${data.name}</h2>
                                <h2>Manager</h2>
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
    `, err => {
        err ? console.log(err) : console.log("Success!!")
    });
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
                    fs.appendFile('./dist/index.html', 
`        </section>
    </body>
</html>`,
                     err => {
                        err ? console.log(err) : console.log("Goodbye!!")
                    });
            }
        });
};

const addEngineer =() => {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            generateEngineer(engineer);
            addNextEmployee();
        });
};

const generateEngineer = (data) => {
    fs.appendFile('./dist/index.html',
        `<div class="col-3">
            <div class="card">
                <div class="card-header">
                    <h2>${data.name}</h2>
                    <h2>Engineer</h2>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.id}</li>
                        <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li>GitHub Username: ${data.github}</li>
                    </ul>
                </div>
            </div>
        </div>`, err => {
            err ? console.log(err) : console.log("Success!!") 
        });
};



const addIntern =() => {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            generateIntern(intern);
            addNextEmployee();
        });
};

const generateIntern = (data) => {
    fs.appendFile('./dist/index.html',
        `<div class="col-3">
            <div class="card">
                <div class="card-header">
                    <h2>${data.name}</h2>
                    <h2>Intern</h2>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.id}</li>
                        <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li>School: ${data.school}</li>
                    </ul>
                </div>
            </div>
        </div>`, err => {
        err ? console.log(err) : console.log("Success!!") 
    });
};

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
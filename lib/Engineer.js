const Employee = require("./lib/Employee");

class Engineer extends Employee{
    constructor(github){
        this.github = github;
    };

    getGithub(){
        return this.github;
    };

    getRole(){
        return "Engineer";
    };
};

module.exports = Engineer;
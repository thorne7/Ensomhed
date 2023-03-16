const Employee = require('./Employee');
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    async promptEngineer() {
        const answer = await inquirer.prompt([{
            type: 'input',
            name: 'Github',
            message: 'What is the Engineers Github name?',
        }]);
            this.github = answer.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }


};

module.exports = Engineer;
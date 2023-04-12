const Employee = require('./Employee');
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    async promptIntern() {
        const answer = await inquirer.prompt([{
            type: 'input',
            name: 'School',
            message: 'What is the school for the Intern?',
        }]);
            this.school = answer.school;
            return this;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

};

module.exports =  Intern;
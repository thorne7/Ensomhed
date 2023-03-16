const Employee = require("./Employee");
// const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    async promptManager() {
        const answer = await inquirer.prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manager\'s office number?',
        }]);
            this.officeNumber = answer.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager"
    };

};

module.exports = Manager;
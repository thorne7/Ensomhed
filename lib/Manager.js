const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    promptManager() {
        return inquirer.prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Manager\'s office number?',
        }]).then(answer => {
            this.officeNumber = answer.officeNumber;
        });
    }

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager"
    };

};

module.exports = Manager;
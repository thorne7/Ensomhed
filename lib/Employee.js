const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    promptEmployee(name, id, email) {
        const {
            name,
            id,
            email,
        } = inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the Employee\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Employee\'s ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Employee\'s email?',
            },
        ]);

        return new Employee(name, id, email);

    }
    
    welcome() {
        console.log(`Welcome new ${this.name}!`);
    }
}

module.exports = Employee

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }

    getRole() {
        return 'Employee';
    }

    promptEmployee(answers) {
        const {
            name,
            id,
            email,
            role,
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
            {
                type: 'list',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ]);

        return new Employee(answers);

    }
    
    welcome() {
        console.log(`Welcome new ${this.name}!`);
    }
};

module.exports = Employee;

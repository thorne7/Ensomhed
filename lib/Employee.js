const inquirer = require("inquirer");


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

    async promptEmployee() {
        const answers = await inquirer.prompt([{
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


    }

    welcome() {
        console.log(`Welcome new ${this.name}!`);
    }
};

module.exports = Employee;
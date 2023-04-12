const inquirer = require("inquirer");

// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// const Manager = require("./Manager");

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

        let employee;
        switch (answers.role) {
            case "Manager":
                const managerAnswers = await Manager.promptManager();
                employee = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
                break;
            case "Engineer":
                const engineerAnswers = await Engineer.promptEngineer();
                employee = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);
                break;
            case "Intern":
                const internAnswers = await Intern.promptIntern();
                employee = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
                break;
            default:
                throw new Error(`Invalid role: ${answers.role}`)
        };

        return employee;
    }

    welcome() {
        console.log(`Welcome new ${this.name}!`);
    }
};

module.exports = Employee;
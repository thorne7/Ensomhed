const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee").default.default;
const Engineer = require("./lib/Engineer").default;
const Intern = require("./lib/Intern").default;
const Manager = require("./lib/Manager");

const employee = new Employee();

Employee.welcome();

Employee.promptEmployee();

const manager = new Manager();
inquirer.prompt(manager.questions)
  .then((answers) => {
    console.log('Manager answers:', answers);
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  })
  .catch((error) => {
    console.error(error);
  });

const engineer = new Engineer();
inquirer.prompt(engineer.questions)
  .then((answers) => {
    console.log("engineer answers:", answers);
    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  })
  .catch((error) => {
    console.error(error);
  });

const intern = new Intern();
inquirer.prompt(intern.questions)
  .then((answers) => {
    console.log("intern answers:", answers);
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
  })
  .catch((error) => {
    console.error(error);
  });
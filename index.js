const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employee = new Employee();

Employee.welcome();

Employee.promptEmployee();

const manager = new Manager();
inquirer.prompt(manager.questions)
  .then((answers) => {
    console.log('Manager answers:', answers);
    // do something with the answers, e.g. send them to a web page
  })
  .catch((error) => {
    console.error(error);
  });

const engineer = new Engineer();
inquirer.prompt(engineer.questions)
  .then((answers) => {
    console.log("engineer answers;", answers);
  })
  .catch((error) => {
    console.error(error);
  });

  const intern =new Intern();
  inquirer.prompt(intern.questions)
  .then((answers) => {
    console.log("intern answers", answers);
  })
  .catch((error) => {
    console.error(error);
  })
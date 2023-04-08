const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee") ;
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



async function init() {
const employee = new Employee();
employee.welcome();

await employee.promptEmployee();

switch (answers.role) {
  case "Manager":
      return Manager.promptManager(answers);
  case "Engineer":
      return Engineer.promptEngineer(answers);
  case "Intern":
      return Intern.promptIntern(answers);
  default:
      throw new Error(`Invalid role: ${answers.role}`)
};


};

init();

// const employee = new Employee();
// inquirer.prompt(employee.questions)
//   .then((answers) => {
//     console.log('Employee answers:', answers);
//     const newEmployee = new Employee(answers.name, answers.id, answers.email, answers.role);
//   })
//   .catch((error) => {
//     console.error(error + "employee");
//   });


// const manager = new Manager();
// inquirer.prompt(manager.questions)
//   .then((answers) => {
//     console.log('Manager answers:', answers);
//     const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//   })
//   .catch((error) => {
//     console.error(error + "manager");
//   });

// const engineer = new Engineer();
// inquirer.prompt(engineer.questions)
//   .then((answers) => {
//     console.log("engineer answers:", answers);
//     const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
//   })
//   .catch((error) => {
//     console.error(error + "Engineer");
//   });

// const intern = new Intern();
// inquirer.prompt(intern.questions)
//   .then((answers) => {
//     console.log("intern answers:", answers);
//     const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
//   })
//   .catch((error) => {
//     console.error(error + "Intern");
//   });

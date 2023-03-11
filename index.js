const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

import { Employee } from "./lib/Employee";
import { Engineer } from "./lib/Engineer";
import { Intern } from "./lib/Intern";
import { Manager } from "./lib/Manager";

const employee = new Employee(Manager, Engineer, Intern);

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



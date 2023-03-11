// const Employee = require("./Employee")

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber) {
//         super(name, id);
//         this.email = email;
//         this.officeNumber = officeNumber;
//     }

//     promptManager(officeNumber) {
//         const {
//             officeNumber
//         } = inquirer.propmt([{
//             type: 'input',
//             name: 'Office Number',
//             message: 'what is the Manger/s Office Number',
//         }]);
//         return new Manager(officeNumber)
//     }

//     getRole() {
//         return "Manager"
//     };

//     getOfficeNumber() {
//         return this.officeNumber;
//     }

// }
// module.exports = {
//     Manager
// };
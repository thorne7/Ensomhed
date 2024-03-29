// name

// id 

// email 

// getName()

// getId ()

// getEmail()

// getRole() // Returns 'Employee'

const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Create an Employee object", () => {
        it("should create an Employee object with name, id, email properties", () => {
            const employee = new Employee("John Doe", "001", "johndoe@test.com", "Manager");
            expect(employee.name).toEqual("John Doe");
            expect(employee.id).toEqual("001");
            expect(employee.email).toEqual("johndoe@test.com");
            expect(employee.role).toEqual("Manager");
        });
    });
});

// module.exports = Employee;

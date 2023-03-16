// officeNumber

// getRole()

const Manager = require("../lib/Manager.js");


describe("Manager", () => {
    describe("Create a Manager object", () => {
      it("should create a Manager object with name, id, email and office number properties", () => {
        const manager = new Manager("John Smith", "001", "johnsmith@test.com", "101");
        expect(manager.name).toEqual("John Smith");
        expect(manager.id).toEqual("001");
        expect(manager.email).toEqual("johnsmith@test.com");
        expect(manager.officeNumber).toEqual("101");
      });
    });
});

// module.exports = Manager;
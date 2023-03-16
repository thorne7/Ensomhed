// school 

// getSchool()

// getRole() // Overridden to return 'Intern'

const Intern = require("../lib/Intern.js");


describe("Intern", () => {
    describe("Create an Intern object", () => {
      it("should create an Intern object with name, id, email and school properties", () => {
        const intern = new Intern("Bob Smith", "003", "bobsmith@test.com", "University of Arizona");
        expect(intern.name).toEqual("Bob Smith");
        expect(intern.id).toEqual("003");
        expect(intern.email).toEqual("bobsmith@test.com");
        expect(intern.school).toEqual("University of Arizona");
      });
    });
  });

// module.exports = Intern;

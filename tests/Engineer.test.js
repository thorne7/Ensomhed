// github

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("create an Engineer object", ()  => {
    it("should create an Engineer object with name, id, email and github properties", () => {
      const engineer = new Engineer("Paul Smith", "002", "paulsmith@test.com", "psmit");
      expect(engineer.name).toEqual("Paul Smith");
      expect(engineer.id).toEqual("002");
      expect(engineer.email).toEqual("paulsmith@test.com");
      expect(engineer.github).toEqual("psmit");
    });
  });
});

// module.exports = Engineer;
 
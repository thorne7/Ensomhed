// github

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("John Doe", "001", "johndoe@test.com", "johndoe");

      expect(engineer.name).toEqual("John Doe");
      expect(engineer.id).toEqual("001");
      expect(engineer.email).toEqual("johndoe@test.com");
      expect(engineer.github).toEqual("johndoe");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {
    it("should return the engineer's Github username", () => {
      const engineer = new Engineer("John Doe", "001", "johndoe@test.com", "johndoe");

      expect(engineer.getGithub()).toEqual("johndoe");
    });
  });
});

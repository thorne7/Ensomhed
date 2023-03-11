// github

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the engineer's Github username", () => {
      const testGithub = "testGithub";
      const engineer = new Engineer("Test Name", 1, "test@example.com", testGithub);
      expect(engineer.getGithub()).toBe(testGithub);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const testRole = "Engineer";
      const engineer = new Engineer("Test Name", 1, "test@example.com", "testGithub");
      expect(engineer.getRole()).toBe(testRole);
    });
  });
});

module.exports = Engineer;

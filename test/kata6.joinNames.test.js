const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const nameObj = [{
      name: "Bart"
    }, {
      name: "Lisa"
    }, {
      name: "Maggie"
    }]
    expect(joinNames(nameObj)).toBe("Bart, Lisa & Maggie")
  });
});

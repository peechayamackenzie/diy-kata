const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours")
    expect(reachDestination(83, 10)).toBe("I should be there in 8.5 hours")
    expect(reachDestination(93, 11)).toBe("I should be there in 8.5 hours")
  });
});

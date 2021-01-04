const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("To return Boolean value True & False to Yes & No", () => {
    expect(booleanToWord(true)).toMatch("Yes");
    expect(booleanToWord(false)).toMatch("No");
  });
});

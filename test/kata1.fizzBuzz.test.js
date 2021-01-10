const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual(Fizz);
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual(Buzz);
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual(fizzBuzz);
    expect(fizzBuzz(30)).toEqual(fizzBuzz);
    expect(fizzBuzz(60)).toEqual(fizzBuzz);
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(26)).toEqual(26);
    expect(fizzBuzz(17)).toEqual(17);
    expect(fizzBuzz(31)).toEqual(31);
  });
});

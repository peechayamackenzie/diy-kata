const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () =>{
    test("returns array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
    });
});

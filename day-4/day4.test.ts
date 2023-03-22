const cleanupCalculator = require(".");

describe("Day 4 Tests", () => {
    const cases = [
        [1, './day-4/simple-example.txt', 2],  [1, './day-4/example.txt', 500], 
    [2, './day-4/simple-example.txt', 4], [2, './day-4/example.txt', 815]
];

    test.each(cases)(
        "Part %p using %s example, returns %p", (part, filename, expectedResult) => {
            let result = cleanupCalculator(filename, part)
            expect(result).toEqual(expectedResult);
        }
    );
});

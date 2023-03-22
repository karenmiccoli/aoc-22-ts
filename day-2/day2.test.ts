const calculateScore = require(".");

describe("Day 2 Tests", () => {
    const cases = [[1, './day-2/simple-example.txt', 15],  [1, './day-2/example.txt', 14069], [2, './day-2/simple-example.txt', 12], [2, './day-2/example.txt', 12411]];

    test.each(cases)(
        "Part %p using %s example, returns %p", (part, filename, expectedResult) => {
            let result = calculateScore(filename, part)
            expect(result).toEqual(expectedResult);
        }
    );
});
